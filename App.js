import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './components/StartScreen';
import Home from './components/Home';
import Name from './components/Name';
import FindByName from './components/FindByName';
import ResultsByName from './components/ResultsByName';
import Producer from './components/Producer';
import FindByProducer from './components/FindByProducer';
import ResultsByProducer from './components/ResultsByProducer';
import Quality from './components/Quality';
import FindByQuality from './components/FindByQuality';
import ResultsByQuality from './components/ResultsByQuality';
import Complete from './components/Complete';
import CompleteFlatList from './components/CompleteFlatList';



const App = () => {

  const Components = () => {
    return (
      <View>
        <Home/>
        <Name/>
        <FindByName/>
        <ResultsByName/>
        <Producer/>
        <FindByProducer/>
        <ResultsByProducer/>
        <Quality/>
        <FindByQuality/>
        <ResultsByQuality/>
        <Complete/>
        <CompleteFlatList/>
      </View>
    );
  }

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home"
          component={Home} options={{
            headerShown: false
          }} />

        <Stack.Screen name="StartScreen"
          component={StartScreen}
          options={{
            headerShown: false
          }} />

        <Stack.Screen name="Name"
          component={Name}
          options={{
            title: 'Nome', 
             headerBackTitle: 'Voltar'}} />


        <Stack.Screen name="Producer"
          component={Producer}
          options={{ title: 'Produtor', 
           headerBackTitle: 'Voltar' }}
        />


        <Stack.Screen name="Quality"
          component={Quality}
          options={{ title: 'Qualidade', 
          headerBackTitle: 'Voltar'}}      
          />
        <Stack.Screen name="Complete"
          component={Complete} />

        <Stack.Screen name="FindByName"
          component={FindByName}
          options={{
            title: 'Pesquisa por Nome',
            headerStyle: {
              backgroundColor: '#ff4d4d',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackTitle: 'Voltar'
          }} />

        <Stack.Screen name="ResultsByName"
          component={ResultsByName}
          options={{
            title: 'Resultados',
            navigationOptions: {
              headerBackTitle: 'Voltar'
            },
            headerStyle: {
              backgroundColor: '#ff4d4d',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackTitle: 'Voltar'
          }} />

        <Stack.Screen name="FindByProducer"
          component={FindByProducer}
          options={{
            title: 'Pesquisa por Produtor',
            headerStyle: {
              backgroundColor: '#ff4d4d',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackTitle: 'Voltar'
          }} />

        <Stack.Screen name="ResultsByProducer"
          component={ResultsByProducer}
          options={{
            title: 'Resultados',
            headerStyle: {
              backgroundColor: '#ff4d4d',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackTitle: 'Voltar'
          }} />

        <Stack.Screen name="FindByQuality"
          component={FindByQuality}
          options={{
            title: 'Pesquisa por Qualidade',
            headerStyle: {
              backgroundColor: '#ff4d4d',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackTitle: 'Voltar'
          }} />

        <Stack.Screen name="ResultsByQuality"
          component={ResultsByQuality}
          options={{
            title: 'Resultados', headerStyle: {
              backgroundColor: '#ff4d4d',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackTitle: 'Voltar'
          }} />

        <Stack.Screen name="CompleteFlatList"
          component={CompleteFlatList}
        />
      </Stack.Navigator>
    </NavigationContainer >

  );
}

const styles = StyleSheet.create({

});
export default App;