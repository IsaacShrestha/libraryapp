import Ember from 'ember';

export default Ember.Controller.extend({
	senderEmail: '',
	senderMessage: '',

	
	isValidEmail: Ember.computed.match('senderEmail', /^.+@.+\..+$/),
	isMessageEnoughLong: Ember.computed.gte('senderMessage.length', 5),
	isDisabled: Ember.computed.not('isMessageEnoughLong'), //not able to validate more than one field

	actions: {
		receiveMessage: function(){
			alert('Your message with e-mail address '+this.get('senderEmail')+' received');
			this.set('responseMessage', 'Receieved message successfully with e-mail address '+this.get('senderEmail'));
			this.set('senderEmail', '');
			this.set('senderMessage', '');
		}
	}

	
});
