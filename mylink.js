const text='[{"name":"Rose", "price":20 , "country":"Germany"}, \
                      {"name":"Azalia", "price":30, "country":"Iran"}]';
                      const myArry=JSON.parse(text);
           function search(){
               let found=false;
            for (i=0; i<myArry.length; i++) {
                if (myArry[i].name.toLowerCase() == document.getElementById('golname').value.toLowerCase() || myArry[i].price == document.getElementById('price').value){ 
                    document.getElementById('demo').innerHTML += '<br>' + myArry[i].name + myArry[i].price + myArry[i].country 
                    found=true;
                }
            }
            if(found==false){ alert('There is not in stock')}
           }
           
           function myfunction (){
            myArry.sort(function(a, b){return b.price - a.price});
               document.getElementById('All prices').innerHTML=JSON.stringify(myArry);
           }
           //var s = '{  "cars": [  {"model":"altima", "year":"2005"}, {"model":"lexus", "year":"2020"}     ]  }'
          
           /*for (i=0; i<myArry.length; i++) {
            document.getElementById('demo').innerHTML += '</br>' + myArry[i].name + myArry[i].price + myArry[i].country 
           }*/
