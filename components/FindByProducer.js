import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Picker, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MenuCancelButtons from '../constants/MenuCancelButtons';
import MenuGoForwardButtons from '../constants/MenuGoForwardButtons';
import OkInputButtons from '../constants/OkInputButtons';
import GenericStyleButtons from '../constants/GenericStyleButtons';
import ImputStyles from '../constants/ImputStyles';
import Waiting from '../constants/Waiting';
import { useNavigation } from '@react-navigation/native';
import functions from "../functions/functions.js";
import Container from './Container';
import getArrays from '../functions/getArrays';

const FindByProducer = () => {

    const [returnedData, setReturnedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [waitingText, displayWaitingText] = useState('');
    const [dontGo, setDontGo] = useState('');
    const [selectedProducer, setSelectedProducer] = useState('A&D Wines');
    const [populateArray, setPopulateArray] = useState([]);
    const [arrayIsPopulated, setArrayIsPopulated] = useState(false);

    const navigation = useNavigation();

    const getProducers = () => {
        getArrays.getArrayProducers(myCallback);
    }
    const myCallback = (data) => {
        setPopulateArray([...data]);
        console.log(data, ' fbp');
        setArrayIsPopulated(true);
    }

    useEffect(() => {
        getProducers();
    }, []);

    const getProducer = () => {
        setDontGo('');
        setIsLoading(true);
        functions.getDataProducerFromApi(selectedProducer, callback);
        displayWaitingText('Por favor aguarde...');
    }

    const callback = (data) => {
        setReturnedData(returnedData => [...data]);
        navigation.navigate('ResultsByProducer', { data: data, isLoading: isLoading });
        setIsLoading(false);
        displayWaitingText('');
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            {arrayIsPopulated ?
                <View style={styles.container}>
                    <View style={styles.lineHeightPicker}>
                        <Picker
                            style={{ width: 300, height: 29, marginBottom: 100 }}
                            mode="dropdown"
                            selectedValue={selectedProducer} //é onde para o picker - tem de ficar no q a pessoa escolher
                            onValueChange={(itemValue, itemIndex) => setSelectedProducer(itemValue)}>
                            {populateArray.map((element) => {
                                return (<Picker.Item label={element} value={element} key={element} />)
                            })}
                        </Picker>
                    </View>
                    <View style={GenericStyleButtons.backButtonFinds}>
                        <View style={GenericStyleButtons.voltar}>
                            <TouchableOpacity
                                style={MenuCancelButtons.backTouchable}
                                onPress={() => { navigation.navigate('StartScreen') }}
                            >
                                <Text style={MenuCancelButtons.buttonLabel}>INÍCIO</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={GenericStyleButtons.ok}>
                            <TouchableOpacity
                                style={MenuGoForwardButtons.forwardTouchable}
                                onPress={getProducer}>
                                <Text style={OkInputButtons.buttonLabel}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={Waiting.waitingView}>
                        <Text style={Waiting.waitingText}>{waitingText ? waitingText : null}</Text>
                    </View>
                    <View>
                        <Text style={Waiting.waitingText}>{dontGo}</Text>
                    </View>
                </View>
                :
                <View style={styles.containerWait}><Text style={Waiting.waitSearchText}>Por favor aguarde...</Text></View>
            }
        </TouchableWithoutFeedback>
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
        paddingTop: Platform.OS === 'ios' ? 70 : 225,
    },
    containerWait: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 100,
        paddingTop: 50


    },
    lineHeightPicker: {
        height: Platform.OS === 'ios' ? 200 : 30,
        backgroundColor: 'transparent',

    }

});
export default FindByProducer;