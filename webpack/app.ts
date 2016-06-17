import * as angular from 'angular';
import { provide, Inject } from 'ng-metadata/core';

import { Character } from './character-list/characters';
import { CharacterListComponent } from './character-list/character-list.component';
import { BootstrapUITestController } from './bootstrap-ui-test/bootstrap-ui-test.controller';
import { TestComponent } from './test/test.component'

export const AppModule = angular.module('app', [require('angular-ui-bootstrap'), 'restmod'])
  .service(...provide(Character))
  .directive(...provide(CharacterListComponent))
  .controller('bootstrapUITestController', BootstrapUITestController)
  .directive(...provide(TestComponent))
  .config(RestmodConfig)
  .name;

RestmodConfig.$inject = ['restmodProvider'];
export function RestmodConfig(restmodProvider) {
  restmodProvider.rebase('DefaultPacker');
  restmodProvider.rebase({
    $config: {
      style: 'DefaultPacker',
      urlPrefix: 'http://swapi.co/api/',
      jsonRoot: 'results',
      meta: '.'
    }
  })
}