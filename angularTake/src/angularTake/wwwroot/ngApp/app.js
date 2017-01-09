var AngularTakeTwo;
(function (AngularTakeTwo) {
    //crate a new module (the name you are calling it with a comma and [] dependency )
    angular.module("SuzyModule", []); //creats a new module and a dependecy array
    //create a controller for our module
    var IndexController = (function () {
        function IndexController() {
            this.message = "Aloha oy!"; // message property string
        }
        return IndexController;
    }());
    //add a referance of the controller of the module need to access the module
    angular.module("SuzyModule").controller("IndexController", IndexController);
})(AngularTakeTwo || (AngularTakeTwo = {}));
