import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import Share from "react-native-share";

const url = "https://pbs.twimg.com/";
const title = "Temporary";
const message = "Please check this out.";

const options = {
  title,
  url,
  message,
};


const ShareSnap = () => {
  const [image, setImage] = useState(
    "https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png"
  );
  const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={{ ...styles.containerImg, ...styles.stretchImg }}
      />
      
      <View style={{ marginVertical: 5 }}>
        <Button
          onPress={async () => {
            await share({
              title: "Sharing image file from Demo Test app",
              message: "Please take a look at this image",
              url:"https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png"
            });
          }}
          title="Share Image"
        />
      </View>
    </View>
  );
}

export default ShareSnap

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerImg: {
    paddingTop: 50,
    marginVertical: 20,
  },
  stretchImg: {
    width: 100,
    height: 100,
    resizeMode: "stretch",
  },
});