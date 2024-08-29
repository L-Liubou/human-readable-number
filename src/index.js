module.exports = function toReadable(number) {
    
    const prime = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const decimals = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const hundredths = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 10) {
        return prime[number];
    } else if (number < 20) {
        return decimals[number - 10]; 
    } else if (number < 100) {
        return hundredths[Math.floor(number / 10)] + (number % 10 !== 0 ? ' ' + prime[number % 10] : '');
    } else {
        return prime[Math.floor(number / 100)] + ' hundred' +
            (number % 100 !== 0 ? ' ' + toReadable(number % 100) : '');
    }
}


