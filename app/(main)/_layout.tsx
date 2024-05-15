import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

import {} from '@react-navigation/native'
import { View } from '@/components/Themed';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

type TabBarTypes = {
  state: object,

}

const TabBar = ({

}) => {
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      // tabBar={}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'red',
        tabBarActiveBackgroundColor: 'rgb(80,10,10)',
        tabBarInactiveBackgroundColor: 'rgb(50,10,10)',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          
        },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />
        }}
      />
      <Tabs.Screen
        name="articles/[article]"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
