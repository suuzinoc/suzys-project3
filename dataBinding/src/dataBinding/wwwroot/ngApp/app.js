var DataBindingApp;
(function (DataBindingApp) {
    angular.module("DataBindingModule", []);
    var HomeController = (function () {
        function HomeController() {
        }
        HomeController.prototype.addNums = function () {
            this.result = parseInt(this.num1) + parseInt(this.num2);
        };
        HomeController.prototype.subNums = function () {
            this.result = parseInt(this.num1) - parseInt(this.num2);
        };
        HomeController.prototype.multiNums = function () {
            this.result = parseInt(this.num1) * parseInt(this.num2);
        };
        HomeController.prototype.divNums = function () {
            if (this.num2 == "0") {
                alert('cannot divide by zero');
            }
            else {
                this.result = parseInt(this.num1) / parseInt(this.num2);
            }
        };
        HomeController.prototype.displayOutput = function () {
            this.output = this.message;
        };
        return HomeController;
    }());
    angular.module("DataBindingModule").controller("HomeController", HomeController);
})(DataBindingApp || (DataBindingApp = {}));
