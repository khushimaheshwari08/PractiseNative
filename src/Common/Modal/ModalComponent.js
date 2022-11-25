import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';

const ModalComponent = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Modal</Text>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal  isVisible={isModalVisible} >
        <View >
          <Text style={styles.modalText}>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginBottom:20,
    marginRight:20
  },
  Text: {
    marginLeft: 10,
    color: 'black',
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },

  modalText:{
    fontSize:20,
  }
});
