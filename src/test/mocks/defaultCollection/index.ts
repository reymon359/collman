export const defaultCollectionMock = {
  name: 'Default Collection',
  description: 'Default Collection description',
  classifications: [{
    name: 'categories',
    values: ["Category1", "Category2", "Category3"]
  }],
  content: {
    name: 'items',
    items: [{
      name: "item1",
      description: "description1",
      classifications: [{
        name: "categories",
        values: ["Category1", "Category2"]
      }],
      content: "# Title 1\n\n![Image 1](./assets/image-1.jpg)\n\nItem 1 introduction\n\n\n"
    },{
      name: "ITEM2",
      description: "DESCRIPTION2",
      classifications: [{
        name: "categories",
        values: ["Category1", "Category3"]
      }],
      content: "# Title 2\n\n![Image 2](./assets/image-2.png)\n\nItem 2 introduction\n\n\n"
    },{
      name: "Item3",
      description: "Description3",
      classifications: [{
        name: "categories",
        values: ["Category2", "Category3"]
      }],
      content: "# Title 3\n\n![Image 3](./assets/image-3.svg)\n\nItem 3 introduction\n\n\n"
    }]
  }
}
