import { sum } from '../index'

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2)
  })
})

describe('Configuration', () => {
  it('loads the configuration', () => {
    // Arrange
    const irrelevantConfiguration = {}

    // Act
    const loadedConfiguration =

    // Assert
    expect(irrelevantConfiguration).toEqual(loadedConfiguration);
  })
})
it('should create the planet right, when given mapDimensions', () => {
  // Arrange
  const mockMapDimensions = { width: 3, height: 2 };
  const mockPlanetCreated = [
    [false, false],
    [false, false],
    [false, false]
  ];

  // Act
  const planetCreated = map.createPlanet(mockMapDimensions);

  // Assert
  expect(planetCreated).toEqual(mockPlanetCreated);
  expect(planetCreated.length).toEqual(mockMapDimensions.width);
});

describe('File system', () => {
  it('gets the collection from the config root', () => {
  })
})
