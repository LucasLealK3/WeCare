import React, { useState, useEffect } from 'react';
import { 
  ActivityIndicator,
  StyleSheet,
  TextInput,  
  FlatList,    
  View, 
  Text,
} from 'react-native';


import { Button } from "../components/Button";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/core';
import DatePicker from 'react-native-datepicker';

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import firebase from '../services/firebaseConnect';
import Listing from '../components/Listing2';

console.disableYellowBox=true;

export function ToHelp({ route }){
  const [category, setCategory] = useState(['Alimentação', 'Higiene', 'Roupa', 'Móveis', 'Voluntáriado', 'Limpeza']);
  const [selectedCategory, setSelectedCategory] = useState('Alimentação');
  const [description, setDescription] = useState('');

  const [requester, setRequester] = useState('');
  const [uidRequester, setUidRequester] = useState('');
  const [numRequester, SetNumRequester] = useState('');
  const [giver, setGiver] = useState('');
  const [request, setRequest] = useState([]);
  const [situation, setSituation] = useState('Aguardando doador...');
  const [date, setDate] = useState(new Date().getTime())
  
  const [loading, setLoading] = useState(true);  
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState (false);

  useEffect(()=> {
    async function dados(){
      await firebase.database().ref('Usuarios').child(route.params?.id).on('value', (snapshot) => {
        setUidRequester(route.params?.id);
        setRequester(snapshot.val().Nome);
        SetNumRequester(snapshot.val().Contato);
      });
    }
    dados();    
  }, []);

  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!description);
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
            Uid_Solicitante: chilItem.val().Uid_Solicitante,
            Nome_Solicitante: chilItem.val().Nome_Solicitante,
            Num_Solicitante: chilItem.val().Num_Solicitante,
            Uid_Doardor: chilItem.val().Uid_Doador,
            Categoria: chilItem.val().Categoria,
            Descricao: chilItem.val().Descricao,
            Situacao: chilItem.val().Situacao,
            Data: chilItem.val().Data,
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
        Uid_Solicitante: uidRequester,
        Nome_Solicitante: requester,
        Num_Solicitante: numRequester,
        Uid_Doardor: giver,
        Categoria: selectedCategory,
        Descricao: description,
        Situacao: situation,
        Data: date,
        
      });

      alert('Cadastrado com sucesso!');
      setDescription('');
    }
  }

  return(
    <View style={styles.container}>

{/*       <Text style={styles.title}>
        Receber Ajuda
      </Text> */}

      {/* <Picker
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
      </Picker> */}

{/*       <TextInput
      style={[
        styles.input,
        (isFocused || isFilled) && 
        {borderColor: colors.green}
      ]}
      placeholder="Digite a descrição do seu pedido de ajuda."
      onBlur={handleInputBlur}
      onFocus={handleInputFocus}
      underlineColorAndroid="transparent"
      onChangeText={(text) => setDescription(text) }
      value={description}
      /> */}
{/* 
      <Button
      title="Solicitar ajuda"
      onPress={Register}
      />
 */}
      <Text style={styles.title}>
        Solicitações Recentes:
      </Text>
      

      <Text style={styles.subtitle}>
        Escolha abaixo uma solicitação para que possa ajudar.
      </Text>

      {loading ? 
      (
        <ActivityIndicator color="#121212" size={45} />
      ) :
      (

        <FlatList
          keyExtractor={item => item.key}
          data={request}        
          renderItem={ ({item}) => ( <Listing data={item}/> )}          
        />

      )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin: 10,
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