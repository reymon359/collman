export const defaultCollection = {
  name: 'Default Collection',
  description: "Default Collection description \n",
  classifications: [{
    name: 'categories',
    values: ['Category1', 'Category2', 'Category3']
  },{
    name: 'Tags',
    values: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5']
  }
  ],
  content: {
    name: 'items',
    items: [{
      containerName: "item1",
      name: "item1",
      description: "description1",
      classifications: [{
        name: "categories",
        values: ["Category1", "Category2"]
      },{
        name: 'Tags',
        values: ['Tag 1', 'Tag 2', 'Tag 3']
      }],
      content: "# Title 1\n\n![Image 1](./assets/image-1.jpg)\n\nItem 1 introduction\n\n\n"
    },{
      containerName: "item2",
      name: "ITEM2",
      description: "DESCRIPTION2",
      classifications: [{
        name: "categories",
        values: ["Category1", "Category3"]
      },{
        name: 'Tags',
        values: ['Tag 2', 'Tag 3', 'Tag 4']
      }],
      content: "# Title 2\n\n![Image 2](./assets/image-2.png)\n\nItem 2 introduction\n\n\n"
    },{
      containerName: "item3",
      name: "Item3",
      description: "Description3",
      classifications: [{
        name: "categories",
        values: ["Category2", "Category3"]
      },{
        name: 'Tags',
        values: ['Tag 3', 'Tag 4', 'Tag 5']
      }],
      content: "# Title 3\n\n![Image 3](./assets/image-3.svg)\n\nItem 3 introduction\n\n\n"
    }]
  }
}
