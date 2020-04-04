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

# Prosty EventEmitter

W tym rozdziale dowiedzieliśmy się sporo o event emiterach w Node.js. Czas tę wiedzę wykorzystać w praktyce.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

W pliku `emmiter.js` uruchamianym skryptem `npm run emmiter` umieść swoje rozwiązania.

1. Stwórz instancję klasy `EventEmitter`;
2. Dodaj kilka listenerów do dwóch zdarzeń "eventOne" i "eventTwo" za pomocą metod `on` oraz `addListener`.
3. Wyemituj kilka zdarzeń "eventOne" oraz "eventTwo" z różnymi wartościami podanymi w drugim parametrze metody `emit`. Sprawdź, jakie typy danych mogą być emitowane.
4. W callbackach listenerów za pomocą `console.log` wyświetl emitowane wartości. Zwróć uwagę na kolejność, w jakiej wykonują się listenery.

Zbadaj, w jaki sposób na działanie programu wpływa kolejność dodawania listenera oraz emitowania zdarzeń. Sprawdź co się stanie jeśli zamienisz kolejnością wywołania metody `emit` dla jednego z emitowanych zdarzeń. Czy wpłynęło to na kolejność wywołania listenerów?

A teraz sprawdź co się stanie jeśli zamienisz kolejnością podpinanie obserwatorów do zdarzenia. Jak to wpływa na kolejność ich wywoływania?

Zbadaj, jaka wartość jest przekazywana do listenerów w momencie, gdy wywołamy metodę `emit` tylko z jednym argumentem.

# once vs. on

Przetestujmy teraz dostępne metody rejestrowania listenerów: `once` oraz `on`. Czy już teraz potrafisz powiedzieć czym one się różnią?

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

W pliku `once.js` uruchamianym skryptem `npm run once` umieść swoje rozwiązania.

1. Stwórz instancję klasy `EventEmitter`
2. Dodaj kilka listenerów do dwóch zdarzeń "eventOne" i "eventTwo" za pomocą metod `on` oraz `once`.
3. Wyemituj kilka zdarzeń "eventOne" oraz "eventTwo" z różnymi wartościami podanymi w drugim parametrze metody `emit`.
4. W callbackach listenerów za pomocą `console.log` wyświetl emitowane wartości.

Zbadaj, w jaki sposób na działanie programu wpływa użyta metoda dodawania listenera.

# Kolejność wykonywania kodu

Wiesz już, że akcje w listenerach są wywoływane synchronicznie, jako reakcja na wyemitowane zdarzenie. A co by się stało gdyby metoda `emit` została wywołana w `setTimeout` albo w metodzie `then` w łańcuchu obiektu `Promise`? Sprawdźmy to!

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

W pliku `order.js` uruchamianym skryptem `npm run order` umieść swoje rozwiązania.

1. Stwórz instancję klasy `EventEmitter`.
2. Dodaj po jednym obserwatorze do trzech zdarzeń "eventOne", "eventTwo" oraz "eventThree".
3. Wyemituj te zdarzenia tak aby:
   - "eventOne" był wyemitowany w funkcji `setTimeout`
   - "eventTwo" był wyemitowany w metodzie `then` łańcucha obiektu typu `Promise`
   - "eventThree" był wyemitowany w standardowym przebiegu aplikacji
4. Dopisz `console.log` w miejscach, w których emitujesz zdarzenia. Czy zarówno `console.log` jak i `emit` wywołują się w tej samej kolejności?

Co możesz powiedzieć o kolejności wykonywania kodu?

# Metoda eventNames

Przetestuj metodę `eventNames` dodając i usuwając listenery za pomocą wszystkich dostępnych metod. Przypomnij sobie jakie są sposoby na odpięcie listenerów, albo kiedy listenery są odpinane automatycznie.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

W pliku `names.js` uruchamianym skryptem `npm run names` umieść swoje rozwiązania.

1. Stwórz instancję klasy `EventEmitter` i dodaj kilka listenerów do zdarzeń "eventOne" oraz "eventTwo" za pomocą metod `on`, `addListener` oraz `once`.
2. Wywołaj metodę `eventNames`, a następnie wyemituj kilka zdarzeń "eventOne" oraz "eventTwo" po każdym ponownie wywołując metodę `eventNames`. Które z listenerów zniknęły z listy?
3. Usuń jeden z zarejestrowanych jeszcze listenerów i ponownie wywołaj metodę `eventNames`.
4. Usuń pozostałe listenery korzystając z metody `removeAllListeners` i sprawdź co zwróci metoda `eventNames` tym razem.

# Rozszerzenie klasy EventEmitter

Jednym z bardzo popularnych konceptów w programowaniu obiektowym jest dziedziczenie. W przypadku zdarzeń i ich obsługi emitowanie z wnętrza metod klasy wydaje się dobrym rozwiązaniem. Nie musimy wtedy tworzyć skomplikowanej logiki pozwalającej na skorelowanie zakończenia jakiejś akcji z wyemitowaniem zdarzenia. Wszystko może dziać się w jednym miejscu, na rzecz tej samej instancji obiektu. Spróbujmy teraz stworzyć właśnie takie rozwiązanie i przekonajmy się jakie to łatwe.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

W pliku `extends.js` uruchamianym skryptem `npm run extends` znajduje się klasa Task reprezentująca zadanie i Twoją pracę nad nim, a w niej cztery metody `start`, `stop`, `pause` oraz `resume`. Po wywołaniu, każda z metod wypisuje w konsoli tekst. W pliku stworzony został także obiekt klasy Task i wywołane wszystkie metody (czasami kilkakrotnie). Do pliku dodaj swoje rozwiązanie wiedząc, że:

1. Klasa Task powinna rozszerzać klasę `EventEmitter`, i emitować zdarzenia `started`, `stopped`, `paused` oraz `resumed` w odpowiednich metodach (w taki sposób, że metoda `start` emituje zdarzenie `started`, metoda `stop` `stopped` i tak dalej).
2. Zareaguj na każde z wyemitowanych zdarzeń. Zdarzenia `start` i `stop` powinny być być obsłużone tylko raz, natomiast `pause` i `resume` za każdym razem kiedy zostaną wyemitowane.

# Obsługa błędów

Spróbujemy teraz połączyć to czego nauczyliśmy się o fs API i wykorzystać koncept emitowania zdarzeń do obsługi błędów. Spróbujemy dwóch podejść i porównajmy je.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

W pliku `error.js` uruchamianym skryptem `npm run error` umieść swoje rozwiązania.

Podejście A:

1. Korzystając z asynchronicznej metody do odczytu plików i przekazanego do niej callbacku, spróbuj odczytać zawartość **nieistniejącego** pliku (zależy nam na tym, żeby pojawił się błąd). W callbacku wyrzuć wyjątek.
2. Następnie zarejestruj listener nasłuchujący na zdarzenie `uncaughtException` emitowane we wbudowanym w Node.js obiekcie `process`.

Czy uważasz, że jest to dobre rozwiązanie?

Podejście B:

1. Korzystając z asynchronicznej metody do odczytu plików i przekazanego do niej callbacku, spróbuj odczytać zawartość **nieistniejącego** pliku (zależy nam na tym, żeby pojawił się błąd).
2. Błąd wyemituj w callbacku używając do tego zdarzenia `error` i przekazując obiekt błędu do obsłużenia przez obserwatora.
3. Zarejestruj listenera reagującego na zdarzenie `error` i obsługującego wyjątek.

---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
