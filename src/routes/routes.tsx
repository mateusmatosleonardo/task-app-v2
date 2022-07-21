import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Clipboard from '@expo/vector-icons/Feather';
import User from '@expo/vector-icons/Feather';
import BarChart from '@expo/vector-icons/Feather';
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#ffffff',
        drawerInactiveTintColor: '#000',
        drawerActiveBackgroundColor: 'rgba(245, 137, 102, 0.8)',
      }}>
      <Drawer.Screen name="Home" component={Home} options={{
        drawerIcon: ({ color }) => (
          <Clipboard name="clipboard" color={color} size={20} style={{ marginRight: -20 }} />
        )
      }} />
      <Drawer.Screen name="Profile" component={Details} options={{
        drawerIcon: ({ color }) => (
          <User name="user" color={color} size={20} style={{ marginRight: -20 }} />
        )
      }} />
      <Drawer.Screen name="Activities" component={Details} options={{
        drawerIcon: ({ color }) => (
          <BarChart name="bar-chart-2" color={color} size={20} style={{ marginRight: -20 }} />
        )
      }} />
    </Drawer.Navigator>
  )
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Drawer">
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}