let Gpio = require('onoff').Gpio;
var led = new Gpio(4, 'out');
let pushButton = new Gpio(17, 'in', 'both');
pushButton.watch((err, value) => {
  if (err) console.log('there was  an error' + err);
  led.writeSync(value);
});
let unexportOnClose = () => {
  led.writeSync(0);
  led.unexport();
  pushButton.unexport();
};

process.on('SIGINT', unexportOnClose);
