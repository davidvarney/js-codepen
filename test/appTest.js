//const assert = require('chai').assert;
//const expect = require('chai').expect;
//const app = require('../app');
"use strict";

// Setup Mocha and Chai
mocha.setup( "bdd" );
const expect = chai.expect;

/**
 * 1. Write a Calculator class that matches this specification
 */
describe( "Calculator", function(){
  let calculator;

  beforeEach( function(){
    calculator = new Calculator();
  } );
 
  it( "adds 1 and 2", function(){
    expect( calculator.add( 1, 2 ) ).to.equal( 3 );
  } );
 
  it( "subtracts 2 from 9", function(){
    expect( calculator.subtract( 9, 2 ) ).to.equal( 7 );
  } );
 
  it( "multiplies 4 and 3", function(){
    expect( calculator.multiply( 4, 3 ) ).to.equal( 12 );
  } );
 
  it( "divides 10 by 2", function(){
    expect( calculator.divide( 10, 2 ) ).to.equal( 5 );
  } );
     
  it( "does not divide by 0", function(){
    expect( calculator.divide( 5, 0 ) ).to.be.NaN;
  } );

  //it( "should provide a string of the class name", function(){
  //  expect().to.equal( "Calculator" );
  //} );
  
  it( "should provide a string description", function(){
    expect( Object.prototype.toString.call( calculator ) ).to.equal( "[object Calculator]" );
  } );
} );

/**
 * 2. Write a ScientificCalculator class that matches this specification
 */
describe( "ScientificCalculator", function(){
  let calculator;

  beforeEach( function(){
    calculator = new ScientificCalculator();
  } );
  
  it( "extends Calculator", function(){
    expect( calculator ).to.be.instanceOf( Calculator );
    expect( calculator ).to.be.instanceOf( ScientificCalculator );
  } );
 
  it( "returns the sine of PI / 2", function(){
    expect( calculator.sin( Math.PI / 2 ) ).to.equal( 1 );
  } );

  it( "returns the cosine of PI", function(){
    expect( calculator.cos( Math.PI ) ).to.equal( -1 );
  } );
 
  it( "returns the tangent of 0", function(){
    expect( calculator.tan( 0 ) ).to.equal( 0 );
  } );
 
  it( "returns the logarithm of 1", function(){
    expect( calculator.log( 1 ) ).to.equal( 0 );
  } );
  
  it( "should provide a string description", function(){
    expect( Object.prototype.toString.call( new calculator ) ).to.equal( "[object ScientificCalculator]" );
  } );
} );

/**
 * 3. Write a withSummation functional mixin that matches this specification
 */
describe( "withSummation", function(){
  let calculator;

  beforeEach( function(){
    calculator = new Calculator();
  } );
  
  it( "should be a function", function(){
    expect( withSummation ).to.be.a( "function" );
  } );
 
  it( "returns the Σ of 1 through 4", function(){
    expect( calculator ).to.not.have.property( "sum" );
    withSummation.call( calculator );
    expect( calculator ).to.have.property( "sum" ).that.is.a( "function" );
    expect( calculator.sum( 1, 2, 3, 4 ) ).to.equal( 10 );
  } );
} );

/**
 * 4. Add a calculate function to Calculator that matches this specification
 */
describe( "Calculator.calculate", function(){
  let calculator;

  beforeEach( function(){
    calculator = new Calculator();
  } );
  
  it( "returns a promise", function( done ){
    const
      callDone = () => done(),
      calculating = calculator.calculate( () => void 0 );
    expect( calculating ).to.be.instanceOf( Promise );
    calculating.then( callDone ).catch( callDone );
  } );
     
  it( "resolves when the calculation succeeds", function( done ){
    const calculating = calculator.calculate( function(){
      expect( this ).to.equal( calculator );
      let result = 0;
      result += this.add( 1, 2 );
      result += this.add( 3, 4 );
      return result;
    } );
    calculating
      .then( function( result ){
        expect( result ).to.equal( 10 );
        done();
      } )
      .catch( () => done() );
  } );
  
  it( "rejects when the calculation fails", function( done ){
    const calculating = calculator.calculate();
    calculating.catch( function( result ){
      expect( result ).to.be.NaN;
      done();
    } );
  } );
} );

/**
 * 5. Write an AsBusinessCalculator class mixin that matches this specification
 */
describe( "AsBusinessCalculator", function(){
  const
      p = 100,// $100 in principle
      t = 7;  // 7 years
  let BusinessCalculator, calculator;

  beforeEach( function(){
    BusinessCalculator = AsBusinessCalculator( Calculator );
    calculator = new BusinessCalculator();
  } );
  
  it( "should be a function", function(){
    expect( AsBusinessCalculator ).to.be.a( "function" );
  } );
  
  it( "extends Calculator", function(){
    expect( calculator ).to.be.instanceOf( Calculator );
    expect( calculator ).to.be.instanceOf( BusinessCalculator );
  } );
 
  it( "returns the simple interest", function(){
    let r;
    expect( calculator ).to.have.property( "simpleInterest" ).that.is.a( "function" );
    r = 5.5;// 5.5% rate
    expect( calculator.simpleInterest( p, r, t ) ).to.equal( p * ( r / 100 ) * t );
    r = 4.3;// 4.3% rate
    expect( calculator.simpleInterest( p, r, t ) ).to.equal( 30.10 );
  } );
  
  it( "should provide a string description", function(){
    expect( Object.prototype.toString.call( calculator ) ).to.equal( "[object BusinessCalculator]" );
  } );
} );

// Run the tests
mocha.run();
