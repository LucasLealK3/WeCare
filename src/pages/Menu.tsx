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
import { ButtonCard } from "../components/ButtonCard";
import alimentacao from '../assets/alimentacao.png';
import higiene from '../assets/higiene.png';
import limpeza from '../assets/limpeza.png';
import moveis from '../assets/moveis.png';
import voluntariado from '../assets/voluntariado.png';
import todos from '../assets/todos.png';



export function Menu(){  
  const navigation = useNavigation();
  function handleProfile(){
    //@ts-ignore
    navigation.navigate('Profile'); 
  }
  
  function handleGetHelp(){
    //@ts-ignore
    navigation.navigate('GetHelp'); 
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
          title="   Profile   "
          onPress={handleProfile}
        /> 
      </View>
      <Text style={styles.title}>
        Sinta-se a vontade
      </Text>  
      <Text style={styles.subtitle}>
        para solicitar ajuda
        ou ajudar alguém.
      </Text> 
      <View style={styles.choice}>
        <ChoiceButton title= "Ajudar"/>
        <ChoiceButton 
          title= "Receber Ajuda"
          onPress={handleGetHelp}
        />
      </View> 
      
        <View style={styles.card}>        
          <ButtonCard 
            title= "Alimentação"
            image= {alimentacao}
          />
          <ButtonCard
            title= "Higiene"
            image= {higiene}
          />                  
        </View>

        <View style={styles.card}>        
          <ButtonCard 
            title= "Limpeza"
            image= {limpeza}
          />
          <ButtonCard
            title= "Móveis"
            image= {moveis} 
          />                  
        </View>

        <View style={styles.card}>        
          <ButtonCard 
            title= "Voluntáriado"
            image= {voluntariado}
          />
          <ButtonCard
            title= "Todos"
            image={todos}           
            //onPress={teste}
          />                  
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  title: {
    fontFamily: fonts.heading,
    fontSize: 17,
    color: colors.heading,
    lineHeight: 20,
    paddingHorizontal: 30
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    color: colors.heading,
    lineHeight: 20,
    paddingHorizontal: 30
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
    paddingVertical:1,
    marginTop: 10  
  },
  card: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 25,
    marginLeft: 15,
    paddingVertical:1,
    marginTop: 5  
  }

});
