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

# Polling - odpytywanie serwera w pętli

Polling to technika, pozwalająca na aktualizację stanu danych klienta poprzez regularne odpytywanie
serwera. Polling wykorzystuje kliencki kod JS.

**Pamiętaj o uruchomieniu `npm install` aby przygotować biblioteki przed rozpoczęciem pracy!**

**Zadanie uruchomisz skryptem `npm start`. Kod zadania znajduje się w pliku `task.js`.**

**Kod budujący kliencki JS uruchomisz (otwórz nowe okno konsoli) skryptem `npm run client`**

## Poszukiwany, poszukiwana...

Twoim zadaniem będzie dodanie kodu odpytującego serwer w pętli o położenie poszukiwanego kryminalisty. Porusza się
on po Zatoce Panamskiej i regularnie zmienia swoją pozycję. 

W kodzie serwera zaimplementuj kod symulujący poruszanie się przestępcy według zadanych zasad:

- wywoływać się będzie co **300 milisekund** (użyj `setInterval`)
- wylosuje nową długość geograficzną
- wylosuje nową szerokość geograficzną
- zapisze obie wartości jako pola `lat` i `lon` w obiekcie `currPos`

Zasady co do generowania długości i szerokości znajdziesz poniżej

### Długość geograficzna - parametr `lon`

Długość geograficzna powinna się zawsze zawierać między `-80` a `-78.5` i być losowana według następujących zasad:

```javascript
const newLonSign = Math.random() >= 0.5 ? -1 : 1;
const newLonDelta = newLonSign * Math.random() * ((MIN_LON - MAX_LON) / 100);
let newLon = currPos.lon + newLonDelta;
```

Rezultat - nowa długość - może jednak nadal wybiegać poza zadane ramy. Sprawdź dodatkowo, czy nie przekracza ona
zadanych maksymalnych i minimalnych wartości, np (dla maksimum):

```javascript
if (newLon > MAX_LON) {
  newLon = MAX_LON;
}
```

### Szerokość geograficzna - parametr `lat`

Wygeneruj szerokość analogicznie, jak długość, używając następujących wartości dla maksimum i minimum:

- Maksimum to `8.5`
- Minimum to `7.2`

Następnie zmodyfikuj funkcję tworzącą nową wartość tak, aby była odpowiednio mała (aby zapobiec skakaniu punktu po mapie):

```javascript
const newLatDelta = newLatSign * Math.random() * ((MAX_LAT - MIN_LAT) / 1000); // 1000 instead of 100 from previous!
```

Przypisz obie wygenerowane wartości na końcu powtarzającej się pętli do dostępnego w ramach pliku `task.js` obiektu
`currPos`:

```javascript
currPos.lat = newLat;
currPos.lon = newLon;
``` 

## Endpointy

Stwórz dwa endpointy - pierwszy, renderujący widok `views/map.handlebars`, drugi pozwalający na odpytywanie danych:

`GET /` - powinien renderować widok mapy, nie musi nic przekazywać do szablonu
- `GET /position` powinien zwracać pozycję przestępcy w tablicy, w której pierwszy element to `currentPos.lat`, a drugi
- `currentPos.lon`. Wartości te powinny być przekazane w obiekcie JSON w ramach pola `position`:

```javascript
{ position: [currPos.lat, currPos.lon]}
```

Zwróć je jako JSON do klienta.

Zauważ, iż dla Twojej wygody widok jest już zaimplementowany, nadal jednak brakuje... Kodu klienckiego - tu będzie
działa się "magia" pollingu.

## Kod kliencki

Otwórz plik `client.js`. Zadaniem klienta będzie odpytywanie serwera w pętli i aktualizacja pozycji przestępcy na mapie
zatoki.

Na górze pliku znajduje się już inicjalizacja biblioteki `Leaflet`, która wyświetli w oknie Twojej przeglądarki 
kawałek mapki z widokiem na Zatokę Panamską. Dodaj poniżej wywołanie funkcji, która będzie aktualizowała
pozycję przestępcy na mapie:

