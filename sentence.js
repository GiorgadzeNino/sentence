let str="windows is bad, is not it?. Linux is good."
let string=str.replace(/[.,\!^*/;:{}=-?_%&`~()]/g,"")
let words=string.split(" ")


function counting(word)
{
	let set=new Set()
	  for (let i = 0; i < word.length; i++) {
		 let count = 0;
		for (let w = 0; w <word.length; w++) {
			if (word[i] === word[w]) {
				count++;
			}			
				}
				set.add(words[i]+":"+count)			
}
console.log(set)
}
counting(words)

