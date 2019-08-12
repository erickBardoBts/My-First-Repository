const wave = require("./wave");

const output = [ 'Erick es maravilloso',
                 'eRick es maravilloso',
                 'erIck es maravilloso',
                 'eriCk es maravilloso',
                 'ericK es maravilloso',
                 'erick Es maravilloso',
                 'erick eS maravilloso',
                 'erick es Maravilloso',
                 'erick es mAravilloso',
                 'erick es maRavilloso',
                 'erick es marAvilloso',
                 'erick es maraVilloso',
                 'erick es maravIlloso',
                 'erick es maraviLloso',
                 'erick es maravilLoso',
                 'erick es maravillOso',
                 'erick es maravilloSo',
                 'erick es maravillosO' ]

const olePuto = [ 'Ole putoooooo!!',
                  'oLe putoooooo!!',
                  'olE putoooooo!!',
                  'ole Putoooooo!!',
                  'ole pUtoooooo!!',
                  'ole puToooooo!!',
                  'ole putOooooo!!',
                  'ole putoOoooo!!',
                  'ole putooOooo!!',
                  'ole putoooOoo!!',
                  'ole putooooOo!!',
                  'ole putoooooO!!' ]

  const waveFn = wave("ole putoooooo!!")

  describe("Test on data type", () => {

    test("Output data Type", () => {
        const twoWords = "twoWords"
        expect(Array.isArray(wave(twoWords))).toBe(true)
    });
    test("Function data type", () =>{
      expect(typeof waveFn).toBe("object")
    });
    test("Output values data types",()=>{
      expect(typeof waveFn[0]).toBe("string")
    });
});

describe("Final results", () =>{
  test("Test on olePuto",()=>{
    expect(waveFn).toStrictEqual(olePuto)
  })
  test("Test on first input",()=>{
    expect(wave("erick es maravilloso")).toStrictEqual(output)
  })
});