const penjumlahan = require('../aritmatika');

describe('test jest', () => {
    test('testing to see if jest works', () => {
        expect(1).toEqual(1);
    });
    test('penjumlahan', () => {
        const hasil = penjumlahan(3,6);
        expect(hasil).toEqual(9);
        expect(hasil).toMatchSnapshot();
    });
}); 