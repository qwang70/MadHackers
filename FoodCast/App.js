/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  Tab,
  StyleSheet,
  View,
} from 'react-native';
import styles from './styles';

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screen';


registerScreens();
Navigation.startTabBasedApp({
  tabs: [
    {
      label: "Donor",
      icon: require('./asset/icon/home.png'),
      screen: 'MadHackers.HomeScreen', // unique ID registered with Navigation.registerScreen
      // icon: require('./asset/home.png'), // local image asset for the tab icon unselected state (optional on iOS)
      // selectedIcon: require('./asset/home.png'), // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
      title: 'FoodCast', // title of the screen as appears in the nav bar (optional)
      // titleImage: require('./asset/home.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
      navigatorStyle: {
        navBarTextColor: '#fff', // change the text color of the title (remembered across pushes)
        navBarTextFontSize: 22, // change the font size of the title
        // navBarTextFontFamily: 'Rubik-Regular', // Changes the title font
        navBarBackgroundColor: '#ff8000',
        navBarNoBorder: true,
      }, // override the navigator style for the tab screen, see "Styling the navigator" below (optional),
      navigatorButtons:  // override the nav buttons for the tab screen, see "Adding buttons to the navigator" below (optional)
        {
          rightButtons: [
            {
              // systemItem: 'add',
              icon: require('./asset/icon/add.png'),
              id: 'add', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked,
              disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors

            }
          ]
        }
    },
    {
      label: "History",
      screen: 'MadHackers.HistoryScreen', // unique ID registered with Navigation.registerScreen
      icon: require('./asset/icon/history.png'), // local image asset for the tab icon unselected state (optional on iOS)
      // selectedIcon: require('./asset/home.png'), // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
      title: 'FoodCast', // title of the screen as appears in the nav bar (optional)
      // titleImage: require('./asset/home.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
      navigatorStyle: {
        navBarTextColor: '#fff', // change the text color of the title (remembered across pushes)
        navBarTextFontSize: 22, // change the font size of the title
        // navBarTextFontFamily: 'Rubik-Regular', // Changes the title font
        navBarBackgroundColor: '#ff8000',
        navBarNoBorder: true,
      }, // override the navigator style for the tab screen, see "Styling the navigator" below (optional),
    },
    {
      label: "Account",
      screen: 'MadHackers.AccountScreen', // unique ID registered with Navigation.registerScreen
      icon: require('./asset/icon/account.png'), // local image asset for the tab icon unselected state (optional on iOS)
      // selectedIcon: require('./asset/home.png'), // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
      title: 'FoodCast', // title of the screen as appears in the nav bar (optional)
      // titleImage: require('./asset/home.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
      navigatorStyle: {
        navBarTextColor: '#fff', // change the text color of the title (remembered across pushes)
        navBarTextFontSize: 22, // change the font size of the title
        // navBarTextFontFamily: 'Rubik-Regular', // Changes the title font
        navBarBackgroundColor: '#ff8000',
        navBarNoBorder: true,
      }, // override the navigator style for the tab screen, see "Styling the navigator" below (optional),
    },
  ],
  tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
    tabBarSelectedButtonColor: '#ff8000', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
  },
  appStyle: {
    // backButtonImage: require('./pathToImage.png'),
    hideBackButtonTitle: true // Hide back button title. Default is false. If `backButtonTitle` provided so it will take into account and the `backButtonTitle` value will show. iOS only
  },
},
);

// type Props = {};
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Tab />
      </View>
    );
  }
}