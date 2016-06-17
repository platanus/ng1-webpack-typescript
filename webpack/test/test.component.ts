import {Component} from 'ng-metadata/core';

@Component({
  selector: 'test-component',
  template: require('./test.component.html'),
  legacy: {
    transclude: true
  }
})
export class TestComponent {
  constructor() {}
}