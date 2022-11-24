import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const NormalSelect = (props) => {
  return (
    <View>
      <Text style={styles.Text}>Normal Select</Text>
      <Dropdown
        style={styles.input}
        itemTextStyle={{color: 'black'}}
        selectedTextStyle={{color: 'black'}}
        data={props.data}
        placeholder={props.placeholder}
        placeholderTextColor="black"
        labelField={props.labelField}
        valueField={props.valueField}
        onChange={props.onChange}
      />
    </View>
  );
};

export default NormalSelect;

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
