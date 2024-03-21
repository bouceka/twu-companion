import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import useEventStore from '@/store/eventStore';
import Colors from '@/constants/Colors';

const Events = () => {
  const { events } = useEventStore();
  return (
    <ScrollView
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={{
        padding: 15,
        gap: 16,
        alignItems: 'center',
        display: 'flex',
      }}
    >
      {events.map((event, index) => (
        <Link href={`/events/${event.id}`} key={index} asChild>
          <TouchableOpacity>
            <View style={styles.categoryCard}>
              <Image source={{ uri: event.imageUrl }} style={styles.image} />
              <View style={styles.categoryBox}>
                <Text style={styles.categoryText}>{event.title}</Text>
                <View style={styles.categories}>
                  {event.categories.map((category) => (
                    <Text style={styles.category} key={event.id + category}>
                      {category}
                    </Text>
                  ))}
                </View>
                <Text style={{ color: Colors.black }}>{event.address.city}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  categoryCard: {
    width: 300,
    height: 'auto',
    backgroundColor: '#fff',
    marginEnd: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    borderRadius: 4,
  },
  categoryText: {
    paddingVertical: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  categories: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  category: {
    backgroundColor: '#ddd',
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  image: {
    flex: 5,
    width: undefined,
    height: 160,
    objectFit: 'cover',
  },
  categoryBox: {
    flex: 2,
    padding: 10,
    gap: 4,
  },
});

export default Events;
