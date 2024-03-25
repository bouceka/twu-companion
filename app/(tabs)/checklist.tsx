import { Platform, StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import Checklist from '@/components/Checklist/Checklist';
import { StatusBar } from 'expo-status-bar';

export default function ChecklistScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Checklist />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 16,
    alignItems: 'center',
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
