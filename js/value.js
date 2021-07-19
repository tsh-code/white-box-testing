function checkValues(a,b) {

    if(a>0){
        if(b>0){
            return(`${a}, ${b} are bigger than 0`)
        }else{
            return(`${a} is bigger than 0, ${b} is smaller than 0`)
        }
    }
    else{
        if(b>0){
            return(`${a} is smaller than 0, ${b} is bigger than 0`)
        }else{
            return(`${a} is smaller than 0, ${b} is bigger than 0`);
        }
    }
 } module.exports=checkValues;

