import axios from 'axios';
import axiosRetry from 'axios-retry';

const urlToGetNames = 'https://bdv.glitch.me/api/wines/get-full-list-names';
const urlToGetProducers = 'https://bdv.glitch.me/api/wines/get-full-list-producers';
const urlToGetQualities = 'https://bdv.glitch.me/api/wines/get-full-list-qualities';

const deleteRepeated = (args) => {
  var filtered = [];
  filtered.push(args[0]);
  for (var x = 0; x < args.length; x++) {
    if (!filtered.includes(args[x])) {
      filtered.push(args[x]);
    }
  }
  // console.log(filtered, 'filtered');
  return filtered.sort(); // sending already filtered
}

const getArrayNames = (myCallback) => {
  axiosRetry(axios, { retries: 5 });
  axios.get(urlToGetNames)
    .then(response => {
      console.log(response.status, ' response.status');
      if (myCallback) {
        myCallback(deleteRepeated(response.data));
      }
    })
    .catch(error => {
      console.log(error, 'error');
      axios.get(urlToGetNames)
        .then(response => {
          if (myCallback) {
            myCallback(deleteRepeated(response.data));
          }
        })
    })
}

const getArrayProducers = (myCallback) => {
  axiosRetry(axios, { retries: 5 });
  axios.get(urlToGetProducers)
    .then(response => {
      console.log(response.status, ' response.status');
      if (myCallback) {
        myCallback(deleteRepeated(response.data));
      }
    })
    .catch(error => {
      console.log(error, 'error');
      axios.get(urlToGetProducers)
        .then(response => {
          if (myCallback) {
            myCallback(deleteRepeated(response.data));
          }
        })
    })
}

const getArrayQualities = (myCallback) => {
  axiosRetry(axios, { retries: 5 });
  axios.get(urlToGetQualities)
    .then(response => {
      console.log(response.status, ' response.status');
      if (myCallback) {      
        myCallback(deleteRepeated(response.data));
      }
    })
    .catch(error => {
      console.log(error, 'error');
      //if error, repeat API call
      axios.get(urlToGetQualities)
        .then(response => {
          if (myCallback) {
            myCallback(deleteRepeated(response.data));
          }
        })
    })
}

const getArrays = {
  getArrayNames: getArrayNames,
  getArrayProducers: getArrayProducers,
  getArrayQualities: getArrayQualities,
  deleteRepeated: deleteRepeated,
}

export default getArrays;