export default Ember.Helper.helper(function(params) {
	let text = params[0];
	return  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
});