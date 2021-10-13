import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import firebase from './src/services/firebaseConnect';

console.disableYellowBox=true;
//Se eu utilizar método "on", ele atualiza em tempo real
// Se eu não precisar utilizar em tempo real, posso utilizar o once
//Sabendo que o on demanda mais recurso.

export default function App() {
  const [nome,setNome] = useState('Carregando...');
  const [email, setEmail] = useState('');

  useEffect(()=> {
    async function dados(){
    //Olheiro da nossa database
    /* //Criar um (nó)
    await firebase.database().ref('tipo').set('Vendedor');

    //Remove um nó
    await firebase.database().ref('tipo').remove();
    await firebase.database().ref('usuarios').child(3).set({
      nome: 'Jose',
      email: 'jose@hotmail.com'
    });
    await firebase.database().ref('usuarios').child(3)
    .update({
      nome: 'Jose augusto'
    })
    */

    await firebase.database().ref('Alunos/1').on('value', (snapshot)=> {
    setNome(snapshot.val().nome);
    //setEmail(snapshot.val().idade);
    });
    }
    dados();
    }, []);
   
  return (
    <View style={styles.container}>
      <Text>Testando o BD!</Text>
      <Text style={styles.nameTitle}> Nome: {nome} </Text>      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameTitle: {
    fontSize: 24
  }
});
