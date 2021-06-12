import { Json2mdLink } from '../types'

export const sortUnorderedListOfLinks = (unorderedListOfLinks:Json2mdLink[]) => {
  return unorderedListOfLinks.sort((a, b) => (a.link.title > b.link.title) ? 1 : ((b.link.title > a.link.title) ? -1 : 0))
}
