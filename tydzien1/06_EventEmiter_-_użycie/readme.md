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

# Event based Timer

Poznaliśmy już reguły pracy ze zdarzeniami, umiemy emitować eventy i nasłuchiwać na nie. Teraz nadszedł czas na wykorzystanie tych umiejętności w praktyce.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

W pliku `timer.js` uruchamianym skryptem `npm run timer` umieść swoje rozwiązania.

Twoim zadaniem jest:

1. Stworzyć klasę Timer, która rozszerza klasę EventEmitter.
2. Dodać do niej metody:
   - `start` - która uruchamia Timer, i emituje zdarzenie `tick` lub `tock` co sekundę, na zmianę. Jako drugi argument w metodzie `emit` powinna być przekazana informacja, który raz metoda zostaje wywołana (nieważne czy ze zdarzeniem `tick` czy `tock`) tj. `emit('tick, number')`. Metoda powinna też jednorazowo emitować zdarzenie `start`.
   - `stop` - która zatrzymuje Timer i informuje po ilu sekundach zakończył on działanie (czyli ile razy została wywołana metoda `emit`) poprzez wyemitowanie eventu `stop`. Event ten powinien jako parametr przesyłać informacje ile razy zostały wywołane eventy `tick` i `tock` (łącznie). Metoda ta też powinna resetować licznik.
   - `pause` - która pauzuje Timer, ale nie resetuje licznika. Nie emituje żadnego eventu.
   - `resume` - ktora uruchamia zapauzowany licznik. Nie emituje żadnego eventu.
3. Jeśli Timer został uruchomiony, nie możemy uruchomić go ponownie. Uruchomić możemy tylko wcześniej zatrzymany Timer.
4. Jeśli Timer nie został uruchomiony, nie możemy go zatrzymać.
5. Wywołanie metod `pause` i `resume` kilkakrotnie nie powinno wpłynąć na częstość/ilość emitowanych zdarzeń tj. `setInterval` powinien być uruchomiony TYLKO raz. Co więcej nie możemy użyć metody `resume` na nieuruchomionym jeszcze Timerze (nic nie powinno się zdarzyć jeśli spróbujesz). 
6. Podepnij pod nasz zegar obsługę zdarzeń (możesz po prostu logować w konsoli jakie zdarzenie zostało obsłużone i jakie informacje były w nim zawarte). 


Po uruchomieniu timera (`timer.start()`) w konsoli powinny pojawiać się następujące elementy:

```javascript
/*
Console output:
I say TICK 1
I say TOCK 2
I say TICK 3
...
*/
```

# Harry Potter quiz

Mamy bardzo wiele możliwości wykorzystania zdarzeń w naszym kodzie. Jedną z nich może być reakcja na dane podawane przez użytkownika. Przetestujmy to na przykładzie quizu z wiedzy o Harrym Potterze.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

W pliku `questions.js` znajdziesz obiekt zawierający pytania i odpowiedzi dotyczące popularnej serii książek o Harrym Potterze. Zaimportuj ten obiekt do pliku z rozwiązaniem.
W pliku `quiz.js` uruchamianym skryptem `node quiz.js` umieść swoje rozwiązania.

Twoim zadaniem jest:

1. Za pomocą modułu `inquirer` zadawać użytkownikowi (najlepiej w pętli) pytania, które znajdziesz w obiekcie `quiz` w pliku `questions.js` i prezentować odpowiedzi.
2. Sprawdzać czy odpowiedzi są poprawne i emitować zdarzenie `correct` lub `wrong`.
3. Stworzyć zmienną zliczającą poprawne i błędne odpowiedzi w obserwatorach zdarzeń `correct` lub `wrong`.
4. Po zakończeniu quizu wyemitować zdarzenie `completed` i obsłużyć wypisując w konsoli informację czy użytkownik zdał test (75% zalicza!)

# Pomocny bot

W tym ćwiczeniu po raz kolejny wykorzystamy zdarzenia, do interakcji z użytkownikiem. Tym razem, to użytkownik zadecyduje jaką akcję mamy wykonać, a my po prostu wyemitujemy ją i obsłużymy w jednym z obserwatorów. To co, zaczynajmy!

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

