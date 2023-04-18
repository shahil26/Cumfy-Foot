// var product = document.getElementById('product-1');
// var cost = document.getElementById('cost-1');
// var size =document.getElementById('size-1');
// var color = document.getElementById('color-1');
// product.textContent = localStorage.getItem("product");
// cost.textContent = localStorage.getItem("cost");
// size.textContent = localStorage.getItem("size");
// color.textContent = localStorage.getItem("color");
// var new_tr = document.getElementById('cloneable').cloneNode(true);
// k = localStorage.getItem("size");
// new_tr.id = "notcloneable"+(k++);
// new_tr.style.display = "table-row";
// var table = document.getElementById('cart-table');
// table.appendChild(new_tr);
// console.log(new_tr);
// console.log(table.childNodes);
// 
// console.log(product.parentElement.parentElement.parentElement.parentElement.parentElement);
// while (table.lastChild.previousSibling.previousSibling){
//     table.removeChild(table.lastChild);
// }
// // console.log(document.getElementById('cloneable'));

// console.log(new_tr);



// document.getElementById('product-1').id = "notcloneable"+(k++);
// document.getElementById('cost-1').id = "notcloneable"+(k++);
// document.getElementById('size-1').id = "notcloneable"+(k++);
// document.getElementById('color-1').id = "notcloneable"+(k++);
// 
// var table_body = document.getElementById('add-row');
// if(localStorage.getItem("clone") && localStorage.getItem("k")){
//     var table_body = document.getElementById('add-row');
//     var string = localStorage.getItem("clone");
//     var new_array = JSON.parse(string);
//     while (table_body.lastChild.previousSibling) {
//         table_body.removeChild(table_body.lastChild);
//     }
//     console.log(string);
//     for(var i =0;i<new_array.length;i++){
//         table_body.appendChild(new_array[i]);
//     }
//     var k = Number.parseInt(localStorage.getItem("k"))+1;
//     new_array[k] = new_tr;
//     var string = JSON.stringify(new_array);
//     localStorage.setItem("k",k);
//     localStorage.setItem("clone",string);
//     table_body.appendChild(new_tr);
//     table_body.appendChild(new_tr);
//     console.log(table_body.children);
//     table_body.removeChild(table_body.lastChild);
// }
// else{
//     var k=0;
//     var array = [];
//     array[k] = new_tr;
//     console.log(array);
//     var string = JSON.stringify(array);
//     console.log(string);
//     localStorage.setItem("k",k);
//     localStorage.setItem("clone",string);
//     console.log(localStorage.getItem("clone"));
//     var table_body = document.getElementById('add-row');
//     table_body.appendChild(new_tr);
//     console.log(table_body.children);
// }
// localStorage.removeItem("clone");
// localStorage.removeItem("k");
// table_body.removeChild(table_body.lastChild);

var tr = document.createElement('tr');
var td1 = document.createElement('td');
var td2 = document.createElement('td');
td2.className = "text-center";
var td3 = document.createElement('td');
td3.className = "text-center text-lg text-medium";
// td3.id = "cost-1";
td3.textContent = localStorage.getItem("cost");
var td4 = document.createElement('td');
td4.className = "text-center text-lg text-medium";
td4.textContent = "$18.00";
var td5 = document.createElement('td');
td5.className = "text-center";

var div1 = document.createElement('div');
div1.className = "product-item";


var a1 = document.createElement('a');
a1.className = "product-thumb";
a1.href = "#";

var img = document.createElement('img');
img.src = "https://www.bootdey.com/image/220x180/FF0000/000000";
img.alt = "Product";

var inner_div = document.createElement('div');
inner_div.className = "product-info";

var h4 = document.createElement('h4');
h4.className = "product-title";

var a2 = document.createElement('a');
// a2.id = "product-1";
a2.href = "#";
a2.innerText = localStorage.getItem("product");

var span1 = document.createElement('span');
var em1 = document.createElement('em');
em1.textContent = "Size:";

var span2 = document.createElement('span');
// span2.id = "size-1";
span2.style.display = "inline";
span2.textContent = localStorage.getItem("size");

var span3 = document.createElement('span');
var em2 = document.createElement('em');
em2.textContent = "Color:";

var span4 = document.createElement('span');
// span3.id = "color-1";
span4.style.display = "inline";
span4.textContent = localStorage.getItem("color");

var div2 = document.createElement('div');
div2.className = "count-input";

var select = document.createElement('select');
select.className = "form-control";

var option1 = document.createElement('option');
option1.innerText = "1";
var option2 = document.createElement('option');
option2.innerText = "2";
var option3 = document.createElement('option');
option3.innerText = "3";
var option4 = document.createElement('option');
option4.innerText = "4";
var option5 = document.createElement('option');
option5.innerText = "5";


var a3 = document.createElement('a');
a3.className = "remove-from-cart";
a3.href = "#";
// a3.dataToggle = "tooltip";


var i = document.createElement('i');
i.className = "fa fa-trash";


tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
tr.appendChild(td5);

td1.appendChild(div1);
div1.appendChild(a1);
div1.appendChild(inner_div);
a1.appendChild(img);

inner_div.appendChild(h4);
inner_div.appendChild(span1);
inner_div.appendChild(span3);
h4.appendChild(a2);

span1.appendChild(em1);
span1.appendChild(span2);

span3.appendChild(em2);
span3.appendChild(span4);

td2.appendChild(div2);
div2.appendChild(select);
select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);
select.appendChild(option4);
select.appendChild(option5);

td5.appendChild(a3);
a3.appendChild(i);

// if(localStorage.getItem("array")){
//     var table = document.getElementById('cart-table');
//     var str = JSON.parse(localStorage.getItem("array"));
//     for(var i = 0;i<str.length;i++){
//         table.appendChild(str[i]);
//     }
//     table.appendChild(tr);
//     str.push(tr);
//     var str_new = JSON.stringify(str);
//     localStorage.setItem("array",str_new);
// }
// else{
//     array = []
//     array.push(tr);
//     var str = JSON.stringify(array);
//     localStorage.setItem("array",str);
//     var table = document.getElementById('cart-table');
//     table.appendChild(tr);
// }
var table = document.getElementById('cart-table');
table.appendChild(tr);