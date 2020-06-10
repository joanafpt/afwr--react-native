import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Picker } from 'react-native';
import MenuCancelButtons from '../constants/MenuCancelButtons';
import MenuGoForwardButtons from '../constants/MenuGoForwardButtons';
import OkInputButtons from '../constants/OkInputButtons';
import GenericStyleButtons from '../constants/GenericStyleButtons';
import ImputStyles from '../constants/ImputStyles';
import Waiting from '../constants/Waiting';
import functions from "../functions/functions.js";
import { useNavigation } from '@react-navigation/native';
import Container from './Container';

import getArrays from '../functions/getArrays';
import DropDownPicker from 'react-native-dropdown-picker'; /// teste android /////

const FindByName = () => {

    const navigation = useNavigation();
    const [returnedData, setReturnedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [waitingText, displayWaitingText] = useState('');
    const [dontGo, setDontGo] = useState('');
    const [selectedName, setSelectedName] = useState('Adamante');

    const [populateArray, setPopulateArray] = useState();
    const [arrayIsPopulated, setArrayIsPopulated] = useState(false);

    const getNames = () => {
        getArrays.getArrayNames(myCallback);
    }
    const myCallback = (data) => {
        setPopulateArray([...data]);
        console.log(data, ' fbn');
        setArrayIsPopulated(true);
    }

    useEffect(() => {
        getNames();
        // console.log(Platform.OS === 'ios') //ok
    }, []); //[] "I should say this only once"

    const getByName = () => {
        setDontGo('');
        setIsLoading(true);
        functions.getDataNameFromApi(selectedName, callback);
        displayWaitingText('Por favor aguarde...');
        // console.log(dontGo.length);
        // console.log(selectedName);
    }
    const callback = (data) => {
        setReturnedData(returnedData => [...data]);
        navigation.navigate('ResultsByName', { data: data, isLoading: isLoading });
        setIsLoading(false);
        displayWaitingText('');
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>

            {arrayIsPopulated ?
                <View style={styles.container}>


                    <View style={styles.lineHeightPicker}>
                        <Picker
                            style={{ width: 300, height: 29, marginBottom: 100, backgroundColor: 'white' }}
                            mode="dropdown"
                            selectedValue={selectedName} //é onde para o picker - tem de ficar no q a pessoa escolher
                            onValueChange={(itemValue, itemIndex) => setSelectedName(itemValue)}>
                            {populateArray.map((element) => {
                                return (<Picker.Item label={element}
                                    value={element}
                                    key={element}

                                />)
                            })}
                        </Picker>
                    </View>



                    <View style={GenericStyleButtons.backButtonFinds}>

                        <View style={GenericStyleButtons.voltar}>
                            <TouchableOpacity
                                style={MenuCancelButtons.backTouchable}
                                onPress={() => navigation.navigate('StartScreen')}
                            ><Text style={MenuCancelButtons.buttonLabel}>INÍCIO</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={GenericStyleButtons.ok}>
                            <TouchableOpacity
                                style={MenuGoForwardButtons.forwardTouchable}
                                onPress={() => getByName()}
                            >
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
                <View style={styles.containerWait}>
                    <Text style={Waiting.waitSearchText}>Por favor aguarde...</Text>
                </View>
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
export default FindByName;