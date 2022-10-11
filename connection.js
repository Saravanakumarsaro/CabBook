const mongoose = require('mongoose');
initialConnection = () => {
  return new Promise((resolve) => {
    mongoose.connect(`mongodb://localhost:27017/CabBook`);
    const temp = mongoose.connection;
    temp.on('error', (e) => {
      console.log(e);
      resolve(false);
    });
    temp.on('open', () => {
      resolve(true);
    });
  });
};

module.exports = initialConnection;
