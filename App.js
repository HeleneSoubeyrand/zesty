import React from 'react';
import { View, StyleSheet, } from 'react-native';
import { ListContextProvider } from './contexts/List'
import List from './components/List'
import Form from './components/Form'


const App = () => {
  return (
    <ListContextProvider>
      <View style={styles.container}>
        <Form/>
        <List/>
      </View>
    </ListContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;