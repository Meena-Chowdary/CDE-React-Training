import React from 'react';
import { StyleSheet} from 'react-native';
import MyStackNavigator from './components/routes/stacknavigation';

export default function App() {
  return (
    <MyStackNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
