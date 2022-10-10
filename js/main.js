var vcarrito = document.getElementById("carrito")
var productos = document.getElementsByClassName("producto")
for(var i=0; i<productos.length; i++){
    productos[i].setAttribute("draggable","true")
}