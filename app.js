const express = require("express");
const bodyParser = require("body-parser");
const { use } = require("express/lib/application");
const app =express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    
    var today = new Date();
    var currentDay = today.getDay();
    var day=""
    switch(currentDay){
        case 0:
            day="DIMANCHE";
            break;
            case 1:
                d="LUNDI";
                break;
                case 2:
                    day="MARDI";
                    break;
                    case 3:
                        day="MERCREDI";
                        break;
                        case 4:
                            day="jeudi";
                            break;
                            case 5:
                                day="vendredi";
                                break;
                                case 6:
                                    day:"samedi"
                                    break;
                                    default:

            

                        

    }


    res.render("list",{wday:day})

});

    




app.listen(3000,function(){
    console.log("the server is running sucess full")
});
