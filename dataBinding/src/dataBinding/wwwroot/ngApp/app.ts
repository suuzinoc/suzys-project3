namespace DataBindingApp {
    angular.module(`DataBindingModule`, []);

    class HomeController {
        public message: string;
        public output: string;

        //addNums
        public num1: string;
        public num2: string;
        public result: number;


        addNums() {
            this.result = parseInt(this.num1) + parseInt(this.num2);
        }
        subNums() {
            this.result = parseInt(this.num1) - parseInt(this.num2);
        }
        multiNums() {
            this.result = parseInt(this.num1) * parseInt(this.num2);
        }
        divNums() {
            if (this.num2 == "0") {
                alert('cannot divide by zero');
            } else {
                this.result = parseInt(this.num1) / parseInt(this.num2);
            }
        }
            displayOutput() {
                this.output = this.message;
            }
        }
   
    angular.module(`DataBindingModule`).controller(`HomeController`, HomeController);
}
        