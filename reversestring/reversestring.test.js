const reverseString = require('./reversestring');

describe('Reverse a String', () => {
    it('should be a function', () => {
        expect(typeof reverseString).toEqual('function');
    });

    it('should return a string', () => {
        expect(typeof reverseString('Howdy')).toEqual('string');
    });

    it('should return the reversed string', () => {
        expect(reverseString('bonjour')).toEqual('ruojnob');
        expect(reverseString('wow')).toEqual('wow');
        expect(reverseString('hi there')).toEqual('ereht ih');
    });
});
