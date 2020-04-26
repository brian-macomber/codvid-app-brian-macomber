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

// import styles from './Styling/styles';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
  mapContainer: {
    position: 'relative',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container_api: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: '#fff',
  },
});

export default class TestComponent extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Yonk',
      headerStyle: {backgroundColor: '#fff'},
      headerTitleStyle: {textAlign: 'center', flex: 1},
    };
  };
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
          dataSource: responseJson.Countries,
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
      <Text style={styles.lightText}>
        {data.item.Country}: {data.item.TotalConfirmed}
      </Text>
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
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.Country}
        />
      </View>
    );
  }
}
