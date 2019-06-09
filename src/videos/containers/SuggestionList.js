import React, { Component } from 'react';
import { 
    FlatList, 
    Text
} from 'react-native';

import SuggestionLayout from '../components/SuggestionLayout';
import Empty from '../components/Empty';
import VerticalSeparator from '../../sections/components/VerticalSeparator';
import Suggestion from '../components/Suggestion';

class SuggestionList extends Component {
    renderEmpty = () => <Empty text="No hay sugerencias" />
    itemSeparator = () => <VerticalSeparator />
    renderItem = ({ item }) => {
        return (
            <Suggestion {...item}/>
        );
    };
    keyExtractor = (item) => item.id.toString();

    render(){
        return(
            <SuggestionLayout title="Recomendado para ti">
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent={ this.renderEmpty }
                    ItemSeparatorComponent={ this.itemSeparator }
                    renderItem={this.renderItem}/>
            </SuggestionLayout>
        );
    }
}

export default SuggestionList;