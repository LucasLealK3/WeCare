import React from 'react';
import { 
  ActivityIndicator,
  StyleSheet,
  TextInput,  
  FlatList,    
  View, 
  Text,
} from 'react-native';
import { useState } from 'react/cjs/react.development';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

export default function Listing({ data }){



  function teste(){
    alert('Entre em contato com o solicitante para ajudá-lo.');
  }

  return(
    <View style={styles.container}>
      
      <RectButton
      style={styles.container}
      onPress={teste}
    >      
      <Text style={styles.text}>Nome_Solicitante: {data.Nome_Solicitante}.</Text>
      <Text style={styles.text}>Num_Solicitante: {data.Num_Solicitante}.</Text>  
      <Text style={styles.text}>Categoria: {data.Categoria}.</Text>
      <Text style={styles.text}>Descrição: {data.Descricao}.</Text>     
      <Text style={styles.text}>Situação: {data.Situacao}.</Text> 
      <Text style={styles.text}>Data: {data.Data}.</Text>
    </RectButton>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 10,
    marginBottom: 5,
    paddingLeft: 5,
    backgroundColor: '#E7C8E5',
  },
  text:{
    color:'#863783',
    fontSize: 17
  }
});