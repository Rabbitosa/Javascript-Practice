function evenNum(){
    const array = [11,4,32,999,0,56,8];
    const array2 = [];
    let i;
    for (i = 0; i < array.length; i++){
        console.log(array[i]);
        if (array[i] > 0 && array[i] % 2 === 0){
            array2.push(array[i]);
        };
    };
return array2;
};
console.log(evenNum())