- funkcja powinna wykorzystać `axios` do pobrania pozycji z endpointu `GET /position`
- dane pozycji powinny zostać przekazane do markera Leaflet
- następnie funkcja powinna tworzyć **interwał**, który będzie regularnie odpytywał o nową pozycję przestępcy (załóż 2000 
milisekund jako czas między kolejnymi wywołaniami)
- wewnątrz interwału callback powinien pobierać pozycję ponownie, a następnie aktualizować położenie markera

**Markera stworzyć możesz używając tego kodu:**

```javascript
marker = L.marker(initialPosition).addTo(map)
  .bindPopup('On the move')
  .openPopup();
```

**Używając instancji markera z poprzedniego snippet-u możesz zmienić jego położenie tak:**

```javascript
marker.setLatLng(newPositions)
```

Gdzie nowe pozycje są tablicą dwóch liczb - pierwsza jest szerokością, a druga jest długością geograficzną 
(z tego powodu z serwera wysyłamy nowo wylosowane pozycje jako tablica). Powodzenia!

# Long polling

Long polling to technika, wykorzystująca mechanizm pollingu wraz z brakiem limitu czasu komunikacji, która pozwala
na przesunięcie inicjalizacji komunikacji do serwera - klient wysyła zapytanie, na które serwer odpowiada dopiero,
gdy ma gotową odpowiedź (niezależnie, czy nastąpi to natychmiastowo czy... sekundy bądź minuty później).

**Pamiętaj o uruchomieniu `npm install` aby przygotować biblioteki przed rozpoczęciem pracy!**

**Zadanie uruchomisz skryptem `npm start`. Kod zadania znajduje się w pliku `task.js`.**

**Kod budujący kliencki JS uruchomisz (otwórz nowe okno konsoli) skryptem `npm run client`**

## Egg timer

Egg timer to popularny minutnik w kształcie jajka, który jak możesz się domyślić... Używany był kiedyś przede wszystkim
do odmierzania czasu gotowania jajek.

W tym zadaniu zbudujemy podobny minutnik z użyciem komunikacji opartej na long pollingu. Nasz minutnik nie będzie
jednak odmierzał czasu na żywo, a informował w skracających się interwałach o nadchodzącym końcu czasu.

Informacje powinny być przekazane w następujący sposób:

- Po połowie czasu ustawionego na minutniku, wyemitowany powinien zostać odpowiedni komunikat + kod powinien odtworzyć 
"mały dzwonek"
- Po upływie 2/3 czasu ustawionego na minutniku, klientowi powinien zostać wyświetlony drugi komunikat wraz z
tym samym sygnałem dźwiękowym, co w poprzednim kroku
- Po końcu czasu, klient powinien usłyszeć "duży dzwonek" i zobaczyć komunikat o końcu czasu.

Dzwonki związane są z odpowiednimi plikami dźwiękowymi - omówimy je przy okazji implementacji klienta.

### Serwer - long polling

Serwer to właśnie miejsce, które korzysta z long pollingu - przetrzymuje on referencję na aktywny request i odpowiada
na niego dopiero, gdy upłynie odpowiedni czas.

Implementacja kodu serwerowego będzie podzielona na dwa etapy:

- przygotowanie kodu, który będzie w odpowiednich momentach emitował wydarzenia (według zadanych wyżej wzorców)
- przygotowanie kodu ExpressJS, który użyje metody z poprzedniego kroku i zwróci rezultaty do klienta

### Serwer - metoda `getTimer(time)`

Metoda ta powinna zwrócić `EventEmitter` i dodać do niego callbacki, które wyzwolą się w opdowiednich momentach.
Powinna ona przyjmować jedynie jeden argument - czas ustawiony na minutniku w **sekundach**.

Następnie jej zadaniem jest:

- wyliczenie czasów, które będą wyzwalały komunikaty (**1/2 i 1/3 pozostałego czasu**)
- dodanie **trzech timeoutów z użyciem `setTimeout`**, które wykorzystają stworzone na poprzednim etapie czasy do
wyzwolenia zdarzeń, informujących o upływie czasu. Ostatni timeout **powinien wyzwolić się, gdy cały czas upłynie**.

