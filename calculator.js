/**
 * [Calculator] -- BEGIN
 * 
 */
function Calculator() {}
/**
 * [add]
 * @param {number} numOne [description]
 * @param {number} numTwo [description]
 * @return {number}        [description]
 */
Calculator.prototype.add = function(numOne, numTwo) {
  return +numOne + +numTwo;
};
/**
 * [subtract]
 * @param  {number} numOne [description]
 * @param  {number} numTwo [description]
 * @return {number}        [description]
 */
Calculator.prototype.subtract = function(numOne, numTwo) {
  return +numOne - +numTwo;
};
/**
 * [multiply description]
 * @param  {number} numOne [description]
 * @param  {number} numTwo [description]
 * @return {number}        [description]
 */
Calculator.prototype.multiply = function(numOne, numTwo) {
  return +numOne * +numTwo;
};
/**
 * [divide]
 * @param  {number} numOne [description]
 * @param  {number} numTwo [description]
 * @return mixed{number, NaN}        [description]
 */
Calculator.prototype.divide = function(numOne, numTwo) {
  return (numTwo === 0) ? NaN : +numOne / +numTwo;
};

Calculator.prototype.constructor = Calculator;
/**
 * [Calculator] -- END
 * 
 */

/**
 * [withSummation] -- BEGIN
 *
 * HERE BE DRAGONS
 *         ____ __
 *        { --.\  |          .)%%%)%%
 *         '-._\\ | (\___   %)%%(%%(%%%
 *             `\\|{/ ^ _)-%(%%%%)%%;%%%
 *         .'^^^^^^^  /`    %%)%%%%)%%%'
 *        //\   ) ,  /       '%%%%(%%'
 *  ,  _.'/  `\<-- \<
 *   `^^^`     ^^   ^^
 */
function withSummation() {}
/**
 * (add the sum method to the withSummation mixin?)
 * ...(uncharted territory here)
 */
withSummation.prototype = {
  sum: function(numOne, numTwo, numThree, numfour) {
    return +numOne + +numTwo + +numThree + +numfour;
  }
}
/**
 * (assign the mixin with the Calculator class?)
 * ...(uncharted territory here)
 */
Object.assign(Calculator.prototype, withSummation);
/**
 * [withSummation] -- END
 *
 * HERE BE DRAGONS
 *         ____ __
 *        { --.\  |          .)%%%)%%
 *         '-._\\ | (\___   %)%%(%%(%%%
 *             `\\|{/ ^ _)-%(%%%%)%%;%%%
 *         .'^^^^^^^  /`    %%)%%%%)%%%'
 *        //\   ) ,  /       '%%%%(%%'
 *  ,  _.'/  `\<-- \<
 *   `^^^`     ^^   ^^
 */
/**
 * [ScientificCalculator] -- BEGIN
 * 
 */
function ScientificCalculator() {}
ScientificCalculator.prototype = Object.create(Calculator.prototype);
/**
 * [sin]
 * @param  {number} numOne [description]
 * @return {number}        [description]
 */
ScientificCalculator.prototype.sin = function(numOne) {
  return Math.sin(+numOne);
};
/**
 * [cos]
 * @param  {number} numOne [description]
 * @return {number}        [description]
 */
ScientificCalculator.prototype.cos = function(numOne) {
  return Math.cos(+numOne);
};
/**
 * [tan]
 * @param  {number} numOne [description]
 * @return {number}        [description]
 */
ScientificCalculator.prototype.tan = function(numOne) {
  return Math.tan(+numOne);
};
/**
 * [log]
 * @param  {number} numOne [description]
 * @return {number}        [description]
 */
ScientificCalculator.prototype.log = function(numOne) {
  return Math.log(+numOne);
};
ScientificCalculator.prototype.constructor = ScientificCalculator;
/**
 * [ScientificCalculator] -- END
 * 
 */

//module.exports = Calculator;

//const add = (x, y) => +x + +y
//const subtract = (x, y) => +x - +y;
//const multiply  = (x, y) => +x * +y;
//const divide = (x, y) => (y === 0) ? NaN : +x / +y;
//
//module.exports = {
//  add,
//  subtract,
//  multiply,
//  divide,
//}
