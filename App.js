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
import API from "./utils/Api";

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: []
  };
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();

    this.setState({
      suggestionList: movies,
      categoryList: categories
    });
  }
  render() {
    return (
      <Home>
        <Header />

        <Text>Buscador</Text>
        <Text>Caegrotias</Text>
        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}
