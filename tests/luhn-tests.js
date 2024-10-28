// Test Credit Card numbers examined from PayPal's list
// http://www.paypalobjects.com/en_US/vhelp/paypalmanager_help/credit_card_numbers.htm


// Importing the validation functions
import should from "should";
import { validate, setValidationConfig } from "../dist/luhn.js"; 

const _VALID_LUHN_NUMBER = "4012111111111111";
const _VALID_VERHOEFF_NUMBER = "1428570";

const AlgorithmType = {
	LUHN: 'luhn',
	VERHOEFF: 'verhoeff',
};

describe("Luhn Validation", function(){
	beforeEach(function () {
		setValidationConfig({ algorithm: AlgorithmType.LUHN });
	  });
	describe("Basic Requirements", function(){

		it("should trim the number", function(){
			validate(_VALID_LUHN_NUMBER + "       ").should.be.true;
		});

		it("should only allow numeric number strings", function(){
			validate(_VALID_LUHN_NUMBER + "A").should.be.false;
		});
	});

	describe("Happy Path", function(){
		it("should return true for valid number.", function(){
			validate(_VALID_LUHN_NUMBER).should.be.true;
		});
	});

	describe("Test Credit Card Numbers", function(){
		it("should pass America Express - 378282246310005", function(){
			var number = "378282246310005";
			validate(number).should.be.true;
		});

		it("should pass America Express - 371449635398431", function(){
			var number = "371449635398431";
			validate(number).should.be.true;
		});

		it("should pass America Express Corporate- 378734493671000", function(){
			var number = "378734493671000";
			validate(number).should.be.true;
		});

		it("should pass Australian BankCard - 5610591081018250", function(){
			var number = "5610591081018250";
			validate(number).should.be.true;
		});

		it("should pass Diners Club - 30569309025904", function(){
			var number = "30569309025904";
			validate(number).should.be.true;
		});

		it("should pass Diners Club - 38520000023237", function(){
			var number = "38520000023237";
			validate(number).should.be.true;
		});

		it("should pass Discover - 6011111111111117", function(){
			var number = "6011111111111117";
			validate(number).should.be.true;
		});

		it("should pass Discover - 6011000990139424", function(){
			var number = "6011000990139424";
			validate(number).should.be.true;
		});

		it("should pass JCB - 3530111333300000", function(){
			var number = "3530111333300000";
			validate(number).should.be.true;
		});

		it("should pass JCB - 3566002020360505", function(){
			var number = "3566002020360505";
			validate(number).should.be.true;
		});

		it("should pass MasterCard - 5555555555554444", function(){
			var number = "5555555555554444";
			validate(number).should.be.true;
		});

		it("should pass MasterCard - 5105105105105100", function(){
			var number = "5105105105105100";
			validate(number).should.be.true;
		});

		it("should pass Visa - 4111111111111111", function(){
			var number = "4111111111111111";
			validate(number).should.be.true;
		});

		it("should pass Visa - 4012888888881881", function(){
			var number = "4012888888881881";
			validate(number).should.be.true;
		});

		it("should pass Visa - 4222222222222", function(){
			var number = "4222222222222";
			validate(number).should.be.true;
		});

	});
	describe("Test Credit Card Numbers with Spaces", function() {
		it("should pass Visa - 4111 1111 1111 1111", function(){
			var number = "4111 1111 1111 1111";
			validate(number).should.be.true;
		});

		it("should pass Visa - 4012 8888 8888 1881", function(){
			var number = "4012 8888 8888 1881";
			validate(number).should.be.true;
		});

		it("should pass American Express - 3782 822463 10005", function(){
			var number = "378282246310005";
			validate(number).should.be.true;
		});


	});
	// describe("Random large number examples", function() {
	// 	var randomExamples = [];
	// 	var possible = "0123456789";
	// 	// generate random examples
	// 	for (var i = 0; i < 10; i++) {
	// 		// length is between 17 and 21
	// 		var length = Math.floor(Math.random() * 4 + 17);
	// 		var example = "";
	// 		for (var j = 0; j < length; j++) {
	// 			example += possible.charAt(Math.floor(Math.random() * possible.length));
	// 		}
	// 		randomExamples.push(example);
	// 	}

	// 	randomExamples.forEach(function(example) {
	// 		it("should have exactly one valid checksum digit after " + example, function() {
	// 			var validCount = 0;
	// 			for (var i = 0; i < 10; i++) {
	// 				var number = example + '' + i;
	// 				if (luhn(number)) {
	// 					validCount++;
	// 				}
	// 			}
	// 			validCount.should.equal(1);
	// 		});
	// 	})
	// });

	describe("User Submitted Issues", function(){
		it("should return false for number of zero.", function(){
			var number = "0";
			validate(number).should.be.false;
		});

		it("should return false for number of 4 zeroes.", function(){
			var number = "0000";
			validate(number).should.be.false;
		});

		it("should return false for number of 16 zeroes.", function(){
			var number = "0000000000000000";
			validate(number).should.be.false;
		});

		it("should return false if digits add to 0.", function(){
			var number = "00000000000000";
			validate(number).should.be.false;
		});

		it("should return false if passed an empty string", function(){
			var number = "";
			validate(number).should.be.false;
		});
	});
});


