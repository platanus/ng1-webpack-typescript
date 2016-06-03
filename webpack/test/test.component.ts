import { app } from '../app';

export class TestComponent {
  public controller: any;
  public template: string;

  constructor() {
    this.template = require('./test.component.html');
  }

}

app.component('testComponent', new TestComponent());