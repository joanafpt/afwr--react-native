//versao com modal, por aparentemente ser mais adequado a este caso:
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ClickableSquare from './ClickableSquare';
import CompleteFlatList from './CompleteFlatList';
//import MenuSquaresLabels from '../constants/MenuSquaresLabels';
import OkButtonsInsideSquares from '../constants/OkButtonsInsideSquares';
import functions from "../functions/functions.js";

const colors = ['#7DCEA0', '#F39C12', '#F4D03F', '#E67E22', '#7FB3D5', '#EC7063', '#EC7063', '#F39C12', '#FB54C0'];

const Complete = () => {
    const [isClickMode, setIsClickMode] = useState(false);
    const [returnedData, setReturnedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const cancelSearch = () => {
        setIsClickMode(false); //closes the modal
    };

    const getComplete = () => {
        setIsClickMode(true);
        setIsLoading(true);
        functions.getCompleteDataFromApi(callback);
    }

    const callback = (data) => {
        setReturnedData(returnedData => [...data]);
        console.log(returnedData, ' dentro do callback');
        setIsLoading(false);
    }

    return (
        <View>
            <ClickableSquare style={styles.square}>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={OkButtonsInsideSquares.okButton}
                        onPress={() => getComplete()}>
                        <Text style={OkButtonsInsideSquares.buttonLabel}>Todos</Text>
                    </TouchableOpacity>
                </View>
            </ClickableSquare>

            <CompleteFlatList
                visible={isClickMode}
                onCancel={cancelSearch}
                myDataAvailablePlease={returnedData}
                availablePlease={isLoading}
            />
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
export default Complete;