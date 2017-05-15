describe("Puzzles", function () {
  var puzzles;
  //This will be called before running each spec
  beforeEach(function () {
    puzzles = new Puzzle();
  });

  it("should determine that the list of integers as its single argument and returns a boolean to indicate whether a list is a palindrome", function () {
    var testInput = [1, 2, 3, 2];
    expect(puzzles.isPalindrome(testInput)).toEqual(false);
    testInput = [1, 2, 3, 2, 1];
    expect(puzzles.isPalindrome(testInput)).toEqual(true);
  });

  it("should flattens a nested list structure", function () {
    var testInput = [1, 2, [3, [4]]];
    expect(puzzles.flatten(testInput)).toEqual([1, 2, 3, 4]);
    testInput = [1, [2, 1, 3, 5], [3, [[4]]]];
    expect(puzzles.flatten(testInput)).toEqual([1, 2, 1, 3, 5, 3, 4]);
  });

   it("should run�length encoding data compression method.", function () {
    var testInput = [1,1,1,1,2,2,3,1];
    expect(puzzles.run_length_encode(testInput)).toEqual(["(1,4)", "(2,2)", "(3,1)", "(1,1)"]);
   testInput = [0, 0, 0, 1, 1, 1, 2, 2, 2, 1, 3, 3, 3, 3, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    expect(puzzles.run_length_encode(testInput)).toEqual(["(0,3)", "(1,3)", "(2,3)", "(1,1)", "(3,4)", "(0,1)", "(1,17)", "(0,4)", "(3,1)", "(1,17)"]);
  });

});