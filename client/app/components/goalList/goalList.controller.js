
class GoalListController {
  constructor($scope, GoalListService) {
    this.scope = $scope;
    this.fs = fs;
    this.goals = [];
    this.service = GoalListService;
  }

  onInit() {
    this.service.getGoals()
    .then((data) => {
      console.log(data)
      this.goals = data;
    })
    .catch((err) => {
      console.log(err);
    })
  };

}

GoalListController.$inject = ['$scope', 'GoalListService'];

export default GoalListController;
