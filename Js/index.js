const a= document.querySelector.bind(document);
const b=document.querySelectorAll.bind(document);


let value1 = 0;
let value2 = 0;
let value3 = 0;
let value4 = 0;
let value5 = 0;
let value6 = 0;
let result = 0;


let Getvalue1 =() => {

    try {
        let Tvalue = parseInt (a('.value1').dataset.value);
        value1+= Tvalue;
        let Getinput = a('.one');
        Getinput.placeholder = `${value1}`;


    } catch (error) {
        console.log (error.message)
        alert (ok)
        
    }

}

let Getvalue2 =() => {
    try {
        let Tvalue = parseInt (a('.value2').dataset.value);
        value2 += Tvalue;
        let Getinput = a('.two');
        Getinput.placeholder = `${value2}`;


    } catch (error) {
        console.log (error.message)
        alert (ok)
        
    }
}


let Getvalue3 = () => {
    try {
        
        let Tvalue=parseInt (a('.value3').dataset.value);
        value3+=Tvalue;
        let Getinput = a('.three');
        Getinput.placeholder = `${value3}`;


    } catch (error) {
        console.log (error.massage)
    }
}

let Getvalue4 = () => {

try {
     
 let Tvalue = parseInt(a('.value4').dataset.value);
 value4 += Tvalue;

 let Getinput = a('.four');
 Getinput.placeholder = `${value4}`;
 


} catch (error) {
    alert(error.message)
}

}

let Getvalue5 = () => {
    let Tvalue = parseInt (a('.value5').dataset.value);
    value5 += Tvalue;
    let Getinput= a('.five');
    Getinput.placeholder = `${value5}`;
}

let Getvalue6 = () => {
    let Tvalue =parseInt (a('.value6').dataset.value);
    value6 += Tvalue;
    let Getinput = a('.six');
    Getinput.placeholder = `${value6}`;
}


const c= document.querySelector.bind(document);
const d=document.querySelectorAll.bind(document);

let value7= 0;
let value8= 0;
let value9= 0;
let value10= 0;
let value11= 0;
let value12= 0;
let value13= 0;
let value14= 0;
let value15= 0;
let value16= 0;
let value17= 0;
let value18= 0;


let Getvalue7 = () => {
    try {
        let Tvalue= parseInt (a('.value7').dataset.value);
    value7 = Tvalue ;
    let Getinput= a ('.seven');
    Getinput.placeholder = `${value7}`;
    } catch (error) {
        alert(error.message)
    }
    
}
let Getvalue8 = () => {
    try {
        let Tvalue= parseInt (a('.value8').dataset.value);
    value8 = Tvalue ;
    let Getinput= a('.eight');
    Getinput.placeholder = `${value8}`;
    } catch (error) {
        alert(error.message)
    }
    
}
let Getvalue9 = () => {
    try {
        let Tvalue= parseInt (a('.value9').dataset.value);
    value9 = Tvalue ;
    let Getinput= a('.nine');
    Getinput.placeholder = `${value9}`;
    } catch (error) {
        alert(error.message)
    }
    
}
let Getvalue10 = () => {
    try {
        let Tvalue= parseInt (a('.value10').dataset.value);
    value10 = Tvalue ;
    let Getinput= a('.ten');
    Getinput.placeholder = `${value10}`;
    } catch (error) {
        alert(error.message)
    }
    
}
let Getvalue11 = () => {
    try {
        let Tvalue= parseInt (a('.value11').dataset.value);
    value11 = Tvalue ;
    let Getinput= a('.eleven');
    Getinput.placeholder = `${value11}`;
    } catch (error) {
        alert(error.message)
    }
    
}
let Getvalue12 = () => {
    try {
        let Tvalue= parseInt (a('.value12').dataset.value);
    value12 = Tvalue ;
    let Getinput= a('.twelve');
    Getinput.placeholder = `${value12}`;
    } catch (error) {
        alert(error.message)
    }
    
}
let Getvalue13 = () => {
    try {
        let Tvalue= parseInt (a('.value13').dataset.value);
    value13 = Tvalue ;
    let Getinput= a('.thirteen');
    Getinput.placeholder = `${value13}`;
    } catch (error) {
        alert(error.message)
    }
    
}
let Getvalue14 = () => {
    try {
        let Tvalue= parseInt (a('.value14').dataset.value);
    value14 = Tvalue ;
    let Getinput= a('.fourteen');
    Getinput.placeholder = `${value14}`;
    } catch (error) {
        alert(error.message)
    }
    
}
let Getvalue15 = () => {
    try {
        let Tvalue= parseInt (a('.value15').dataset.value);
    value15 = Tvalue ;
    let Getinput= a('.fivteen');
    Getinput.placeholder = `${value15}`;
    } catch (error) {
        alert(error.message)
    }
    
}
let Getvalue16 = () => {
    try {
        let Tvalue= parseInt (a('.value16').dataset.value);
    value16 = Tvalue ;
    let Getinput= a('.sixteen');
    Getinput.placeholder = `${value16}`;
    } catch (error) {
        alert(error.message)
    }
    
}
let Getvalue17 = () => {
    try {
        let Tvalue= parseInt (a('.value17').dataset.value);
    value17 = Tvalue ;
    let Getinput= a('.seventeen');
    Getinput.placeholder = `${value17}`;
    } catch (error) {
        alert(error.message)
    }
    
}
let Getvalue18 = () => {
    try {
        let Tvalue= parseInt (a('.value18').dataset.value);
    value18 = Tvalue ;
    let Getinput= a('.eighteen');
    Getinput.placeholder = `${value18}`;
    } catch (error) {
        alert(error.message)
    }
    
}
    

 let calculatevalue = () => {

   try {
    console.log(value1);
    console.log(value2);
    console.log(value3);
    console.log(value4);
    console.log(value5);
    console.log(value6);
      
    if (value1 !== 0) {
        result = result + value1
        
    }
       
    if (value2 !== 0) {
        result = result + value2
        
    }
       
    if (value3 !== 0) {
        result = result + value3
        
    }
       
    if (value4 !== 0) {
        result = result + value4
        
    }
    if (value5 !== 0) {
        result = result + value5
        
    }
    if (value6 !== 0) {
        result = result + value6
        
    }
    let divresultone =document.querySelector('.myresult');
    divresultone.placeholder = `${result}`;




   } catch (error) {
    
   }
 }

 let result1= () => {
        console.log(value7);
        console.log(value8);
        console.log(value9);
        console.log(value10);
        console.log(value11);
        console.log(value12);
        console.log(value13);
        console.log(value14);
        console.log(value15);
        console.log(value16);
        console.log(value17);
        console.log(value18);
          
        if (value7 !== 0) {
            result = result + value7
            
        }
           
        if (value8 !== 0) {
            result = result + value8
            
        }
           
        if (value9 !== 0) {
            result = result + value9
            
        }
           
        if (value10 !== 0) {
            result = result + value10
            
        }
        if (value11 !== 0) {
            result = result + value11
            
        }
        if (value12 !== 0) {
            result = result + value12
            
        }
        if (value13 !== 0) {
            result = result + value13
            
        }if (value14 !== 0) {
            result = result + value14
            
        }if (value15 !== 0) {
            result = result + value15
            
        }if (value16 !== 0) {
            result = result + value16

        }if (value17 !== 0) {
            result = result + value17
            
        }if (value18 !== 0) {
            result = result + value18
            
        }

        let divresult =document.querySelector('.showmyvalue');
        divresult.placeholder = `${result}`;

}

