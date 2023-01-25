var rs,num;
var squares=[];

async function bubble_sort(){
    var grid=document.querySelector(".grid");
    var timeout=1000;
    rs=document.getElementById("rs").value;
    document.getElementById("rs").value="";
    var num=rs.split(",");




var table=document.createElement('table');
table.classList.add("table","flex-container");
var  tbody=document.createElement('tbody');
var row=document.createElement('tr');
grid.appendChild(table);


  

for(let i=0;i<num.length;i++){

     var column=document.createElement('td');
     column.setAttribute('id',"data"+[i]);
     var text=document.createTextNode(num[i]);
     column.appendChild(text);
     row.appendChild(column);

}
tbody.appendChild(row);
table.appendChild(tbody);








    document.getElementById("rs").disabled = true;
    document.getElementById('calcbtn1').disabled = "disabled";
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    for(let i=0;i<num.length;i++){
        let last=num.length-i-1;
        let maxIndex=0;
        await sleep(500)
        
   //finding max index
   let max=0;
   for(let j=0;j<last+1;j++){
    await sleep(500)
    document.getElementById("data" + [j]).classList.add('exchange');
    if(parseInt(document.getElementById("data" + [j]).innerHTML)>max) {
        max=parseInt(document.getElementById("data" + [j]).innerHTML);
        await sleep(500)
        // console.log(max);
        if(j>0){
            
        document.getElementById("data" + [maxIndex]).classList.remove('exchange');
        }
        maxIndex=j;
        await sleep(350)
       
        
    }
    document.getElementById("data" + [maxIndex]).classList.add('exchange');
    await sleep(300)
    document.getElementById("data" + [j]).classList.remove('exchange');
   }
   document.getElementById("data" + [last]).classList.add('exchange');
   await sleep(500)
   let temp = document.getElementById("data" + [maxIndex]).innerHTML;
   console.log(last);
   document.getElementById("data" + [maxIndex]).innerHTML = document.getElementById("data" + [last]).innerHTML;
   await sleep(500)
   document.getElementById("data" + [last]).innerHTML = temp;
  
   document.getElementById("data" + [last]).classList.remove('exchange');
   document.getElementById("data" + [last]).classList.add('insert');


    }
   

}function cancel(){
    window.location.reload();
   
}