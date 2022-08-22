const URL="https://japceibal.github.io/emercado-api/cats_products/101.json";

const categoria = document.querySelector('#lead');
fetch(URL)
 .then((resp) => resp.json())
 .then((data) => {
 
    const info = document.querySelector('#info');
    const ArrayDatos = data.products;
    console.log(ArrayDatos)
    showList(ArrayDatos);
 })

 function showList(array){
    for (let i=0; i< array.length;i++)
        info.innerHTML += array[i].name;
 };