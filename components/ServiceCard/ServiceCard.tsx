// @flow
import * as React from 'react';
import { Icon, View, Text } from '../Themed';
import { SCHOOL_SERVICES } from '@/assets/data/schoolServices';
import { SchoolService } from '@/types';
import { FlatList, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import * as Linking from 'expo-linking';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ServiceCard = () => {
  const handlePressButtonAsync = async (href: string) => {
    await Linking.openURL(href);
  };
  const renderItem = ({ item, index }: { item: SchoolService; index: number }) => (
    <TouchableOpacity style={[styles.serviceCard]} key={item.id} onPress={() => handlePressButtonAsync(item.href)}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 16 }}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Icon size={24} version={item.iconVersion} name={item.icon} />
      </View>
      <Text>{item.description}</Text>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList data={SCHOOL_SERVICES} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
};

const styles = StyleSheet.create({
  serviceCard: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    padding: 16,
    shadowColor: Colors.black,
    marginVertical: 8,
    gap: 8,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
