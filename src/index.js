const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
   
    var ar = expr.match(/(.{2})/g);

    for (let i=0; i < ar.length; i++){
      if (ar[i] == '10'){
        ar[i] = '.';
      } else if (ar[i] == '11'){
        ar[i] = '-';
      } else if (ar[i] == '00'){
        ar[i]='';
      }
    }
    
    let arr = [];
    
      for ( let m=0; m < ar.length; m+4){
        let val=ar[m]+ar[m+1]+ar[m+2]+ar[m+3]+ar[m+4];
        arr.push(val);
      }

    var sum=0;

      for (let n=0; n < arr.length ; n++){
          let test = arr[n] 
          
          sum+=MORSE_TABLE[test];
      }

     return sum;
}

module.exports = {
    decode
}