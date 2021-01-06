import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | args-example/octane-getter', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:args-example/octane-getter');
    assert.ok(route);
  });
});
