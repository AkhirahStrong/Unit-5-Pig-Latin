const { translate } = require("../src/index");

/*Words starting with different vowels
translate("apple") → "appleway"
translate("else") → "elseway"
Words starting with one consonant
translate("giraffe") → "iraffegay"*/

describe("Add function", function () {
  //translate("apple") → "appleway"
  test("Words starting with different vowels", function () {
    expect(translate("apple")).toEqual("appleway");
  });

  //translate("else") → "elseway"
  test("Words starting with different vowels", function () {
    expect(translate("else")).toEqual("elseway");
  });

  //translate("index") → "indexway"
  test("Words starting with different vowels", function () {
    expect(translate("index")).toEqual("indexway");
  });

  //translate("other") → "otherway"
  test("Words starting with different vowels", function () {
    expect(translate("other")).toEqual("otherway");
  });

  //translate("auto") → "autoway"
  test("Words starting with different vowels", function () {
    expect(translate("auto")).toEqual("autoway");
  });

  //translate("giraffe") → "iraffegay
  test("Words starting with different vowels", function () {
    expect(translate("giraffe")).toEqual("iraffegay");
  });

  //translate("record") → "ecordray
  test("Words starting with different vowels", function () {
    expect(translate("record")).toEqual("ecordray");
  });

  //translate("play") → "ayplay
  test("Words starting with different vowels", function () {
    expect(translate("play")).toEqual("ayplay");
  });

  //translate("scribe") → "ibescray
  test("Words starting with different vowels", function () {
    expect(translate("scribe")).toEqual("ibescray");
  });

  //translate("Scribe") → "scribe
  //ask in class
  test("Converts word to lowercase", function () {
    const result = translate("Hello");
    expect(result).toBe("hello");
  });
});
