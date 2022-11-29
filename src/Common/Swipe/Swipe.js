import React, {useState} from 'react';
import {Text,StyleSheet} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';



const Swipe =() => {
 
  const [text, setText] = useState('I\'m ready to get swiped!');
  const [gestureName, setGestureName] = useState('none');
  const [backgroundColor, setBackgroundColor] = useState('#da1b3f');


  const onSwipeLeft = ()=> {
    setText('You swiped left!');
  }

  const onSwipeRight = ()=> {
    setText('You swiped right!');
  }

  const onSwipe=(gestureName)=> {
    const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    setGestureName(gestureName)
    switch (gestureName) {
      case SWIPE_LEFT:
        setBackgroundColor('blue');
        break;
      case SWIPE_RIGHT:
        setBackgroundColor('green');
        break;
    }
  }   

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  }
    return (
      <GestureRecognizer
        onSwipe={(direction, state) => onSwipe(direction, state)}
        onSwipeLeft={(state) => onSwipeLeft(state)}
        onSwipeRight={(state) => onSwipeRight(state)}
        config={config}
        style={{
          backgroundColor: backgroundColor,
          width: '100%',
          height: 100,
        }}
        >
        <Text style={[styles.center,styles.Text]}>{text}</Text>
        <Text style={styles.center}>onSwipe received gesture: {gestureName}</Text>
      </GestureRecognizer>
    );
  }


export default Swipe;

const styles = StyleSheet.create({
center:{
  textAlign: 'center',
},
Text:{
  marginTop:30
}
})