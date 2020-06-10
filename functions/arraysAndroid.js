
//ESTE FICHEIRO SERVE P APANHAR OS DADOS NO FORMATO CONVENIENTE PARA O PICKER USADO NA VERSAO ANDROID 

import axios from 'axios';
import axiosRetry from 'axios-retry';

const apiRoot = 'https://bdv.glitch.me/api/wines/';

const giveMeTheProducers = (callbackProducers) => {
    const producers = 'https://bdv.glitch.me/api/wines/get-producers';
    axiosRetry(axios, { retries: 10});
    axios.get(producers)
    .then(response => {
        console.log(response.data, ' produtores aqui');
        if (callbackProducers) {
            callbackProducers(response.data);
        }
    })
    .catch(error => {
        console.log('o erro ao obter os produtores é: ', error);  
        axios.get(producers)
        .then(response => {
            console.log(response.data);
            if (callbackProducers) {
                callbackProducers(response.data);
            }
        })      
    })


}

const giveMeTheQualities = (callbackQualities) => {
    const qualities = 'https://bdv.glitch.me/api/wines/get-qualities';
    axiosRetry(axios, { retries: 10});
    axios.get(qualities)
    .then(response => {
      // console.log(response.data, ' qualidades aqui');
        if(callbackQualities){
           callbackQualities(response.data);
           
        }
    })
    .catch(error => {
        console.log('o erro ao obter os produtores é: ', error);  
        axios.get(qualities)
        .then(response => {
         //   console.log(response.data, ' qualidades aqui');
            if(callbackQualities){
                callbackQualities(response.data);
            }
        })      
    })
}

const giveMeTheNames = (callbackNames) => {
    const names = 'https://bdv.glitch.me/api/wines/get-names';
    axiosRetry(axios, { retries: 10});
    axios.get(names)
    .then(response => {
        console.log(response.data, ' nomes aqui');
        if(callbackNames){
            callbackNames(response.data);
        }
    })
    .catch(error => {
        console.log('o erro ao obter os nomes é: ', error);  
        axios.get(names)
        .then(response => {
            console.log(response.data, ' qualidades aqui');
            if(callbackNames){
                callbackNames(response.data);
            }
        })      
    })
}


const completeList = (callback) => {
    axiosRetry(axios, { retries: 6 });
    axios.get(apiRoot + '/get-full-list?fulllist=Enviar')
        .then(response => {
            console.log(response.data);
            if (callback) {
                callback(response.data);
            }
        })
        .catch(error => {
            console.log('o erro ao obter a lista COMPLETA é: ', error);     
            axios.get(apiRoot + '/get-full-list?fulllist=Enviar')
            .then(response => {
                console.log(response.data, ' qualidades aqui');
                if(callback){
                    callback(response.data);
                }
            })    
        })
}



const functionsAndroid = { 
    giveMeTheProducers: giveMeTheProducers,
    giveMeTheQualities:giveMeTheQualities,
    giveMeTheNames: giveMeTheNames, 
    completeList: completeList, 
}
export default functionsAndroid;