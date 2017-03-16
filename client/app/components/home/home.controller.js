class HomeController {
  constructor($scope, HomeService, $state) {
    this.scope = $scope;
    this.goals = [];
    this.service = HomeService;
    this.state = $state;
    this.showAddForm = false;
    this.newGoal = {
      title: '',
      description: '',
      creator: '',
      priority: {},
      dateCreated: ''
    }
    this.priority = [{
      name: 'Important',
      value: 1
    }, {
      name: 'Normal',
      value: 2
    }, {
      name: 'Not important',
      value: 3
    }]
    this.$onInit = () => {
      this.service.getGoals()
        .then((data) => {

          this.goals = data.sort((a, b) => {
            let first = a.priority.value;
            let second = b.priority.value;
            if (first < second) {
              return -1;
            }
            if (first > second) {
              return 1;
            }
            return 0;
          });
        })
        .catch((err) => {
          console.log(err);
        })
    };
  }

  toggleAdd() {
    this.showAddForm = !this.showAddForm;
  }

  create() {
    if (!this.newGoal.title || !this.newGoal.description || !this.newGoal.priority.value || !this.newGoal.creator) {
      this.newGoal.dateCreated = new Date();
      this.newGoal.priority = JSON.parse(this.newGoal.priority);
      this.service.create(this.newGoal)
        .then((data) => {
          this.newGoal = {
            title: '',
            description: '',
            creator: '',
            priority: {},
            dateCreated: ''
          }
          this.state.reload();
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      console.log('Not posted')
    }
  }

}

HomeController.$inject = ['$scope', 'HomeService', '$state'];

export default HomeController;
