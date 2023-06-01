# Paragliding APP

Server Client Projekt im Rahmen des Vertiefunsprofiles Geoinformatik und Raumanalyse (Modul 4230) des Institutes Geomatik an der FHNW Muttenz. 

- **Frontend:** VUE.js, OpenLayers und Tailwind
- **Backend:** FastAPI, PostgreSQL

## Requirements
- [Git](https://git-scm.com/)
- von Vorteil [Visual Studio Code](https://code.visualstudio.com/) 
- [Anaconda Distribution](https://www.anaconda.com/products/distribution) oder [Miniconda](https://docs.conda.io/en/latest/miniconda.html)
- Node.js und npm ([https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
  
## Git Projekt mit Visual Studio Code lokal klonen
Öffne ein neues Visual Studio Code Fenster und wähle unter Start *Clone Git Repository*. Alternativ öffne die Command Palette in VS Code `CTRL+Shift+P` (*View / Command Palette*) und wähle `Git: clone`. 
Füge die Git web URL `https://github.com/MattiaBaertschi/Paragliding-App.git` ein und bestätige die Eingabe mit Enter. Wähle einen Ordner in welchen das Repository *geklont* werden soll.

## Frontend installieren
Öffne ein Terminal (Command Prompt in VS Code) und wechsle in den *client* Ordner in diesem Projekt

``` shell
cd client
# aktiviere node.js (falls nvm genutzt wird) 
# nvm use 16.19.1 
# install all the node.js dependencies
npm install
# node Projekt ausführen
npm run dev
```

## Backend installieren
Öffne ein Terminal und wechsle in den *server* Ordner.
1. Virtuelle Umgebung für Python mit allen Requirements in der `requirements.txt` Datei aufsetzen.

```shell
# Requirements
cd server
# Füge conda-forge den als Channel in conda hinzu, da sonst nicht alle Pakete installiert werden können.
conda config --add channels conda-forge
# Erstelle ein neues Conda Environment und füge die Python Packges requirements.txt hinzu, requirements.txt befindet sich im Ordner server
conda create --name cloudy python=3.10.9 --file requirements.txt
```
3. Aufsetzen einer loklaen PostgreSQL Datenbank
   Besuche die offizielle PostgreSQL-Website unter https://www.postgresql.org/ und lade dir die Version PostgreSQL 15 herunter.

   Tipp: fürs Entwickeln oder Ansehen von Daten kann PGAdmin ein wertvolles Tool sein. PGAdmin kann unter https://www.pgadmin.org/ bezogen werden.

4. Es muss nun noch ein Mailserver aufgesetz werden. Die Aplikation würde zwar auch ohne diesen Schritt funktionieren. Für das Login eines Users soll jedoch die E-Mail Adresse bestätigt werden. So kann verhindert werden, dass inexistente E-Mail Adressen für das Login verwendet werden. Ein Mailserver kann auf diversen Plattformen gratis erstellt und die entsprechenden SMTP Angaben können im secret.json (sieh unten) ergänzt werden.


5. Ergänze die Datei "secret_empty.json" mit den in der Datei angegebenen Werten. Für den Fall das die Front  und Backend lokal zum laufen gebrach werden sollen, können die Bildpfade beim Standardwert belassen werden. Der Rest muss für die vollumfägliche Funktion des Backends zwingend ausgefüllt werden. Schlussendlich muss die "secret_empty.json" Datei in "secret.json" umbenannt und dem gitignor hinzugefüt werden. So kann sichergestellt werden, dass die Passwörter und Loginkeys nicht der Öffentlichkeit zur Verfügung stehen.

6. Backend ausführen, virtuelle Umgebung starten und server *uvicorn* starten. Öffne http://localhost:8000/api/docs im Browser und verifiziere, ob das Backend läuft.
``` shell
# navigiere zum server ordner im Verzeichnis
cd server
# aktiviere die conda umgebung cloudy
conda activate cloudy
# start server auf localhost aus dem Ordner "server"
uvicorn app.main:app --reload
# Öffne die angegebene URL im Browser und verifiziere, ob das Backend läuft.
```

## API Dokumentation
Fast API kommt mit vorinstallierter Swagger UI. Wenn der Fast API Backend Server läuft, ist die Dokumentation der API über Swagger UI auf http://localhost:8000/api/docs verfügbar.

***Achtung:***

*/api* ist nicht Standard, dies wurde hinzugefügt um die API später auf einem öffentlich zugänglichen Server laufen lassen zu können.

