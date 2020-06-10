import React from 'react';
import { View, StyleSheet } from 'react-native';

//const colors = ['#7DCEA0', '#F39C12', '#F4D03F', '#E67E22', '#7FB3D5', '#EC7063', '#EC7063', '#F39C12', '#FB54C0'];


const ClickableSquare = props => {
    return (
        <View style={{ ...styles.individualSquare, ...props.style }}>{props.children}</View>

    )
}
const styles = StyleSheet.create({
    individualSquare: {
        width: 130,
        height: 130,
        margin: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6, 
        shadowOpacity: 0.8,
        elevation: 8,
        borderWidth: 1.2,
        borderColor: 'black',
        borderRadius: 10,
        //backgroundColor: '#000000'  
    },
});

export default ClickableSquare;