**Pamiętaj, aby czasy wyzwalania obliczyć wykorzystując `Math.round`, np:**

```javascript
const halfTime = Math.round(timeMS / 2 );
```

Wewnątrz każdego z callbacków stwórz kod, który wyemituje aktualizację stanu timera, np (dla 1/2 pozostałego czasu):

```javascript
emitter.emit('timeEvent', {
  total: time,
  remaining: Math.round(halfTime / 1000),
  complete: false,
});
```

**Zwróć z metod czas w sekundach, ale pamiętaj, iż `setTimeout` operuje na milisekundach - metoda powinna otrzymywać
i zwracać sekundy, ale tworzyć timeouty z użyciem milisekund**

Ostatnie, trzecie wydarzenie, nieco różni się od poprzednich. Powinno ono wysłać **dwa zdarzenia**:

```javascript
emitter.emit('timeEvent', {
  total: time,
  remaining: 0,
  complete: true,
});
emitter.emit('endEvent');
```

Zauważ, iż flaga `complete` zwraca **tylko dla tego wydarzenia** true - jest to wydarzenie, które kończy przebieg minutnika.
Dodatkowo wysyła on wydarzenie kończące odliczanie - `endEvent`, które będzie wykorzystane przez kod aplikacji ExpressJS.

Pamiętaj, iż metoda ta ma zwrócić stworzony `EventEmitter`!

### Aplikacja ExpressJS - long polling

Kod serwera powinien udostępniać dwie akcje:

- `GET /`, zwracającą widok (już stworzony) timera - `timer.handlebars`
- `POST /`, obsługującą nowy timer.

Implementacja pierwszej metody jest trywialna - po prostu wyrenderuj widok :)

Druga metoda jest odrobinę skomplikowana. Aby long polling działał poprawnie, metoda ta **musi uwzględniać korelację między
kolejnymi zapytaniami** - zauważ, iż w ramach **jednego odliczania** wykonamy **trzy operacje request-response, będące 
long-pollingiem**:

- Pierwsza, od 0 do połowy czasu
- Druga, po odpowiedzi serwera w połowie czasu, do 1/3 pozostałego czasu
- Trzecia, po odpowiedzi serwera w 1/3 czasu, do upłynięcia całego czasu
- (końcowa) - ostateczna odpowiedź serwera, która już nie będzie wywoływała następnego zapytania

Dla przykładowego czasu 30 sekund można by opisać tą komunikację tak (liczby w nawiasach to orientacyjne czasy zdarzeń)

1. (0) `POST /timer` z parametrem `30`
2. (15) Odpowiedź serwera z nowym identyfikatorem
3. (15.01) `POST /timer` z identyfikatorem z poprzedniego kroku
4. (20) Odpowiedź serwera z tym samym identyfikatorem
5. (20.02) `POST /timer` z tym samym identyfikatorem
6. (30) Finalna odpowiedź serwera, `complete: true`

Zauważ, iż aby "skleić" cały proces w całość, w każdym zapytaniu musimy wysłać **ten sam identyfikator**. Będzie on 
generowany przy pierwszym zapytaniu do serwera. Do generacji identyfikatora wykorzystaj już istniejącą w kodzie
funkcję `generate` z biblioteki `randomstring`.

Logika części serwerowej z użyciem identyfikatora jest więc następująca:

1. Sprawdź, czy w zapytaniu klienta jest już identyfikator
2. Jeśli tak, sprawdź, czy już masz proces o takim `id`
3. Jeśli tak, zasubskrybuj się **raz** na proces/eventEmittera, który ten identyfikator obsługuje
4. W momencie wyzwolenia zdarzenia `timeEvent`, wyślij odpowiedź do klienta.

Zauważ, że punkty 3. i 4. wywołane zostaną **tylko i wyłącznie dla innych niż pierwsze wywołanie minutnika** - zakładają
one, iż timer już istnieje (na podstawie istniejącego event emittera).

Jeśli jednak klient albo nie przekazał ID albo przekazane ID nie zostało znalezione w liście procesów, serwer
powinien wykonać następujące operacje:

