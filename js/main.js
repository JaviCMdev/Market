var vcarrito = document.getElementById("carrito")
var vproductos = document.getElementById("productos")
var productos = document.getElementsByClassName("producto")
var vtotalcompra = document.getElementById("shoppingCartTotal")

vcarrito.addEventListener("dragover", (ev) => permitirSoltar(ev))
vcarrito.addEventListener("drop", (ev) => soltar(ev))
vproductos.addEventListener("dragover", (ev) => permitirSoltar(ev))
vproductos.addEventListener("drop", (ev) => soltar1(ev))

for(var i=0; i<productos.length; i++){
    productos[i].setAttribute("draggable","true")
    productos[i].addEventListener("dragstart",(ev) => iniciarArrastre(ev))
}

function iniciarArrastre(ev){
    ev.dataTransfer.setData("idproducto",ev.target.id)
}

function permitirSoltar(ev){
    ev.preventDefault()
}

function soltar(ev){
    ev.preventDefault()
    var data = ev.dataTransfer.getData("idproducto")
    vcarrito.appendChild(document.getElementById(data))
    calcular()
}

function soltar1(ev){
    ev.preventDefault()
    var data = ev.dataTransfer.getData("idproducto")
    vproductos.appendChild(document.getElementById(data))
    calcular()
}

function calcular(){
    var children = vcarrito.children;
    var price = 0;
  for(var i=0; i<children.length; i++){
            price = parseInt(children[i].dataset.price) + price;
}
vtotalcompra.innerText = price;
}