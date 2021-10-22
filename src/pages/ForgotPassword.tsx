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

export function  ForgotPassword(){
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState (false);
  const [email, setEmail] = useState('');

  function handleLogin(){
    //@ts-ignore
    navigation.navigate('Login');
  }

  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!email);
  }

  function handleInputFocus(){
    setIsFocused(true);
  }

  async function ForgotPassword(){
    await firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert('Verifique sua caixa de entrada.')
            handleLogin()
        })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
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
                Esqueceu sua senha?
              </Text>
              <Text style={styles.subtitle}>
                Receba sua redefinição de senha por e-mail.
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
            <View style={styles.footer}>   
              <Button 
              title="Enviar"
              onPress={ForgotPassword}
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