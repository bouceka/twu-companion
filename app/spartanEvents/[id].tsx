// @flow
import { View, Text, ScrollView, } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import useEventStore from '@/store/eventStore';
import { SPARTAN_EVENTS_MOCK } from '@/types/spartanEvent';
import { getUSDate } from '@/utils/utils';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as React from 'react';
import { Image, StyleSheet,  useColorScheme } from 'react-native';

const SpartanEventDetail = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const event = SPARTAN_EVENTS_MOCK.find((event) => event.id === Number(id));
  const colorScheme = useColorScheme();

  if (event === undefined) {
    router.back();
    return (
      <View>
        <Text>Not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.layout} style={[defaultStyles.container]}>
      <Text style={styles.heading}>{event.description}</Text>
      <View style={styles.categories}>
          <Text
            style={[styles.category, { backgroundColor: Colors[colorScheme ?? 'light'].socialGrey }]}
          >
            {event.category}
          </Text>
      </View>
      <Text style={styles.description}>
        Starts at: <Text style={defaultStyles.bold}>{event.startDate}</Text>
      </Text>
      <Text style={styles.description}>
        Ends at: <Text style={defaultStyles.bold}>{event.endDate}</Text>
      </Text>
      <Text style={styles.description}>{event.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 5,
    width: undefined,
    height: 160,
    objectFit: 'cover',
  },
  heading: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: '700',
  },
  layout: {
    rowGap: 16,
  },
  categories: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  description: {
    fontSize: 20,
  },
  category: {
    paddingHorizontal: 8,
    lineHeight: 22,
  },
});

export default SpartanEventDetail;
