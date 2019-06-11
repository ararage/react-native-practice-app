import React from "react";
import { StyleSheet, Text, ImageBackground, Platform } from "react-native";

function Category(props) {
  return (
    <ImageBackground
      style={styles.wrapper}
      source={{ uri: props.background_image }}
    >
      <Text style={styles.genre}>{props.genres[0]}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center"
  },
  genre: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,0)",
    textShadowOffset: {
      width: 2,
      height: 2
    },
    ...Platform.select({
      ios: { textShadowRadius: 0 },
      android: { textShadowRadius: 1 }
    })
  }
});

export default Category;
