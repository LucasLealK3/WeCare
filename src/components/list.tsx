import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Listing({ data }){
        
  return(
    <View style={styles.container}>      
      <Text style={styles.text}>{data.Categoria}</Text>
      <Text style={styles.text}>{data.Descricao}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#050505',
  },
  text:{
    color:'#863783',
    fontSize: 17
  }
});