1. Wygeneruj nowy identyfikator z użyciem `generate()`
2. Stwórz nowy timer z użyciem czasu przekazanego przez klienta: `timer = getTimer(req.body.time)`
3. Dodaj stworzony timer do **listy już aktywnych timerów** (użyj do tego zmiennej `runningTimers`): `runningTimers[id] = timer`
4. Dodaj nasłuchiwanie na koniec komunikacji - usuń wtedy **wszystkie nasłuchiwania na dany proces**

Kod ten może wyglądać następująco:

```javascript
if (!timer) {
  id = generate();
  timer = getTimer(req.body.time);
  runningTimers[id] = timer;

  timer.on('endEvent', () => {
    if (runningTimers[id]) {
      runningTimers[id].removeAllListeners();
      delete runningTimers[id];
    }
  });
}
```

W ten sposób obiekt `runningTimers` zawsze będzie zawierał listę **aktywnych EventEmitterów, powiązanych z konkretnymi
minutnikami**.

Zauważ, że tak zdefiniowany identyfikator pozwala nam jednoznacznie określić, czy przychodzące zapytanie jest **pierwszym
zapytaniem** (nie będzie ono miało odpowiadającego minutnika z odpowiednim `id`), czy **kolejnym** - każde kolejne 
zapytanie musi być obsłużone inaczej, niż pierwsze.

Zadanie to, poza tym, iż ma Cię ono nauczyć implementowania long pollingu, ukazuje też... Jego największą wadę.
Zarządzanie procesami w obrębie **różnych zapytań** i korelowanie ich ze sobą w ramach jednego, większego procesu jest
nietrywialnym zadaniem!

### Long polling - klient - interakcje z formularzem

Część kodu klienckiego niezwiązana z zadaniem została już zaimplementowana - w pliku `client.js` znajduje się metoda,
która jest wywoływana przez przycisk w widoku i wyzwala ona metodę, którą musisz zaipmlementować.

Wywołuje ona też funkcję `updateMessage` - będzie to prosta funkcja pomocnicza, aktualizująca zawartość DOM, tak aby
wyświetlić postępy minutnika.

Ostatnią jej funkcją jest ukrycie formularza po uruchomieniu minutnika - będziesz musiała/musiał dodać podobną funkcję
w swoim kodzie tak, aby **minutnik pojawił się ponownie po upłynięciu całego czasu**.

### Long polling - wyzwalanie zapytań do serwera (`requestTimer(time, id)`)

W kodzie znajdziesz miejsce na implementację komunikacji z serwerem. Przekzywane do niej parametry to:

- `time`, czas pobrany z formularza
- `id` (opcjonalny) - w przypadku, gdy jest ona wywoływana kolejny raz (poza pierwszym wywołaniem), jest to identyfikator
zwrócony z serwera (ten sam, który był wygenerowany z użyciem `id`). Pozwoli on na korelację kolejnych zapytań HTTP
w obrębie jednego uruchomienia minutnika. Dla pierwszego wywołania wartość ta będzie równa `undefined`.

Funkcja ta powinna działać następująco (umieść całą jej logikę w bloku `try/catch`):

1. Wyzwolenie zapytania `POST /timer` z użyciem Axios
2. W momencie, gdy **odpowiedź z serwera zostanie zwrócona** (komunikat minutnika w ramach 1/2, 1/3 bądź 0 pozostałego czasu),
odtworzenie pliku audio (o tym więcej za chwilę)
3. Aktualizacja wiadomości DOM z użyciem metody `updateMessage(data)`
4. W przypadku, gdy jest to **ostatni komunikat minutnika** (sprawdź wartość `data.complete`, która przyszła z serwera),
kod **pokazuje ponownie formularz**
5. W przypadku, gdy nie jest to ostatni komunikat minutnika, wyzwól samą siebie jeszcze raz, z parametrem `id` z serwera

**UWAGA**

*Funkcja `requestTimer()` będzie wywoływała samą siebie wewnątrz jej kodu (krok 5). Dobrą praktyką - dla bezpieczeństwa
serwera (tak, aby nie "zabić" go za dużą ilością wiadomości w przypadku np. ustawienia bardzo krótkiego czasu minutnika)
pamiętaj, aby obwinąć jej wywołanie w `setTimeout` z małą wartością, np:*

