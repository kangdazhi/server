/**
 * Copyright (c) 2015
 *  Vincent Petry <pvince81@owncloud.com>
 *  Jan-Christoph Borchardt, http://jancborchardt.net
 * This file is licensed under the Affero General Public License version 3 or later.
 * See the COPYING-README file.
 */

/**
 * @namespace
 * @memberOf OC
 */
OC.Login = _.extend(OC.Login || {}, {
	onLogin: function () {
		$('#submit-icon')
			.removeClass('icon-confirm-white')
			.addClass('icon-loading-small');
		$('#submit')
			.attr('value', t('core', 'Logging in …'));
		return true;
	},

	rememberLogin: function(){
		if($(this).is(":checked")){
			if($("#user").val() && $("#password").val()) {
				$('#submit').trigger('click');
			}
		}
	}
});

$(document).ready(function() {
	// The submit icon is positioned on the submit button. From the user point
	// of view the icon is part of the button, so the clicks on the icon have to
	// be redirected to the button.
	$('#submit-icon').click(function() { $('#submit').click(); });
	$('#submit-icon').css('cursor', $('#submit').css('cursor'));

	$('form[name=login]').submit(OC.Login.onLogin);

	$('#remember_login').click(OC.Login.rememberLogin);
});
