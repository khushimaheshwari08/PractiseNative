import {useNavigation} from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NumericInput from '../../Common/NumericInput/NumericInput';
import NormalSelect from '../../Common/NormalSelect/NormalSelect';

const Dashboard = () => {
  const navigation = useNavigation();
  const [no, setNo] = useState('')
 
  

  const onLogout = async () => {
    await AsyncStorage.setItem('isLogin', JSON.stringify(false));
    navigation.replace('login');
    return true;
  };

  return (
    <View style={styles.container}>
      <Text>
        <NumericInput
        placeholder="Enter Numeric"
        value={no}
        onChangeText={(no) => setNo(no)}
        />
      </Text>
      <Text>
        <NormalSelect/>
      </Text>
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
