const anagram = require('./anagram');

describe('Anagram', () => {
    it('should be a function', () => {
        expect(typeof anagram).toEqual('function');
    });
    it('should return a boolean', () => {
        expect(typeof anagram('ram', 'arm')).toEqual('boolean');
    });
    it('should return true if an anagram', () => {
        expect(anagram('ram', 'arm')).toBeTruthy();
        expect(anagram('cinema', 'iceman')).toBeTruthy();
    });
    it('should return false if not an anagram', () => {
        expect(anagram('howdy', 'candy')).toBeFalsy();
        expect(anagram('world', 'twirl')).toBeFalsy();
    });
});
