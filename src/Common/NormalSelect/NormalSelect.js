import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';


const NormalSelect = () => {

  const [value, setValue] = useState('');
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
 
  return (
      <View>
            <Dropdown
            style={styles.input}
            itemTextStyle={{color:'black'}}
            data={data}
            labelField="label"
            valueField="value"
            onChange={item => {
              setValue(item.value);
            }}/>
          
      </View>
  );
};

export default NormalSelect;

const styles = StyleSheet.create({



  input: {
    margin: 20,
    height: 50,
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 6,
    paddingLeft: 10,
    color: 'black',
    
  },
});

