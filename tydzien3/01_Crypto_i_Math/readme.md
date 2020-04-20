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

# Algorytmy hashowania danych

Jedną z najpopularniejszych metod ochrony danych jest ich hashowanie. Wypróbujmy kilka znanych algorytmów i zobaczmy jakie dają one efekty.

# Zadanie 1

Na stronie [Wikipedii](https://en.wikipedia.org/wiki/List_of_the_most_common_passwords) możesz znaleźć listę najpopularniejszych haseł na przestrzeni lat. Wybierz trzy z nich i zahashuj różnymi metodami (`md5`, `sha256` `sha512`). Wyniki wyświetl w konsoli.

# Zadanie 2

A teraz odwiedź stronę https://hashtoolkit.com/ i wklej wygenerowane przez Ciebie hashe. Zobacz jak łatwo je znaleźć w internecie zwłaszcza dla najpopularniejszych haseł. Dlatego najprostsze wykorzystanie takich algorytmów, bez dodatkowych kluczy, losowej liczby generacji nie jest bezpieczne. Jest to jednak podstawa dla dużo bardziej skomplikowanych i znacznie bezpieczniejszych rozwiązań.

# Ochrona haseł

Hasła są obecnie jedną z najpopularniejszych metod ochrony danych. Potrafią być jednak bardzo nieskuteczne, zwłaszcza kiedy użytkownicy sami ignorują niebezpieczeństwo. Aby pomóc im chronić dostępy do naszej aplikacji (dla dobra zarówno naszego jak i użytkownika) musimy trzymać w bazach danych zahashowane hasła (dziwi fakt, jak wiele firm potrafi zapisywać hasła w bazach zwykłym tekstem). Spróbujmy przetestować jedną z bezpiecznych metod hashowania haseł.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

# Zadanie 1

W pliku `users.json` są zapisane loginy i hasła użytkowników, mających dostęp do naszej aplikacji. W pliku `hash.js` uruchamianym skryptem `node hash.js` zapisz swoje rozwiązania.

1. Stwórz funkcję, a w niej używając modułu `inquirer` i metody `prompt` odpytaj użytkownika o hasło i login, a jeśli podana para znajduje się w pliku `users.json` to wyświetl w konsoli informację "Użytkownik zalogowany". Jeśli takiej pary nie ma w pliku, wyświetl w konsoli informację "Błędny login lub hasło".
2. Stwórz funkcje `hashPassword`, która odczyta dane z pliku `hashed_users_sync.json`, zahashuje za pomocą metody `crypto.pbkdf2Sync(password, salt, 100_000, 512, 'sha512')` i zapisze z powrotem do pliku. (zapis wykonaj tylko raz, pamiętaj, że sól nie może być losowo generowana przy każdym uruchomieniu, bo dane nie będą poprawnie odszyfrowane)
3. Teraz po odpytaniu użytkownika o dane, do sprawdzenia ich poprawności używaj pliku `hashed_users_sync.json` (hashuj podane przez użytkownika hasło i porównuj z tym z pliku, pamiętaj hashowanie jest procesem nieodwracalnym!)
4. w funkcji `hashPassword` dodaj `setInterval`, wyświetlający coś w konsoli co sekundę. Kiedy pojawia się pierwszy `console.log`?
5. Zmień liczbę iteracji algorytmu i zobacz jak zmienia się czas oczekiwania. Uruchom menadżera zadań `Ctrl + Del + Alt` i obserwuj jak rośnie zużycie procesora.

# Zadanie 2

A teraz zmień metodę `pbkdf2Sync` na asynchroniczną `pbkdf2` i obserwuj kiedy pojawi się pierwszy `console.log`? Zmień liczbę iteracji algorytmu i zobacz jak zmienia się czas oczekiwania. Uruchom menadżera zadań `Ctrl + Del + Alt` i obserwuj jak rośnie zużycie procesora.

# Ochrona danych wrażliwych

Każdy użytkownik logując się do Twojej aplikacji zostawia na swój temat jakąś informację. Im więcej tych informacji jest wymaganych, tym większe konsekwencje może mieć ich wyciek. To Ty jesteś osobą odpowiedzialną za ich bezpieczeństwo. Jednym z wielu narzędzi, które możesz w tym celu wykorzystać jest szyfrowanie danych i odszyfrowywanie ich tylko na czas użycia. Spróbujemy?

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

# Zadanie 1

W pliku `cipher.js` znajduje się obiekt zwierający niezaszyfrowane, wrażliwe dane użytkownika Twojej aplikacji. Tego typu informacje zazwyczaj przechowywać będziesz w bazach danych, ale na potrzeby tego ćwiczenia zapisaliśmy je do zmiennej. Plik uruchamiany jest skryptem `npm run cipher` i w nim umieść swoje rozwiązania.

Twoim zadaniem będzie zaszyfrować dane w obiekcie `johnSmith`, a następnie poprawnie odczytać ich wartości. Aby to zrobić utwórz funkcję, a w niej:

- wybierz algorytm, który pozwoli Ci zaszyfrować wrażliwe dane i przypisz go do zmiennej np. `aes-256-cbc`
- stwórz hasło służące do odszyfrowywania danych i przypisz je do zmiennej
- stwórz sól składającą się z 32 losowych bajtów za pomocą metody `crypto.randomBytes(32)`
- na podstawie soli i hasła wygeneruj 32 bajtowy klucz (służy do tego metoda `scrypt`)
- wygeneruj losowy, 16 bajtowy wektor inicjalizujący i złóż za pomocą metody `crypto.createCipheriv(algorithm, key, iv)` obiekty pozwalające na zaszyfrowanie danych (osobny, dla każdej szyfrowanej danej)
- zaszyfruj dane (datę urodzenia, id i pesel osobno) używając metody `update(data, 'utf-8', 'hex')` podając jako pierwszy argument daną, którą chcesz zaszyfrować, jako drugi formatowanie źródłowe, a jako trzeci formatowanie docelowe
- stwórz obiekt `johnSmithHashed` i do odpowiednich atrybutów przypisz zaszyfrowane dane, wyświetl obiekt w konsoli

# Zadanie 2

Wykorzystując klucz oraz wektor inicjalizujący stworzony w poprzednim zadaniu odszyfruj dane. Upewnij się, że dane są poprawne i zwróć je. Użyj metod `createDecipheriv` do stworzenia obiektów deszyfrujących, a następnie `update` oraz `final` na stworzonym przez Ciebie obiekcie do odczytania odszyfrowanych wartości. Wyświetl je w konsoli.

# Ochrona integralności danych

Wiemy już, że atak na nasz plik może wystąpić w wielu różnych formach. Jedną z nich jest np. modyfikacja zawartych w nim danych. Wyobraź sobie co by się stało gdyby, ktoś podmienił wysyłane do Ciebie dane do przelewu, który musisz zrealizować. Pieniądze zdecydowanie nie trafiłyby do odbiorcy, tylko na konto złodzieja. Spróbujmy się przed tym obronić. W tym celu wykorzystamy zahashowany kod autoryzujący nasze dane (HMAC).

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

W pliku `nodemon.json` znajduje się konfiguracja `nodemona`, dodaliśmy do niej regułę, która mówi o tym, żeby nie śledzić zmian w plikach `.json`. Projekt nie będzie się teraz przeładowywał przy każdym zapisie do `hashed_accounts.json`.

# Zadanie 1

W pliku `account.json` znajduje się kilka wygenerowanych za pomocą strony [e-walidator](http://ewalidator.pl/) numerów konta bankowego. Są to dane, o których integralność należy się troszczyć w szczególności.

Twoim zadaniem będzie stworzyć dwie funkcje, w których:

1. Odczytasz numery kont z pliku i dla każdego z nich za pomocą metody `createHmac` z modułu `crypto` i dowolnego klucza (takiego samego dla wszystkich kont) utworzysz zahashowany kod autoryzujący dane.
2. Wygenerowaną tablicę zapiszesz do pliku `hashed_accounts.json` w tej samej lokalizacji.

Swoje rozwiązanie umieść w pliku `hmac.js` uruchamianym skryptem `npm run hmac`.

# Zadanie 2

W pliku `check.js` uruchamianym skryptem `npm run check` sprawdź czy dane w pliku `accounts.json` nie były modyfikowane.

Aby to zrobić należy stworzyć funkcję np. `checkIntegrity` oraz:

1. Ponownie odczytać numery kont z pliku i dla każdego z nich za pomocą metody `createHmac` z modułu `crypto` i **takiego samego** jak w poprzednim zadaniu klucza utworzyć zahashowany kod autoryzujący dane (możesz wykorzystać do tego wyeksportowaną funkcję z poprzedniego zadania, pamiętaj tylko by w module, z którego eksportujesz funkcję nie wywoływać już zapisu do pliku `hashed_accounts.json`).
2. Odczytać wygenerowane w poprzednim zadaniu kody i porównać, z tymi wygenerowanymi w punkcie pierwszym.
3. Wyświetlić w konsoli odpowiednią informacje tj. "DANE ZGODNE", w przypadku kiedy wszystkie klucze są zgodne, lub "DANE MODYFIKOWANE", w przypadku kiedy klucze sie nie zgadzają.

A teraz zmodyfikuj dane w pliku `accounts.json` i uruchom funkcję `checkIntegrity` raz jeszcze.

**Podpowiedz**: Ze względu na mały rozmiar pliku możesz użyć metody `fs.promises.readFile`.

W pracy Node developera z problemem integralności danych możesz się spotkać w przypadku komunikacji klient/serwer i to właśnie te przesyłane dane najczęściej trzeba weryfikować w taki sposób.

---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
