import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | args-example/octane-broken', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:args-example/octane-broken');
    assert.ok(route);
  });
});
