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

# Mongoose w API kawiarni

Czas przepisać API Kawiarni na Mongoose! W ramach tego mini-warsztatu nauczysz się, jak użyć wielu 
schematów i modeli Mongoose produkcyjnie oraz jak zorganizować kod, korzystający z biblioteki Mongoose
tak, aby był utrzymywalny i rozszerzalny.

W repozytorium znajduje się sugerowane rozwiązanie warsztatu "kawiarnia" wraz z drobnymi modyfikacjami. Przygotuj rozwiązanie
jako jedna całość, przechodząc kolejne etapy tak, jak w opisie zadania.

Jeśli będziesz mieć problem z którymkolwiek z etapów, postaraj się zacząć od prostszych modeli (np. `Staff` zamiast `Order`,
a `Order` zostaw na koniec). 

Sprawdź także, czy odpowiedź na Twoje problemy nie znajduje się w sugestiach do rozwiązań w artykułach.

## Mongoose w API kawiarni

W tym folderze znajdziesz pełne rozwiązanie zadania. Adapter MongoDB został całkowicie zastąpiony w kodzie przez Mongoose
(jest on nadal jednak potrzebny w zależnościach, dla Mongoose, który używa go wewnętrznie).

Przeanalizuj poszczególne pliki i porównaj ze swoim rozwiązaniem - przedstawione rozwiązanie jest jednym z wielu możliwych.
Jeśli Twoja wersja współpracuje z przypadkami testowymi E2E, możesz uznać ją także za poprawną.

---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
