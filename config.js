/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';

    config.filebrowserBrowseUrl = '/phpk5/ckfinder/ckfinder.html';

    config.filebrowserImageBrowseUrl = '/phpk5/ckfinder/ckfinder.html?type=Images';

    config.filebrowserUploadUrl = '/phpk5/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files';

    config.filebrowserImageUploadUrl = '/phpk5/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images';
};
