class User {
  name: string;
  age: string;

  constructor(name: string, age: string) {
    this.name = name;
    this.age = age;
  }

  get username(): string {
    return this.name;
  }

}