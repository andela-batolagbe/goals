
class GoalListService {
  constructor($http, $q) {
    this.http = $http;
    this.q = $q;
  }

  getGoals() {
    this.q((resolve, reject) => {
      this.http({
        method: 'GET',
        url: '../../../goals.json'
      }, (success) => {
        resolve(success);
      },
      (err) => {
        reject(err);
      })
    })
  }
}

GoalListService.$inject = ['$q', '$http'];
export default GoalListService;