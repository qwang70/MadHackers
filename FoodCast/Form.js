
'use strict';
import React, { Component } from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import {
    Button,
    Header,
    FormLabel,
    FormInput,
    FormValidationMessage,
    Divider
} from 'react-native-elements';
import styles from './styles';
import db from './db';

// type Props = {};
export default class DonorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            type: '',
            nServering: '',
            pickUpTime: '5:30',
            day: 'P.M.',
            description: '',
        };
    };

    _onPressSubmit = () =>  {
        console.log("this.state", this.state);
        db.push({
            Food: this.state.title,
            FoodQuantity: this.state.FoodQuantity,
            PickupUntil: this.state.pickUpTime + this.state.day,
            Description: this.state.description
        });
        this.props.navigator.pop({
            animated: true, // does the pop have transition animation or does it happen immediately (optional)
            animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
          });
    };
    render() {
        return (
            <ScrollView style={{
                margin: 20
            }}>
                <Text style={styles.formDescription}>Food</Text>
                <TextInput style={styles.formInput}
                    value={this.state.title}
                    onChange={this._onTitleTextChanged}
                    placeholder='Name of food to donate' />
                <Text style={styles.formDescription}>Type of donation</Text>
                <TextInput style={styles.formInput}
                    value={this.state.type}
                    onChange={this._onTypeTextChanged}
                    placeholder='Type of donation' />
                <Text style={styles.formDescription}>Number of servings</Text>
                <TextInput style={styles.formInputHalf}
                    value={this.state.nServering}
                    onChange={this._onServingNumberTextChanged}
                />
                <Text style={styles.formDescription}>Available for pick-up until</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <View style={{ flex: 0.5 }}>
                        <TextInput style={styles.formInputHalf}
                            value={this.state.pickUpTime}
                            onChange={this._onPickUpTimeNumberTextChanged}

                        /></View><View style={{ flex: 0.5 }}><TextInput style={styles.formInputHalf}
                            value={this.state.day}
                            onChange={this._onDayNumberTextChanged}
                        />
                    </View></View>
                <Text style={styles.formDescription}>Description of food (optional)</Text>
                <TextInput style={styles.formInputLong}
                    multiline={true}
                    value={this.state.description}
                    onChange={this._onDescriptionTextChanged}
                />
                <Button title='CREATE NEW LISTING'
                    onPress={this._onPressSubmit}
                    buttonStyle={{
                        backgroundColor: '#ff8000', padding: 20
                    }
                    } />
            </ScrollView>
        );
    };

    _onTitleTextChanged = (event) => {
        this.setState({ title: event.nativeEvent.text });
    };
    _onTypeTextChanged = (event) => {
        this.setState({ type: event.nativeEvent.text });
    };
    _onServingNumberTextChanged = (event) => {
        this.setState({ nServering: event.nativeEvent.text });
    };
    _onPickUpTimeNumberTextChanged = (event) => {
        this.setState({ pickUpTime: event.nativeEvent.text });
    };
    _onDayNumberTextChanged = (event) => {
        this.setState({ day: event.nativeEvent.text });
    };
    _onDescriptionTextChanged = (event) => {
        this.setState({ description: event.nativeEvent.text });
    };
}

