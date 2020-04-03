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

# Praca z obiektem stats i modułem path

Przetwarzanie informacji o pliku to jedna z podstawowych funkcjonalności jaką dają nam moduły `fs` i `path`. Przetestujmy jej możliwości w praktyce w następnym ćwiczeniu.

**Pamiętaj o uruchomieniu `npm install` przed rozpoczęciem zadania!**

W pliku `stats_and_paths.js` uruchamianym skryptem `npm run stats` znajduje się funkcja `getRandomNumber`, której zadaniem jest wygenerowanie losowych liczb. Funkcja ta przyjmuje także parametr `num`, który pozwala nam na zdefiniowanie zakresu, z którego będą wygenerowane liczby.

Twoim zadaniem jest:

1. Stworzyć katalog `dir_one`, a w nim dziesięć plików od `file1.txt` do `file10.txt` (wszystko to za pomocą JavaScriptu oczywiście!).
2. Za pomocą funkcji `getRandomNumber` wygenerować liczby i zapisać je do każdego z plików, co najmniej cztery liczby na plik.
3. Dla wszystkich plików stworzonych w katalogu wygenerować następującą strukturę i zapisać do pliku `response.txt`

```javascript
[
  {
    basename: 'file1',
    extname: '.txt',
    dirname: 'absolute/path/here',
    size: 50,
    birthtime: 'Thu, 08 Sep 2020 23:50:04 GMT',
    isFile: true,
    isDirectory: false,
  },
  {
    /* data goes here*/
  },
  // ... and so on
];
```

# Tworzenie funkcji moveFile

Moduł `fs` udostępnia nam wiele przydatnych narzędzi. Z ich pomocą możemy tworzyć dodatkowe funkcje ułatwiające operacje na plikach. Zadanie polega na stworzeniu funkcji `moveFile` która:

1. Będzie przyjmowała 2 argumenty:
   - **ścieżkę do pliku**, który ma zostać przeniesiony
   - **ścieżkę docelową** (jeśli ścieżka docelowa zawiera nazwę pliku to plik powinien zmienić nazwę, jeśli ścieżka docelowa nie istnieje to powinna zostać rekursywnie stworzona - przypomnij sobie dostępne w opcjach atrybuty)
2. Funkcja będzie przenosić plik pomiędzy podanymi ścieżkami (usuwając go ze starej ścieżki).

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

Swoje rozwiązanie umieść w pliku `move.js` uruchamianym skryptem `npm run move`.

Strukturę plików potrzebną do wykonania zadania także stwórz z wykorzystaniem modułu `fs`. Pamiętaj aby przenosić także zawartość pliku.

# Tworzenie funkcji copyFile

Kolejną funkcją, która może okazać się dość użyteczna w pracy z systemem plików jest copyFile. Spróbujmy zaprojektować prosty mechanizm kopiowania plików przy użyciu modułów `fs` oraz `path`.

W tym celu stwórzmy funkcję, która będzie przyjmowała będzie przyjmowała 2 argumenty:

- **ścieżkę do pliku**, który ma zostać skopiowany
- **ścieżkę docelową**

Funkcja będzie kopiować plik do podanej ścieżki (nie usuwając go ze starej ścieżki)

Jeśli kopiujesz plik do nowej lokalizacji, w której nie ma jeszcze pliku o takiej nazwie, nic nie stoi na przeszkodzie by nie zmieniać nazwy. Jeśli jednak plik o podanej nazwie już istnieje, spróbuj dodawać losowy ciąg znaków do nazwy.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

Swoje rozwiązanie umieść w pliku `copy.js` uruchamianym skryptem `npm run copy`.

Strukturę plików potrzebną do wykonania zadania także stwórz z wykorzystaniem modułu `fs`. Pamiętaj aby kopiować także zawartość pliku.

# Tworzenie funkcji swapFile

Jeszcze jednym przykładem użytecznych funkcjonalności, które możemy stworzyć w oparciu o moduł `fs` jest zamiana plików miejscami tzw. swapFile. Spróbujmy zaimplementować funkcję, która pozwoli nam na podmianę plików.

1. Funkcja będzie przyjmowała 2 argumenty:

   - **ścieżki do dwóch plików**, które mają zostać zamienione miejscami

