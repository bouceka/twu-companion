import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Region } from 'react-native-maps';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { BUILDINGS } from '@/assets/data/buildings';
import CustomMarker from '@/components/CustomMarker/CustomMarker';
import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { defaultStyles } from '@/constants/Styles';
import * as Location from 'expo-location';
import { useEffect, useRef, useState } from 'react';

export default function MapScreen() {
  const mapRef = useRef<any>(null);
  const initialRegion: Region = {
    latitude: 49.140302, // Add a valid latitude value here
    longitude: -122.600551, // Add a valid longitude value here
    latitudeDelta: 0.0085,
    longitudeDelta: 0.0085,
  };
  const [errorMsg, setErrorMsg] = useState<String | null>(null);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const onLocateMe = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    console.log(status);
    if (status !== 'granted') {
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    const region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 7,
      longitudeDelta: 7,
    };

    mapRef.current?.animateToRegion(region);
  };
  return (
    <View style={styles.container}>
      <MapView showsUserLocation initialRegion={initialRegion} style={styles.map}>
        {BUILDINGS.map((building) => (
          <CustomMarker key={building.id} building={building} />
        ))}
      </MapView>
      <TouchableOpacity style={styles.locateBtn}>
        <FontAwesome name='location-arrow' size={24} color={Colors.black} onPress={onLocateMe} />
      </TouchableOpacity>
      <ScrollView>
        {BUILDINGS.map((building) => (
          <View key={building.id} style={styles.buildingItem}>
            <Image source={building.imageSrc} style={styles.image} />
            <View>
              <Text style={styles.buildingItemTitle}>{building.title}</Text>
              <Text style={styles.buildingItemCategory}>{building.category}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    height: '100%',
  },
  buildingItem: {
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    borderBottomColor: Colors.elegantGrey,
    borderBottomWidth: 1,
  },
  buildingItemCategory: {
    color: Colors.elegantGrey,
    fontSize: 16,
    paddingVertical: 4,
  },
  buildingItemTitle: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 'bold',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
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
  map: {
    width: '100%',
    height: '60%',
  },
  locateBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
});
