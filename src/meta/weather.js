export const WeatherMetaData = {
  rain: {
    name: 'rain',
    Image: Object.assign(new Image(), { src: './FX/Particle/Rain.png' }),
    height: 8,
    width: 8,
    scalingFactor: 4,
    frame: 3,
    animationSpeed: 8,
    frequency: 10,
    velocity: 16,
    distance: 35,
  },
  heavyRain: {
    name: 'rain',
    Image: Object.assign(new Image(), { src: './FX/Particle/Rain.png' }),
    height: 8,
    width: 8,
    scalingFactor: 4,
    frame: 3,
    animationSpeed: 8,
    frequency: 200,
    velocity: 16,
    distance: 20,
  },
  rainOnFloor: {
    name: 'rainOnFloor',
    Image: Object.assign(new Image(), { src: './FX/Particle/RainOnFloor.png' }),
    height: 8,
    width: 8,
    scalingFactor: 3.4,
    frame: 3,
    animationSpeed: 8,
    frequency: 15,
    velocity: 0,
    distance: 20,
  },
  leaf: {
    name: 'leaf',
    Image: Object.assign(new Image(), { src: './FX/Particle/Leaf.png' }),
    height: 12,
    width: 12,
    scalingFactor: 3,
    frame: 6,
    animationSpeed: 9,
    frequency: 3,
    velocity: 0.8,
    distance: 300,
  },
  leafpink: {
    name: 'leafpink',
    Image: Object.assign(new Image(), { src: './FX/Particle/LeafPink.png' }),
    height: 12,
    width: 12,
    scalingFactor: 3,
    frame: 6,
    animationSpeed: 9,
    frequency: 3,
    velocity: 0.8,
    distance: 300,
  },
  snow: {
    name: 'snow',
    Image: Object.assign(new Image(), { src: './FX/Particle/Snow.png' }),
    height: 8,
    width: 8,
    scalingFactor: 3.8,
    frame: 7,
    animationSpeed: 6,
    frequency: 6,
    velocity: 2,
    distance: 150,
  },
}