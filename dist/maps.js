export const hospital='大阪市中央区南船場3-6-18 ケーズビル AND美容外科 心斎橋院';
export const airport='関西国際空港 第2ターミナル 国際線 到着ロビー';
export function directions(origin,destination,travelmode='transit'){
  const u=new URL('https://www.google.com/maps/dir/');
  u.searchParams.set('api','1');
  if(origin)u.searchParams.set('origin',origin);
  u.searchParams.set('destination',destination);
  u.searchParams.set('travelmode',travelmode);
  return u.href;
}
export const wholeRoute=directions(airport,hospital);
export const currentRoute=directions(null,hospital);
const search=q=>'https://www.google.com/maps/search/?'+new URLSearchParams({api:'1',query:q});
export const segments=[
 {id:1,url:search('関西国際空港 第2ターミナル'),label:'제2터미널 위치 보기',note:'도착 로비에서 셔틀 승차장까지는 아래 사진·표지판 안내를 따르세요. 지도는 터미널 위치를 표시합니다.'},
 {id:2,url:directions('関西国際空港 第2ターミナル','関西空港駅'),label:'제2터미널에서 공항역까지',note:'무료 셔틀은 지도 검색 결과에 나오지 않을 수 있습니다. 공항 공식 셔틀 안내를 우선하세요.'},
 {id:3,url:directions('関西空港駅 南海電鉄','南海なんば駅'),label:'공항역에서 난카이 난바역까지',note:'검색 결과에서 난카이 열차인지 확인하세요. 라피트와 공항급행의 발권·좌석 조건은 다릅니다.'},
 {id:4,url:directions('南海なんば駅','なんば駅 御堂筋線','walking'),label:'난카이 난바에서 지하철 난바까지',note:'지도는 역 사이의 보행 참고용입니다. 3F → 1F → B1 내부 환승은 아래 사진과 표지판 안내를 따르세요.'},
 {id:5,url:directions('なんば駅 御堂筋線','心斎橋駅 御堂筋線'),label:'지하철 난바에서 신사이바시까지',note:'미도스지선 우메다 방면인지 확인하세요. 기존 안내는 한 정거장 이동입니다.'},
 {id:6,url:directions('クリスタ長堀 北8出口',hospital,'walking'),label:'북8 출구에서 병원까지 걷기',note:'지도에서 출발지가 크리스타 북8 출구인지 확인하세요. 南船場3-6-18 건물에 도착한 뒤 10층으로 올라가세요.'}
];
