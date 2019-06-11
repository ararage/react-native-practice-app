import React, { Component } from "react";
import { View, FlatList } from "react-native";
import CategoryLayout from "../components/CategoryLayout";
import Empty from "../components/Empty";
import HorizontalSeparator from "../../sections/components/HorizontalSeparator";
import Category from "../components/Category";

class CategoryList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <HorizontalSeparator />;
  renderItem = ({ item }) => {
    return <Category {...item} />;
  };
  keyExtractor = item => item.id.toString();
  render() {
    return (
      <CategoryLayout title="Categorías">
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </CategoryLayout>
    );
  }
}

export default CategoryList;
