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

# Callback 

W artykule o problemach z callbackiem omówiliśmy trudności w zarządzaniu kolejnością danych w asynchronicznym kodzie. W oparciu o zawarte w nim przykłady wykonaj poniższe zadanie.

**Pamiętaj o uruchomieniu `npm install` przed rozpoczęciem zadania!**

## 1. Problemy z callbackiem

W pliku `callback.js`, który uruchomisz skryptem `npm run callback` znajdują się funkcje `asynchronousResponse` oraz `getAsyncNumber`. 

Funkcja `asynchronousResponse` przekazuje otrzymaną w pierwszym parametrze wartość do wywoływanego z losowym opóźnieniem callbacku. Możemy ją traktować jako symulator odpowiedzi z serwera. Nie wiemy kiedy i w jakiej kolejności otrzymamy dane, na które czekamy, ale kiedy już się pojawią przekazany do funkcji callback zostanie wywołany.

Twoim zadaniem jest:

1. Zaimplementować funkcję `getAsyncNumber` wywołując w niej funkcję `asynchronousResponse`.
2. W callbacku przekazywanym do funkcji `asynchronousResponse` zaproponować takie rozwiązanie, które pozwoli na wyświetlanie otrzymywanych liczb w takiej samej kolejności, w jakiej zostały wywołane funkcje `getAsyncNumber`. Oznacza to, że jeśli tak, jak w naszym przypadku, danymi wejściowymi są liczby 0,1,2,3,4, to właśnie w takiej kolejności powinny być one wyświetlone w konsoli. Rezultat nie powinien być zależny od tego, w jakiej kolejności wywołane zostaną callbacki w `asynchronousResponse` tj. które z losowych opóźnień będzie najkrótsze.
3. Dane powinny być wyświetlane najszybciej, jak to możliwe. W przypadku kiedy pierwszą dostarczoną liczbą jest 0, możemy od razu wyświetlić ją w konsoli. Natomiast jeśli pierwszą dostarczoną liczbą byłoby np. 2, to musimy poczekać na wszystkie poprzedzające ją liczby tj. 0 oraz 1, zanim będziemy mogli je wyświetlić.


Do wykonania zadania będzie Ci potrzebna dodatkowa zmienna (poza ciałem funkcji `getAsyncNumber`), która będzie przetrzymywała zwrócone liczby i ich stan tj, czy była ona już wyświetlona czy nie.

Nie modyfikuj funkcji `asynchronousResponse`.

Powodzenia!
# Promise 

W artykule o Promise API omówiliśmy trudności w zarządzaniu kolejnością danych w asynchronicznych kodzie. 
W oparciu o zawarte tam przykłady wykonaj ćwiczenie.

**Pamiętaj o uruchomieniu `npm install` przed rozpoczęciem zadania!**

## 1. Kolejność danych, a Promise API
W pliku `promise.js`, który uruchomisz skryptem `npm run promise` znajdują się funkcje `promiseResponse` oraz `getAsyncNumber`. 

Funkcja `promiseResponse` przekazuje otrzymaną w pierwszym parametrze wartość do wywoływanego z losowym opóźnieniem callbacku. Możemy ją traktować jako symulator odpowiedzi z serwera. Nie wiemy kiedy i w jakiej kolejności otrzymamy dane, na które czekamy, ale kiedy już się pojawią przekazany do funkcji callback zostanie wywołany.

Twoim zadaniem jest:

1. Zaimplementować funkcję `getAsyncNumber` wywołując w niej funkcję `promiseResponse` i zwracając obiekt typu Promise.
2. Zaproponować taki łańcuch metod `then`, aby kolejne liczby pojawiały się w kolejności w jakiej zostały przekazane do parametrów w kolejnych wywołaniach  `getAsyncNumber`.

Zauważ, że w zadaniu obiekty typu Promise zostały przypisane do zmiennych. Daje nam to możliwość wywołania metody then, w odpowiednim momencie, kiedy poprzednie liczby zostały już wyświetlone w konsoli.

Pamiętaj, że możesz zwrócić obiekt typu Promise w metodzie then, a wtedy dane, które przekazuje ten Promise będą dostępne w następnej funkcji then w łańcuchu.

# Async/Await 

W artykule o Promise API omówiliśmy trudności w zarządzaniu kolejnością danych w asynchronicznych kodzie. 
W oparciu o zawarte tam przykłady wykonaj ćwiczenie, ale zamiast Promise API użyj konstrukcji async\await.

**Pamiętaj o uruchomieniu `npm install` przed rozpoczęciem zadania!**

## 1. Kolejność danych, a Promise API
W pliku `async_await.js`, który uruchomisz skryptem `npm run async_await` znajdują się funkcje `promiseResponse` oraz `getAsyncNumber`. 

Funkcja `promiseResponse` przekazuje otrzymaną w pierwszym parametrze wartość do wywoływanego z losowym opóźnieniem callbacku. Możemy ją traktować jako symulator odpowiedźi z serwera. Nie wiemy kiedy i w jakiej kolejności otrzymamy dane, na które czekamy, ale kiedy już się pojawią przekazany do funkcji callback zostanie wywołany.

Twoim zadaniem jest:
1. Zaimplementować funkcję `getAsyncNumber` wywołując w niej funkcję `promiseResponse` i zwracając obiekt typu Promise.
2. Zaproponować użycie konstrukcji async/await w taki sposób, aby kolejne liczby pojawiały się w kolejności w jakiej zostały przekazane do parametrów w kolejnych wywołaniach  `getAsyncNumber`.

Pamiętaj, że `await` nie może występować poza funkcją. Najprościej będzie opakować cały kod w funkcję, a na końcu ją wywołać.
---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