// Luhn Validation Tests
describe("Luhn Validation", function () {
  beforeEach(function () {
    setValidationConfig({ algorithm: AlgorithmType.LUHN });
  });

  describe("Basic Requirements", function () {
    it("should trim the number", function () {
      validate(_VALID_LUHN_NUMBER + "       ").should.be.true;
    });

    it("should only allow numeric number strings", function () {
      validate(_VALID_LUHN_NUMBER + "A").should.be.false;
    });
  });

  describe("Happy Path", function () {
    it("should return true for valid number.", function () {
      validate(_VALID_LUHN_NUMBER).should.be.true;
    });
  });

  describe("Test Credit Card Numbers", function () {
    const validNumbers = [
      "378282246310005",
      "371449635398431",
      "378734493671000",
      "5610591081018250",
      "30569309025904",
      "38520000023237",
      "6011111111111117",
      "6011000990139424",
      "3530111333300000",
      "3566002020360505",
      "5555555555554444",
      "5105105105105100",
      "4111111111111111",
      "4012888888881881",
      "4222222222222",
    ];

    validNumbers.forEach((number) => {
      it(`should pass validation for number: ${number}`, function () {
        validate(number).should.be.true;
      });
    });
  });

  describe("Test Credit Card Numbers with Spaces", function () {
    const validNumbersWithSpaces = [
      "4111 1111 1111 1111",
      "4012 8888 8888 1881",
      "3782 822463 10005",
    ];

    validNumbersWithSpaces.forEach((number) => {
      it(`should pass validation for number: ${number}`, function () {
        validate(number).should.be.true;
      });
    });
  });

  describe("Random large number examples", function () {
    const randomExamples = [];
    const possible = "0123456789";

    for (let i = 0; i < 10; i++) {
      const length = Math.floor(Math.random() * 4 + 17);
      let example = "";
      for (let j = 0; j < length; j++) {
        example += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      randomExamples.push(example);
    }

    randomExamples.forEach(function (example) {
      it(`should have exactly one valid checksum digit after ${example}`, function () {
        let validCount = 0;
        for (let i = 0; i < 10; i++) {
          const number = example + '' + i;
          if (validate(number)) {
            validCount++;
          }
        }
        validCount.should.equal(1);
      });
    });
  });

  describe("User Submitted Issues", function () {
    it("should return false for number of zero.", function () {
      validate("0").should.be.false;
    });

    it("should return false for number of 4 zeroes.", function () {
      validate("0000").should.be.false;
    });

    it("should return false for number of 16 zeroes.", function () {
      validate("0000000000000000").should.be.false;
    });

    it("should return false if digits add to 0.", function () {
      validate("00000000000000").should.be.false;
    });

    it("should return false if passed an empty string", function () {
      validate("").should.be.false;
    });
  });
});

// Verhoeff Validation Tests
describe("Verhoeff Validation", function () {
  beforeEach(function () {
    setValidationConfig({ algorithm: AlgorithmType.VERHOEFF });
  });

  describe("Basic Requirements", function () {
    it("should trim the number", function () {
      validate(_VALID_VERHOEFF_NUMBER + "       ").should.be.true;
    });

    it("should only allow numeric number strings", function () {
      validate(_VALID_VERHOEFF_NUMBER + "A").should.be.false;
    });
  });

  describe("Happy Path", function () {
    it("should return true for valid number.", function () {
      validate(_VALID_VERHOEFF_NUMBER).should.be.true;
    });
  });

  describe("User Submitted Issues", function () {
    it("should return false for number of zero.", function () {
      validate("0").should.be.false;
    });

    it("should return false for number of 4 zeroes.", function () {
      validate("0000").should.be.false;
    });

    it("should return false for number of 16 zeroes.", function () {
      validate("0000000000000000").should.be.false;
    });

    it("should return false if passed an empty string", function () {
      validate("").should.be.false;
    });
  });
});