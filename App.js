import React from 'react';
import { View, StyleSheet, } from 'react-native';
import { ListContextProvider } from './contexts/List'
import List from './components/List'
import Input from './components/Input'


const App = () => {
  return (
    <ListContextProvider>
      <View style={styles.container}>
        <Input/>
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