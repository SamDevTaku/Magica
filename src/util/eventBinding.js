import { EventEmmiter } from '../classes/base/event.js';

export const eventEmmiter = new EventEmmiter();

export const EventMaping = {
  UP_KEY: `UP_KEY`,
  LEFT_KEY: `LEFT_KEY`,
  RIGHT_KEY: `RIGHT_KEY`,
  DOWN_KEY: `DOWN_KEY`,
  SPACE_KEY: `SPACE_KEY`,
  ENTER_KEY: `ENTER_KEY`,
  SWITCH_MAP: `SWITCH_MAP`,
  SWITCH_WEAPON: `SWITCH_WEAPON`,
  PROJECTILE_FIRE: `PROJECTILE_FIRE`,
  USE_POTION: `USE_POTION`,
  ANIMATION: `ANIMATION`,
  COLLISION_ITEM_SCORE: `COLLISION_ITEM_SCORE`,
  COLLISION_ITEM_WEAPON: `COLLISION_ITEM_WEAPON`,
  COLLISION_ITEM_FOOD: `COLLISION_ITEM_FOOD`,
  COLLISION_ITEM_POTION: `COLLISION_ITEM_POTION`,
  COLLISION_ITEM_LETTER: `COLLISION_ITEM_LETTER`,
  COLLISION_BOUNDARY: ` COLLISON_BOUNDARY`,
  REDRAW: `REDRAW`,
  ENEMY_DEAD: `ENEMY_DEAD`,
};
