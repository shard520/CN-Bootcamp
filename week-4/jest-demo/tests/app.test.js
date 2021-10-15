const {
  add,
  isArray,
  makeObj,
  checkLongArrEl,
  convertNumToStr,
  planetFinder,
  checkAttendance,
  movies,
  squareAndConcat,
  whatCentury,
  returnIntFromBinaryArr,
} = require('../app');

describe('test the add function', () => {
  it('should equal 5 when passed 2 and 3', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should equal -2 when passed 3 and -5', () => {
    expect(add(3, -5)).toBe(-2);
  });

  it('should not return null with only 1 argument', () => {
    expect(add(2)).not.toBe(null);
  });
});

describe('test the isArray function', () => {
  it('should return a truthy value when passed an array', () => {
    expect(isArray([1, 2, 3])).toBeTruthy();
  });

  it('should not return a falsy value when passed an empty array', () => {
    expect(isArray([])).not.toBeFalsy();
  });
});

describe('test the makeObj function', () => {
  it('should return an object with 2 properties: num and str', () => {
    expect(makeObj('num', 'str', 3, 'Hi')).toMatchObject({ num: 3, str: 'Hi' });
  });
});

describe('test the checkLongArrEl function', () => {
  it('should return an array with 1 item', () => {
    const arr = [1, 2, '34567890'];
    expect(checkLongArrEl(arr)).toHaveLength(1);
  });

  it('should return an array with 3 items', () => {
    const arr = [
      'Hello World!',
      'small',
      'testing testing, 1, 2 ,3',
      'oh',
      'final element',
    ];
    expect(checkLongArrEl(arr)).toHaveLength(3);
  });
});

describe('test the convertNumToStr function', () => {
  it('should return the string "12345"', () => {
    expect(convertNumToStr(12345)).toEqual('12345');
  });

  it('should return undefined when passed a string', () => {
    expect(convertNumToStr('123')).toEqual(undefined);
  });
});

describe('test the planetFinder function', () => {
  it('should return Earth when passed 3', () => {
    expect(planetFinder(3)).toBe('Earth');
  });
});

describe('test the checkAttendance function', () => {
  it('should return 2 when passed true true false false', () => {
    const arr = [true, true, false, false];
    expect(checkAttendance(arr)).toEqual(2);
  });

  it('should return 0 when passed false false false', () => {
    const arr = [false, false, false];
    expect(checkAttendance(arr)).toEqual(0);
  });
});

describe('test the squareAndConcat function', () => {
  it('should return 916 when passed 34', () => {
    expect(squareAndConcat(34)).toEqual(916);
  });

  it('should return 8181 when passed 99', () => {
    expect(squareAndConcat(99)).toEqual(8181);
  });
});

describe('test the whatCentury function', () => {
  it('should return 16 when passed 1609', () => {
    expect(whatCentury(1609)).toEqual(16);
  });
});

describe('test the returnIntFromBinaryArr function', () => {
  it('should return 4 when passed [0,1,0,0]', () => {
    expect(returnIntFromBinaryArr([0, 1, 0, 0])).toEqual(4);
  });

  it('should return 57 when passed [1, 1, 1, 0, 0, 1]', () => {
    expect(returnIntFromBinaryArr([1, 1, 1, 0, 0, 1])).toEqual(57);
  });
});

it('should contain Labyrinth', () => {
  expect(movies).toContain('Labyrinth');
});
