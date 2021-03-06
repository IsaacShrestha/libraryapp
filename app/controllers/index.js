import Ember from 'ember';

export default Ember.Controller.extend({
	

	emailAddress: '',
	responseMessage: '',
	/*isDisabled: Ember.computed('emailAddress', function(){
		return this.get('emailAddress') === '';
	}),*/

	isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isDisabled: Ember.computed.not('isValid'),

	actualEmailAddress: Ember.computed('emailAddress', function(){
		console.log('actualEmailAddress function is called', this.get('emailAddress'));
	}),

	emailAddressChanged: Ember.computed('emailAddress', function(){
		console.log('observer is called', this.get('emailAddress'));
	}),

	actions: {
		saveInvitation() {
			//alert('Saving:'+this.get('emailAddress'));

			const email = this.get('emailAddress');

			const newInvitation = this.store.createRecord('invitation', {email: email});
			newInvitation.save().then((response)=>{
				this.set('responseMessage', 'Thank you! we have saved your email address with the id:' + response.get('id'));
				this.set('emailAddress', '');
			});
		}

		
	}
	
});
