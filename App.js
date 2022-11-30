import React, { useEffect, useState } from 'react';
import Login from './src/Components/Login/Login';

import Dashboard from './src/Components/Dashboard/Dashboard';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './src/Components/Signup/SignUp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from './src/Components/Navigation/Navigation';
import SplashScreen from 'react-native-splash-screen'
import xyz from './src/Components/xyz/xyz';
import StartCamera from './src/Common/Camera/StartCamera';
import StartQRScanner from './src/Common/QRScanner/StartQRScanner';


const Stack = createNativeStackNavigator();

const App = () => {

  const [auth, setAuth] = useState(null)
  const [render, setRender] = useState(false)

  const loginData = async() => {
      let retrivedItem = await AsyncStorage.getItem('isLogin');
      let item = JSON.parse(retrivedItem);
      setAuth(item);
      setRender(true)
  }

  useEffect(() => {
    loginData();
  }, [])

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    },2000)
  }, [])
  
  
  return (
    <>
    {render ?(
      <NavigationContainer>
        <Stack.Navigator initialRouteName={auth===true ?"navigation":"login"}>
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
            name="navigation"
            component={Navigation}
          />
            <Stack.Screen
            options={{headerShown: false}}
            name="startCamera"
            component={StartCamera}
          />
            <Stack.Screen
            options={{headerShown: false}}
            name="startQR"
            component={StartQRScanner}
          />
        </Stack.Navigator>
      </NavigationContainer>
    ): null
      }
    </>
  );
};

export default App;
