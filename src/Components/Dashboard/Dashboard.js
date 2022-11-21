import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Dashboard = () => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.replace('login')}>
    <View style={styles.container}>
       
          <View style={styles.logoutBtn}>
            <Text style={styles.logoutText}>Logout</Text>
          </View>
          </View>
        </TouchableOpacity>
   
  );
};

export default Dashboard;

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  
  logoutBtn: {
    marginTop:30,
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    width:80,
    backgroundColor: '#da1b3f',
    borderRadius: 6,
  },

  logoutText: {
    paddingTop: 15,
    textAlign: 'center',
    color: 'white',
  }
})