//// [tests/cases/compiler/promiseChaining.ts] ////

//// [promiseChaining.ts]
class Chain<T> {
    constructor(public value: T) { }
    then<S>(cb: (x: T) => S): Chain<S> {
        var result = cb(this.value);
        // should get a fresh type parameter which each then call
        var z = this.then(x => result)/*S*/.then(x => "abc")/*string*/.then(x => x.length)/*number*/; // No error
        return new Chain(result);
    }
}



//// [promiseChaining.js]
class Chain {
    value;
    constructor(value) {
        this.value = value;
    }
    then(cb) {
        var result = cb(this.value);
        // should get a fresh type parameter which each then call
        var z = this.then(x => result) /*S*/.then(x => "abc") /*string*/.then(x => x.length) /*number*/; // No error
        return new Chain(result);
    }
}
