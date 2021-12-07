import React from 'react';
import { 
    StyleSheet, 
    Text, 
    ActivityIndicator, 
    Image,
} from 'react-native';
import { ListItem } from 'react-native-elements'

const Post = ({ post }) => {
    return (
        <ListItem
        >
            <ListItem.Content>
                <Text style={styles.text}>{post.text}</Text>
                {post.imageUrl  == 0 ? ( 
                    <ActivityIndicator 
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
    image: {
        width: 200,
        height: 200
    },
    text: {
        color: 'black',
        fontSize: 15,
        marginBottom: 10,
    },
})

export default Post;