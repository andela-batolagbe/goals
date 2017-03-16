
class HomeService {
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

HomeService.$inject = ['$q', '$http'];
export default HomeService;