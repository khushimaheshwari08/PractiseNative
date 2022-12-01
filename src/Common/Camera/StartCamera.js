import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  PermissionsAndroid,
  Alert,
  Platform,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import {CameraScreen} from 'react-native-camera-kit';

const StartCamera = () => {
  const navigation = useNavigation();
  const [isPermitted, setIsPermitted] = useState(false);
  const [captureImages, setCaptureImages] = useState([]);
  const [imagePath, setImagePath] = useState('');

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera permission',
        },
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const requestExternalWritePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'External Storage Write Permission',
          message: 'App needs write permission',
        },
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      alert('Write permission err', err);
    }
    return false;
  };

  const requestExternalReadPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Read Storage Permission',
          message: 'App needs Read Storage Permission',
        },
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      alert('Read permission err', err);
    }
    return false;
  };

  const openCamera = async () => {
    if (Platform.OS === 'android') {
      if (await requestCameraPermission()) {
        if (await requestExternalWritePermission()) {
          if (await requestExternalReadPermission()) {
            setIsPermitted(true);
          } else alert('READ_EXTERNAL_STORAGE permission denied');
        } else alert('WRITE_EXTERNAL_STORAGE permission denied');
      } else alert('CAMERA permission denied');
    } else {
      setIsPermitted(true);
    }
  };

  const onBottomButtonPressed = event => {
    const images = JSON.stringify(event.captureImages);
    setImagePath(event.captureImages[0].uri);

    if (event.type === 'left') {
      setIsPermitted(false);
    } else if (event.type === 'right') {
      setIsPermitted(false);
      setCaptureImages(images);
    }
    // else {
    //   Alert.alert(
    //     event.type,
    //     images,
    //     [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    //     {cancelable: false},
    //   );
    // }
  };

  const saveImageToGallery = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message: 'App needs access to your storage to download Photos',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Storage Permission Granted.');
        // savePicture();
        CameraRoll.save(imagePath);
        ToastAndroid.showWithGravity(
          'Image Successfully Saved!!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
        navigation.goBack();
      } else {
        alert('Storage Permission Not Granted');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        {imagePath === '' ? (
          <CameraScreen
            onBottomButtonPressed={event => onBottomButtonPressed(event)}
            cameraFlipImage={require('../../assets/flip.png')}
            cameraFlipImageStyle={{
              height: 80,
            }}
            captureButtonImage={require('../../assets/capture.png')}
            captureButtonImageStyle={{
              height: 80,
              marginRight: 170,
            }}
            hideControls={false}
            showCapturedImageCount={false}
          />
        ) : (
          <View style={{flex: 1, position: 'relative'}}>
            <Image
              source={{
                uri: imagePath,
              }}
              style={{flex: 1}}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  style={{height: 120, width: 120}}
                  source={require('../../assets/wrong.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={saveImageToGallery}>
                <Image
                  style={{height: 70, width: 70, marginRight: 20}}
                  source={require('../../assets/correct.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default StartCamera;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    marginTop: 16,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    marginTop: 32,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
  iconContainer: {
    position: 'absolute',
    bottom: 10,
  },
});
