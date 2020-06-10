import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

const Container = props => {

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={{
                flex: 1,
                flexDirection: 'column', //isto era column antes das alteraçoes do Platform
                justifyContent: 'center',
                alignItems: 'center',
                //  backgroundColor: colors[Math.floor(Math.random() * 19) + 1],
                paddingBottom: 100,
                paddingTop: 50,
                ...props.style
            }}>{props.children}</View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    //nothing to show here

});

export default Container;