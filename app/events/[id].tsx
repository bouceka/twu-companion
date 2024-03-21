// @flow
import { useLocalSearchParams } from 'expo-router';
import * as React from 'react';
import { View, Text } from 'react-native';

const EventDetail = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default EventDetail;
