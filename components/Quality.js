import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ClickableSquare from './ClickableSquare';
//import MenuSquaresLabels from '../constants/MenuSquaresLabels';
import OkButtonsInsideSquares from '../constants/OkButtonsInsideSquares';
import { useNavigation } from '@react-navigation/native';

//const colors = ['#7DCEA0', '#F39C12', '#F4D03F', '#E67E22', '#7FB3D5', '#EC7063', '#EC7063', '#F39C12', '#FB54C0'];
const Quality = () => {
    const navigation = useNavigation();
    return (
        <View>
            <ClickableSquare style={styles.square}/* style={{ backgroundColor: colors[Math.floor(Math.random() * (9 - 1) + 1)]}}*/>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={OkButtonsInsideSquares.okButton}
                        onPress={() => { navigation.navigate('FindByQuality') }}
                    >
                        <Text style={OkButtonsInsideSquares.buttonLabel}>Qualidade</Text>
                    </TouchableOpacity>
                </View>
            </ClickableSquare>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        color: 'white',
        marginBottom: '35%',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    square: {
        backgroundColor: '#ff4d4d'
    }
});
export default Quality;