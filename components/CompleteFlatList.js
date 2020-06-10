import React from 'react';
import { View, Text, StyleSheet, Modal, FlatList, TouchableOpacity } from 'react-native';
import MenuCancelButtons from '../constants/MenuCancelButtons';
//import MenuGoForwardButtons from '../constants/MenuGoForwardButtons';
//import GenericStyleButtons from '../constants/GenericStyleButtons';
import Outputs from '../constants/Outputs';
import Separator from './Separator';
//import GenericLabels from '../constants/GenericLabels';
//import { useNavigation } from '@react-navigation/native';
import Container from './Container';

const CompleteFlatList = (props) => {
    // const navigation = useNavigation();
    return (
        <Modal visible={props.visible} animationType="slide">
            {props.availablePlease ?
                <Container>
                    <View style={Outputs.borderTransp}>
                        <Text style={Outputs.completeListWaitText}>Por favor aguarde...</Text>
                    </View>
                </Container>
                :
                <View style={styles.container}>
                    <View style={Outputs.completeOutput}>
                        <FlatList
                            keyExtractor={(item, index) => item._id}
                            data={props.myDataAvailablePlease}
                            renderItem={item => (
                                <View style={styles.internalOutput}>
                                    <Text style={Outputs.outputText}>
                                        <Text style={Outputs.labelName}>Nome </Text>{"\n"}
                                        {item.item['Vinho ou Marca']}{"\n"}
                                        <Text style={Outputs.labelName}>Produtor</Text>{"\n"}
                                        {item.item['Produtor']}{"\n"}
                                        <Text style={Outputs.labelName}>Qualidade</Text>{"\n"}
                                        {item.item['Qualidade']} {"\n"}
                                    </Text>
                                    <Separator />
                                </View>
                            )}>
                        </FlatList>
                    </View>

                    <View style={styles.button}>
                        <TouchableOpacity
                            style={MenuCancelButtons.backTouchable}
                            onPress={props.onCancel}>
                            <Text style={MenuCancelButtons.buttonLabel}>VOLTAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </Modal>
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
    button: {
        backgroundColor: 'transparent',
        height: 100,
        width: 300,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default CompleteFlatList;

