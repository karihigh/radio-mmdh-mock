// esto es un pegoteo del código de p5.js que lee el grado de rotación de un potenciometro
// y hace rotar un cuadrado en la pantalla

// serial communication between a microcontroller with a pot on pin A0
// arduino code can be found here : https://gist.github.com/shfitz/b78b412960fba668d08ccc84b9ee838d
// youtube: https://www.youtube.com/watch?v=jsXLMm-FnSY&ab_channel=ScottFitzgerald

let serial; // variable for the serial object
let latestData = "waiting for data"; // variable to hold the data

let n = audios.length; // n tiene que ser la cantidad de archivos de audio que encuentra en la carpeta
let sub = 1023/n; // la división de los datos del potenciometro según la cantidad de audios
 
let rango = 
// función para definir los rangos
// si n = 6, sub sería 60
// por lo tanto rango.[0] = desde 0 hasta 60
// rango.[1] = 61, 120
// rango.[2] = 121, 180 .... etc

function setup() {
  createCanvas(windowWidth, windowHeight);
  serial = new p5.SerialPort();
  // serial port to use - you'll need to change this
  serial.open('/dev/tty.usbmodem143201');
  serial.on('data', gotData);
}

// when data is received in the serial buffer

function gotData() {
  let currentString = serial.readLine(); // store the data in a variable
  trim(currentString); // get rid of whitespace
  if (!currentString) return; // if there's nothing in there, ignore it
  console.log(currentString); // print it out
  latestData = currentString; // save it to the global variable
}

// esto tiene que ser un for loop que itere por la cantidad de audios (n)
if rango.[0] {
    title.[0];
    description.[0];
    audio[0].isPlaying;
}

function draw(title, description) { // acá hay que pasar las variables para las graficas
  background(255, 255, 255);
  textSize(32);
  text(title, 10, 30);
  textSize(16);
  text(description, 10, 60)
  // in this example, we are reciving a value between 0 and 1023
  // and using that to rotate the square
  angleMode(DEGREES);
  let rotDeg = map(latestData, 0, 1023, 0. ,360.); // tengo que confirmar qué valores me entrega el potenciometro
  translate(width / 2, height / 2);
  rotate(rotDeg); // en vez de rotar, va a moverse de izquierda a derecha como un dial
  rectMode(CENTER);
  fill(255, 0, 0);
  rect(0, 0, 10, 100); 

}

