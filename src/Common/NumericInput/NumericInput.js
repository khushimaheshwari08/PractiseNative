import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const NumericInput = (props) => {
  return (
      <View>
                <Text style={styles.Text}>Numeric Input</Text>
        <TextInput
          style={styles.input}
          keyboardType = 'numeric'
          placeholder={props.placeholder}
          placeholderTextColor="gray"
          value={props.value}
          onChangeText={props.onChangeText}
        />

      </View>
  );
};

export default NumericInput;

const styles = StyleSheet.create({



  input: {
    marginLeft:20,
    marginRight:20,
    height: 50,
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 6,
    paddingLeft: 10,
    color: 'black',
  },
  
  Text:{
    marginLeft:20,
    color: 'black',
    marginTop:20,
    marginBottom:10,
    fontWeight:'bold',
  }
});