```javascript
setTimeout(() => {
  requestTimer(time, data.id);
}, 100);
```

### Long polling - klient - odtwarzanie audio

Odtwarzanie audio w HTML5/JS jest trywialne:

```javascript
const fileName = 'someFile.mp3'
const audio = new Audio(fileName);
await audio.play();
```

Za nazwę pliku podstaw - zależnie od parametru `data.complete` - odpowiedni dźwięk dzwonka - znajdziesz je w katalogu
publicznym - według zasad opisanych na początku zadania (długi dzwonek tylko dla końca działania minutnika)

### Long polling - klient - pokazywanie ponownie formularza

Formularz minutnika powinien wyświetlić się w momencie, **gdy minutnik zakończy pracę**. Użyj do tego selektora DOM `getElementById`
i parametru `style.display` ustawionego na `block`:

```javascript
const form = document.getElementById('time-submit');
if (form) {
  form.style.display = 'block';
}
```

Pamiętaj, że kod ten powinien wywołać się tylko i wyłącznie, gdy minutnik zwróci z serwera `data.complete` równe `true`.

### Long polling - generowanie informacji w DOM

Do generacji podsumowania minutnika, zmienianego w ramach kolejnych komunikatów wykorzystaj funkcję `updateMessage(data)`,
gdzie `data` to informacje, przesłane w serwera w ramach odpowiedzi z serwera. Dla każdego zdarzenia wygeneruj
wiadomość według zadanego szablonu:

```javascript
const message = `<b>Total time:</b> ${data.total}<br/><b>Remaining time:</b> ${data.remaining}`;
```

Ustaw wiadomość w polu o identyfikatorze `timer-details` - znajdź to pole z wykorzystaniem metody `document.getElementById` 
(podobnie jak dla operacji na formularzu) oraz właściwości `innerHTML`, która przyjmuje zmienną znakową, którą konwertuje
na HTML, wklejany do wewnątrz powiązanego elementu:

```javascript
messageField.innerHTML = message; // <-- Message from previous step
```

**Pamiętaj, aby wyczyścić pole w momencie, gdy minutnik zakończy pracę!**

```javascript
if (messageField && data.complete) {
  messageField.innerHTML = '';
}
```

# Socket.io

Socket.io to biblioteka, która pozwala na łatwą implementację komunikacji rzeczywistej na bazie WebSocketów. Udostępnia
ona zarówno część serwerową, jak i kliencką.

**Pamiętaj o uruchomieniu `npm install` aby przygotować biblioteki przed rozpoczęciem pracy!**

**Zadanie uruchomisz skryptem `npm start`. Kod zadania znajduje się w pliku `task.js`.**

**Kod budujący kliencki JS uruchomisz (otwórz nowe okno konsoli) skryptem `npm run client`**

## Annoying Activity Tracker

W tym zadaniu zaimplementujemy aplikację, która będzie śledzić aktywność użytkownika i w przypadku braku aktywności -
upomni go obrazkiem oraz hasłem. Przez aktywność rozumiemy dowolny ruch myszką nad stroną/zakładką w przeglądarce.

Część kliencka aplikacji będzie odpowiedzialna za wykrywanie aktywności oraz odpowiednio częste wysyłanie informacji
do serwera o zaistniałej aktywności. Dodatkowo, będzie ona nasłuchiwała informacji z serwera i na ich podstawie
ukrywała bądź pokazywała odpowiednie komunikaty.

Część sewerowa będzie odliczać czas nieaktywności, a w przypadku, gdy czas ten jest wystarczająco długi, zacznie wyświetlać
w określonych odstępach czasu coraz bardziej stanowcze komunikaty.

## Serwer - **annoyTimers**

Serwer będzie operował na timerach. W momencie, gdy klient da znać o aktywności, serwer uruchomi timery, które będą
wyzwalać odpowiednie wiadomości:

- Pierwszy timer powinien upomnieć użytkownika po 5 sekundach
- Drugi timer powinien upomnieć użytkownika po 10 sekundach
- Finalny timer powinien upomnieć użytkownika o nieaktywności po 20 sekundach.

