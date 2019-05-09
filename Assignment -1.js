const csv = require('csv-parser')
const fs = require('fs')
var obj=[];
 
fs.createReadStream('customer-data.csv')
  .pipe(csv())
  .on('data', (data) => obj.push(data))
  .on('end', () => {
     // console.log(obj);
    var json=JSON.stringify(obj);
   
     var result=json.split(",").join(",\n");
     fs.writeFile('customer-data.json',result,(err)=>
   {
       if(err)
       console.log(err);
       console.log('successful returned !!');
    });
     console.log(result);

  });

