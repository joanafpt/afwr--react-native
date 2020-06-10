import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import MenuCancelButtons from '../constants/MenuCancelButtons';
//import MenuGoForwardButtons from '../constants/MenuGoForwardButtons';
import GenericStyleButtons from '../constants/GenericStyleButtons';
import Outputs from '../constants/Outputs';
import Separator from './Separator';
import { useNavigation } from '@react-navigation/native';
//import Container from './Container';

const ResultsByQuality = ({ route }) => {
    const returnedData = route.params;
    const { isLoading } = route.params;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={Outputs.output}>

                {
                    isLoading ?
                        <View><Text>{null}</Text></View>
                        :

                        <View style={Outputs.results}>
                            {returnedData.data.length < 2 ?
                                <View style={Outputs.viewCounter}>
                                    <Text style={Outputs.counter}>A pesquisa obteve {returnedData.data.length} resultado</Text></View>
                                :
                                <View style={Outputs.viewCounter}><Text style={Outputs.counter}>A pesquisa obteve {returnedData.data.length} resultados</Text></View>
                            }
                        </View>
                }

                {isLoading ?
                    <View style={Outputs.waitText}>
                        <Text>Por favor aguarde...</Text>
                    </View>
                    :
                    <View style={Outputs.flatListContainer}>
                        {typeof (returnedData['data']) !== 'string' ?
                            <FlatList
                                keyExtractor={(item, index) => item._id}
                                data={returnedData['data']}
                                renderItem={item => (
                                    <View style={Outputs.internalOutput}>
                                        <Text style={Outputs.outputText}>

                                            <Text style={Outputs.labelName}>Nome </Text>{"\n"}
                                            {item.item['Vinho ou Marca']}{"\n"}
                                            <Text style={Outputs.labelName}>Produtor</Text>{"\n"}
                                            {item.item['Produtor']}{"\n"}
                                            <Text style={Outputs.labelName}>Qualidade</Text>{"\n"}
                                            {item.item['Qualidade']} {"\n"}
                                        </Text>
                                        {console.log(typeof (returnedData['data']))}
                                        <Separator />
                                    </View>
                                )}>
                            </FlatList>
                            :
                            <View>
                                <View style={Outputs.internalOutput}>
                                    <Text style={Outputs.outputTextNoResponse}>
                                        {returnedData['data']}
                                        {console.log(typeof (returnedData['data']))}
                                    </Text>
                                </View>
                            </View>
                        }
                    </View>
                }
            </View>

            <View style={GenericStyleButtons.backButton}>
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
                        style={MenuCancelButtons.menuButton}
                        onPress={() => { navigation.navigate('FindByQuality') }}
                    >
                        <Text style={MenuCancelButtons.buttonLabelMenu}>MENU</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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


});

export default ResultsByQuality;