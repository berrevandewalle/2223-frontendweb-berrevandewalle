# Berre Vandewalle (202182398)

> Duid aan welke vakken je volgt en vermeld voor deze vakken de link naar jouw GitHub repository. In het geval je slechts één vak volgt, verwijder alle inhoud omtrent het andere vak.
> Verwijder alle instructies (lijnen die starten met >)

- [x] Front-end Web Development
  - [GitHub repository](github.com/HOGENT-Web)
  - [Online versie](github.com/HOGENT-Web)
- [x] Web Services: GITHUB URL
  - [GitHub repository](github.com/HOGENT-Web)
  - [Online versie](github.com/HOGENT-Web)

**Logingegevens**

- Gebruikersnaam/e-mailadres: inloggen@gmail.com
- Wachtwoord: Wachtwoord1

> Vul eventueel aan met extra accounts voor administrators of andere rollen.

## Projectbeschrijving

> Omschrijf hier duidelijk waarover jouw project gaat. Voeg een domeinmodel (of EERD) toe om jouw entiteiten te verduidelijken.

Mijn project gaat over het fiets merk “Cervélo”.
Op mijn app wordt er een overzicht van de fietsen van het merk Cervélo gegeven met de details van de fiets: naam, prijs, kleur en de soort fiets. Bij “Fiets toevoegen” in de navbar kan een fiets verwijderd, bewerkt of toegevoegd worden maar dit kan enkel gebeuren als de gebruiker is ingelogd. Er kan ook worden gefilterd in de fietsen door in de zoekbalk op naam te zoeken naar een bepaalde fiets.

## Screenshots

> Voeg enkele (nuttige!) screenshots toe die tonen wat de app doet.

Als er niet is ingelogd kan er enkel het overzicht van alle fietsen worden bekeken.

Als we toch proberen een fiets toe te voegen komt er ‘login required’ op het scherm.

Eens je bent ingelogd kan je wel een fiets aanpassen/toevoegen/verwijderen

## Behaalde minimumvereisten

> Duid per vak aan welke minimumvereisten je denkt behaald te hebben

### Front-end Web Development

- **componenten**

  - [ X ] heeft meerdere componenten - dom & slim (naast login/register)
  - [ X ] definieert constanten (variabelen, functies en componenten) buiten de component
  - [ ] minstens één form met validatie (naast login/register)
  - [ X ] login systeem (eigen of extern zoals bv. Auth0)
    <br />

- **routing**

  - [ X ] heeft minstens 2 pagina's (naast login/register)
  - [ X ] routes worden afgeschermd met authenticatie en autorisatie
    <br />

- **state-management**

  - [ X ] meerdere API calls (naast login/register)
  - [ X ] degelijke foutmeldingen indien API call faalt
  - [ X ] gebruikt useState enkel voor lokale state
  - [ X ] gebruikt Context, useReducer, Redux… voor globale state
    <br />

- **hooks**

  - [ X ] kent het verschil tussen de hooks (useCallback, useEffect…)
  - [ X ] gebruikt de hooks op de juiste manier
    <br />

- **varia**
  - [ ] een aantal niet-triviale testen (unit en/of e2e en/of ui)
  - [ X ] minstens één extra technologie
  - [ X ] duidelijke en volledige README.md
  - [ X ] volledig en tijdig ingediend dossier

### Web Services

- **datalaag**

  - [ X ] voldoende complex (meer dan één tabel)
  - [ X ] één module beheert de connectie + connectie wordt gesloten bij sluiten server
  - [ X ] heeft migraties
  - [ X ] heeft seeds
    <br />

- **repositorylaag**

  - [ ] definieert één repository per entiteit (niet voor tussentabellen) - indien van toepassing
  - [ ] mapt OO-rijke data naar relationele tabellen en vice versa
        <br />

- **servicelaag met een zekere complexiteit**

  - [ X ] bevat alle domeinlogica
  - [ X ] bevat geen SQL-queries of databank-gerelateerde code
    <br />

- **REST-laag**

  - [ X ] meerdere routes met invoervalidatie
  - [ X ] degelijke foutboodschappen
  - [ X ] volgt de conventies van een RESTful API
  - [ X ] bevat geen domeinlogica
  - [ X ] degelijke authorisatie/authenticatie op alle routes
    <br />

- **varia**
  - [ ] een aantal niet-triviale testen (min. 1 controller >=80% coverage)
  - [ X ] minstens één extra technologie
  - [ X ] duidelijke en volledige `README.md`
  - [ X ] maakt gebruik van de laatste ES6-features (object destructuring, spread operator...)
  - [ X ] volledig en tijdig ingediend dossier

## Projectstructuur

### Front-end Web Development

> Hoe heb je jouw applicatie gestructureerd (mappen, design patterns, hiërarchie van componenten, state...)?

2223-frontendweb-berrevandewalle>
─ .github
│ └───ISSUE_TEMPLATE
├───.vscode
├───build
│ └───static
│ ├───css
│ ├───js
│ └───media
├───node_modules
├───public
├───resources
└───src
├───api
├───components
│ ├───authentication
│ ├───Fietsen
│ ├───images
│ └───Overzicht
└───contexts

### Web Services

> Hoe heb je jouw applicatie gestructureerd (mappen, design patterns...)?

2223-webservices-berrevandewalle
├───.github
│ └───ISSUE_TEMPLATE
├───.vscode
├───config
├───node_modules
├───src
│ ├───core
│ ├───data
│ │ ├───migrations
│ │ └───seeds
│ ├───images
│ ├───repository
│ ├───rest
│ └───service
└───**tests**
└───rest

## Extra technologie

### Front-end Web Development

> Wat is de extra technologie? Hoe werkt het? Voeg een link naar het npm package toe!

Om een kleur te selecteren bij een nieuwe fiets die je toevoegt gebruikte ik hex-color-to-color-code. Om zo van een hexadecimale code naar de naam van de kleur te kunnen geraken, en die dan te laten zijn in het overzicht van de fietsen.

npm install hex-color-to-color-code

### Web Services

> Wat is de extra technologie? Hoe werkt het? Voeg een link naar het npm package toe!

Met deze technologie is het mogelijk om een file/img bestand te laten uploaden in je databank, en hem weer op te halen en zo te tonen in het overzicht van de fietsen.

Npm install express-fileupload

## Testresultaten

### Front-end Web Development

> Schrijf hier een korte oplijsting en beschrijving van de geschreven testen

### Web Services

> Schrijf hier een korte oplijsting en beschrijving van de geschreven testen + voeg een screenshot van de coverage en uitvoering toe

## Gekende bugs

### Front-end Web Development

> Zijn er gekende bugs?
> Bij het toevoegen van een foto van een fiets

### Web Services

> Zijn er gekende bugs?
> Bij het toevoegen van een foto van een fiets
