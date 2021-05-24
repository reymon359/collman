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

# Collman


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
TODO: Add examples

## Table of Contents
TODO

## How to use it

### Install Collman 

Running `npm i -g collman` will do

### Create a collection

Let's create a fruit collection as an example. You can find it in the `assets/examples` directory from this repository.

First, create a directory with any name you want.

```text
📁 fruits-collection
```


Now create a directory for your **items** and add an `index.md` file to it. In this example the `fruits`.

```text
📁 fruits-collection
└── 📁 fruits
    └── 📄 index.md
```

Inside the `ìndex.md` file add a name for your collection in the _frontmatter_ and a description about your collection.

```md
---
name: 'Fruits Collection'
---
# This is my awesome collection of fruits
```

Lets add an **item** to the **items** directory. An **item** is nothing but a directory that contains at least an `index.md` file with the _content_ of your **item.**

```text
📁 my-collection
└── 📁 fruits
    └── 📁 apple
    │   └── 📄 index.md
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
    └── 📁 apple
    │   └── 📄 index.md
    └── 📁 orange
    │   └── 📄 index.md
    └── 📁 watermelon
    │   └── 📁 assets
    │   │   └── 📄 watermelon.png
    │   └── 📄 index.md
    ├── ...
    ...
    └── 📄 index.md
```

```md
---
name: 'Watermelon'
---
I like this watermelon picture

![watermelon](./assets/watermelon.png)
```

And finally you can add **Classifications** to your items. A **Classification** is an agnostic way to group items according to the values you give to it. You just add an array of values in the frontmatter of the item. Here I am adding two classifications to my orange item `index.md`: `Color` and `Size` and adding them some values.

```md
---
name: 'Orange'
Color: ['Orange']
Size: ['Medium']
---
Is my favourite fruit
```

### Run `collman --id name-input-directory`

Once we have the collection ready, we run `collman --id name-input-directory`. Going on with the previous example it would be `collman --id fruits`.

You will see this output:

```shell
user@user-pc my-collection % collman --id fruits
👀 Getting collection based on the configuration
✅  Collection got: Fruits Collection
🚧 Processing collection and saving in directory: docs
🎉 Collection processed and saved successfully
🎨 Docsify enabled. Adding it to the collection
🖼 Docsify added successfully to the collection. To have a look just do two things:
1. Install Docsify: npm i docsify-cli -g
2. Run: docsify serve docs
```

This will create a `docs` directory with the collection ready. Go to https://github.com/reymon359/collman/tree/master/assets/examples/my-collection/docs to see the one auto generated for the example.

## Visualize it

To visualize this in a better way Collman autogenerates the files needed for [Docsify.](https://github.com/docsifyjs/docsify/) Therefore, you just have to:

1. Install Docsify: npm i docsify-cli -g
2. Run: docsify serve docs

Here is how the example collection will be visualized with Docsify

TODO: Add the link to this.

### Why Docsify

At first I was about to create something similar to display a collection. Then decided to not reinvent the wheel and researched documentation libraries to fulfil this purpose.

I found Docsify to be the simplest one of them to work with markdown files. The minimum requirement is to add an `index.html` to the directory you want to serve.

It also has a lot plugins already made to improve the way you display the content which I decided just to adapt to my needs.

## Configuration

TODO

### Default configuration 
TODO

### Docsify configuration 
TODO

<!-- Authors -->
## Authors

- **Ramón Morcillo** - _Initial work_ - [reymon359](https://github.com/reymon359)

<!-- Credits -->
## Credits

- [Adri](https://github.com/adri)

    
