export const KEY='osaka-route-v1';
export function normalize(raw={}){if(!raw||typeof raw!=='object')raw={};return {current:Number.isInteger(raw.current)&&raw.current>=1&&raw.current<=6?raw.current:1,done:Array.isArray(raw.done)?[...new Set(raw.done.filter(n=>Number.isInteger(n)&&n>=1&&n<=6))]:[],appointment:typeof raw.appointment==='string'&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(raw.appointment)?raw.appointment:''};}
export function read(storage){try{return normalize(JSON.parse(storage.getItem(KEY)||'{}'));}catch{return normalize();}}
export function write(storage,state){try{storage.setItem(KEY,JSON.stringify(normalize(state)));return true;}catch{return false;}}
