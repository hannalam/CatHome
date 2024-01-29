//I wrote this code

import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 
import HomeScreen from '../screens/Home/HomeScreen';
import CatTypeScreen from '../screens/CatType/CatTypeScreen';
import CatInfoScreen from '../screens/CatInfo/CatInfoScreen';
import CatGroupScreen from '../screens/CatGroup/CatGroup';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import CommonInterestScreen from '../screens/CommonInterest/CommonInterestScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import InterestsScreen from '../screens/Interests/InterestsScreen';

// Create a stack navigator for the main screens of the app.
const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          }
      }}
    >
      {/* Define screens and their corresponding components */}
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='CatType' component={CatTypeScreen}/>
      <Stack.Screen name='CatInfo' component={CatInfoScreen}/>
      <Stack.Screen name='CatGroup' component={CatGroupScreen} />
      <Stack.Screen name='CommonInterest' component={CommonInterestScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='Interests' component={InterestsScreen} />
    </Stack.Navigator>
  )
} 

// Create a drawer navigator for app navigation.
const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
} 

// The top-level component responsible for app navigation.
 export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} 
 

console.disableYellowBox = true;

//end of code I wrote