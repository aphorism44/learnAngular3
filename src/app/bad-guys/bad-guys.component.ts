import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bad-guys',
  templateUrl: './bad-guys.component.html',
  styleUrls: ['./bad-guys.component.css']
})
export class BadGuysComponent implements OnInit {
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
