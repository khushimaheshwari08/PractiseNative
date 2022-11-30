import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

const Commoncamera = () => {
  
  const navigation = useNavigation();
  

  return (
    <SafeAreaView>
      
        <View style={styles.container}>
          <TouchableHighlight 
          onPress={()=>navigation.navigate('startCamera')}
          style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Open Camera</Text>
          </TouchableHighlight>
        </View>
   
    </SafeAreaView>
  );
};

export default Commoncamera;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    marginTop: 32,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
});
