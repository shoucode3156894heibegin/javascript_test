// 変数宣言
var place = '';
var intervalID = -1;
var spotList = [];

// 行きたい場所を配列にぶち込む
spotList = ['アメリカ',
            'カナダ',
            'オーストラリア',
            '中国',
            '台湾',
            'ドバイ',
            'モロッコ',
            'ロシア',
            'ギリシャ',
            'スペイン',
            'フランス',
            'イギリス',
          ];



// スタートボタンを押したときの処理
function clickedStart() {
  if(intervalID == -1){
  intervalID = setInterval(function() {
  place = spotList[Math.floor(Math.random() * spotList.length )];       
   document.getElementById("isPlace").innerHTML = place;
    }, 50);
    document.getElementById("placeDetail").innerHTML = "";
}else if(intervalID != -1){
  clearTimeout(intervalID);
  intervalID = setInterval(function(){
    place = spotList[Math.floor(Math.random()*spotList.length)];
    document.getElementById("isPlace").innerHTML = place;
  },50);
  document.getElementById("placeDetail").innerHTML="";
}}

// ストップボタンを押した時の処理
function clickedStop() {
   if(intervalID != -1) {
   clearTimeout(intervalID);
    // 結果を画面に表示
    document.getElementById("isPlace").innerHTML = place;

    if(place == "アメリカ"){
      document.getElementById("placeDetail").innerHTML = "有名な観光スポット:ニューヨーク、シカゴ、ボストン、。"
    }
    if(place == "カナダ"){
      document.getElementById("placeDetail").innerHTML ="有名な観光スポット:ナイアガラの滝、メープル街道、ノートルダム大聖堂。"
    }
    if(place == "オーストラリア"){
      document.getElementById("placeDetail").innerHTML ="有名な観光スポット:エアーズロック、グレートバリアリーフ。"
    }
    if(place == "中国"){
      document.getElementById("placeDetail").innerHTML ="有名な観光スポット:天安門、故宮、万里の長城。"
    }
    if(place == "台湾"){
      document.getElementById("placeDetail").innerHTML ="有名な観光スポット:台北101、四四南村、士林夜市。"
    }
    if(place == "ドバイ"){
      document.getElementById("placeDetail").innerHTML ="有名な観光スポット:ブルジュ・ハリファ、ドバイ・モール、ブルジュ・アラブ。"
    }
    if(place == "モロッコ"){
      document.getElementById("placeDetail").innerHTML ="有名な観光スポット:サハラ砂漠、シャウエン、フェズ。"
    }
    if(place == "ロシア"){
      document.getElementById("placeDetail").innerHTML ="有名な観光スポット:モスクワ、赤の広場、クレムリン。"
    }
    if(place == "ギリシャ"){
      document.getElementById("placeDetail").innerHTML ="有名な観光スポット:アテネ、サントリーニ、テッサロニキ。"
    }
    if(place == "スペイン"){
      document.getElementById("placeDetail").innerHTML ="有名な観光スポット:マドリード、バルセロナ、アリカンテ。"
    }
    if(place == "フランス"){
      document.getElementById("placeDetail").innerHTML ="有名な観光スポット:パリ、マルセイユ、ニース"
    }
    if(place == "イギリス"){
      document.getElementById("placeDetail").innerHTML ="有名な観光スポット:ロンドン、リヴァプール、マンチェスター"
    }
    // if(place == ""){
    //   document.getElementById("placeDetail").innerHTML ="有名な観光スポット:"
    // }
}
if(intervallID == -1){
  document.getElementById("isPlace").innerHTML = "どこに行こうか?";
  document.getElementById("placeDetail").innerHTML = "";
}

}

function clickedReset(){
  intervalID = -1
  place = "";
  document.getElementById("isPlace").innerHTML = "どこに行こうか?";
  document.getElementById("placeDetail").innerHTML ="";
}