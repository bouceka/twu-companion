import React from 'react';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome5>['name']; color: string }) {
  return <FontAwesome5 size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        // headerShown: false,
        tabBarStyle: styles.tab,
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
          // headerRight: () => (
          //   <Link href='/modal' asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name='info-circle'
          //           size={25}
          //           color={Colors[colorScheme ?? 'light'].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
      <Tabs.Screen
        name='services'
        options={{
          title: 'Services',
          headerTitle: 'Student Services',
          tabBarIcon: ({ color }) => <TabBarIcon name='info-circle' color={color} />,
        }}
      />
      <Tabs.Screen
        name='checklist'
        options={{
          title: 'Checklist',
          headerTitle: 'Your Checklist',
          tabBarIcon: ({ color }) => <TabBarIcon name='list' color={color} />,
        }}
      />
      <Tabs.Screen
        name='map'
        options={{
          title: 'Map',
          tabBarIcon: ({ color }) => <TabBarIcon name='map' color={color} />,
        }}
      />
      <Tabs.Screen
        name='account'
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <TabBarIcon name='user' color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab: {
    elevation: 0,
    borderTopColor: '#ccc',
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 8,
    height: 64,
  },
});
