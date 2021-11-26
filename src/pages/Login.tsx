import React, { useState } from 'react';
import { 
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Platform,
  Text,
  View
} from 'react-native';

import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/core';

import firebase from '../services/firebaseConnect';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

console.disableYellowBox=true;

export function  Login(){
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState (false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  
  function handleForgotPassword(){
    //@ts-ignore
    navigation.navigate('ForgotPassword');
  }

  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!email);
  }

  function handleInputFocus(){
    setIsFocused(true);
  }

  async function logInto(){
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then( (value) => {
      navigation.navigate('Welcome', {id:value.user.uid});
    })
    .catch( (error) => {
        alert('Algo de errado não está certo!');
        return;
    })

    setEmail('');
    setPassword('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}> 
              <Text style={styles.title}>
                Entrar
              </Text>
              <Text style={styles.subtitle}>
                Preencha os campos abaixo.
              </Text>
            </View> 
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && 
                {borderColor: colors.green}
              ]}
              placeholder="Digite seu e-mail"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />  
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && 
                {borderColor: colors.green}
              ]}
              placeholder="Digite sua senha"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={(text) => setPassword(text) }
              value={password}              
            />                   
            <View style={styles.footer}>   
              <Button 
              title="Entrar"
              onPress={logInto}
              />
              <Button 
                title="Esqueci minha senha"
                onPress={handleForgotPassword}
              />         
            </View>         
          </View>
        </View>    
      </KeyboardAvoidingView>  
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 55,
    alignItems: 'center'
  },
  header: {
    alignItems: 'center'
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 20,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },
  title: {
    fontSize: 30,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.green,
    fontFamily: fonts.heading,
    marginTop: 20
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading
  },
  footer:{
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 20
  }
});