Wiadomości, które będą wysyłane w ramach timerów to kawałki HTML. Przygotuj następujące wiadomości:

**5s**:

```javascript
const message = `<img src="/doggo.jpg" width="200px;"><h4>Please move your mouse...</h4>`;
```

**10s**

```javascript
const message = '<img src="/raccoon.jpg" width="200px"><h3>Would you please move your mouse?</h3>';
```

**20s**

```javascript
const message = '<img src="/cat.jpg" width="200px"><h2>MOVE MOVE MOVE!</h2>';
```

Wiadomości te będą wysłane i wyświetlone u klienta w ramach komunikacji z użyciem socketów.

Działanie serwera powinno prezentować się następująco:

1. Serwer otrzymuje informację o aktywności użytkownika. Uruchamia funkcję `annoy(socket)`, która **zainicjalizuje komunikację
od serwera do użytkownika tak długo, jak użytkownik będzie miał otwarte okno przeglądarki**
2. W ramach funkcji `annoy(socket)` serwer będzie nasłuchiwał na 2 zdarzenia:
    - `activity` - nowa aktywność użytkownika
    - `disconnect` - użytkownik rozłączył się 
3. Za każdym razem, gdy użytkownik wykona ruch myszką (i wyzwoli zapytanie do serwera), serwer powinien:
    - zresetować poprzednie interwały (wyzwalające wcześniej przygotowane komunikaty)
    - ustawić nowe timeouty, nasłuchujące od momentu wystąpienia aktywności
4. W przypadku wystąpienia rozłączenia, serwer powinien jedynie **zresetować wszystkie timeouty**

**Logika timeoutów zaś powinna prezentować się następująco (funkcja `setAnnoyTimers(connected, prevTimers)`):**

Przyjmuje ona dwa parametry - `connected` będący instancją aktywnego socketu oraz `prevTimers` - listę wcześniej aktywnych
timerów, jeśli takie istnieją. Powinna ona zwracać **nową listę timerów, która może być wykorzystana w `clearTimeout`**.

Działa ona następująco:

1. Czyści stare timeouty (jeśli istniały)
2. Emituje zdarzenie `clear` dla klienta, informując go o wyczyszczeniu poprzedniego timera
3. Tworzy trzy timeouty - 5s, 10s i 20s
4. W obrębie każdego timeoutu w jego callbacku - wywołuje emisję zdarzenia `annoy` do użytkownika, z wiadomością taką,
jak przedstawiona wcześniej dla poszczególnych czasów (ogółem - 3 wiadomości)
5. Zwraca wszystkie zebrane timery tak, aby wywołująca ją funkcja - `annoy` - mogła je użyć do wyczyszczenia ich w razie potrzeby

W zadaniu tym używamy dużo asynchroniczności, timeoutów i callbacków, co może na razie wydawać się dość skomplikowane.
Poniżej znajdziesz podpowiedzi, jak zakodować każdy z serwerowych kawałków kodu.

Poza funkcjami związanymi z komunikatami, zaimplementuj też prosty endpoint `GET /`, który wyświetli widok `activityTracker`

### Implementacja serwera - `annoy(socket)`

Funkcja `annoy` wywoływana jest **raz dla każdego połączenia z użytkownikiem** (w momencie otwarcia przeglądarki na odpowiedniej
stronie). Powinna być ona wywołana w ramach nowego połączenia Socket.io i przyjmować instancję socketu, związaną 
z danym użytkownikiem:

```javascript
// Add Socket.io communication
server.on('connection', (socket) => {
  annoy(socket);
});
```

Funkcja ta powinna przede wszystkim zarządzać odpowiednio timerami - tworzyć je i usuwać w razie potrzeby, tak aby
nie marnować zasobów serwera (jeśli nie usuniesz timeoutów, gdy nie są potrzebne, zostaną one usunięte dopiero
po upłynięciu czasu do nich przekazanego). Timery powinny być reprezentowane przez tablicę:

```javascript
const annoy = socket => {
  let timers = [];

  // Rest of the code
}
```

