import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  View
} from 'react-native';

import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/core';

import people from '../assets/people.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

console.disableYellowBox=true;

export function  Initial(){
  const navigation = useNavigation();
  
  function handleLogin(){
    //@ts-ignore
    navigation.navigate('Login'); //Aqui é pra mandar pra pag login, só esta assim pra testar
  }
  function handleRegistration(){
    //@ts-ignore
    navigation.navigate('Registration');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
          <View style={styles.header}> 
            <Text style={styles.title}>
              Ajude ou seja ajudado
            </Text>
            <Image
              source={people}
              style={styles.image}
              resizeMode="contain"
            />              
          </View> 
          <Text style={styles.subtitle}>
                Para a construção de um mundo melhor,
                a sua participação é muito importante.
          </Text>                  
          <View style={styles.footer}>   
            <Button 
              title="Entrar"
              onPress={handleLogin}
            />
            <Button 
              title="Cadastrar"
              onPress={handleRegistration}
            />         
          </View>         
        </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  title: {
    fontSize: 28,
    marginTop: 30,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.green,
    fontFamily: fonts.heading,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading
  },
  footer:{
    width: '100%',
    marginTop: 20,
    //flexDirection: 'row',
    paddingHorizontal: 20
  }
});