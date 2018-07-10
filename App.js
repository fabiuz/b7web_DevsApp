import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import firebase from './src/FirebaseConnection';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStorage, applyMiddleware } from 'redux';
import { reduxThunk } from 'redux-thunk';
import Reducers  from './src/fbReducers';
import Preload from './src/Preload';
//import Home from './src/Home';

let store = createStorage(Reducers, applyMiddleware(reduxThunk));

const Navegador = StackNavigator({
    Preload:{
        screen:Preload,
    },
    // Home: {
    //     screen: Home
    // }
});


export default class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <Navegador/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    welcome:{
        fontSize:20,
        textAlign: 'center',
        margin:10,
    },
});
