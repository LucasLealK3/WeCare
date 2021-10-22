//import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState} from "react";
import {
StyleSheet,
Image,
Text,
View
} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { ButtonCard } from "../components/ButtonCard";
//import { getStatusBarHeight } from 'react-native-iphone-x-helper';

//import userImg from '../assets/lucas.png';
import { ChoiceButton } from "../components/ChoiceButton";
import { Header } from '../components/Header';
import colors from "../styles/colors";
import fonts from "../styles/fonts";


export function Menu(){
  //const [userName, setUserName] = useState<string>();
  
/*   useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(user || 'Null');
    }
    loadStorageUserName();
  },[]); */

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>
            Sinta-se a vontade
        </Text>
        <Text style={styles.subtitle}>
            para solicitar ajuda
            ou ajudar alguém.
        </Text>
      </View>
      <View style={styles.choice}>
        <ChoiceButton title= "Pedir Ajuda"/>
        <ChoiceButton title= "Ajudar" />
      </View>
      
      <View style={styles.cards}>        
        <ButtonCard title= "Pedir Ajuda"/>
        <ButtonCard title= "Ajudar" />        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  header: {
    paddingHorizontal: 30
  },
  choice: {
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 5
  },
  cards: {

  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 17,
    color: colors.heading,
    lineHeight: 20,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    color: colors.heading,
    lineHeight: 20,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  }

});
