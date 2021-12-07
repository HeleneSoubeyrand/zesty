import React, { useContext } from 'react';
import { 
    StyleSheet, 
    FlatList, 
} from 'react-native';
import { ListContext } from '../contexts/List'
import Post from './Post'


const List = () => {
    const { list, setList } = useContext(ListContext)
     
    return (
        <>
            <FlatList
                data={list}
                keyExtractor={item => item.text}
                renderItem={({ item }) => (   
                <Post
                    style={styles.post}
                    post={item}
                />
                )}  
            />
        </>
    );
};

const styles = StyleSheet.create({
    post: {
        borderWidth: 1,
        borderColor: 'white',
        margin: 5,
        padding: 10,
        width: 200,
    },
})

export default List;