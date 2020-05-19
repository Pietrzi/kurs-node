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

# CPU Info — pliki źródłowe

W repozytorium znajdziesz przygotowane pliki źródłowe oraz skrypty. Ponieważ zadanie to jest dosyć rozbudowane, dla ułatwienia
dodaliśmy do kodu sygnatury metod, które masz zaimplementować, zarówno po stronie klienckiej, jak i stronie back-endowej.

Tym razem nie musisz przejmować się widokami — są one już przygotowane, musisz jedynie dopasować logikę oraz model danych
tak, aby wyświetliły odpowiednią treść.

# CPU Info - rozwiązanie

W repozytorium znajdziesz modelowe rozwiązanie zadania. Jest to jedna z wielu możliwości - nie sugeruj się kodem, a 
jedynie sposobem dojścia do rozwiązania konkret nych problemów.

Rozwiązanie to można ulepszyć na wiele sposobów:

- Dodać obsługę wielu użytkowników i persystencji (zapisu konfiguracji do bazy)
- Dynamicznie ukrywać wykresy, zależnie od tego, czy powinny być wyświetlone
- Przygotować spójną komunikację - zastąpić pokoje wysokopoziomowym przesyłaniem danych zbiorczo tak, aby oszczędzić
łącze
- Dodać obsługę sesji tak, aby odtwarzać kontekst użytkownika/przeglądarki po odświeżeniu strony
- Uspójnić nazwy dostępnych statystyk i uczynić je bardziej generycznymi
- Użyć po stronie klienckiej jednego z popularnych frameworków UI - tak, aby odświeżanie danych było prostsze i bardziej
czytelne.

... i wiele, wiele innych - jak to zazwyczaj bywa z każdym projektem, ograniczeniem są najczęściej czas... I finanse :)

---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
