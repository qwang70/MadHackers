'use strict';
import React, { Component } from 'react';
import {
    Button,
    FlatList,
    ScrollView,
    Image,
    RefreshControl,
    Text,
    View,
} from 'react-native';
import {
    Header,
    Card
} from 'react-native-elements';
import styles from './styles';
import db from './db';

export class RecycleCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: props.item,
        };
        console.log("props", props);
    };
    
    render() {
        console.log("renders ")
        return (

            <Card containerStyle={{
                borderRadius: 3,
                shadowOffset: { height: 2, width: 2 },
                shadowRadius: 3
            }} >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    minHeight: '20%',
                }}>
                    <View style={{
                        flex: 0.2,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        margin: 5,
                    }}>
                        <Image
                            style={{ resizeMode: 'contain' }}
                            source={require('./asset/icon/veg.png')}
                        />

                    </View>
                    <View style={{
                        flex: 0.8,
                        paddingLeft: 10,
                        paddingRight: 10,
                        justifyContent: 'center',
                    }}>
                        <Text style={{ fontWeight: '500', fontSize: 24 }}>{this.state.item.Food}</Text>
                        <View style={{
                            flexDirection: 'row',
                            margin: 5
                        }}>
                            <View style={{
                                paddingRight: 10,
                                alignSelf: 'center',
                            }}>
                                <Image
                                    style={{ resizeMode: 'contain' }}
                                    source={require('./asset/icon/card-availability.png')}
                                />

                            </View>
                            <Text style={{ color: '#ff8000', fontWeight: 'bold', fontSize: 14 }}>0/{this.state.item.FoodQuantity} </Text><Text style={{ fontSize: 14 }}>reservations</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            margin: 5
                        }}>
                            <View style={{
                                paddingRight: 10,
                                alignSelf: 'center',
                            }}>
                                <Image
                                    style={{ resizeMode: 'contain' }}
                                    source={require('./asset/icon/card-ppl.png')}
                                />

                            </View>
                            <Text style={{ fontSize: 14 }}><Text style={{ fontWeight: 'bold' }}>{this.state.item.FoodQuantity}</Text> servings</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            margin: 5
                        }}>
                            <View style={{
                                paddingRight: 10,
                                alignSelf: 'center',
                            }}>
                                <Image
                                    style={{ resizeMode: 'contain' }}
                                    source={require('./asset/icon/card-time.png')}
                                />

                            </View>
                            <Text style={{ fontSize: 14 }}>Availabile until
                        <Text style={{ fontWeight: 'bold' }}> {this.state.item.PickupUntil}</Text>
                            </Text>
                        </View>
                        <View style={{
                            paddingTop: 10,
                            paddingDown: 10,
                        }}>
                            <Text style={{ fontSize: 13 }}>{this.state.item.Description}</Text>
                        </View>
                    </View>
                </View>
            </Card>
        )
    }
}

export class FootCastHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            press: false,
        }
    };
    render() {
        return (
            <Header
                centerComponent={{
                    text: 'Donor - Jimmy Johns',
                    style: {
                        color: '#fff',
                        fontWeight: '500',
                        fontSize: 13,
                        padding: 0, margin: 0
                        // fontFamily: 'Rubik-Regular'
                    }
                }}
                outerContainerStyles={{ backgroundColor: '#ff8000', height: 30, paddingTop: 0 }}
            />
        );
    };
}

// type Props = {};
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            refreshing: false,
            selected: db.length,
        };
        // if you want to listen on navigator events, set this up
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    };
    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'add') {
                this.props.navigator.push({
                    screen: 'MadHackers.DonorForm',
                    title: 'New Food Listing',

                    animated: true, // does the pop have transition animation or does it happen immediately (optional)
                    animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
                });
            }
        }
        console.log("event.id " , event.id);
        console.log(db);
        if(event.id == 'willAppear'){
            this.state.refreshing = true;
            this.state.selected = db.length;
            console.log("this.state.selected ", this.state.selected);
        }
    }
    _onRefresh = () => {
        console.log("_onRefresh");
        this.setState({refreshing: false});
      }
    _keyExtractor = (item, index) => index.toString();
    _renderItem = ({ item, index }) => {
        return (
            <RecycleCard
                item={item}
                index={index}
            />
        );
    };
    render() {
        console.log("renders ");
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <FootCastHeader />
                <ScrollView style={styles.container}>
                    <FlatList
                        data={db}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem} 
                        extraData={this.state}
                        refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />}/>
                </ScrollView>
            </View>
        );
    };


    _onNameTextChanged = (event) => {
        console.log('_onNameTextChanged');
        this.setState({ name: event.nativeEvent.text });
    };
}

