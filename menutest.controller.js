'use strict';

// not used placeholder
angular.module('menutest')
  .controller('MenutestCtrl', function ($scope, AppConfig) {
	AppConfig.setCurrentApp('MenutestAppName', 'fa-tumblr', 'menutest', 'app/menutest/menu.html');
  });