2. Funkcja będzie przenosić pliki pomiędzy podanymi ścieżkami (usuwając je ze starej ścieżki).
3. Zapewnij obsługę wyjątków na wypadek gdyby okazało się, że któraś z podanych ścieżek nie istnieje.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

Swoje rozwiązanie umieść w pliku `swap.js` uruchamianym skryptem `npm run swap`.

Strukturę plików potrzebną do wykonania zadania także stwórz z wykorzystaniem modułu `fs`. Pamiętaj aby przenosić także zawartość pliku.

# Iterowanie po katalogach

Przeglądanie zawartości katalogów to jedna z bardziej przydatnych funkcjonalności w module `fs`. Ma jednak pewną wadę. Elementy, które są zwracane w metodzie `readdir` mają tylko jeden poziom zagnieżdżenia. Bardziej skomplikowane struktury wymagają już podejścia rekurencyjnego, o którym uczyliśmy się wcześniej. Spróbujmy napisać funkcję, która poprawnie wyświetli w konsoli całą zawartość folderu i jego podfolderów.

1. Funkcja będzie przyjmowała 1 argument:

   - **ścieżkę do folderu**, którego zagnieżdżoną zawartość będziemy wyświetlać

W katalogu `one` dołączonym do zadania umieszczone są inne katalogi i pliki. Użyj przygotowanego przez Ciebie rozwiązania do wypisania wszystkich plików znajdujących się w drzewie (w dowolnej kolejności)

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

Swoje rozwiązania umieść w pliku `iterate.js` uruchamianym skryptem `npm run iterate`.

Wykonaj zadania używając `Promisów`, najlepiej konstrukcji `async/await`.

# Podsumowanie wiedzy o fs i path

Poznaliśmy dziś wiele metod z modułów `fs` i `path`, które pomogą nam w pracy z plikami i ścieżkami dostępów. Spróbujmy zebrać je razem i powtórzyć raz jeszcze.

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

W pliku `all.js` uruchamianym skryptem `npm run all` umieść swoje rozwiązanie.
W pliku `poem.txt` znajduje się fragment wierszyka dla dzieci autorstwa Juliana Tuwima **"Lokomotywa"**.

Twoim zadaniem jest:

1. Stworzenie funkcji, która dla każdej linijki w wierszu stworzy katalog np. `dir_1`, a w nim plik np. `file_1.txt`. W pliku powinna znaleźć się jedna linijka wierszyka w odpowiedniej kolejności, tj. dla pliku `file_1.txt` powinna to być pierwsza linijka, dla pliku `file_11.txt` jedenasta. (Podpowiedź: wierszyk możesz podzielić na linijki w następujący sposób `poem.split(/[\r\n]+/)` )

2. Stworzenie funkcji, która doda do każdego z plików tą samą linijkę wspak. Plik ma teraz zawierać dwie linijki, jedną zapisaną normalnie, a drugą, w której kolejność znaków zostanie odwrócona.

3. Stworzenie funkcji, w której wybierzesz dowolne dwa pliki i wypiszesz w konsoli relatywną ścieżkę pomiędzy nimi.

4. Stworzenie funkcji, która usunie całą wygenerowaną przez Ciebie strukturę, zarówno katalogów jak i plików.
# watchFile

Bardzo ciekawą funkcjonalnością, którą warto poznać jest także ta, pozwalająca na obserwowanie zmian w pliku. Mechanizm działania poznamy bliżej już niebawem, a póki co spróbujmy stworzyć bardzo prosty fileWatcher. 

**Pamiętaj o uruchomieniu `npm install` przed zadaniami!**

W pliku `watch.js` uruchamianym skryptem `npm run watch` umieść swoje rozwiązanie.

1. Używając metody `fs.watchFile` stwórz bardzo prosty watcher, który będzie logował informację, że plik się zmienił.
2. Metoda `watchFile`, jako drugi parametr przyjmuje callback. Sprawdź w dokumentacji jakie argumenty są przekazywane za pomocą tego callbacku. Jakiego typu są to obiekty? Co możemy z nimi zrobić? Jakie informacje o pliku niosą?
3. Wykorzystując zwracane do callbacku informacje wyświetl i porównaj rozmiar pliku przed zmianą i po zmianie.

Ciekawostka! Tak właśnie działa Nodemon, z którego często przecież korzystasz wykonując zadania.
---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
