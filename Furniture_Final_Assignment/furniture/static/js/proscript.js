
var product = [{
    name  : 'Long Sofa',
    price :  99.99,
    image : 'static/img/1.png'
  },{
    name  : "Dinning",
    price : 950.00,
    image : 'static/img/2.png'
  },{
    name  : "chair",
    color : "red",
    price : 57.65,
    image : 'static/img/3.png'
  },{
    name : "Dinning",
    price : 999,
    image : 'static/img/4.png'
  },{
    name : "Chair",
    price : 450,
    image : 'static/img/5.png'
  },{
    name : "bamboo",
    price : 150,
    image : 'static/img/6.png'
  },{
    name : "Dinning",
    price : 550,
    image : 'static/img/7.png'
  },{
    name : "Bed",
    price : 999,
    image : 'static/img/8.png'
  },{
    name  : 'Dressing',
    price :  999,
    image : 'static/img/9.png'
  },{
    name  : "sofa",
    price : 1050,
    image : 'static/img/10.png'
  },{
    name  : "sofa",
    price : 877,
    image : 'static/img/11.png'
  },{
    name : "Table",
    price : 9000,
    image : 'static/img/12.png'
  },{
    name : "Bed",
    price : 1750,
    image : 'static/img/13.png'
  },{
    name : "Chair",
    price : 270,
    image : 'static/img/14.png'
  },{
    name : "chair",
    price : 350,
    image : 'static/img/15.png'
  },{
    name : "Table",
    price : 1323,
    image : 'static/img/16.png'
  },{
    name : "Sofa",
    price : 750,
    image : 'static/img/17.png'
  },{
    name : "Holder",
    price : 990,
    image : 'static/img/18.png'
  },{
    name : "Sofa",
    price : 550,
    image : 'static/img/19.png'
  },{
    name : "Sofa",
    price : 1113,
  image : 'static/img/20.png'}
  ];
function newProduct(num){
  var container = document.createElement('div');
  var parent = document.getElementsByClassName('container-product')[0];
  parent.appendChild(container);
  container.className = 'product';
  container.innerHTML = '<img src = "'+product[num].image+'"/><h4>'+product[num].name+'</h4><p>$'+product[num].price+'</h5><div class = "product-overlay"><label style="text-align:center;">Add To Cart</label><input type = "text" class = "quantity" placeholder = "Enter Quantity"/><button class = "add-to-cart">Add</button></div>';
}

function sort_by_price(){
  var parent = document.getElementsByClassName('container-product')[0];
  var choice = document.getElementById('sort_function_price');
  
  while(parent.firstChild){
    parent.removeChild(parent.firstChild);
  }
  
  if(choice.value == 'L'){
     product.sort(function(a,b){return parseInt(a.price,10) - parseInt(b.price,10)}); 
  } else if (choice.value == 'H'){
     product.sort(function(a,b){return parseInt(b.price,10) - parseInt(a.price,10)});
  }
  for(var i = 0; i < product.length; i++){
    newProduct(i); 
  }
}
function sort_by_name(){
   var parent = document.getElementsByClassName('container-product')[0];
  var choice = document.getElementById('sort_function_name');
  
  while(parent.firstChild){
    parent.removeChild(parent.firstChild);
  }
  
  if(choice.value == 'A'){
     product.sort(function(a,b){if(a.name < b.name){return -1} if(a.name > b.name) {return 1}}); 
  } else if (choice.value == 'Z'){
     product.sort(function(a,b){if(a.name > b.name){return -1} if(a.name < b.name) {return 1}}); 
  }
  for(var i = 0; i < product.length ; i++){
    newProduct(i); 
  } 
}
function find(){
  var str = document.getElementById('search-bar').value;
  var low = str.toLowerCase();
 var parent = document.getElementsByClassName('container-product')[0];
  var pr = document.getElementsByClassName('product');
  for(var i = 0; i < product.length; i++){
    pr[i].style.display = 'none';
    if(product[i].name.indexOf(low) > -1){
       pr[i].style.display = 'block';
     }
  }
}
function getEventTarget(e){
  var evt = e || window.event;
  return e.target || e.srcElement;
}
function hasClass(elem,match){
  return elem.className.split(" ").indexOf(match) > -1;
}
function createMultiple(){
  for(var i = 0, len = product.length; i < len; i++){
    newProduct(i); 
  }
}
window.addEventListener('load',function(){
  createMultiple();
  
  document.getElementsByClassName('container-product')[0].addEventListener('click',function(e){
    var target = getEventTarget(e);
    var pattern = /\d/;
    if(target && hasClass(target,"add-to-cart")){
      var val = target.parentNode.children[1];
      if(val.value == '' || val.value == null){
        alert('Quantity field is empty');
      } if (val.value <= 0 && val.value > 15){
        alert('Quantity should be between 1-15'); 
        val.value = '';
      } else if(!val.value.match(/\d/)){
        alert('Invalid quantity, Quantity should be number');        
        val.value = '';
      } else {
        alert(val.value + ' product(s) added to cart');
        val.value = '';
      }
    }
  });
  
});

