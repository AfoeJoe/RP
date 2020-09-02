let sensorLib = require('node-dht-sensor');
sensorLib.initialize(22, 4);
let interval = setInterval(() => {
  read();
}, 2000);

let read = () => {
  let readOut = sensorLib.read();
  console.log(
    `temperature is ${readOut.temperature.toFixed(
      2
    )} C. Humidity: ${readOut.humidity.toFixed(2)} %`
  );
};
