import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Video from "react-native-video";

class Player extends Component {
  render() {
    <Video
      source={{
        uri:
          "https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4"
      }}
      style={styles.video}
      resizeMode="contain"
      ref={(ref: Video) => {
        this.video = ref;
      }}
    />;
  }
}

const styles = StyleSheet.create({
  video: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
});

export default Player;
