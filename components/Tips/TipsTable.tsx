import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { TWUEvent, Tip } from '@/types';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Pressable } from 'react-native';

interface Props {
  data: Tip[];
}

const TipTable = ({ data }: Props) => {
  return (
    <View style={[styles.sectionContainer, defaultStyles.container]}>
      <Text>Tips and Tricks</Text>
      <View style={styles.tableContainer}>
        {data.length == 0 ? (
          <Text>No Data</Text>
        ) : (
          // TODO: Use rather FlatList
          // <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
          data.map((item, index) => (
            <Link
              key={item.id}
              style={{ backgroundColor: index % 2 !== 0 ? '#FFFFFF' : '#F0F0F0' }}
              href={`/tips/${item.id}`}
              asChild
            >
              <TouchableOpacity>
                <View style={[styles.tableRow]}>
                  <Image source={{ uri: item.imageUrl }} style={styles.thumbnail} />
                  <View style={styles.tableRowData}>
                    <Text style={styles.tableData} numberOfLines={1}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Link>
          ))
        )}
      </View>
      <View style={styles.seeMore}>
        <Link style={styles.seeMoreLink} href={'/tips/all-tips'}>
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
    paddingVertical: 5,
  },
  tableRowData: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
    paddingRight: 8,
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

export default TipTable;
