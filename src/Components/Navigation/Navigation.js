import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import Dashboard from '../Dashboard/Dashboard';

const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="dashboard"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {/* <Ionicons
                name={focused ? 'grid' : 'grid-outline'}
                size={25}
                color={focused ? colors.primary : colors.grey900}
              /> */}
              <Text
                style={{
                  color: 'black',
                  fontSize:18,
                }}
              >
                Dashboard
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
