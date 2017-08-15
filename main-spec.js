'use strict';
const findMid = require('./main');

describe('Postnet测试', () => {
    const zip1="95713";
    const zip2="95713-9571";
    const barcode1="||:|:::|:|:|:::|:::||::||::|:|:|";
    const barcode2="||:|:::|:|:|:::|:::||::||:|:|:::|:|:|:::|:::||::||:|";

    it('1.Postnetzip to  barcode', () => {
        const result =findMid(zip1);
        expect(result).toEqual("||:|:::|:|:|:::|:::||::||::|:|:|");
    })


     it('1.Postnetzip to  barcode', () => {
        const result =findMid(zip2);
        expect(result).toEqual("||:|:::|:|:|:::|:::||::||:|:|:::|:|:|:::|:::||::||:|");
    })



     it('1.Postnet barcode to zip', () => {
        const result =findMid(barcode1);
        expect(result).toEqual("95713");
    })


        it('1.Postnet barcode to zip', () => {
        const result =findMid(barcode2);
        expect(result).toEqual("95713-9571");
    })
    
    


    
})