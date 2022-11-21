import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';


const Login = () => {

  const navigation = useNavigation()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onDashboard =()=>{
    if (email === "123@gmail.com" && password === "123456") {
     
    navigation.navigate('dashboard');
    } else {
      alert("Enter valid username and password");
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerImg}>
          <Image
            source={require('../../assets/logo-light.png')}
            style={{width: 100, height: 30, marginTop: 30}}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.welcome}>Welcome Back</Text>
        </View>
        <Text style={styles.course}>
          You can search course,apply course and find scholarship for abroad
          studies
        </Text>

        <View style={styles.btn}>
          <View style={[styles.button, styles.shadowProp]}>
            <Image
              source={require('../../assets/googleIcon.png')}
              style={{width: 20, height: 20}}
            />
            <Text style={styles.googlefb}>Google</Text>
          </View>
          <View style={[styles.button, styles.shadowProp]}>
            <Image
              source={require('../../assets/fbIcon.png')}
              style={{width: 15, height: 14}}
            />
            <Text style={styles.googlefb}>Facebook</Text>
          </View>
        </View>

        <View style={styles.inputParent}>
          <Image
            source={require('../../assets/rightIcon.png')}
            style={{
              width: 20,
              height: 20,
              position: 'absolute',
              right: 40,
              top: 15,
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            placeholderTextColor="gray"
            value={email}
            onChangeText={email => setEmail(email)}
          />
          </View>
          <View style={styles.inputParent}>
          <Image
            source={require('../../assets/hideIcons.png')}
            style={{
              width: 20,
              height: 25,
              position: 'absolute',
              right: 40,
              top: 15,
            }}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Enter your Password"
            placeholderTextColor="gray"
            value={password}
            onChangeText={password => setPassword(password)}
          />
        </View>
        <TouchableOpacity onPress={() => onDashboard()}>
          <View style={styles.logBtn}>
            <Text style={styles.loginText}>Login</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.forgot}>
          <Text style={styles.forgetPassword}>Forgot Password?</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
      <View style={styles.join}>
        <Text style={styles.forgetPassword}>
          Don't have an account join us?
        </Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
  },

  headerImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  welcome: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

  course: {
    color: 'black',
    marginLeft: 11,
    marginRight: 10,
    marginTop: 10,
    textAlign: 'center',
  },

  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
    marginBottom: 25,
  },

  button: {
    width: 155,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    margin: 15,
    gap: 5,
    borderRadius: 6,
    marginBottom: 5,
  },

  shadowProp: {
    elevation: 4,
    shadowColor: '#c9c7c7',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  googlefb: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 7,
  },

  input: {
    marginLeft: 15,
    marginBottom: 20,
    marginRight: 15,
    height: 50,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 10,
    color:'black',
  },

  logBtn: {
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    backgroundColor: '#da1b3f',
    borderRadius: 6,
  },

  loginText: {
    paddingTop: 15,
    textAlign: 'center',
    color: 'white',
  },

  forgot: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  forgetPassword: {
    color: '#da1b3f',
  },

  join: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  inputParent: {
    position: 'relative',
  },
});
