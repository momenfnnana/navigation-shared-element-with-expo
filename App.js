// this app an exmple on react-navigation-shared-element
// first step after initialsing app and customizing all component want to share between multiple screens
// install those libraries and packages
// yarn add react-navigation-shared-element@next react-native-shared-element
// yarn add @react-navigation/native@^5.0.9 @react-navigation/stack@^5.1.1
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// importing component from libraries as you see below
// the usage of createSharedElementStackNavigator is same with createStackNavigator that comming from @react-navigation/stack
// right now your app should work excatly without problems and without sharing comoponent
// to apply share component from screen to another should wrap whole component want to share with SharedElement see List Screen Cont...
import React from 'react';
import { Easing, StyleSheet, Text, View } from 'react-native';
import { enableScreens } from "react-native-screens";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { NavigationContainer } from "@react-navigation/native";
import List from "./Screens/List";
import Detail from "./Screens/Detail";
enableScreens();

const Stack = createSharedElementStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List" headerMode="none">
        <Stack.Screen name="List" component={List} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: {
                animation: "timing",
                config: { duration: 500, easing: Easing.inOut(Easing.ease) }
              },
              close: {
                animation: "timing",
                config: { duration: 500, easing: Easing.inOut(Easing.ease) }
              },
            },
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress,
                }
              }
            }
          })} />
      </Stack.Navigator>
    </NavigationContainer>
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
