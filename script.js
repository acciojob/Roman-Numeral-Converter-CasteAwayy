let mask = {
		'1' : 'I',
		'5' : 'V',
		'10' : 'X',
		'50' : 'L',
		'100' : 'C',
		'500' : 'D',
		'1000': 'M'
}

function utilRoman(char, factor)
{
    n =  Number(char);
    factor = Math.pow(10,factor);
    if(n<=3) {return Array(n).fill(mask[1*factor])}
    else if(n==4){
        let temp = [];
        temp[0] = mask[1 * factor];
        temp[1] = mask[5 * factor];
        return temp;
    }else if(n==5)
    {
        return Array(1).fill(mask[5*factor]);
    }else if(n<=8){
        let temp = [];
        temp.push(mask[5*factor]);
        temp = temp.concat(Array(n-5).fill(mask[1*factor]));
        return temp;
    }else if(n==9){
        let temp = [];
        temp[0] = mask[1*factor];
        temp[1] = mask[10*factor];
        return temp;
    }else {
        return Array(1).fill(mask[10*factor]);
    }
}

function convertToRoman(s) {
  	// your code here
 let romanArray = [];
	s = String(s);
  s = s.split('').reverse().join('');
  for(let i=0;i<s.length;i++)
  {
   romanArray.push(utilRoman(s[i],i).join(''));
  }
  return romanArray.reverse().join('');

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
