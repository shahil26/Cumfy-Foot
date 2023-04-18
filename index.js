  var elm1 = document.getElementById("retainable");
  var elm2 = document.getElementById("Drop");
  elm1.addEventListener("mouseenter", clicked);
  elm1.addEventListener("click", clicked_ultra);
  elm1.addEventListener("mouseout", exited);
  function clicked() {
    elm2.style.display = "block";
  }
  function clicked_ultra() {
    elm2.style.display = "block";
    elm1.removeEventListener("mouseout", exited);
    elm2.addEventListener("mouseleave", exited);
  }
  function exited() {
    elm2.style.display = "none";
  }
  function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(";").forEach(function (el) {
      let [key, value] = el.split("=");
      cookie[key.trim()] = value;
    });
    return cookie[cookieName];
  }
  document.getElementById("hey").innerHTML = "Hey  " + getCookie("Name");

function changePage(im1,p1,p2,p3,p4){
  var product = document.getElementById(p1).textContent;
  var cost = document.getElementById(p2).textContent;
  var size = document.getElementById(p3).value;
  var color = document.getElementById(p4).value;
  showAddToCart(im1,product,cost,size,color);
}

function showAddToCart(im1,pp1,pp2,pp3,pp4){


var tr = document.createElement('tr');
var td1 = document.createElement('td');
var td2 = document.createElement('td');
td2.className = "text-center";
var td3 = document.createElement('td');
td3.className = "co-st";
td3.textContent = pp2;
var td5 = document.createElement('td');
td5.className = "text-center";

var div1 = document.createElement('div');
div1.className = "product-item";


var a1 = document.createElement('a');
a1.className = "product-thumb";
a1.href = "#";

var img = document.createElement('img');
img.src = im1;
img.style.width = "100px";
img.style.height = "100px";
img.id = 'image';
img.alt = "Product";

var inner_div = document.createElement('div');
inner_div.className = "product-info";

var h4 = document.createElement('h4');
h4.className = "product-title";

var a2 = document.createElement('a');
a2.href = "#";
a2.innerText = pp1;

var span1 = document.createElement('span');
var em1 = document.createElement('em');
em1.textContent = "Size:";
em1.id = 'size';

var span2 = document.createElement('span');
span2.style.display = "inline";
span2.textContent = pp3;
span2.id = "size-span";
var span3 = document.createElement('span');
var em2 = document.createElement('em');
em2.textContent = "Color:";
em2.id = 'color';

var span4 = document.createElement('span');
span4.style.display = "inline";
span4.textContent = pp4;
span4.id = "color-span";

var div2 = document.createElement('div');
div2.className = "count-input";

var select = document.createElement('select');
select.className = "form-control";
select.style.border = "none";
select.style.outline = "none";
select.style.fontSize = "100%";
var option1 = document.createElement('option');
option1.innerText = "1";
option1.value = "1";
var option2 = document.createElement('option');
option2.innerText = "2";
option2.value = "2";
var option3 = document.createElement('option');
option3.innerText = "3";
option3.value = "3";
var option4 = document.createElement('option');
option4.innerText = "4";
option4.value = "4";
var option5 = document.createElement('option');
option5.innerText = "5";
option5.value = "5";


var a3 = document.createElement('a');
a3.className = "remove-from-cart";
a3.href = "#";


var i = document.createElement('i');
i.className = "fa fa-trash";


tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
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

select.onchange = function(){calculateSubTotal(this,pp2);}

td5.appendChild(a3);
a3.appendChild(i);

tr.style.borderBottom = "1px solid black";
var table = document.getElementById('cart-table');
table.appendChild(tr);



  var div1 = document.getElementById('hide');
  div1.style.position = "fixed";
  div1.style.top = "19vh";
  // div1.style.display = "block";
  div1.style.left = "125px";
  // div1.style.width = "100%";
  div1.style.zIndex = "6";
  div1.style.backgroundColor = "white";
  div1.style.border = "1px solid #002347";
  document.getElementById('size').style.paddingRight = "5px";
  document.getElementById('size').style.fontStyle = "normal";
  document.getElementById('size-span').style.paddingLeft = "5px";
  document.getElementById('size-span').style.paddingRight = "20px";
  document.getElementById('color').style.paddingRight = "5px";
  document.getElementById('color').style.fontStyle = "normal";
  document.getElementById('color-span').style.paddingLeft = "5px";
}

function calculateSubTotal(param,idd){
  var q = param.value;
  var c_ost = document.querySelector('.co-st');
  var c_pure = idd.slice(1);
  console.log(c_pure)
  var res = Number.parseInt(q)*Number.parseInt(c_pure);
  c_ost.textContent = "₹"+res;
}
function Cart(){
  var div1 = document.getElementById('hide');
  div1.style.display = "block";
  document.getElementById('Cart').removeEventListener("click",Cart);
  document.getElementById('Cart').onclick = function (){
    var div1 = document.getElementById('hide');
    div1.style.display = "none";
    document.getElementById('Cart').addEventListener("click",Cart);
  }
}