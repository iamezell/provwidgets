var Backbone = require('backbone');
// var landingView = require('./views/landingView')

var AppRouter = Backbone.Router.extend({
    routes : {
    	'' : 'home'
    }
});

var initialize = function(){
	var app_router = new AppRouter;


    // app_router.on('route:home', function(){
    //   // Call render on the module we loaded in via the dependency array
    //   // 'views/projects/list'
    //   Need.Views.landingView = new LandingView();
    //   console.log("in landing");
    //   // Need.Views.landingView.render();
      
    // });
}


module.exports = AppRouter;