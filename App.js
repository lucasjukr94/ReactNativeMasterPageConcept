import React from 'react';
import { View } from 'react-native';
import Home from './Home.js'
import BaseComponent from './BaseComponent.js';

class App extends React.Component{
  render(){
    return(
      <View>
        <BaseComponent />
      </View>
    )
  }
}

export default App