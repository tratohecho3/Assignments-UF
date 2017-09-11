angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push({"code":$scope.code1,"name":$scope.name1,"coordinates":{"latitude":$scope.latitude1,"longitude":$scope.longitude1},"address":$scope.address1});
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
    };
    $scope.showDetails = function(index) {
      $scope.detailInformation = true;
      $scope.objectCode = $scope.listings[index].code;
      $scope.objectName = $scope.listings[index].name;
      $scope.objectLatitude = $scope.listings[index].coordinates.latitude;      
      $scope.objectLongitude = $scope.listings[index].coordinates.longitude; 
      $scope.objectAddress = $scope.listings[index].address;       
    };
  }
]);