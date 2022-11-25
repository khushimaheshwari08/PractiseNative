import React, {useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import RangeSlider from 'rn-range-slider';

const Rangeslide = ({
  minPrice,
  maxPrice,
  steps,
  onSlidingComplete,
}) => {
  const [low, setLow] = useState(minPrice);
  const [high, setHigh] = useState(maxPrice);
   // const onSlidingComplete = (low, high) => {
  //   console.log(low, high);
  // };

  const renderThumb = useCallback(
    () => <TouchableOpacity style={styles.thumbStyle} />,
    [],
  );
  const renderRail = useCallback(() => <View style={styles.railStyle} />, []);
  const renderRailSelected = useCallback(
    () => <View style={styles.selectedRailStyle} />,
    [],
  );
  const renderLabel = useCallback(
    value => <Text style={styles.labelStyle}>{value}</Text>,
    [],
  );
  const renderNotch = useCallback(() => <View style={styles.notchStyle} />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
    onSlidingComplete(low, high);
  }, []);

  return (
    <View style={{alignItems: 'center'}}>
    <Text style={styles.Text}>Range Slider</Text>
      <RangeSlider
        style={{
          width: '88%',
          marginBottom: 20,
        }}
        min={minPrice}
        max={maxPrice}
        step={steps}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
        // high={maxValue}
        // low={minValue}
      />
    </View>
  );
};
export default Rangeslide;

const styles = StyleSheet.create({
  priceRangeText: {
    fontSize: 10,
    color: "grey",
  },
  thumbStyle: {
    height: 28,
    width: 28,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 90,
  },
  railStyle: {
    height: 4,
    width: '100%',
    backgroundColor: "grey",
  },
  selectedRailStyle: {
    height: 4,
    width: '100%',
    backgroundColor: "red",
  },
  labelStyle: {
    color: "grey",
    fontSize: 10,
  },

  Text:{
    color: 'black',
    marginTop:20,
    marginBottom:10,
    fontWeight:'bold',
  }
});
