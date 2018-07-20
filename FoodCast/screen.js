import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import HistoryScreen from './HistoryScreen';
// import AccountScreen from './AccountScreen';
import DonorForm from './Form'

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('MadHackers.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('MadHackers.HistoryScreen', () => HistoryScreen);
  Navigation.registerComponent('MadHackers.AccountScreen', () => HomeScreen);
  Navigation.registerComponent('MadHackers.DonorForm', () => DonorForm);
}