W pliku `bot.js` uruchamianym skryptem `node bot.js` znajduje się kilka zmiennych. Twoim zadaniem jest napisać bota, który w pętli będzie odpytywał użytkownika o zadania i je wykonywał.

1. Zmienna `activity` zawiera listę komend, które potrafi wykonać nasz bot. Zaprezentuj użytkownikowi te możliwości i pozwól wybrać jedną z nich.
2. Jeśli użytkownik zapyta o datę, wyemituj odpowiednie zdarzenie, a następnie w obserwatorze wyświetl w konsoli aktualną datę i godzinę `new Date()` wystarczy.
3. Jeśli użytkownik poprosi o żart, wyemituj odpowiednie zdarzenie, a następnie w obserwatorze wylosuj jeden żart z listy `listOfJokes` i wyświetl w konsoli.
4. Jeśli użytkownik będzie chciał usłyszeć komplement, wyemituj odpowiednie zdarzenie, a następnie w obserwatorze wylosuj jeden z komplementów z listy `listOfComplements` i wyświetl go w konsoli.
5. Pamiętaj, żeby odpytywać użytkownika w pętli `while(true)`, wtedy będzie mógł wykonać kilka akcji pod rząd bez konieczności uruchamiania aplikacji za każdym razem.
6. Użytkownik ma jeszcze możliwość zakończenia programu. Jeśli ją wybierze, wyemituj odpowiednie zdarzenie, a następnie w obserwatorze wywołaj `process.exit()`. Możesz też wyświetlić w konsoli np. "Bye".

# fs API i EventEmitter

Do tej pory wszystkie zadania i operacje na systemie plików staraliśmy się robić używając Promisów. Teraz jednak mamy kolejne narzędzie dzięki któremu alternatywne rozwiązanie jest możliwe. Spróbujmy.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

W pliku `read_write.js` uruchamianym skryptem `nodemon read` umieść swoje rozwiązania.

1. Stwórz plik `myTxt.txt` i zapisz do niego dowolny ciąg znaków. Nie korzystaj z obiektu `fs.promises`, użyj callbacków. Pamiętaj aby obsłużyć błędy przekazując do callbacku obserwatora obiekt typu `Error`.
2. Jeśli zapis się powiedzie wyemituj zdarzenie `write`, jeśli zakończy się błędem `error`. Event `error` jako swój parametr powinien mieć przekazany obiek błędu. 
3. Obsłuż zdarzenie `write`, w nastepujący sposób: 
  - Odczytaj całą zawartość pliku. Jeżeli odczyt się uda wyemituj event `read` jako parametr podając dane wczytane z pliku. jeżeli odczyt się nie powiedzie wyemituj event `error`. Event `error` jako swój parametr powinien mieć przekazany obiek błędu. 
4. Osbłuż event `read`. Event ten powinien wyświetlić w konsoli dane które zostały w nim przekazane. 
4. Pamiętaj aby obsłużyć event `error`. Event ten powinien wyświetlić w konsoli błąd który został w nim przekazany.

# fizbaz

Jeszcze kilka lat temu, zadanie o enigmatycznej nazwie **fizbaz** było obowiązkowym elementem wszystkich rozmów kwalifikacyjnych. Może i my spróbujemy się z nim zmierzyć? A żeby było trudniej użyjemy klasy EventEmitter!

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

W pliku `fizbaz.js` uruchamianym skryptem `nodemon fizbaz` umieść swoje rozwiązania.

