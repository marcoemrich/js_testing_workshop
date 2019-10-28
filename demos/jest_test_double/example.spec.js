const greet = (print, name) => print("Hello " + name);

describe('Mock Example: greet', () => {
  it('should print a greeting with Name', () => {
    let print = jest.fn()
    greet(print, "Alice");



    expect(print).toBeCalledWith("Hello Alice");
  });
});

greet(console.log.bind(console), "Steve");

class Person {
  read() {
    //some reading from API
  }

  fullName() {
    const personData = this.read();
    // this.read();
    return personData.firstName + " " + personData.name;
  }
}

describe('Stub Example', () => {
  it('should return full name of Person from API', () => {
    const p = new Person();
    const spy = jest.spyOn(p, "read");
    spy.mockReturnValue({name: "Wonder", firstName: "Alice"});

    p.fullName();

    // expect(spy).toHaveBeenCalledTimes(2)
    expect(p.fullName()).toEqual("Alice Wonder");
  });
});