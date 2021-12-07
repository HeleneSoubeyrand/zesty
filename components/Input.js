import React, { useState, useEffect, useContext } from 'react';
import { 
    StyleSheet, 
    View,
    TextInput,  
    Pressable,
    Text, 
} from 'react-native';
import { ListContext } from '../contexts/List'

const Input = () => {
    const { list, setList } = useContext(ListContext)
    const [text, setText] = useState([])  
    const [imageUrl, setImageUrl] = useState([])
  
    useEffect(() => {
        fetch("https://coffee.alexflipnote.dev/random.json", {
            mode: 'cors'
        })
        .then(response => response.json())
        .then(data => setImageUrl(data.file))
        .catch(err => alert(err))       
    }, [])

    // useEffect(() => {
    //     fetch("https://coffee.alexflipnote.dev/random.json")
    //     .then(response => response.json())
    //     .then(data=> setImageUrl(data.file))
    //     .catch(err => alert(err))       
    // }, [list])


    const addPost = () => {
        setList([{text, imageUrl}, ...list])
        setText([])
    }
  
    return (
        <View style={styles.containerInput}>
            <View style={styles.input}>
                <TextInput
                     value={text}
                     onChangeText={(text) => setText(text)}
                     placeholder= "Quoi de neuf ?"
                />
            </View>
                <Pressable 
                    style={styles.button} 
                    onPress={() => addPost()}
                >
                    <Text style={styles.buttonText}>Publier</Text>
                </Pressable>  
        </View>
    );
};

const styles = StyleSheet.create({
    containerInput: {
        alignItems: 'flex-end',
    },
    input: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#E6E5E4',
        borderRadius: 5,
        width: 300,
    },
    button: {
        width: 90,
        backgroundColor: "#FFD933",
        borderRadius: 5,
        padding: 5,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: 'center'
    },
});

export default Input;