import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import Colors from '../../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { defaultStyles } from '@/constants/Styles';
import { useEffect, useState } from 'react';
import useTipStore from '@/store/tipStore';
import useEventStore from '@/store/eventStore';
import { getTWUEvents, getTips } from '@/api/api';
import useLoadingStore from '@/store/loadingStore';

type Props = {};

export const Search = (props: Props) => {
  const [search, setSearch] = useState('');
  const { setEvents } = useEventStore();
  const { setTips } = useTipStore();
  const { setLoading } = useLoadingStore();

  const [timeoutToClear, setTimeoutToClear] = useState<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutToClear !== null) {
        clearTimeout(timeoutToClear as ReturnType<typeof setTimeout>);
      }
    };
  }, []);

  const fakeDelay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const debounce = (callback: (...args: any[]) => void, alwaysCall: (...args: any[]) => void, ms: number) => {
    return (...args: any[]) => {
      alwaysCall(...args);
      clearTimeout(timeoutToClear as ReturnType<typeof setTimeout>);
      setTimeoutToClear(
        setTimeout(() => {
          callback(...args);
        }, ms)
      );
    };
  };

  const setSearchTextAlways = (text: string) => {
    setSearch(text);
  };

  const searchFruits = async (text: string) => {
    setSearch(text);
    await fakeDelay(1000);
    getTips(search)
      .then((data) => {
        setTips(data);
      })
      .finally(() => setLoading(false));
    getTWUEvents(search)
      .then((data) => {
        setEvents(data);
      })
      .finally(() => setLoading(false));
  };

  const debouncedSearchFruits = debounce(searchFruits, setSearchTextAlways, 500);

  return (
    <View style={[styles.container, defaultStyles.container]}>
      <TextInput
        value={search}
        onChangeText={debouncedSearchFruits}
        placeholder='Search...'
        style={defaultStyles.inputField}
      />
      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>
          <FontAwesome size={16} name='search' /> Search
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
});

export default Search;
