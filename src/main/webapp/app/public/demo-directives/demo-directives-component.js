
var module = angular.module('mpApp.public');


module.component('demoDirectivesComponent', {
    templateUrl: 'app/public/demo-directives/demo-directives.html',
    bindings:{
        view:"@"
    },
    controller: function () {
        this.staticjvmlanguages = [
            {name:'Java', homepage: 'https://go.java', birthday: new Date(1995, 05, 23, 01, 01, 01),
                logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/419px-Java_programming_language_logo.svg.png' },
            {name:'Kotlin', homepage: 'https://kotlinlang.org/', birthday: new Date(2011, 05, 23, 01, 01, 01),
                logo: 'https://kotlinlang.org/assets/images/open-graph/kotlin_250x250.png' },
            {name:'Ceylon', homepage: 'https://ceylon-lang.org/', birthday: new Date(2011, 05, 23, 01, 01, 01),
                logo: '' },
            {name:'Clojure', homepage: 'https://clojure.org/', birthday: new Date(2007, 05, 23, 01, 01, 01),
                logo: '' },
            {name:'Scala', homepage: 'https://www.scala-lang.org/', birthday: new Date(2004, 01, 20, 01, 01, 01),
                logo: '' }];

        this.dynamicjvmlanguages = ['JRuby', 'Groovy', 'Jyton', 'Mirah', 'JavaScript'];

        this.favoritelang = 'Java';

        this.static = true;
    }
});