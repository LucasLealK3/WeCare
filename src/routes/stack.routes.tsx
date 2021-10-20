import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import { Welcome } from '../pages/Welcome';
import { Login } from '../pages/Login';


const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  
  <stackRoutes.Navigator
  screenOptions={{
      headerShown: false,
      cardStyle:{
      backgroundColor: colors.white
      },
    }}
  >
    <stackRoutes.Screen 
      name="Welcome"
      component={Welcome} 
    />

    <stackRoutes.Screen 
      name="Login"
      component={Login} 
    />

  </stackRoutes.Navigator>
)
export default AppRoutes;