import 'react-native-gesture-handler';
import React,{Component} from 'react';
import SplashScreen from 'react-native-splash-screen'

//Navigation
import Navigation from './src/navigation';

export default class App extends Component {
   componentDidMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }
  render() {
  console.disableYellowBox = true;
  return (
    <Navigation />
  );
}
}
