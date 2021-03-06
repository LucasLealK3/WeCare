import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import { Initial } from '../pages/Initial';
import { Login } from '../pages/Login';
import { Welcome } from '../pages/Welcome';
import { Registration } from '../pages/Registration';
import { ForgotPassword } from '../pages/ForgotPassword';
import { Menu } from '../pages/Menu';
import { Profile } from "../pages/Profile";
import { GetHelp } from "../pages/GetHelp";
import { ToHelp } from "../pages/ToHelp";



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

    <stackRoutes.Screen 
      name="Registration"
      component={Registration} 
    /> 

    <stackRoutes.Screen 
      name="ForgotPassword"
      component={ForgotPassword} 
    /> 
    <stackRoutes.Screen 
      name="Menu"
      component={Menu} 
    /> 
    <stackRoutes.Screen 
      name="Profile"
      component={Profile} 
    /> 
    <stackRoutes.Screen 
      name="GetHelp"
      component={GetHelp} 
    /> 

    <stackRoutes.Screen 
      name="ToHelp"
      component={ToHelp} 
    /> 

  </stackRoutes.Navigator>
)
export default AppRoutes;