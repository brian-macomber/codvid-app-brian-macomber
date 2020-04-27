import React, {Component} from 'react';

import GlobalComponent from './Components/GlobalComponent';
import MapComponent from './Components/MapComponent';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

class App extends Component {
  state = {};

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Map" component={MapComponent} />
          <Tab.Screen name="Stats" component={GlobalComponent} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
