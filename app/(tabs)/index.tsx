import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import EventTable from '@/components/EventTable/EventTable';
import { EVENTS_MOCK } from '@/types/event';
import useEventStore from '@/store/eventStore';
import { useEffect, useLayoutEffect } from 'react';
import { getTWUEvents } from '@/api/api';
import useLoadingStore from '@/store/loadingStore';
import SearchBar from '@/components/SearchBar/SearchBar';

export default function HomeScreen() {
  const { events, setEvent } = useEventStore();
  const { isLoading, setLoading } = useLoadingStore();

  useEffect(() => {
    setLoading(true);
    getTWUEvents()
      .then((data) => {
        setEvent(data);
      })
      .finally(() => setLoading(false));
  }, [setEvent]);

  return (
    <ScrollView>
      <View>
        <SearchBar />
        <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
        <EditScreenInfo path='app/(tabs)/index.tsx' />
        {isLoading && events.length == 0 ? <Text>Loading...</Text> : <EventTable data={events} />}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
