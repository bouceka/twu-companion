import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { User } from '@/types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { AccountOptions } from '@/components/AccountOptions/AccountOptions';
import Colors from '@/constants/Colors';

const default_user: User = {
  id: '1',
  name: 'Your Name',
  email: 'your@mytwu.ca',
};

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
      <TouchableOpacity style={styles.row}>
        <View style={styles.profile}>
          <Image style={styles.profileImage} source={require('@/assets/images/default-profile-pic.jpeg')} />
          <View style={styles.profileContent}>
            <Text style={styles.name}>{default_user.name}</Text>
            <Text style={styles.email}>{default_user.email}</Text>
          </View>
        </View>
        <View style={styles.button}>
          <FontAwesome5 size={16} color={Colors.trinityBlue} name='chevron-right' />
        </View>
      </TouchableOpacity>
      <View style={styles.separator} lightColor='#eee' darkColor='rgb(0, 0, 0)' />
      <AccountOptions />
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    height: 56,
    width: 56,
    borderRadius: 8,
  },
  profileContent: {
    gap: 8,
  },
  button: {
    backgroundColor: Colors.socialGrey,
    padding: 16,
    borderRadius: 8,
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
    paddingTop: 16,
    paddingHorizontal: 24,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom:8
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
  },
  separator: {
    marginVertical: 16,
    height: 2,
    width: '100%',
  },
});
