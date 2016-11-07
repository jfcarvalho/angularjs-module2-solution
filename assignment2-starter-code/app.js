(function () {
'use strict'

var toBuyList = [{
    name:"Apple",
    quantity: "5"
},
{
name: "Banana" ,
quantity: "13"
},
{
name: "Coconut",
quantity: "4"
},
{
name: "Donuts",
quantity: "3"
},
{
name: "Cookies",
quantity: "6"
}];

angular.module('Assignment2', [])

.controller('BuyShoppingListController', BuyShoppingListController);
BuyShoppingListController.$inject = ['$scope'];
function BuyShoppingListController ($scope) {
  $scope.toBuyList = toBuyList;
}



})();
