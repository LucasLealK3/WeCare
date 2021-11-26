import React, { useEffect, useState } from 'react';
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

import firebase from '../services/firebaseConnect';
import people from '../assets/happyEmoji.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

console.disableYellowBox=true;

export function  Welcome({ route }){
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(()=> {
    async function dados(){
      await firebase.database().ref('Usuarios').child(route.params?.id).on('value', (snapshot) => {
        setName(snapshot.val().nome);
      });
    }
    dados();    
  }, []); 

  const navigation = useNavigation();

  async function handleMenu(){ 
      navigation.navigate('Menu', {id:route.params?.id});   
  } 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>        
          <View style={styles.header}>                  
          <Image
            source={people}
            style={styles.image}
            resizeMode="contain"
          />  
            <Text style={styles.title}>
              Bem-vindo {name}
            </Text>                       
          </View> 
          <Text style={styles.subtitle}>
                Estamos felizes em vê-lo, sinta-se a vontade
                para ajudar ou fazer pedidos de ajuda em nossa comunidade.
          </Text>            
          <View style={styles.footer}>   
            <Button 
              title="Continuar"
              onPress={handleMenu}
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