var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productCategory = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDescInput');


var AddProduct = document.getElementById('AddProduct');
var AddUpdate = document.getElementById('AddUpdate');


var container = []
var dot ;

if (localStorage.getItem('por') !==null){
    container = JSON.parse(localStorage.getItem('por')) ;
    display();
}

function addProduct(){
    var Product={
        name:productName.value,
        price:productPrice.value,
        category:productCategory.value,
        desc:productDescInput.value,
    }
    container.push(Product);
    localStorage.setItem('por', JSON.stringify(container));
    display();
    clear ();
    
}

function display(){
    var carton=``
    for (var i=0; i<container.length; i++){
        carton+=`
        <td>${i}</td>
        <td>${container [i].name}</td>
        <td>${container [i].price}</td>
        <td>${container [i].category}</td>
        <td>${container [i].desc}</td>
        <td> <button onclick="Delete(${i})" class='btn btn-outline-danger btn-sm'> Delete <i class="fa-solid fa-trash"></i> </button></td>
        <td> <button onclick="Update (${i})"  class='btn btn-outline-warning btn-sm '> Update <i class="fa-regular fa-pen-to-square"></i></button></td>
       

        </tr>
        `
    }
    document.getElementById('clcs').innerHTML=carton
}


function Delete(Deletes){
    container.splice(Deletes,1);
    localStorage.setItem('por', JSON.stringify(container));
    display()
}


function clear (){
    productName.value =``;
    productPrice.value =``;
    productCategory.value =``;
    productDescInput.value =``;
}


function Update (id){
    got=id;
document.getElementById('productName').value = container [id].name;
document.getElementById('productPrice').value = container [id].price;
document.getElementById('productCategory').value = container [id].category;
document.getElementById('productDescInput').value = container [id].desc;
AddProduct.classList.add('d-none');
AddUpdate.classList.remove('d-none')
}


function UpdateData(){
    container [got].name =document.getElementById('productName').value
    container [got].price =document.getElementById('productPrice').value
    container [got].category =document.getElementById('productCategory').value
    container [got].desc =document.getElementById('productDescInput').value
    localStorage.setItem('por', JSON.stringify(container));
    display();
    clear ();
    AddProduct.classList.remove('d-none');
    AddUpdate.classList.add('d-none')
}