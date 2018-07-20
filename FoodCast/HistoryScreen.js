'use strict';
import React, {Component} from 'react';
import {
  Button, 
  Platform, 
  StyleSheet, 
  Text, 
  TextInput,
  View,
} from 'react-native';
import { 
  Header,
  FormLabel, 
  FormInput, 
  FormValidationMessage, 
  Divider} from 'react-native-elements';
import styles from './styles';

// type Props = {};
export default class HistoryScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ''
      };
    };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>

            <Text style={styles.welcome}>Welcome to FoodCast!</Text>
            <Text style={styles.container}>Name</Text>
            <TextInput 
            value={this.state.name} 
            onChange={this._onNameTextChanged}
            placeholder='Company Name'
            />
        </View>
    </View>
    );
  };

  _onNameTextChanged = (event) => {
    console.log('_onNameTextChanged');
    this.setState({ name: event.nativeEvent.text });
  };
}

