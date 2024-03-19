import { TWUEvent } from '@/types';
import { Spinner } from '@gluestack-ui/themed';
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

interface Props {
  data: TWUEvent[];
}

const EventTable = ({ data }: Props) => {
  const tableHead = ['Title', 'Date'];
  const renderItem = ({ item }: { item: TWUEvent }) => (
    <View style={styles.tableRow}>
      <Image source={{ uri: item.imageUrl }} style={styles.thumbnail} />
      <Text style={styles.rowData}>{item.title}</Text>
      <Text style={styles.rowData}>{new Date(item.startDate).toDateString()}</Text>
    </View>
  );

  return (
    <View style={styles.tableContainer}>
      {/* <View style={styles.tableHead}>
        {tableHead.map((header) => (
          <Text key={header} style={styles.headText}>
            {header}
          </Text>
        ))}
      </View> */}
      {data.length == 0 ? (
        <Spinner size='large' />
      ) : (
        <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#cfcfcf',
    padding: 10,
    margin: 10,
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
    paddingVertical: 5,
  },
  rowData: {
    flex: 1,
    alignItems: 'center',
  },
  thumbnail: {
    height: 40,
    width: 40,
    borderRadius: 4,
  },
});

export default EventTable;
