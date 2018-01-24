import React, { Component, PropTypes } from "react";
import {connect} from 'react-redux';
import { StackNavigator } from "react-navigation";
import { AsyncStorage, StyleSheet } from "react-native";
import HomeView from "./screens/HomeView/";
import RecordView from "./screens/RecordView/";

const App = StackNavigator({
    HomeView: { screen: HomeView },
    RecordView: { screen: RecordView },
    }, {
        headerMode: 'screen',
    });

export default App;

