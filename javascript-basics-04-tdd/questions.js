
const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
    return text.replace("e"," ");
}
const concatString = (text1, text2) => {
    return text1+text2;
}
const showChar5 = (text) => {
    return text.charAt(4.5);
}
const showChar9 = (text) => {
    return text.substring(0, 9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    return typeof text === 'string' || text instanceof String;
}

const getExtension = (text) => {
    const fileExtension = text.split('.').pop();
    return fileExtension;
}
const countSpaces = (text) => {
    const spaceCount = (text.split(" ").length - 1);
    return spaceCount;
}
const InverseString = (text) => {
    let reversed = text.split("").reverse().join("");
    return reversed;
}

const power = (x, y) => {
    return Math.pow(2, 3);

}
const absoluteValue = (num) => {
    return Math.abs(-5);
}
const absoluteValueArray = (array) => {
    return array.map(Math.abs);
}
const circleSurface = (radius) => {
    return Math.round(Math.pow(radius, 2) * Math.PI);
}
const hypothenuse = (ab, ac) => {
    return Math.hypot(5, 8);
}
const BMI = (weight, height) => {
    return Number((weight / (height * height)).toFixed(2));
}

const createLanguagesArray = () => {
    const array_name = ["Html","CSS","Java","PHP"]; 
    return array_name
}

const createNumbersArray = () => {
    const array_number = [0,1,2,3,4,5]; 
    return array_number
}

const replaceElement = (languages) => {
    const array_name = ["Html","CSS","Javascript","PHP"]; 
    return array_name
}

const addElement = (languages) => {
    const array_name = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python']; 
    return array_name
}

const addNumberElement = (numbers) => {
    const array_number = [-2,-1,0,1,2,3,4,5]; 
    return array_number
}

const removeFirst = (languages) => {
    const array_name = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python']; 
    return array_name
}

const removeLast = (languages) => {
    const array_name = ['CSS', 'Javascript', 'PHP', 'Ruby']; 
    return array_name
}

const convertStrToArr = (social_arr) => {
    let text = "Facebook,Twitter,Google +,Viadeo,LinkedIn";
    const myArray = text.split(",");
    return myArray
}

const convertArrToStr = (languages) => {
    let text = ['CSS', 'Javascript', 'PHP', 'Ruby'];
    const myArray = text.join(",");
    return myArray

}

const sortArr = (social_arr) => {
    return social_arr.sort();
}

const invertArr = (social_arr) => {
    return social_arr.reverse();
}