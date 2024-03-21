// @flow
import useTipStore from '@/store/tipStore';
import { Link } from 'expo-router';
import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
type Props = {};
const Tips = (props: Props) => {
  const { tips } = useTipStore();
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
      {tips.map((tip, index) => (
        <Link href={`/tips/${tip.id}`} key={index} asChild>
          <TouchableOpacity>
            <View style={styles.categoryCard}>
              <Image source={{ uri: tip.imageUrl }} style={styles.image} />
              <View style={styles.categoryBox}>
                <Text style={styles.categoryText}>{tip.title}</Text>
                <View style={styles.categories}>
                  <Text style={styles.category} >
                    {tip.category}
                  </Text>
                </View>
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

export default Tips;
