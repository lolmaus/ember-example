/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    git: {
      repo: 'git@github.com:lolmaus/ember-example.git',
      branch: 'gh-pages',
    }
  };

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
