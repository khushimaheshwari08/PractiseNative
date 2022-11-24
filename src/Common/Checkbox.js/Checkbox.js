import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Checkbox = (props) => {
  return (
    <View style={styles.check}>
      <CheckBox
        tintColors={{true: '#000000', false: '#000000'}}
        value={props.value}
        onValueChange={props.onValueChange}
      />
      <Text style={styles.TextCheckbox}>Checkbox</Text>
    </View>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  check: {
    flexDirection: 'row',
    margin: 20,
    height: 30,
  },

  TextCheckbox: {
    color: 'black',
    marginLeft: 10,
    marginTop: 6,
    fontWeight: 'bold',
  },
});
