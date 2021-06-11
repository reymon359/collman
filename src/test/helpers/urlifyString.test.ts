import { urlifyString } from '../../helpers/urlifyString'

describe('Helpers - Urlify an string', () => {
  it('Urlifies an string', async () => {
    const mockedUnurlifiedString = 'I am a string'
    const mockedUrlifiedString = 'I%20am%20a%20string'

    const urlifiedString = await urlifyString(mockedUnurlifiedString)

    expect(urlifiedString).toEqual(mockedUrlifiedString)
  })
})
