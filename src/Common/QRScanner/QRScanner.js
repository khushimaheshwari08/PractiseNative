import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
const QRScanner = () => {
  
  const navigation = useNavigation();
 
  return (
    <SafeAreaView>
      
  
     
        <View style={styles.container}>

          
          <TouchableHighlight
            onPress={()=>navigation.navigate('startQR')}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>
              Open QR Scanner
            </Text>
          </TouchableHighlight>
        </View>
    
    </SafeAreaView>
  );
};
 
export default QRScanner;
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'red',
    padding: 5,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
});
