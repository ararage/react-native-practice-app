// React Native
import React, { Component } from "react";
import { Text } from "react-native";

import { connect } from "react-redux";

// Components
import Header from "../src/sections/components/Header";

// Provider
import API from "../utils/Api";

// Containers
import Home from "../src/screens/containers/Home";
import SuggestionList from "../src/videos/containers/SuggestionList";
import CategoryList from "../src/videos/containers/CategoryList";
import Player from "../src/player/containers/Player";
import MovieContainer from "../src/screens/containers/MovieContainer";

class AppLayout extends Component {
  state = {
    //suggestionList: [],
    //categoryList: []
  };
  async componentDidMount() {
    let categoryList = await API.getMovies();
    categoryList = categoryList.filter(x => "genres" in x);
    this.props.dispatch({
      type: "SET_CATEGORY_LIST",
      payload: {
        categoryList
      }
    });
    let suggestionList = await API.getSuggestion(10);
    this.props.dispatch({
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
    if (this.props.selectedMovie) {
      return <MovieContainer />;
    } else {
      return (
        <Home>
          <Header />
          <Text>Buscador</Text>
          <Text>Categorias</Text>
          <CategoryList />
          <SuggestionList />
        </Home>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie
  };
}

export default connect(mapStateToProps)(AppLayout);
