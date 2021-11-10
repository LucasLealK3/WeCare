import React, {useEffect, useState} from "react";
import {
ActivityIndicator,
StyleSheet,
TextInput,
FlatList,
Text,
View
} from 'react-native';

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import firebase from '../services/firebaseConnect';
import { useNavigation } from '@react-navigation/core';
import { Button } from "../components/Button";
import { Picker } from '@react-native-picker/picker';
import  Listing  from '../components/Listing';

console.disableYellowBox=true;

export function GetHelp(){  
  const navigation = useNavigation();
  function handleProfile(){
    //@ts-ignore
    navigation.navigate('Profile'); 
  }
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState (false);
  const [text, setText] = useState('');
  const [category, setCategory] = useState(['Alimentação', 'Higiene', 'Roupa', 'Móveis', 'Voluntariado', 'Limpeza']);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [description, setDescription] = useState('');
  const [request, setRequest] = useState([]);
  const [loading, setLoading] = useState(true);
  
  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!text);
  }

  function handleInputFocus(){
    setIsFocused(true);
  }

  useEffect(()=> {

    async function dados(){
      await firebase.database().ref('Solicitacao').on('value', (snapshot)=> {
        setRequest([]);
        snapshot.forEach((chilItem) => {
          let data = {
            key: chilItem.key,
            Categoria: chilItem.val().Categoria,
            Descricao: chilItem.val().Descricao
          };
          setRequest(oldArray => [...oldArray, data].reverse());
        })
        setLoading(false);
      })
    }
    dados();
  }, []);

  async function Register(){
    if(description !== ''){
      let request = await firebase.database().ref('Solicitacao');
      let chave = request.push().key;

      request.child(chave).set({
        Categoria: category,
        Descricao: description
      });

      alert('Cadastrado com sucesso!');
      setCategory([]);
      setDescription('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Receber Ajuda
      </Text>
      <Text style={styles.subtitle}>
        Escolha abaixo a categoria que deseja para sua solicitação de ajuda:
      </Text> 
      <Picker
        style={styles.picker}
        selectedValue={selectedCategory}
        onValueChange={(itemValue) =>
          setSelectedCategory(itemValue)
        }
      >
        {
          category.map(ct => {
            return <Picker.Item label={ct} value={ct}/>
          })
        }      
      </Picker>
      <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && 
                {borderColor: colors.green}
              ]}
              placeholder="Digite a descrição do seu pedido de ajuda."
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={(text) => setText(text)}
              value={text}
            />
      
      <View style={styles.button}>
        <Button 
          title="Enviar Solicitação"
          onPress={Register}
        />
      </View>
      <Text style={styles.subtitle}>
        Minhas Solicitações:
      </Text>
      {loading ? 
      (
        <ActivityIndicator color="#121212" size={45} />
      ) :
      (
        <FlatList
        keyExtractor={item => item.key}
        data={request}
        renderItem={ ({item}) => ( <Listing data={item} /> )  }
        />
      )
      }
    </View>
  )
   
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30
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
    fontFamily: fonts.heading,
    fontSize: 17,
    color: colors.heading,
    lineHeight: 20,
    paddingHorizontal: 30
  },
  picker: {
    height: 20,
    size: 30,
    marginTop: 10
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
  button: {
    width: '50%',
    marginTop: 20,
    paddingHorizontal: 20
  }
  
});
