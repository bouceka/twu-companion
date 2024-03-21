// @flow
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import useEventStore from '@/store/eventStore';
import { getUSDate } from '@/utils/utils';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const EventDetail = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { events } = useEventStore();
  const event = events.find((event) => event.id === id);

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
      <Text style={styles.heading}>{event.title}</Text>
      <Image source={{ uri: event.imageUrl }} style={styles.image} />
      <View style={styles.categories}>
        {event.categories.map((category) => (
          <Text style={styles.category} key={event.id + category}>
            {category}
          </Text>
        ))}
      </View>
      <Text style={styles.description}>
        Starts at: <Text style={defaultStyles.bold}>{getUSDate(event.startDate)}</Text>
      </Text>
      <Text style={styles.description}>
        Ends at: <Text style={defaultStyles.bold}>{getUSDate(event.endDate)}</Text>
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
    backgroundColor: Colors.socialGrey,
    paddingHorizontal: 8,
    lineHeight: 22,
  },
});

export default EventDetail;
