type ArrayElementType<T> = T extends (infer E)[] ? E : T;

type TypeOne = ArrayElementType<string[]>;
// string

type TypeTwo = ArrayElementType<number[]>;
// number

type TypeThree = ArrayElementType<(number | string | boolean)[]>;
// string | number| boolean

type TypeFour = ArrayElementType<{ name: string }>;
// { name: string }

type TypeFive = ArrayElementType<string>;
// string