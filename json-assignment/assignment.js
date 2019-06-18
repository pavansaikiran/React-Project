const fs = require('fs');
const _ = require('lodash');
let data = fs.readFileSync('./Downloads/data.json');
let  text = JSON.parse(data);
output(text);
function output(text)   {
    var dataarray = [];
    var obj = _.groupBy(text,function(d){
        var t = new Date(d["time"]);
        delete d["time"];
        return t.getMonth("MM")+1+"/"+t.getDate();
    });
    //console.log(obj);
    for(var key in obj){
         var daydata = obj[key].reduce(function(daydata,d){

            var value = 0;
            for(var k in d["values"]){
                var group = k;
                value = d["values"][k];
                
                if(!daydata[group]) {
                    daydata[group] = {};
                    daydata[group]["val"] = value;
                    daydata[group]["count"] = (daydata[group]["count"] | 0) + 1;
                }
                else {
                    daydata[group]["val"]+=value;
                    daydata[group]["count"]+=1;
                }
            }
            daydata["values"] = {};
            for(var p in daydata){
                if(p!="values")
                daydata["values"][p] = daydata[p]["val"]/daydata[p]["count"];
            }
            return daydata;
        },{});
        for(var k in daydata){
            daydata["day"] = key;
            if(k!="values"){
                delete daydata[k];
            }
        }
        dataarray.push(daydata)
        
    }
    console.log(dataarray)
  
    }
        
   


