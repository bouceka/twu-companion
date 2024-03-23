import Colors from '@/constants/Colors';
import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

interface Props {
  onPress: () => void;
}

const ToggleButton = ({ onPress }: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    onPress();
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: Colors.socialGrey, true: Colors.accessibleBlue }}
        thumbColor={isEnabled ? Colors.socialGrey : Colors.trinityBlue}
        ios_backgroundColor={Colors.socialGrey}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ToggleButton;
