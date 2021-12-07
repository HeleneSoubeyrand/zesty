import React, { useState, createContext } from 'react';

const ListContext = createContext({})

const ListContextProvider = props => {
    const [list, setList] = useState([])
    const value = {
        list,
        setList
    }

  return (
    <ListContext.Provider value={value}>
      {props.children}
    </ListContext.Provider>
  )
}

export {
  ListContext,
  ListContextProvider
}