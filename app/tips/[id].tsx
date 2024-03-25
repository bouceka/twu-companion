// @flow
import { View, Text,  ScrollView } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import useTipStore from '@/store/tipStore';
import { getUSDate } from '@/utils/utils';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as React from 'react';
import { Image, StyleSheet, useColorScheme } from 'react-native';

const TipDetail = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { tips } = useTipStore();
  const tip = tips.find((tip) => tip.id === id);
  const colorScheme = useColorScheme();


  if (tip === undefined) {
    router.back();
    return (
      <View>
        <Text>Not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.layout} style={[defaultStyles.container]}>
      <Text style={styles.heading}>{tip.title}</Text>
      <Image source={{ uri: tip.imageUrl }} style={styles.image} />
      <View style={styles.categories}>
        <Text style={[styles.category,{ backgroundColor: Colors[colorScheme ?? 'light'].socialGrey } ]}>{tip.category}</Text>
      </View>
      <Text style={styles.description}>{tip.content}</Text>
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

export default TipDetail;
