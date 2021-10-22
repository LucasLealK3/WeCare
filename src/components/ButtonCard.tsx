import React from 'react';
import {
  TouchableOpacity,
  StyleSheet, 
  Image,
  Text,
  FlatList,
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends RectButtonProps {
  title: string;
}

export const ButtonCard = ({title, ...rest} : ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container} 
      activeOpacity={0.5}
    > 
      <Image 
      source={require('../assets/happyEmoji.png')} 
      style={styles.buttonImageIconStyle} 
    />  
    <Text style={styles.buttonTextStyle}> 
    Login Usando Facebook 
    </Text> 
</TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    backgroundColor: colors.shape,
    borderRadius: 20,
    alignItems: 'center',
    margin: 10
  },
  buttonImageIconStyle: {

  },
  buttonTextStyle: {

  },
  text: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
  }
})