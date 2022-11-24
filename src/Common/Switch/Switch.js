import React, {useState} from 'react';
import {Text, View, Switch, StyleSheet} from 'react-native';

const Switches = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        style={styles.switch}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={styles.Text}>Switch</Text>
    </View>
  );
};

export default Switches;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  switch: {
    marginLeft: 20,
    marginTop: 15,
  },

  Text: {
    color: 'black',
    marginTop: 20,
    marginLeft: 5,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
