function person(name: string, age: number) {
  return {
    name: name,
    age: age,
  };
}

type GetFirstArgumentOfAnyFucntion<T> = T extends (
  first: infer FirstArgument,
  ...args: any[]
) => any
  ? FirstArgument
  : never;

type GetSecondArgumentOfAnyFucntion<T> = T extends (
  first: any,
  second: infer SecondArgument,
  ...args: any[]
) => any
  ? SecondArgument
  : never;

type FirstArgument = GetFirstArgumentOfAnyFucntion<typeof person>;
type SecondArgument = GetSecondArgumentOfAnyFucntion<typeof person>;
