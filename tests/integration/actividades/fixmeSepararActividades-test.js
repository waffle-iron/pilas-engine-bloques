// ESTAS ACTIVIDADES DEBEN SER SEPARADAS EN ARCHIVOS
// Usando por ejemplo elRecolectorDeEstrellas-test.js

// ESTAS ACTIVIDADES DEBEN SER SEPARADAS EN ARCHIVOS
// Usando por ejemplo elRecolectorDeEstrellas-test.js

// ESTAS ACTIVIDADES DEBEN SER SEPARADAS EN ARCHIVOS
// Usando por ejemplo elRecolectorDeEstrellas-test.js

// ESTAS ACTIVIDADES DEBEN SER SEPARADAS EN ARCHIVOS
// Usando por ejemplo elRecolectorDeEstrellas-test.js

// ESTAS ACTIVIDADES DEBEN SER SEPARADAS EN ARCHIVOS
// Usando por ejemplo elRecolectorDeEstrellas-test.js

// ESTAS ACTIVIDADES DEBEN SER SEPARADAS EN ARCHIVOS
// Usando por ejemplo elRecolectorDeEstrellas-test.js

// ESTAS ACTIVIDADES DEBEN SER SEPARADAS EN ARCHIVOS
// Usando por ejemplo elRecolectorDeEstrellas-test.js

// ESTAS ACTIVIDADES DEBEN SER SEPARADAS EN ARCHIVOS
// Usando por ejemplo elRecolectorDeEstrellas-test.js

// ESTAS ACTIVIDADES DEBEN SER SEPARADAS EN ARCHIVOS
// Usando por ejemplo elRecolectorDeEstrellas-test.js

// ESTAS ACTIVIDADES DEBEN SER SEPARADAS EN ARCHIVOS
// Usando por ejemplo elRecolectorDeEstrellas-test.js

// ESTAS ACTIVIDADES DEBEN SER SEPARADAS EN ARCHIVOS
// Usando por ejemplo elRecolectorDeEstrellas-test.js

// ESTAS ACTIVIDADES DEBEN SER SEPARADAS EN ARCHIVOS
// Usando por ejemplo elRecolectorDeEstrellas-test.js

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import Ember from 'ember';
import actividadAlimentandoALosPeces from 'pilas-engine-bloques/actividades/actividadAlimentandoALosPeces';
import actividadLaberintoLargo from 'pilas-engine-bloques/actividades/actividadLaberintoLargo';
import actividadLaberintoCorto from 'pilas-engine-bloques/actividades/actividadLaberintoCorto';
import actividadLaberintoConQueso from 'pilas-engine-bloques/actividades/actividadLaberintoConQueso';
import actividadTresNaranjas from 'pilas-engine-bloques/actividades/actividadTresNaranjas';
import actividadTitoEnciendeLuces from 'pilas-engine-bloques/actividades/actividadTitoEnciendeLuces';
import debeTenerTantosActoresConEtiqueta from '../../helpers/debe-tener-tantos-actores-con-etiqueta';

import actividadAlien from 'pilas-engine-bloques/actividades/actividadAlien';

import Actividad from 'pilas-engine-bloques/actividades/actividad';


moduleForComponent('pilas-editor', 'actividad:VariasFIXME', {
  integration: true,
});



