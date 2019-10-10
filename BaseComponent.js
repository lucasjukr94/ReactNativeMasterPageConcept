import React from 'react'
import {View,Text,Button} from 'react-native'
import Home from './Home.js'

export default class BaseComponent extends React.Component{

    loadBody = <View></View>

    loadPage(page){
        let jsx = <View></View>
        if(page === "Home"){
            jsx = <Home />
        }
        this.loadBody = jsx
        this.forceUpdate()
    }

    render(){
        return(
            <View>
                <View>
                    <Text>Main Menu</Text>
                    <Button
                        title="Home"
                        onPress={() => this.loadPage("Home")}
                    />
                </View>
                {this.loadBody}
            </View>
        )
    }
}