import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import { Initial } from '../pages/Initial';
import { Login } from '../pages/Login';
import { Welcome } from '../pages/Welcome';


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
      name="Initial"
      component={Initial} 
    />

    <stackRoutes.Screen 
      name="Login"
      component={Login} 
    />

    <stackRoutes.Screen 
      name="Welcome"
      component={Welcome} 
    />

  </stackRoutes.Navigator>
)
export default AppRoutes;