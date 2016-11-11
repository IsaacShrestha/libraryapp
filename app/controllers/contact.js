import Ember from 'ember';

export default Ember.Controller.extend({
	senderEmail: '',
	message: '',

	

	isDisabled: Ember.computed.empty('senderEmail');
});
