let str="windows is bad, is not it?. Linux is good."
let words=str.split(" ")
function counting(word)
{
    for (let i = 0; i < word.length; i++) {
 
		let count = 0;
		for (let w = 0; w < word.length; w++) {
			if (word[i] == word[w]) {
				count++;
			}
        }
       console.log(word[i], count)
}  
}
counting(words)