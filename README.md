# Tera-Guía
Un módulo de guía para TERA traducido al español. Muestra mensajes en la pantalla y dibuja zonas de ataques y mecánicas de jefes (también admite mensajes de texto a voz).   

#### Otras traducciones

* [**Inglés (English)** by HSDN](https://github.com/hsdn/tera-guide)
* [**Portugués (Português)** by Emilia](https://github.com/emilia-s2/Guia-DG-Portugues)
* [**Taiwanés (臺灣話)** by michengs](https://github.com/michengs/Dungeon-guide)

## Dependencias
* **tera-guide-core** - https://github.com/hsdn/tera-guide-core

Al usar TeraToolbox, todas las dependencias se instalarán automáticamente.   

## Comandos
Toolbox(/8) | Descripción del comando
--- | ---
**guide** | Módulo on/off
**guide&nbsp;gui** | Mostrar módulo GUI.
**guide&nbsp;voice**<br>(defecto: desactivado) | Mensajes de texto a voz (TTS).
**guide&nbsp;lNotice**<br>(defecto: desactivado) | Enviar mensajes en el canal **Notice** en lugar de mensajes en pantalla.
**guide&nbsp;gNotice**<br>(defecto: desactivado) | Enviar mensajes en el canal **Chat Party**.
**guide male~female**<br>(defecto: femenino) | Configure el género de voz de voz TTS (si está disponible).
**guide&nbsp;`1`~`10`**<br>(defecto: 2) | Configure la velocidad de voz TTS.
**guide&nbsp;spawnObject**<br>(defecto: activado) | Generación de objetos marcadores.
**guide&nbsp;stream**<br>(defecto: desactivado) | Modo Streamer (ocultar todos los mensajes y objetos, se reproducirá la voz TTS).
**guide&nbsp;dungeons** | Lista de todas las dungeons compatibles y sus identificadores.
**guide&nbsp;verbose&nbsp;`id`**<br>(defecto: activado para todos) | Enviar mensajes para la dungeon especificada por `id`.
**guide&nbsp;spawnObject&nbsp;`id`**<br>(defecto: activado para todos) | Generación de objetos marcadores para la dungeon especificada por `id`.
**guide&nbsp;help** | Lista de comandos compatibles.

## Dungeons Compatibles
id | Nombre de la dungeon | Idioma
--- | --- | ---
9044 | Bahaar's Sanctum | Español
3037 | Bahaar's Sanctum (Training) | Español
7011 | Shadow of the Gutrends (Guardian) | Español
7015 | Escape from Balder's Refuge (Guardian) | Español
3023 | Akalath Quarantine | Español
3032 | Akalath Quarantine (Training) | Español
3020 | Sea of Honor | Español
3026 | Corrupted Skynest | Español
3126 | Corrupted Skynest (Difícil) | Español
3101 | Gossamer Vault | Español
3102 | Draakon Arena | Español
3103 | Forbidden Arena [Undying Warlord] | Español
9770 | Ruinous Manor | Español
9970 | Ruinous Manor (Difícil) | Español
3104 | Catalepticon | Español
3204 | Catalepticon (Difícil) | Español
3040 | Lumikan's Trial | Español
3106 | Killing Grounds | Español
3206 | Crimson Killing Grounds | Español
3042 | Gardan's Trial | Español
3034 | Rampaging RK-9 Kennel | Español
3041 | Damned Citadel | Español
3030 | Commander's Residence | Español
3043 | Harnovog's Trial | Español

## Configuración de Mensajes

* En la pantalla (en la parte inferior) y mensajes de chat, si el parámetro **lNotice** está *activado*, todos los mensajes se enviaran al canal **Notice**.   
  ![](https://i.imgur.com/PGRm9Hx.png)   

* Cuando el parámetro **gNotice** está *activado*, todos los mensajes se enviarán al canal **Chat Party**.   

* En la pantalla (en la parte superior), si el parámetro **lNotice** está *desactivado*, todos los mensajes se mostraran en la parte superior de la pantalla.   
  ![](https://i.imgur.com/eVmuWjG.png)   
  Puede cambiar el color de los mensajes usando los comandos, para cambiarlo tendra que escribir el parámetro **guide help** para mostrar una lista completa de todos los colores soportados o tambien puede usar la interfaz GUI.   
  ![](https://i.imgur.com/uXc3vdH.png)   

* Cuando el Modo Streamer está *activado* (parámetro **stream**), todos los mensajes de texto se enviarán solamente al canal de chat **Toolbox(/8)**, pero se reproducirán los mensajes de texto a voz TTS.   
  ![](https://i.imgur.com/NLIt4yq.png)   

* Cuando ingresa a una mazmorra el modulo le notificará con un mensaje de bienvenida, tambien le notificará que modulos estan activados o desactivados.   
  ![](https://i.imgur.com/iGBO15l.png)   

* Para desactivar o activar los mensajes de texto a voz TTS, use el comando **guide voice**.   

* Para cambiar el género de la a voz TTS, use el comando **guide male~female**.   

## Módulo GUI

* En el canal de chat **Toolbox(/8)** escriba el siguiente comando **guide gui** para mostrar una interfaz gráfica de usuario del modulo, puede tambien cambiar las configuraciones básicas.   
  ![](https://i.imgur.com/KNRFZI7.png)   

## Más información
* Desarrolladores Wiki https://github.com/hsdn/tera-guide/wiki
* Para preguntas y sugerencias, comuníquese a través de Discord: **JKQ#5649**

## Créditos
- **[Kasea](https://github.com/Kaseaa)** - Desarrollador original del módulo Tera-Guide
- **[HSDN ](https://github.com/HSDN)** - Autor original del módulo en inglés tera-guide HSDN
- **[michengs](https://github.com/michengs)** - Autor del código base para la mayoría de las guías y el núcleo del módulo
- **[ZC](https://github.com/tera-mod)** - Coordenadas proporcionadas para representar las áreas de ataque y la mecánica
- **[Kuroine](https://github.com/Kuroine)** - Autor del código base de la guía DA
- **[Multarix](https://github.com/Multarix)** - Autor de la guía RR y también realizando cambios en la traducción al inglés
- **[Owyn](https://github.com/Owyn)** - Desarrollador de grandes guías para RK-9, AA y GV, cuyo código se utilizó
- **[Loliconera](https://github.com/Loliconera)** - Autor de traducción al español latino
- **[Emilia](https://github.com/emilia-s2)** - Autora de traducción al portugués y guías de guardian
- **[ITunk](https://github.com/GrafNikola)** - Autor de la traducción inicial al ruso