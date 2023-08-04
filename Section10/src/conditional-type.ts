type answer_1 = number extends 56 ? true : false;
type answer_2 = 76 extends number ? true : false;
type answer_3 = string[] extends any ? true : false;
type answer_4 = string[] extends any[] ? true : false;
type answer_5 = unknown extends any ? true : false;
type answer_6 = any extends any ? true : false;
type answer_7 = Date extends { new (...args: any[]): any } ? true : false;
type answer_8 = typeof Date extends { new (...args: any[]): any } 
  ? true
  : false;
