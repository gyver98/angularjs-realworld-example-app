import angular from 'angular';

let componentsModule = angular.module('app.components', []);

// Components
import ListErrors from './list-errors.component';
componentsModule.component('listErrors', ListErrors);


export default componentsModule;
