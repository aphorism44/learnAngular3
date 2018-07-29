import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable'

import 'rxjs';

export class Character {
  name: string;
  race: string;
  alignment: string;
  health: number;
}


@Injectable()
export class SharedService {

  characters: Character[] = [
    {name: 'Aragon', race: 'Human', alignment: 'good', health: 100 }
    , {name: 'Legolas', race: 'Elf', alignment: 'good', health: 100 }
    , {name: 'Gimli', race: 'Dwarf', alignment: 'good', health: 100 }
    , {name: 'Sarumon', race: 'Wizard', alignment: 'evil', health: 100 }
    , {name: 'Witch King', race: 'Wraith', alignment: 'evil', health: 100 }
    , {name: 'Lurtz', race: 'Uruk-hai', alignment: 'evil', health: 100 }
  ];

  charsObservable: Observable<Character[]>;
  observer;

  constructor() { 
    this.charsObservable = new Observable(obs => {
      this.observer = obs;
      this.observer.next(this.characters);
    });
  }

  getCharacters(): Observable<Character[]> {
    return this.charsObservable;
  }

  hitCharacter(character, damage) {
    let index = this.characters.indexOf(character, 0);
    if (index > -1) {
      this.characters[index].health -= damage;
      if (this.characters[index].health <= 0)
        this.characters.splice(index, 1);
    }
    this.observer.next(this.characters);
  }
  
}
