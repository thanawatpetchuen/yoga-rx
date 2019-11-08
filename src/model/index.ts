export class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get info(): { name: string, age: number } {
    return {
      name: this.name,
      age: this.age,
    };
  }

}
// export interface User {
//   name: string,
//   age: number,
// }