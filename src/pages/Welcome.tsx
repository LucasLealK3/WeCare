import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    SafeAreaView
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import people from '../assets/people.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Welcome() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Ajude ou seja {'\n'}
                    ajudado.
                </Text>

                <Image
                    source={people}
                    style={styles.image}
                    resizeMode="contain"
                />

                <Text style={styles.subtitle}>
                Na construção de um mundo melhor,
                a sua participação é muito
                importante.               
                </Text>

                <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                    <Feather
                        name='chevron-right'
                        style={styles.buttonIcon}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.green,
        marginTop: 100,
        fontFamily: fonts.heading,
        lineHeight: 38
    },
    subtitle: {
        fontSize: 18,
        paddingHorizontal: 28,
        textAlign: 'center',
        fontFamily: fonts.text,
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        height: 55,
        width: 55,
        marginBottom: 55
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 25
    },
    image: {
        height: Dimensions.get('window').width * 0.7
    }
})