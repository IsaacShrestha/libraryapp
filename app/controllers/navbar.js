import Ember from 'ember';

export default Ember.Controller.extend({
	dropdownOpen: false,

	actions: {

		toggleDropdown() {
			this.toggleProperty('dropdownOpen');
		}

	}//end of action
});
