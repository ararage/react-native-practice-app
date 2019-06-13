/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text } from "react-native";
import Home from "./src/screens/containers/Home";
import Header from "./src/sections/components/Header";
import SuggestionList from "./src/videos/containers/SuggestionList";
import CategoryList from "./src/videos/containers/CategoryList";
import Player from "./src/player/containers/Player";
import API from "./utils/Api";

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: []
  };
  async componentDidMount() {
    let movies = await API.getSuggestion(10);
    let categories = await API.getMovies();
    categories = categories.filter(x => "genres" in x);
    this.setState({
      suggestionList: movies,
      categoryList: categories
    });
  }
  render() {
    return (
      <Home>
        <Header />
        <Player />
        <Text>Buscador</Text>
        <Text>Caegrotias</Text>
        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}
