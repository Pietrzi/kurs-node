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

# Podstawy asynchroniczności w Node.js

Callbacki wraz z Promise API oraz konstrukcją async/await są podstawowymi narzędziami wykorzystywanymi do tworzenia asynchronicznego kodu w JavaScripcie. Z ich pomocą będziemy mogli pisać wydajne aplikacje w Node.js, a póki co rozwiążemy kilka zadań.:)

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Kapryśny serwer

W pliku `promise_basics.js` uruchamianym skryptem `npm run promise` znajduje się funkcja `getAsyncNumbers`, której zadaniem jest symulacja odpowiedzi z serwera. Z serwera dość kapryśnego trzeba przyznać, ponieważ równie często zwraca poprawne odpowiedzi, co błędy. Wszystko to za sprawą funkcji `getRandomDelay`, która losuje opóźnienia, po których wywołana zostanie funkcja `resolve` albo `reject` (wygrywa krótsze opóźnienie).

Jeżeli Promise wykona się poprawnie to zwróci tablicę liczb, a Twoim zadaniem będzie posortowanie ich i wyświetlenie w konsoli.

Jeśli wystąpi błąd obsłuż go wyświetlając w konsoli jego treść.

1. Użyj jedynie metody `then()`.
2. Niezależnie od stanu Promisa (fulfilled/rejected), po jego zakończeniu wyświetl w konsoli informację "Proces zakończony".
3. Zmodyfikuj poprzednie rozwiązanie i do obsługi błędów użyj metody `catch()`.
4. Zmodyfikuj poprzednie rozwiązanie i skorzystaj z konstrukcji `async/await`. Błędy obsłuż przy użyciu `try/catch`.

# Promise API

Aby sprawnie poruszać się w asynchronicznym świecie Javascript, bardzo ważna jest dobra znajomość narzędzi, z którymi przyjdzie nam pracować. Dlatego teraz przetestujemy metody, jakie dostarcza nam Promise API.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

W pliku `promise_api.js` uruchamianym skryptem `npm run promise` znajduje się funkcja `getAsyncNumbers`, której działanie znasz już z poprzedniego ćwiczenia.

## Promise.all()

1. Twoim zadaniem jest wywołać metodę Promise.all. Jako argumentu użyj tablicy z wielokrotnie wywołaną funkcją `getAsyncNumbers`. Jakie są szanse, że metoda Promise.all zakończy się sukcesem?
2. Jeśli Promise.all zakończy się powodzeniem, wyświetl rezultat w dowolnej formie. (możesz spróbować połączyć tablice i posortować zawartość tablicy wynikowej)
3. Jeśli Promise.all zakończy się błędem, obsłuż go wypisując jego treść na konsolę.

## Promise.allSettled()
1. Twoim zadaniem jest wywołać metodę Promise.allSettled. Jako argumentu użyj tablicy z wielokrotnie wywołaną funkcją `getAsyncNumbers`. Jakie są szanse, że metoda Promise.allSettled zakończy się sukcesem?
2. Jeśli Promise.allSettled zakończy się powodzeniem, wyświetl w konsoli stany wszystkich Promisów jakie zostały przekazane w argumencie metody.
3. Zastanów się czy Promise.allSettled może zakończy sie błędem? Jeśli tak, to kiedy.

## Promise.resolve(), Promise.reject()
1. Wywołaj metodę Promise.all. Jako argumentu użyj tablicy z wielokrotnie wywołaną metodą Promise.resolve. Następnie z wielokrotnie wywołaną metodą Promise.reject. Jakich rezultatów się spodziewamy?
# Promise API

Jak wiesz Promisa nie da się przerwać. Czasami jest to duży problem. Bluebird udostępnia w tym celu metodę cancel, ale my możemy napisać własną. No to do roboty!

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

W pliku `promise_cancel.js` uruchamianym skryptem `npm run promise` znajduje się funkcja `getAsyncNumbers`, której działanie znasz już z poprzednich ćwiczeń. Tym razem jednak zapewniliśmy, że każdorazowo zakończy się ona sukcesem. 

## Przerywanie Promisa
Spróbuj przy pomocy Promise.race zaprojektować Promise, który albo wykona się poprawnie i zwróci dane z funkcji `getAsyncNumbers`, albo wyrzuci błąd, jeśli odpowiedź (tj. tablica liczb z funkcji `getAsyncNumbers`) nie pojawi się w czasie poniżej 3 sekund.

# Promise API

Metoda Promise.all kończy się sukcesem kiedy wszystkie przekazane w tablicy Promisy zakończą sie sukcesem i kończy się błędem, kiedy co najmniej jeden z Promisów z tablicy kończy się błędem. Spróbujemy teraz stworzyć funkcję `promiseNone`, która zadziała odwrotnie tj. zakończy się sukcesem kiedy wszystkie przekazane w tablicy Promisy zakończą się błędem i zwróci błąd kiedy co najmniej jeden z Promisów z tablicy zakończy się sukcesem. 

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Promise - metoda none
Spróbuj przy pomocy Promise.allSettled zaprojektować metodę `promiseNone`, która kończy się błędem kiedy którykolwiek z Promisów w tablicy jest "fulfilled" lub sukcesem, kiedy wszystkie z Promisów w tablicy mają stan "rejected".
# Promise API

Metoda Promise.all kończy się sukcesem kiedy wszystkie przekazane w tablicy Promisy zakończą sie sukcesem i kończy się błędem kiedy co najmniej jeden z Promisów z tablicy kończy się błędem. Spróbujemy teraz stworzyć metodę any, która kończy się sukcesem kiedy co najmniej jeden z podanych jako argument Promisów zakończy się powodzeniem i wyrzuca błąd kiedy wszystkie z podanych jako argument Promisów kończą się błędem.
**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

## Promise - metoda any
Spróbuj przy pomocy Promise.allSettled zaprojektować funkcję `promiseAny`, która kończy się błędem kiedy wszystkie z Promisów w tablicy są "rejected" lub sukcesem, kiedy wszystkie z Promisów w tablicy mają stan "fulfilled".
# Promise API - tworzenie własnych Promisów

Kolejną bardzo ważną umiejętnością w pracy z Promise API jest tworzenie własnych Promisów. Możemy decydować jak i kiedy się one zakończą i jakie będzie ich działanie. Przetestujmy więc teraz nasze możliwości wykonując poniższe zadanie.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**


# Tworzenie własnego Promisa

Stwórz funckję `myFavoriteCartoon` która będzie przyjmować jeden parametr:
 - age - wiek użytkownika.
 
 Funkcja ta powinna zwracać Promisa. Promis ten powinien zachowywać się w nastepujący sposób:
 - w przypadku w którym przekazany wiek >= 18 Promis powinien zakońcyć się niepowodzeniem i zwrócić błąd z nastęþującą wiadomością "Proponowane filmy animowane są przeznaczone dla dzieci".
 - w przypadku w którym wiek < 18 Promis powinien zakończyć się sukcecem oraz zwracać tablicę z twoimi ulubionymi bajkami (np ```['Kot w butach', 'Smurfy', 'Muminki']```.
 - w przypadku niepodania wieku (brak parametru `age` lub parametr `age` nie zawierający liczby) Promise również powinien zakończyć się niepowodzeniem i zwrócić błąd z nastęþującą wiadomością: "Wiek nie został podany".

---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
