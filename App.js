import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/Home.screen"
import DetailsScreen from "./screens/Details.screen"
import { Provider} from "react-redux"
import store from "./redux/store"
const Stack = createStackNavigator();

function App (){
    return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}



export default App;
