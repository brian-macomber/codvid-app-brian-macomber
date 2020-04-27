import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView, {
  AnimatedRegion,
  Animated,
  Marker,
  Callout,
} from 'react-native-maps';

import csvjson from '../countryData/csvjson';
import styles from '../Styling/styles';

export default class MapComponent extends Component {
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

  getMarkerData() {
    markerDataDict = {};

    let {dataSource} = this.state;

    // go through api data
    dataSource.forEach(countryData => {
      markerDataDict[countryData.CountryCode] = {
        country: countryData.Country,
        countryCode: countryData.CountryCode,
        cases: countryData.TotalConfirmed,
        coord: null,
      };
    });

    csvjson.forEach(countryRow => {
      if (markerDataDict[countryRow.country]) {
        markerDataDict[countryRow.country].coord = {
          latitude: Number(countryRow.latitude),
          longitude: Number(countryRow.longitude),
        };
      }
    });

    return Object.values(markerDataDict);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}>
          {this.getMarkerData().map(markerData => {
            if (markerData.coord) {
              return (
                <Marker
                  key={markerData.countryCode}
                  pinColor="#8a2be2"
                  coordinate={{
                    latitude: markerData.coord.latitude,
                    longitude: markerData.coord.longitude,
                  }}>
                  <Callout>
                    <Text style={styles.countryTitle}>
                      {markerData.country}
                    </Text>
                    <Text> Number of cases: {markerData.cases}</Text>
                  </Callout>
                </Marker>
              );
            } else {
              return null;
            }
          })}
          <Marker
            key="YEET"
            pinColor="#8a2be2"
            coordinate={{
              latitude: 1,
              longitude: 1,
            }}>
            <Callout>
              <Text>Country: MY COUNTRY</Text>
              <Text> Number of cases: </Text>
            </Callout>
          </Marker>
        </MapView>
      </View>
    );
  }
}
