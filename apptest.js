const repeatString = function(text,number) {

    let textConcat='';

	if(number==0){
        return ''
    }
    else{
        if(number<0){
            return 'ERROR'
        }
        else{
            if(text=''){
                return ''
            }
            else{
                for(let j=0;j<number;j++){
                    textConcat+=text
                }
                return textConcat
            }
        }
    }

};

// Do not edit below this line
module.exports = repeatString;
