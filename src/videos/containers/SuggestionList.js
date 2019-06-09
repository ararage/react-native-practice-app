import React, { Component } from 'react';
import { 
    FlatList, 
    Text
} from 'react-native';

import SuggestionLayout from '../components/SuggestionLayout';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator';
import Suggestion from '../components/Suggestion';

class SuggestionList extends Component {
    renderEmpty = () => <Empty text="No hay sugerencias" />
    itemSeparator = () => <Separator />
    renderItem = ({ item }) => {
        return (
            <Suggestion {...item}/>
        );
    };

    render(){
        const list = [
            {
                title:'Avengers',
                key: '1'
            },
            {
                title: 'Pokemon',
                key: '2'
            }
        ]
        return(
            <SuggestionLayout title="Recomendado para ti">
                <FlatList
                    data={list}
                    ListEmptyComponent={ this.renderEmpty }
                    ItemSeparatorComponent={ this.itemSeparator }
                    renderItem={this.renderItem}/>
            </SuggestionLayout>
        );
    }
}

export default SuggestionList;