var obj = {
    "name": "Json",
    "type": "Exchange format",
    "similar types": [
        "XML",
        "YML",
        "CSV"
    ],
    "rating": 10
};

var objStr = JSON.stringify(obj);
console.log(objStr);

var objParse = JSON.parse(objStr);
console.log(objParse);