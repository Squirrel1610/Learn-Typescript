interface WritePermissions {
  write: true;
}

interface ReadPermissions {
  write: false;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface Admin extends User, WritePermissions {}
interface Author extends User, WritePermissions {}
interface Reader extends User, ReadPermissions {}

type FilterWritable<T> = T extends { write: true } ? true : false;

type Writable = FilterWritable<Reader>;
