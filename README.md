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

1. Create a directory and name it the way you want

```text
📁 my-collection
```
2. Create a directory inside for your items. In this example the fruits.

TODO: main index.md

```text
📁 my-collection
└── 📁 fruits
```

3. Add items to your _items_ directory. An item is a directory that contains at least an `index.md` file. Inside this file lays the _content_ of your item. Let's add an item named apple.

```text
📁 my-collection
└── 📁 fruits
    └── 📁 apple
        └── 📄 index.md
```

```md
# Apple

Apples are **amazing.**
```

In order to keep things simple the item will get the directory name you gave to it, in the example above the item would be names `apple`. If you want to give it a different name than the directory one, f.e. `Apple`, just add in the `index.md` frontmatter.

```md
---
name: 'Apple'
---
# Apple

Apples are **amazing.**
```

TODO: Categories

Additionally, it can contain an `assets` directory with images that can be referenced in the `index.md`.

So our collection would look like this:

```text
📁 my-collection
└── 📁 fruits
    └── 📁 apple
    │   └── 📄 index.md
    └── 📁 pineapple
    │   └── 📄 index.md
    └── 📁 watermelon
    │   └── 📁 assets
    │   │   └── 📄 watermelon.png    
    │   └── 📄 index.md
    ├── ...
    ...
```

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

    
