import { Item } from '../../../domain/models'
// TODO: finish defaultCollectionMock
export const defaultCollectionMock = {
  name: 'Default Collection',
  description: 'Default Collection description',
  content: {
    name: 'items',
    items: [
      {
        name: "item1",
        description: "description1",
        classifications: [{
    name: "categories",
    values: [
      "Category1",
      "Category2"
    ]
  }
        ],
        content: "<h1 id=\"title-1\">Title 1</h1>\n<p><img src=\"image-1.jpg\" alt=\"Image 1\"></p>\n<p>Item 1 introduction</p>\n"
      }
    ]
  }
}
