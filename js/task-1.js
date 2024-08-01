function slugify(title) {
    const lowerCaseTittle = title.toLowerCase();
    const splitTittle = lowerCaseTittle.split(' ');
    const resultTittle = splitTittle.join('-');
    return resultTittle;
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));  
console.log(slugify("Ten secrets of JavaScript"));  
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));  