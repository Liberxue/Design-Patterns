class SingletonClass {
    constructor(name = "") {
        if (!!SingletonClass.instance) {
            return SingletonClass.instance;
        }

        SingletonClass.instance = this;

        this.name = name;

        return this;
    }

    getName() {
        return this.name;
    }
}
const instance1 = new SingletonClass(" 😂 ");
const instance2 = new SingletonClass(" 😂 😂 🤣");
const instance3 = new SingletonClass();
const instance4 = new SingletonClass(" 😸 😸 ");


console.log(`Name of instance1 is "${instance1.getName()}"`);
console.log(`Name of instance2 is "${instance2.getName()}"`);
console.log(`Name of instance3 is "${instance3.getName()}"`);
console.log(`Name of instance4 i "${instance4.getName()}"`);
