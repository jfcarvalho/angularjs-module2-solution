(function () {
'use strict'


angular.module('ShoppingListCheckOff', [])
.controller('AlreadyBoughtController', AlreadyBoughtController)
.controller('ToBuyShoppingController', ToBuyShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
;

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController (ShoppingListCheckOffService)
{
  var BoughtItems = this;

  try {
  	BoughtItems.items = ShoppingListCheckOffService.BoughtList.getItems();
  	} catch (error) {
  		BoughtItems.errorMessage = error.message;
  	}


}

function ToBuyShoppingController (ShoppingListCheckOffService)
{
  var toBuyItems = this;
    toBuyItems.items = ShoppingListCheckOffService.toBuyList.getItems();

    toBuyItems.checkItem = function(index)
    {
      try {
        ShoppingListCheckOffService.checkItem(index);
		}   catch (error) {
			     toBuyItems.errorMessage = error.message;
		  }
    }
}



function ShoppingListCheckOffService() {
  var service = this;

  service.toBuyList = [{
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

service.BoughtList = [];


var items = [];

service.addItem = function(name, quantity) {
  var item = {name: name, quantity: quantity};
  service.BoughtList.push(item);
};

service.checkItem = function(index)
{
  var item = service.toBuyList[index];
  service.addItem(item.name, item.quantity);
  service.toBuyList.splice(index, 1);
  if(service.toBuyList.length ==0)
  {
    throw new Error("Everything is bought!!");
  }
};

service.toBuyList.getItems = function() {return service.toBuyList;}
service.BoughtList.getItems = function() {
  if(service.BoughtList.lenght != false)
  {
    return service.BoughtList;
  }
  else
  {
    throw new Error("Nothing bought yer");
  }
}

}

})();(function () {
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

<<<<<<< HEAD
service.toBuyList.getItems = function() {return service.toBuyList;}
service.BoughtList.getItems = function() {
  if(service.BoughtList.lenght)
  {
    return service.BoughtList;
  }
  else
  {
    throw new Error("Nothing bought yet");
  }
}
=======
angular.module('Assignment2', [])
>>>>>>> parent of 2dae9b5... Terminado

.controller('BuyShoppingListController', BuyShoppingListController);
BuyShoppingListController.$inject = ['$scope'];
function BuyShoppingListController ($scope) {
  $scope.toBuyList = toBuyList;
}



})();
