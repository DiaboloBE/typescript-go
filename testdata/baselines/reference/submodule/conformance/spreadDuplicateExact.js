//// [tests/cases/conformance/types/spread/spreadDuplicateExact.ts] ////

//// [spreadDuplicateExact.ts]
// Repro from #44438

declare let a: { a: string };
declare let b: { a?: string };
declare let c: { a: string | undefined };
declare let d: { a?: string | undefined };

declare let t: boolean;

let a1 = { a: 123, ...a };  // string (Error)
let b1 = { a: 123, ...b };  // string | number
let c1 = { a: 123, ...c };  // string | undefined (Error)
let d1 = { a: 123, ...d };  // string | number | undefined

let a2 = { a: 123, ...(t ? a : {}) };  // string | number
let b2 = { a: 123, ...(t ? b : {}) };  // string | number
let c2 = { a: 123, ...(t ? c : {}) };  // string | number | undefined
let d2 = { a: 123, ...(t ? d : {}) };  // string | number | undefined


//// [spreadDuplicateExact.js]
let a1 = { a: 123, ...a }; // string (Error)
let b1 = { a: 123, ...b }; // string | number
let c1 = { a: 123, ...c }; // string | undefined (Error)
let d1 = { a: 123, ...d }; // string | number | undefined
let a2 = { a: 123, ...(t ? a : {}) }; // string | number
let b2 = { a: 123, ...(t ? b : {}) }; // string | number
let c2 = { a: 123, ...(t ? c : {}) }; // string | number | undefined
let d2 = { a: 123, ...(t ? d : {}) }; // string | number | undefined


//// [spreadDuplicateExact.d.ts]
// Repro from #44438
declare let a: {
    a: string;
};
declare let b: {
    a?: string;
};
declare let c: {
    a: string | undefined;
};
declare let d: {
    a?: string | undefined;
};
declare let t: boolean;
declare let a1: {
    a: string;
}; // string (Error)
declare let b1: {
    a: string | number;
}; // string | number
declare let c1: {
    a: string | undefined;
}; // string | undefined (Error)
declare let d1: {
    a: string | number | undefined;
}; // string | number | undefined
declare let a2: {
    a: string | number;
}; // string | number
declare let b2: {
    a: string | number;
}; // string | number
declare let c2: {
    a: string | number | undefined;
}; // string | number | undefined
declare let d2: {
    a: string | number | undefined;
}; // string | number | undefined
