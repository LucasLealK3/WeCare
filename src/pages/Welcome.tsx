import React, { useRef, useState } from 'react';
import { 
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Platform,
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

export function  Welcome(){
  const [name,setName] = useState();
  const navigation = useNavigation();

  /*  function handle(){
      //@ts-ignore
      navigation.navigate('');
  } */
  async function dados(){
    await firebase.database().ref('Usuarios').on('value', (snapshot)=> {
      setName(snapshot.val().nome);
      });
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
              Bem vindo {name}
            </Text>                       
          </View> 
          <Text style={styles.subtitle}>
                Estamos felizes em vê-lo, sinta-se a vontade
                para ajudar ou fazer pedidos de ajuda em nossa comunidade.
          </Text>            
          <View style={styles.footer}>   
            <Button 
              title="Continuar"
              //onPress={handle}
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