import { openings } from '../data/data.js';

export class Opening {
  static byEco = (eco) => {
    return openings.filter(item => item.eco.startsWith(eco));
  }

  static byMovetext = (movetext) => {
    return openings.filter(item => item.movetext.startsWith(movetext));
  }

  static byName = (name) => {
    return openings.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
  }
}