test('puede resolver la actividad alimentando a los peces', function(assert) {
  assert.expect(2);
  var actividad = Actividad.create({actividad: actividadAlimentandoALosPeces});
  var solucion = Ember.Object.create({
    codigoXML: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="al_empezar_a_ejecutar" id="1" deletable="false" movable="false" editable="false" x="0" y="0"><statement name="program"><block type="procedures_callnoreturn" id="109"><mutation name="recoger alimento"></mutation><next><block type="procedures_callnoreturn" id="244"><mutation name="alimentarabajo"></mutation><next><block type="procedures_callnoreturn" id="250"><mutation name="irarriba"></mutation><next><block type="procedures_callnoreturn" id="238"><mutation name="alimentar arriba"></mutation></block></next></block></next></block></next></block></statement></block><block type="local_var_set" id="257" inline="true" x="0" y="0"><field name="VAR">local</field></block><block type="procedures_defnoreturn" id="116" x="240" y="128"><mutation></mutation><field name="NAME">alimentarabajo</field><statement name="STACK"><block type="repetir" id="135" inline="true"><value name="count"><block type="math_number" id="136"><field name="NUM">3</field></block></value><statement name="block"><block type="MoverACasillaDerecha" id="123"><next><block type="AlimentarPez" id="130"></block></next></block></statement></block></statement></block><block type="procedures_defnoreturn" id="144" x="522" y="135"><mutation></mutation><field name="NAME">alimentar arriba</field><statement name="STACK"><block type="repetir" id="190" inline="true"><value name="count"><block type="math_number" id="191"><field name="NUM">3</field></block></value><statement name="block"><block type="AlimentarPez" id="202"><next><block type="MoverACasillaIzquierda" id="209"></block></next></block></statement><next><block type="AlimentarPez" id="232"></block></next></block></statement></block><block type="procedures_defnoreturn" id="9" x="30" y="227"><mutation></mutation><field name="NAME">recoger alimento</field><statement name="STACK"><block type="repetir" id="38" inline="true"><value name="count"><block type="math_number" id="39"><field name="NUM">4</field></block></value><statement name="block"><block type="MoverACasillaDerecha" id="46"></block></statement><next><block type="MoverACasillaArriba" id="53"><next><block type="MoverACasillaArriba" id="64"><next><block type="AgarrarComida" id="71"><next><block type="MoverACasillaAbajo" id="82"><next><block type="MoverACasillaAbajo" id="89"><next><block type="repetir" id="94" inline="true"><value name="count"><block type="math_number" id="95"><field name="NUM">4</field></block></value><statement name="block"><block type="MoverACasillaIzquierda" id="102"></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block><block type="procedures_defnoreturn" id="155" x="274" y="300"><mutation></mutation><field name="NAME">irarriba</field><statement name="STACK"><block type="repetir" id="171" inline="true"><value name="count"><block type="math_number" id="172"><field name="NUM">3</field></block></value><statement name="block"><block type="MoverACasillaArriba" id="179"></block></statement></block></statement></block></xml>',
    nombreDesafio: 'AlimentandoAlosPeces'
  });

  this.set('actividad', actividad);
  this.set('solucion', solucion);
  return new Ember.RSVP.Promise((success) => {

    this.render(hbs`
      {{#pilas-editor ocultarModal=true autoejecutar=true actividad=actividad
                      solucion=solucion}}{{/pilas-editor}}
    `);

    window.addEventListener('terminaCargaInicial', () => {
      debeTenerTantosActoresConEtiqueta(assert, 1, "BuzoAnimado");
    }, false);

    window.addEventListener('terminaEjecucion', () => {
      assert.ok(true,pilas.escena_actual().estaResueltoElProblema());
      success(); // indica que los test finalizan para este desafío.
    }, false);
  });

});

test('puede resolver la actividad tito enciende las luces', function(assert) {
  assert.expect(4);

  var actividad = Actividad.create({actividad: actividadTitoEnciendeLuces});
  var solucion = Ember.Object.create({
    codigoXML: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="al_empezar_a_ejecutar" id="45" deletable="false" movable="false" editable="false" x="0" y="0"><statement name="program"><block type="MoverACasillaArriba" id="115"><next><block type="procedures_callnoreturn" id="59"><mutation name="encender diagonal"></mutation><next><block type="procedures_callnoreturn" id="144"><mutation name="acomodarse en la otra diagonal"></mutation><next><block type="procedures_callnoreturn" id="156"><mutation name="encender diagonal"></mutation></block></next></block></next></block></next></block></statement></block><block type="procedures_defnoreturn" id="56" x="22" y="172"><mutation></mutation><field name="NAME">encender diagonal</field><statement name="STACK"><block type="repetir" id="76" inline="true"><value name="count"><block type="math_number" id="77"><field name="NUM">3</field></block></value><statement name="block"><block type="EncenderLuz" id="65"><next><block type="MoverACasillaDerecha" id="86"><next><block type="MoverACasillaArriba" id="92"></block></next></block></next></block></statement><next><block type="EncenderLuz" id="98"></block></next></block></statement></block><block type="procedures_defnoreturn" id="109" x="22" y="380"><mutation></mutation><field name="NAME">acomodarse en la otra diagonal</field><statement name="STACK"><block type="repetir" id="122" inline="true"><value name="count"><block type="math_number" id="123"><field name="NUM">4</field></block></value><statement name="block"><block type="MoverACasillaAbajo" id="129"></block></statement><next><block type="MoverACasillaIzquierda" id="135"></block></next></block></statement></block></xml>',
    nombreDesafio: 'TitoEnciendeLuces'
  });

  this.set('actividad', actividad);
  this.set('solucion', solucion);

  return new Ember.RSVP.Promise((success) => {

    this.render(hbs`
      {{#pilas-editor ocultarModal=true autoejecutar=true actividad=actividad
                      solucion=solucion}}{{/pilas-editor}}
    `);

    window.addEventListener('terminaCargaInicial', () => {
      debeTenerTantosActoresConEtiqueta(assert, 1, "Robot");
      debeTenerTantosActoresConEtiqueta(assert, 8, "CasillaConLuz");
      //debeTenerTantosActoresConEtiqueta
      //var cantidad_de_tuercas = contarActoresConEtiqueta(window['pilas'], "TuercaAnimada");
      //assert.equal(5, cantidad_de_tuercas, "Tienen que haber 5 tuercas al comenzar.");
    }, false);

    window.addEventListener('terminaEjecucion', () => {
      debeTenerTantosActoresConEtiqueta(assert, 1, "Robot");
      debeTenerTantosActoresConEtiqueta(assert, 8, "CasillaConLuz");

      //var cantidad_de_tuercas = contarActoresConEtiqueta(window['pilas'], "TuercaAnimada");
      //assert.equal(0, cantidad_de_tuercas, "No tienen que haber tuercas al finalizar");

      success(); // indica que los test finalizan para este desafío.
    }, false);
});
});

