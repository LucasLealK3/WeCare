import React, { useEffect, useState} from "react";
import {
StyleSheet,
Text,
View
} from 'react-native';

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Button } from "../components/Button";
import { useNavigation } from '@react-navigation/core';
import { ChoiceButton } from "../components/ChoiceButton";



export function Profile(){  
  const navigation = useNavigation();
  function handleMenu(){
    //@ts-ignore
    navigation.navigate('Menu'); 
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Olá, </Text>
          <Text style={styles.userName}>
            Lucas {/* {userName} */}
          </Text>
        </View>
        <Button 
          title="    Menu    "
          onPress={handleMenu}
        /> 
      </View>   
      <View style={styles.choice}>
        <ChoiceButton title= "Dados Pessoais"/>
        <ChoiceButton title= "Minhas Doações"/>
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30
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
  },
  choice: {            
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 25,
    marginLeft: 15,    
    marginRight: 15,
    paddingVertical:1 
  }

});
