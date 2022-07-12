import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import Details from "../pages/Details";

const Drawer = createDrawerNavigator();

export default function Routes(){
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" 
        screenOptions={{headerShown: false, 
          drawerActiveTintColor: '#ffffff',
          drawerInactiveTintColor: '#000',
          drawerActiveBackgroundColor: '#FF4848'}}>
        <Drawer.Screen name="Tarefas" component={Home}/>
        <Drawer.Screen name="Perfil" component={Details}/>
        <Drawer.Screen name="Atividades" component={Details}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}