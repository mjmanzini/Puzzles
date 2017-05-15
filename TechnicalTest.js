/**
 * Main function to add all the functions for unit test to work correctly
 */
Puzzle = function () { };

/**
 * Check that the entered integer is a palindrome or not
 * @param  {Integer} listOfIntegers
 */
Puzzle.prototype.isPalindrome = function isPalindrome(listOfIntegers) {
    if (listOfIntegers) {
        var integerLength = listOfIntegers.length - 1;
        for (var i = 0, integerLength; i < integerLength / 2; i++) {
            if (listOfIntegers[i] !== listOfIntegers[integerLength - i]) {
                return false;
            }
        }
    }
    return true;
}

/**
 * Show the output of a palindrome
 */
function showPalindromeOutput() {
    document.getElementById("outputPalindrome").innerHTML = "output:" + Puzzle.prototype.isPalindrome(document.getElementById('palindromeInput').value);
}

/**
 * Flattens a nested list structure
 * @param  {[]} toBeFlatten
 */
Puzzle.prototype.flatten = function flatten(toBeFlatten) {
    var flat = [];
    if (toBeFlatten !== undefined) {
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i] instanceof Array) {
                flat = flat.concat(flatten.apply(null, arguments[i]));
            } else {
                flat.push(arguments[i]);
            }
        }
    }
    return flat;
}

/**
 * Show the output of a flattens
 */
function showFlattenOutput() {
    document.getElementById("outputFlatten").innerHTML = "output:" + Puzzle.prototype.flatten(JSON.parse(document.getElementById('flattenInput').value));
}

/**
 * Convert a array of repeating numbers to run length encode
 * @param  {[]} inputTest
 */
Puzzle.prototype.run_length_encode = function run_length_encode_data(inputTest) {
    var countElement = 1;
    var compressedVersion = [];
    for (var x = 0; x < inputTest.length; x++) {
        if (inputTest[x] !== inputTest[x + 1]) {
            compressedVersion.push('(' + inputTest[x] + ',' + countElement + ')');
            countElement = 1;
        } else {
            countElement++;
        }
    }
    return compressedVersion;
}

/**
 * Show the output of a run length encode
 */
function showRunLengthEncodeOutput() {
    document.getElementById("outputRunEncode").innerHTML = "output:" + Puzzle.prototype.run_length_encode(JSON.parse(document.getElementById('runEncodeInput').value));
}