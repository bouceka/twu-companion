import { ScrollView, StyleSheet, Text, View } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import EventTable from '@/components/EventTable/EventTable';
import { EVENTS_MOCK } from '@/types/event';
import useEventStore from '@/store/eventStore';
import { useEffect, useLayoutEffect } from 'react';
import { getTWUEvents, getTips } from '@/api/api';
import useLoadingStore from '@/store/loadingStore';
import useTipStore from '@/store/tipStore';
import TipTable from '@/components/Tips/TipsTable';
import { defaultStyles } from '@/constants/Styles';
import Search from '@/components/Search/Search';

export default function HomeScreen() {
  const { events, setEvents } = useEventStore();
  const { tips, setTips } = useTipStore();
  const { isLoading, setLoading } = useLoadingStore();

  useEffect(() => {
    setLoading(true);
    getTWUEvents()
      .then((data) => {
        setEvents(data);
      })
      .finally(() => setLoading(false));
  }, [setEvents]);

  useEffect(() => {
    setLoading(true);
    getTips()
      .then((data) => {
        setTips(data);
      })
      .finally(() => setLoading(false));
  }, [setTips]);

  return (
    <ScrollView contentContainerStyle={{ gap: 8, marginBottom: 8 }} style={{ backgroundColor: '#fff' }}>
      <View style={[styles.header, defaultStyles.container]}>
        <Text style={styles.subHeading}>Welcome to</Text>
        <Text style={styles.heading}>TWU Companion</Text>
      </View>
      <Search />
      {isLoading && events.length == 0 ? <Text>Loading...</Text> : <EventTable data={events.slice(0, 5)} />}
      {isLoading && tips.length == 0 ? <Text>Loading...</Text> : <TipTable data={tips.slice(0, 5)} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 8,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
