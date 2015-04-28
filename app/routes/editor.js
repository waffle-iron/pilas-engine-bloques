import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    if (params.idGuardado) {
      return this.store.find('galeria', params.idGuardado);
    } else {
      return this.store.createRecord('galeria', {
          idActividad: params.idActividad,
          nombre: null,
          imagen: null,
          codigo: null,
        });
    }
  },

  setupController: function(controller,model){
	  controller.set('model',model);
	  controller.set('editorSimple', this.controllerFor('application').get('layoutSimple'));
	  controller.set('actividad', this.get('actividades').fromId(model.get('idActividad')));
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
