import { helper } from '@ember/component/helper';

export default helper(function print([v] /*, hash*/) {
  return v === undefined ? 'undefined' : JSON.stringify(v, null, 2);
});
