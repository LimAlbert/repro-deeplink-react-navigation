/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

function App({navigation}: any): React.JSX.Element {
  return (
    <SafeAreaView>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('page');
        }}>
        <Text style={{color: 'black'}}>GO TO PAGE 2</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function Page(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text style={{color: 'black'}}>PAGE 2</Text>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      home: 'home',
      page: 'page',
    },
  },
};

const Root = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={App} />
        <Stack.Screen name="page" component={Page} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
