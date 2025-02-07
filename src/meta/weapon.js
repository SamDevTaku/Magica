export const WeaponMetaData = {
  axe: {
    type: `melee`,
    name: `axe`,
    height: 21,
    width: 11,
    audio: 'melee',
    damage: 40,
    Image: Object.assign(new Image(), { src: './Items/Weapons/Axe/Sprite.png' }),
    icon: Object.assign(new Image(), { src: './Items/Weapons/Axe/icon.png' }),
    ani: 'cut',
  },
  bow: {
    type: `range`,
    name: `bow`,
    height: 8,
    width: 16,
    audio: 'range',
    damage: 0,
    Image: Object.assign(new Image(), { src: './Items/Weapons/Bow/Sprite.png' }),
    icon: Object.assign(new Image(), { src: './Items/Weapons/Bow/icon.png' }),
    ani: 'slash',
    Projectile: {
      Image: Object.assign(new Image(), { src: './FX/Projectile/Arrow.png' }),
      ani: 'slash',
      damage: 20,
      height: 15,
      width: 15,
      frames: 2,
      duration: 1,
      speed: 13,
      decrementRate: 0.1175,
      name: `arrow`,
    }
  },
  shuriken: {
    type: `range`,
    name: `shuriken`,
    height: 24,
    width: 6,
    audio: 'range',
    damage: 10,
    Image: Object.assign(new Image(), { src: '' }),
    icon: Object.assign(new Image(), { src: './Items/Weapons/Shuriken/icon.png' }),
    ani: 'slash',
    Projectile: {
      Image: Object.assign(new Image(), { src: './FX/Projectile/Shuriken.png' }),
      ani: 'slash',
      damage: 10,
      height: 16,
      width: 16,
      frames: 2,
      duration: 4,
      speed: 11,
      decrementRate: 0.10,
      name: `shuriken`,
    }
  },
  sword: {
    type: `melee`,
    name: `sword`,
    height: 20,
    width: 6,
    audio: 'melee',
    damage: 15,
    Image: Object.assign(new Image(), { src: './Items/Weapons/Sword/Sprite.png' }),
    icon: Object.assign(new Image(), { src: './Items/Weapons/Sword/icon.png' }),
    ani: 'cut',
  },
  staff: {
    type: `range`,
    name: `staff`,
    height: 21,
    width: 5,
    audio: 'fire',
    damage: 0,
    Image: Object.assign(new Image(), { src: './Items/Weapons/Staff/Sprite.png' }),
    icon: Object.assign(new Image(), { src: './Items/Weapons/Staff/icon.png' }),
    ani: 'flame',
    Projectile: {
      Image: Object.assign(new Image(), { src: './FX/Projectile/Fireball.png' }),
      damage: 30,
      ani: 'flame',
      height: 16,
      width: 16,
      frames: 4,
      duration: 4,
      speed: 11.5,
      decrementRate: 0.056,
      name: `fireBall`,
    }
  },
  spear: {
    type: `melee`,
    name: `spear`,
    height: 28,
    width: 7,
    audio: 'melee',
    damage: 30,
    Image: Object.assign(new Image(), { src: './Items/Weapons/Spear/Sprite.png' }),
    icon: Object.assign(new Image(), { src: './Items/Weapons/Spear/icon.png' }),
    ani: 'cut',
  },
}
