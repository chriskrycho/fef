import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | args-example/classic', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:args-example/classic');
    assert.ok(route);
  });
});
