import { AppModule } from '../app';
import { Component, OnInit} from 'ng-metadata/core';

import { Character } from './characters';

@Component({
  selector: 'character-list',
  template: require('./character-list.component.html')
})
export class CharacterListComponent implements OnInit {
  public controller: any;
  public template: string;
  public bindings: any;
  public characters: any;
  constructor(
    private characterModel: Character
  ) {

  }

  ngOnInit() {
    this.characters = this.characterModel.$search();
  }
}