test('puede resolver la actividad laberinto corto', function(assert) {
  assert.expect(2);

  var actividad = Actividad.create({actividad: actividadLaberintoCorto});
  var solucion = Ember.Object.create({
    codigoXML: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="al_empezar_a_ejecutar" id="1" deletable="false" movable="false" editable="false" x="0" y="0"><statement name="program"><block type="sino" id="9" inline="true"><value name="condition"><block type="TocandoAbajo" id="14"></block></value><statement name="block1"><block type="MoverACasillaAbajo" id="17"></block></statement><statement name="block2"><block type="MoverACasillaDerecha" id="4"></block></statement></block></statement></block></xml>',
    nombreDesafio: 'LaberintoCorto'
  });

  this.set('actividad', actividad);
  this.set('solucion', solucion);


  return new Ember.RSVP.Promise((success) => {

    this.render(hbs`
      {{#pilas-editor ocultarModal=true autoejecutar=true actividad=actividad
                      solucion=solucion}}{{/pilas-editor}}
    `);

    window.addEventListener('terminaCargaInicial', () => {
      debeTenerTantosActoresConEtiqueta(assert, 1, "RatonAnimado");
      //debeTenerTantosActoresConEtiqueta
      //var cantidad_de_tuercas = contarActoresConEtiqueta(window['pilas'], "TuercaAnimada");
      //assert.equal(5, cantidad_de_tuercas, "Tienen que haber 5 tuercas al comenzar.");
    }, false);

    window.addEventListener('terminaEjecucion', () => {
      assert.ok(true,pilas.escena_actual().estaResueltoElProblema());


      //var cantidad_de_tuercas = contarActoresConEtiqueta(window['pilas'], "TuercaAnimada");
      //assert.equal(0, cantidad_de_tuercas, "No tienen que haber tuercas al finalizar");

      success(); // indica que los test finalizan para este desafío.
    }, false);
  });


});


