(function() {
  'use strict';

  angular
    .module('panel')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
