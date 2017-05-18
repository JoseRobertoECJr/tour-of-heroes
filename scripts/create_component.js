var fs = require('fs');

function createComponent(componentName){

    //defining dirname
    var dirname = "./src/app/components/";

    //creating componentClassName
    var componentClassName = "";
    var arrayClassName = componentName.split("");


    arrayClassName[0] = arrayClassName[0].toUpperCase();
    for(i=0; i < arrayClassName.length; i++){

        if(arrayClassName[i] === "-"){
            i++;
            arrayClassName[i] = arrayClassName[i].toUpperCase();
        }
        componentClassName = componentClassName + arrayClassName[i];
    }

    //making directory for my-component
    fs.mkdirSync(dirname + componentName);

    //creating all files for my-component
    fs.writeFile(dirname + componentName + "/" + componentName + ".component.html",
                 "<h2>{{title}}</h2>",
                 function(err){ if(err){ return console.log(err) } console.log(componentName + ".component.html created."); }
    );

    fs.writeFile(dirname + componentName + "/" + componentName + ".component.css",
`h1{
    color: blue;
}`,
                 function(err){ if(err){ return console.log(err) } console.log(componentName + ".component.css created."); }
    );

    fs.writeFile(dirname + componentName + "/" + componentName + ".component.ts",
`import { Component } from '@angular/core';

@Component({
    selector: '`+ componentName +`',
    styleUrls: ['./`+ componentName +`.component.css'],
    templateUrl: './`+ componentName +`.component.html',
})

export class `+ componentClassName +`Component{
    title: string = "`+ componentName +`";
}`,
                 function(err){ if(err){ return console.log(err) } console.log(componentName + ".component.ts created."); }
    );
}

createComponent(process.argv[2]);
