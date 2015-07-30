;(function($){
  $(function(){
	var def = function() {
		app.options = {};

		// setup touch for mobile
		app.options.uAgent = navigator.userAgent;
    app.options.interaction = app.options.uAgent.match(/(iPad|iPhone|iPod)/g) ? "touchstart" : "click";

		init.call(this);
	};

	var init = function(){
		this.tester();
	};

	def.prototype = {
		tester: function() {
			testing();
		}
	};

	return def;
  });
}(jQuery));
