'use strict';
import React, { Component } from 'react';
import {
    AlertIOS,
    Button,
    Image,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import {
    Header,
    Card,
    ListItem
} from 'react-native-elements';
import styles from './styles';
import db from './db';


let sql = `SELECT Food, FoodQuantity, PickupUntil, Description FROM d WHERE FoodServiceName='Jimmy Johns'
  ORDER BY Date`;

export class RecycleCard extends Component {
    constructor(props) {
        super(props)
        const item = props.item;
        console.log("item ", item);
        this.state = {
            // rows=1,
        }
    };

    render() {
        return (
            <Card containerStyle={{
                borderRadius: 3,
                shadowOffset: { height: 0, width: 2 }
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
                        <Text style={{ fontWeight: '500', fontSize: 24 }}>Assorted Vegetables</Text>
                        {/* <Text style={{ fontWeight: '500', fontSize: 24 }}>{this.item.Food}</Text> */}
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
                            <Text style={{ color: '#ff8000', fontWeight: 'bold', fontSize: 14 }}>0/2 </Text><Text style={{ fontSize: 14 }}>reservations</Text>
                            {/* <Text style={{ color: '#ff8000', fontWeight: 'bold', fontSize: 14 }}>0/{this.item.FoodQuantity} </Text><Text style={{ fontSize: 14 }}>reservations</Text> */}

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
                            <Text style={{ fontSize: 14 }}><Text style={{ fontWeight: 'bold' }}>2</Text> servings</Text>
                            <Text style={{ fontSize: 14 }}><Text style={{ fontWeight: 'bold' }}>{this.item.FoodQuantity}</Text> servings</Text>
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
                            <Text style={{ fontWeight: 'bold' }}> 3:30PM</Text>
                            {/* <Text style={{ fontWeight: 'bold' }}> {this.state.PickupUntil}</Text> */}
                            </Text>
                        </View>
                        <View style={{
                            paddingTop: 10,
                            paddingDown: 10,
                        }}>
                            <Text style={{ fontSize: 13 }}>Diced carrots, whole onions, and some potatoes.</Text>
                            <Text style={{ fontSize: 13 }}>{this.state.description}</Text>
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
                    text: 'Donor',
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
            rows: [],
        };
        // if you want to listen on navigator events, set this up
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    };
    componentWillMount(){
        readDB
    };
    componentWillUpdate() {
        readDB
    };
    readDB() {
        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            this.state.rows = rows;
            rows.forEach((row) => {
                console.log(row.Food);
            });
        });
    };
    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'add') {
                this.props.navigator.push({
                    screen: 'MadHackers.DonorForm',
                    title: 'New Food Listing'
                });
            }
        }
    }
    _keyExtractor = (item, index) => index.toString();
    _renderItem = ({item, index}) => {
        return (
            <RecycleCard
              item={item}
              index={index}
            />
        );
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <FootCastHeader />
                <View style={styles.container}>
                <FlatList
                data={this.state.rows}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}/>
                </View>
            </View>
        );
    };

    _onNameTextChanged = (event) => {
        console.log('_onNameTextChanged');
        this.setState({ name: event.nativeEvent.text });
    };
}

