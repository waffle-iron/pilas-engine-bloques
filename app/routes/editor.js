import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller,model){
	  controller.set('model',model);
	  controller.set('editorSimple',this.controllerFor('application').get('layoutSimple'));
  },
  model: function(params) {
    if (params.galeria_id !== 'new') {
      return this.store.find('galeria', params.galeria_id);
    } else {
      return null;
    }
  },
  actions: {
    willTransition: function(transition) {
      var b = this.controllerFor('editor').debeGuardar();
      if (b) {
        transition.abort();
        this.controllerFor('editor').send('guardar');
      } else {
        // Bubble the `willTransition` action so that
        // parent routes can decide whether or not to abort.
        return true;
      }
    }
  }

});
