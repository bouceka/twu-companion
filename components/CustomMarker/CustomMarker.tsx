import { View, Text } from 'react-native';
import React from 'react';
import { Marker } from 'react-native-maps';
import { Building } from '@/types';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

interface Props {
  building: Building;
  onPress?: () => void;
}

const CustomMarker = ({ building, onPress }: Props) => {
  return (
    <Marker
      onPress={onPress}
      coordinate={{
        latitude: building.latitude,
        longitude: building.longitude,
      }}
      title={building.title}
      description={building.category}
      style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      {/* <View
        style={{
          backgroundColor: 'white',
          padding: 5,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 20,
         
        }}
      >
        <Text>{building.category}</Text>
      </View> */}
      <FontAwesome color={Colors.accessibleBlue} size={32} name='map-marker' />
    </Marker>
  );
};

export default CustomMarker;
