import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Name from './Name';
import Producer from './Producer';
import Quality from './Quality';
import Complete from './Complete';
import GenericLabels from '../constants/GenericLabels';
import Container from './Container';

const StartScreen = () => {

    return (
        <Container>
            <View style={styles.screen}>
                <View style={styles.introTextContainer}>
                    <Text style={GenericLabels.startScreenIntroText}>Selecione o tipo de pesquisa</Text>
                </View>
                <View style={styles.sideBySide}>
                    <Name />
                    <Producer />
                </View>
                <View style={styles.sideBySide}>
                    <Quality />
                    <Complete />
                </View>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 100,
        paddingTop: 50
    },
    screen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center', //aligns horiz
        backgroundColor: 'transparent'
    },
    sideBySide: {
        flexDirection: 'row',

    },
    introTextContainer: {
        marginVertical: 20,
    },
})


export default StartScreen;