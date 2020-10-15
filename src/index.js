module.exports = function toReadable (number) {
    if(number === 0) return 'zero';
    const zeroNineteenth = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const HUNDRED = 'hundred';
    let result = '';
    if ( number > 99) {result += `${zeroNineteenth[Math.floor(number / 100)]} ${HUNDRED}`};
    if (number % 100 > 19) {
        result += ` ${tens[Math.floor(number % 100 / 10) - 2]}`
        if(number % 10 !== 0) {
            result += ` ${zeroNineteenth[Math.floor(number % 10)]}`;
        }
    }
    if (number % 100 <= 19 && number % 100 > 0) result += ` ${zeroNineteenth[Math.floor(number % 100)]}`;
    if((number + '').length < 3) result = result.slice(1);
    return result;
}
