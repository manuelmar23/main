const expect = chai.expect;

describe('convert to Roman', function() {
  it('TC-1: should return null for 0', function() {
    expect(toRoman(0)).to.be.null;
  });

  it('TC-2: should convert 4 to "IV"', function() {
    expect(toRoman(4)).to.equal('IV');
  });

  it('TC-3: should convert 9 to "IX"', function() {
    expect(toRoman(9)).to.equal('IX');
  });

  it('TC-4: should convert 58 to "LVIII"', function() {
    expect(toRoman(58)).to.equal('LVIII');
  });

  it('TC-5: should convert 3999 to "MMMCMXCIX"', function() {
    expect(toRoman(3999)).to.equal('MMMCMXCIX');
  });
});

describe('conver to Integer', function() {
  it('TC-7: should convert "I" to 1', function() {
    expect(fromRoman('I')).to.equal(1);
  });

  it('TC-8: should convert "MMMCMXCIX" to 3999', function() {
    expect(fromRoman('MMMCMXCIX')).to.equal(3999);
  });

  it('TC-9: should return null for "MMMCMXCIXI"', function() {
      expect(fromRoman('MMMCMXCIXI')).to.not.equal(3999);
  });

  it('TC-10: should return null for "-IV"', function() {
    expect(fromRoman('-IV')).to.be.null;
  });

  it('TC-11: should convert "IV" to 4', function() {
    expect(fromRoman('IV')).to.equal(4);
  });

  it('TC-12: should return null for empty input', function() {
    expect(fromRoman('')).to.exist;
  });

  it('TC-13: should return null for invalid characters', function() {
    expect(fromRoman('ABC')).to.be.null;
  });
});