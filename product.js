




//  Product with LS  

                                              
const add_product = document.getElementById('add-product'); 
const product = document.getElementById('product-form'); 
const product_box = document.querySelector('.product-add-box');                           
const product_area = document.querySelector('.product-area');                           
                            
                             
add_product.addEventListener('click' , function(){
  product_box.style.display = 'block';
});




product.addEventListener('submit', function(e){
  e.preventDefault();

  let name = this.querySelector('input[name="product-name"]').value;
  let price = this.querySelector('input[name="price"]').value;
  let sale = this.querySelector('input[name="sale-price"]').value;
  let photo = this.querySelector('input[name="img"]').value;

  let product_arr;
  
  if( dataGet('products') ){
      product_arr = dataGet('products');
  }else{
      product_arr = [];
  }


  product_arr.push({
      name    : name,
      price  : price, 
      sale    : sale, 
      photo   : photo 
  });


  dataSend('products', product_arr);
 


  this.querySelector('input[name="product-name"]').value = '';
  this.querySelector('input[name="price"]').value = '';
  this.querySelector('input[name="sale-price"]').value = '';
  this.querySelector('input[name="img"]').value = '';

    product_box.style.display = 'none';
  
  
  


    allProducts();
    
});


allProducts();




function allProducts(){

    let lData = dataGet('products');
  console.log(lData);
    let data = '';

    lData.map(pdata => {
        data += `

        <div class="col-lg-4 my-3">
            <div class="card p-card">
                <img class="card-image" src="${pdata.photo}" alt="">
                <div class="card-body p-body">
                    <h3>${pdata.name}</h3>
                    <p> <span class="regular-price"> ${ pdata.price == '' ? '' : '$' + pdata.price }</span>   <span class="sale-price"> ${ pdata.sale == '' ? '' : '$' + pdata.sale }</span> </p>
                    <br>
                    <button class="btn btn-success">Add to cart</button>
                </div>
            </div>
        </div>
        
        
        `;


      
      

    });

    product_area.innerHTML = data;

   
  
};
            