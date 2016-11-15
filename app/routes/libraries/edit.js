import Ember from 'ember';

export default Ember.Route.extend({

	model(params) {
		return this.store.findRecord('library', params.library_id);
	},

	actions: {

		saveLibrary(newLibrary) {
			newLibrary.save().then( ()=> this.transitionTo('libraries') );
		},

		willTransition(transition) { //transition is a variable which is initiated as a param here, ember automatically provides this

			let model = this.controller.get('model');

			if(model.get('hasDirtyAttributes')) { //hasDirtyAttributes is computed property to check whether something was changed in the model
				let confirmation = confirm("Your changes are not saved. Would you like to leave this form?");

				if(confirmation) {
					model.rollbackAttributes();
				} else{
					transition.abort();
				}
			}
		}
	}
});