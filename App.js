import React from 'react';
import Login from './src/Components/Login/Login';

import Dashboard from './src/Components/Dashboard/Dashboard';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './src/Components/Signup/SignUp';
// import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            options={{headerShown: false}}
            name="login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="signUp"
            component={SignUp}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="dashboard"
            component={Dashboard}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
};

export default App;
