# P1_uf2_M06
Una planta industrial que fabrica peces mecanitzades amb torns de control numèric CNC necessita una aplicació que l’ajudi a planificar la seva producció.
La fàbrica consta de torns A i torns B.
La part de client de l’aplicació ha d’utilitzar Jquery sempre que sigui possible i la part de servidor PHP.  PHP tindrà les dades guardades en arrays (usuaris, màquines i comandes).

## Login (1 punt):
L’accés al planificador ha d’estar restringit als operaris i l’encarregat. Per tant, serà necessari autentificar els usuaris i diferenciar dos grups d’usuaris.
Si el login no és correcte, s’indicarà a l’usuari
A fi de mantenir la sessió oberta, s’ha de crear una cookie de sessió (idSession) que duri mentre no es tanqui el navegador i una localStorage
En el cas que es validi, a l’aplicació ha d’haver-hi un botó per a fer logout.
 
## Carrega inicial de la informació (1 punt):
Un cop s’accedeixi a l’aplicació, si no hi ha dades guardades, s’han de crear les comandes dels clients (nom client, nom peça, tipus de peça, quantitat, situació, posició) i les màquines de la fàbrica (id, tipus de màquina, cua) que es rebran en JSON. Les comandes poden ser de 4 tipus de peces diferents.
Tant per a les comandes com per a les màquines s’han d’utilitzar classes.

## Configuració (1 punt):
Ha d’haver-hi un menú a la part superior que permeti canviar entre la visió de les màquines i la part de configuració.  
En aquesta configuració s’ha de poder definir quines màquines poden fer cada un dels 4 tipus de peces. S’ha de poder modificar sempre que les màquines no tinguin feines en cua, en cas que tinguin feines assignades s’ha d’avisar a l’usuari indicant que no es pot fer cap canvi.

## Assignar comandes a les màquines (1 punt):
S’ha de poder assignar les diferents comandes a les màquines de forma molt visual (drag and drop). Les comandes solament poden anar a les màquines que les poden fer, per tant, un cop seleccionada una comanda, s’ha d’indicar molt visualment (color vermell i verd) on podem posar-la. Si la movem a una màquina errònia, la comanda tornarà a l’origen.

## Ordenació de comandes (0,5 punts):
L’ordre de la cua de comandes de les màquines s’ha de poder canviar de forma fàcil (drag and drop) afectant la resta de la cua de producció.

## Informació i eliminació (1 punt):
En fer click dret sobre una comanda ha d’aparèixer tota la informació d’aquesta. També s’ha de poder eliminar de la cua de la màquina per a que torni a la llista de comandes pendents d’assignar.
En cas que no estigui en cap màquina no ha d’aparèixer l’opció d’eliminar-la de la màquina.
Els operaris també tindran l’opció de marcar la comanda com a finalitzada per a que desaparegui de la cua. Però solament amb la primera comanda de cada màquina, ja que és la que s’està fabricant.

## Manteniment de les dades (1,5 punts):
A fi de mantenir l’estat de les cues un cop es tanca el navegador, cada cop que hi hagi un canvi en alguna de les cues de les màquines s’ha de guardar aquesta informació (array) en una cookie.
Per tant, a l’inici de l’aplicació s’ha de restaurar l’última posició de totes les comandes.
També s’ha de guardar la configuració per a que es mantingui en el futur.
Ha d’haver-hi un botó per a reiniciar l’aplicació i començar de 0 (eliminar les cues i la configuració).

## Diferents rols d’usuari (1 punt):
Els operaris poden veure totes les comandes, les màquines, la seva informació i finalitzar la primera comanda de la cua, però no poden moure comandes ni eliminar comandes de les cues. Solament l’encarregat pot assignar les comandes a les màquines, moure-les i eliminar-les. A més, l’encarregat és l’únic que pot fer la part de configuració i fer el reset de l’aplicació.

## Documentació del codi (0,5 punts).

## Estructura correcta en carpetes (0,5 punts).

## Organització del codi (refactorització) (1 punt).