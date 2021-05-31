export const sortUnorderedListOfLinks = (unorderedListOfLinks:any) => {
  return unorderedListOfLinks.sort((a:any, b:any) => (a.link.title > b.link.title) ? 1 : ((b.link.title > a.link.title) ? -1 : 0))
}
