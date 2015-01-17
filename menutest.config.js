'use strict';

angular.module('menutest', ['core'])
.config(function ($stateProvider) {
	$stateProvider
	.state('menutest', {
		url: '/menutest',
		templateUrl: 'app/menutest/content.html',
		controller: 'MenutestCtrl',
		authenticate: true
	})
	.state('menutest.newFile', 		{ template: 'menutest.newFile' })
	.state('menutest.open', 		{ template: 'menutest.open' })
	.state('menutest.openRecent', 	{ template: 'menutest.openRecent' })
	.state('menutest.utf8', 		{ template: 'menutest.utf8' })
	.state('menutest.utf16le', 		{ template: 'menutest.utf16le' })
	.state('menutest.utf16be', 		{ template: 'menutest.utf16be' })
	.state('menutest.newView', 		{ template: 'menutest.newView' })
	.state('menutest.save', 		{ template: 'menutest.save' })
	.state('menutest.saveEncoding', { template: 'menutest.saveEncoding' })
	.state('menutest.saveAs', 		{ template: 'menutest.saveAs' })
	.state('menutest.saveAll', 		{ template: 'menutest.saveAll' })
	.state('menutest.newWindow', 	{ template: 'menutest.newWindow' })
	.state('menutest.closeWindow', 	{ template: 'menutest.closeWindow' })
	.state('menutest.closeFile', 	{ template: 'menutest.closeFile' })
	.state('menutest.revertFile', 	{ template: 'menutest.revertFile' })
	.state('menutest.closeAllFiles',{ template: 'menutest.closeAllFiles' })
	.state('menutest.undoCut',		{ template: 'menutest.undoCut' })
	.state('menutest.repeatCut',	{ template: 'menutest.repeatCut' })
	.state('menutest.undoSelection',{ template: 'menutest.undoSelection' })
	.state('menutest.copy',			{ template: 'menutest.copy' })
	.state('menutest.cut',			{ template: 'menutest.cut' })
	.state('menutest.paste',		{ template: 'menutest.paste' })
	.state('menutest.pasteAndIndent',{ template: 'menutest.pasteAndIndent' })
	.state('menutest.line',			{ template: 'menutest.line' })
	.state('menutest.comment',		{ template: 'menutest.comment' })
	.state('menutest.text',			{ template: 'menutest.text' })
	.state('menutest.tag',			{ template: 'menutest.tag' })
	.state('menutest.mark',			{ template: 'menutest.mark' })
	.state('menutest.codeFolding',	{ template: 'menutest.codeFolding' })
	.state('menutest.convertCase',	{ template: 'menutest.convertCase' })
	.state('menutest.wrap',			{ template: 'menutest.wrap' })
	.state('menutest.showCompletions',		{ template: 'menutest.showCompletions' })
	.state('menutest.sortLines',			{ template: 'menutest.sortLines' })
	.state('menutest.sortLinesCaseSensitive',{ template: 'menutest.sortLinesCaseSensitive' })
	.state('menutest.permuteLines',			{ template: 'menutest.permuteLines' })
	.state('menutest.permuteSelections',	{ template: 'menutest.permuteSelections' })
	.state('menutest.specialCharacters',	{ template: 'menutest.specialCharacters' })
	.state('menutest.splitIntoLines',		{ template: 'menutest.splitIntoLines' })
	.state('menutest.addPreviousLine',		{ template: 'menutest.addPreviousLine' })
	.state('menutest.addNextLine',			{ template: 'menutest.addNextLine' })
	.state('menutest.singleSelection',		{ template: 'menutest.singleSelection' })
	.state('menutest.selectAll',			{ template: 'menutest.selectAll' })
	.state('menutest.expandSelectionLine',	{ template: 'menutest.expandSelectionLine' })
	.state('menutest.expandSelectionWord',	{ template: 'menutest.expandSelectionWord' })
	.state('menutest.expandSelectionParagraph',{ template: 'menutest.expandSelectionParagraph' })
	.state('menutest.expandSelectionScope',	{ template: 'menutest.expandSelectionScope' })
	.state('menutest.expandSelectionBrackets',{ template: 'menutest.expandSelectionBrackets' })
	.state('menutest.expandSelectionIndentation',{ template: 'menutest.expandSelectionIndentation' })
	.state('menutest.expandSelectionTag',	{ template: 'menutest.expandSelectionTag' });
});

