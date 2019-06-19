const fs = require('fs');
var data = fs.readFileSync('data.json');
var text = JSON.parse(data);
output(text);
function output(text){
    var daygrp = text.reduce(function(obj,curr){
        var t = new Date(curr["time"]);
        var group = (t.getMonth()+1)+"/"+t.getDate();
        for(var key in curr["values"]){
            obj[group] = (obj[group] || {});
            obj[group][key] = (obj[group][key] || {});
            obj[group][key]["val"] = (obj[group][key]["val"] || 0) + curr["values"][key];
            obj[group][key]["cnt"] = (obj[group][key]["cnt"] || 0) + 1;
            obj[group][key]["avg"] = (obj[group][key]["val"])/(obj[group][key]["cnt"]);
        }
        return obj;
    },{});
    var dataarray = [];
    for(var key in daygrp){
        var x = {};
        x["day"] = key;
        x["values"] = {};
        for(var k in daygrp[key]){
            x["values"][k] = daygrp[key][k]["avg"];
        }
        dataarray.push(x);
    }
    console.log(dataarray);
    return dataarray;
}
