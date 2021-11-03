import React, { useEffect, useState} from "react";
import {
StyleSheet,
Image,
Text,
View
} from 'react-native';

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Button } from "./Button";
import { useNavigation } from '@react-navigation/core';


export function Header(){  
  const navigation = useNavigation();
  function handleProfile(){
    //@ts-ignore
    navigation.navigate('Welcome'); 
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá, </Text>
        <Text style={styles.userName}>
          Lucas {/* {userName} */}
        </Text>
      </View>
      <Button 
        title="    Perfil    "
        onPress={handleProfile}
      />
    </View>    
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    //marginTop: getStatusBarHeight()
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  }

});
