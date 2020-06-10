import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
//import GoForwardButtons from '../constants/GoForwardButtons';
//import GenericLabels from '../constants/GenericLabels';
import { useNavigation } from '@react-navigation/native';
//import { Ionicons } from '@expo/vector-icons';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    lobster: require('../assets/fonts/Lobster-Regular.ttf'),
    openSans: require('../assets/fonts/OpenSans-Regular.ttf'),
    roboto: require('../assets/fonts/RobotoCondensed-Regular.ttf')
  });
};

const Home = () => {
  const navigation = useNavigation();
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  //ativa transiçao ao fim de 3 segs
  useEffect(() => {
    setTimeout(() => { navigation.navigate('StartScreen') }, 3000);
  });

  if (!dataIsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataIsLoaded(true)}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={{ fontFamily: 'lobster', fontSize: 55, color: '#ffffff' }}>
          Repositório
        </Text>
        <Text style={{ fontFamily: 'lobster', fontSize: 55, color: '#ffffff' }}>
          de Vinhos
        </Text>
        <Text style={{ fontFamily: 'lobster', fontSize: 55, color: '#ffffff' }}>
          Animal Friendly
        </Text>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ff4d4d',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center'
  },
})


export default Home;