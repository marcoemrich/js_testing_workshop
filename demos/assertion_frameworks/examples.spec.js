const unexpect = require('unexpected');
const assert = require('power-assert');

describe('length', () => {
  const someString = 'Hello World';

  it('jest', () => expect(someString.length).toEqual(12));
  it('unexpected', () => unexpect(someString, 'to have length', 12));
  it('power assert', () => assert(someString.length === 12));
});

describe('string equal', () => {
  it('jest', () => expect("Hello\nThis\nWorld").toEqual("Hello\n\These\nWorld"));
  it('unexpected', () => unexpect("Hello\nThis\nWorld", 'to equal', "Hello\n\These\nWorld"));
  it('power assert', () => assert.equal("Hello\nThis\nWorld", "Hello\n\These\nWorld"));
});

describe('greater than in obj', () => {
  const obj = {value: [7, 4]};

  it('jest equal', () => expect(obj.value[1] > 5).toBeTruthy());
  it('jest greater', () => expect(obj.value[1]).toBeGreaterThan(5));
  it('unexpected equal', () => unexpect(obj.value[1] > 5, 'to be true'));
  it('unexpected greater', () => unexpect(obj.value[1], 'to be greater than', 5));
  it('jest match', () => expect(obj).toMatchObject({value: [5, 5]}));
  it('unexpected satisfy', () =>
    unexpect(obj, 'to satisfy', {value: [5, unexpect.it('to be greater than', 4)]})
   );
  fit('unexpected satisfy', () =>
   assert(obj == {value: [5,  4]})
  );
  it('power assert', () => assert(obj.value[1] > 5));
});