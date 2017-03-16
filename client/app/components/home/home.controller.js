
class HomeController {
  constructor($scope, HomeService) {
    this.scope = $scope;
    this.goals = [];
    this.service = HomeService;
    this.$onInit = () => {
    this.service.getGoals()
    .then((data) => {
      this.goals = data;
    })
    .catch((err) => {
      console.log(err);
    })
  };
  }

}

HomeController.$inject = ['$scope', 'HomeService'];

export default HomeController;
