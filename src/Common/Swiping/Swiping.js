import React from 'react';
 
// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet
} from 'react-native';
 
import SwipeButton from 'rn-swipe-button';
 
const Swiping = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SwipeButton
          disabled={false}
          //disable the button by doing true (Optional)
          swipeSuccessThreshold={70}
          height={45}
          //height of the button (Optional)
          width={330}
          //width of the button (Optional)
          title="Swipe here "
          //Text inside the button (Optional)
          //thumbIconImageSource={thumbIcon}
          //You can also set your own icon (Optional)
          onSwipeSuccess={() => {
            alert('Swipe Successfully!');
          }}
          //After the completion of swipe (Optional)
          railFillBackgroundColor="#e688a1" //(Optional)
          railFillBorderColor="#e688ff" //(Optional)
          thumbIconBackgroundColor="#ed9a73" //(Optional)
          thumbIconBorderColor="#ed9aff" //(Optional)
          railBackgroundColor="#bbeaa6" //(Optional)
          railBorderColor="#bbeaff" //(Optional)
        />
      </View>
    </SafeAreaView>
  );
};
export default Swiping;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});