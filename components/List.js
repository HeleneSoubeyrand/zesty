import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { ListContext } from '../contexts/List'
import Post from './Post'


const List = () => {
    const { list } = useContext(ListContext)
     
    return (
        <FlatList
            data={list}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (   
            <Post
                post={item}
            />
            )}  
        />
    );
};

export default List;