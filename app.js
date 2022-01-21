
//  Fifer  Counter ..............................

const fiver_order = document.querySelector('#fiver-order');

const counter = document.querySelector('.counter');
const mess = document.querySelector('.mess');


fiver_order.addEventListener( 'submit', function(e){
  e.preventDefault();

  let date = this.querySelector('input[type="date"]').value;
  let time = this.querySelector('input[type="time"]').value;
 

  if (date == '' || time == '') {
   mess.innerHTML =  `<p class = 'alert alert-danger'>All fields are required !</p>`
  }else{
    setInterval(() => {
      
      let start_time = new Date();
      let end_time   = new Date( date + ' ' + time );
    
      let time_diff = Math.floor(Math.abs( end_time.getTime() - start_time.getTime()));
      
      let totel_sec = Math.floor(time_diff / 1000 );
      let totel_min = Math.floor(totel_sec / 60 );
      let totel_hour = Math.floor(totel_min / 60 );
      let totel_day = Math.floor(totel_hour / 24 );
    
    
      let hours = totel_hour - ( totel_day * 24 );
      let min  =  totel_min -  ( totel_day * 24 * 60 ) - ( hours * 60 );
      let sec  =  totel_sec -  ( totel_day * 24 * 60 * 60 ) - ( hours * 60 * 60 ) - ( min * 60 )
       
      
      counter.innerHTML = ` ${ totel_day } : ${ hours > 9 ? hours : '0' + hours } : ${ min > 9 ? min : '0' + min } : ${ sec > 9 ? sec : '0' + sec }`
    
       
    
      }, 1000);


  }


  setTimeout(() => {
    mess.innerHTML = '';
  },2000);



});





// ToDo App........................



const todo_form = document.querySelector('#todo_form');
const message  = document.querySelector('.message');
const list  = document.querySelector('#list');


todo_form.addEventListener( 'submit', function(e){
  e.preventDefault();
  
  let do_name = this.querySelector( 'input[name = "do_name"]').value;
  let opt  = this.querySelector( 'select[name = "opt"]').value;

  if ( do_name == '' || opt == '') {
    message.innerHTML = `<p class = 'alert alert-danger'>All fields are required !</p>`
  }else{

    let li = document.createElement('li');
    li.className = 'list-group-item';
    let closebtn = document.createElement('button');
    closebtn.className = 'close';
    closebtn.innerHTML = '&times;'
    let span = document.createElement('span');
    // span.className = 'ml-5';
    
    let dotext = document.createTextNode(do_name);
    let opttext = document.createTextNode(opt);
   
   
 
    
    
    list.appendChild( li );
    li.appendChild( closebtn );
    li.insertBefore( dotext , closebtn ) ;
    span.appendChild( opttext );
    li.insertBefore( span , closebtn )
    
 
    this.querySelector( 'input[name = "do_name"]').value = '';
    this.querySelector( 'select[name = "opt"]').value = '';


    closebtn.addEventListener('click',function(){
      this.parentElement.remove();
    });

   
    
  };

 
 

  setTimeout(() => {
    message.innerHTML = '';
  },2000);


});




//   Age CCalculator.....................


const age_cal = document.querySelector('#age-cal');
const footer = document.querySelector('#footer');


age_cal.addEventListener('submit', function(e){
   e.preventDefault();

   let birth_date = this.querySelector( 'input[name = "birth-date"]').value;
   let current_date = this.querySelector( 'input[name = "current-date"]').value;

   if (birth_date == 0 || current_date == 0 ) {
    footer.innerHTML = `<p class = 'alert alert-danger'>All fields are required !</p>`
   }else{

      
   let start_date = new Date();
   let end_date   = new Date( birth_date );


   let diff = Math.floor(Math.abs( start_date.getTime() - end_date.getTime()));


   let totel_sec = Math.floor(diff / 1000 );
   let totel_min = Math.floor(totel_sec / 60 );
   let totel_hour = Math.floor(totel_min / 60 );
   let totel_day = Math.floor(totel_hour / 24 );
   let totel_month = Math.floor(totel_day / 30 );
   let totel_year = Math.floor(totel_month / 12 );

   let month = totel_month - ( totel_year * 12 );
   let day = totel_day - ( totel_year * 12 * 30 ) - ( month * 30 );


  
 

  footer.innerHTML =  `Age : ${totel_year} years , ${month}  months , ${day} days .<br>
                             Or , ${totel_month} months , ${day} days. <br>
                             Or , ${totel_day} days .<br>
                             Or , ${totel_hour} hours . <br>
                             Or , ${totel_min} minutes . <br>
                             Or , ${totel_sec} seconds .
  `
  this.querySelector( 'input[name = "birth-date"]').value  = '';
  this.querySelector( 'input[name = "current-date"]').value  = '';

   };


  

  //  setTimeout(() => {
  //   footer.innerHTML = '';
  // },10000);


 

});






                                              
                             
                            
                             
                            