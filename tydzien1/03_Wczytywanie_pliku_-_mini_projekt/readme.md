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

# Asynchroniczne czytanie i zapis do pliku

Wiemy już jak w sposób asynchroniczny korzystać z modułu fs i zapisywać, bądź odczytywać plik. Znasz całą masę narzędzi, które mogą nam w tym pomóc. Teraz nadszedł czas aby wykorzystać tę wiedzę w praktyce.

**Pamiętaj o uruchomieniu `npm install` przed rozpoczęciem pracy!**

## Katalog biblioteczny

W pliku `index.js`, który jest startowym plikiem naszego projektu stworzyliśmy dwie komendy `get` oraz `add`. Aby je uruchomić użyj `node index.js get` oraz `node index.js add`.

Komenda `get` powinna wyświetlać listę dostępnych w pliku `books.json` książek i dawać użytkownikowi możliwość wyboru jednej z nich (zapewnione przez bibliotekę `inquirer`). Kiedy książka zostanie już wybrana, powinniśmy wyświetlić użytkownikowi wszystkie informacje o niej w przystępnej formie. Aby to zrobić należy uzupełnić metodę `getBooks()` z pliku `booksAPI.js` i wykorzystać ją w akcji komendy `get`.

Zadanie wykonaj używając każdej z poniższych metod:
* asynchronicznej metody do odczytu plików z modułu fs z callbackiem **(w katalogu fs-callback)**
* asynchronicznej metody do odczytu plików z modułu fs opakowanej w Promise **(w katalogu fs-promise-api)**
* asynchronicznej metody do odczytu plików z modułu fs opakowanej w Promise z wykorzystaniem async/await **(w katalogu fs-async-await)**
* asynchronicznej metody do odczytu plików z modułu fs opakowanego w metodę `promisifyAll()` z biblioteki `bluebird` **(w katalogu fs-bluebird)**
* asynchronicznej metody do odczytu plików z modułu fs opakowanej w metodę `promisify()` z biblioteki `util` **(w katalogu fs-utils)**
* asynchronicznej metody do odczytu plików z modułu fs z obiektu fs.promise **(w katalogu fs-promises)**

**Nie zapomnij o obsłudze błędów!**
* Zmień ścieżkę do pliku, na taką, która nie istnieje w Twojej strukturze katalogów i sprawdź, czy poprawnie obsługujesz błędy w każdym z implementowanych scenariuszy!
* Pamiętaj, że w przypadku Promise API błędy możemy obsługiwać na dwa sposoby. Zaimplementuj oba :)

Komenda `add` wyświetla użytkownikowi prompt i prosi o podanie tytułu, autora i roku wydania książki. Następnie używa metody `getBooks()` z pliku `booksAPI.js`, którą już wcześniej implementowaliśmy i pobiera wszystkie dostępnie książki. Do pobranego zbioru dodaje kolejny obiekt typu książka z atrybutami podanymi wcześniej przez użytkownika. Cały zbiór jest później z powrotem zapisywany do pliku `books.json`. Żeby było to możliwe musimy uzupełnić także metodę `saveBooks()`. Obie metody tj. `getBooks()` i `saveBooks()`należy wykorzystać w akcji komendy add.

Zadanie wykonaj używając każdej z poniższych metod:
* asynchronicznej metody do zapisu plików z modułu fs z callbackiem **(w katalogu fs-callback)**
* asynchronicznej metody do zapisu plików z modułu fs opakowanej w Promise **(w katalogu fs-promise-api)**
* asynchronicznej metody do zapisu plików z modułu fs opakowanej w Promise z wykorzystaniem async/await **(w katalogu fs-async-await)**
* asynchronicznej metody do zapisu plików z modułu fs opakowanego w metodę `promisifyAll()` z biblioteki `bluebird` **(w katalogu fs-bluebird)**
* asynchronicznej metody do zapisu plików z modułu fs opakowanej w metodę `promisify()` z biblioteki `util` **(w katalogu fs-utils)**
* asynchronicznej metody do zapisu plików z modułu fs z obiektu fs.promise **(w katalogu fs-promises)**

**Nie zapomnij o obsłudze błędów!**
* Zmień ścieżkę do pliku, na taką, która nie istnieje w Twojej strukturze katalogów i sprawdź, czy poprawnie obsługujesz błędy w każdym z implementowanych scenariuszy!
* Pamiętaj, że w przypadku Promise API błędy możemy obsługiwać na dwa sposoby. Zaimplementuj oba :)

---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
