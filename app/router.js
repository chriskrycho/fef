import EmberRouter from '@ember/routing/router';
import config from 'examples/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('args-example', function() {
    this.route('classic');
    this.route('octane-broken');
    this.route('octane-getter');
    this.route('octane-local-copy');
  });
  this.route('modifier-example');
});
