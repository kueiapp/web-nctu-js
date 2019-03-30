<!--
/*
* by Kueiapp.com
* all rights preserved.
*/
-->
var rgbled, dht;

boardReady({board: 'Smart', device: 'DEVICE_ID', transport: 'mqtt', multi: true}, function (board) {
  board.samplingInterval = 250;
  rgbled = getRGBLedCathode(board, 15, 12, 13);
  rgbled.setColor('#ffcc00');
  dht = getDht(board, PIN_ID);
  dht.read(function(evt){
    document.querySelector("#humid_data").innerHTML = dht.humidity;
    document.querySelector("#temp_data").innerHTML = dht.temperature;
  }, 1000);
});