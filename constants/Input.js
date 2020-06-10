import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    return <TextInput
        style={{ ...styles.textInput, ...props.style }} />

};

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        color: 'black',
        width: 225,
        borderRadius: 10,
    },
});

export default Input;