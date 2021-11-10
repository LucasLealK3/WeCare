import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useState } from 'react/cjs/react.development';

export default function Listing({ data }){
        
  return(
    <View style={styles.container}>
      
      <Text style={styles.text}>{data.nome}</Text>
      <Text style={styles.text}>{data.idade}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#E7C8E5',
  },
  text:{
    color:'#863783',
    fontSize: 17
  }
});