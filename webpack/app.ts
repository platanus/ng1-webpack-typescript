import { module } from 'angular';

export let app = module('Ng1Webpack', [require('angular-ui-bootstrap')]);

import './test/test.component';
import './bootstrap-ui-test/bootstrap-ui-test.controller';