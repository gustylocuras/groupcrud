const app = angular.module("BikeApp", []);

app.controller("BikeController", [
  "$http",
  function ($http) {
    this.title = "";
    this.image = "";
    this.url = "";

    this.bikes = [];

    // delete bike
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

    //edit bike
    this.editBike = (bike) => {
      $http({
        method: "PUT",
        url: "/bikes/" + bike._id,
        data: {
          title: this.updatedTitle,
        },
      }).then(
        (response) => {
          this.getBikes();
        },
        (error) => {
          console.log(error);
        }
      );
    };

    //create bike
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

    //get bikes
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
    // call bikes on page load
    this.getBikes();
  },
]); // close of controller
