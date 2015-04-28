import DS from 'ember-data';

export default DS.Model.extend({
  idActividad: DS.attr('string'),
  nombre: DS.attr('string'),
  codigo: DS.attr('string'),
  imagen: DS.attr('string'),
});
