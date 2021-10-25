import React from "react";  
import { 
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text  
} from 'react-native';

import colors from '../styles/colors'
import fonts from "../styles/fonts";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  image: Image;
};

export function ButtonCard({ title, image, ...rest }: ButtonProps ){
  return(
    <TouchableOpacity 
      style={styles.container} 
      {...rest}
    >
      <Image
      //@ts-ignore
      source={image}
      />

      <Text style={styles.text}>        
        { title } 
      </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    backgroundColor: colors.shape,
    borderRadius: 20,
    alignItems: 'center',
    margin: 5
  },
  image: {
    
		flex: 1,
		paddingHorizontal: 32,
		justifyContent: 'center'
  },
  text: {
    color: colors.green_dark,
    fontFamily: fonts.heading
  }
})