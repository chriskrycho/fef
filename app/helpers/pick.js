import { helper } from '@ember/component/helper';
import { get } from '@ember/object';
import { assert } from '@ember/debug';

/**
  A helper for getting the values of an object, but specifically in a way that
  is useful for using with Octane event handlers or other functions.

  For example:

  ```hbs
  <label>
    Some cool text:
    <input
      value={{@value}}
      {{on "change" (global-helpers$pick "target.value") @updateValue}}
    />
  </label>
  ```
 */
export default helper(([path, action]) => {
  assert('you must pass a string path to `pick`', typeof path === 'string');

  return (object) => {
    const value = get(object, path);
    return action ? action(value) : value;
  };
});
