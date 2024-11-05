const {togglePopUp, togglePopUp2} = require('./index');
const { JSDOM } = require('jsdom');

const dom= new JSDOM();

describe('A função togglePopUp', () => {
    test('é do tipo function', () => {
        expect(typeof (togglePopUp())).toBe('function');
    })
})