import { Image, ScrollView, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import MapView, { Region } from 'react-native-maps';

import { Text, View } from '@/components/Themed';
import { BUILDINGS } from '@/assets/data/buildings';
import CustomMarker from '@/components/CustomMarker/CustomMarker';
import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { useRef, useState } from 'react';
import { Building } from '@/types';

export default function MapScreen() {
  const mapRef = useRef<any>(null); // navigate to particular building or user location ref
  const scrollRef = useRef<any>(null); // scroll to particular building on the list ref
  const itemsRef = useRef<Array<TouchableOpacity | null>>([]); // list of items in the building list ref
  const [activeIndex, setActiveIndex] = useState(0); // selected building index
  const colorScheme = useColorScheme();
  const initialRegion: Region = {
    // initial TWU campus
    latitude: 49.140302,
    longitude: -122.600551,
    latitudeDelta: 0.0085,
    longitudeDelta: 0.0085,
  };

  const onLocateMe = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.04,
      longitudeDelta: 0.04,
    };

    mapRef.current?.animateToRegion(region);
  };

  const selectBuilding = (building: Building) => {
    const selected = itemsRef.current[building.id - 1];
    setActiveIndex(building.id - 1);
    selected?.measure((x, y) => {
      scrollRef.current?.scrollTo({ x: 0, y: y - 8, animated: true });
    });

    const region = {
      latitude: building.latitude,
      longitude: building.longitude,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    };
    mapRef.current?.animateToRegion(region);
  };

  const refreshRegion = () => mapRef.current?.animateToRegion(initialRegion);

  return (
    <View style={styles.container}>
      <MapView ref={mapRef} showsUserLocation initialRegion={initialRegion} style={styles.map}>
        {BUILDINGS.map((building, index) => (
          <CustomMarker
            isActive={building.id === activeIndex}
            onPress={() => selectBuilding(building)}
            key={index}
            building={building}
          />
        ))}
      </MapView>
      <TouchableOpacity style={styles.locateBtn}>
        <FontAwesome name='location-arrow' size={24} onPress={onLocateMe} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.locateBtn, { left: 16, right: 'auto' }]}>
        <FontAwesome name='refresh' size={24} onPress={refreshRegion} />
      </TouchableOpacity>
      <ScrollView ref={scrollRef}>
        {BUILDINGS.map((building, index) => (
          <TouchableOpacity
            key={building.id}
            style={[
              styles.buildingItem,
              activeIndex === index ? { backgroundColor: Colors[colorScheme ?? 'light'].socialGrey } : null,
            ]}
            onPress={() => selectBuilding(building)}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <Image source={building.imageSrc} style={styles.image} />
            <View style={activeIndex === index && { backgroundColor: Colors[colorScheme ?? 'light'].socialGrey }}>
              <Text style={styles.buildingItemTitle}>{building.title}</Text>
              <Text style={styles.buildingItemCategory}>{building.category}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  buildingContentActive: {
    backgroundColor: Colors.socialGrey,
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
    // color: Colors.elegantGrey,
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
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
});
