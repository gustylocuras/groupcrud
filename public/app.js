const app = angular.module("MyApp", []);

app.controller("BikeController", [
  "$http",
  function ($http) {
    this.title = "";
    this.image = "";
    this.url = "";
    this.bikes = [];

    this.deleteBike = (bike) => {
      $http({
        method: "DELETE",
        url: "/bikes/" + bike._id,
      }).then(
        (response) => {
          this.getBikes();
        },
        (err) => {
          console.log(err);
        }
      );
    };

    this.createBike = () => {
      $http({
        method: "POST",
        url: "/bikes",
        data: {
          title: this.title,
          image: this.image,
          url: this.url,
        },
      }).then(
        (response) => {
          this.bikes.unshift(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    };

    this.getBikes = () => {
      $http({
        method: "GET",
        url: "/bikes",
      }).then(
        (response) => {
          console.log(response);
          this.bikes = response.data;
        },
        (err) => {
          console.log(err);
        }
      );
    };
    this.getBikes();
  },
]); // close of controller
