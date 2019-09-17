function createPhoneNumber(array){
    let key = true;
    if(array.length === 10 ){
      for(i = 0; i < array.length; i++){
        if(array[i] >= 0 && array[i] < 10 && array[i]%1 === 0){
          key = true;
        }else{
          console.log('Numbers not valid!');
          key = false;
          break;
        }
      }
    } else{
      console.log('Numbers not valid!');
      key = false;
    }
    if(key === true){
      let characters = array.toString();
      let firstDigits = '';
      let nextDigits = '';
      let nextDigits1 = '';
      for(i = 0; i < 5; i+=2){
        firstDigits = firstDigits + characters.charAt(i);
      }
      for(i = 6; i < 11 ; i+=2){
        nextDigits = nextDigits + characters.charAt(i);
      }
      for(i = 12; i < 19; i+=2){
        nextDigits1 = nextDigits1 + characters.charAt(i);
      }
      console.log(`The phone number is: (${firstDigits}) ${nextDigits}-${nextDigits1}`);
    } 
  
  }
   
  createPhoneNumber([9,8,7,6,5,4,3,2,1,0]);
  