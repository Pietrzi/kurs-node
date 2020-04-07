![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/152855/73064373-5ed69780-3ea1-11ea-8a71-3d370a5e7dd8.png)

# Kilka ważnych informacji

Przed przystąpieniem do rozwiązywania zadań przeczytaj poniższe wskazówki

## Jak zacząć?

1. Stwórz [*fork*](https://guides.github.com/activities/forking/) repozytorium z zadaniami.
2. Sklonuj repozytorium na swój komputer. Użyj do tego komendy `git clone adres_repozytorium`
Adres repozytorium możesz znaleźć na stronie repozytorium po naciśnięciu w guzik "Clone or download".
3. Rozwiąż zadania i skomituj zmiany do swojego repozytorium. Użyj do tego komend `git add nazwa_pliku`.
Jeżeli chcesz dodać wszystkie zmienione pliki użyj `git add .` 
Pamiętaj że kropka na końcu jest ważna!
Następnie skommituj zmiany komendą `git commit -m "nazwa_commita"`
4. Wypchnij zmiany do swojego repozytorium na GitHubie.  Użyj do tego komendy `git push origin master`
5. Stwórz [*pull request*](https://help.github.com/articles/creating-a-pull-request) do oryginalnego repozytorium, gdy skończysz wszystkie zadania.

Poszczególne zadania rozwiązuj w odpowiednich plikach.

# Poniżej znajdziesz wytyczne do zadań

# Zapisywanie do pliku z stdin (Standard Input)

Celem tego zadania jest doskonalenie umiejętności zbudowania aplikacji **command line**, a w szczególności:

1. konfiguracja **shebang**
2. utworzenie **linku** symbolicznego
3. nadawanie uprawnień **executable** użytkownikowi do pliku (Linux i MacOS)
4. odczyt argumentów podanych podczas uruchomienia z **process.argv**
5. odczytywanie danych użytkownika ze strumienia wejścia **process.stdin**

## Wymagania

Napisz program, który:

1. będzie uruchamiany po wpisaniu w wiersz polecenia:
```bash
MacOS i Linux:
cli {targetFile}
```

```bash
Windows
cli.cmd {targetFile}
```
2. odczyta argument podany przez użytkownika podczas uruchomienia programu (**targetFile**)
3. zwróci błąd jeśli argument opisany powyżej nie zostanie podany
4. zapisze to co użytkownik wpisuje w wiersz polecenia do pliku o nazwie podanej przez użytkownika
5. dodatkowo, jeśli użytkownik wpisze słowo **Coderslab**, program wyloguje poniższą wiadomość i się zakończy:
```
You typed: Coderslab. Exiting...
```

Finalnie, program będzie wyglądał w następujący sposób:
```bash
➜  cli output

Type something and press enter...
Jestem samotnym
programistą 
pomóż mi, proszę
Coderslab
You typed: Coderslab. Exiting...
```

## Mała podpowiedź
Aby być w stanie odczytać dane wpisane przez użytkownika w linię polecenia, powinieneś skorzystać z metody:
```javascript
process.stdin.setEncoding('utf-8')
```
# Chatroom

Celem tego zadania jest dalsze doskonalenie umięjętności:
1. konfiguracji plików skryptowych: **shebang**, **chmod**(Linux i MacOS), **npm link**
2. korzystania z API **fs (filesystem)**

## Wymagania
Tym razem tworzymy swoisty komunikator, z którego może korzystać wiele osób w wielu terminalach. Wszyscy użytkownicy mogą do siebie pisać i widzieć wzajemnie swoje wiadomości. Spójrz na zapis dwóch okien linii polecenia:

1. Terminal A
```
➜  chat-room Janush

cze, poklikasz?
Janush: cze, poklikasz?

Mariola: no pewka ;-)

skąd jestes?
Janush: skąd jestes?

Mariola: mieszkam tam gdzie ty Złotko, widze Ciebie codziennie w tramwaju...

```
---
2. Terminal B
```
➜  chat-room Mariola

Janush: cze, poklikasz?

no pewka ;-)
Mariola: no pewka ;-)

Janush: skąd jestes?

mieszkam tam gdzie ty Złotko, widze Ciebie codziennie w tramwaju...
Mariola: mieszkam tam gdzie ty Złotko, widze Ciebie codziennie w tramwaju...

```

A oto, bardziej szczegółowe, techniczne wymagania:
1. Program musi być uruchamialny wpisując w linię polecenia:
```bash
chat-room {userName}
```
2. Program musi sprawdzać czy została podana wartość **userProvidedName**. W przypadku braku, program przypisuje wartość **anonymous**

```
➜  chat-room Janush
Jak masz na imię?
Janush: Jak masz na imię?

anonymous: kiedyś Ci powiem kotku
```

3. Program zapisuje dane wpisane przez użytkownika do pliku **messages**, w następującym formacie:
```
{nazwaUżytkownika}: {treśćWiadomości}
```
4. Program skanuje plik **messages** i wyświetla go za każdym razem kiedy następuje w nim zmiana

## Podpowiedzi:
1. Aby wyświetlić wiadomości, które w danym momencie znajdują się w pliku z wiadomościami, możesz skorzystać z metody:
```javascript
fs.readFileSync()
```
2. Aby śledzić zmiany w pliku skorzystaj z metody:
```javascript
fs.watchFile(pathToFile, callback)
```
Metoda .watchFile() przyjmuje dwa argumenty: **ścieżkę do pliku** oraz **funkcję**, która ma się wykonać kiedy nastąpi zmiana w pliku. Obie metody są opisane w [dokumentacji modułu fs](https://nodejs.org/docs/latest/api/fs.html).

Powodzenia!
# Visual fireworks, czyli ładny i interaktywny CLI

Celem tego zadania jest:

1. poznanie modułów, które nadają większego **uroku graficznego** aplikacjom CLI
2. utrwalenie umiejętności korzystania z modułów **commander** oraz **inquirer**

## Wymagania

Program spełnia następujące założenia:

1. Po wpisaniu **visual-fireworks f** w linię polecenia pojawia się różowa grafika z napisem **FONTS**, oraz dwa pytania do użytkownika: **Type your text** oraz **Choose color**. Użytkownik może wybrać kolor spośród wartości: pink, blue, red, orange.

```bash
➜ visual-firework f

  ______  _____  ____   _    __   ______
 |   ___|/     \|    \ | | _|  |_|   ___|
 |   ___||     ||     \| ||_    _|`-.`-.
 |___|   \_____/|__/\____|  |__| |______|


? Type your text... Cześć...
? Choose color
  pink
  blue
❯ red
  orange
```

2. Gdy użytkownik wybierze wartość spośród podanych, program zwróci tekst, który użytkownik podał, w kolorze przez siebie wybranym.

---

3. Po wpisaniu **visual-fireworks s** pojawia się czerwona grafika z napisem **STATS**. Gdy użytkownik zmieni wartość w pliku **./stats** i zapisze plik ponownie, zostanie wyświetlony **pasek postępu**, który będzie odzwierciedlał wartość z pliku **./stats**(wartość musi mieścić się w zakresie **0-100**).

```bash
➜  visual-firework s

  ______   __    ____     __   ______
 |   ___|_|  |_ |    \  _|  |_|   ___|
  `-.`-.|_    _||     \|_    _|`-.`-.
 |______| |__|  |__|\__\ |__| |______|


[||||||||||||||||||||||||-------------------------]
```

4. Za każdym razem gdy użytkownik zmieni wartość w pliku **stats**, zostanie pokazany nowy pasek postępu.

---

## Struktura pliku w projekcie

```bash
.
├── displayStats.js
├── main.js
├── package.json
├── stats
├── styleText.js
└── utils
    ├── createArt.js
    └── logColorized.js
```

## Krok po kroku

1. Stwórz konfigurację odpowiednią dla aplikacji skryptowej, tak aby była ona uruchamialna poprzez wpisanie **visual-fireworks** do linii polecenia. W tym celu musisz dopisać odpowiedni **shebang** do pliku **main.js**, sprawić aby plik był wykonywalny (Linux i MacOS), oraz stworzyć link symboliczny za pomocą **npm link**.
2. Zadeklaruj program przy pomocy modułu **commander**, w taki sposób aby mógł on wykonywać dwie akcje: **styleText** oraz **displayStats**.
3. W pliku **styleText.js** napisz funkcjonalność, która wyloguje do konsoli różową grafikę **FONTS**, a następnie zapyta użytkownika o **tekst** i **kolor**. Na końcu program, zwróci do konsoli ostylowany teskt według życzenia użytkownika. Aby to zrobić, napisz dwie funkcje w plikach **./utils/createArt.js** oraz **logColorized.js**.
4. W pliku **displayStats.js** napisz funkcjonalność, która wyświetli czerwoną grafikę **STATS**. Następnie, przy użyciu metod **fs.watchFile()** oraz **fs.readFileSync()** pobierz aktualną wartość pliku **./stats**. Za każdym razem, gdy wartość się zmieni, wyloguj pasek postępu do konsoli. Pamiętaj, że wartość w pliku stats musi mieścić się w zakresie **0-100**.

## Podpowiedzi

1. Paczki, z których można skorzystać to:

- [clui](https://www.npmjs.com/package/clui), wyświetlenie paska postępu
- [figlet](https://www.npmjs.com/package/figlet), stworzenie grafiki z tekstu
- [chalk](https://www.npmjs.com/package/chalk), stylowanie tekstu
- [commander](https://www.npmjs.com/package/commander), zadeklarowanie programu oraz sparsowanie argumentów z **process.argv**
- [inquirer](https://www.npmjs.com/package/inquirer), interaktwyne wydobywanie informacji od użytkownika

2. Do ostylowania tekstu proponujemy zastosować metodę **chalk.keyword(nazwakoloru)**, która działa w następujący sposób:

```javascript
const colorizingFunction = chalk.keyword(color)

console.log(colorizingFunction(text))
// wylogowany kolorowy tekst
```

Zauważ, że metoda **chalk.keyword()** zwraca funkcję, której można użyc do ostylowania tekstu. 

3. Do stworzenia grafiki z tekstu skorzystaj z metody **figlet.textSync()**.
```javascript
const art = figlet.textSync('Random text1', {
    font: 'Rammstein',
    horizontalLayout: 'default',
    verticalLayout: 'default'
})
```

4. Aby stworzyć pasek postępu, skorzystaj z metody **Gauge** modułu **clui**.
```javascript
const currentValue = 50
const maxValue = 100
const numberOfRows = 50
const alarmThreshold = maxValue * 0.8

console.log(Gauge(currentValue, maxValue, numberOfRows, alarmThreshold))
// wylogowane
[||||||||||||||||||||||||-------------------------]
```
---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
