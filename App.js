import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
} from 'react-native';
import { ListContextProvider } from './contexts/List'
import List from './components/List'
import Input from './components/Input'


const App = () => {
  return (
    <ListContextProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Input/>
        <List/>
      </ScrollView>
    </ListContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;