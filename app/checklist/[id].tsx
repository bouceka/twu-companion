import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { STUDENT_CHECKLIST } from '@/types/checklist';
import { View, Text, ScrollView } from '@/components/Themed';

const ChecklistDetail = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const checklist = STUDENT_CHECKLIST.find((checklist) => checklist.id === id);
  const colorScheme = useColorScheme();

  if (checklist === undefined) {
    router.back();
    return (
      <View>
        <Text>Not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.layout} style={[defaultStyles.container]}>
      <Text style={styles.heading}>{checklist.title}</Text>
      <View style={styles.categories}>
        <Text style={[styles.category, { backgroundColor: Colors[colorScheme ?? 'light'].socialGrey }]}>
          {checklist.category}
        </Text>
      </View>
      <Text style={styles.description}>
        Progress:{' '}
        <Text style={defaultStyles.bold}>
          {checklist.progress}/{checklist.totalSteps}
        </Text>
      </Text>
      <Text style={styles.description}>
        Priority: <Text style={defaultStyles.bold}>{checklist.priority.name}</Text>
      </Text>
      {checklist.items.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemCategory}>{item.category}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: '700',
  },
  layout: {
    padding: 16,
    gap: 16,
  },
  categories: {
    flexDirection: 'row',
    gap: 8,
  },
  category: {
    backgroundColor: Colors.socialGrey,
    paddingHorizontal: 8,
    lineHeight: 22,
  },
  description: {
    fontSize: 20,
  },
  item: {
    marginTop: 8,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemCategory: {
    fontSize: 16,
    color: Colors.socialGrey,
  },
});

export default ChecklistDetail;
