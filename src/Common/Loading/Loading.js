import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

const Loading = () => {
  const [loading, setLoading] = useState(false);
  const onLoading = () => {
    setLoading(true)
  }
  return ( 
    <View style={styles.logBtn}>
      <TouchableOpacity onPress={() => onLoading()}>
        <Text style={styles.loadingText}>
          {loading === true ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            'Loading'
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
    
  logBtn: {
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    backgroundColor: '#da1b3f',
    borderRadius: 6,
  },

  loadingText: {
    paddingTop: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});
