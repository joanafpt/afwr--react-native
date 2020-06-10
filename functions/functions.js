import axios from 'axios';
import axiosRetry from 'axios-retry';

const commonUrl = 'https://bdv.glitch.me/api/wines/';
const pathToComplete = 'get-full-list?fulllist=Enviar'; //ok
const pathAndParamsToName = 'find-a-wine/?wname='; //ok
const pathAndParamsToProducer = 'list-by-producer/?prod='; //ok
const pathAndParamsToQuality = 'list-by-type-of-wine/?qual='; //ok


const getCompleteDataFromApi = (callback) => {
  axiosRetry(axios, { retries: 5 });
  axios.get(commonUrl + pathToComplete)
    .then(response => {
      console.log(response.data);
      if (callback) {
        callback(response.data);
      }
    })
    .catch(error => {
      console.log(error, 'error');
      axios.get(commonUrl + pathToComplete)
        .then(response => {
          console.log(response.data);
          if (callback) {
            callback(response.data);
          }
        })
    })
}

const getDataNameFromApi = (enteredInput, callback) => {
  axiosRetry(axios, { retries: 5 });
  axios.get(commonUrl + pathAndParamsToName + encodeURIComponent(enteredInput))
    .then(response => {
      if (callback) {
        callback(response.data);
      }
    })
    .catch(error => {
      console.log(error, 'error');
      axios.get(commonUrl + pathAndParamsToName + encodeURIComponent(enteredInput))
        .then(response => {
          if (callback) {
            callback(response.data);
          }
        })
    })
}

const getDataProducerFromApi = (enteredInput, callback) => {
  axiosRetry(axios, { retries: 5 });
  axios.get(commonUrl + pathAndParamsToProducer + encodeURIComponent(enteredInput))
    .then(response => {
      //console.log(response.data);
      if (callback) {
        callback(response.data);
      }
    })
    .catch(error => {
      console.log(error, 'error');
      axios.get(commonUrl + pathAndParamsToProducer + encodeURIComponent(enteredInput))
        .then(response => {
          if (callback) {
            callback(response.data);
          }
        })
    })
}

const getDataQualityFromApi = (enteredInput, callback) => {
  axiosRetry(axios, { retries: 5 });
  axios.get(commonUrl + pathAndParamsToQuality + encodeURIComponent(enteredInput))
    .then(response => {

      if (callback) {
        callback(response.data);
      }
    })
    .catch(error => {
      console.log(error, 'error');
      axios.get(commonUrl + pathAndParamsToQuality + encodeURIComponent(enteredInput))

        .then(response => {
          console.log(response.data);
          if (callback) {
            callback(response.data);
          }
        })
    })
}

const functions = {
  getCompleteDataFromApi: getCompleteDataFromApi,
  getDataNameFromApi: getDataNameFromApi,
  getDataProducerFromApi: getDataProducerFromApi,
  getDataQualityFromApi: getDataQualityFromApi,
}

export default functions;