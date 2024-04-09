import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { TWUEvent } from '@/types';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';
import { View, Text } from '../Themed';
import { SPARTAN_EVENTS_MOCK } from '@/types/spartanEvent';
type Props = {};
export const SpartanEvents = (props: Props) => {
  const data = SPARTAN_EVENTS_MOCK.slice(0, 5);
  return (
    <View style={[styles.sectionContainer, defaultStyles.container]}>
      <View style={styles.heading}>
        <Text style={styles.title}>Spartan Events</Text>
        <Image style={styles.thumbnail} source={require('@/assets/images/spartan_logo.png')} />
      </View>
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
              href={`/spartanEvents/${item.id}`}
              asChild
            >
              <TouchableOpacity>
                <View style={[styles.tableRow]}>
                  <View style={styles.tableRowData}>
                    <Text style={styles.tableData} numberOfLines={1}>
                      {item.description}
                    </Text>
                    <Text>{item.startDate}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Link>
          ))
        )}
      </View>
      <View style={styles.seeMore}>
        <Link style={styles.seeMoreLink} href={'/spartanEvents/all-events'}>
          See All
        </Link>
        <FontAwesome color={Colors.primary} name='arrow-right' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  heading: {
    flexDirection: 'row',
    gap: 16,
    alignItems:'center'
  },
  seeMore: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 8,
  },
  thumbnail: {
    height: 24,
    width: 24,
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
});

export default SpartanEvents;
