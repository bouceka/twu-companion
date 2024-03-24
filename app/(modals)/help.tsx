// @flow
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Touchable } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { ExternalLink } from '@/components/ExternalLink';
import * as MailComposer from 'expo-mail-composer';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '@/constants/Colors';

type Props = {};
export const Help = (props: Props) => {
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    async function checkAvailability() {
      const isMailAvailable = await MailComposer.isAvailableAsync();
      setIsAvailable(isMailAvailable);
    }

    checkAvailability();
  }, []);

  const sendMail = async () => {
    MailComposer.composeAsync({
      subject: 'TWU Companion: A Customer Needs Help',
      recipients: ['adam@boucek.dev'],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help Us</Text>
      <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.4)' />
      <Text style={styles.description}>
        {'If you have any issues using the app or you just want to send us love.\n Let us know!'}
      </Text>
      <TouchableOpacity onPress={() => sendMail()} style={styles.helpLink}>
        <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
          Send Feedback
        </Text>
      </TouchableOpacity>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 2,
    width: '100%',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});

export default Help;
