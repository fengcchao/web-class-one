const anagram=require('../lib/anagram')
describe("anagram",()=>{
    it("should return [] when input is empty string",()=>{
        expect(anagram().toEqual([]))
    })
})