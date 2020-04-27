import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
  countryTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 35,
  },
});
