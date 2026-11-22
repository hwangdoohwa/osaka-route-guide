import test from 'node:test';
import assert from 'node:assert/strict';
import {wholeRoute,currentRoute,segments} from '../dist/maps.js';
test('전체 경로는 제2터미널에서 병원으로 대중교통 검색',()=>{const p=new URL(wholeRoute).searchParams;assert.match(p.get('origin'),/第2ターミナル/);assert.match(p.get('destination'),/3-6-18/);assert.equal(p.get('travelmode'),'transit');assert.equal(p.get('api'),'1');});
test('현재 위치는 고정 출발지 없이 구글지도에서 결정',()=>{assert.equal(new URL(currentRoute).searchParams.has('origin'),false);assert.match(new URL(currentRoute).searchParams.get('destination'),/AND美容外科/);});
test('여섯 구간에서 철도·셔틀은 대중교통, 보행은 도보이며 북8 출발을 유지',()=>{assert.deepEqual(segments.map(s=>s.id),[1,2,3,4,5,6]);assert.match(segments[0].url,/\/search\//);for(const id of [2,3,5])assert.equal(new URL(segments[id-1].url).searchParams.get('travelmode'),'transit');for(const id of [4,6])assert.equal(new URL(segments[id-1].url).searchParams.get('travelmode'),'walking');assert.match(new URL(segments[5].url).searchParams.get('origin'),/北8/);for(const s of segments)assert.equal(new URL(s.url).hostname,'www.google.com');});
