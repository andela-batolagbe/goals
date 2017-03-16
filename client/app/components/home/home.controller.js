
class HomeController {
  constructor($scope, HomeService) {
    this.scope = $scope;
    this.fs = fs;
    this.goals = [];
    this.service = HomeService;
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

HomeController.$inject = ['$scope', 'HomeService'];

export default HomeController;
