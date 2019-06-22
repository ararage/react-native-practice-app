// React
import React, { Component } from "react";

// Native
import { FlatList } from "react-native";

//Redux
import { connect } from "react-redux";

// Components
import SuggestionLayout from "../components/SuggestionLayout";
import Empty from "../components/Empty";
import VerticalSeparator from "../../sections/components/VerticalSeparator";
import Suggestion from "../components/Suggestion";

function mapStateToProps(state) {
  return {
    list: state.suggestionList
  };
}

class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <VerticalSeparator />;
  viewMovie = item => {
    this.props.dispatch({
      type: "SET_SELECTED_MOVIE",
      payload: {
        movie: item
      }
    });
  };
  renderItem = ({ item }) => {
    return (
      <Suggestion
        {...item}
        onPress={() => {
          this.viewMovie(item);
        }}
      />
    );
  };
  keyExtractor = item => item.id.toString();

  render() {
    return (
      <SuggestionLayout title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </SuggestionLayout>
    );
  }
}

export default connect(mapStateToProps)(SuggestionList);
