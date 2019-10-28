describe('string_calc', () => {
  it('should return 0 for an empty string', () => {
    expect(calc("")).toEqual(0);
  });

  it('should return the value of a single number', () => {
    expect(calc("1")).toEqual(1);
  });

  it('should return the sum of multiple numbers', () => {
    expect(calc("1,2,3")).toEqual(6);
  });

  it('should throw on negative numbers', () => {
    expect(() => calc("-1,1,2,3")).toThrowError();
  });
});

const calc = (str) => {
  if (str.split(',').some(n => n < 0)) throw Error('negative');

  return str.split(',')
    .map(Number)
    .reduce((a, b) => a + b, 0)
}
