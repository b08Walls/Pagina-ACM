/*Banner de Escuelas Normales*/
images = new Array(4);
images [0] = "\img\bine.jpg";
images[1] = "\img\fede.jpg";
images[2] = "\img\ijtb.jpg";
images[3] = "\img\tehu.jpg";

/*urls*/
urls = new Array(4);
urls[0] = "http://www.bine.mx/";
urls[1] = "http://www.ensfep.edu.mx/";
urls[2] = "https://www.enijtb.edu.mx/";
urls[3] = "http://epuebla.edu.mx/serpoblanoesseruniversitario/informacion.php?id=39";

var longArray = images.length;
var conunter = 0;

conunter = Math.floor((Math.random()*longArray))

var tiempo = 4;
var timer = tiempo * 1000;

function banner()
{
  conunter++;
  conunter = conunter % longArray;
  document.banner.src = images[counter];
  setTimeout("banner()", timer);
}

function assignURL()
{
  counter2 = counter;
  url = window.open(urls[counter2]);
  return false;
}
