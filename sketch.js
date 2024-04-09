// primero creamos variables que contengan las imágenes.
let pajaro;
let pajaro1;
let pajaro2;
let posX= 0;

// Antes de ejecutarse el programa va a cargar la imagen en su memoria, aún no le decimos qué muestre.
function preload(){
  pajaro= loadImage("./chucao.jpeg")
  pajaro1=loadImage("./marpe.jpg")
  pajaro2= loadImage("./loica.jpg")
}

//Definimos la ventana que contendrá las imágenes.
function setup() {
  createCanvas(windowWidth, windowHeight);
}

//Acá le decimos al programa que dibujar o que imagen mostrar, aplicando coordenadas.
function draw() {
  background(50);
  //Esta imagen se moverá con el cursor del mouse.
  image(pajaro, 140, 220, mouseX, mouseY);
  
  image(pajaro1, 400, 0, 180, 220);
 // Esta imagen se desplazará por el eje x. 
  image(pajaro2, posX, 0,180, 220);
  posX ++;
  if(posX>400)
    {posX=0;
    }
}