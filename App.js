/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text } from "react-native";
import { Provider } from "react-redux";

// Components
import Header from "./src/sections/components/Header";

// Containers
import Home from "./src/screens/containers/Home";
import SuggestionList from "./src/videos/containers/SuggestionList";
import CategoryList from "./src/videos/containers/CategoryList";
import Player from "./src/player/containers/Player";

// Provider
import API from "./utils/Api";

// Store
import Store from "./Store";

type Props = {};
export default class App extends Component<Props> {
  state = {
    //suggestionList: [],
    //categoryList: []
  };
  async componentDidMount() {
    let categoryList = await API.getMovies();
    categoryList = categoryList.filter(x => "genres" in x);
    Store.dispatch({
      type: "SET_CATEGORY_LIST",
      payload: {
        categoryList
      }
    });
    let suggestionList = await API.getSuggestion(10);
    Store.dispatch({
      type: "SET_SUGGESTION_LIST",
      payload: {
        suggestionList
      }
    });
    /*this.setState({
      suggestionList: movies,
      categoryList: categories
    });*/
  }
  render() {
    return (
      <Provider store={Store}>
        <Home>
          <Header />
          <Player />
          <Text>Buscador</Text>
          <Text>Categorias</Text>
          <CategoryList />
          <SuggestionList />
        </Home>
      </Provider>
    );
  }
}
