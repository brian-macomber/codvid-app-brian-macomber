// Code referenced for API call & formatting:
// https://medium.com/better-programming/handling-api-like-a-boss-in-react-native-364abd92dc3d

import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from '../Styling/styles';

export default class GlobalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: [],
    };
  }
  componentDidMount() {
    fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          dataSource: responseJson.Global,
        });
      })
      .catch(error => console.log(error)); //to catch the errors if any
  }
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
    );
  };
  renderItem = data => (
    <TouchableOpacity style={styles.list}>
      <Text> Total Confirmed Cases: {data.item.TotalConfirmed}</Text>
      <Text> Death Total: {data.item.TotalDeaths}</Text>
      <Text> Total Recovered Cases: {data.item.TotalRecovered}</Text>
    </TouchableOpacity>
  );
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      );
    }
    return (
      <View style={styles.container_api}>
        <Text style={styles.title}>Global Covid-19 Statistics: </Text>
        <Text style={styles.list}>
          Confirmed Cases: {this.state.dataSource.TotalConfirmed}
        </Text>
        <Text style={styles.list}>
          Recovered Cases: {this.state.dataSource.TotalRecovered}
        </Text>
        <Text style={styles.list}>
          Death Total: {this.state.dataSource.TotalDeaths}
        </Text>
      </View>
    );
  }
}
