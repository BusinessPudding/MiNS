var data =  {
    data2: [
      {
      id: '1484156307473063945',
      text: '金誠舘\n 住所 新潟県南魚沼市坂戸\n温泉旅館、割ぽう旅館、観光旅館、結婚式場、ビジネス旅館、ホテル、リゾート旅館、旅館'
    },
    {
      id: '1484156305514561538',
      text: '今さら年始にあったイッテQ新春SP観て温泉同好会がwwww耐えられないwwww'
    },
    { id: '1484156299785158656', text: '💓🌙🥂🤭\n#温泉 #減量' },
    { id: '1484156297801236487', text: 'ナイスネイチャが温泉旅館で座椅子に座って頼んでしまった' },
    { id: '1484156297276805121', text: '天元台高原\n\n旅館、ロッジ' },
    {
      id: '1484156286891884545',
      text: 'アライズ温泉回最高だな〜〜！！！テュオの殿様スキルが遺憾無く発揮されていてとても良い……ずっと笑ってしまう😂✨'
    },
    { id: '1484156283188310017', text: 'デーボス印の温泉卵はどうだ? うまいぞ!' },
    {
      id: '1484156269426475011',
      text: '@Ginsyri_spoon うん！温泉卵以上だったら卵好き！'
    },
    {
      id: '1484156266918604805',
      text: '【秋田犬】温泉の常連客・秋田犬のこはるちゃん https://t.co/1rHIdgRM6r @YouTubeより \n\nかわいい'
    },
    {
      id: '1484156266918338560',
      text: '株式会社石見観光浜田営業所\n' +
        ' 住所 島根県浜田市浅井町..\n' +
        '海外旅行業、航空券販売、国内旅行業、ホテル予約、旅館予約、宿泊予約、旅行業、旅行代理店'
    }
  ],
  meta: {
    newest_id: '1484156307473063945',
    oldest_id: '1484156266918338560',
    result_count: 10,
    next_token: 'b26v89c19zqg8o3fpe46smlxtqfxd3xao5s2tq0ftb0jh'
  }
}

// function getValue(obj) {
//     if (typeof obj === 'object') {
//         var strValue = ' ';
//         for (key in obj) {
//             strValue += getValue(obj[key]);
//         }
//         return strValue;
//     } else {
//         return obj;
//     }
// }

// 出力結果
const obj = JSON.stringify(data);
for(var item in data){
        console.log(data.data2[1].text);
}


