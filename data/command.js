let command=[];
function CommandPage(){

  function saveToStorage() {
    localStorage.setItem('command', JSON.stringify(command));
  }
 function UserPage(){
 function LoadCommand(){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load',()=>{
    
   command=JSON.parse(xhr.response);
   saveToStorage();
   command.forEach(item => {
    console.log(`${item.productId}`)
   });
   html=Loadcommands();
   document.querySelector('.container').innerHTML=html;
   
   return command;
     })
    
    xhr.open('GET','https://backendgusto.onrender.com/article');
    xhr.send();
    }
  LoadCommand();
  }
  UserPage();
  let html='';
function Loadcommands(){
  command.reverse().forEach((item)=>{
    products.forEach((product)=>{
      if(item.productId===product.id){
      html+=`<div class="order-container" >
    <img src="${product.image}" class="imge">
    <p class="product-name">${product.name}</p>
    <p class="product-name">Quantité:${item.quantity}</p>
    <p class="place">table:${item.place}</p>
 </div>`
      }
    })
  })
  return html;
}
}
function LiveReload(){
setInterval(CommandPage,3000);}
LiveReload();