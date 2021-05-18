<!-- 
This README.md file was generated from an open source template. 
Have a look at it! https://gist.github.com/reymon359/a0880e5b3bfcbac54f58b52b3ade2e02
-->

<!-- Logo (with link) -->
<p align="center">
  <a href="https://github.com/reymon359/collman">
    <img alt="collman" src="https://raw.githubusercontent.com/reymon359/collman/master/assets/watermelon.png" width="100" />
  </a>
</p>

<!-- Title -->
<h1 align="center">
  Collman
</h1>

<!-- Badges (with link) -->

<p align="center">
  <a href="https://github.com/reymon359/collman/actions/workflows/main.yml">
    <img alt="CI" src="https://github.com/reymon359/collman/actions/workflows/main.yml/badge.svg" />
  </a>
  <a href="https://github.com/reymon359/collman/commits/master">
    <img alt="Last commit" src="https://img.shields.io/github/last-commit/reymon359/collman?logo=github" />
  </a>
  <a href="https://github.com/reymon359/collman/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/github/license/reymon359/collman?color=blue&logo=github" />
  </a>
  <a href="https://github.com/reymon359/collman/releases">
    <img alt="Version" src="https://img.shields.io/github/package-json/v/reymon359/collman?logo=github" />
  </a>
</p>

<!-- Small description -->
<p align="center">
Easily manage agnostic collections with classifications.
</p>

<!-- Long description -->
We as humans like to classify things, is in our nature. this project aims to create a tool where you have a collection to add items and classify them in an agnostic way.

If you want to create a blog where the items are posts, and you want to classify then with tags and categories you can easily do it.
Or maybe a gallery where the items are images there you go too. A gallery of galleries you say? sure, why not.

Create anything.

And it's just markdown, so it can be edited effortlessly.

TODO: link to docs

TODO: add examples

## Table of Contents
TODO

## How to use it

### Install Collman 

Running `npm i -g collman` will do

### Create a collection

Let's create a fruit collection as an example.

Create a directory with any name you want and add an `index.md` file to it.

```text
📁 fruits-collection
└── 📄 index.md
```

Inside the `ìndex.md` file add a name for your collection in the _frontmatter_ and a description about your collection.

```md
---
name: 'Fruits Collection'
---
This is my awesome collection of fruits.
```

Now create a directory inside for your **items.** In this example the fruits.

```text
📁 fruits-collection
└── 📁 fruits
└── 📄 index.md
```

Lets add an **item** to the **items** directory. An **item** is nothing but a directory that contains at least an `index.md` file with the _content_ of your **item.**

```text
📁 my-collection
└── 📁 fruits
│   └── 📁 apple
│       └── 📄 index.md
└── 📄 index.md
```

Add the name inside the `index.md` frontmatter and whatever content below it. 

```md
---
name: 'Apple'
---
Apples are **amazing.**
```

Additionally, an **item** can contain an `assets` directory to store images referenced in the `index.md`. Have a look at the watermelon item in our example.

```text
📁 my-collection
└── 📁 fruits
│   └── 📁 apple
│   │   └── 📄 index.md
│   └── 📁 pineapple
│   │   └── 📄 index.md
│   └── 📁 watermelon
│   │   └── 📁 assets
│   │   │   └── 📄 watermelon.png
│   │   └── 📄 index.md
│   ├── ...
│   ...
└── 📄 index.md
```

TODO: Add examples folder with this
TODO: Categories

### Run `collman --id name-input-directory`
TODO

## Configuration
TODO

### Default configuration 
TODO

## Visualize it
TODO

### Why Docsify
En verdad docsify es una feature, por defecto no lo añade. Si lo pides te añade el Index el de nojekill y el sidebar o magnate si quieres. Why docsify. I was about to creat something similar to display the collections of things and then discovered about docsify and all the content, plugins and support behind it and decided to not reinvent the wheel and just adapt it to my needs.



comando plugins paraa añadir docsify plugins aunque esto alomejor no have falta  actualizar despues de hacer el tuto de docsify

<!-- Authors -->
## Authors

- **Ramón Morcillo** - _Initial work_ - [reymon359](https://github.com/reymon359)

<!-- Credits -->
## Credits

- [Adri](https://github.com/adri)

    
