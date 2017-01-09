var SuzyProject;
(function (SuzyProject) {
    angular.module("SuzyProject", []);
    var HomeController = (function () {
        function HomeController() {
            this.message = "My Suzys Project";
        }
        return HomeController;
    }());
    angular.module("SuzyProject").controller("HomeController", HomeController);
})(SuzyProject || (SuzyProject = {}));
