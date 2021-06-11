import { sortUnorderedListOfLinks } from '../../helpers/sortUnorderedListOfLinks'

describe('Helpers - Sort an unordered list of links', () => {
  it('Gets the Docsify index html content', async () => {
    const mockedUnorderedListOfLinks = [
      { link: { title: 'Green', source: '../Color/Green.md' } },
      { link: { title: 'Yellow', source: '../Color/Yellow.md' } },
      { link: { title: 'Red', source: '../Color/Red.md' } },
      { link: { title: 'Orange', source: '../Color/Orange.md' } }
    ]
    const mockedSortedUnorderedListOfLinks = [
      { link: { title: 'Green', source: '../Color/Green.md' } },
      { link: { title: 'Orange', source: '../Color/Orange.md' } },
      { link: { title: 'Red', source: '../Color/Red.md' } },
      { link: { title: 'Yellow', source: '../Color/Yellow.md' } }
    ]

    const sortedUnorderedListOfLinks = await sortUnorderedListOfLinks(mockedUnorderedListOfLinks)

    expect(sortedUnorderedListOfLinks).toEqual(mockedSortedUnorderedListOfLinks)
  })
})
