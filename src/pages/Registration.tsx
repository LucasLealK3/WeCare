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

export function  Registration(){
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState (false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bairro, setBairro] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function registration(){
    if(      
      name == '' || 
      email == '' ||
      phone == '' ||
      bairro == '' ||
      password == '' ||
      confirmPassword == ''
    ){
      alert('Preencha todos os campos!');
    }else if(password !== confirmPassword){
      alert('As senhas devem ser iguais!');
      setPassword('');
      setConfirmPassword('');
    }else {
      await firebase.auth().createUserWithEmailAndPassword(email, password)

      .then((value)=> {
        //alert(value.user.uid);
        firebase.database().ref('Usuarios').child(value.user.uid).set({
          nome: name,
          contato: phone,
          bairro: bairro,          
         })

        alert('Usuario criado com sucesso!');
        setName('');
        setEmail('');
        setPhone('');
        setBairro('');
        setPassword('');
        setConfirmPassword('');       
        handleLogin()
      })
      .catch((error)=>{
        alert('Algo de errado não está certo!');
      })      
      setName('');
      setEmail('');
      setPhone('');
      setBairro('');
      setPassword('');
      setConfirmPassword('');
    }
  }

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
                Cadastre-se!
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
              placeholder="Nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={(text) => setName(text)}
              value={name}
            />
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && 
                {borderColor: colors.green}
              ]}
              placeholder="Whatsapp"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={(text) => setPhone(text)}
              value={phone}
            />
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && 
                {borderColor: colors.green}
              ]}
              placeholder="Bairro"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={(text) => setPhone(text)}
              value={bairro}
            />                     
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && 
                {borderColor: colors.green}
              ]}
              placeholder="E-mail"
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
              placeholder="Senha"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && 
                {borderColor: colors.green}
              ]}
              placeholder="Confirme senha"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
            />         
            <View style={styles.footer}>   
              <Button 
              title="Cadastrar"
              onPress={registration}
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
    paddingHorizontal: 40,
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
    marginTop: 10,
    padding: 10,
    textAlign: 'center'
  },
  title: {
    fontSize: 28,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.green,
    fontFamily: fonts.heading,
    marginTop: 10
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
    marginTop: 30,
    paddingHorizontal: 20
  }
});