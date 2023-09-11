import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/views/Home/Home';
import { RegisterScreen } from './src/views/Register/Register';

export type RootStackParamsList = {
    HomeScreen: undefined,
    RegisterScreen: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen} />
        <Stack.Screen 
          name="RegisterScreen" 
          component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;