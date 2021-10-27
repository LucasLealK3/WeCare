import React, { useEffect, useState} from "react";
import {
StyleSheet,
Image,
Text,
View
} from 'react-native';
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Button } from "../Components/Button";
import { useNavigation } from '@react-navigation/core';


export function Profile(){  
  const navigation = useNavigation();
  function handleMenu(){
    //@ts-ignore
    navigation.navigate('Menu'); 
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá, </Text>
        <Text style={styles.userName}>
          Lucas{/* {userName} */}
        </Text>
      </View>
      <Button 
        title="    Menu    "
        onPress={handleMenu}
        
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
    paddingVertical: 20,
    lineHeight: 20,
    paddingHorizontal: 30
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 20
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  }

});
