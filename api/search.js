const axios = require('axios');
const config = require('./config');
const geolocation = require('./geolocation');
const _ = require("lodash");


getAllUsers = async () => {
  try {
    const allUsers = await axios.get(config.allUsersURL);
    return allUsers.data;
  } catch (err) {
    return err.error
  }
}
 
getLondonUsers = async () => {
  try {
    const londonUsers = await axios.get(config.londonersURL);
    return londonUsers.data;
  } catch (err) {
    return err.error
  }
}

findUsersWithinDistance = (arr, locationToTest) => {
  var usersWithinFiftyMiles = [];
  // create a new latlon pairing from co-ords
  // add user to array if their coords are in 50 miles
  for (i=0; i<arr.length; i++) {
    // convert to number as some are passed as strings
    var newLatLon = {'lat': Number(arr[i].latitude), 'lon': Number(arr[i].longitude)}
    
    if(geolocation.isWithinFiftyMiles(locationToTest,newLatLon)) {
      usersWithinFiftyMiles.push(arr[i]);
    }
  }
  return usersWithinFiftyMiles;

}

combineUsers = (firstArray, secondArray) => {
  const combinedArray = _.unionWith(firstArray, secondArray,_.isEqual);
  return combinedArray;
}

filterAndCombineUsers =  async () => {
  let allUsers = await getAllUsers();
  let londonUsers = await getLondonUsers();

  const usersWithinDistance = findUsersWithinDistance(allUsers, config.londonLatLon);
  const combinedLondonAndWithinFifty = combineUsers(londonUsers, usersWithinDistance);
  return combinedLondonAndWithinFifty;
}

module.exports = {
    getAllUsers, 
    getLondonUsers,
    findUsersWithinDistance,
    combineUsers,
    filterAndCombineUsers
}