test('puede resolver la actividad laberinto largo', function(assert) {
  assert.expect(2);

  var actividad = Actividad.create({actividad: actividadLaberintoLargo});
  var solucion = Ember.Object.create({
    codigoXML: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="al_empezar_a_ejecutar" id="1" deletable="false" movable="false" editable="false" x="0" y="0"><statement name="program"><block type="hasta" id="5" inline="true"><value name="condition"><block type="TocandoFinCamino" id="9"></block></value><statement name="block"><block type="si" id="19" inline="true"><value name="condition"><block type="TocandoAbajo" id="29"></block></value><statement name="block"><block type="MoverACasillaAbajo" id="36"></block></statement><next><block type="si" id="50" inline="true"><value name="condition"><block type="TocandoDerecha" id="57"></block></value><statement name="block"><block type="MoverACasillaDerecha" id="40"></block></statement></block></next></block></statement></block></statement></block></xml>',
    nombreDesafio: 'LaberintoLargo'
  });

  this.set('actividad', actividad);
  this.set('solucion', solucion);

  /* Como la tarea de ejecutar el código completo de la solución demora
   * tiempo, retorno una promesa para que ember espere a que finalice.
   * La promesa termina con la llamada a sucess.
   */
  return new Ember.RSVP.Promise((success) => {

    this.render(hbs`
      {{#pilas-editor ocultarModal=true autoejecutar=true actividad=actividad
                      solucion=solucion}}{{/pilas-editor}}
    `);

    window.addEventListener('terminaCargaInicial', () => {
      debeTenerTantosActoresConEtiqueta(assert, 1, "RatonAnimado");
      //debeTenerTantosActoresConEtiqueta
      //var cantidad_de_tuercas = contarActoresConEtiqueta(window['pilas'], "TuercaAnimada");
      //assert.equal(5, cantidad_de_tuercas, "Tienen que haber 5 tuercas al comenzar.");
    }, false);

    window.addEventListener('terminaEjecucion', () => {
      assert.ok(true,pilas.escena_actual().estaResueltoElProblema());


      //var cantidad_de_tuercas = contarActoresConEtiqueta(window['pilas'], "TuercaAnimada");
      //assert.equal(0, cantidad_de_tuercas, "No tienen que haber tuercas al finalizar");

      success(); // indica que los test finalizan para este desafío.
    }, false);
  });

});
test('puede resolver la actividad laberinto con queso', function(assert) {
  assert.expect(2);

  var actividad = Actividad.create({actividad: actividadLaberintoConQueso});
  var solucion = Ember.Object.create({
    codigoXML: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="al_empezar_a_ejecutar" id="1" deletable="false" movable="false" editable="false" x="0" y="0"><statement name="program"><block type="hasta" id="51" inline="true"><value name="condition"><block type="TocandoFinCamino" id="61"></block></value><statement name="block"><block type="si" id="74" inline="true"><value name="condition"><block type="tocandoQueso" id="79"></block></value><statement name="block"><block type="ComerQueso" id="92"></block></statement><next><block type="sino" id="14" inline="true"><value name="condition"><block type="TocandoAbajo" id="26"></block></value><statement name="block1"><block type="MoverACasillaAbajo" id="30"></block></statement><statement name="block2"><block type="MoverACasillaDerecha" id="38"></block></statement></block></next></block></statement></block></statement></block></xml>',
    nombreDesafio: 'LaberintoConQueso'
  });

  this.set('actividad', actividad);
  this.set('solucion', solucion);

  /* Como la tarea de ejecutar el código completo de la solución demora
   * tiempo, retorno una promesa para que ember espere a que finalice.
   * La promesa termina con la llamada a sucess.
   */
  return new Ember.RSVP.Promise((success) => {

    this.render(hbs`
      {{#pilas-editor ocultarModal=true autoejecutar=true actividad=actividad
                      solucion=solucion}}{{/pilas-editor}}
    `);

    window.addEventListener('terminaCargaInicial', () => {
      debeTenerTantosActoresConEtiqueta(assert, 1, "RatonAnimado");
      //debeTenerTantosActoresConEtiqueta
      //var cantidad_de_tuercas = contarActoresConEtiqueta(window['pilas'], "TuercaAnimada");
      //assert.equal(5, cantidad_de_tuercas, "Tienen que haber 5 tuercas al comenzar.");
    }, false);

    window.addEventListener('terminaEjecucion', () => {

      assert.ok(true,pilas.escena_actual().estaResueltoElProblema());


      //var cantidad_de_tuercas = contarActoresConEtiqueta(window['pilas'], "TuercaAnimada");
      //assert.equal(0, cantidad_de_tuercas, "No tienen que haber tuercas al finalizar");

      success(); // indica que los test finalizan para este desafío.
    }, false);
  });

});
test('puede resolver la actividad tres naranjas', function(assert) {
  assert.expect(2);

  var actividad = Actividad.create({actividad: actividadTresNaranjas});
  var solucion = Ember.Object.create({
    codigoXML: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="al_empezar_a_ejecutar" id="1" deletable="false" movable="false" editable="false" x="0" y="0"><statement name="program"><block type="repetir" id="8" inline="true"><value name="count"><block type="math_number" id="9"><field name="NUM">3</field></block></value><statement name="block"><block type="MoverACasillaDerecha" id="12"><next><block type="si" id="17" inline="true"><value name="condition"><block type="TocandoNaranja" id="19"></block></value><statement name="block"><block type="ComerNaranja" id="22"></block></statement></block></next></block></statement></block></statement></block></xml>',
    nombreDesafio: 'TresNaranjas'
  });
  this.set('actividad', actividad);
  this.set('solucion', solucion);
  return new Ember.RSVP.Promise((success) => {
    this.render(hbs`
      {{#pilas-editor ocultarModal=true autoejecutar=true actividad=actividad
                      solucion=solucion}}{{/pilas-editor}}
    `);
    window.addEventListener('terminaCargaInicial', () => {
      debeTenerTantosActoresConEtiqueta(assert, 1, "MarcianoAnimado");
    }, false);

    window.addEventListener('terminaEjecucion', () => {
      assert.ok(true,pilas.escena_actual().estaResueltoElProblema());
      success();
    }, false);
  });

});