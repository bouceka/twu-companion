// @flow
import * as React from 'react';
import { View, Text } from '../Themed';
import { TouchableOpacity, StyleSheet, Linking, Appearance, useColorScheme, Modal, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import ToggleButton from '../ToggleButton/ToggleButton';
import { useRouter } from 'expo-router';

type Props = {};
export const AccountOptions = (props: Props) => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity onPress={() => Linking.openSettings()} style={styles.row}>
        <View style={styles.profile}>
          <FontAwesome5 size={24} color={Colors.trinityBlue} name='bell' />
          <View style={styles.profileContent}>
            <Text style={styles.name}>Notifications</Text>
          </View>
        </View>
        <View style={styles.button}>
          <FontAwesome5 size={16} color={Colors.trinityBlue} name='chevron-right' />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openSettings()} style={styles.row}>
        <View style={styles.profile}>
          <FontAwesome5 size={24} color={Colors.trinityBlue} name='location-arrow' />
          <View style={styles.profileContent}>
            <Text style={styles.name}>Location</Text>
          </View>
        </View>
        <View style={styles.button}>
          <FontAwesome5 size={16} color={Colors.trinityBlue} name='chevron-right' />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
        <View style={styles.profile}>
          <FontAwesome5 size={24} color={Colors.trinityBlue} name='moon' />
          <View style={styles.profileContent}>
            <Text style={styles.name}>Dark Mode</Text>
          </View>
        </View>
        <ToggleButton onPress={() => Appearance.setColorScheme(colorScheme === 'light' ? 'dark' : 'light')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.row} onPress={() => router.navigate('/(modals)/help')}>
        <View style={styles.profile}>
          <FontAwesome5 size={24} color={Colors.trinityBlue} name='question-circle' />
          <View style={styles.profileContent}>
            <Text style={styles.name}>Help</Text>
          </View>
        </View>
        <View style={styles.button}>
          <FontAwesome5 size={16} color={Colors.trinityBlue} name='chevron-right' />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    height: 56,
    width: 56,
    borderRadius: 8,
  },
  profileContent: {
    gap: 8,
  },
  row: {
    gap: 16,
    paddingHorizontal: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  container: {
    flex: 1,
    gap: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
  },
  button: {
    backgroundColor: Colors.socialGrey,
    padding: 16,
    borderRadius: 8,
  },

  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
});
