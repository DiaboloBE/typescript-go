//// [tests/cases/conformance/jsdoc/tsNoCheckForTypescript.ts] ////

//// [file.ts]
// @ts-nocheck

export const a = 1 + {}; // This is an error, ofc, `Operator '+' cannot be applied to types '1' and '{}'`, which will be suppressed by the `nocheck` comment

export interface Aleph {
    q: number;
}

export class Bet implements Aleph {
    q: string = "lol" // And so will this implements error
}


//// [file.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bet = exports.a = void 0;
// @ts-nocheck
exports.a = 1 + {}; // This is an error, ofc, `Operator '+' cannot be applied to types '1' and '{}'`, which will be suppressed by the `nocheck` comment
class Bet {
    q = "lol"; // And so will this implements error
}
exports.Bet = Bet;


//// [file.d.ts]
// @ts-nocheck
export declare const a: any; // This is an error, ofc, `Operator '+' cannot be applied to types '1' and '{}'`, which will be suppressed by the `nocheck` comment
export interface Aleph {
    q: number;
}
export declare class Bet implements Aleph {
    q: string; // And so will this implements error
}
