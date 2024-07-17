let cart=[];
  function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
 function UserPage(){
 function LoadCart(){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load',()=>{
    
   cart=JSON.parse(xhr.response);
   saveToStorage();
   cart.forEach(item => {
    console.log(`${item.productId}`)
   });
   html=Loadcommands();
   document.querySelector('.container').innerHTML=html;
   
   return cart;
     })
    
    xhr.open('GET','https://backendgusto.onrender.com/article');
    xhr.send();
    }
  LoadCart();
  }
  UserPage();
  let html='';
function Loadcommands(){
  cart.forEach((item)=>{
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
