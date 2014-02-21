describe('encrypt', function(){
  it("it takes a message with no punctuation and no spaces returns the encrypted message", function() {
    encrypt("abcdefghij").should.equal("aeibf jcgdh");
  });

  it("it takes a message with spaces but no caps or punctuation and returns the encrypted message", function() {
    encrypt("abcd efghi j").should.equal("aeibf jcgdh");
  });

  it("it takes a message with spaces and caps but no punctuation and returns the encrypted message", function() {
    encrypt("Abcd efghi J").should.equal("aeibf jcgdh");
  });

  it("it takes a message with spaces, caps, and punctuation and returns the encrypted message", function() {
    encrypt("abcd ef!ghi j").should.equal("aeibf jcgdh");
  });

});


// describe('numColumn', function() {
//   it("returns the number of columns to encrypt the message", function() {
//     numColumn("jjjjjjjjjj").should.equal(4);
//   });
// });
