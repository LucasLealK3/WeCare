import React from "react";  
import { 
  TouchableOpacityProps,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text  
} from 'react-native';

import colors from '../styles/colors'
import fonts from "../styles/fonts";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
};

export function ChoiceButton({ title, ...rest }: ButtonProps ){
  return(
    <TouchableOpacity 
      style={styles.container} 
      {...rest}
    >
      <Text style={styles.text}>
        { title }
      </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.green,    
    width: Dimensions.get('window').width /2 - 10,
    height: 50,
    marginRight: 10,
    borderRadius: 16,
    justifyContent: 'center',
    
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading,
    textAlign: 'center'
  }
})