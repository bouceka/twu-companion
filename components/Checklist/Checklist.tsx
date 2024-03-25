// @flow
import * as React from 'react';
import { Icon, View, Text } from '../Themed';
import { TouchableOpacity, View as DefaultView } from 'react-native';
import { FlatList, StyleSheet, useColorScheme } from 'react-native';
import { Checklist, STUDENT_CHECKLIST } from '@/types/checklist';
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';

type Props = {};
const ChecklistComponent = (props: Props) => {
  const colorScheme = useColorScheme();
  const renderItem = ({ item, index }: { item: Checklist; index: number }) => (
    <Link
      href={`/checklist/${item.id}`}
      style={
        [
          // { backgroundColor: colorScheme == 'light' ? Colors.socialGrey : Colors.socialGreyDark },
        ]
      }
      key={item.id}
      asChild
    >
      <TouchableOpacity
        style={{
          ...styles.item,
          // backgroundColor: colorScheme == 'light' ? Colors.socialGrey : Colors.socialGreyDark,
        }}
      >
        <View style={{ ...styles.content }}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          {/* <Text>{item.totalSteps}</Text> */}
          <DefaultView style={styles.stepIndicatorContainer}>
            {item.items.map((step, index) => (
              <React.Fragment key={index}>
                <View
                  style={[
                    styles.stepIndicator,
                    {
                      backgroundColor:
                        index < item.progress
                          ? colorScheme === 'light'
                            ? Colors.trinityBlue
                            : Colors.primary
                          : Colors.socialGrey,
                    },
                  ]}
                />
                {index < item.items.length - 1 && (
                  // This line will be between the dots
                  <View style={styles.stepLine} />
                )}
              </React.Fragment>
            ))}
          </DefaultView>
        </View>
      </TouchableOpacity>
    </Link>
  );
  return (
    <View style={{ width: '100%', flex: 1 }}>
      <FlatList
        contentContainerStyle={styles.list}
        data={STUDENT_CHECKLIST}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    gap: 40,
    // width: 100%,
    marginTop: 24,
    marginHorizontal: '10%',
  },
  item: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    borderRadius: 16,
    elevation: 24,
  },
  stepIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // This will center the steps in the middle of the container
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 24,
  },
  stepLine: {
    height: 2, // Adjust the thickness of the line
    width: 20, // Adjust the length of the line
    backgroundColor: 'gray', // Match the color with your stepIndicator or choose another color
  },
  stepIndicator: {
    height: 20, // Adjust the size as needed
    width: 20, // Adjust the size as needed
    borderRadius: 20, // This will make it a circle
    backgroundColor: 'gray', // Default color
    borderColor: Colors.trinityBlue,
    borderWidth: 2,
  },
  // O

  content: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 16,
    borderRadius: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ChecklistComponent;
