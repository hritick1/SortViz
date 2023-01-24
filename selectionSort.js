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




    

}