//import myModule from 'myModule';
//import { each, omit } from 'lodash';

const foo = {
    bar: 1,
    baz: 2
};

const { bar, baz } = foo;

console.log(bar);

const arr = ['one', 'two', 'three'];

const [ first ] = arr;

const name = 'bob';

const obj = { name };

const obj2 = {
    ['name' + name]: 'bob\'s name'
};


function fun({ a, b, c = 'default c' }) {
    console.log(c);
};

fun({ c: 'arg c' });
fun(1, 2);


const greet = `hello ${name}.
how are you?`;

console.log(greet);


class Parent {
    age = 34;

    constructor() {

    }

    foo() {

    }

    static bar() {

    }
};

const parent = new Parent();
parent.foo();
Parent.bar();

class Child extends Parent {
    constructor() {
        super();
    }

    baz() {

    }
};

const child = new Child();
child.foo();