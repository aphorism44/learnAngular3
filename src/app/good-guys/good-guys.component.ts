import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-good-guys',
  templateUrl: './good-guys.component.html',
  styleUrls: ['./good-guys.component.css']
})
export class GoodGuysComponent implements OnInit {
  @Input('shared') shared;
  characters: Array<any>;

  constructor() { }

  ngOnInit() {
    this.shared.getCharacters().subscribe(chars => this.characters = chars);
  }

  hitCharacter(character, damage) {
    this.shared.hitCharacter(character, damage);
  }

}
