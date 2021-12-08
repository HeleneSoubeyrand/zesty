import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ListContext } from '../contexts/List'

const Input = () => {
    const { list, setList } = useContext(ListContext)
    const [textPost, setTextPost] = useState("")  
    const [imageUrl, setImageUrl] = useState("")
  
    useEffect(() => {
        fetch("https://coffee.alexflipnote.dev/random.json")
        .then(response => response.json())
        .then(data=> setImageUrl(data.file))
        .catch(err => alert(err))       
    }, [list])

    const handleSubmit = () => {
        if (textPost === "") {
            setList([{
                text: "Sans titre", 
                imageUrl: imageUrl
            }, ...list])
            setTextPost("")  
        } else {
            setList([{
                text: textPost, 
                imageUrl: imageUrl
            }, ...list])
            setTextPost("")   
        }       
    }
  
    return (
        <View style={styles.containerInput}>
            <TextInput
                value={textPost}
                onChangeText={(text) => setTextPost(text)}
                placeholder= "Quoi de neuf ?"
                mode="outlined"
                style={styles.input}
            />
            <TouchableOpacity 
                onPress={() => handleSubmit()}
                style={styles.button} 
            >
                <Text style={styles.buttonText}>Publier</Text>
            </TouchableOpacity>  
        </View>
    );
};

const styles = StyleSheet.create({
    containerInput: {
        alignItems: 'flex-end',
        marginBottom: 10,
    },
    input: {
        marginBottom: 10,
        width: 300,
    },
    button: {
        width: 100,
        backgroundColor: "#FFD933",
        borderRadius: 7,
        padding: 10,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: 'center'
    },
});

export default Input;