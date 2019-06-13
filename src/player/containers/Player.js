import React, { Component } from "react";
import moment from "moment";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import Video from "react-native-video";
import Layout from "../components/Layout";
import PlayPause from "../components/PlayPause";
import ControlLayout from "../components/ControlLayout";
import ProgressBar from "../components/ProgressBar";
import FullScreen from "../components/Fullscreen";

class Player extends Component {
  state = {
    loading: true,
    paused: false,
    videoDuration: 0,
    currentTime: 0
  };
  onBuffer = ({ isBuffering }) => {
    this.setState({ loading: isBuffering });
  };
  onLoad = payload => {
    this.setState({ loading: false, videoDuration: payload.duration });
  };
  playPause = () => {
    this.setState({ paused: !this.state.paused });
  };
  onFullScreen = () => {
    this.player.presentFullscreenPlayer();
  };
  onProgress = payload => {
    this.setState({
      currentTime: payload.currentTime
    });
  };
  onChangeFinished = payload => {
    this.player.seek(payload);
    this.setState({ paused: false, loading: false });
  };
  onChangeStarted = () => {
    this.setState({ paused: true, loading: true });
  };
  render() {
    let currentTime = moment(this.state.currentTime * 1000).format("mm:ss");
    let totalTime = moment(this.state.videoDuration * 1000).format("mm:ss");
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            source={{
              uri:
                "https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4"
            }}
            style={styles.backgroundVideo}
            resizeMode="contain"
            ref={ref => {
              this.player = ref;
            }}
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
            onProgress={this.onProgress}
          />
        }
        loader={<ActivityIndicator color="red" />}
        controls={
          <ControlLayout>
            <PlayPause onPress={this.playPause} paused={this.state.paused} />
            <ProgressBar
              onChangeFinished={this.onChangeFinished}
              onChangeStarted={this.onChangeStarted}
              progress={this.state.currentTime}
              videoDuration={this.state.videoDuration}
            />
            <Text style={styles.progressTime}>
              {currentTime} / {totalTime}
            </Text>
            <FullScreen onFullScreen={this.onFullScreen} />
          </ControlLayout>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

export default Player;
