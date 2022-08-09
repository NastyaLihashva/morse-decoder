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
    let decodeNumbers = [];
    let result = '';
    for(let i = 0; i < expr.length; i += 10){
        let str = '';
        for(let j = 0; j < 10; j+=2){
            if(expr[i+j]+expr[i+j+1] === '10'){
                str += '.';
            }
            if(expr[i+j]+expr[i+j+1] === '11'){
                str += '-';
            }
            if(expr[i+j] === '*'){
                str += ' ';
            }
        }
        decodeNumbers.push(str);
    }
    for(let key in decodeNumbers){
        if(decodeNumbers[key] === '     '){
            result += ' ';
        }
        else{
            result += MORSE_TABLE[decodeNumbers[key]];
        }
    }

    return result;
}


module.exports = {
    decode
}