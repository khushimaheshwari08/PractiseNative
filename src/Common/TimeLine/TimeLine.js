import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';

const data = [
  {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
  {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
  {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
  {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
  {time: '16:30', title: 'Event 5', description: 'Event 5 Description'},
];

const TimeLine = () => {
  return (
    <View style={styles.container}>
       <Text style={styles.Text}>TimeLine</Text>
      <Timeline 
      style={styles.list} 
      data={data} 
      circleSize={25}
      circleColor='rgb(45,156,219)'
      lineColor='rgb(45,156,219)'
      innerCircle={'dot'}
     timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
     titleStyle={{color:'gray'}}
     descriptionStyle={{color:'gray'}}
      />
    </View>
  );
};

export default TimeLine;

const styles = StyleSheet.create({

  container:{
    marginLeft:20
  }, 
  Text: {
    marginLeft: 10,
    color: 'black',
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
