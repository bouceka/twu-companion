import { View, Text } from 'react-native';
import React from 'react';
import { Marker } from 'react-native-maps';
import { Building } from '@/types';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

interface Props {
  building: Building;
  onPress?: () => void;
  isActive?: boolean;
}

const CustomMarker = ({ building, onPress, isActive }: Props) => {
  return (
    <>
      <Marker
        onPress={onPress}
        coordinate={{
          latitude: building.latitude,
          longitude: building.longitude,
        }}
        title={building.title}
        description={building.category}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* TODO: Consider this for in the future
         {isActive && ( // show when selected
          <>
            <View
              style={{
                backgroundColor: 'white',
                padding: 8,
                paddingHorizontal: 8,
                borderRadius: 8,
                position: 'absolute',
                top: -56,
                shadowColor: Colors.black,
                shadowOpacity: 0.1,
                shadowRadius: 6,
                shadowOffset: {
                  width: 1,
                  height: 10,
                },
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{building.title}</Text>
              <Text>{building.category}</Text>
            </View>
          </>
        )} */}
        <FontAwesome color={Colors.accessibleBlue} size={28} name='map-marker' />
      </Marker>
    </>
  );
};

export default CustomMarker;
