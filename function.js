
/**
 * data send
 * @param {*} key 
 * @param {*} arry 
 */


function dataSend( key , arry ) {
  let data = JSON.stringify(arry);
  localStorage.setItem( key , data )    
};


/**
 * data get
 * @param {*} key 
 * @returns 
 */

function dataGet(key) {
    let data = localStorage.getItem(key);
    return data ? JSON.parse(data) : false;
    
};