Zaimplementuj w jej ramach nasłuchiwanie na dwa eventy:

- `activity` - wywołaj w ramach jego callbacku funkcję `setAnnoyTimers(socket, timers)` gdzie `socket` to połączenie do klienta
(z argumentu funkcji `annoy)`, a `timers` to wcześniej stworzona tablica. Wywołanie tej funkcji **powinno zaktualizować timery**:

```javascript
timers = setAnnoyTimers(socket, timers);
```

- `disconnect` - w tym wypadku w callbacku musisz wyczyścić timery. wywołaj w nim funkcję `clearAnnoyTimers`, którą omówimy
za chwilę.

### Implementacja serwera - funkcja `setAnnoyTimers(connected, prevTimers)`

Funkcja ta przyjmuje aktywny socket oraz poprzednią tablicę timerów jako argument. Jest ona wywoływana **przy każdym
wystąpieniu aktywności u klienta** - powinna wobec tego wyczyścić poprzednie timery oraz dodać nowe. Dodatkowo wyzwól 
w niej specjalne wydarzenie `clear`, które informuje użytkownika o tym, że może wyczyścić okno przeglądarki z komunikatów:

```javascript
const setAnnoyTimers = (connected, prevTimers) => {
  clearAnnoyTimers(prevTimers);

  connected.emit('clear');

  const newTimers = [];
}
```

Po tych kilku linijkach wprowadzenia stwórz **3 razy timery z użyciem funkcji `setTimeout()`** i odpowiednimi, opisanymi wcześniej
czasami wywoływania, a następnie - przekaż rezultat każdego z wywołań `setTimeout()` do tablicy `newTimers` i zwróć ją
z funkcji

**PODPOWIEDŹ**

*Wykorzystujemy tu fakt, iż `setTimeout` zwraca specjalny obiekt timera, który może być wykorzystany potem w `clearTimeout()`.
Funkcja ta zwróci więc **tablicę timerów**, które potem można użyć do ich czyszczenia, jeśli jeszcze nie zostały wywołane**.

### Implementacja serwera - funkcja `clearAnnoyTimers(prevTimers)`

Funkcja ta otrzymuje popradnie timery (potencjalnie może to być pusta tablica!), a następnie dla każdego z timerów w tablicy
wywołuje `clearTimeout()`:

```javascript
clearTimeout(timer);
```

Dodaj do niej odpowiednią pętlę, która wykona taką operację dla każdego z timerów w tablicy.

## Klient - wykrywanie aktywności

Kod kliencki dla tego zadania jest dużo prostszy - Socket.io znacząco upraszcza kontekst połączenia, więc nie potrzebujemy
już dużej części kodu zarządzającego kontekstem zapytań, tak jak miało do miejsce w long pollingu.

Stwórz nowy socket z użyciem biblioteki `socket.io-client`, a następnie dodaj do niego nasłuchiwanie na dwa zdarzenia:

- `annoy` - jeśli wystąpi, ustaw przekazaną w nim wiadomość w polu `annoy-container` - znajdziesz je używając 
`document.getElementById().innerHTML`
- `clear` - jeśli wystąpi, wykorzystaj selektor tak jak dla poprzedniego zdarzenia, ale wyczyść pole, ustawiając
`innerHTML` na pusty znak

Dodaj funkcję, która będzie nasłuchiwała na ruchy myszką. Ponieważ funkcja taka mogłaby się wyzwalać **setki razy w ramach
jednego ruchu myszką(!)**, musimy zapobiec wysyłaniu komunikatu o aktywności do serwera non-stop. Użyj funkcji `throttle`
z lodash-es z limitem czasu ustawionym na jedną sekundę:

```javascript
const reactToMouseMove = throttle((event) => {
  // Here - emit your activity
}, 1000);
```

W ramach funkcji wyzwól zdarzenie `activity` poprzez socket do serwera.

**POWPODIEDŹ**

*Aby nasłuchiwać na ruchy myszką, możesz użyć metody `addEventListener` dokumentu DOM:*

```javascript
window.addEventListener('mousemove', reactToMouseMove);
```

Pamiętaj o throttlingu!

---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
