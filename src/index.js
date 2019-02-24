module.exports = function getZerosCount(number, base) {

  function getAllFactorsFor(remainder) {
    var factors = [], i;

    for (i = 2; i <= remainder; i++) {
        while ((remainder % i) === 0) {
            factors.push(i);
            remainder /= i;
        }
    }

    return factors;
}

let arrFactors = getAllFactorsFor(base);
let maxFactor = arrFactors[arrFactors.length - 1];
let degreeOfMaxFactor = 0;
arrFactors.forEach(item => {
	if(item === maxFactor) {
		degreeOfMaxFactor++;
	} 
})
let maxFactorInDegree  = maxFactor;
let quantity = 0;
while((number / maxFactorInDegree) >= 1) {
	quantity += Math.trunc(number / maxFactorInDegree);
	maxFactorInDegree *= maxFactor;
}
return quantity/degreeOfMaxFactor;



}