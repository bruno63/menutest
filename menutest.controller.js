'use strict';

// not used placeholder
angular.module('menutest')
  .controller('MenutestCtrl', function ($scope, AppConfig) {
	AppConfig.setCurrentApp('MenuTest', 'fa-tumblr', 'menutest', 'app/menutest/menu.html');
  });
