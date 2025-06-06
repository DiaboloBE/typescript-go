//// [tests/cases/compiler/declarationEmitDistributiveConditionalWithInfer.ts] ////

//// [declarationEmitDistributiveConditionalWithInfer.ts]
// This function's type is changed on declaration
export const fun = (
    subFun: <Collection, Field extends keyof Collection>()
        => FlatArray<Collection[Field], 0>[]) => { };


//// [declarationEmitDistributiveConditionalWithInfer.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fun = void 0;
// This function's type is changed on declaration
const fun = (subFun) => { };
exports.fun = fun;


//// [declarationEmitDistributiveConditionalWithInfer.d.ts]
// This function's type is changed on declaration
export declare const fun: (subFun: <Collection, Field extends keyof Collection>() => (Collection[Field] extends infer T ? T extends Collection[Field] ? T extends readonly (infer InnerArr)[] ? InnerArr : T : never : never)[]) => void;
