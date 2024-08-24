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
  let html1='';
function Loadcommands(){
  command.reverse().forEach((item)=>{
    if(item.productId!='0'){
    products.forEach((product)=>{
      if(item.productId===product.id){
      html=html+`<div class="order-container" >
    <img src="${product.image}" class="imge">
    <p class="product-name">${product.name}</p>
    <p class="product-name">Quantité:${item.quantity}</p>
    <p class="place">table:${item.place}</p>
 </div>`}}
      )}
      else{
        html=html+`<div class="order-container1" >
    <p class="product-name">Appel au serveur</p>
    <p class="place">table:${item.place}</p>
 </div>`
      console.log(`${ item.articleId}`)}
  }  )
  
  return html;}
}

function LiveReload(){
setInterval(CommandPage,3000);}
LiveReload();