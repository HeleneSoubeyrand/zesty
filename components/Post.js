import React from 'react';
import { StyleSheet, Text, ActivityIndicator, Image } from 'react-native';
import { ListItem } from 'react-native-elements'

const Post = ({ post }) => {
    return (
        <ListItem style={styles.items} >
            <ListItem.Content>
                <Text style={styles.text}>{post.text}</Text>
                {post.imageUrl  == 0 ? ( 
                    <ActivityIndicator 
                        style={styles.activityIndicator}
                        size="large" 
                        color="black" 
                    />
                ):(
                    <Image 
                        source={{ uri: post.imageUrl }}
                        style={styles.image}
                    />
                )}   
            </ListItem.Content>
        </ListItem>
    );
};

const styles = StyleSheet.create({
    items: {
        width: 330,
    },
    activityIndicator: {
        width: "100%",
        height: 200,
        backgroundColor: "#E6E5E4",
    },
    image: {
        width: "100%",
        height: 200
    },
    text: {
        color: 'black',
        fontSize: 15,
        marginBottom: 10,
    },
})

export default Post;