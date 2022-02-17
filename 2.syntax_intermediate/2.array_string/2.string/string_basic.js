/*
    Sting을 사용하는 방식 : '',"",``(backtick)
*/

//템플릿 리터럴 방식(Template literal)
const novel = 'The Little Prince';
const author = 'Saint-Exupery';

console.log(`My favorite novel is ${novel}`);

const address = 
    'homer J.Simson\n'+
    '742 Evergreen Terrace\n'+
    'Springfield';
console.log(address);

const address2 = `homer J.Simson
742 Evergreen Terrace
Springfield`;
console.log(address2);