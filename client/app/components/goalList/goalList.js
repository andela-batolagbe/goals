import angular from 'angular';
import uiRouter from 'angular-ui-router';
import goalListComponent from './goalList.component';
import GoalListService from './goalList.service';

let goalListModule = angular.module('goalList', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('goalList', {
      url: '/',
      component: 'goalList'
    });
})

.component('goalList', goalListComponent)
.service('GoalListService', GoalListService)

.name;

export default goalListModule;
