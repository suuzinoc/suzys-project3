namespace SuzyProject {

    angular.module(`SuzyProject`, []);

    class HomeController {

        public message: string = `My Suzys Project`;
    }
    angular.module(`SuzyProject`).controller(`HomeController`, HomeController);
}