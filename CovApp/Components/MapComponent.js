import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView, {AnimatedRegion, Animated} from 'react-native-maps';

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

export default class MapComponent extends Component {
  //   componentDidMount(){
  //     // get data from csv file
  //   csvFilePath='<path to csv file>'
  //   csv=require('csvtojson')
  //   csv()
  //   .fromFile(csvFilePath)
  //   .then((jsonObj)=>{
  //       console.log(jsonObj);
  //       /**
  //        * [
  //        * 	{a:"1", b:"2", c:"3"},
  //        * 	{a:"4", b:"5". c:"6"}
  //        * ]
  //        */
  //   })

  // // Async / await usage
  // const jsonArray=await csv().fromFile(csvFilePath);

  //   }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 42.3429507,
            longitude: -71.1031784,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}
