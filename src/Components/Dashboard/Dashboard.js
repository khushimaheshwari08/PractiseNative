import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View,BackHandler} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = () => {
  const navigation = useNavigation();
  
  // const disableBackButton =()=>{
  //   BackHandler.exitApp()
  //   return true;
  // }

  const onLogout = async () => {
    await AsyncStorage.setItem('isLogin', JSON.stringify(false));
    navigation.replace('login');
    // BackHandler.exitApp()
    return true;
  };

  return (
    <View style={styles.container}>
   
        <View style={styles.logoutBtn}>
        <TouchableOpacity onPress={() => onLogout()}>
          <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
     
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },

  logoutBtn: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    width: 80,
    backgroundColor: '#da1b3f',
    borderRadius: 6,
  },

  logoutText: {
    paddingTop: 15,
    textAlign: 'center',
    color: 'white',
  },
});
