import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import EventTable from '@/components/eventTable/EventTable';
import { EVENTS_MOCK } from '@/types/event';
import useEventStore from '@/store/eventStore';
import { useEffect, useLayoutEffect } from 'react';
import { ScrollView, Spinner } from '@gluestack-ui/themed';
import { getTWUEvents } from '@/api/api';
import useLoadingStore from '@/store/loadingStore';

export default function HomeScreen() {
  const { events, setEvent } = useEventStore();
  const { isLoading, setLoading } = useLoadingStore();

  useLayoutEffect(() => {
    setLoading(true);
    getTWUEvents()
      .then((data) => {
        setEvent(data);
      })
      .finally(() => setLoading(false));
  }, [setEvent]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
      <EditScreenInfo path='app/(tabs)/index.tsx' />
      {isLoading && events.length == 0 ? <Spinner size="large" /> : <EventTable data={events} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
