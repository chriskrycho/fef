import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | args-example', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:args-example');
    assert.ok(route);
  });
});
