import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { TWUEvent } from '@/types';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';
import { View, Text } from '../Themed';

interface Props {
  data: TWUEvent[];
}

const EventTable = ({ data }: Props) => {
  const renderItem = ({ item, index }: { item: TWUEvent; index: number }) => (
    <Link
      key={item.id}
      style={{ backgroundColor: index % 2 !== 0 ? '#FFFFFF' : '#F0F0F0' }}
      href={`/events/${item.title}`}
      asChild
    >
      <TouchableOpacity>
        <View style={[styles.tableRow]}>
          <Image source={{ uri: item.imageUrl }} style={styles.thumbnail} />
          <View style={{ flex: 1 }}>
            <Text style={styles.tableData} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.tableData}>
              {new Date(item.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={[styles.sectionContainer, defaultStyles.container]}>
      <Text>Events</Text>
      <View style={styles.tableContainer}>
        {data.length == 0 ? (
          <Text>No Data</Text>
        ) : (
          // TODO: Use rather FlatList
          // <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
          data.map((item, index) => (
            <Link
              key={item.id + index}
              style={{ borderBottomColor: '#ccc', borderBottomWidth: index < data.length - 1 ? 1 : 0 }}
              href={`/events/${item.id}`}
              asChild
            >
              <TouchableOpacity>
                <View style={[styles.tableRow]}>
                  <View style={styles.tableRowData}>
                    <Text style={styles.tableData} numberOfLines={1}>
                      {item.title}
                    </Text>
                    <Text>
                      {new Date(item.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Link>
          ))
        )}
      </View>
      <View style={styles.seeMore}>
        <Link style={styles.seeMoreLink} href={'/events/all-events'}>
          See All
        </Link>
        <FontAwesome color={Colors.primary} name='arrow-right' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  seeMore: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 8,
  },
  seeMoreLink: {
    color: Colors.primary,
  },
  tableContainer: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#cfcfcf',
    padding: 10,
    marginVertical: 10,
  },
  sectionContainer: {
    marginVertical: 10,
  },
  tableHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 8,
    height: 40,
  },
  tableRowData: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 8,
  },
  tableData: {
    flex: 2,
    alignItems: 'flex-end',
  },
  thumbnail: {
    height: 32,
    width: 32,
    borderRadius: 4,
  },
});

export default EventTable;
