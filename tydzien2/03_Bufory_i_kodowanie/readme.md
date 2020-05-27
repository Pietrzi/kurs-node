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

# Adres IP przedstawiony binarnie
Celem tego zadania jest przetrenowanie umiejętności zapisywania oktetów.

Wykorzystajmy do tego **adres IP**, który składa się z czterech oktetów, np. **192.168.1.187** wygląda w ten sposób:

```bash
11000000 10101000 00000001 10111011
```

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 | wartość |
|-----|----|----|----|---|---|---|---|---|
| 1   | 1  | 0  | 0  | 0 | 0 | 0 | 0 | **192** |

128 + 64 = 192

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 | wartość |
|-----|----|----|----|---|---|---|---|---|
| 1   | 0  | 1  | 0  | 1 | 0 | 0 | 0 | **168** |

128 + 32 + 8  = 168

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 | wartość |
|-----|----|----|----|---|---|---|---|---|
| 0   | 0  | 0  | 0  | 0 | 0 | 0 | 1 | **1** |

1 = 1

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 | wartość |
|-----|----|----|----|---|---|---|---|---|
| 1   | 0  | 1  | 1  | 1 | 0 | 1 | 1 | **187** |

128 + 32 + 16 + 8 + 2 + 1 = 187

Adresowanie w sieci jest poza zakresem tego kursu i nie będziemy sie tym zajmować.

## Zadanie
Poniżej znajdują się dwa adresy IP zapisane binarnie. Przedstaw je w notacji dziętnej, w taki sam sposób jak zostało to pokazane powyżej.

```bash
11111111 11111111 00000000 00000000
```

```bash
01000010 00110111 00001100 00000011
```

# Tłumaczenie tekstu z danych binarnych

Poniżej znajduje się zapis binarny dowcipu. Przetłumacz go korzystając z tabeli UTF-8.

```bash
01010111 01101000 01100001 01110100 00100000 01100100 01101111 00100000 01101101 01100001 01110100 01101000 01100101 01101101 01100001 01110100 01101001 01100011 01101001 01100001 01101110 01110011 00100000 01100100 01101111 00100000 01101001 01101110 00100000 01100001 00100000 01100110 01101111 01110010 01100101 01110011 01110100 00111111 00001010 01010100 01101000 01100101 01111001 00100000 01100011 01101111 01110101 01101110 01110100 00100000 01101100 01101111 01100111 01110011 00101110
```

## Krok po kroku
Łatwiej Wam będzie wykonać to zadanie korzystając z [konwertera](https://www.rapidtables.com/convert/number/binary-to-hex.html)

Dla każdego oktetu przeprowadźcie poniższe kroki:

1. Przedstaw wartość oktetu w notacji szesnastkowej.
```
binary: 01010111 => 57(hex)
```
2. [W tabeli kodowania UTF-8](https://www.utf8-chartable.de/) sprawdź jaki znak się kryje pod daną liczbą.
```
57(hex) => W
```

# Kopalnia złota

W pliku **input** znajduje się tekst zakodowany w **base64**. W nim znajdują się fragmenty pomiędzy nawiasami okrągłymi **{randomText}**, np:

```
Ten tekst znajduje się {między nawaisami}.
Przez wieś idzie {kaczka}. Ta {kaczka} to {kaczka} dziwaczka.
```

Waszym zadaniem jest odczytanie tego tekstu i zwrócenie następującego obiektu do konsoli:

```javascript
{ 
    '{między nawiasami}': 1,
    '{kaczka}': 3
}
```
Klucz w tym obiekcie jest taki sam jak treść pomiędzy nawiasami, natomiast wartość odnosi się do ilości występień danego tekstu w pliku **input**.

## Krok po kroku

Proponowana procedura wykonania tego zadania jest następująca:

1. Stwórz strumień odczytu z pliku input
2. Skonwertuj dane dostępne w strumieniu z base64 do UTF-8
3. Do tymczasowej tablicy zapisuj wszystkie fragmenty tekstu, które znajdują się pomiędzy nawiasami okrągłymi. Skorzystaj z metody **match()**, która przyjmuje wyrażenie regularne jako parametr. Poniżej znajduje się gotowe wyrażenie.

```javascript
'tekst'.match(/{([^}]*)}/g)
```
4. Gdy strumień odczytu zostanie zamknięty uruchom funkcję parseResult aby otrzymać finalny wynik. Pamiętaj o kształcie zwracanego obiektu.




---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
