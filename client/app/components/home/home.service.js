
class HomeService {
  constructor($q, $http) {
    this.$q = $q;
    this.$http = $http;
  }

  getGoals() {
    return this.$q((resolve, reject) => {
      this.$http({
        url: '../../../goals.json',
        method: 'GET'
      })
      .then((response) => {
        resolve(response.data);
        },
        (response) => {
          reject(response.data);
      });
    })
  }
  create(data) {
    return this.$q((resolve, reject) => {
      this.$http({
        url: '/create',
        method: 'POST',
        data: { goal: data }
      })
      .then((response) => {
        resolve(response.data);
        },
        (response) => {
          reject(response.data);
      });
    })
  }
};

HomeService.$inject = ['$q', '$http'];

export default HomeService;