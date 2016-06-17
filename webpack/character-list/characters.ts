import { AppModule } from '../app';
import {Injectable, Inject} from 'ng-metadata/core';

@Injectable()
export class Character {
  constructor(@Inject('restmod') private restmod: any) {
    return restmod.model('/people');
  }
}