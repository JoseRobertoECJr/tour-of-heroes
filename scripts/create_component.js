var fs = require('fs');

function createComponent(componentName){

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
    fs.mkdirSync("./src/app/components/" + componentName);

    //creating all files for my-component
    fs.writeFile("./src/app/components/" + componentName + "/" + componentName + ".component.html",
                 "<h1>{{title}}</h1>",
                 function(err){ if(err){ return console.log(err) } console.log(componentName + "component.html created."); }
    );

    fs.writeFile("./src/app/components/" + componentName + "/" + componentName + ".component.css",
`h1{
    color: blue;
}`,
                 function(err){ if(err){ return console.log(err) } console.log(componentName + "component.css created."); }
    );

    fs.writeFile("./src/app/components/" + componentName + "/" + componentName + ".component.ts",
`import { Component } from '@angular/core';

@Component({
    selector: '`+ componentName +`',
    styleUrls: ['./`+ componentName +`.component.css'],
    templateUrl: './`+ componentName +`.component.html',
})

export class `+ componentClassName +`Component{
    title: string = "`+ componentName +`";
}`,
                 function(err){ if(err){ return console.log(err) } console.log(componentName + "component.ts created."); }
    );
}

createComponent(process.argv[2]);
