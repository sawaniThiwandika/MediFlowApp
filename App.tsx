

import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';


import AppNavigation from './src/navigations/AppNavigation';

function App(): React.ReactElement {
  return (
    <View style={styles.container}>
     <AppNavigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