1. Stwórz pętlę iterującą od 0 do 100 i w każdej iteracji wyemituj zdarzenie `number` podając jako drugi parametr metody `emit` kolejne liczby (numer danej iteracji
2. Stwórz cztery listenery , nasłuchujące na zdarzenie:
   - sprawdzaj czy liczba jest podzielna przez 3, jeśli tak, wyświetl w konsoli `fiz`
   - sprawdzaj czy liczba jest podzielna przez 5, jeśli tak, wyświetl w konsoli `baz`
   - sprawdzaj czy liczba jest podzielna przez 3 i 5, jeśli, tak wyświetl w konsoli `fizbaz`
   - sprawdzaj czy liczba jest niepodzielna ani przez 3 ani przez 5, jeśli tak, wyświetl ją w konsoli

# Promise vs EventEmitter

Znamy już różnice pomiędzy użyciem i cechami konceptu Promisów oraz zdarzeń. Do pewnego stopnia możemy używać ich zamiennie. Spróbuj zamienić łańcuch wywołań Promise na event - driven application.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

W pliku `no-promise.js` uruchamianym skryptem `nodemon no-promise` znajduje się prosty łańcuch wywołań Promise. Umieść w nim swoje rozwiązania.

Twoim zadaniem jest:

1. Zamiana łańcucha wywołań Promise na zdarzenia emitowane z różnymi wartościami.
2. Zacznij od wyemitowania zdarzenia `five`, a jako drugi parametr podaj wartość 5. Będzie to opowiadało `Promise.resolve(5)`. Dalej krok po kroku, emituj kolejne zdarzenia.
3. Wynik wyświetlony w konsoli powinien być w obu przypadkach taki sam.

Zastanów się, czy zmiana Promise na zdarzenia byłaby dla Ciebie łatwiejsza gdyby zamiast łańcucha wywołań w zapisie użyć async/await? Sprawdź to!

# Kolorowe logi w konsoli

Praca z terminalem wydaje się być odrobinę czarno - biała. A gdyby tak wnieść do naszego kodu odrobinę koloru? Ale tak dosłownie, wyświetlmy teraz w konsoli coś kolorowego :)

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

W pliku `console.js` uruchamianym skryptem `node console.js` znajdują się trzy obiekty:
1. obiekt `effects` zawiera kody efektów (jak np. pogrubienie czy podkreślenie), które możesz uzyskać na tekście w wypisanym za pomocą funkcji `console.log`.
2. obiekt `foregrounds` zawiera kody kolorów czcionki, które możesz wybrać dla tekstu wypisanego za pomocą funkcji `console.log`.
3. Obiekt `backgrounds` zawiera kody kolorów tła, które możesz wybrać jako tło dla tekstu wypisanego za pomocą funkcji `console.log`.

Kolorowy tekst z różnymi efektami uzyskasz wstawiając zamiast zmiennych podane w obiektach wartości:

```javascript
console.log(effect, fgColor, bgColor, 'Sample text', '\x1b[0m');
//Last value is a reset value, you can check in effect object
```

Twoim zadaniem jest stworzenie programu który:

1. Odpyta użytkownika o efekt jaki chciałby nałożyć na tekst.
2. Odpyta użytkownika o kolor czcionki.
3. Odpyta użytkownika o kolor tła.
4. Odpyta użytkownika o tekst do wyświetlenia .
5. Wyświetli wpisany przez użytkownika tekst nakłądając na niego wszytkie wybrane przez niego efekty.

Pamiętaj żeby do odpytania użytkownika o informacje użyć biblioteki `inquirer`.

Jak podejść do opisanego problemu:
1. Stwórz obiekt który będzie trzymał informacje o wyborach użytkownika (łącznie z tekstem do wyświetlenia).
2. Stwórz nowy obiekt `Eventemiter` który będzie obsługiwał nastepujące zdarzenia:
  - `effect` - zdarzenie będzie nastawiało odpowiedni efekt dla tekstu (w obiekcie stworzonym w punkcie 1).
  - `fgColor` - zdarzenie będzie nastawiało odpowiedni kolor fontu dla tekstu (w obiekcie stworzonym w punkcie 1).
  - `bgColor` - zdarzenie będzie nastawiało odpowiedni kolor tła dla tekstu (w obiekcie stworzonym w punkcie 1).
  - `text` - zdarzenie będzie nastawiało odpowiedni tekst (w obiekcie stworzonym w punkcie 1).
  - `complete` - zdarzenie któ©e będize wywoływać wyświetlenie teksu w konsoli (wraz z nałożonymi efektami)
3. Napisz fukcję która:
  - Będzie odpytywać użytkownika o potrzebne dane. Po każdej odpowiedzi użytkownika wyemituj odpowiedni event wraz z wybraną opcją.
  - Po odpytaniu o wszystkie informacje wyemituj event `complete` i zakończ program. 
 
---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
