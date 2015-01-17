'use strict';

angular.module('menutest')
.controller('MenutestCtrl', function ($scope, $log, cfg) {
	cfg.GENERAL.CURRENT_APP = 'menutest';
//	$translatePartialLoader.addPart('menutest');

	$log.log('MenutestCtrl/cfg = ' + JSON.stringify(cfg));
});
