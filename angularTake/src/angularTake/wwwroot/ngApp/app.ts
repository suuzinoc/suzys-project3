namespace AngularTakeTwo { //must create a namespace and name of program
    //crate a new module (the name you are calling it with a comma and [] dependency )
    angular.module(`SuzyModule`, []); //creats a new module and a dependecy array
    //create a controller for our module
    class IndexController { //a controller that is just a class
        public message: string = `Aloha oy!`; // message property string
    }
    //add a referance of the controller of the module need to access the module
    angular.module(`SuzyModule`).controller(`IndexController`, IndexController);
}