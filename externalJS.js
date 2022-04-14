"use strict"

/* die Funktion berechnet die Distanz zwischen zwei Koordinatenpaaren */
function distanzrechner(lat1, lng1, lat2, lng2) {
   const R = 6371e3; // Erdradius 
   const breite1 = lat1 * Math.PI/180; // Umrechnung von Winkel- in Bogenmaß
   const breite2 = lat2 * Math.PI/180; 
   const dif_breite = (lat2-lat1) * Math.PI/180;
   const dif_laenge = (lng2-lng1) * Math.PI/180;
   const a = Math.sin(dif_breite/2) * Math.sin(dif_breite/2) +
             Math.cos(breite1) * Math.cos(breite2) *
             Math.sin(dif_laenge/2) * Math.sin(dif_laenge/2);
   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
   const d = R * c; // Ergebnis in Metern 
   return d
}

var string = "" 

for (let index = 0; index < cities.length; index++) {
   var d = distanzrechner(cities[index][0],cities[index][1],point[0],point[1]) // das Ergebnis der Funktion wird in der Variable d gespeichert  
   string += "<li>"
   string += d // string wird nach jedem Schleifendurchgang mit dem Ergebnis erweitert  
   string += "</li>"
}
document.getElementById("id01").innerHTML = string

/* die Funktion soll die Listenelemente von klein nach groß sortieren */ 
function sortList() {
   var list, i, switching, b, shouldSwitch; // Variablendeklarationen
   list = document.getElementById("id01");
   switching = true;
   while (switching) { // die while-Schleife wiederholt sich so lange, bis keine Listenelemente mehr vertauscht wurden bzw. switching "false" bleibt
     switching = false;
     b = list.getElementsByTagName("LI"); 
    
     for (i = 0; i < (b.length - 1); i++) {  
      
       shouldSwitch = false; // default: die betrachteten Listenelemente sind in der richtigen Reihenfolge und muessen nicht vertauscht werden 
       if (Number(b[i].innerHTML) > Number(b[i + 1].innerHTML)) { 
         shouldSwitch = true;
         break; // falls zwei Listenelemente nicht in der richtigen Reihenfolge sind, muessen sie vertauscht werden und die Schleife wird verlassen  
       }
     }
     if (shouldSwitch) { 
       b[i].parentNode.insertBefore(b[i + 1], b[i]); // die beiden Listenelemente werden vertauscht 
       switching = true; // anschließend wird die Schleife von vorne durchlaufen 
     }
   }
   return list;
 }
 sortList();

 
