const SEARCH_INDEX = [
  {
    "title": "健听女孩",
    "region": "美国",
    "year": "2021",
    "genre": "剧情,音乐,家庭",
    "category": "高清电影",
    "url": "./movie-0001.html",
    "cover": "./1.jpg"
  },
  {
    "title": "最美逆行者",
    "region": "中国大陆",
    "year": "2023",
    "genre": "剧情/灾难",
    "category": "爱情家庭",
    "url": "./movie-0002.html",
    "cover": "./2.jpg"
  },
  {
    "title": "万籁俱寂",
    "region": "中国大陆",
    "year": "2023",
    "genre": "悬疑/犯罪/剧情",
    "category": "综艺动漫",
    "url": "./movie-0003.html",
    "cover": "./3.jpg"
  },
  {
    "title": "夜幕下的故事",
    "region": "法国",
    "year": "2025",
    "genre": "剧情,悬疑,都市",
    "category": "爱情家庭",
    "url": "./movie-0004.html",
    "cover": "./4.jpg"
  },
  {
    "title": "伊瓦鲁",
    "region": "新西兰",
    "year": "2021",
    "genre": "悬疑、恐怖",
    "category": "动作冒险",
    "url": "./movie-0005.html",
    "cover": "./5.jpg"
  },
  {
    "title": "多情多恨",
    "region": "法国",
    "year": "2025",
    "genre": "爱情/剧情",
    "category": "动作冒险",
    "url": "./movie-0006.html",
    "cover": "./6.jpg"
  },
  {
    "title": "卡里加利博士的小屋",
    "region": "德国",
    "year": "2024",
    "genre": "恐怖/悬疑/黑色电影",
    "category": "海外热播",
    "url": "./movie-0007.html",
    "cover": "./7.jpg"
  },
  {
    "title": "月色撩人",
    "region": "法国",
    "year": "2024",
    "genre": "爱情/剧情/音乐",
    "category": "爱情家庭",
    "url": "./movie-0008.html",
    "cover": "./8.jpg"
  },
  {
    "title": "巴尔博大道",
    "region": "美国",
    "year": "2025",
    "genre": "犯罪,悬疑,黑色电影",
    "category": "悬疑犯罪",
    "url": "./movie-0009.html",
    "cover": "./9.jpg"
  },
  {
    "title": "婚礼约会",
    "region": "美国",
    "year": "2025",
    "genre": "浪漫喜剧",
    "category": "动作冒险",
    "url": "./movie-0010.html",
    "cover": "./10.jpg"
  },
  {
    "title": "大掌柜",
    "region": "中国大陆",
    "year": "2024",
    "genre": "商战/年代",
    "category": "动作冒险",
    "url": "./movie-0011.html",
    "cover": "./11.jpg"
  },
  {
    "title": "星叭克超有种",
    "region": "韩国",
    "year": "2024",
    "genre": "喜剧、剧情、家庭",
    "category": "国产精选",
    "url": "./movie-0012.html",
    "cover": "./12.jpg"
  },
  {
    "title": "仙逆剧场版神临之战",
    "region": "中国",
    "year": "2026",
    "genre": "动画,仙侠,动作",
    "category": "经典剧集",
    "url": "./movie-0013.html",
    "cover": "./13.jpg"
  },
  {
    "title": "莫里斯",
    "region": "英国",
    "year": "1987",
    "genre": "爱情/剧情/同性",
    "category": "综艺动漫",
    "url": "./movie-0014.html",
    "cover": "./14.jpg"
  },
  {
    "title": "布杜落水遇救记",
    "region": "法国",
    "year": "2024",
    "genre": "喜剧/剧情",
    "category": "动作冒险",
    "url": "./movie-0015.html",
    "cover": "./15.jpg"
  },
  {
    "title": "大闹广寒宫",
    "region": "中国大陆",
    "year": "2026",
    "genre": "奇幻/动作/喜剧",
    "category": "高清电影",
    "url": "./movie-0016.html",
    "cover": "./16.jpg"
  },
  {
    "title": "中国惊奇先生",
    "region": "中国大陆",
    "year": "2024",
    "genre": "奇幻、悬疑、搞笑",
    "category": "经典剧集",
    "url": "./movie-0017.html",
    "cover": "./17.jpg"
  },
  {
    "title": "驭鼠怪人",
    "region": "英国",
    "year": "2011",
    "genre": "心理惊悚",
    "category": "动作冒险",
    "url": "./movie-0018.html",
    "cover": "./18.jpg"
  },
  {
    "title": "俏女复仇",
    "region": "中国台湾",
    "year": "1988",
    "genre": "剧情/家庭",
    "category": "动作冒险",
    "url": "./movie-0019.html",
    "cover": "./19.jpg"
  },
  {
    "title": "燃烧岁月粤语",
    "region": "中国香港",
    "year": "2025",
    "genre": "剧情/历史/家庭",
    "category": "综艺动漫",
    "url": "./movie-0020.html",
    "cover": "./20.jpg"
  },
  {
    "title": "宇杀员",
    "region": "中国大陆",
    "year": "2024",
    "genre": "科幻,动作",
    "category": "经典剧集",
    "url": "./movie-0021.html",
    "cover": "./21.jpg"
  },
  {
    "title": "天体女泰山",
    "region": "日本",
    "year": "1988",
    "genre": "喜剧,奇幻,情色",
    "category": "经典剧集",
    "url": "./movie-0022.html",
    "cover": "./22.jpg"
  },
  {
    "title": "魔夜情狂",
    "region": "中国台湾",
    "year": "2025",
    "genre": "爱情/奇幻/情色",
    "category": "高清电影",
    "url": "./movie-0023.html",
    "cover": "./23.jpg"
  },
  {
    "title": "当我们懒在一起",
    "region": "中国台湾",
    "year": "2024",
    "genre": "喜剧爱情",
    "category": "爱情家庭",
    "url": "./movie-0024.html",
    "cover": "./24.jpg"
  },
  {
    "title": "无罪之凶",
    "region": "美国",
    "year": "2023",
    "genre": "犯罪/惊悚",
    "category": "海外热播",
    "url": "./movie-0025.html",
    "cover": "./25.jpg"
  },
  {
    "title": "探长薇拉第十四季",
    "region": "英国",
    "year": "2024",
    "genre": "犯罪,悬疑,剧情",
    "category": "综艺动漫",
    "url": "./movie-0026.html",
    "cover": "./26.jpg"
  },
  {
    "title": "请对我承诺",
    "region": "韩国",
    "year": "2024",
    "genre": "爱情",
    "category": "悬疑犯罪",
    "url": "./movie-0027.html",
    "cover": "./27.jpg"
  },
  {
    "title": "我为你喝彩",
    "region": "中国大陆",
    "year": "2023",
    "genre": "真人秀",
    "category": "经典剧集",
    "url": "./movie-0028.html",
    "cover": "./28.jpg"
  },
  {
    "title": "花间一倾城",
    "region": "中国大陆",
    "year": "2024",
    "genre": "古装奇幻爱情",
    "category": "悬疑犯罪",
    "url": "./movie-0029.html",
    "cover": "./29.jpg"
  },
  {
    "title": "雾中湖",
    "region": "法国",
    "year": "2024",
    "genre": "文艺悬疑",
    "category": "海外热播",
    "url": "./movie-0030.html",
    "cover": "./30.jpg"
  },
  {
    "title": "前哨第二季",
    "region": "美国",
    "year": "2026",
    "genre": "科幻,悬疑",
    "category": "国产精选",
    "url": "./movie-0031.html",
    "cover": "./31.jpg"
  },
  {
    "title": "摩登原始人第五季",
    "region": "美国",
    "year": "2024",
    "genre": "动画/喜剧/家庭",
    "category": "综艺动漫",
    "url": "./movie-0032.html",
    "cover": "./32.jpg"
  },
  {
    "title": "时空救赎",
    "region": "英国",
    "year": "2024",
    "genre": "科幻,悬疑,惊悚",
    "category": "国产精选",
    "url": "./movie-0033.html",
    "cover": "./33.jpg"
  },
  {
    "title": "瓦舍江湖",
    "region": "中国大陆",
    "year": "2022",
    "genre": "喜剧/古装",
    "category": "海外热播",
    "url": "./movie-0034.html",
    "cover": "./34.jpg"
  },
  {
    "title": "阿糠",
    "region": "中国台湾",
    "year": "2023",
    "genre": "剧情/家庭",
    "category": "爱情家庭",
    "url": "./movie-0035.html",
    "cover": "./35.jpg"
  },
  {
    "title": "蛮荒宝穴",
    "region": "美国/墨西哥",
    "year": "2022",
    "genre": "冒险/西部",
    "category": "经典剧集",
    "url": "./movie-0036.html",
    "cover": "./36.jpg"
  },
  {
    "title": "罗小黑战记2",
    "region": "中国大陆",
    "year": "2027",
    "genre": "动画,奇幻,治愈",
    "category": "动作冒险",
    "url": "./movie-0037.html",
    "cover": "./37.jpg"
  },
  {
    "title": "恋爱无法用双子除尽",
    "region": "日本",
    "year": "2024",
    "genre": "爱情,喜剧,校园",
    "category": "爱情家庭",
    "url": "./movie-0038.html",
    "cover": "./38.jpg"
  },
  {
    "title": "由宇子的天平",
    "region": "日本",
    "year": "2022",
    "genre": "剧情/悬疑",
    "category": "综艺动漫",
    "url": "./movie-0039.html",
    "cover": "./39.jpg"
  },
  {
    "title": "俗·再见,绝望先生",
    "region": "日本",
    "year": "2025",
    "genre": "喜剧,校园",
    "category": "海外热播",
    "url": "./movie-0040.html",
    "cover": "./40.jpg"
  },
  {
    "title": "暂停",
    "region": "中国大陆",
    "year": "2025",
    "genre": "科幻/悬疑/爱情",
    "category": "国产精选",
    "url": "./movie-0041.html",
    "cover": "./41.jpg"
  },
  {
    "title": "狼厅",
    "region": "英国",
    "year": "2015",
    "genre": "历史/剧情/政治",
    "category": "国产精选",
    "url": "./movie-0042.html",
    "cover": "./42.jpg"
  },
  {
    "title": "标心",
    "region": "中国大陆",
    "year": "2025",
    "genre": "爱情/科幻",
    "category": "经典剧集",
    "url": "./movie-0043.html",
    "cover": "./43.jpg"
  },
  {
    "title": "特勤精英",
    "region": "中国大陆",
    "year": "2021",
    "genre": "动作、职业",
    "category": "经典剧集",
    "url": "./movie-0044.html",
    "cover": "./44.jpg"
  },
  {
    "title": "龙须沟1952",
    "region": "中国大陆",
    "year": "2023",
    "genre": "剧情/历史/社会",
    "category": "国产精选",
    "url": "./movie-0045.html",
    "cover": "./45.jpg"
  },
  {
    "title": "禅在此山中",
    "region": "中国大陆",
    "year": "2020",
    "genre": "纪录片,人文",
    "category": "爱情家庭",
    "url": "./movie-0046.html",
    "cover": "./46.jpg"
  },
  {
    "title": "霍利车行",
    "region": "英国",
    "year": "2025",
    "genre": "黑色喜剧",
    "category": "海外热播",
    "url": "./movie-0047.html",
    "cover": "./47.jpg"
  },
  {
    "title": "林中漫步",
    "region": "美国/英国",
    "year": "2025",
    "genre": "冒险,喜剧,剧情",
    "category": "高清电影",
    "url": "./movie-0048.html",
    "cover": "./48.jpg"
  },
  {
    "title": "天使夜惊情",
    "region": "英国",
    "year": "1999",
    "genre": "悬疑/犯罪/爱情",
    "category": "高清电影",
    "url": "./movie-0049.html",
    "cover": "./49.jpg"
  },
  {
    "title": "摇滚东京恋习曲",
    "region": "日本",
    "year": "2025",
    "genre": "爱情,音乐,剧情",
    "category": "国产精选",
    "url": "./movie-0050.html",
    "cover": "./50.jpg"
  },
  {
    "title": "青春同学会",
    "region": "中国大陆",
    "year": "2018",
    "genre": "剧情/喜剧",
    "category": "国产精选",
    "url": "./movie-0051.html",
    "cover": "./51.jpg"
  },
  {
    "title": "艾拉娜·格雷泽:人类魔法",
    "region": "美国",
    "year": "2025",
    "genre": "喜剧,脱口秀,纪录片",
    "category": "高清电影",
    "url": "./movie-0052.html",
    "cover": "./52.jpg"
  },
  {
    "title": "惊心食人族2",
    "region": "美国",
    "year": "2025",
    "genre": "恐怖,惊悚",
    "category": "国产精选",
    "url": "./movie-0053.html",
    "cover": "./53.jpg"
  },
  {
    "title": "鸟语惊魂",
    "region": "美国",
    "year": "2024",
    "genre": "恐怖",
    "category": "综艺动漫",
    "url": "./movie-0054.html",
    "cover": "./54.jpg"
  },
  {
    "title": "摆高",
    "region": "中国大陆",
    "year": "2018",
    "genre": "剧情,运动,励志",
    "category": "高清电影",
    "url": "./movie-0055.html",
    "cover": "./55.jpg"
  },
  {
    "title": "生命中最美好的是自由",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情",
    "category": "高清电影",
    "url": "./movie-0056.html",
    "cover": "./56.jpg"
  },
  {
    "title": "嗨!营业中第三季",
    "region": "中国台湾",
    "year": "2025",
    "genre": "真人秀",
    "category": "动作冒险",
    "url": "./movie-0057.html",
    "cover": "./57.jpg"
  },
  {
    "title": "寻根问祖",
    "region": "中国大陆",
    "year": "2027",
    "genre": "剧情/家庭/历史",
    "category": "悬疑犯罪",
    "url": "./movie-0058.html",
    "cover": "./58.jpg"
  },
  {
    "title": "快乐的百万富翁",
    "region": "印度",
    "year": "2025",
    "genre": "喜剧,剧情",
    "category": "悬疑犯罪",
    "url": "./movie-0059.html",
    "cover": "./59.jpg"
  },
  {
    "title": "春意浓",
    "region": "日本",
    "year": "2025",
    "genre": "爱情,青春,剧情",
    "category": "悬疑犯罪",
    "url": "./movie-0060.html",
    "cover": "./60.jpg"
  },
  {
    "title": "急先锋横扫罪恶城",
    "region": "中国大陆",
    "year": "2024",
    "genre": "动作/警匪",
    "category": "国产精选",
    "url": "./movie-0061.html",
    "cover": "./61.jpg"
  },
  {
    "title": "春草",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情/文艺/家庭",
    "category": "海外热播",
    "url": "./movie-0062.html",
    "cover": "./62.jpg"
  },
  {
    "title": "怪兽大战外星人",
    "region": "美国",
    "year": "2009",
    "genre": "动画,喜剧,科幻",
    "category": "悬疑犯罪",
    "url": "./movie-0063.html",
    "cover": "./63.jpg"
  },
  {
    "title": "一路向南",
    "region": "美国",
    "year": "2023",
    "genre": "公路,犯罪",
    "category": "综艺动漫",
    "url": "./movie-0064.html",
    "cover": "./64.jpg"
  },
  {
    "title": "夜郎2007",
    "region": "中国大陆",
    "year": "2007",
    "genre": "剧情/公路/黑色幽默",
    "category": "经典剧集",
    "url": "./movie-0065.html",
    "cover": "./65.jpg"
  },
  {
    "title": "我和厄尔以及将死的女孩",
    "region": "美国",
    "year": "2025",
    "genre": "剧情,喜剧",
    "category": "综艺动漫",
    "url": "./movie-0066.html",
    "cover": "./66.jpg"
  },
  {
    "title": "劳拉的星星在中国",
    "region": "德国/中国大陆",
    "year": "2025",
    "genre": "家庭/奇幻/冒险",
    "category": "国产精选",
    "url": "./movie-0067.html",
    "cover": "./67.jpg"
  },
  {
    "title": "兄弟会大屠杀:三小派对",
    "region": "美国",
    "year": "2024",
    "genre": "恐怖、惊悚",
    "category": "国产精选",
    "url": "./movie-0068.html",
    "cover": "./68.jpg"
  },
  {
    "title": "梅布尔的失误",
    "region": "英国",
    "year": "2024",
    "genre": "悬疑剧情",
    "category": "国产精选",
    "url": "./movie-0069.html",
    "cover": "./69.jpg"
  },
  {
    "title": "焦糖人生",
    "region": "黎巴嫩/法国",
    "year": "2007",
    "genre": "剧情/女性/家庭",
    "category": "综艺动漫",
    "url": "./movie-0070.html",
    "cover": "./70.jpg"
  },
  {
    "title": "尹弟下山",
    "region": "中国大陆",
    "year": "2025",
    "genre": "喜剧/奇幻",
    "category": "高清电影",
    "url": "./movie-0071.html",
    "cover": "./71.jpg"
  },
  {
    "title": "未来世界1976",
    "region": "美国",
    "year": "1976",
    "genre": "科幻,惊悚",
    "category": "动作冒险",
    "url": "./movie-0072.html",
    "cover": "./72.jpg"
  },
  {
    "title": "王国",
    "region": "韩国",
    "year": "2026",
    "genre": "古装/惊悚/政治",
    "category": "动作冒险",
    "url": "./movie-0073.html",
    "cover": "./73.jpg"
  },
  {
    "title": "蝎子之歌",
    "region": "墨西哥",
    "year": "2024",
    "genre": "犯罪,惊悚,剧情",
    "category": "悬疑犯罪",
    "url": "./movie-0074.html",
    "cover": "./74.jpg"
  },
  {
    "title": "十架的色彩",
    "region": "中国香港",
    "year": "2023",
    "genre": "悬疑/犯罪/剧情",
    "category": "爱情家庭",
    "url": "./movie-0075.html",
    "cover": "./75.jpg"
  },
  {
    "title": "天呐我的丧尸!",
    "region": "韩国",
    "year": "2021",
    "genre": "喜剧/恐怖/爱情",
    "category": "动作冒险",
    "url": "./movie-0076.html",
    "cover": "./76.jpg"
  },
  {
    "title": "海雾",
    "region": "中国大陆",
    "year": "2024",
    "genre": "悬疑/灾难",
    "category": "爱情家庭",
    "url": "./movie-0077.html",
    "cover": "./77.jpg"
  },
  {
    "title": "脱泳而出",
    "region": "澳大利亚",
    "year": "2022",
    "genre": "运动,剧情",
    "category": "国产精选",
    "url": "./movie-0078.html",
    "cover": "./78.jpg"
  },
  {
    "title": "望实与君雄",
    "region": "日本",
    "year": "2025",
    "genre": "校园/悬疑/科幻",
    "category": "综艺动漫",
    "url": "./movie-0079.html",
    "cover": "./79.jpg"
  },
  {
    "title": "八路军",
    "region": "中国大陆",
    "year": "2025",
    "genre": "历史、战争",
    "category": "悬疑犯罪",
    "url": "./movie-0080.html",
    "cover": "./80.jpg"
  },
  {
    "title": "失踪: 消失的妻子",
    "region": "韩国",
    "year": "2020",
    "genre": "悬疑/惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-0081.html",
    "cover": "./81.jpg"
  },
  {
    "title": "鸣鸿传",
    "region": "中国大陆",
    "year": "2018",
    "genre": "喜剧,古装,奇幻",
    "category": "国产精选",
    "url": "./movie-0082.html",
    "cover": "./82.jpg"
  },
  {
    "title": "白富美的贴身高手",
    "region": "中国",
    "year": "2024",
    "genre": "爱情/动作",
    "category": "经典剧集",
    "url": "./movie-0083.html",
    "cover": "./83.jpg"
  },
  {
    "title": "空军敢死队",
    "region": "美国",
    "year": "1958",
    "genre": "战争、动作",
    "category": "国产精选",
    "url": "./movie-0084.html",
    "cover": "./84.jpg"
  },
  {
    "title": "合拍学生妹 粤语版",
    "region": "中国香港",
    "year": "1993",
    "genre": "剧情、伦理",
    "category": "经典剧集",
    "url": "./movie-0085.html",
    "cover": "./85.jpg"
  },
  {
    "title": "歌舞青春3:毕业季",
    "region": "美国",
    "year": "2023",
    "genre": "爱情、音乐",
    "category": "动作冒险",
    "url": "./movie-0086.html",
    "cover": "./86.jpg"
  },
  {
    "title": "我的青春不再见",
    "region": "中国大陆",
    "year": "2019",
    "genre": "剧情/青春",
    "category": "动作冒险",
    "url": "./movie-0087.html",
    "cover": "./87.jpg"
  },
  {
    "title": "大村官",
    "region": "中国大陆",
    "year": "2019",
    "genre": "剧情/乡村/喜剧",
    "category": "动作冒险",
    "url": "./movie-0088.html",
    "cover": "./88.jpg"
  },
  {
    "title": "夏威夷公主",
    "region": "美国",
    "year": "2025",
    "genre": "喜剧,冒险,家庭",
    "category": "海外热播",
    "url": "./movie-0089.html",
    "cover": "./89.jpg"
  },
  {
    "title": "婚约指环",
    "region": "中国大陆",
    "year": "2025",
    "genre": "奇幻/爱情",
    "category": "动作冒险",
    "url": "./movie-0090.html",
    "cover": "./90.jpg"
  },
  {
    "title": "她嫁了个警察",
    "region": "中国香港",
    "year": "1996",
    "genre": "家庭伦理",
    "category": "动作冒险",
    "url": "./movie-0091.html",
    "cover": "./91.jpg"
  },
  {
    "title": "云中谁寄锦书来2022",
    "region": "中国大陆",
    "year": "2022",
    "genre": "爱情,年代",
    "category": "高清电影",
    "url": "./movie-0092.html",
    "cover": "./92.jpg"
  },
  {
    "title": "冬日惊雷",
    "region": "瑞典/挪威",
    "year": "2023",
    "genre": "剧情/灾难",
    "category": "高清电影",
    "url": "./movie-0093.html",
    "cover": "./93.jpg"
  },
  {
    "title": "神秘代号:伊卡罗斯",
    "region": "美国",
    "year": "2025",
    "genre": "科幻,悬疑,动作",
    "category": "动作冒险",
    "url": "./movie-0094.html",
    "cover": "./94.jpg"
  },
  {
    "title": "异形:圣约",
    "region": "美国",
    "year": "2017",
    "genre": "科幻/恐怖",
    "category": "海外热播",
    "url": "./movie-0095.html",
    "cover": "./95.jpg"
  },
  {
    "title": "榄不住的爱",
    "region": "中国香港/中国大陆",
    "year": "2018",
    "genre": "爱情/运动/剧情",
    "category": "综艺动漫",
    "url": "./movie-0096.html",
    "cover": "./96.jpg"
  },
  {
    "title": "再见国王",
    "region": "澳大利亚/美国",
    "year": "1989",
    "genre": "战争,剧情",
    "category": "海外热播",
    "url": "./movie-0097.html",
    "cover": "./97.jpg"
  },
  {
    "title": "星球大战5:帝国反击战",
    "region": "美国",
    "year": "1980",
    "genre": "科幻,冒险,动作",
    "category": "综艺动漫",
    "url": "./movie-0098.html",
    "cover": "./98.jpg"
  },
  {
    "title": "见色忘友2",
    "region": "美国",
    "year": "2026",
    "genre": "喜剧,爱情",
    "category": "经典剧集",
    "url": "./movie-0099.html",
    "cover": "./99.jpg"
  },
  {
    "title": "室井慎次不败之人",
    "region": "日本",
    "year": "2025",
    "genre": "剧情/犯罪",
    "category": "动作冒险",
    "url": "./movie-0100.html",
    "cover": "./100.jpg"
  },
  {
    "title": "三喜临门粤语",
    "region": "中国香港",
    "year": "1985",
    "genre": "喜剧,爱情",
    "category": "动作冒险",
    "url": "./movie-0101.html",
    "cover": "./101.jpg"
  },
  {
    "title": "美国恐怖故事集第二季",
    "region": "美国",
    "year": "2026",
    "genre": "恐怖、惊悚、奇幻",
    "category": "国产精选",
    "url": "./movie-0102.html",
    "cover": "./102.jpg"
  },
  {
    "title": "古墓奇缘",
    "region": "中国大陆",
    "year": "2024",
    "genre": "冒险,动作,奇幻",
    "category": "国产精选",
    "url": "./movie-0103.html",
    "cover": "./103.jpg"
  },
  {
    "title": "吉奥瓦娜的长腿",
    "region": "意大利",
    "year": "1973",
    "genre": "剧情",
    "category": "经典剧集",
    "url": "./movie-0104.html",
    "cover": "./104.jpg"
  },
  {
    "title": "回应我",
    "region": "澳大利亚",
    "year": "2025",
    "genre": "恐怖/悬疑/心理",
    "category": "高清电影",
    "url": "./movie-0105.html",
    "cover": "./105.jpg"
  },
  {
    "title": "三面娜迦",
    "region": "泰国",
    "year": "2016",
    "genre": "神话爱情剧",
    "category": "悬疑犯罪",
    "url": "./movie-0106.html",
    "cover": "./106.jpg"
  },
  {
    "title": "跑马地的月光粤语",
    "region": "中国香港",
    "year": "2000",
    "genre": "爱情/剧情/文艺",
    "category": "海外热播",
    "url": "./movie-0107.html",
    "cover": "./107.jpg"
  },
  {
    "title": "美国恐怖故事第二季",
    "region": "美国",
    "year": "2024",
    "genre": "恐怖,惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-0108.html",
    "cover": "./108.jpg"
  },
  {
    "title": "烈日灼人",
    "region": "俄罗斯",
    "year": "1994",
    "genre": "剧情/历史",
    "category": "经典剧集",
    "url": "./movie-0109.html",
    "cover": "./109.jpg"
  },
  {
    "title": "高校功夫女神",
    "region": "中国香港",
    "year": "2026",
    "genre": "喜剧/动作/校园",
    "category": "动作冒险",
    "url": "./movie-0110.html",
    "cover": "./110.jpg"
  },
  {
    "title": "当我们在一起",
    "region": "中国香港",
    "year": "2025",
    "genre": "剧情/家庭",
    "category": "经典剧集",
    "url": "./movie-0111.html",
    "cover": "./111.jpg"
  },
  {
    "title": "海宫仙蕊",
    "region": "中国",
    "year": "2026",
    "genre": "古装、奇幻、爱情",
    "category": "动作冒险",
    "url": "./movie-0112.html",
    "cover": "./112.jpg"
  },
  {
    "title": "民间传奇之帝女花粤语",
    "region": "中国香港",
    "year": "2025",
    "genre": "古装/戏曲",
    "category": "经典剧集",
    "url": "./movie-0113.html",
    "cover": "./113.jpg"
  },
  {
    "title": "变调假期",
    "region": "泰国",
    "year": "2022",
    "genre": "悬疑,惊悚",
    "category": "综艺动漫",
    "url": "./movie-0114.html",
    "cover": "./114.jpg"
  },
  {
    "title": "明星大侦探第五季",
    "region": "中国大陆",
    "year": "2020",
    "genre": "推理,悬疑,真人秀",
    "category": "动作冒险",
    "url": "./movie-0115.html",
    "cover": "./115.jpg"
  },
  {
    "title": "人在边缘粤语",
    "region": "香港",
    "year": "1990",
    "genre": "犯罪,剧情,动作",
    "category": "爱情家庭",
    "url": "./movie-0116.html",
    "cover": "./116.jpg"
  },
  {
    "title": "衰落与瓦解",
    "region": "英国",
    "year": "2017",
    "genre": "喜剧,剧情",
    "category": "综艺动漫",
    "url": "./movie-0117.html",
    "cover": "./117.jpg"
  },
  {
    "title": "欣快",
    "region": "美国/英国",
    "year": "2019",
    "genre": "剧情/青春/悬疑",
    "category": "海外热播",
    "url": "./movie-0118.html",
    "cover": "./118.jpg"
  },
  {
    "title": "我们大家的河合庄",
    "region": "日本",
    "year": "2026",
    "genre": "喜剧/爱情/日常",
    "category": "经典剧集",
    "url": "./movie-0119.html",
    "cover": "./119.jpg"
  },
  {
    "title": "神奇的旋转木马",
    "region": "英国/法国",
    "year": "2021",
    "genre": "动画/家庭/奇幻",
    "category": "海外热播",
    "url": "./movie-0120.html",
    "cover": "./120.jpg"
  },
  {
    "title": "坚.的士判官",
    "region": "中国香港",
    "year": "1999",
    "genre": "动作,犯罪",
    "category": "综艺动漫",
    "url": "./movie-0121.html",
    "cover": "./121.jpg"
  },
  {
    "title": "咖啡吧",
    "region": "韩国",
    "year": "2026",
    "genre": "悬疑奇幻",
    "category": "悬疑犯罪",
    "url": "./movie-0122.html",
    "cover": "./122.jpg"
  },
  {
    "title": "不道德的交易",
    "region": "美国",
    "year": "2024",
    "genre": "惊悚/犯罪/剧情",
    "category": "爱情家庭",
    "url": "./movie-0123.html",
    "cover": "./123.jpg"
  },
  {
    "title": "名声大噪",
    "region": "美国",
    "year": "2012",
    "genre": "歌舞/剧情",
    "category": "爱情家庭",
    "url": "./movie-0124.html",
    "cover": "./124.jpg"
  },
  {
    "title": "龙纹身的女孩",
    "region": "瑞典/丹麦",
    "year": "2026",
    "genre": "悬疑/惊悚/犯罪",
    "category": "高清电影",
    "url": "./movie-0125.html",
    "cover": "./125.jpg"
  },
  {
    "title": "三个鲁伯特",
    "region": "英国",
    "year": "2012",
    "genre": "剧情/喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-0126.html",
    "cover": "./126.jpg"
  },
  {
    "title": "洪福齐天",
    "region": "中国香港",
    "year": "1991",
    "genre": "喜剧,奇幻",
    "category": "高清电影",
    "url": "./movie-0127.html",
    "cover": "./127.jpg"
  },
  {
    "title": "夜夜望春归",
    "region": "中国大陆",
    "year": "2025",
    "genre": "古装,家庭,剧情",
    "category": "动作冒险",
    "url": "./movie-0128.html",
    "cover": "./128.jpg"
  },
  {
    "title": "麻烦跟我走",
    "region": "中国",
    "year": "2025",
    "genre": "喜剧/公路",
    "category": "动作冒险",
    "url": "./movie-0129.html",
    "cover": "./129.jpg"
  },
  {
    "title": "既然出生就环游世界3",
    "region": "韩国",
    "year": "2026",
    "genre": "旅行/冒险",
    "category": "国产精选",
    "url": "./movie-0130.html",
    "cover": "./130.jpg"
  },
  {
    "title": "水乡危情粤语",
    "region": "中国香港/中国大陆",
    "year": "1990",
    "genre": "犯罪/剧情/年代",
    "category": "海外热播",
    "url": "./movie-0131.html",
    "cover": "./131.jpg"
  },
  {
    "title": "拉面首领",
    "region": "日本",
    "year": "2025",
    "genre": "剧情/美食",
    "category": "爱情家庭",
    "url": "./movie-0132.html",
    "cover": "./132.jpg"
  },
  {
    "title": "新樱花大战",
    "region": "日本",
    "year": "2024",
    "genre": "动作,科幻,机甲",
    "category": "海外热播",
    "url": "./movie-0133.html",
    "cover": "./133.jpg"
  },
  {
    "title": "冰原小恐龙",
    "region": "美国",
    "year": "2024",
    "genre": "动画/家庭/冒险",
    "category": "国产精选",
    "url": "./movie-0134.html",
    "cover": "./134.jpg"
  },
  {
    "title": "波希米亚斯大林主义之死",
    "region": "捷克/法国",
    "year": "2024",
    "genre": "历史剧情",
    "category": "高清电影",
    "url": "./movie-0135.html",
    "cover": "./135.jpg"
  },
  {
    "title": "奇门遁甲2020",
    "region": "中国大陆",
    "year": "2020",
    "genre": "奇幻,动作",
    "category": "高清电影",
    "url": "./movie-0136.html",
    "cover": "./136.jpg"
  },
  {
    "title": "奇迹大大大",
    "region": "中国大陆",
    "year": "2026",
    "genre": "喜剧,冒险,家庭",
    "category": "经典剧集",
    "url": "./movie-0137.html",
    "cover": "./137.jpg"
  },
  {
    "title": "百万大逃亡",
    "region": "德国",
    "year": "2023",
    "genre": "剧情/历史/战争",
    "category": "爱情家庭",
    "url": "./movie-0138.html",
    "cover": "./138.jpg"
  },
  {
    "title": "穿越白色空间",
    "region": "美国",
    "year": "2025",
    "genre": "科幻,惊悚",
    "category": "综艺动漫",
    "url": "./movie-0139.html",
    "cover": "./139.jpg"
  },
  {
    "title": "速度与激情4",
    "region": "美国",
    "year": "2009",
    "genre": "动作,犯罪",
    "category": "综艺动漫",
    "url": "./movie-0140.html",
    "cover": "./140.jpg"
  },
  {
    "title": "恶魔士兵",
    "region": "韩国",
    "year": "2024",
    "genre": "动作/奇幻/战争",
    "category": "国产精选",
    "url": "./movie-0141.html",
    "cover": "./141.jpg"
  },
  {
    "title": "痞子英雄2:黎明升起",
    "region": "中国台湾",
    "year": "2014",
    "genre": "动作/犯罪",
    "category": "海外热播",
    "url": "./movie-0142.html",
    "cover": "./142.jpg"
  },
  {
    "title": "最后的日子",
    "region": "美国",
    "year": "2021",
    "genre": "惊悚/科幻/末日",
    "category": "动作冒险",
    "url": "./movie-0143.html",
    "cover": "./143.jpg"
  },
  {
    "title": "首播集",
    "region": "中国大陆",
    "year": "2025",
    "genre": "剧情/悬疑",
    "category": "国产精选",
    "url": "./movie-0144.html",
    "cover": "./144.jpg"
  },
  {
    "title": "非正式会谈第三季",
    "region": "中国大陆",
    "year": "2025",
    "genre": "脱口秀/访谈",
    "category": "综艺动漫",
    "url": "./movie-0145.html",
    "cover": "./145.jpg"
  },
  {
    "title": "机械之声的传奇第二季",
    "region": "美国",
    "year": "2025",
    "genre": "动画/奇幻",
    "category": "经典剧集",
    "url": "./movie-0146.html",
    "cover": "./146.jpg"
  },
  {
    "title": "奥斯维辛集中营的守卫",
    "region": "德国",
    "year": "2025",
    "genre": "历史,剧情,战争",
    "category": "国产精选",
    "url": "./movie-0147.html",
    "cover": "./147.jpg"
  },
  {
    "title": "小手鼓",
    "region": "中国大陆",
    "year": "2024",
    "genre": "音乐/剧情",
    "category": "国产精选",
    "url": "./movie-0148.html",
    "cover": "./148.jpg"
  },
  {
    "title": "异兽魔都",
    "region": "日本",
    "year": "2020",
    "genre": "奇幻,动作,黑色幽默",
    "category": "海外热播",
    "url": "./movie-0149.html",
    "cover": "./149.jpg"
  },
  {
    "title": "殊途同归第一季",
    "region": "美国",
    "year": "2024",
    "genre": "剧情/悬疑/诗选剧",
    "category": "高清电影",
    "url": "./movie-0150.html",
    "cover": "./150.jpg"
  },
  {
    "title": "厉阴孩",
    "region": "台湾",
    "year": "2016",
    "genre": "恐怖",
    "category": "经典剧集",
    "url": "./movie-0151.html",
    "cover": "./1.jpg"
  },
  {
    "title": "东方西方",
    "region": "法国/俄罗斯/乌克兰",
    "year": "2024",
    "genre": "历史/剧情",
    "category": "高清电影",
    "url": "./movie-0152.html",
    "cover": "./2.jpg"
  },
  {
    "title": "闺房外的春天",
    "region": "中国台湾",
    "year": "1988",
    "genre": "爱情/喜剧",
    "category": "动作冒险",
    "url": "./movie-0153.html",
    "cover": "./3.jpg"
  },
  {
    "title": "伴游女王",
    "region": "意大利",
    "year": "2011",
    "genre": "喜剧",
    "category": "高清电影",
    "url": "./movie-0154.html",
    "cover": "./4.jpg"
  },
  {
    "title": "神探杀手夺命抢",
    "region": "中国香港",
    "year": "1989",
    "genre": "犯罪/动作",
    "category": "爱情家庭",
    "url": "./movie-0155.html",
    "cover": "./5.jpg"
  },
  {
    "title": "戆徒",
    "region": "中国大陆",
    "year": "2023",
    "genre": "剧情/犯罪",
    "category": "爱情家庭",
    "url": "./movie-0156.html",
    "cover": "./6.jpg"
  },
  {
    "title": "小孩的小孩",
    "region": "日本",
    "year": "2023",
    "genre": "剧情、儿童、社会",
    "category": "国产精选",
    "url": "./movie-0157.html",
    "cover": "./7.jpg"
  },
  {
    "title": "加藤隼战斗队",
    "region": "日本",
    "year": "1944",
    "genre": "战争",
    "category": "爱情家庭",
    "url": "./movie-0158.html",
    "cover": "./8.jpg"
  },
  {
    "title": "真假维梅尔",
    "region": "荷兰/英国",
    "year": "2016",
    "genre": "剧情,传记,历史",
    "category": "高清电影",
    "url": "./movie-0159.html",
    "cover": "./9.jpg"
  },
  {
    "title": "穆桂英之大破天门阵国语",
    "region": "中国大陆",
    "year": "2025",
    "genre": "古装动作",
    "category": "高清电影",
    "url": "./movie-0160.html",
    "cover": "./10.jpg"
  },
  {
    "title": "回到凤凰桥",
    "region": "中国大陆",
    "year": "2026",
    "genre": "剧情/文艺/青春",
    "category": "爱情家庭",
    "url": "./movie-0161.html",
    "cover": "./11.jpg"
  },
  {
    "title": "出埃及记1960",
    "region": "中国香港",
    "year": "1960",
    "genre": "剧情/历史",
    "category": "国产精选",
    "url": "./movie-0162.html",
    "cover": "./12.jpg"
  },
  {
    "title": "深宫绮梦",
    "region": "中国大陆",
    "year": "2024",
    "genre": "古装,宫斗,奇幻",
    "category": "经典剧集",
    "url": "./movie-0163.html",
    "cover": "./13.jpg"
  },
  {
    "title": "编辑情人梦",
    "region": "中国台湾",
    "year": "2025",
    "genre": "爱情,职场,剧情",
    "category": "高清电影",
    "url": "./movie-0164.html",
    "cover": "./14.jpg"
  },
  {
    "title": "快乐大本营2015",
    "region": "中国大陆",
    "year": "2015",
    "genre": "真人秀,喜剧,脱口秀",
    "category": "海外热播",
    "url": "./movie-0165.html",
    "cover": "./15.jpg"
  },
  {
    "title": "婚礼大联蒙",
    "region": "中国",
    "year": "2025",
    "genre": "喜剧,爱情",
    "category": "爱情家庭",
    "url": "./movie-0166.html",
    "cover": "./16.jpg"
  },
  {
    "title": "老爸老妈的浪漫史",
    "region": "美国",
    "year": "2005",
    "genre": "喜剧,爱情",
    "category": "综艺动漫",
    "url": "./movie-0167.html",
    "cover": "./17.jpg"
  },
  {
    "title": "炸弹:爱情故事",
    "region": "英国",
    "year": "2021",
    "genre": "剧情/爱情/惊悚",
    "category": "海外热播",
    "url": "./movie-0168.html",
    "cover": "./18.jpg"
  },
  {
    "title": "糊涂太空人",
    "region": "美国",
    "year": "2024",
    "genre": "喜剧/科幻",
    "category": "高清电影",
    "url": "./movie-0169.html",
    "cover": "./19.jpg"
  },
  {
    "title": "时空救赎",
    "region": "英国",
    "year": "2025",
    "genre": "科幻,惊悚",
    "category": "海外热播",
    "url": "./movie-0170.html",
    "cover": "./20.jpg"
  },
  {
    "title": "新征程,舞起来!",
    "region": "中国大陆",
    "year": "2023",
    "genre": "剧情,喜剧,音乐",
    "category": "经典剧集",
    "url": "./movie-0171.html",
    "cover": "./21.jpg"
  },
  {
    "title": "第二次人生",
    "region": "中国大陆",
    "year": "2023",
    "genre": "剧情,家庭",
    "category": "高清电影",
    "url": "./movie-0172.html",
    "cover": "./22.jpg"
  },
  {
    "title": "基督山之子",
    "region": "法国",
    "year": "2025",
    "genre": "剧情,悬疑,历史",
    "category": "综艺动漫",
    "url": "./movie-0173.html",
    "cover": "./23.jpg"
  },
  {
    "title": "马里兰庄园",
    "region": "美国",
    "year": "2024",
    "genre": "恐怖/悬疑",
    "category": "经典剧集",
    "url": "./movie-0174.html",
    "cover": "./24.jpg"
  },
  {
    "title": "原始轮回",
    "region": "法国/意大利",
    "year": "2026",
    "genre": "科幻、惊悚、哲学",
    "category": "综艺动漫",
    "url": "./movie-0175.html",
    "cover": "./25.jpg"
  },
  {
    "title": "巴西公主卡洛塔·若阿金娜",
    "region": "西班牙/巴西",
    "year": "2026",
    "genre": "历史,传记,剧情",
    "category": "高清电影",
    "url": "./movie-0176.html",
    "cover": "./26.jpg"
  },
  {
    "title": "名校风暴第五季",
    "region": "西班牙",
    "year": "2024",
    "genre": "悬疑,青春,剧情",
    "category": "爱情家庭",
    "url": "./movie-0177.html",
    "cover": "./27.jpg"
  },
  {
    "title": "荒天下之大教",
    "region": "中国大陆",
    "year": "2025",
    "genre": "黑色喜剧/荒诞",
    "category": "爱情家庭",
    "url": "./movie-0178.html",
    "cover": "./28.jpg"
  },
  {
    "title": "逐梦夏日",
    "region": "西班牙",
    "year": "2019",
    "genre": "剧情,同性,青春",
    "category": "综艺动漫",
    "url": "./movie-0179.html",
    "cover": "./29.jpg"
  },
  {
    "title": "霹雳神风",
    "region": "中国大陆",
    "year": "2025",
    "genre": "动作,赛车,犯罪",
    "category": "海外热播",
    "url": "./movie-0180.html",
    "cover": "./30.jpg"
  },
  {
    "title": "白领拳击",
    "region": "香港",
    "year": "2025",
    "genre": "动作,励志,社会",
    "category": "综艺动漫",
    "url": "./movie-0181.html",
    "cover": "./31.jpg"
  },
  {
    "title": "朦胧的山荷叶",
    "region": "日本",
    "year": "2025",
    "genre": "奇幻,爱情",
    "category": "悬疑犯罪",
    "url": "./movie-0182.html",
    "cover": "./32.jpg"
  },
  {
    "title": "绝种好男人",
    "region": "中国香港",
    "year": "2025",
    "genre": "爱情、喜剧、剧情",
    "category": "悬疑犯罪",
    "url": "./movie-0183.html",
    "cover": "./33.jpg"
  },
  {
    "title": "安娜的激情",
    "region": "法国/德国",
    "year": "2005",
    "genre": "剧情,爱情,音乐",
    "category": "综艺动漫",
    "url": "./movie-0184.html",
    "cover": "./34.jpg"
  },
  {
    "title": "的士速递3",
    "region": "法国",
    "year": "2012",
    "genre": "动作/喜剧",
    "category": "海外热播",
    "url": "./movie-0185.html",
    "cover": "./35.jpg"
  },
  {
    "title": "抱着黄金飞翔",
    "region": "日本",
    "year": "2025",
    "genre": "犯罪剧情",
    "category": "悬疑犯罪",
    "url": "./movie-0186.html",
    "cover": "./36.jpg"
  },
  {
    "title": "暴雨天灾",
    "region": "英国",
    "year": "2027",
    "genre": "灾难,惊悚",
    "category": "海外热播",
    "url": "./movie-0187.html",
    "cover": "./37.jpg"
  },
  {
    "title": "天台爱情",
    "region": "中国台湾",
    "year": "2023",
    "genre": "爱情歌舞",
    "category": "动作冒险",
    "url": "./movie-0188.html",
    "cover": "./38.jpg"
  },
  {
    "title": "消失第三者",
    "region": "中国大陆",
    "year": "2024",
    "genre": "悬疑/犯罪",
    "category": "高清电影",
    "url": "./movie-0189.html",
    "cover": "./39.jpg"
  },
  {
    "title": "食在云南",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情、美食、家庭",
    "category": "高清电影",
    "url": "./movie-0190.html",
    "cover": "./40.jpg"
  },
  {
    "title": "嗅探员",
    "region": "日本",
    "year": "2025",
    "genre": "悬疑、刑侦、科幻",
    "category": "动作冒险",
    "url": "./movie-0191.html",
    "cover": "./41.jpg"
  },
  {
    "title": "昆塔:反转星球",
    "region": "中国大陆",
    "year": "2025",
    "genre": "科幻动画",
    "category": "悬疑犯罪",
    "url": "./movie-0192.html",
    "cover": "./42.jpg"
  },
  {
    "title": "我爱有你的大海",
    "region": "日本",
    "year": "2026",
    "genre": "爱情,奇幻",
    "category": "爱情家庭",
    "url": "./movie-0193.html",
    "cover": "./43.jpg"
  },
  {
    "title": "厄月惊魂曲",
    "region": "中国台湾",
    "year": "2024",
    "genre": "恐怖/惊悚",
    "category": "高清电影",
    "url": "./movie-0194.html",
    "cover": "./44.jpg"
  },
  {
    "title": "超级小个子",
    "region": "韩国",
    "year": "2019",
    "genre": "剧情/体育",
    "category": "动作冒险",
    "url": "./movie-0195.html",
    "cover": "./45.jpg"
  },
  {
    "title": "那些见证了疯狂的故事",
    "region": "美国",
    "year": "2022",
    "genre": "恐怖",
    "category": "高清电影",
    "url": "./movie-0196.html",
    "cover": "./46.jpg"
  },
  {
    "title": "40 冲一波",
    "region": "中国台湾",
    "year": "2023",
    "genre": "喜剧,爱情,剧情",
    "category": "综艺动漫",
    "url": "./movie-0197.html",
    "cover": "./47.jpg"
  },
  {
    "title": "在冬夜",
    "region": "俄罗斯",
    "year": "2023",
    "genre": "剧情/战争",
    "category": "高清电影",
    "url": "./movie-0198.html",
    "cover": "./48.jpg"
  },
  {
    "title": "性爱成瘾的女人",
    "region": "丹麦/法国",
    "year": "2024",
    "genre": "剧情/情色/心理",
    "category": "综艺动漫",
    "url": "./movie-0199.html",
    "cover": "./49.jpg"
  },
  {
    "title": "狄仁杰之通天帝国",
    "region": "中国大陆/中国香港",
    "year": "2025",
    "genre": "动作/悬疑/古装",
    "category": "经典剧集",
    "url": "./movie-0200.html",
    "cover": "./50.jpg"
  },
  {
    "title": "纳粹女魔头之西伯利亚母虎",
    "region": "俄罗斯/德国",
    "year": "2025",
    "genre": "动作,历史,惊悚",
    "category": "经典剧集",
    "url": "./movie-0201.html",
    "cover": "./51.jpg"
  },
  {
    "title": "美女敢死队",
    "region": "中国大陆",
    "year": "2024",
    "genre": "动作,冒险,女性",
    "category": "国产精选",
    "url": "./movie-0202.html",
    "cover": "./52.jpg"
  },
  {
    "title": "南海的早晨",
    "region": "中国大陆",
    "year": "2023",
    "genre": "悬疑/刑侦",
    "category": "综艺动漫",
    "url": "./movie-0203.html",
    "cover": "./53.jpg"
  },
  {
    "title": "超速拦截",
    "region": "美国",
    "year": "2026",
    "genre": "动作/犯罪/飙车",
    "category": "高清电影",
    "url": "./movie-0204.html",
    "cover": "./54.jpg"
  },
  {
    "title": "妄想学生会 剧场版",
    "region": "日本",
    "year": "2025",
    "genre": "喜剧/动画",
    "category": "综艺动漫",
    "url": "./movie-0205.html",
    "cover": "./55.jpg"
  },
  {
    "title": "人工性智能",
    "region": "法国",
    "year": "2027",
    "genre": "爱情、科幻",
    "category": "经典剧集",
    "url": "./movie-0206.html",
    "cover": "./56.jpg"
  },
  {
    "title": "魔鬼孩子王2",
    "region": "美国",
    "year": "2025",
    "genre": "喜剧/动作",
    "category": "高清电影",
    "url": "./movie-0207.html",
    "cover": "./57.jpg"
  },
  {
    "title": "宇宙怪婴",
    "region": "美国",
    "year": "2018",
    "genre": "科幻,恐怖,喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-0208.html",
    "cover": "./58.jpg"
  },
  {
    "title": "良辰美景好时光",
    "region": "中国大陆",
    "year": "2025",
    "genre": "爱情,青春,音乐",
    "category": "高清电影",
    "url": "./movie-0209.html",
    "cover": "./59.jpg"
  },
  {
    "title": "迷幻",
    "region": "法国",
    "year": "2024",
    "genre": "悬疑,惊悚,科幻",
    "category": "爱情家庭",
    "url": "./movie-0210.html",
    "cover": "./60.jpg"
  },
  {
    "title": "12猛汉",
    "region": "美国",
    "year": "2022",
    "genre": "动作,战争",
    "category": "爱情家庭",
    "url": "./movie-0211.html",
    "cover": "./61.jpg"
  },
  {
    "title": "丛林杀机",
    "region": "澳大利亚",
    "year": "2025",
    "genre": "惊悚/冒险",
    "category": "动作冒险",
    "url": "./movie-0212.html",
    "cover": "./62.jpg"
  },
  {
    "title": "我爱红娘",
    "region": "中国台湾",
    "year": "2024",
    "genre": "爱情,喜剧",
    "category": "经典剧集",
    "url": "./movie-0213.html",
    "cover": "./63.jpg"
  },
  {
    "title": "一周的偶像",
    "region": "韩国",
    "year": "2026",
    "genre": "喜剧/音乐",
    "category": "综艺动漫",
    "url": "./movie-0214.html",
    "cover": "./64.jpg"
  },
  {
    "title": "来路不明的神秘女友",
    "region": "韩国",
    "year": "2025",
    "genre": "惊悚/心理",
    "category": "国产精选",
    "url": "./movie-0215.html",
    "cover": "./65.jpg"
  },
  {
    "title": "感伤的宿命",
    "region": "法国",
    "year": "2024",
    "genre": "爱情/剧情",
    "category": "爱情家庭",
    "url": "./movie-0216.html",
    "cover": "./66.jpg"
  },
  {
    "title": "我心狂野",
    "region": "美国",
    "year": "2024",
    "genre": "爱情,犯罪,公路",
    "category": "综艺动漫",
    "url": "./movie-0217.html",
    "cover": "./67.jpg"
  },
  {
    "title": "万万没想到之小兵过年",
    "region": "中国大陆",
    "year": "2025",
    "genre": "喜剧,古装",
    "category": "动作冒险",
    "url": "./movie-0218.html",
    "cover": "./68.jpg"
  },
  {
    "title": "17岁的疑惑",
    "region": "中国台湾",
    "year": "2026",
    "genre": "青春悬疑",
    "category": "悬疑犯罪",
    "url": "./movie-0219.html",
    "cover": "./69.jpg"
  },
  {
    "title": "沉默之屋",
    "region": "日本",
    "year": "2025",
    "genre": "恐怖/心理",
    "category": "综艺动漫",
    "url": "./movie-0220.html",
    "cover": "./70.jpg"
  },
  {
    "title": "赌侠马华力",
    "region": "美国",
    "year": "1994",
    "genre": "喜剧、西部",
    "category": "国产精选",
    "url": "./movie-0221.html",
    "cover": "./71.jpg"
  },
  {
    "title": "霸道总裁与乡村女教师",
    "region": "中国大陆",
    "year": "2020",
    "genre": "爱情,剧情,喜剧",
    "category": "爱情家庭",
    "url": "./movie-0222.html",
    "cover": "./72.jpg"
  },
  {
    "title": "女警撞到夫",
    "region": "中国香港",
    "year": "2002",
    "genre": "喜剧、爱情、警匪",
    "category": "海外热播",
    "url": "./movie-0223.html",
    "cover": "./73.jpg"
  },
  {
    "title": "狮子大开口",
    "region": "美国",
    "year": "2025",
    "genre": "喜剧/犯罪/黑色幽默",
    "category": "高清电影",
    "url": "./movie-0224.html",
    "cover": "./74.jpg"
  },
  {
    "title": "久别·重逢",
    "region": "中国大陆",
    "year": "2023",
    "genre": "爱情,都市",
    "category": "海外热播",
    "url": "./movie-0225.html",
    "cover": "./75.jpg"
  },
  {
    "title": "我将喜欢告诉了风",
    "region": "中国大陆",
    "year": "2025",
    "genre": "爱情,文艺,青春",
    "category": "悬疑犯罪",
    "url": "./movie-0226.html",
    "cover": "./76.jpg"
  },
  {
    "title": "校园鬼降疯",
    "region": "中国香港",
    "year": "2024",
    "genre": "喜剧,恐怖,校园",
    "category": "爱情家庭",
    "url": "./movie-0227.html",
    "cover": "./77.jpg"
  },
  {
    "title": "银河艳星",
    "region": "香港",
    "year": "1996",
    "genre": "剧情/情色",
    "category": "海外热播",
    "url": "./movie-0228.html",
    "cover": "./78.jpg"
  },
  {
    "title": "泰南拳",
    "region": "泰国",
    "year": "2016",
    "genre": "动作/体育",
    "category": "爱情家庭",
    "url": "./movie-0229.html",
    "cover": "./79.jpg"
  },
  {
    "title": "蓬门碧玉红颜泪",
    "region": "中国台湾",
    "year": "1974",
    "genre": "剧情/家庭",
    "category": "高清电影",
    "url": "./movie-0230.html",
    "cover": "./80.jpg"
  },
  {
    "title": "谋杀,她说",
    "region": "美国",
    "year": "2024",
    "genre": "悬疑,犯罪",
    "category": "爱情家庭",
    "url": "./movie-0231.html",
    "cover": "./81.jpg"
  },
  {
    "title": "鬼讯号",
    "region": "美国",
    "year": "2024",
    "genre": "悬疑/惊悚/科幻",
    "category": "海外热播",
    "url": "./movie-0232.html",
    "cover": "./82.jpg"
  },
  {
    "title": "一曲相思未了情",
    "region": "英国",
    "year": "2025",
    "genre": "音乐传记",
    "category": "爱情家庭",
    "url": "./movie-0233.html",
    "cover": "./83.jpg"
  },
  {
    "title": "我爱古诗词第三季",
    "region": "中国大陆",
    "year": "2024",
    "genre": "文化/竞赛",
    "category": "动作冒险",
    "url": "./movie-0234.html",
    "cover": "./84.jpg"
  },
  {
    "title": "小拳王",
    "region": "日本",
    "year": "2025",
    "genre": "运动,剧情,家庭",
    "category": "高清电影",
    "url": "./movie-0235.html",
    "cover": "./85.jpg"
  },
  {
    "title": "嵩山武僧",
    "region": "中国大陆",
    "year": "2024",
    "genre": "动作/武侠/历史",
    "category": "悬疑犯罪",
    "url": "./movie-0236.html",
    "cover": "./86.jpg"
  },
  {
    "title": "我永远也不会再战斗了",
    "region": "德国",
    "year": "2024",
    "genre": "剧情/战争",
    "category": "海外热播",
    "url": "./movie-0237.html",
    "cover": "./87.jpg"
  },
  {
    "title": "梦想的声音第三季",
    "region": "中国大陆",
    "year": "2023",
    "genre": "音乐/真人秀",
    "category": "高清电影",
    "url": "./movie-0238.html",
    "cover": "./88.jpg"
  },
  {
    "title": "藏历一年",
    "region": "中国大陆",
    "year": "2025",
    "genre": "人文纪录剧情片",
    "category": "悬疑犯罪",
    "url": "./movie-0239.html",
    "cover": "./89.jpg"
  },
  {
    "title": "奇异人生马戏团",
    "region": "美国",
    "year": "2022",
    "genre": "奇幻/剧情",
    "category": "动作冒险",
    "url": "./movie-0240.html",
    "cover": "./90.jpg"
  },
  {
    "title": "晒后假日",
    "region": "英国",
    "year": "2025",
    "genre": "剧情/家庭/文艺",
    "category": "悬疑犯罪",
    "url": "./movie-0241.html",
    "cover": "./91.jpg"
  },
  {
    "title": "山路",
    "region": "中国",
    "year": "2025",
    "genre": "剧情,家庭",
    "category": "经典剧集",
    "url": "./movie-0242.html",
    "cover": "./92.jpg"
  },
  {
    "title": "伊万娜",
    "region": "俄罗斯",
    "year": "2025",
    "genre": "战争,剧情,历史",
    "category": "悬疑犯罪",
    "url": "./movie-0243.html",
    "cover": "./93.jpg"
  },
  {
    "title": "亨利第五",
    "region": "英国",
    "year": "2025",
    "genre": "历史/战争/剧情",
    "category": "悬疑犯罪",
    "url": "./movie-0244.html",
    "cover": "./94.jpg"
  },
  {
    "title": "我的长沙夜生活",
    "region": "中国大陆",
    "year": "2025",
    "genre": "剧情/家庭",
    "category": "高清电影",
    "url": "./movie-0245.html",
    "cover": "./95.jpg"
  },
  {
    "title": "1860",
    "region": "中国大陆",
    "year": "2026",
    "genre": "历史/战争/剧情",
    "category": "爱情家庭",
    "url": "./movie-0246.html",
    "cover": "./96.jpg"
  },
  {
    "title": "艾迪·墨菲:精神错乱",
    "region": "美国",
    "year": "2019",
    "genre": "喜剧脱口秀",
    "category": "爱情家庭",
    "url": "./movie-0247.html",
    "cover": "./97.jpg"
  },
  {
    "title": "温彻斯特鬼屋事件",
    "region": "美国",
    "year": "2025",
    "genre": "恐怖/惊悚",
    "category": "国产精选",
    "url": "./movie-0248.html",
    "cover": "./98.jpg"
  },
  {
    "title": "香闺幽怨",
    "region": "香港",
    "year": "1994",
    "genre": "剧情/情色/文艺",
    "category": "经典剧集",
    "url": "./movie-0249.html",
    "cover": "./99.jpg"
  },
  {
    "title": "平行恋爱时差",
    "region": "中国大陆",
    "year": "2024",
    "genre": "爱情、奇幻、悬疑",
    "category": "海外热播",
    "url": "./movie-0250.html",
    "cover": "./100.jpg"
  },
  {
    "title": "香车艳尸",
    "region": "中国香港",
    "year": "1993",
    "genre": "犯罪惊悚",
    "category": "高清电影",
    "url": "./movie-0251.html",
    "cover": "./101.jpg"
  },
  {
    "title": "名士风流",
    "region": "中国大陆",
    "year": "2014",
    "genre": "历史/传记/古装",
    "category": "动作冒险",
    "url": "./movie-0252.html",
    "cover": "./102.jpg"
  },
  {
    "title": "海岸大捕怪国语",
    "region": "中国香港",
    "year": "2025",
    "genre": "喜剧、恐怖、怪兽",
    "category": "经典剧集",
    "url": "./movie-0253.html",
    "cover": "./103.jpg"
  },
  {
    "title": "二十世纪女人",
    "region": "美国",
    "year": "2023",
    "genre": "剧情/女性",
    "category": "动作冒险",
    "url": "./movie-0254.html",
    "cover": "./104.jpg"
  },
  {
    "title": "老妇与鸽子",
    "region": "法国",
    "year": "2023",
    "genre": "黑色幽默/奇幻",
    "category": "国产精选",
    "url": "./movie-0255.html",
    "cover": "./105.jpg"
  },
  {
    "title": "室踪",
    "region": "中国香港",
    "year": "2025",
    "genre": "悬疑,恐怖",
    "category": "综艺动漫",
    "url": "./movie-0256.html",
    "cover": "./106.jpg"
  },
  {
    "title": "施琅大将军",
    "region": "中国",
    "year": "2006",
    "genre": "历史,战争",
    "category": "悬疑犯罪",
    "url": "./movie-0257.html",
    "cover": "./107.jpg"
  },
  {
    "title": "空中浩劫第十五季",
    "region": "加拿大",
    "year": "2016",
    "genre": "纪录片,灾难,调查",
    "category": "海外热播",
    "url": "./movie-0258.html",
    "cover": "./108.jpg"
  },
  {
    "title": "女孩舞步",
    "region": "韩国",
    "year": "2024",
    "genre": "剧情/歌舞",
    "category": "国产精选",
    "url": "./movie-0259.html",
    "cover": "./109.jpg"
  },
  {
    "title": "猪头汉堡包",
    "region": "中国台湾",
    "year": "2024",
    "genre": "剧情,悬疑",
    "category": "国产精选",
    "url": "./movie-0260.html",
    "cover": "./110.jpg"
  },
  {
    "title": "疯狂约会美丽都",
    "region": "法国,比利时,加拿大",
    "year": "2003",
    "genre": "动画,喜剧,家庭",
    "category": "悬疑犯罪",
    "url": "./movie-0261.html",
    "cover": "./111.jpg"
  },
  {
    "title": "尼姆的实验",
    "region": "美国",
    "year": "2025",
    "genre": "科幻/惊悚/剧情",
    "category": "综艺动漫",
    "url": "./movie-0262.html",
    "cover": "./112.jpg"
  },
  {
    "title": "小王子说......",
    "region": "法国/中国大陆",
    "year": "2024",
    "genre": "奇幻/治愈/儿童",
    "category": "高清电影",
    "url": "./movie-0263.html",
    "cover": "./113.jpg"
  },
  {
    "title": "毛骨悚然的帕格尼尼",
    "region": "德国",
    "year": "2013",
    "genre": "恐怖,音乐",
    "category": "综艺动漫",
    "url": "./movie-0264.html",
    "cover": "./114.jpg"
  },
  {
    "title": "机场特警粤语",
    "region": "中国香港",
    "year": "2026",
    "genre": "动作/警匪/职业",
    "category": "经典剧集",
    "url": "./movie-0265.html",
    "cover": "./115.jpg"
  },
  {
    "title": "野兽家族第五季",
    "region": "美国",
    "year": "2023",
    "genre": "犯罪,剧情",
    "category": "经典剧集",
    "url": "./movie-0266.html",
    "cover": "./116.jpg"
  },
  {
    "title": "苦海奇花",
    "region": "中国台湾",
    "year": "2025",
    "genre": "剧情/历史",
    "category": "综艺动漫",
    "url": "./movie-0267.html",
    "cover": "./117.jpg"
  },
  {
    "title": "舞出我人生2:街舞",
    "region": "美国",
    "year": "2008",
    "genre": "爱情,音乐",
    "category": "国产精选",
    "url": "./movie-0268.html",
    "cover": "./118.jpg"
  },
  {
    "title": "露露情史",
    "region": "西班牙",
    "year": "2026",
    "genre": "爱情/历史",
    "category": "经典剧集",
    "url": "./movie-0269.html",
    "cover": "./119.jpg"
  },
  {
    "title": "最好",
    "region": "美国",
    "year": "2022",
    "genre": "心理、剧情、文艺",
    "category": "海外热播",
    "url": "./movie-0270.html",
    "cover": "./120.jpg"
  },
  {
    "title": "聊斋志异",
    "region": "中国",
    "year": "2025",
    "genre": "奇幻/古装/恐怖",
    "category": "国产精选",
    "url": "./movie-0271.html",
    "cover": "./121.jpg"
  },
  {
    "title": "铁腕校长",
    "region": "中国大陆",
    "year": "1995",
    "genre": "剧情/动作",
    "category": "高清电影",
    "url": "./movie-0272.html",
    "cover": "./122.jpg"
  },
  {
    "title": "缪斯",
    "region": "法国",
    "year": "2025",
    "genre": "剧情/奇幻",
    "category": "动作冒险",
    "url": "./movie-0273.html",
    "cover": "./123.jpg"
  },
  {
    "title": "钢铁力士",
    "region": "美国",
    "year": "2014",
    "genre": "动作/奇幻/冒险",
    "category": "海外热播",
    "url": "./movie-0274.html",
    "cover": "./124.jpg"
  },
  {
    "title": "性、谎言、录影带",
    "region": "美国",
    "year": "2025",
    "genre": "剧情、惊悚",
    "category": "海外热播",
    "url": "./movie-0275.html",
    "cover": "./125.jpg"
  },
  {
    "title": "梦回蓝海",
    "region": "中国大陆",
    "year": "2025",
    "genre": "奇幻爱情",
    "category": "经典剧集",
    "url": "./movie-0276.html",
    "cover": "./126.jpg"
  },
  {
    "title": "孤独的父亲",
    "region": "韩国",
    "year": "2024",
    "genre": "剧情",
    "category": "高清电影",
    "url": "./movie-0277.html",
    "cover": "./127.jpg"
  },
  {
    "title": "幕后的演员",
    "region": "法国",
    "year": "2018",
    "genre": "剧情/喜剧",
    "category": "综艺动漫",
    "url": "./movie-0278.html",
    "cover": "./128.jpg"
  },
  {
    "title": "水上回光",
    "region": "中国台湾",
    "year": "2025",
    "genre": "奇幻/家庭",
    "category": "海外热播",
    "url": "./movie-0279.html",
    "cover": "./129.jpg"
  },
  {
    "title": "通心树粤语",
    "region": "香港",
    "year": "1979",
    "genre": "剧情,悬疑,恐怖",
    "category": "综艺动漫",
    "url": "./movie-0280.html",
    "cover": "./130.jpg"
  },
  {
    "title": "惊险的假期",
    "region": "美国",
    "year": "2018",
    "genre": "冒险/喜剧/家庭",
    "category": "海外热播",
    "url": "./movie-0281.html",
    "cover": "./131.jpg"
  },
  {
    "title": "天蝎之夜",
    "region": "美国",
    "year": "2026",
    "genre": "动作,悬疑,犯罪",
    "category": "爱情家庭",
    "url": "./movie-0282.html",
    "cover": "./132.jpg"
  },
  {
    "title": "爱情白皮书1993",
    "region": "台湾",
    "year": "2025",
    "genre": "爱情青春",
    "category": "海外热播",
    "url": "./movie-0283.html",
    "cover": "./133.jpg"
  },
  {
    "title": "鸳鸯离合记",
    "region": "中国内地",
    "year": "1967",
    "genre": "爱情,戏曲",
    "category": "动作冒险",
    "url": "./movie-0284.html",
    "cover": "./134.jpg"
  },
  {
    "title": "预知死亡",
    "region": "韩国",
    "year": "2026",
    "genre": "悬疑,惊悚,奇幻",
    "category": "综艺动漫",
    "url": "./movie-0285.html",
    "cover": "./135.jpg"
  },
  {
    "title": "失控谎言",
    "region": "韩国",
    "year": "2026",
    "genre": "悬疑、心理、剧情",
    "category": "海外热播",
    "url": "./movie-0286.html",
    "cover": "./136.jpg"
  },
  {
    "title": "书爱",
    "region": "法国/比利时",
    "year": "2024",
    "genre": "文艺/爱情",
    "category": "综艺动漫",
    "url": "./movie-0287.html",
    "cover": "./137.jpg"
  },
  {
    "title": "地下陪审团",
    "region": "中国大陆",
    "year": "2026",
    "genre": "犯罪,悬疑,剧情",
    "category": "悬疑犯罪",
    "url": "./movie-0288.html",
    "cover": "./138.jpg"
  },
  {
    "title": "猛将娇娃",
    "region": "香港",
    "year": "2022",
    "genre": "动作,喜剧",
    "category": "经典剧集",
    "url": "./movie-0289.html",
    "cover": "./139.jpg"
  },
  {
    "title": "逃离猩球",
    "region": "美国",
    "year": "2026",
    "genre": "科幻/惊悚",
    "category": "海外热播",
    "url": "./movie-0290.html",
    "cover": "./140.jpg"
  },
  {
    "title": "青春浪花",
    "region": "中国香港",
    "year": "1989",
    "genre": "青春/爱情",
    "category": "海外热播",
    "url": "./movie-0291.html",
    "cover": "./141.jpg"
  },
  {
    "title": "恰克与巴克",
    "region": "美国",
    "year": "2023",
    "genre": "喜剧,剧情,冒险",
    "category": "爱情家庭",
    "url": "./movie-0292.html",
    "cover": "./142.jpg"
  },
  {
    "title": "江湖篇之大佬",
    "region": "中国香港",
    "year": "2003",
    "genre": "黑帮动作",
    "category": "综艺动漫",
    "url": "./movie-0293.html",
    "cover": "./143.jpg"
  },
  {
    "title": "爱,简单",
    "region": "巴西",
    "year": "2023",
    "genre": "爱情/青春",
    "category": "爱情家庭",
    "url": "./movie-0294.html",
    "cover": "./144.jpg"
  },
  {
    "title": "人民万岁",
    "region": "中国大陆",
    "year": "2026",
    "genre": "剧情,历史",
    "category": "国产精选",
    "url": "./movie-0295.html",
    "cover": "./145.jpg"
  },
  {
    "title": "那你来做做看啊",
    "region": "中国大陆",
    "year": "2024",
    "genre": "喜剧、职场、剧情",
    "category": "爱情家庭",
    "url": "./movie-0296.html",
    "cover": "./146.jpg"
  },
  {
    "title": "人生赛局",
    "region": "中国香港/中国大陆",
    "year": "2025",
    "genre": "剧情/运动",
    "category": "动作冒险",
    "url": "./movie-0297.html",
    "cover": "./147.jpg"
  },
  {
    "title": "死亡骗子",
    "region": "日本",
    "year": "2026",
    "genre": "犯罪/悬疑",
    "category": "动作冒险",
    "url": "./movie-0298.html",
    "cover": "./148.jpg"
  },
  {
    "title": "周六夜现场 中国版",
    "region": "中国大陆",
    "year": "2025",
    "genre": "喜剧/真人秀",
    "category": "国产精选",
    "url": "./movie-0299.html",
    "cover": "./149.jpg"
  },
  {
    "title": "书剑恩仇录1976国语",
    "region": "中国香港",
    "year": "1976",
    "genre": "武侠,历史,爱情",
    "category": "悬疑犯罪",
    "url": "./movie-0300.html",
    "cover": "./150.jpg"
  },
  {
    "title": "加菲猫的幸福生活第三季",
    "region": "美国",
    "year": "2025",
    "genre": "喜剧/动画/家庭",
    "category": "悬疑犯罪",
    "url": "./movie-0301.html",
    "cover": "./1.jpg"
  },
  {
    "title": "跳舞的蜗牛",
    "region": "法国",
    "year": "2024",
    "genre": "动画/家庭",
    "category": "高清电影",
    "url": "./movie-0302.html",
    "cover": "./2.jpg"
  },
  {
    "title": "崛起之路",
    "region": "中国大陆",
    "year": "2026",
    "genre": "剧情,年代,创业",
    "category": "国产精选",
    "url": "./movie-0303.html",
    "cover": "./3.jpg"
  },
  {
    "title": "猛鬼街",
    "region": "美国",
    "year": "2024",
    "genre": "恐怖",
    "category": "动作冒险",
    "url": "./movie-0304.html",
    "cover": "./4.jpg"
  },
  {
    "title": "完全夏绿蒂",
    "region": "日本",
    "year": "2024",
    "genre": "悬疑/奇幻",
    "category": "爱情家庭",
    "url": "./movie-0305.html",
    "cover": "./5.jpg"
  },
  {
    "title": "一个陌生女人的来信",
    "region": "中国",
    "year": "2004",
    "genre": "剧情,爱情",
    "category": "爱情家庭",
    "url": "./movie-0306.html",
    "cover": "./6.jpg"
  },
  {
    "title": "企业强人",
    "region": "香港",
    "year": "2024",
    "genre": "商战",
    "category": "悬疑犯罪",
    "url": "./movie-0307.html",
    "cover": "./7.jpg"
  },
  {
    "title": "青柠男女第二季",
    "region": "中国大陆",
    "year": "2020",
    "genre": "都市、情感、喜剧",
    "category": "国产精选",
    "url": "./movie-0308.html",
    "cover": "./8.jpg"
  },
  {
    "title": "布拉德·尼利神经秀第一季",
    "region": "美国",
    "year": "2019",
    "genre": "喜剧/访谈",
    "category": "经典剧集",
    "url": "./movie-0309.html",
    "cover": "./9.jpg"
  },
  {
    "title": "出境事务所",
    "region": "中国台湾",
    "year": "2025",
    "genre": "剧情/职业/家庭",
    "category": "经典剧集",
    "url": "./movie-0310.html",
    "cover": "./10.jpg"
  },
  {
    "title": "永远的帝国",
    "region": "英国",
    "year": "2019",
    "genre": "历史/战争",
    "category": "经典剧集",
    "url": "./movie-0311.html",
    "cover": "./11.jpg"
  },
  {
    "title": "虚空魔境第二季",
    "region": "日本",
    "year": "2023",
    "genre": "奇幻,冒险,热血",
    "category": "爱情家庭",
    "url": "./movie-0312.html",
    "cover": "./12.jpg"
  },
  {
    "title": "火山口",
    "region": "中国大陆",
    "year": "2026",
    "genre": "灾难/悬疑",
    "category": "综艺动漫",
    "url": "./movie-0313.html",
    "cover": "./13.jpg"
  },
  {
    "title": "醒醒吧之跟风者",
    "region": "中国大陆",
    "year": "2024",
    "genre": "喜剧,剧情",
    "category": "悬疑犯罪",
    "url": "./movie-0314.html",
    "cover": "./14.jpg"
  },
  {
    "title": "兔子镇的火狐狸",
    "region": "中国大陆/德国",
    "year": "2019",
    "genre": "动画/冒险/喜剧",
    "category": "动作冒险",
    "url": "./movie-0315.html",
    "cover": "./15.jpg"
  },
  {
    "title": "袋鼠丝苗为两餐粤语",
    "region": "中国香港",
    "year": "1989",
    "genre": "喜剧/家庭/剧情",
    "category": "高清电影",
    "url": "./movie-0316.html",
    "cover": "./16.jpg"
  },
  {
    "title": "山路",
    "region": "中国台湾",
    "year": "2027",
    "genre": "剧情,历史,家庭",
    "category": "爱情家庭",
    "url": "./movie-0317.html",
    "cover": "./17.jpg"
  },
  {
    "title": "杀戮影片",
    "region": "韩国",
    "year": "2025",
    "genre": "犯罪/恐怖",
    "category": "高清电影",
    "url": "./movie-0318.html",
    "cover": "./18.jpg"
  },
  {
    "title": "带我回家",
    "region": "台湾",
    "year": "2019",
    "genre": "剧情/温情",
    "category": "海外热播",
    "url": "./movie-0319.html",
    "cover": "./19.jpg"
  },
  {
    "title": "上车家族粤语",
    "region": "中国香港",
    "year": "2022",
    "genre": "剧情/家庭/喜剧",
    "category": "综艺动漫",
    "url": "./movie-0320.html",
    "cover": "./20.jpg"
  },
  {
    "title": "叫魂",
    "region": "香港",
    "year": "1985",
    "genre": "恐怖,民俗",
    "category": "高清电影",
    "url": "./movie-0321.html",
    "cover": "./21.jpg"
  },
  {
    "title": "年轻气盛",
    "region": "意大利/法国",
    "year": "2024",
    "genre": "剧情,喜剧",
    "category": "海外热播",
    "url": "./movie-0322.html",
    "cover": "./22.jpg"
  },
  {
    "title": "狂野比尔希科克",
    "region": "美国",
    "year": "2024",
    "genre": "西部,动作,传记",
    "category": "悬疑犯罪",
    "url": "./movie-0323.html",
    "cover": "./23.jpg"
  },
  {
    "title": "我和僵尸有个约会",
    "region": "中国香港",
    "year": "2024",
    "genre": "奇幻爱情",
    "category": "经典剧集",
    "url": "./movie-0324.html",
    "cover": "./24.jpg"
  },
  {
    "title": "爱情麻叉烦上烦",
    "region": "中国香港",
    "year": "2025",
    "genre": "爱情,喜剧,剧情",
    "category": "爱情家庭",
    "url": "./movie-0325.html",
    "cover": "./25.jpg"
  },
  {
    "title": "下一站你的世界",
    "region": "中国内地",
    "year": "2027",
    "genre": "爱情,奇幻,悬疑",
    "category": "海外热播",
    "url": "./movie-0326.html",
    "cover": "./26.jpg"
  },
  {
    "title": "火线出击",
    "region": "中国大陆",
    "year": "2017",
    "genre": "动作/灾难/剧情",
    "category": "综艺动漫",
    "url": "./movie-0327.html",
    "cover": "./27.jpg"
  },
  {
    "title": "恋爱小说",
    "region": "韩国",
    "year": "2023",
    "genre": "爱情,剧情,文艺",
    "category": "动作冒险",
    "url": "./movie-0328.html",
    "cover": "./28.jpg"
  },
  {
    "title": "旭日之家",
    "region": "美国",
    "year": "2026",
    "genre": "剧情/家庭",
    "category": "国产精选",
    "url": "./movie-0329.html",
    "cover": "./29.jpg"
  },
  {
    "title": "第一次不是你",
    "region": "中国香港",
    "year": "2024",
    "genre": "爱情,剧情",
    "category": "爱情家庭",
    "url": "./movie-0330.html",
    "cover": "./30.jpg"
  },
  {
    "title": "驶向新加坡",
    "region": "新加坡",
    "year": "2020",
    "genre": "剧情,家庭",
    "category": "国产精选",
    "url": "./movie-0331.html",
    "cover": "./31.jpg"
  },
  {
    "title": "德尔苏·乌扎拉",
    "region": "苏联/日本",
    "year": "1975",
    "genre": "剧情/冒险",
    "category": "高清电影",
    "url": "./movie-0332.html",
    "cover": "./32.jpg"
  },
  {
    "title": "学府春色",
    "region": "中国台湾",
    "year": "2023",
    "genre": "校园、爱情、青春",
    "category": "综艺动漫",
    "url": "./movie-0333.html",
    "cover": "./33.jpg"
  },
  {
    "title": "花开总有时",
    "region": "中国大陆",
    "year": "2023",
    "genre": "剧情,家庭,励志",
    "category": "动作冒险",
    "url": "./movie-0334.html",
    "cover": "./34.jpg"
  },
  {
    "title": "少女惊魂",
    "region": "日本/台湾",
    "year": "2025",
    "genre": "恐怖/校园",
    "category": "海外热播",
    "url": "./movie-0335.html",
    "cover": "./35.jpg"
  },
  {
    "title": "最爱的儿子",
    "region": "法国",
    "year": "2023",
    "genre": "剧情/家庭",
    "category": "爱情家庭",
    "url": "./movie-0336.html",
    "cover": "./36.jpg"
  },
  {
    "title": "绝妙心灵第二季",
    "region": "美国",
    "year": "2026",
    "genre": "科幻,悬疑,心理",
    "category": "国产精选",
    "url": "./movie-0337.html",
    "cover": "./37.jpg"
  },
  {
    "title": "绝对谎言",
    "region": "韩国",
    "year": "2024",
    "genre": "悬疑,爱情,职场",
    "category": "海外热播",
    "url": "./movie-0338.html",
    "cover": "./38.jpg"
  },
  {
    "title": "小妇人1994",
    "region": "美国",
    "year": "2024",
    "genre": "剧情/家庭",
    "category": "综艺动漫",
    "url": "./movie-0339.html",
    "cover": "./39.jpg"
  },
  {
    "title": "全家玩到趴",
    "region": "美国",
    "year": "2024",
    "genre": "喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-0340.html",
    "cover": "./40.jpg"
  },
  {
    "title": "莱拉在海法",
    "region": "巴勒斯坦",
    "year": "2023",
    "genre": "剧情、战争、人文",
    "category": "动作冒险",
    "url": "./movie-0341.html",
    "cover": "./41.jpg"
  },
  {
    "title": "为爱欢呼",
    "region": "印度",
    "year": "2025",
    "genre": "歌舞,爱情,运动",
    "category": "综艺动漫",
    "url": "./movie-0342.html",
    "cover": "./42.jpg"
  },
  {
    "title": "劫犯在逃",
    "region": "英国",
    "year": "2024",
    "genre": "犯罪/惊悚",
    "category": "海外热播",
    "url": "./movie-0343.html",
    "cover": "./43.jpg"
  },
  {
    "title": "那年夏天的乐声",
    "region": "中国",
    "year": "2023",
    "genre": "剧情/音乐/家庭",
    "category": "悬疑犯罪",
    "url": "./movie-0344.html",
    "cover": "./44.jpg"
  },
  {
    "title": "分手说爱你",
    "region": "中国香港",
    "year": "2025",
    "genre": "爱情/剧情",
    "category": "海外热播",
    "url": "./movie-0345.html",
    "cover": "./45.jpg"
  },
  {
    "title": "水月洞天",
    "region": "中国大陆",
    "year": "2026",
    "genre": "古装,奇幻,爱情,武侠",
    "category": "经典剧集",
    "url": "./movie-0346.html",
    "cover": "./46.jpg"
  },
  {
    "title": "佳周佳期",
    "region": "中国香港",
    "year": "2007",
    "genre": "爱情,喜剧",
    "category": "高清电影",
    "url": "./movie-0347.html",
    "cover": "./47.jpg"
  },
  {
    "title": "一代天骄成吉思汗",
    "region": "蒙古/中国大陆",
    "year": "2025",
    "genre": "史诗传记",
    "category": "国产精选",
    "url": "./movie-0348.html",
    "cover": "./48.jpg"
  },
  {
    "title": "次要灾难",
    "region": "法国",
    "year": "2024",
    "genre": "喜剧,灾难,黑色幽默",
    "category": "动作冒险",
    "url": "./movie-0349.html",
    "cover": "./49.jpg"
  },
  {
    "title": "魔宫帝国",
    "region": "美国",
    "year": "1995",
    "genre": "动作/奇幻/冒险",
    "category": "国产精选",
    "url": "./movie-0350.html",
    "cover": "./50.jpg"
  },
  {
    "title": "最佳类型",
    "region": "美国",
    "year": "2024",
    "genre": "喜剧/爱情",
    "category": "海外热播",
    "url": "./movie-0351.html",
    "cover": "./51.jpg"
  },
  {
    "title": "金赛性学教授",
    "region": "美国",
    "year": "2025",
    "genre": "传记/剧情",
    "category": "动作冒险",
    "url": "./movie-0352.html",
    "cover": "./52.jpg"
  },
  {
    "title": "虚构推理",
    "region": "日本",
    "year": "2025",
    "genre": "悬疑,奇幻",
    "category": "海外热播",
    "url": "./movie-0353.html",
    "cover": "./53.jpg"
  },
  {
    "title": "稻草之盾",
    "region": "日本",
    "year": "2023",
    "genre": "剧情,犯罪,悬疑",
    "category": "动作冒险",
    "url": "./movie-0354.html",
    "cover": "./54.jpg"
  },
  {
    "title": "龙霸天下",
    "region": "美国",
    "year": "2026",
    "genre": "动作,奇幻,冒险",
    "category": "悬疑犯罪",
    "url": "./movie-0355.html",
    "cover": "./55.jpg"
  },
  {
    "title": "人鬼神",
    "region": "中国香港",
    "year": "2026",
    "genre": "恐怖/喜剧/奇幻",
    "category": "综艺动漫",
    "url": "./movie-0356.html",
    "cover": "./56.jpg"
  },
  {
    "title": "梦续奇缘",
    "region": "中国香港/台湾",
    "year": "2024",
    "genre": "奇幻/爱情",
    "category": "动作冒险",
    "url": "./movie-0357.html",
    "cover": "./57.jpg"
  },
  {
    "title": "外星人爆发",
    "region": "美国",
    "year": "2025",
    "genre": "科幻,灾难,动作",
    "category": "爱情家庭",
    "url": "./movie-0358.html",
    "cover": "./58.jpg"
  },
  {
    "title": "走佬孖宝",
    "region": "中国香港",
    "year": "2025",
    "genre": "喜剧/动作/犯罪",
    "category": "综艺动漫",
    "url": "./movie-0359.html",
    "cover": "./59.jpg"
  },
  {
    "title": "编辑情人梦",
    "region": "中国台湾",
    "year": "2024",
    "genre": "爱情,职场",
    "category": "经典剧集",
    "url": "./movie-0360.html",
    "cover": "./60.jpg"
  },
  {
    "title": "芭比杀手",
    "region": "美国",
    "year": "2014",
    "genre": "恐怖,惊悚",
    "category": "爱情家庭",
    "url": "./movie-0361.html",
    "cover": "./61.jpg"
  },
  {
    "title": "少年同盟第二季",
    "region": "日本",
    "year": "2012",
    "genre": "日常,青春,治愈",
    "category": "高清电影",
    "url": "./movie-0362.html",
    "cover": "./62.jpg"
  },
  {
    "title": "我们这一天第二季",
    "region": "美国",
    "year": "2025",
    "genre": "剧情/家庭/喜剧",
    "category": "国产精选",
    "url": "./movie-0363.html",
    "cover": "./63.jpg"
  },
  {
    "title": "爱情玩家",
    "region": "中国大陆",
    "year": "2020",
    "genre": "爱情,喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-0364.html",
    "cover": "./64.jpg"
  },
  {
    "title": "热线诉心声粤语",
    "region": "香港",
    "year": "1993",
    "genre": "爱情,剧情,文艺",
    "category": "高清电影",
    "url": "./movie-0365.html",
    "cover": "./65.jpg"
  },
  {
    "title": "魔鬼游戏",
    "region": "西班牙",
    "year": "2017",
    "genre": "悬疑、惊悚、心理",
    "category": "高清电影",
    "url": "./movie-0366.html",
    "cover": "./66.jpg"
  },
  {
    "title": "父亲的罪过",
    "region": "韩国",
    "year": "2025",
    "genre": "悬疑,犯罪,家庭",
    "category": "悬疑犯罪",
    "url": "./movie-0367.html",
    "cover": "./67.jpg"
  },
  {
    "title": "2009失去的记忆",
    "region": "韩国",
    "year": "2025",
    "genre": "动作/科幻/悬疑",
    "category": "综艺动漫",
    "url": "./movie-0368.html",
    "cover": "./68.jpg"
  },
  {
    "title": "半暖时光",
    "region": "中国大陆",
    "year": "2024",
    "genre": "爱情/家庭/治愈",
    "category": "高清电影",
    "url": "./movie-0369.html",
    "cover": "./69.jpg"
  },
  {
    "title": "澳门奇妙游·街头篇",
    "region": "中国大陆",
    "year": "2024",
    "genre": "真人秀,旅行,美食",
    "category": "高清电影",
    "url": "./movie-0370.html",
    "cover": "./70.jpg"
  },
  {
    "title": "白宫隐秘",
    "region": "美国",
    "year": "2023",
    "genre": "政治/惊悚/悬疑",
    "category": "综艺动漫",
    "url": "./movie-0371.html",
    "cover": "./71.jpg"
  },
  {
    "title": "马克思和莱昂的疯狂故事",
    "region": "法国",
    "year": "2016",
    "genre": "喜剧,战争",
    "category": "国产精选",
    "url": "./movie-0372.html",
    "cover": "./72.jpg"
  },
  {
    "title": "蝶变计划",
    "region": "中国大陆",
    "year": "2025",
    "genre": "科幻/动作/谍战",
    "category": "爱情家庭",
    "url": "./movie-0373.html",
    "cover": "./73.jpg"
  },
  {
    "title": "贝尔戈维亚:下一章",
    "region": "英国",
    "year": "2024",
    "genre": "剧情,历史",
    "category": "海外热播",
    "url": "./movie-0374.html",
    "cover": "./74.jpg"
  },
  {
    "title": "新贵 第二季",
    "region": "英国",
    "year": "2025",
    "genre": "喜剧/历史",
    "category": "悬疑犯罪",
    "url": "./movie-0375.html",
    "cover": "./75.jpg"
  },
  {
    "title": "巴布瓦迪市",
    "region": "尼日利亚",
    "year": "2021",
    "genre": "喜剧/犯罪",
    "category": "高清电影",
    "url": "./movie-0376.html",
    "cover": "./76.jpg"
  },
  {
    "title": "不死者之王:剧场版前篇",
    "region": "日本",
    "year": "2017",
    "genre": "奇幻战斗冒险",
    "category": "国产精选",
    "url": "./movie-0377.html",
    "cover": "./77.jpg"
  },
  {
    "title": "抗日奇侠之武功队",
    "region": "中国大陆",
    "year": "2011",
    "genre": "动作,战争,奇幻",
    "category": "经典剧集",
    "url": "./movie-0378.html",
    "cover": "./78.jpg"
  },
  {
    "title": "1966年时",
    "region": "中国",
    "year": "2019",
    "genre": "剧情",
    "category": "悬疑犯罪",
    "url": "./movie-0379.html",
    "cover": "./79.jpg"
  },
  {
    "title": "万里征途",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情,历史",
    "category": "综艺动漫",
    "url": "./movie-0380.html",
    "cover": "./80.jpg"
  },
  {
    "title": "安达与岛村",
    "region": "日本",
    "year": "2024",
    "genre": "校园/百合",
    "category": "综艺动漫",
    "url": "./movie-0381.html",
    "cover": "./81.jpg"
  },
  {
    "title": "智伏歹徒",
    "region": "中国大陆",
    "year": "1993",
    "genre": "动作,犯罪",
    "category": "国产精选",
    "url": "./movie-0382.html",
    "cover": "./82.jpg"
  },
  {
    "title": "遵守法律",
    "region": "德国",
    "year": "2024",
    "genre": "犯罪,剧情",
    "category": "综艺动漫",
    "url": "./movie-0383.html",
    "cover": "./83.jpg"
  },
  {
    "title": "烧酒战争",
    "region": "韩国",
    "year": "2015",
    "genre": "剧情,喜剧,历史",
    "category": "爱情家庭",
    "url": "./movie-0384.html",
    "cover": "./84.jpg"
  },
  {
    "title": "香蕉先生不睡觉",
    "region": "中国台湾",
    "year": "2023",
    "genre": "奇幻/喜剧/爱情",
    "category": "经典剧集",
    "url": "./movie-0385.html",
    "cover": "./85.jpg"
  },
  {
    "title": "人怕出名",
    "region": "中国大陆",
    "year": "2023",
    "genre": "喜剧,黑色幽默",
    "category": "海外热播",
    "url": "./movie-0386.html",
    "cover": "./86.jpg"
  },
  {
    "title": "鬼伴",
    "region": "泰国",
    "year": "2025",
    "genre": "恐怖,喜剧,同性",
    "category": "国产精选",
    "url": "./movie-0387.html",
    "cover": "./87.jpg"
  },
  {
    "title": "蜜月酒店",
    "region": "泰国",
    "year": "2025",
    "genre": "恐怖,悬疑",
    "category": "动作冒险",
    "url": "./movie-0388.html",
    "cover": "./88.jpg"
  },
  {
    "title": "我们这一天第一季",
    "region": "美国",
    "year": "2016",
    "genre": "剧情/喜剧/家庭",
    "category": "经典剧集",
    "url": "./movie-0389.html",
    "cover": "./89.jpg"
  },
  {
    "title": "特殊身份",
    "region": "中国大陆",
    "year": "2013",
    "genre": "动作,犯罪,警匪",
    "category": "高清电影",
    "url": "./movie-0390.html",
    "cover": "./90.jpg"
  },
  {
    "title": "芭比之梦幻仙境",
    "region": "美国",
    "year": "2024",
    "genre": "动画,奇幻",
    "category": "综艺动漫",
    "url": "./movie-0391.html",
    "cover": "./91.jpg"
  },
  {
    "title": "长翅膀的猪",
    "region": "法国,比利时",
    "year": "2024",
    "genre": "奇幻,剧情,黑色幽默",
    "category": "动作冒险",
    "url": "./movie-0392.html",
    "cover": "./92.jpg"
  },
  {
    "title": "格斗的技术",
    "region": "日本",
    "year": "2024",
    "genre": "动作,体育",
    "category": "爱情家庭",
    "url": "./movie-0393.html",
    "cover": "./93.jpg"
  },
  {
    "title": "战争的恐怖",
    "region": "德国",
    "year": "2017",
    "genre": "战争/恐怖",
    "category": "悬疑犯罪",
    "url": "./movie-0394.html",
    "cover": "./94.jpg"
  },
  {
    "title": "嗜血寄生",
    "region": "泰国",
    "year": "2025",
    "genre": "恐怖,科幻",
    "category": "高清电影",
    "url": "./movie-0395.html",
    "cover": "./95.jpg"
  },
  {
    "title": "阿莱塔街388号",
    "region": "西班牙",
    "year": "2022",
    "genre": "恐怖,悬疑",
    "category": "经典剧集",
    "url": "./movie-0396.html",
    "cover": "./96.jpg"
  },
  {
    "title": "净化大师",
    "region": "韩国",
    "year": "2022",
    "genre": "惊悚/悬疑",
    "category": "国产精选",
    "url": "./movie-0397.html",
    "cover": "./97.jpg"
  },
  {
    "title": "啊、春天",
    "region": "日本",
    "year": "2023",
    "genre": "剧情,家庭",
    "category": "爱情家庭",
    "url": "./movie-0398.html",
    "cover": "./98.jpg"
  },
  {
    "title": "变身国王粤语",
    "region": "香港",
    "year": "2001",
    "genre": "喜剧,动画,冒险",
    "category": "海外热播",
    "url": "./movie-0399.html",
    "cover": "./99.jpg"
  },
  {
    "title": "龙凤花烛",
    "region": "中国大陆",
    "year": "2026",
    "genre": "悬疑,民国,爱情",
    "category": "综艺动漫",
    "url": "./movie-0400.html",
    "cover": "./100.jpg"
  },
  {
    "title": "铁腕天使",
    "region": "中国香港",
    "year": "2026",
    "genre": "动作、犯罪",
    "category": "综艺动漫",
    "url": "./movie-0401.html",
    "cover": "./101.jpg"
  },
  {
    "title": "体育家之情史",
    "region": "中国内地",
    "year": "2025",
    "genre": "传记/爱情/体育",
    "category": "爱情家庭",
    "url": "./movie-0402.html",
    "cover": "./102.jpg"
  },
  {
    "title": "博恩霍姆大街",
    "region": "德国",
    "year": "2024",
    "genre": "历史,剧情",
    "category": "悬疑犯罪",
    "url": "./movie-0403.html",
    "cover": "./103.jpg"
  },
  {
    "title": "钢炽之芯",
    "region": "美国",
    "year": "2026",
    "genre": "科幻/动作/惊悚",
    "category": "国产精选",
    "url": "./movie-0404.html",
    "cover": "./104.jpg"
  },
  {
    "title": "汗皂交香",
    "region": "日本",
    "year": "2022",
    "genre": "爱情/喜剧/职场",
    "category": "动作冒险",
    "url": "./movie-0405.html",
    "cover": "./105.jpg"
  },
  {
    "title": "一曲倾情",
    "region": "美国",
    "year": "2021",
    "genre": "剧情/音乐/爱情",
    "category": "海外热播",
    "url": "./movie-0406.html",
    "cover": "./106.jpg"
  },
  {
    "title": "河畔城市",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情/悬疑",
    "category": "海外热播",
    "url": "./movie-0407.html",
    "cover": "./107.jpg"
  },
  {
    "title": "伴娘进行曲",
    "region": "美国",
    "year": "2025",
    "genre": "喜剧",
    "category": "经典剧集",
    "url": "./movie-0408.html",
    "cover": "./108.jpg"
  },
  {
    "title": "谜域之噬魂岭",
    "region": "中国大陆",
    "year": "2017",
    "genre": "悬疑/惊悚/冒险",
    "category": "动作冒险",
    "url": "./movie-0409.html",
    "cover": "./109.jpg"
  },
  {
    "title": "束缚",
    "region": "日本",
    "year": "2022",
    "genre": "悬疑/惊悚",
    "category": "爱情家庭",
    "url": "./movie-0410.html",
    "cover": "./110.jpg"
  },
  {
    "title": "黎明前的暗战",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情,悬疑,历史",
    "category": "综艺动漫",
    "url": "./movie-0411.html",
    "cover": "./111.jpg"
  },
  {
    "title": "大足野人粉丝团",
    "region": "中国",
    "year": "2024",
    "genre": "伪纪录片/喜剧/悬疑",
    "category": "国产精选",
    "url": "./movie-0412.html",
    "cover": "./112.jpg"
  },
  {
    "title": "幸运儿!",
    "region": "西班牙",
    "year": "2023",
    "genre": "喜剧,剧情",
    "category": "海外热播",
    "url": "./movie-0413.html",
    "cover": "./113.jpg"
  },
  {
    "title": "官方机密",
    "region": "英国",
    "year": "2024",
    "genre": "剧情、惊悚",
    "category": "高清电影",
    "url": "./movie-0414.html",
    "cover": "./114.jpg"
  },
  {
    "title": "吾妻在上",
    "region": "中国大陆",
    "year": "2025",
    "genre": "古装,喜剧,爱情",
    "category": "悬疑犯罪",
    "url": "./movie-0415.html",
    "cover": "./115.jpg"
  },
  {
    "title": "灵异航班",
    "region": "日本",
    "year": "2025",
    "genre": "恐怖/悬疑",
    "category": "综艺动漫",
    "url": "./movie-0416.html",
    "cover": "./116.jpg"
  },
  {
    "title": "小象寻母",
    "region": "中国",
    "year": "2025",
    "genre": "家庭,冒险,剧情",
    "category": "悬疑犯罪",
    "url": "./movie-0417.html",
    "cover": "./117.jpg"
  },
  {
    "title": "没有妳的多重宇宙",
    "region": "中国香港",
    "year": "2023",
    "genre": "剧情,科幻,爱情",
    "category": "经典剧集",
    "url": "./movie-0418.html",
    "cover": "./118.jpg"
  },
  {
    "title": "别有用心的单身女国语",
    "region": "中国大陆",
    "year": "2014",
    "genre": "爱情/喜剧",
    "category": "动作冒险",
    "url": "./movie-0419.html",
    "cover": "./119.jpg"
  },
  {
    "title": "天使保镳",
    "region": "中国台湾",
    "year": "2024",
    "genre": "动作/喜剧/奇幻",
    "category": "国产精选",
    "url": "./movie-0420.html",
    "cover": "./120.jpg"
  },
  {
    "title": "梦游小人国",
    "region": "美国/英国",
    "year": "2025",
    "genre": "奇幻/冒险/家庭",
    "category": "高清电影",
    "url": "./movie-0421.html",
    "cover": "./121.jpg"
  },
  {
    "title": "宽恕",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情,家庭",
    "category": "动作冒险",
    "url": "./movie-0422.html",
    "cover": "./122.jpg"
  },
  {
    "title": "名媛双胞案",
    "region": "美国",
    "year": "2024",
    "genre": "悬疑,犯罪",
    "category": "经典剧集",
    "url": "./movie-0423.html",
    "cover": "./123.jpg"
  },
  {
    "title": "摩登女婿",
    "region": "中国大陆",
    "year": "2014",
    "genre": "喜剧,爱情,家庭",
    "category": "悬疑犯罪",
    "url": "./movie-0424.html",
    "cover": "./124.jpg"
  },
  {
    "title": "我无曳",
    "region": "中国大陆",
    "year": "2025",
    "genre": "悬疑/犯罪/心理",
    "category": "国产精选",
    "url": "./movie-0425.html",
    "cover": "./125.jpg"
  },
  {
    "title": "街篮联盟",
    "region": "中国",
    "year": "2024",
    "genre": "青春,运动,热血",
    "category": "悬疑犯罪",
    "url": "./movie-0426.html",
    "cover": "./126.jpg"
  },
  {
    "title": "太空堡垒:大电影",
    "region": "美国",
    "year": "2025",
    "genre": "动作/科幻/战争",
    "category": "国产精选",
    "url": "./movie-0427.html",
    "cover": "./127.jpg"
  },
  {
    "title": "昨天、今天和明天",
    "region": "中国大陆",
    "year": "1997",
    "genre": "爱情/奇幻",
    "category": "综艺动漫",
    "url": "./movie-0428.html",
    "cover": "./128.jpg"
  },
  {
    "title": "叶挺将军",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情,传记,历史",
    "category": "海外热播",
    "url": "./movie-0429.html",
    "cover": "./129.jpg"
  },
  {
    "title": "盗匪甜心",
    "region": "法国",
    "year": "2025",
    "genre": "喜剧,爱情,犯罪",
    "category": "动作冒险",
    "url": "./movie-0430.html",
    "cover": "./130.jpg"
  },
  {
    "title": "浮世三千",
    "region": "泰国",
    "year": "2026",
    "genre": "爱情,奇幻,历史",
    "category": "动作冒险",
    "url": "./movie-0431.html",
    "cover": "./131.jpg"
  },
  {
    "title": "轻音少女 粤语版",
    "region": "中国香港",
    "year": "2010",
    "genre": "动画,音乐",
    "category": "爱情家庭",
    "url": "./movie-0432.html",
    "cover": "./132.jpg"
  },
  {
    "title": "不像神探",
    "region": "中国香港",
    "year": "2024",
    "genre": "喜剧/悬疑/犯罪",
    "category": "综艺动漫",
    "url": "./movie-0433.html",
    "cover": "./133.jpg"
  },
  {
    "title": "名侦探柯南:第十四个目标",
    "region": "日本",
    "year": "1998",
    "genre": "悬疑,推理,犯罪",
    "category": "海外热播",
    "url": "./movie-0434.html",
    "cover": "./134.jpg"
  },
  {
    "title": "歌舞青春:音乐剧集第三季",
    "region": "美国",
    "year": "2025",
    "genre": "青春歌舞",
    "category": "爱情家庭",
    "url": "./movie-0435.html",
    "cover": "./135.jpg"
  },
  {
    "title": "菲比梦游奇境",
    "region": "美国",
    "year": "2008",
    "genre": "剧情、奇幻、家庭",
    "category": "动作冒险",
    "url": "./movie-0436.html",
    "cover": "./136.jpg"
  },
  {
    "title": "自由日",
    "region": "美国",
    "year": "2025",
    "genre": "科幻/动作/反乌托邦",
    "category": "爱情家庭",
    "url": "./movie-0437.html",
    "cover": "./137.jpg"
  },
  {
    "title": "有朋自远方来第第三季",
    "region": "中国",
    "year": "2025",
    "genre": "真人秀",
    "category": "海外热播",
    "url": "./movie-0438.html",
    "cover": "./138.jpg"
  },
  {
    "title": "幻灭",
    "region": "美国",
    "year": "2026",
    "genre": "剧情/奇幻/悬疑",
    "category": "海外热播",
    "url": "./movie-0439.html",
    "cover": "./139.jpg"
  },
  {
    "title": "特警飞龙",
    "region": "中国香港",
    "year": "2024",
    "genre": "警匪",
    "category": "经典剧集",
    "url": "./movie-0440.html",
    "cover": "./140.jpg"
  },
  {
    "title": "巅峰拍档第二十一季",
    "region": "英国",
    "year": "2024",
    "genre": "汽车真人秀",
    "category": "经典剧集",
    "url": "./movie-0441.html",
    "cover": "./141.jpg"
  },
  {
    "title": "乱码迷局",
    "region": "中国大陆",
    "year": "2025",
    "genre": "悬疑科幻",
    "category": "悬疑犯罪",
    "url": "./movie-0442.html",
    "cover": "./142.jpg"
  },
  {
    "title": "血染的黄金",
    "region": "法国",
    "year": "2022",
    "genre": "战争惊悚",
    "category": "海外热播",
    "url": "./movie-0443.html",
    "cover": "./143.jpg"
  },
  {
    "title": "精武飞鸿",
    "region": "中国香港",
    "year": "2026",
    "genre": "动作,历史,武侠",
    "category": "动作冒险",
    "url": "./movie-0444.html",
    "cover": "./144.jpg"
  },
  {
    "title": "刘家媳妇",
    "region": "中国",
    "year": "2024",
    "genre": "家庭/伦理/乡村",
    "category": "海外热播",
    "url": "./movie-0445.html",
    "cover": "./145.jpg"
  },
  {
    "title": "枪械师",
    "region": "美国",
    "year": "2025",
    "genre": "犯罪/动作",
    "category": "悬疑犯罪",
    "url": "./movie-0446.html",
    "cover": "./146.jpg"
  },
  {
    "title": "海上男儿",
    "region": "台湾",
    "year": "2024",
    "genre": "剧情/同性/家庭",
    "category": "动作冒险",
    "url": "./movie-0447.html",
    "cover": "./147.jpg"
  },
  {
    "title": "一起走过",
    "region": "中国大陆",
    "year": "2024",
    "genre": "家庭/伦理",
    "category": "爱情家庭",
    "url": "./movie-0448.html",
    "cover": "./148.jpg"
  },
  {
    "title": "破绽",
    "region": "美国",
    "year": "2024",
    "genre": "惊悚,悬疑,律政",
    "category": "高清电影",
    "url": "./movie-0449.html",
    "cover": "./149.jpg"
  },
  {
    "title": "加斯帕24小时",
    "region": "法国",
    "year": "2026",
    "genre": "惊悚,科幻",
    "category": "国产精选",
    "url": "./movie-0450.html",
    "cover": "./150.jpg"
  },
  {
    "title": "神秘博士第二季",
    "region": "英国",
    "year": "2006",
    "genre": "科幻/冒险",
    "category": "国产精选",
    "url": "./movie-0451.html",
    "cover": "./1.jpg"
  },
  {
    "title": "战龙哥斯拉之怪兽总进击",
    "region": "日本",
    "year": "2026",
    "genre": "特摄/灾难",
    "category": "高清电影",
    "url": "./movie-0452.html",
    "cover": "./2.jpg"
  },
  {
    "title": "老爸老妈看我的第一季",
    "region": "中国大陆",
    "year": "2019",
    "genre": "真人秀,家庭",
    "category": "悬疑犯罪",
    "url": "./movie-0453.html",
    "cover": "./3.jpg"
  },
  {
    "title": "七生有幸",
    "region": "美国",
    "year": "2023",
    "genre": "剧情,悬疑,奇幻",
    "category": "综艺动漫",
    "url": "./movie-0454.html",
    "cover": "./4.jpg"
  },
  {
    "title": "卧虎",
    "region": "中国香港",
    "year": "2024",
    "genre": "动作/犯罪",
    "category": "悬疑犯罪",
    "url": "./movie-0455.html",
    "cover": "./5.jpg"
  },
  {
    "title": "海豚伯尼2",
    "region": "美国",
    "year": "2021",
    "genre": "家庭/喜剧/冒险",
    "category": "综艺动漫",
    "url": "./movie-0456.html",
    "cover": "./6.jpg"
  },
  {
    "title": "迈沙贝尔",
    "region": "法国/德国",
    "year": "2023",
    "genre": "剧情/传记",
    "category": "爱情家庭",
    "url": "./movie-0457.html",
    "cover": "./7.jpg"
  },
  {
    "title": "魔法战士李维",
    "region": "日本",
    "year": "2025",
    "genre": "奇幻/动作/冒险",
    "category": "海外热播",
    "url": "./movie-0458.html",
    "cover": "./8.jpg"
  },
  {
    "title": "琦玉歌者3",
    "region": "日本",
    "year": "2029",
    "genre": "音乐,剧情",
    "category": "动作冒险",
    "url": "./movie-0459.html",
    "cover": "./9.jpg"
  },
  {
    "title": "家务优等生",
    "region": "中国大陆",
    "year": "2024",
    "genre": "喜剧/家庭",
    "category": "经典剧集",
    "url": "./movie-0460.html",
    "cover": "./10.jpg"
  },
  {
    "title": "你好,来了",
    "region": "中国台湾",
    "year": "2025",
    "genre": "奇幻,家庭,温情",
    "category": "国产精选",
    "url": "./movie-0461.html",
    "cover": "./11.jpg"
  },
  {
    "title": "女警爱作战粤语",
    "region": "中国香港",
    "year": "2022",
    "genre": "喜剧/动作/爱情",
    "category": "爱情家庭",
    "url": "./movie-0462.html",
    "cover": "./12.jpg"
  },
  {
    "title": "抽丝剥茧",
    "region": "中国大陆",
    "year": "2023",
    "genre": "悬疑,刑侦,心理",
    "category": "海外热播",
    "url": "./movie-0463.html",
    "cover": "./13.jpg"
  },
  {
    "title": "火舞黄沙粤语",
    "region": "中国香港",
    "year": "2025",
    "genre": "剧情,家族,年代",
    "category": "高清电影",
    "url": "./movie-0464.html",
    "cover": "./14.jpg"
  },
  {
    "title": "圣诞婚礼策划师",
    "region": "美国",
    "year": "2019",
    "genre": "爱情、喜剧、节日",
    "category": "国产精选",
    "url": "./movie-0465.html",
    "cover": "./15.jpg"
  },
  {
    "title": "火星的孩子",
    "region": "美国",
    "year": "2020",
    "genre": "剧情/科幻/家庭",
    "category": "海外热播",
    "url": "./movie-0466.html",
    "cover": "./16.jpg"
  },
  {
    "title": "他们结婚了还有很多孩子",
    "region": "法国",
    "year": "2018",
    "genre": "剧情/喜剧/家庭",
    "category": "国产精选",
    "url": "./movie-0467.html",
    "cover": "./17.jpg"
  },
  {
    "title": "纳粹集中营",
    "region": "德国/波兰",
    "year": "2023",
    "genre": "剧情/历史/战争",
    "category": "悬疑犯罪",
    "url": "./movie-0468.html",
    "cover": "./18.jpg"
  },
  {
    "title": "走着瞧",
    "region": "中国",
    "year": "2024",
    "genre": "剧情/喜剧",
    "category": "动作冒险",
    "url": "./movie-0469.html",
    "cover": "./19.jpg"
  },
  {
    "title": "明天的记忆",
    "region": "中国台湾",
    "year": "2022",
    "genre": "科幻,爱情,悬疑",
    "category": "悬疑犯罪",
    "url": "./movie-0470.html",
    "cover": "./20.jpg"
  },
  {
    "title": "全职法师",
    "region": "中国大陆",
    "year": "2025",
    "genre": "奇幻,动作",
    "category": "综艺动漫",
    "url": "./movie-0471.html",
    "cover": "./21.jpg"
  },
  {
    "title": "抢救痴情大兵",
    "region": "美国",
    "year": "2025",
    "genre": "战争喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-0472.html",
    "cover": "./22.jpg"
  },
  {
    "title": "血性山谷",
    "region": "中国大陆",
    "year": "2004",
    "genre": "战争/历史/剧情",
    "category": "悬疑犯罪",
    "url": "./movie-0473.html",
    "cover": "./23.jpg"
  },
  {
    "title": "子夜招魂",
    "region": "中国台湾",
    "year": "2024",
    "genre": "恐怖,惊悚,民俗",
    "category": "高清电影",
    "url": "./movie-0474.html",
    "cover": "./24.jpg"
  },
  {
    "title": "哥本哈根三温暖",
    "region": "丹麦",
    "year": "2024",
    "genre": "剧情/喜剧",
    "category": "高清电影",
    "url": "./movie-0475.html",
    "cover": "./25.jpg"
  },
  {
    "title": "怪化猫",
    "region": "日本",
    "year": "2007",
    "genre": "奇幻,恐怖",
    "category": "悬疑犯罪",
    "url": "./movie-0476.html",
    "cover": "./26.jpg"
  },
  {
    "title": "猿人行动",
    "region": "英国",
    "year": "2024",
    "genre": "动作,历史",
    "category": "动作冒险",
    "url": "./movie-0477.html",
    "cover": "./27.jpg"
  },
  {
    "title": "公主与狩猎者",
    "region": "美国",
    "year": "2025",
    "genre": "奇幻、动作、冒险",
    "category": "综艺动漫",
    "url": "./movie-0478.html",
    "cover": "./28.jpg"
  },
  {
    "title": "月季花开",
    "region": "中国大陆",
    "year": "2023",
    "genre": "家庭/年代/剧情",
    "category": "高清电影",
    "url": "./movie-0479.html",
    "cover": "./29.jpg"
  },
  {
    "title": "年轻战俘",
    "region": "德国",
    "year": "2024",
    "genre": "战争/剧情",
    "category": "悬疑犯罪",
    "url": "./movie-0480.html",
    "cover": "./30.jpg"
  },
  {
    "title": "粉红香蕉",
    "region": "巴西",
    "year": "2024",
    "genre": "奇幻/喜剧",
    "category": "动作冒险",
    "url": "./movie-0481.html",
    "cover": "./31.jpg"
  },
  {
    "title": "牵手",
    "region": "韩国",
    "year": "2026",
    "genre": "爱情/奇幻",
    "category": "高清电影",
    "url": "./movie-0482.html",
    "cover": "./32.jpg"
  },
  {
    "title": "巨神兵现身东京",
    "region": "日本",
    "year": "2024",
    "genre": "科幻、灾难、怪兽",
    "category": "海外热播",
    "url": "./movie-0483.html",
    "cover": "./33.jpg"
  },
  {
    "title": "王牌新主播",
    "region": "韩国",
    "year": "2025",
    "genre": "职场/剧情/悬疑",
    "category": "高清电影",
    "url": "./movie-0484.html",
    "cover": "./34.jpg"
  },
  {
    "title": "疯疯癫癫的阿兹洛",
    "region": "意大利",
    "year": "1978",
    "genre": "喜剧,奇幻,剧情",
    "category": "国产精选",
    "url": "./movie-0485.html",
    "cover": "./35.jpg"
  },
  {
    "title": "金色橡树岭",
    "region": "美国",
    "year": "2018",
    "genre": "家庭/西部/剧情",
    "category": "悬疑犯罪",
    "url": "./movie-0486.html",
    "cover": "./36.jpg"
  },
  {
    "title": "紫罗兰永恒花园 剧场版",
    "region": "日本",
    "year": "2025",
    "genre": "剧情,奇幻,治愈",
    "category": "国产精选",
    "url": "./movie-0487.html",
    "cover": "./37.jpg"
  },
  {
    "title": "追踪",
    "region": "中国大陆",
    "year": "2020",
    "genre": "悬疑,犯罪",
    "category": "经典剧集",
    "url": "./movie-0488.html",
    "cover": "./38.jpg"
  },
  {
    "title": "众神与野兽",
    "region": "英国",
    "year": "2025",
    "genre": "奇幻,剧情",
    "category": "综艺动漫",
    "url": "./movie-0489.html",
    "cover": "./39.jpg"
  },
  {
    "title": "龙之心:致命复仇",
    "region": "英国/罗马尼亚",
    "year": "2025",
    "genre": "奇幻/动作",
    "category": "国产精选",
    "url": "./movie-0490.html",
    "cover": "./40.jpg"
  },
  {
    "title": "总之就是非常可爱~制服~",
    "region": "日本",
    "year": "2025",
    "genre": "爱情/喜剧/奇幻",
    "category": "综艺动漫",
    "url": "./movie-0491.html",
    "cover": "./41.jpg"
  },
  {
    "title": "天下美人",
    "region": "中国大陆",
    "year": "2024",
    "genre": "古装,权谋",
    "category": "高清电影",
    "url": "./movie-0492.html",
    "cover": "./42.jpg"
  },
  {
    "title": "黄金神威",
    "region": "日本",
    "year": "2018",
    "genre": "冒险/历史/美食",
    "category": "动作冒险",
    "url": "./movie-0493.html",
    "cover": "./43.jpg"
  },
  {
    "title": "黑钱(韩国电影)",
    "region": "韩国",
    "year": "2021",
    "genre": "犯罪,剧情,动作",
    "category": "高清电影",
    "url": "./movie-0494.html",
    "cover": "./44.jpg"
  },
  {
    "title": "隋唐英雄3",
    "region": "中国大陆",
    "year": "2014",
    "genre": "古装/历史/战争",
    "category": "经典剧集",
    "url": "./movie-0495.html",
    "cover": "./45.jpg"
  },
  {
    "title": "黑金地的女人",
    "region": "中国大陆",
    "year": "2025",
    "genre": "剧情/家庭/社会",
    "category": "海外热播",
    "url": "./movie-0496.html",
    "cover": "./46.jpg"
  },
  {
    "title": "等待之城",
    "region": "中国",
    "year": "2025",
    "genre": "奇幻爱情",
    "category": "悬疑犯罪",
    "url": "./movie-0497.html",
    "cover": "./47.jpg"
  },
  {
    "title": "千万别开门",
    "region": "中国大陆",
    "year": "2024",
    "genre": "惊悚/悬疑",
    "category": "爱情家庭",
    "url": "./movie-0498.html",
    "cover": "./48.jpg"
  },
  {
    "title": "织田肉桂信长",
    "region": "日本",
    "year": "2025",
    "genre": "奇幻/喜剧/历史",
    "category": "国产精选",
    "url": "./movie-0499.html",
    "cover": "./49.jpg"
  },
  {
    "title": "她和她的恋爱小动作",
    "region": "日本",
    "year": "2024",
    "genre": "爱情/喜剧/日常",
    "category": "综艺动漫",
    "url": "./movie-0500.html",
    "cover": "./50.jpg"
  },
  {
    "title": "千方百计夺锦标",
    "region": "美国",
    "year": "2025",
    "genre": "喜剧/犯罪/运动",
    "category": "经典剧集",
    "url": "./movie-0501.html",
    "cover": "./51.jpg"
  },
  {
    "title": "曼哈顿二人行",
    "region": "美国",
    "year": "2025",
    "genre": "爱情,剧情",
    "category": "综艺动漫",
    "url": "./movie-0502.html",
    "cover": "./52.jpg"
  },
  {
    "title": "案中案",
    "region": "中国香港",
    "year": "2026",
    "genre": "悬疑/犯罪/惊悚",
    "category": "高清电影",
    "url": "./movie-0503.html",
    "cover": "./53.jpg"
  },
  {
    "title": "兔子暴力",
    "region": "中国大陆",
    "year": "2025",
    "genre": "犯罪/剧情/女性",
    "category": "国产精选",
    "url": "./movie-0504.html",
    "cover": "./54.jpg"
  },
  {
    "title": "马卡龙少女",
    "region": "法国",
    "year": "2023",
    "genre": "喜剧/青春/美食",
    "category": "经典剧集",
    "url": "./movie-0505.html",
    "cover": "./55.jpg"
  },
  {
    "title": "天涯仙侣",
    "region": "中国大陆",
    "year": "2026",
    "genre": "古装,仙侠",
    "category": "悬疑犯罪",
    "url": "./movie-0506.html",
    "cover": "./56.jpg"
  },
  {
    "title": "女盖世太保",
    "region": "法国/西德",
    "year": "1976",
    "genre": "战争、惊悚、犯罪",
    "category": "经典剧集",
    "url": "./movie-0507.html",
    "cover": "./57.jpg"
  },
  {
    "title": "小小校长",
    "region": "中国香港",
    "year": "2027",
    "genre": "喜剧/家庭",
    "category": "悬疑犯罪",
    "url": "./movie-0508.html",
    "cover": "./58.jpg"
  },
  {
    "title": "艾曼妞与罗丽妲",
    "region": "法国",
    "year": "2023",
    "genre": "剧情,情色,文艺",
    "category": "经典剧集",
    "url": "./movie-0509.html",
    "cover": "./59.jpg"
  },
  {
    "title": "圣诞夜怪谭",
    "region": "美国",
    "year": "2025",
    "genre": "恐怖/悬疑",
    "category": "爱情家庭",
    "url": "./movie-0510.html",
    "cover": "./60.jpg"
  },
  {
    "title": "午夜人魔",
    "region": "美国",
    "year": "2023",
    "genre": "恐怖/惊悚",
    "category": "综艺动漫",
    "url": "./movie-0511.html",
    "cover": "./61.jpg"
  },
  {
    "title": "行尸之惧第三季",
    "region": "美国",
    "year": "2017",
    "genre": "恐怖/剧情/生存",
    "category": "经典剧集",
    "url": "./movie-0512.html",
    "cover": "./62.jpg"
  },
  {
    "title": "她们的名字叫红",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情",
    "category": "动作冒险",
    "url": "./movie-0513.html",
    "cover": "./63.jpg"
  },
  {
    "title": "春天的狂想",
    "region": "中国大陆",
    "year": "2000",
    "genre": "爱情/年代/剧情",
    "category": "爱情家庭",
    "url": "./movie-0514.html",
    "cover": "./64.jpg"
  },
  {
    "title": "旧金山风物记",
    "region": "美国",
    "year": "2022",
    "genre": "犯罪,年代",
    "category": "悬疑犯罪",
    "url": "./movie-0515.html",
    "cover": "./65.jpg"
  },
  {
    "title": "你在我的右手边第二季",
    "region": "中国大陆",
    "year": "2022",
    "genre": "青春,校园",
    "category": "综艺动漫",
    "url": "./movie-0516.html",
    "cover": "./66.jpg"
  },
  {
    "title": "敌军",
    "region": "俄罗斯",
    "year": "2025",
    "genre": "战争剧情",
    "category": "综艺动漫",
    "url": "./movie-0517.html",
    "cover": "./67.jpg"
  },
  {
    "title": "野小子之路",
    "region": "法国",
    "year": "2022",
    "genre": "剧情/冒险",
    "category": "动作冒险",
    "url": "./movie-0518.html",
    "cover": "./68.jpg"
  },
  {
    "title": "大商道",
    "region": "中国大陆",
    "year": "2023",
    "genre": "剧情/历史/商战",
    "category": "国产精选",
    "url": "./movie-0519.html",
    "cover": "./69.jpg"
  },
  {
    "title": "人情鬼蜮",
    "region": "中国香港/台湾",
    "year": "2024",
    "genre": "恐怖/民俗",
    "category": "经典剧集",
    "url": "./movie-0520.html",
    "cover": "./70.jpg"
  },
  {
    "title": "里约大冒险",
    "region": "美国",
    "year": "2025",
    "genre": "动画/冒险/喜剧",
    "category": "动作冒险",
    "url": "./movie-0521.html",
    "cover": "./71.jpg"
  },
  {
    "title": "骑士的战争",
    "region": "英国",
    "year": "2026",
    "genre": "历史,战争,动作",
    "category": "国产精选",
    "url": "./movie-0522.html",
    "cover": "./72.jpg"
  },
  {
    "title": "终极悬案",
    "region": "中国大陆",
    "year": "2004",
    "genre": "悬疑,犯罪,刑侦",
    "category": "国产精选",
    "url": "./movie-0523.html",
    "cover": "./73.jpg"
  },
  {
    "title": "古镜幽魂",
    "region": "中国台湾",
    "year": "1974",
    "genre": "恐怖、爱情、古装",
    "category": "爱情家庭",
    "url": "./movie-0524.html",
    "cover": "./74.jpg"
  },
  {
    "title": "云南虫谷之献王传说",
    "region": "中国大陆",
    "year": "2020",
    "genre": "冒险/惊悚",
    "category": "高清电影",
    "url": "./movie-0525.html",
    "cover": "./75.jpg"
  },
  {
    "title": "末日村庄",
    "region": "日本",
    "year": "2027",
    "genre": "恐怖、生存",
    "category": "高清电影",
    "url": "./movie-0526.html",
    "cover": "./76.jpg"
  },
  {
    "title": "日光峡谷",
    "region": "中国大陆",
    "year": "1995",
    "genre": "剧情,西部,动作",
    "category": "爱情家庭",
    "url": "./movie-0527.html",
    "cover": "./77.jpg"
  },
  {
    "title": "男孩生活2",
    "region": "美国",
    "year": "2025",
    "genre": "剧情,家庭",
    "category": "动作冒险",
    "url": "./movie-0528.html",
    "cover": "./78.jpg"
  },
  {
    "title": "东海道四谷怪谈",
    "region": "日本",
    "year": "2025",
    "genre": "恐怖,古装",
    "category": "海外热播",
    "url": "./movie-0529.html",
    "cover": "./79.jpg"
  },
  {
    "title": "海妲",
    "region": "挪威",
    "year": "2017",
    "genre": "惊悚、奇幻、剧情",
    "category": "综艺动漫",
    "url": "./movie-0530.html",
    "cover": "./80.jpg"
  },
  {
    "title": "鬼勾魂",
    "region": "泰国",
    "year": "2024",
    "genre": "恐怖,悬疑,灵异",
    "category": "高清电影",
    "url": "./movie-0531.html",
    "cover": "./81.jpg"
  },
  {
    "title": "继承高校2",
    "region": "美国",
    "year": "2025",
    "genre": "剧情,悬疑,青春",
    "category": "高清电影",
    "url": "./movie-0532.html",
    "cover": "./82.jpg"
  },
  {
    "title": "萨博马蒂报告",
    "region": "印度",
    "year": "2026",
    "genre": "悬疑/惊悚/犯罪",
    "category": "综艺动漫",
    "url": "./movie-0533.html",
    "cover": "./83.jpg"
  },
  {
    "title": "我是只小小鸟",
    "region": "中国",
    "year": "2025",
    "genre": "动画,音乐",
    "category": "爱情家庭",
    "url": "./movie-0534.html",
    "cover": "./84.jpg"
  },
  {
    "title": "白骆驼",
    "region": "蒙古国/中国大陆",
    "year": "2026",
    "genre": "剧情/冒险",
    "category": "高清电影",
    "url": "./movie-0535.html",
    "cover": "./85.jpg"
  },
  {
    "title": "远征别墅",
    "region": "法国",
    "year": "2025",
    "genre": "剧情,悬疑,文艺",
    "category": "海外热播",
    "url": "./movie-0536.html",
    "cover": "./86.jpg"
  },
  {
    "title": "孟加拉虎",
    "region": "印度",
    "year": "2024",
    "genre": "动作、剧情",
    "category": "爱情家庭",
    "url": "./movie-0537.html",
    "cover": "./87.jpg"
  },
  {
    "title": "变形金刚:堕落者的复仇",
    "region": "美国",
    "year": "2027",
    "genre": "动作/科幻/冒险",
    "category": "悬疑犯罪",
    "url": "./movie-0538.html",
    "cover": "./88.jpg"
  },
  {
    "title": "白马之子",
    "region": "蒙古/中国大陆",
    "year": "2024",
    "genre": "剧情/家庭/冒险",
    "category": "国产精选",
    "url": "./movie-0539.html",
    "cover": "./89.jpg"
  },
  {
    "title": "白银和梦想之书",
    "region": "德国",
    "year": "2023",
    "genre": "奇幻/冒险",
    "category": "海外热播",
    "url": "./movie-0540.html",
    "cover": "./90.jpg"
  },
  {
    "title": "克罗马小子",
    "region": "法国",
    "year": "2025",
    "genre": "动画/历史/冒险",
    "category": "爱情家庭",
    "url": "./movie-0541.html",
    "cover": "./91.jpg"
  },
  {
    "title": "头师父一体",
    "region": "韩国",
    "year": "2001",
    "genre": "喜剧/动作",
    "category": "海外热播",
    "url": "./movie-0542.html",
    "cover": "./92.jpg"
  },
  {
    "title": "我的小山雀",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情,家庭",
    "category": "高清电影",
    "url": "./movie-0543.html",
    "cover": "./93.jpg"
  },
  {
    "title": "欧若拉之晨",
    "region": "挪威",
    "year": "2025",
    "genre": "科幻/悬疑",
    "category": "悬疑犯罪",
    "url": "./movie-0544.html",
    "cover": "./94.jpg"
  },
  {
    "title": "韩半岛",
    "region": "韩国",
    "year": "2024",
    "genre": "剧情/动作",
    "category": "经典剧集",
    "url": "./movie-0545.html",
    "cover": "./95.jpg"
  },
  {
    "title": "银冰艳舞",
    "region": "俄罗斯",
    "year": "2020",
    "genre": "剧情/运动",
    "category": "爱情家庭",
    "url": "./movie-0546.html",
    "cover": "./96.jpg"
  },
  {
    "title": "乳牙2019",
    "region": "澳大利亚",
    "year": "2019",
    "genre": "剧情,爱情",
    "category": "综艺动漫",
    "url": "./movie-0547.html",
    "cover": "./97.jpg"
  },
  {
    "title": "逝者如歌",
    "region": "法国",
    "year": "2025",
    "genre": "剧情/音乐",
    "category": "综艺动漫",
    "url": "./movie-0548.html",
    "cover": "./98.jpg"
  },
  {
    "title": "爱情诡计",
    "region": "泰国",
    "year": "2026",
    "genre": "爱情/悬疑/同性",
    "category": "综艺动漫",
    "url": "./movie-0549.html",
    "cover": "./99.jpg"
  },
  {
    "title": "猎鬼姐妹",
    "region": "泰国",
    "year": "2022",
    "genre": "恐怖/喜剧/青春",
    "category": "海外热播",
    "url": "./movie-0550.html",
    "cover": "./100.jpg"
  },
  {
    "title": "大周小冰人第二季",
    "region": "中国大陆",
    "year": "2025",
    "genre": "古装职场",
    "category": "高清电影",
    "url": "./movie-0551.html",
    "cover": "./101.jpg"
  },
  {
    "title": "时光机器:回程",
    "region": "英国",
    "year": "2026",
    "genre": "科幻",
    "category": "悬疑犯罪",
    "url": "./movie-0552.html",
    "cover": "./102.jpg"
  },
  {
    "title": "德九",
    "region": "韩国",
    "year": "2022",
    "genre": "剧情,家庭,战争",
    "category": "经典剧集",
    "url": "./movie-0553.html",
    "cover": "./103.jpg"
  },
  {
    "title": "花困风尘",
    "region": "中国香港",
    "year": "1988",
    "genre": "剧情、爱情",
    "category": "经典剧集",
    "url": "./movie-0554.html",
    "cover": "./104.jpg"
  },
  {
    "title": "非凡之旅《进藏》",
    "region": "中国大陆",
    "year": "2025",
    "genre": "纪录,冒险,人文",
    "category": "海外热播",
    "url": "./movie-0555.html",
    "cover": "./105.jpg"
  },
  {
    "title": "柯达克罗姆胶卷",
    "region": "加拿大/美国",
    "year": "2017",
    "genre": "剧情/公路/家庭",
    "category": "动作冒险",
    "url": "./movie-0556.html",
    "cover": "./106.jpg"
  },
  {
    "title": "芝加哥警署第六季",
    "region": "美国",
    "year": "2026",
    "genre": "犯罪、剧情",
    "category": "爱情家庭",
    "url": "./movie-0557.html",
    "cover": "./107.jpg"
  },
  {
    "title": "蜡像",
    "region": "中国香港",
    "year": "2024",
    "genre": "恐怖/惊悚",
    "category": "国产精选",
    "url": "./movie-0558.html",
    "cover": "./108.jpg"
  },
  {
    "title": "窒息",
    "region": "中国大陆",
    "year": "2024",
    "genre": "悬疑,惊悚,心理",
    "category": "动作冒险",
    "url": "./movie-0559.html",
    "cover": "./109.jpg"
  },
  {
    "title": "三轮车夫",
    "region": "越南/法国",
    "year": "2023",
    "genre": "剧情文艺",
    "category": "动作冒险",
    "url": "./movie-0560.html",
    "cover": "./110.jpg"
  },
  {
    "title": "真实身分",
    "region": "中国台湾",
    "year": "2021",
    "genre": "悬疑/惊悚/剧情",
    "category": "国产精选",
    "url": "./movie-0561.html",
    "cover": "./111.jpg"
  },
  {
    "title": "阿拉丁和神灯",
    "region": "法国",
    "year": "2015",
    "genre": "喜剧/奇幻/冒险",
    "category": "经典剧集",
    "url": "./movie-0562.html",
    "cover": "./112.jpg"
  },
  {
    "title": "魔灵1988",
    "region": "日本",
    "year": "2024",
    "genre": "恐怖,灵异",
    "category": "悬疑犯罪",
    "url": "./movie-0563.html",
    "cover": "./113.jpg"
  },
  {
    "title": "花豹少女队",
    "region": "南非",
    "year": "2024",
    "genre": "动作、冒险、青春",
    "category": "悬疑犯罪",
    "url": "./movie-0564.html",
    "cover": "./114.jpg"
  },
  {
    "title": "铁头",
    "region": "中国大陆",
    "year": "2024",
    "genre": "动作,犯罪,黑色幽默",
    "category": "国产精选",
    "url": "./movie-0565.html",
    "cover": "./115.jpg"
  },
  {
    "title": "特种兵归来3:绝密战场",
    "region": "中国大陆",
    "year": "2024",
    "genre": "动作/战争",
    "category": "海外热播",
    "url": "./movie-0566.html",
    "cover": "./116.jpg"
  },
  {
    "title": "恶魔心灵",
    "region": "韩国",
    "year": "2025",
    "genre": "恐怖/悬疑",
    "category": "综艺动漫",
    "url": "./movie-0567.html",
    "cover": "./117.jpg"
  },
  {
    "title": "通灵王",
    "region": "日本",
    "year": "2026",
    "genre": "奇幻/冒险",
    "category": "动作冒险",
    "url": "./movie-0568.html",
    "cover": "./118.jpg"
  },
  {
    "title": "驱魔少年 圣徒",
    "region": "日本",
    "year": "2025",
    "genre": "奇幻、战斗、宗教",
    "category": "悬疑犯罪",
    "url": "./movie-0569.html",
    "cover": "./119.jpg"
  },
  {
    "title": "邦蒂号之后",
    "region": "英国",
    "year": "2025",
    "genre": "历史/冒险",
    "category": "动作冒险",
    "url": "./movie-0570.html",
    "cover": "./120.jpg"
  },
  {
    "title": "移居者",
    "region": "美国/德国",
    "year": "2025",
    "genre": "科幻,悬疑,剧情",
    "category": "爱情家庭",
    "url": "./movie-0571.html",
    "cover": "./121.jpg"
  },
  {
    "title": "无腿先生",
    "region": "美国",
    "year": "2020",
    "genre": "剧情/运动/励志",
    "category": "综艺动漫",
    "url": "./movie-0572.html",
    "cover": "./122.jpg"
  },
  {
    "title": "全金属狂潮第一季",
    "region": "日本",
    "year": "2002",
    "genre": "动画、科幻、喜剧、动作",
    "category": "动作冒险",
    "url": "./movie-0573.html",
    "cover": "./123.jpg"
  },
  {
    "title": "战地救援:卢安达风云",
    "region": "美国",
    "year": "2022",
    "genre": "战争,历史,剧情",
    "category": "悬疑犯罪",
    "url": "./movie-0574.html",
    "cover": "./124.jpg"
  },
  {
    "title": "四虎将",
    "region": "中国香港",
    "year": "2025",
    "genre": "动作/犯罪",
    "category": "爱情家庭",
    "url": "./movie-0575.html",
    "cover": "./125.jpg"
  },
  {
    "title": "歌声欢唱的树",
    "region": "哈萨克斯坦",
    "year": "2017",
    "genre": "剧情/家庭",
    "category": "经典剧集",
    "url": "./movie-0576.html",
    "cover": "./126.jpg"
  },
  {
    "title": "在无爱之森呐喊",
    "region": "日本",
    "year": "2019",
    "genre": "惊悚,悬疑",
    "category": "高清电影",
    "url": "./movie-0577.html",
    "cover": "./127.jpg"
  },
  {
    "title": "杜巴先生",
    "region": "法国",
    "year": "2017",
    "genre": "剧情、奇幻、温情",
    "category": "综艺动漫",
    "url": "./movie-0578.html",
    "cover": "./128.jpg"
  },
  {
    "title": "战略机动大作战",
    "region": "日本",
    "year": "2024",
    "genre": "科幻,机战,冒险",
    "category": "悬疑犯罪",
    "url": "./movie-0579.html",
    "cover": "./129.jpg"
  },
  {
    "title": "富贵荣华第一家",
    "region": "中国香港",
    "year": "2024",
    "genre": "喜剧,剧情,家庭",
    "category": "海外热播",
    "url": "./movie-0580.html",
    "cover": "./130.jpg"
  },
  {
    "title": "吸血姬美夕",
    "region": "日本",
    "year": "1988",
    "genre": "奇幻,恐怖,少女",
    "category": "爱情家庭",
    "url": "./movie-0581.html",
    "cover": "./131.jpg"
  },
  {
    "title": "极品妈妈",
    "region": "韩国",
    "year": "2023",
    "genre": "喜剧,家庭,悬疑",
    "category": "海外热播",
    "url": "./movie-0582.html",
    "cover": "./132.jpg"
  },
  {
    "title": "第一缕曙光",
    "region": "英国",
    "year": "2025",
    "genre": "科幻悬疑",
    "category": "爱情家庭",
    "url": "./movie-0583.html",
    "cover": "./133.jpg"
  },
  {
    "title": "罗罗大冒险",
    "region": "中国大陆",
    "year": "2026",
    "genre": "冒险/奇幻/合家欢",
    "category": "综艺动漫",
    "url": "./movie-0584.html",
    "cover": "./134.jpg"
  },
  {
    "title": "蔑视",
    "region": "法国/意大利",
    "year": "2024",
    "genre": "剧情/心理/情色",
    "category": "海外热播",
    "url": "./movie-0585.html",
    "cover": "./135.jpg"
  },
  {
    "title": "新·驯龙高手",
    "region": "美国",
    "year": "2026",
    "genre": "奇幻,冒险,动作",
    "category": "国产精选",
    "url": "./movie-0586.html",
    "cover": "./136.jpg"
  },
  {
    "title": "说出你的故事",
    "region": "中国台湾",
    "year": "2022",
    "genre": "悬疑,心理",
    "category": "爱情家庭",
    "url": "./movie-0587.html",
    "cover": "./137.jpg"
  },
  {
    "title": "暗箭明枪",
    "region": "中国香港",
    "year": "2006",
    "genre": "动作/悬疑",
    "category": "国产精选",
    "url": "./movie-0588.html",
    "cover": "./138.jpg"
  },
  {
    "title": "食鬼师",
    "region": "中国台湾",
    "year": "2023",
    "genre": "奇幻,恐怖,美食",
    "category": "悬疑犯罪",
    "url": "./movie-0589.html",
    "cover": "./139.jpg"
  },
  {
    "title": "温暖在人间",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情/家庭",
    "category": "海外热播",
    "url": "./movie-0590.html",
    "cover": "./140.jpg"
  },
  {
    "title": "魔鬼下凡",
    "region": "美国",
    "year": "2025",
    "genre": "恐怖",
    "category": "爱情家庭",
    "url": "./movie-0591.html",
    "cover": "./141.jpg"
  },
  {
    "title": "瑾娘",
    "region": "中国",
    "year": "2025",
    "genre": "悬疑,古装",
    "category": "综艺动漫",
    "url": "./movie-0592.html",
    "cover": "./142.jpg"
  },
  {
    "title": "乘风破浪的姐姐第二季",
    "region": "中国大陆",
    "year": "2025",
    "genre": "真人秀/音乐/竞技",
    "category": "经典剧集",
    "url": "./movie-0593.html",
    "cover": "./143.jpg"
  },
  {
    "title": "替天行道之杀兄",
    "region": "中国香港",
    "year": "1994",
    "genre": "犯罪/惊悚",
    "category": "爱情家庭",
    "url": "./movie-0594.html",
    "cover": "./144.jpg"
  },
  {
    "title": "挖掘者",
    "region": "西班牙",
    "year": "2025",
    "genre": "悬疑,惊悚",
    "category": "综艺动漫",
    "url": "./movie-0595.html",
    "cover": "./145.jpg"
  },
  {
    "title": "蛋糕合唱团",
    "region": "中国台湾",
    "year": "2021",
    "genre": "剧情/音乐/喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-0596.html",
    "cover": "./146.jpg"
  },
  {
    "title": "我的弟子都超神",
    "region": "中国",
    "year": "2025",
    "genre": "玄幻、喜剧、群像",
    "category": "动作冒险",
    "url": "./movie-0597.html",
    "cover": "./147.jpg"
  },
  {
    "title": "我公然梦想成为灰姑娘",
    "region": "韩国",
    "year": "2026",
    "genre": "浪漫、喜剧、幻想",
    "category": "综艺动漫",
    "url": "./movie-0598.html",
    "cover": "./148.jpg"
  },
  {
    "title": "铁刀奥马",
    "region": "中国大陆",
    "year": "2026",
    "genre": "动作,武侠",
    "category": "高清电影",
    "url": "./movie-0599.html",
    "cover": "./149.jpg"
  },
  {
    "title": "球场艳侣",
    "region": "韩国",
    "year": "2024",
    "genre": "爱情喜剧",
    "category": "综艺动漫",
    "url": "./movie-0600.html",
    "cover": "./150.jpg"
  },
  {
    "title": "最好的世界",
    "region": "德国",
    "year": "2024",
    "genre": "剧情,科幻,悬疑",
    "category": "综艺动漫",
    "url": "./movie-0601.html",
    "cover": "./1.jpg"
  },
  {
    "title": "汉武大帝",
    "region": "中国大陆",
    "year": "2024",
    "genre": "历史,传记",
    "category": "经典剧集",
    "url": "./movie-0602.html",
    "cover": "./2.jpg"
  },
  {
    "title": "网络贩卖少女",
    "region": "韩国",
    "year": "2021",
    "genre": "犯罪,剧情,悬疑",
    "category": "悬疑犯罪",
    "url": "./movie-0603.html",
    "cover": "./3.jpg"
  },
  {
    "title": "怒火雄心",
    "region": "中国香港",
    "year": "2025",
    "genre": "警匪动作",
    "category": "爱情家庭",
    "url": "./movie-0604.html",
    "cover": "./4.jpg"
  },
  {
    "title": "五支歌",
    "region": "中国台湾",
    "year": "2023",
    "genre": "音乐/剧情/家庭",
    "category": "爱情家庭",
    "url": "./movie-0605.html",
    "cover": "./5.jpg"
  },
  {
    "title": "风之门:情系西西里岛",
    "region": "意大利",
    "year": "2023",
    "genre": "爱情,剧情,历史",
    "category": "经典剧集",
    "url": "./movie-0606.html",
    "cover": "./6.jpg"
  },
  {
    "title": "又见阿郎",
    "region": "中国香港",
    "year": "1991",
    "genre": "剧情/爱情",
    "category": "综艺动漫",
    "url": "./movie-0607.html",
    "cover": "./7.jpg"
  },
  {
    "title": "假钞",
    "region": "德国",
    "year": "2009",
    "genre": "犯罪/剧情",
    "category": "国产精选",
    "url": "./movie-0608.html",
    "cover": "./8.jpg"
  },
  {
    "title": "沙漠中的少年",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情,冒险,家庭",
    "category": "悬疑犯罪",
    "url": "./movie-0609.html",
    "cover": "./9.jpg"
  },
  {
    "title": "极限营救",
    "region": "美国",
    "year": "2025",
    "genre": "动作,惊悚",
    "category": "经典剧集",
    "url": "./movie-0610.html",
    "cover": "./10.jpg"
  },
  {
    "title": "芭啦芭啦樱之花",
    "region": "日本,中国台湾",
    "year": "2026",
    "genre": "爱情,音乐",
    "category": "经典剧集",
    "url": "./movie-0611.html",
    "cover": "./11.jpg"
  },
  {
    "title": "玉女弄璋",
    "region": "中国香港",
    "year": "1967",
    "genre": "歌舞,喜剧",
    "category": "海外热播",
    "url": "./movie-0612.html",
    "cover": "./12.jpg"
  },
  {
    "title": "神秘粉红",
    "region": "日本",
    "year": "2026",
    "genre": "奇幻/悬疑/少女",
    "category": "海外热播",
    "url": "./movie-0613.html",
    "cover": "./13.jpg"
  },
  {
    "title": "下一站幸福",
    "region": "中国台湾",
    "year": "2009",
    "genre": "爱情/家庭",
    "category": "高清电影",
    "url": "./movie-0614.html",
    "cover": "./14.jpg"
  },
  {
    "title": "梨花似雪",
    "region": "中国",
    "year": "2024",
    "genre": "年代,爱情",
    "category": "经典剧集",
    "url": "./movie-0615.html",
    "cover": "./15.jpg"
  },
  {
    "title": "幸运逻辑",
    "region": "日本",
    "year": "2016",
    "genre": "科幻/冒险/萌系",
    "category": "高清电影",
    "url": "./movie-0616.html",
    "cover": "./16.jpg"
  },
  {
    "title": "吸血鬼生活 第二季",
    "region": "美国",
    "year": "2025",
    "genre": "喜剧,奇幻",
    "category": "动作冒险",
    "url": "./movie-0617.html",
    "cover": "./17.jpg"
  },
  {
    "title": "补偿",
    "region": "日本",
    "year": "2024",
    "genre": "悬疑/犯罪/剧情",
    "category": "动作冒险",
    "url": "./movie-0618.html",
    "cover": "./18.jpg"
  },
  {
    "title": "阿曼德",
    "region": "英国",
    "year": "2025",
    "genre": "剧情、悬疑",
    "category": "爱情家庭",
    "url": "./movie-0619.html",
    "cover": "./19.jpg"
  },
  {
    "title": "美国好人家",
    "region": "美国",
    "year": "2026",
    "genre": "悬疑/惊悚/家庭",
    "category": "爱情家庭",
    "url": "./movie-0620.html",
    "cover": "./20.jpg"
  },
  {
    "title": "山野",
    "region": "中国大陆",
    "year": "2024",
    "genre": "悬疑惊悚",
    "category": "国产精选",
    "url": "./movie-0621.html",
    "cover": "./21.jpg"
  },
  {
    "title": "萨拉戈萨的手稿",
    "region": "波兰",
    "year": "1965",
    "genre": "剧情/奇幻/悬疑",
    "category": "高清电影",
    "url": "./movie-0622.html",
    "cover": "./22.jpg"
  },
  {
    "title": "红白蓝",
    "region": "法国",
    "year": "2025",
    "genre": "悬疑,剧情,心理",
    "category": "综艺动漫",
    "url": "./movie-0623.html",
    "cover": "./23.jpg"
  },
  {
    "title": "创业先锋",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情,商战",
    "category": "动作冒险",
    "url": "./movie-0624.html",
    "cover": "./24.jpg"
  },
  {
    "title": "与我同眠",
    "region": "法国",
    "year": "2023",
    "genre": "爱情/奇幻/悬疑",
    "category": "悬疑犯罪",
    "url": "./movie-0625.html",
    "cover": "./25.jpg"
  },
  {
    "title": "金牌女将",
    "region": "中国大陆",
    "year": "2023",
    "genre": "运动/剧情/励志",
    "category": "悬疑犯罪",
    "url": "./movie-0626.html",
    "cover": "./26.jpg"
  },
  {
    "title": "白圣女与黑牧师",
    "region": "日本",
    "year": "2023",
    "genre": "动画,奇幻,日常",
    "category": "国产精选",
    "url": "./movie-0627.html",
    "cover": "./27.jpg"
  },
  {
    "title": "天下第几",
    "region": "中国大陆",
    "year": "2024",
    "genre": "古装,喜剧,武侠",
    "category": "经典剧集",
    "url": "./movie-0628.html",
    "cover": "./28.jpg"
  },
  {
    "title": "全息游戏:恋爱世界",
    "region": "中国大陆",
    "year": "2025",
    "genre": "科幻/爱情/悬疑",
    "category": "悬疑犯罪",
    "url": "./movie-0629.html",
    "cover": "./29.jpg"
  },
  {
    "title": "枪神传奇",
    "region": "中国大陆",
    "year": "2012",
    "genre": "剧情/战争",
    "category": "动作冒险",
    "url": "./movie-0630.html",
    "cover": "./30.jpg"
  },
  {
    "title": "伊犁河谷",
    "region": "中国",
    "year": "2015",
    "genre": "剧情、历史、爱情",
    "category": "高清电影",
    "url": "./movie-0631.html",
    "cover": "./31.jpg"
  },
  {
    "title": "佛山赞师父粤语",
    "region": "中国香港",
    "year": "2024",
    "genre": "动作武侠",
    "category": "爱情家庭",
    "url": "./movie-0632.html",
    "cover": "./32.jpg"
  },
  {
    "title": "玛拉娜·辛哈沙南",
    "region": "印度",
    "year": "2024",
    "genre": "动作,历史",
    "category": "悬疑犯罪",
    "url": "./movie-0633.html",
    "cover": "./33.jpg"
  },
  {
    "title": "食骨恶灵",
    "region": "日本",
    "year": "2024",
    "genre": "恐怖,民俗,悬疑",
    "category": "经典剧集",
    "url": "./movie-0634.html",
    "cover": "./34.jpg"
  },
  {
    "title": "说正经的,宝贝",
    "region": "中国大陆",
    "year": "2026",
    "genre": "喜剧、爱情",
    "category": "动作冒险",
    "url": "./movie-0635.html",
    "cover": "./35.jpg"
  },
  {
    "title": "大冒险家国语",
    "region": "中国香港",
    "year": "1995",
    "genre": "动作,冒险",
    "category": "综艺动漫",
    "url": "./movie-0636.html",
    "cover": "./36.jpg"
  },
  {
    "title": "曼森",
    "region": "美国",
    "year": "2025",
    "genre": "惊悚,犯罪",
    "category": "动作冒险",
    "url": "./movie-0637.html",
    "cover": "./37.jpg"
  },
  {
    "title": "嗜谎之神",
    "region": "美国",
    "year": "2026",
    "genre": "奇幻/悬疑/惊悚",
    "category": "爱情家庭",
    "url": "./movie-0638.html",
    "cover": "./38.jpg"
  },
  {
    "title": "机动组第一季",
    "region": "中国香港",
    "year": "2025",
    "genre": "警匪动作",
    "category": "国产精选",
    "url": "./movie-0639.html",
    "cover": "./39.jpg"
  },
  {
    "title": "夺命钢琴",
    "region": "西班牙",
    "year": "2023",
    "genre": "惊悚/音乐",
    "category": "爱情家庭",
    "url": "./movie-0640.html",
    "cover": "./40.jpg"
  },
  {
    "title": "招魂4:终章",
    "region": "美国",
    "year": "2025",
    "genre": "恐怖,惊悚",
    "category": "国产精选",
    "url": "./movie-0641.html",
    "cover": "./41.jpg"
  },
  {
    "title": "午夜计程车第一季",
    "region": "中国大陆",
    "year": "2014",
    "genre": "剧情,都市,悬疑",
    "category": "经典剧集",
    "url": "./movie-0642.html",
    "cover": "./42.jpg"
  },
  {
    "title": "纪雄的房间",
    "region": "日本",
    "year": "2024",
    "genre": "剧情/悬疑/家庭",
    "category": "动作冒险",
    "url": "./movie-0643.html",
    "cover": "./43.jpg"
  },
  {
    "title": "再见吧!少年",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情/青春",
    "category": "高清电影",
    "url": "./movie-0644.html",
    "cover": "./44.jpg"
  },
  {
    "title": "巴黎梦想家",
    "region": "法国",
    "year": "2019",
    "genre": "剧情,爱情",
    "category": "高清电影",
    "url": "./movie-0645.html",
    "cover": "./45.jpg"
  },
  {
    "title": "关于塔利",
    "region": "美国",
    "year": "2026",
    "genre": "剧情/悬疑/同性",
    "category": "国产精选",
    "url": "./movie-0646.html",
    "cover": "./46.jpg"
  },
  {
    "title": "天国之钥",
    "region": "美国",
    "year": "2026",
    "genre": "科幻",
    "category": "高清电影",
    "url": "./movie-0647.html",
    "cover": "./47.jpg"
  },
  {
    "title": "陌生男子",
    "region": "韩国",
    "year": "2022",
    "genre": "惊悚,悬疑,心理",
    "category": "海外热播",
    "url": "./movie-0648.html",
    "cover": "./48.jpg"
  },
  {
    "title": "虽然没有承诺",
    "region": "中国大陆",
    "year": "2006",
    "genre": "剧情/家庭",
    "category": "综艺动漫",
    "url": "./movie-0649.html",
    "cover": "./49.jpg"
  },
  {
    "title": "等爱我的人",
    "region": "中国大陆",
    "year": "2025",
    "genre": "都市/悬疑",
    "category": "高清电影",
    "url": "./movie-0650.html",
    "cover": "./50.jpg"
  },
  {
    "title": "恶搞之家第十一季",
    "region": "美国",
    "year": "2025",
    "genre": "动画,喜剧,成人幽默",
    "category": "国产精选",
    "url": "./movie-0651.html",
    "cover": "./51.jpg"
  },
  {
    "title": "紧急盯梢令",
    "region": "美国",
    "year": "1995",
    "genre": "喜剧/犯罪/动作",
    "category": "海外热播",
    "url": "./movie-0652.html",
    "cover": "./52.jpg"
  },
  {
    "title": "真爱不忘国语",
    "region": "泰国",
    "year": "2019",
    "genre": "爱情/家庭/年代",
    "category": "综艺动漫",
    "url": "./movie-0653.html",
    "cover": "./53.jpg"
  },
  {
    "title": "恐惧症",
    "region": "美国",
    "year": "2025",
    "genre": "恐怖,惊悚,心理",
    "category": "国产精选",
    "url": "./movie-0654.html",
    "cover": "./54.jpg"
  },
  {
    "title": "饶恕我们的罪",
    "region": "加拿大",
    "year": "2022",
    "genre": "恐怖,惊悚,宗教",
    "category": "爱情家庭",
    "url": "./movie-0655.html",
    "cover": "./55.jpg"
  },
  {
    "title": "雨天的水彩画",
    "region": "日本",
    "year": "2023",
    "genre": "动画,剧情",
    "category": "悬疑犯罪",
    "url": "./movie-0656.html",
    "cover": "./56.jpg"
  },
  {
    "title": "裸命公寓",
    "region": "中国香港",
    "year": "2024",
    "genre": "悬疑,惊悚,都市",
    "category": "海外热播",
    "url": "./movie-0657.html",
    "cover": "./57.jpg"
  },
  {
    "title": "魔鬼交锋",
    "region": "西班牙",
    "year": "2024",
    "genre": "悬疑/犯罪/剧情",
    "category": "经典剧集",
    "url": "./movie-0658.html",
    "cover": "./58.jpg"
  },
  {
    "title": "多瑙河之波",
    "region": "罗马尼亚",
    "year": "1960",
    "genre": "剧情",
    "category": "动作冒险",
    "url": "./movie-0659.html",
    "cover": "./59.jpg"
  },
  {
    "title": "那一年,我17",
    "region": "中国大陆",
    "year": "2023",
    "genre": "剧情,青春",
    "category": "海外热播",
    "url": "./movie-0660.html",
    "cover": "./60.jpg"
  },
  {
    "title": "紧急出口",
    "region": "韩国",
    "year": "2025",
    "genre": "灾难,惊悚",
    "category": "国产精选",
    "url": "./movie-0661.html",
    "cover": "./61.jpg"
  },
  {
    "title": "当废青遇上女杀神",
    "region": "中国香港",
    "year": "2024",
    "genre": "动作/喜剧",
    "category": "海外热播",
    "url": "./movie-0662.html",
    "cover": "./62.jpg"
  },
  {
    "title": "哭泣杀神",
    "region": "日本",
    "year": "1994",
    "genre": "动作,犯罪,惊悚",
    "category": "动作冒险",
    "url": "./movie-0663.html",
    "cover": "./63.jpg"
  },
  {
    "title": "一个人的生命",
    "region": "意大利,法国",
    "year": "2021",
    "genre": "剧情,传记",
    "category": "高清电影",
    "url": "./movie-0664.html",
    "cover": "./64.jpg"
  },
  {
    "title": "火烧圆明园(1983)",
    "region": "中国香港/中国大陆",
    "year": "1983",
    "genre": "历史/战争",
    "category": "综艺动漫",
    "url": "./movie-0665.html",
    "cover": "./65.jpg"
  },
  {
    "title": "不败战神",
    "region": "中国大陆",
    "year": "2023",
    "genre": "玄幻/热血/战斗",
    "category": "国产精选",
    "url": "./movie-0666.html",
    "cover": "./66.jpg"
  },
  {
    "title": "美好星期天",
    "region": "日本",
    "year": "2023",
    "genre": "剧情/治愈",
    "category": "悬疑犯罪",
    "url": "./movie-0667.html",
    "cover": "./67.jpg"
  },
  {
    "title": "中国之役",
    "region": "法国,中国",
    "year": "2025",
    "genre": "战争,历史,剧情",
    "category": "综艺动漫",
    "url": "./movie-0668.html",
    "cover": "./68.jpg"
  },
  {
    "title": "诈欺担保人第三季",
    "region": "美国",
    "year": "2024",
    "genre": "剧情,犯罪",
    "category": "海外热播",
    "url": "./movie-0669.html",
    "cover": "./69.jpg"
  },
  {
    "title": "桃李满园",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情/教育",
    "category": "高清电影",
    "url": "./movie-0670.html",
    "cover": "./70.jpg"
  },
  {
    "title": "废宅人生",
    "region": "日本",
    "year": "2025",
    "genre": "喜剧,日常,治愈",
    "category": "爱情家庭",
    "url": "./movie-0671.html",
    "cover": "./71.jpg"
  },
  {
    "title": "人生剧场",
    "region": "法国",
    "year": "2025",
    "genre": "剧情/黑色幽默",
    "category": "综艺动漫",
    "url": "./movie-0672.html",
    "cover": "./72.jpg"
  },
  {
    "title": "王者之舞",
    "region": "英国",
    "year": "2023",
    "genre": "歌舞/传记/历史",
    "category": "海外热播",
    "url": "./movie-0673.html",
    "cover": "./73.jpg"
  },
  {
    "title": "银魂国语",
    "region": "日本",
    "year": "2027",
    "genre": "喜剧/动作/奇幻",
    "category": "综艺动漫",
    "url": "./movie-0674.html",
    "cover": "./74.jpg"
  },
  {
    "title": "起立,老师好!",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情/喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-0675.html",
    "cover": "./75.jpg"
  },
  {
    "title": "再见,地球",
    "region": "美国/英国",
    "year": "2026",
    "genre": "科幻/剧情",
    "category": "综艺动漫",
    "url": "./movie-0676.html",
    "cover": "./76.jpg"
  },
  {
    "title": "小黄历险记",
    "region": "美国",
    "year": "1996",
    "genre": "家庭,冒险",
    "category": "经典剧集",
    "url": "./movie-0677.html",
    "cover": "./77.jpg"
  },
  {
    "title": "亿人局之迪拜贱客",
    "region": "中国大陆",
    "year": "2025",
    "genre": "喜剧/犯罪/动作",
    "category": "经典剧集",
    "url": "./movie-0678.html",
    "cover": "./78.jpg"
  },
  {
    "title": "神勇武工队传奇",
    "region": "中国内地",
    "year": "2024",
    "genre": "战争/动作",
    "category": "海外热播",
    "url": "./movie-0679.html",
    "cover": "./79.jpg"
  },
  {
    "title": "异常生物见闻录 特别篇",
    "region": "中国大陆",
    "year": "2026",
    "genre": "科幻,搞笑",
    "category": "高清电影",
    "url": "./movie-0680.html",
    "cover": "./80.jpg"
  },
  {
    "title": "香港风云",
    "region": "中国香港",
    "year": "1995",
    "genre": "剧情,犯罪,商战",
    "category": "综艺动漫",
    "url": "./movie-0681.html",
    "cover": "./81.jpg"
  },
  {
    "title": "天空之城",
    "region": "日本",
    "year": "1986",
    "genre": "动画,冒险,奇幻",
    "category": "爱情家庭",
    "url": "./movie-0682.html",
    "cover": "./82.jpg"
  },
  {
    "title": "近蛛者杀",
    "region": "澳大利亚",
    "year": "2025",
    "genre": "恐怖/动物灾难",
    "category": "国产精选",
    "url": "./movie-0683.html",
    "cover": "./83.jpg"
  },
  {
    "title": "红翼",
    "region": "中国大陆",
    "year": "2025",
    "genre": "动作,战争",
    "category": "悬疑犯罪",
    "url": "./movie-0684.html",
    "cover": "./84.jpg"
  },
  {
    "title": "都是兄弟",
    "region": "中国大陆",
    "year": "2025",
    "genre": "剧情/家庭/犯罪",
    "category": "国产精选",
    "url": "./movie-0685.html",
    "cover": "./85.jpg"
  },
  {
    "title": "把关者们粤语",
    "region": "中国香港",
    "year": "2023",
    "genre": "职场/剧情",
    "category": "综艺动漫",
    "url": "./movie-0686.html",
    "cover": "./86.jpg"
  },
  {
    "title": "淑女宠爱",
    "region": "韩国",
    "year": "2025",
    "genre": "爱情、喜剧、奇幻",
    "category": "综艺动漫",
    "url": "./movie-0687.html",
    "cover": "./87.jpg"
  },
  {
    "title": "油泵危机",
    "region": "美国",
    "year": "2025",
    "genre": "动作,惊悚,灾难",
    "category": "爱情家庭",
    "url": "./movie-0688.html",
    "cover": "./88.jpg"
  },
  {
    "title": "屠龙少年历险记",
    "region": "英国",
    "year": "1987",
    "genre": "奇幻,冒险,家庭",
    "category": "综艺动漫",
    "url": "./movie-0689.html",
    "cover": "./89.jpg"
  },
  {
    "title": "美丽的凯特",
    "region": "澳大利亚",
    "year": "2024",
    "genre": "剧情,西部,犯罪",
    "category": "综艺动漫",
    "url": "./movie-0690.html",
    "cover": "./90.jpg"
  },
  {
    "title": "爱在青春收成时",
    "region": "中国台湾",
    "year": "2024",
    "genre": "剧情/爱情/乡村",
    "category": "爱情家庭",
    "url": "./movie-0691.html",
    "cover": "./91.jpg"
  },
  {
    "title": "燕子号:荒岛大冒险",
    "region": "英国",
    "year": "2026",
    "genre": "冒险/动画",
    "category": "悬疑犯罪",
    "url": "./movie-0692.html",
    "cover": "./92.jpg"
  },
  {
    "title": "第四公民",
    "region": "美国",
    "year": "2024",
    "genre": "惊悚、政治",
    "category": "高清电影",
    "url": "./movie-0693.html",
    "cover": "./93.jpg"
  },
  {
    "title": "我的傻瓜老婆",
    "region": "中国内地",
    "year": "2024",
    "genre": "爱情,喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-0694.html",
    "cover": "./94.jpg"
  },
  {
    "title": "怒火",
    "region": "中国大陆",
    "year": "2025",
    "genre": "动作/警匪/犯罪",
    "category": "高清电影",
    "url": "./movie-0695.html",
    "cover": "./95.jpg"
  },
  {
    "title": "精灵高中:食尸鬼之魂",
    "region": "美国",
    "year": "2024",
    "genre": "动画/喜剧/奇幻/校园",
    "category": "经典剧集",
    "url": "./movie-0696.html",
    "cover": "./96.jpg"
  },
  {
    "title": "心有灵犀",
    "region": "中国香港",
    "year": "2026",
    "genre": "爱情/奇幻/喜剧",
    "category": "海外热播",
    "url": "./movie-0697.html",
    "cover": "./97.jpg"
  },
  {
    "title": "艺术是...",
    "region": "法国",
    "year": "2023",
    "genre": "纪录片/剧情",
    "category": "爱情家庭",
    "url": "./movie-0698.html",
    "cover": "./98.jpg"
  },
  {
    "title": "夺樽",
    "region": "中国内地",
    "year": "2014",
    "genre": "动作/悬疑/盗墓",
    "category": "爱情家庭",
    "url": "./movie-0699.html",
    "cover": "./99.jpg"
  },
  {
    "title": "幽灵公馆",
    "region": "美国",
    "year": "2024",
    "genre": "悬疑/惊悚/喜剧",
    "category": "经典剧集",
    "url": "./movie-0700.html",
    "cover": "./100.jpg"
  },
  {
    "title": "罪恶救赎",
    "region": "美国",
    "year": "2018",
    "genre": "剧情/犯罪",
    "category": "海外热播",
    "url": "./movie-0701.html",
    "cover": "./101.jpg"
  },
  {
    "title": "小小犯罪刺激",
    "region": "法国",
    "year": "2023",
    "genre": "喜剧,犯罪",
    "category": "高清电影",
    "url": "./movie-0702.html",
    "cover": "./102.jpg"
  },
  {
    "title": "7天之前",
    "region": "美国",
    "year": "2026",
    "genre": "科幻,悬疑,惊悚",
    "category": "海外热播",
    "url": "./movie-0703.html",
    "cover": "./103.jpg"
  },
  {
    "title": "欧洲夜生活",
    "region": "法国,德国",
    "year": "2023",
    "genre": "剧情,悬疑,都市",
    "category": "经典剧集",
    "url": "./movie-0704.html",
    "cover": "./104.jpg"
  },
  {
    "title": "聊斋粤语",
    "region": "中国香港",
    "year": "2025",
    "genre": "奇幻/惊悚",
    "category": "经典剧集",
    "url": "./movie-0705.html",
    "cover": "./105.jpg"
  },
  {
    "title": "大象菩提",
    "region": "泰国/中国大陆",
    "year": "2025",
    "genre": "剧情/奇幻",
    "category": "爱情家庭",
    "url": "./movie-0706.html",
    "cover": "./106.jpg"
  },
  {
    "title": "扑克王者",
    "region": "美国",
    "year": "2025",
    "genre": "惊悚,动作",
    "category": "悬疑犯罪",
    "url": "./movie-0707.html",
    "cover": "./107.jpg"
  },
  {
    "title": "小花",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情,家庭,儿童",
    "category": "综艺动漫",
    "url": "./movie-0708.html",
    "cover": "./108.jpg"
  },
  {
    "title": "杀出魔鬼镇",
    "region": "美国",
    "year": "2026",
    "genre": "恐怖,惊悚,犯罪",
    "category": "高清电影",
    "url": "./movie-0709.html",
    "cover": "./109.jpg"
  },
  {
    "title": "终末的女武神",
    "region": "日本",
    "year": "2025",
    "genre": "动作/奇幻/热血",
    "category": "综艺动漫",
    "url": "./movie-0710.html",
    "cover": "./110.jpg"
  },
  {
    "title": "罪恶的编年史",
    "region": "韩国",
    "year": "2023",
    "genre": "犯罪、惊悚",
    "category": "爱情家庭",
    "url": "./movie-0711.html",
    "cover": "./111.jpg"
  },
  {
    "title": "哈基",
    "region": "中国大陆",
    "year": "2026",
    "genre": "剧情、音乐",
    "category": "海外热播",
    "url": "./movie-0712.html",
    "cover": "./112.jpg"
  },
  {
    "title": "狗日子",
    "region": "中国",
    "year": "2018",
    "genre": "剧情,家庭",
    "category": "综艺动漫",
    "url": "./movie-0713.html",
    "cover": "./113.jpg"
  },
  {
    "title": "大老鼠和小老鼠",
    "region": "中国大陆",
    "year": "2023",
    "genre": "喜剧,冒险,家庭",
    "category": "爱情家庭",
    "url": "./movie-0714.html",
    "cover": "./114.jpg"
  },
  {
    "title": "皇帝也风流",
    "region": "中国香港",
    "year": "1993",
    "genre": "剧情,情色,历史",
    "category": "经典剧集",
    "url": "./movie-0715.html",
    "cover": "./115.jpg"
  },
  {
    "title": "炼爱北京",
    "region": "中国大陆",
    "year": "2023",
    "genre": "爱情",
    "category": "悬疑犯罪",
    "url": "./movie-0716.html",
    "cover": "./116.jpg"
  },
  {
    "title": "该隐之子",
    "region": "美国",
    "year": "2021",
    "genre": "悬疑,惊悚,剧情",
    "category": "海外热播",
    "url": "./movie-0717.html",
    "cover": "./117.jpg"
  },
  {
    "title": "血仓",
    "region": "中国香港",
    "year": "2027",
    "genre": "恐怖/犯罪",
    "category": "动作冒险",
    "url": "./movie-0718.html",
    "cover": "./118.jpg"
  },
  {
    "title": "巨人捕手杰克",
    "region": "美国",
    "year": "2026",
    "genre": "奇幻,冒险,动作",
    "category": "高清电影",
    "url": "./movie-0719.html",
    "cover": "./119.jpg"
  },
  {
    "title": "鬼友",
    "region": "中国台湾",
    "year": "2024",
    "genre": "灵异/喜剧/友情",
    "category": "海外热播",
    "url": "./movie-0720.html",
    "cover": "./120.jpg"
  },
  {
    "title": "精灵宝可梦:皮卡丘的暑假",
    "region": "日本",
    "year": "2026",
    "genre": "奇幻/冒险/儿童",
    "category": "动作冒险",
    "url": "./movie-0721.html",
    "cover": "./121.jpg"
  },
  {
    "title": "洪福齐天",
    "region": "中国大陆",
    "year": "2025",
    "genre": "喜剧,奇幻,家庭",
    "category": "爱情家庭",
    "url": "./movie-0722.html",
    "cover": "./122.jpg"
  },
  {
    "title": "鱿鱼仔的乡土生活第十二季",
    "region": "美国",
    "year": "2027",
    "genre": "动画/喜剧",
    "category": "经典剧集",
    "url": "./movie-0723.html",
    "cover": "./123.jpg"
  },
  {
    "title": "永远的831",
    "region": "日本",
    "year": "2023",
    "genre": "剧情",
    "category": "经典剧集",
    "url": "./movie-0724.html",
    "cover": "./124.jpg"
  },
  {
    "title": "奇奇与蒂蒂",
    "region": "美国",
    "year": "2024",
    "genre": "喜剧,动画,冒险,真人+CG",
    "category": "爱情家庭",
    "url": "./movie-0725.html",
    "cover": "./125.jpg"
  },
  {
    "title": "雪山人生",
    "region": "美国,英国",
    "year": "2018",
    "genre": "纪录片,冒险",
    "category": "爱情家庭",
    "url": "./movie-0726.html",
    "cover": "./126.jpg"
  },
  {
    "title": "大助跑",
    "region": "中国大陆",
    "year": "2025",
    "genre": "剧情,运动",
    "category": "综艺动漫",
    "url": "./movie-0727.html",
    "cover": "./127.jpg"
  },
  {
    "title": "入侵",
    "region": "加拿大/美国",
    "year": "2024",
    "genre": "科幻/悬疑/惊悚",
    "category": "动作冒险",
    "url": "./movie-0728.html",
    "cover": "./128.jpg"
  },
  {
    "title": "花瓶",
    "region": "法国",
    "year": "2010",
    "genre": "喜剧/家庭",
    "category": "经典剧集",
    "url": "./movie-0729.html",
    "cover": "./129.jpg"
  },
  {
    "title": "风暴狂潮",
    "region": "美国",
    "year": "2025",
    "genre": "灾难/惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-0730.html",
    "cover": "./130.jpg"
  },
  {
    "title": "海军悍妇",
    "region": "美国",
    "year": "2026",
    "genre": "动作,战争,女性",
    "category": "海外热播",
    "url": "./movie-0731.html",
    "cover": "./131.jpg"
  },
  {
    "title": "屌飞船奇遇记",
    "region": "中国大陆",
    "year": "2025",
    "genre": "科幻/喜剧",
    "category": "动作冒险",
    "url": "./movie-0732.html",
    "cover": "./132.jpg"
  },
  {
    "title": "不可遗忘第四季",
    "region": "英国",
    "year": "2021",
    "genre": "悬疑/犯罪/剧情",
    "category": "爱情家庭",
    "url": "./movie-0733.html",
    "cover": "./133.jpg"
  },
  {
    "title": "牧羊人们",
    "region": "法国,意大利",
    "year": "2025",
    "genre": "剧情,历史",
    "category": "高清电影",
    "url": "./movie-0734.html",
    "cover": "./134.jpg"
  },
  {
    "title": "向往的生活第二季",
    "region": "中国大陆",
    "year": "2025",
    "genre": "剧情,家庭,乡村",
    "category": "国产精选",
    "url": "./movie-0735.html",
    "cover": "./135.jpg"
  },
  {
    "title": "大捕快粤语",
    "region": "中国香港",
    "year": "1994",
    "genre": "古装,动作",
    "category": "经典剧集",
    "url": "./movie-0736.html",
    "cover": "./136.jpg"
  },
  {
    "title": "前任同盟",
    "region": "中国",
    "year": "2024",
    "genre": "爱情喜剧",
    "category": "海外热播",
    "url": "./movie-0737.html",
    "cover": "./137.jpg"
  },
  {
    "title": "喜马拉亚星",
    "region": "印度",
    "year": "2026",
    "genre": "奇幻/歌舞",
    "category": "经典剧集",
    "url": "./movie-0738.html",
    "cover": "./138.jpg"
  },
  {
    "title": "安娜·巴甫洛娃",
    "region": "俄罗斯",
    "year": "2024",
    "genre": "传记,剧情,舞蹈",
    "category": "海外热播",
    "url": "./movie-0739.html",
    "cover": "./139.jpg"
  },
  {
    "title": "希特勒的孩子",
    "region": "德国",
    "year": "2024",
    "genre": "剧情/战争/悬疑",
    "category": "悬疑犯罪",
    "url": "./movie-0740.html",
    "cover": "./140.jpg"
  },
  {
    "title": "41处男",
    "region": "中国香港",
    "year": "2025",
    "genre": "喜剧,爱情",
    "category": "动作冒险",
    "url": "./movie-0741.html",
    "cover": "./141.jpg"
  },
  {
    "title": "新娘百分百",
    "region": "泰国",
    "year": "2023",
    "genre": "爱情、喜剧",
    "category": "国产精选",
    "url": "./movie-0742.html",
    "cover": "./142.jpg"
  },
  {
    "title": "衰仔斗邪神",
    "region": "中国香港",
    "year": "2024",
    "genre": "喜剧奇幻",
    "category": "悬疑犯罪",
    "url": "./movie-0743.html",
    "cover": "./143.jpg"
  },
  {
    "title": "数位束缚",
    "region": "日本",
    "year": "2025",
    "genre": "科幻,悬疑",
    "category": "悬疑犯罪",
    "url": "./movie-0744.html",
    "cover": "./144.jpg"
  },
  {
    "title": "弗罗茨瓦夫和绿山城之间",
    "region": "波兰",
    "year": "2024",
    "genre": "剧情、公路、文艺",
    "category": "综艺动漫",
    "url": "./movie-0745.html",
    "cover": "./145.jpg"
  },
  {
    "title": "山村会计",
    "region": "中国大陆",
    "year": "2025",
    "genre": "农村悬疑喜剧",
    "category": "国产精选",
    "url": "./movie-0746.html",
    "cover": "./146.jpg"
  },
  {
    "title": "树篱女巫",
    "region": "英国",
    "year": "2024",
    "genre": "恐怖,民俗",
    "category": "国产精选",
    "url": "./movie-0747.html",
    "cover": "./147.jpg"
  },
  {
    "title": "疯狂英语",
    "region": "中国大陆",
    "year": "2025",
    "genre": "黑色喜剧",
    "category": "经典剧集",
    "url": "./movie-0748.html",
    "cover": "./148.jpg"
  },
  {
    "title": "怒海群雄",
    "region": "美国",
    "year": "2011",
    "genre": "动作、冒险、历史",
    "category": "经典剧集",
    "url": "./movie-0749.html",
    "cover": "./149.jpg"
  },
  {
    "title": "耀眼的日子",
    "region": "韩国",
    "year": "2024",
    "genre": "剧情/家庭",
    "category": "海外热播",
    "url": "./movie-0750.html",
    "cover": "./150.jpg"
  },
  {
    "title": "爱,来的刚好",
    "region": "中国",
    "year": "2023",
    "genre": "爱情、都市、职场",
    "category": "动作冒险",
    "url": "./movie-0751.html",
    "cover": "./1.jpg"
  },
  {
    "title": "赌豪",
    "region": "香港",
    "year": "1991",
    "genre": "动作/犯罪/赌术",
    "category": "动作冒险",
    "url": "./movie-0752.html",
    "cover": "./2.jpg"
  },
  {
    "title": "新尸骨无存",
    "region": "美国",
    "year": "2026",
    "genre": "恐怖/惊悚",
    "category": "爱情家庭",
    "url": "./movie-0753.html",
    "cover": "./3.jpg"
  },
  {
    "title": "死亡写真国语",
    "region": "中国香港",
    "year": "2024",
    "genre": "惊悚,悬疑,犯罪",
    "category": "经典剧集",
    "url": "./movie-0754.html",
    "cover": "./4.jpg"
  },
  {
    "title": "球衣2019",
    "region": "阿根廷",
    "year": "2022",
    "genre": "剧情/运动/同性",
    "category": "国产精选",
    "url": "./movie-0755.html",
    "cover": "./5.jpg"
  },
  {
    "title": "江南丧尸",
    "region": "韩国",
    "year": "2023",
    "genre": "动作,恐怖,惊悚",
    "category": "动作冒险",
    "url": "./movie-0756.html",
    "cover": "./6.jpg"
  },
  {
    "title": "北风和太阳的法庭",
    "region": "日本",
    "year": "2024",
    "genre": "悬疑/法庭",
    "category": "综艺动漫",
    "url": "./movie-0757.html",
    "cover": "./7.jpg"
  },
  {
    "title": "暗河传",
    "region": "中国",
    "year": "2024",
    "genre": "古装,武侠,悬疑",
    "category": "海外热播",
    "url": "./movie-0758.html",
    "cover": "./8.jpg"
  },
  {
    "title": "星空",
    "region": "中国台湾",
    "year": "2011",
    "genre": "剧情、奇幻",
    "category": "国产精选",
    "url": "./movie-0759.html",
    "cover": "./9.jpg"
  },
  {
    "title": "纳粹的攻击",
    "region": "美国",
    "year": "2025",
    "genre": "动作,科幻",
    "category": "高清电影",
    "url": "./movie-0760.html",
    "cover": "./10.jpg"
  },
  {
    "title": "银都百美",
    "region": "中国香港",
    "year": "2027",
    "genre": "剧情,女性,商战",
    "category": "经典剧集",
    "url": "./movie-0761.html",
    "cover": "./11.jpg"
  },
  {
    "title": "绿茵春色",
    "region": "中国大陆",
    "year": "2024",
    "genre": "运动,青春,爱情",
    "category": "综艺动漫",
    "url": "./movie-0762.html",
    "cover": "./12.jpg"
  },
  {
    "title": "侠盗偷画大作战",
    "region": "中国香港",
    "year": "2025",
    "genre": "动作,犯罪,喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-0763.html",
    "cover": "./13.jpg"
  },
  {
    "title": "高尔夫球也疯狂",
    "region": "美国",
    "year": "2024",
    "genre": "喜剧,体育",
    "category": "经典剧集",
    "url": "./movie-0764.html",
    "cover": "./14.jpg"
  },
  {
    "title": "恶作剧之吻电影版:求婚篇",
    "region": "日本",
    "year": "2024",
    "genre": "爱情/喜剧",
    "category": "综艺动漫",
    "url": "./movie-0765.html",
    "cover": "./15.jpg"
  },
  {
    "title": "冠军2023",
    "region": "印度",
    "year": "2023",
    "genre": "运动/剧情/传记",
    "category": "动作冒险",
    "url": "./movie-0766.html",
    "cover": "./16.jpg"
  },
  {
    "title": "醉后记忆",
    "region": "中国台湾",
    "year": "2024",
    "genre": "剧情/悬疑",
    "category": "高清电影",
    "url": "./movie-0767.html",
    "cover": "./17.jpg"
  },
  {
    "title": "动物学",
    "region": "法国/比利时",
    "year": "2023",
    "genre": "剧情/奇幻",
    "category": "国产精选",
    "url": "./movie-0768.html",
    "cover": "./18.jpg"
  },
  {
    "title": "三打陶三春",
    "region": "中国大陆",
    "year": "2025",
    "genre": "古装,动作,喜剧",
    "category": "动作冒险",
    "url": "./movie-0769.html",
    "cover": "./19.jpg"
  },
  {
    "title": "俘虏",
    "region": "波兰",
    "year": "2024",
    "genre": "战争剧情",
    "category": "爱情家庭",
    "url": "./movie-0770.html",
    "cover": "./20.jpg"
  },
  {
    "title": "30岁的保健体育",
    "region": "日本",
    "year": "2011",
    "genre": "喜剧,爱情,性教育",
    "category": "动作冒险",
    "url": "./movie-0771.html",
    "cover": "./21.jpg"
  },
  {
    "title": "小森林 冬春篇",
    "region": "日本",
    "year": "2015",
    "genre": "剧情/美食/治愈",
    "category": "经典剧集",
    "url": "./movie-0772.html",
    "cover": "./22.jpg"
  },
  {
    "title": "裸拳斗",
    "region": "东南亚",
    "year": "2027",
    "genre": "动作,运动,剧情",
    "category": "悬疑犯罪",
    "url": "./movie-0773.html",
    "cover": "./23.jpg"
  },
  {
    "title": "下流人生",
    "region": "韩国",
    "year": "2004",
    "genre": "剧情/黑色/犯罪",
    "category": "爱情家庭",
    "url": "./movie-0774.html",
    "cover": "./24.jpg"
  },
  {
    "title": "圣斗士星矢 极乐净土篇",
    "region": "日本",
    "year": "2024",
    "genre": "动作/奇幻/热血",
    "category": "海外热播",
    "url": "./movie-0775.html",
    "cover": "./25.jpg"
  },
  {
    "title": "拧紧",
    "region": "美国",
    "year": "2024",
    "genre": "恐怖、悬疑、剧情",
    "category": "经典剧集",
    "url": "./movie-0776.html",
    "cover": "./26.jpg"
  },
  {
    "title": "原告的证人",
    "region": "英国/美国",
    "year": "2025",
    "genre": "犯罪/悬疑/法庭",
    "category": "悬疑犯罪",
    "url": "./movie-0777.html",
    "cover": "./27.jpg"
  },
  {
    "title": "老将新生",
    "region": "美国",
    "year": "2021",
    "genre": "运动,剧情",
    "category": "动作冒险",
    "url": "./movie-0778.html",
    "cover": "./28.jpg"
  },
  {
    "title": "环太平洋:黑色禁区第二季",
    "region": "美国/澳大利亚",
    "year": "2024",
    "genre": "科幻/动作/机甲/动画",
    "category": "国产精选",
    "url": "./movie-0779.html",
    "cover": "./29.jpg"
  },
  {
    "title": "我的美丽人生",
    "region": "中国",
    "year": "2025",
    "genre": "家庭,剧情,都市",
    "category": "海外热播",
    "url": "./movie-0780.html",
    "cover": "./30.jpg"
  },
  {
    "title": "美容针",
    "region": "中国大陆",
    "year": "2017",
    "genre": "剧情/家庭",
    "category": "动作冒险",
    "url": "./movie-0781.html",
    "cover": "./31.jpg"
  },
  {
    "title": "昨日良妻",
    "region": "中国香港",
    "year": "2024",
    "genre": "剧情/家庭",
    "category": "爱情家庭",
    "url": "./movie-0782.html",
    "cover": "./32.jpg"
  },
  {
    "title": "对立面",
    "region": "韩国",
    "year": "2015",
    "genre": "悬疑/惊悚",
    "category": "国产精选",
    "url": "./movie-0783.html",
    "cover": "./33.jpg"
  },
  {
    "title": "敦河别恋",
    "region": "中国大陆",
    "year": "2026",
    "genre": "爱情/历史",
    "category": "高清电影",
    "url": "./movie-0784.html",
    "cover": "./34.jpg"
  },
  {
    "title": "孤国春秋第二季",
    "region": "英国",
    "year": "2024",
    "genre": "历史,战争,剧情",
    "category": "综艺动漫",
    "url": "./movie-0785.html",
    "cover": "./35.jpg"
  },
  {
    "title": "中国造",
    "region": "中国大陆",
    "year": "2023",
    "genre": "剧情,商战",
    "category": "经典剧集",
    "url": "./movie-0786.html",
    "cover": "./36.jpg"
  },
  {
    "title": "八毫米",
    "region": "美国",
    "year": "2024",
    "genre": "悬疑,犯罪,惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-0787.html",
    "cover": "./37.jpg"
  },
  {
    "title": "妈妈不在的10天",
    "region": "日本",
    "year": "2006",
    "genre": "剧情/家庭",
    "category": "综艺动漫",
    "url": "./movie-0788.html",
    "cover": "./38.jpg"
  },
  {
    "title": "耀舞长安粤语",
    "region": "中国香港",
    "year": "2024",
    "genre": "古装、歌舞、剧情",
    "category": "爱情家庭",
    "url": "./movie-0789.html",
    "cover": "./39.jpg"
  },
  {
    "title": "杀母疑案",
    "region": "美国",
    "year": "2024",
    "genre": "犯罪/悬疑",
    "category": "悬疑犯罪",
    "url": "./movie-0790.html",
    "cover": "./40.jpg"
  },
  {
    "title": "重圆镜",
    "region": "中国台湾",
    "year": "2026",
    "genre": "剧情,悬疑,奇幻",
    "category": "动作冒险",
    "url": "./movie-0791.html",
    "cover": "./41.jpg"
  },
  {
    "title": "榴莲飘飘",
    "region": "香港",
    "year": "2000",
    "genre": "剧情/文艺",
    "category": "经典剧集",
    "url": "./movie-0792.html",
    "cover": "./42.jpg"
  },
  {
    "title": "不倒翁的奇幻旅程",
    "region": "中国台湾",
    "year": "2012",
    "genre": "奇幻,儿童,家庭",
    "category": "悬疑犯罪",
    "url": "./movie-0793.html",
    "cover": "./43.jpg"
  },
  {
    "title": "致命假期",
    "region": "英国",
    "year": "2026",
    "genre": "惊悚/悬疑",
    "category": "国产精选",
    "url": "./movie-0794.html",
    "cover": "./44.jpg"
  },
  {
    "title": "偷心上流",
    "region": "西班牙",
    "year": "2024",
    "genre": "惊悚/犯罪",
    "category": "高清电影",
    "url": "./movie-0795.html",
    "cover": "./45.jpg"
  },
  {
    "title": "爱情碰碰撞",
    "region": "中国大陆",
    "year": "2015",
    "genre": "爱情,喜剧",
    "category": "经典剧集",
    "url": "./movie-0796.html",
    "cover": "./46.jpg"
  },
  {
    "title": "二逼",
    "region": "中国大陆",
    "year": "2015",
    "genre": "喜剧,黑色幽默,荒诞",
    "category": "爱情家庭",
    "url": "./movie-0797.html",
    "cover": "./47.jpg"
  },
  {
    "title": "左撇子布朗之歌",
    "region": "美国",
    "year": "2014",
    "genre": "西部/音乐",
    "category": "海外热播",
    "url": "./movie-0798.html",
    "cover": "./48.jpg"
  },
  {
    "title": "老师的恩惠",
    "region": "韩国",
    "year": "2006",
    "genre": "恐怖惊悚",
    "category": "爱情家庭",
    "url": "./movie-0799.html",
    "cover": "./49.jpg"
  },
  {
    "title": "撒玛利亚人",
    "region": "美国",
    "year": "2026",
    "genre": "动作、犯罪、剧情",
    "category": "经典剧集",
    "url": "./movie-0800.html",
    "cover": "./50.jpg"
  },
  {
    "title": "魔鬼大帝:真实谎言",
    "region": "美国",
    "year": "1994",
    "genre": "动作惊悚",
    "category": "高清电影",
    "url": "./movie-0801.html",
    "cover": "./51.jpg"
  },
  {
    "title": "电子世界争霸战",
    "region": "美国",
    "year": "2027",
    "genre": "科幻,冒险",
    "category": "高清电影",
    "url": "./movie-0802.html",
    "cover": "./52.jpg"
  },
  {
    "title": "咖非正义",
    "region": "中国台湾",
    "year": "2024",
    "genre": "悬疑/犯罪/剧情",
    "category": "综艺动漫",
    "url": "./movie-0803.html",
    "cover": "./53.jpg"
  },
  {
    "title": "鬣狗之城",
    "region": "韩国",
    "year": "2025",
    "genre": "剧情/悬疑/惊悚",
    "category": "综艺动漫",
    "url": "./movie-0804.html",
    "cover": "./54.jpg"
  },
  {
    "title": "阿拉斯加大淘金第六季",
    "region": "美国",
    "year": "2026",
    "genre": "纪录片/真人秀/冒险",
    "category": "爱情家庭",
    "url": "./movie-0805.html",
    "cover": "./55.jpg"
  },
  {
    "title": "谍海龙虎会",
    "region": "香港/中国大陆",
    "year": "2025",
    "genre": "动作/犯罪/谍战",
    "category": "综艺动漫",
    "url": "./movie-0806.html",
    "cover": "./56.jpg"
  },
  {
    "title": "乡村爱情18",
    "region": "中国大陆",
    "year": "2026",
    "genre": "喜剧,家庭,乡村",
    "category": "悬疑犯罪",
    "url": "./movie-0807.html",
    "cover": "./57.jpg"
  },
  {
    "title": "我们差点丧命",
    "region": "美国",
    "year": "2023",
    "genre": "惊悚,悬疑",
    "category": "爱情家庭",
    "url": "./movie-0808.html",
    "cover": "./58.jpg"
  },
  {
    "title": "初入职场·中医季",
    "region": "中国大陆",
    "year": "2024",
    "genre": "真人秀/职场",
    "category": "悬疑犯罪",
    "url": "./movie-0809.html",
    "cover": "./59.jpg"
  },
  {
    "title": "新选组始末录",
    "region": "日本",
    "year": "2026",
    "genre": "历史/动作/传记",
    "category": "爱情家庭",
    "url": "./movie-0810.html",
    "cover": "./60.jpg"
  },
  {
    "title": "夺宝幸运星3",
    "region": "中国大陆",
    "year": "2025",
    "genre": "悬疑、冒险、喜剧",
    "category": "爱情家庭",
    "url": "./movie-0811.html",
    "cover": "./61.jpg"
  },
  {
    "title": "完美第三者",
    "region": "美国",
    "year": "2024",
    "genre": "惊悚剧情",
    "category": "经典剧集",
    "url": "./movie-0812.html",
    "cover": "./62.jpg"
  },
  {
    "title": "充气娃娃之恋",
    "region": "美国",
    "year": "2007",
    "genre": "剧情/爱情/心理",
    "category": "爱情家庭",
    "url": "./movie-0813.html",
    "cover": "./63.jpg"
  },
  {
    "title": "神赋予的任务",
    "region": "韩国",
    "year": "2025",
    "genre": "动作,奇幻",
    "category": "爱情家庭",
    "url": "./movie-0814.html",
    "cover": "./64.jpg"
  },
  {
    "title": "邪恶第二季",
    "region": "美国",
    "year": "2024",
    "genre": "悬疑/恐怖",
    "category": "经典剧集",
    "url": "./movie-0815.html",
    "cover": "./65.jpg"
  },
  {
    "title": "在波威",
    "region": "美国",
    "year": "2023",
    "genre": "剧情/西部",
    "category": "高清电影",
    "url": "./movie-0816.html",
    "cover": "./66.jpg"
  },
  {
    "title": "奇幻人间世粤语",
    "region": "中国香港",
    "year": "2024",
    "genre": "奇幻/古装",
    "category": "海外热播",
    "url": "./movie-0817.html",
    "cover": "./67.jpg"
  },
  {
    "title": "我是瓦金",
    "region": "西班牙",
    "year": "2023",
    "genre": "传记/音乐",
    "category": "爱情家庭",
    "url": "./movie-0818.html",
    "cover": "./68.jpg"
  },
  {
    "title": "圣诞男孩",
    "region": "芬兰/英国",
    "year": "2025",
    "genre": "奇幻、家庭、冒险",
    "category": "海外热播",
    "url": "./movie-0819.html",
    "cover": "./69.jpg"
  },
  {
    "title": "寻找成龙",
    "region": "中国大陆",
    "year": "2027",
    "genre": "动作,喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-0820.html",
    "cover": "./70.jpg"
  },
  {
    "title": "猎象通辑令",
    "region": "中国大陆",
    "year": "2025",
    "genre": "动作,犯罪,悬疑",
    "category": "国产精选",
    "url": "./movie-0821.html",
    "cover": "./71.jpg"
  },
  {
    "title": "二号陪审员",
    "region": "美国",
    "year": "2024",
    "genre": "悬疑,犯罪",
    "category": "动作冒险",
    "url": "./movie-0822.html",
    "cover": "./72.jpg"
  },
  {
    "title": "超级王牌",
    "region": "美国",
    "year": "2023",
    "genre": "动作,运动",
    "category": "综艺动漫",
    "url": "./movie-0823.html",
    "cover": "./73.jpg"
  },
  {
    "title": "凯伦·皮里第二季",
    "region": "英国",
    "year": "2023",
    "genre": "犯罪/剧情/悬疑",
    "category": "综艺动漫",
    "url": "./movie-0824.html",
    "cover": "./74.jpg"
  },
  {
    "title": "全为了你国语",
    "region": "中国台湾",
    "year": "2024",
    "genre": "爱情,剧情",
    "category": "海外热播",
    "url": "./movie-0825.html",
    "cover": "./75.jpg"
  },
  {
    "title": "柯林·奎恩:红州蓝州",
    "region": "美国",
    "year": "2024",
    "genre": "喜剧/脱口秀",
    "category": "综艺动漫",
    "url": "./movie-0826.html",
    "cover": "./76.jpg"
  },
  {
    "title": "外星也难民第三季",
    "region": "美国",
    "year": "2026",
    "genre": "喜剧,科幻,动画",
    "category": "经典剧集",
    "url": "./movie-0827.html",
    "cover": "./77.jpg"
  },
  {
    "title": "唯一宝贝",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情家庭",
    "category": "综艺动漫",
    "url": "./movie-0828.html",
    "cover": "./78.jpg"
  },
  {
    "title": "伽马射线效应",
    "region": "英国",
    "year": "2025",
    "genre": "科幻,剧情",
    "category": "综艺动漫",
    "url": "./movie-0829.html",
    "cover": "./79.jpg"
  },
  {
    "title": "孩子们2022",
    "region": "韩国",
    "year": "2022",
    "genre": "悬疑/惊悚",
    "category": "高清电影",
    "url": "./movie-0830.html",
    "cover": "./80.jpg"
  },
  {
    "title": "四角社群",
    "region": "中国大陆",
    "year": "2025",
    "genre": "剧情/悬疑",
    "category": "爱情家庭",
    "url": "./movie-0831.html",
    "cover": "./81.jpg"
  },
  {
    "title": "岸边",
    "region": "法国,比利时",
    "year": "2020",
    "genre": "剧情,文艺",
    "category": "悬疑犯罪",
    "url": "./movie-0832.html",
    "cover": "./82.jpg"
  },
  {
    "title": "喋血钱塘江",
    "region": "中国大陆",
    "year": "2025",
    "genre": "动作/犯罪",
    "category": "悬疑犯罪",
    "url": "./movie-0833.html",
    "cover": "./83.jpg"
  },
  {
    "title": "雄兵连之雄芯篇",
    "region": "中国大陆",
    "year": "2017",
    "genre": "科幻、战争、热血",
    "category": "海外热播",
    "url": "./movie-0834.html",
    "cover": "./84.jpg"
  },
  {
    "title": "大象将军2",
    "region": "泰国",
    "year": "2026",
    "genre": "历史,战争",
    "category": "悬疑犯罪",
    "url": "./movie-0835.html",
    "cover": "./85.jpg"
  },
  {
    "title": "雨和闪电的气息",
    "region": "美国",
    "year": "2023",
    "genre": "爱情,奇幻,悬疑",
    "category": "动作冒险",
    "url": "./movie-0836.html",
    "cover": "./86.jpg"
  },
  {
    "title": "寻衅女孩",
    "region": "韩国",
    "year": "2025",
    "genre": "动作,犯罪,青春",
    "category": "海外热播",
    "url": "./movie-0837.html",
    "cover": "./87.jpg"
  },
  {
    "title": "衣橱国语",
    "region": "中国台湾",
    "year": "2024",
    "genre": "恐怖,家庭,心理",
    "category": "国产精选",
    "url": "./movie-0838.html",
    "cover": "./88.jpg"
  },
  {
    "title": "钢甲卡卡龙",
    "region": "中国大陆",
    "year": "2018",
    "genre": "科幻,冒险,儿童",
    "category": "动作冒险",
    "url": "./movie-0839.html",
    "cover": "./89.jpg"
  },
  {
    "title": "海绵宝宝:拯救比奇堡",
    "region": "美国",
    "year": "2025",
    "genre": "动画,喜剧,奇幻",
    "category": "海外热播",
    "url": "./movie-0840.html",
    "cover": "./90.jpg"
  },
  {
    "title": "兰若行者",
    "region": "中国香港",
    "year": "2027",
    "genre": "奇幻/恐怖",
    "category": "海外热播",
    "url": "./movie-0841.html",
    "cover": "./91.jpg"
  },
  {
    "title": "鼠来宝3粤语",
    "region": "美国/香港配音版",
    "year": "2011",
    "genre": "喜剧,动画,音乐,家庭",
    "category": "经典剧集",
    "url": "./movie-0842.html",
    "cover": "./92.jpg"
  },
  {
    "title": "明亮的星",
    "region": "香港",
    "year": "2021",
    "genre": "爱情/奇幻",
    "category": "经典剧集",
    "url": "./movie-0843.html",
    "cover": "./93.jpg"
  },
  {
    "title": "往事情缘",
    "region": "英国",
    "year": "2025",
    "genre": "剧情,爱情,年代",
    "category": "海外热播",
    "url": "./movie-0844.html",
    "cover": "./94.jpg"
  },
  {
    "title": "东京塔2024",
    "region": "日本",
    "year": "2024",
    "genre": "剧情,家庭,治愈",
    "category": "经典剧集",
    "url": "./movie-0845.html",
    "cover": "./95.jpg"
  },
  {
    "title": "卡策马赫尔",
    "region": "德国",
    "year": "1969",
    "genre": "剧情/喜剧",
    "category": "动作冒险",
    "url": "./movie-0846.html",
    "cover": "./96.jpg"
  },
  {
    "title": "圣灵",
    "region": "美国",
    "year": "2024",
    "genre": "恐怖,惊悚,宗教",
    "category": "高清电影",
    "url": "./movie-0847.html",
    "cover": "./97.jpg"
  },
  {
    "title": "听说爱情回来过",
    "region": "中国香港",
    "year": "2024",
    "genre": "爱情、剧情",
    "category": "高清电影",
    "url": "./movie-0848.html",
    "cover": "./98.jpg"
  },
  {
    "title": "新夏威夷神探第五季",
    "region": "美国",
    "year": "2026",
    "genre": "悬疑/犯罪/喜剧",
    "category": "高清电影",
    "url": "./movie-0849.html",
    "cover": "./99.jpg"
  },
  {
    "title": "球光艳影",
    "region": "中国大陆",
    "year": "2023",
    "genre": "运动/励志",
    "category": "爱情家庭",
    "url": "./movie-0850.html",
    "cover": "./100.jpg"
  },
  {
    "title": "昆塔:反转星球",
    "region": "中国大陆",
    "year": "2017",
    "genre": "科幻,冒险",
    "category": "动作冒险",
    "url": "./movie-0851.html",
    "cover": "./101.jpg"
  },
  {
    "title": "亲爱的克拉拉",
    "region": "德国",
    "year": "2024",
    "genre": "剧情/历史/悬疑",
    "category": "综艺动漫",
    "url": "./movie-0852.html",
    "cover": "./102.jpg"
  },
  {
    "title": "雪花那个飘",
    "region": "中国大陆",
    "year": "2023",
    "genre": "剧情、历史、家庭",
    "category": "悬疑犯罪",
    "url": "./movie-0853.html",
    "cover": "./103.jpg"
  },
  {
    "title": "精灵旅社3:疯狂假期",
    "region": "美国",
    "year": "2024",
    "genre": "喜剧、奇幻、家庭",
    "category": "国产精选",
    "url": "./movie-0854.html",
    "cover": "./104.jpg"
  },
  {
    "title": "为你,莫斯科啊",
    "region": "俄罗斯",
    "year": "2025",
    "genre": "历史/战争/爱情",
    "category": "动作冒险",
    "url": "./movie-0855.html",
    "cover": "./105.jpg"
  },
  {
    "title": "千谎百计第一季",
    "region": "美国",
    "year": "2024",
    "genre": "悬疑,犯罪,心理",
    "category": "悬疑犯罪",
    "url": "./movie-0856.html",
    "cover": "./106.jpg"
  },
  {
    "title": "名模大间谍2",
    "region": "美国",
    "year": "2026",
    "genre": "喜剧/动作",
    "category": "经典剧集",
    "url": "./movie-0857.html",
    "cover": "./107.jpg"
  },
  {
    "title": "春风物语",
    "region": "日本",
    "year": "2025",
    "genre": "爱情,校园,同性",
    "category": "经典剧集",
    "url": "./movie-0858.html",
    "cover": "./108.jpg"
  },
  {
    "title": "毛发",
    "region": "法国",
    "year": "2024",
    "genre": "奇幻,恐怖",
    "category": "动作冒险",
    "url": "./movie-0859.html",
    "cover": "./109.jpg"
  },
  {
    "title": "街霸竞技场",
    "region": "中国香港",
    "year": "2025",
    "genre": "动作/运动",
    "category": "高清电影",
    "url": "./movie-0860.html",
    "cover": "./110.jpg"
  },
  {
    "title": "缉毒警",
    "region": "中国大陆",
    "year": "2025",
    "genre": "动作、犯罪、剧情",
    "category": "爱情家庭",
    "url": "./movie-0861.html",
    "cover": "./111.jpg"
  },
  {
    "title": "游览意大利",
    "region": "意大利",
    "year": "2024",
    "genre": "公路、喜剧、剧情",
    "category": "海外热播",
    "url": "./movie-0862.html",
    "cover": "./112.jpg"
  },
  {
    "title": "好家伙2016",
    "region": "意大利",
    "year": "2016",
    "genre": "喜剧,犯罪",
    "category": "海外热播",
    "url": "./movie-0863.html",
    "cover": "./113.jpg"
  },
  {
    "title": "赤月",
    "region": "日本",
    "year": "2004",
    "genre": "剧情,战争,爱情",
    "category": "经典剧集",
    "url": "./movie-0864.html",
    "cover": "./114.jpg"
  },
  {
    "title": "冲击力工作者的生活",
    "region": "中国大陆",
    "year": "2025",
    "genre": "喜剧,职场,生活",
    "category": "海外热播",
    "url": "./movie-0865.html",
    "cover": "./115.jpg"
  },
  {
    "title": "拜拜",
    "region": "中国香港",
    "year": "2023",
    "genre": "剧情/家庭/悬疑",
    "category": "高清电影",
    "url": "./movie-0866.html",
    "cover": "./116.jpg"
  },
  {
    "title": "狐狸躲进洞",
    "region": "法国",
    "year": "2024",
    "genre": "惊悚/心理",
    "category": "国产精选",
    "url": "./movie-0867.html",
    "cover": "./117.jpg"
  },
  {
    "title": "偷情先生国语",
    "region": "中国香港",
    "year": "1989",
    "genre": "喜剧、爱情、成人",
    "category": "综艺动漫",
    "url": "./movie-0868.html",
    "cover": "./118.jpg"
  },
  {
    "title": "月升物语",
    "region": "日本",
    "year": "2025",
    "genre": "动画奇幻",
    "category": "悬疑犯罪",
    "url": "./movie-0869.html",
    "cover": "./119.jpg"
  },
  {
    "title": "瑞克和莫蒂第六季",
    "region": "美国",
    "year": "2022",
    "genre": "科幻,喜剧,动画,冒险",
    "category": "海外热播",
    "url": "./movie-0870.html",
    "cover": "./120.jpg"
  },
  {
    "title": "蜗牛的策略",
    "region": "中国大陆",
    "year": "2022",
    "genre": "喜剧,犯罪",
    "category": "国产精选",
    "url": "./movie-0871.html",
    "cover": "./121.jpg"
  },
  {
    "title": "新四军女兵",
    "region": "中国大陆",
    "year": "2011",
    "genre": "历史,战争,剧情",
    "category": "悬疑犯罪",
    "url": "./movie-0872.html",
    "cover": "./122.jpg"
  },
  {
    "title": "紧急搜捕令",
    "region": "美国",
    "year": "2020",
    "genre": "犯罪",
    "category": "国产精选",
    "url": "./movie-0873.html",
    "cover": "./123.jpg"
  },
  {
    "title": "就像爱你",
    "region": "泰国",
    "year": "2024",
    "genre": "爱情,剧情,同性",
    "category": "悬疑犯罪",
    "url": "./movie-0874.html",
    "cover": "./124.jpg"
  },
  {
    "title": "猎赝",
    "region": "中国大陆",
    "year": "2026",
    "genre": "悬疑,犯罪,剧情",
    "category": "综艺动漫",
    "url": "./movie-0875.html",
    "cover": "./125.jpg"
  },
  {
    "title": "烂头何粤语",
    "region": "香港",
    "year": "1979",
    "genre": "动作",
    "category": "动作冒险",
    "url": "./movie-0876.html",
    "cover": "./126.jpg"
  },
  {
    "title": "天下父母",
    "region": "新加坡",
    "year": "2016",
    "genre": "家庭、剧情、社会",
    "category": "国产精选",
    "url": "./movie-0877.html",
    "cover": "./127.jpg"
  },
  {
    "title": "无止尽的前进",
    "region": "法国",
    "year": "2024",
    "genre": "剧情、冒险",
    "category": "动作冒险",
    "url": "./movie-0878.html",
    "cover": "./128.jpg"
  },
  {
    "title": "天衣行动",
    "region": "中国大陆",
    "year": "2024",
    "genre": "战争动作",
    "category": "国产精选",
    "url": "./movie-0879.html",
    "cover": "./129.jpg"
  },
  {
    "title": "我们的八十年代",
    "region": "中国大陆",
    "year": "2009",
    "genre": "剧情,怀旧,青春",
    "category": "动作冒险",
    "url": "./movie-0880.html",
    "cover": "./130.jpg"
  },
  {
    "title": "笔仙惊魂",
    "region": "中国大陆",
    "year": "2023",
    "genre": "恐怖,校园",
    "category": "综艺动漫",
    "url": "./movie-0881.html",
    "cover": "./131.jpg"
  },
  {
    "title": "字典情人",
    "region": "中国大陆",
    "year": "2025",
    "genre": "爱情/奇幻/剧情",
    "category": "爱情家庭",
    "url": "./movie-0882.html",
    "cover": "./132.jpg"
  },
  {
    "title": "篮子里的恶魔",
    "region": "美国",
    "year": "1982",
    "genre": "恐怖奇幻",
    "category": "悬疑犯罪",
    "url": "./movie-0883.html",
    "cover": "./133.jpg"
  },
  {
    "title": "无间道第一季",
    "region": "中国香港",
    "year": "2026",
    "genre": "警匪,悬疑",
    "category": "爱情家庭",
    "url": "./movie-0884.html",
    "cover": "./134.jpg"
  },
  {
    "title": "绿巨人大战",
    "region": "美国",
    "year": "2026",
    "genre": "动作,科幻",
    "category": "海外热播",
    "url": "./movie-0885.html",
    "cover": "./135.jpg"
  },
  {
    "title": "阴阳路之升棺发财",
    "region": "中国香港",
    "year": "2024",
    "genre": "恐怖/惊悚/民俗",
    "category": "爱情家庭",
    "url": "./movie-0886.html",
    "cover": "./136.jpg"
  },
  {
    "title": "运动高飞狗",
    "region": "美国",
    "year": "2025",
    "genre": "喜剧,动画,家庭,运动",
    "category": "经典剧集",
    "url": "./movie-0887.html",
    "cover": "./137.jpg"
  },
  {
    "title": "科哈塞特虐杀电影",
    "region": "美国",
    "year": "2024",
    "genre": "恐怖,惊悚,伪纪录片",
    "category": "经典剧集",
    "url": "./movie-0888.html",
    "cover": "./138.jpg"
  },
  {
    "title": "魔法美少女",
    "region": "日本",
    "year": "2027",
    "genre": "奇幻/日常/搞笑",
    "category": "悬疑犯罪",
    "url": "./movie-0889.html",
    "cover": "./139.jpg"
  },
  {
    "title": "她的城",
    "region": "中国大陆",
    "year": "2024",
    "genre": "都市/女性",
    "category": "爱情家庭",
    "url": "./movie-0890.html",
    "cover": "./140.jpg"
  },
  {
    "title": "还会与你相见3次",
    "region": "日本",
    "year": "2026",
    "genre": "奇幻爱情",
    "category": "高清电影",
    "url": "./movie-0891.html",
    "cover": "./141.jpg"
  },
  {
    "title": "杀出黎明",
    "region": "中国大陆",
    "year": "2015",
    "genre": "战争/动作/谍战",
    "category": "悬疑犯罪",
    "url": "./movie-0892.html",
    "cover": "./142.jpg"
  },
  {
    "title": "德州,北海",
    "region": "比利时/荷兰",
    "year": "2025",
    "genre": "爱情/剧情",
    "category": "经典剧集",
    "url": "./movie-0893.html",
    "cover": "./143.jpg"
  },
  {
    "title": "万万没想到第三季",
    "region": "中国大陆",
    "year": "2024",
    "genre": "喜剧,短剧,奇幻",
    "category": "动作冒险",
    "url": "./movie-0894.html",
    "cover": "./144.jpg"
  },
  {
    "title": "离线",
    "region": "美国",
    "year": "2024",
    "genre": "科幻、惊悚",
    "category": "国产精选",
    "url": "./movie-0895.html",
    "cover": "./145.jpg"
  },
  {
    "title": "守龙者",
    "region": "中国大陆/西班牙",
    "year": "2022",
    "genre": "动画,奇幻,冒险",
    "category": "国产精选",
    "url": "./movie-0896.html",
    "cover": "./146.jpg"
  },
  {
    "title": "月月",
    "region": "中国台湾",
    "year": "2024",
    "genre": "家庭,剧情,女性",
    "category": "动作冒险",
    "url": "./movie-0897.html",
    "cover": "./147.jpg"
  },
  {
    "title": "招财进宝",
    "region": "中国香港",
    "year": "2024",
    "genre": "喜剧/奇幻",
    "category": "动作冒险",
    "url": "./movie-0898.html",
    "cover": "./148.jpg"
  },
  {
    "title": "暗夜逐仇",
    "region": "美国",
    "year": "2015",
    "genre": "动作",
    "category": "国产精选",
    "url": "./movie-0899.html",
    "cover": "./149.jpg"
  },
  {
    "title": "愤怒的二十年代",
    "region": "美国",
    "year": "2025",
    "genre": "历史/犯罪/剧情",
    "category": "国产精选",
    "url": "./movie-0900.html",
    "cover": "./150.jpg"
  },
  {
    "title": "林家铺子",
    "region": "中国大陆",
    "year": "2025",
    "genre": "年代,商战",
    "category": "经典剧集",
    "url": "./movie-0901.html",
    "cover": "./1.jpg"
  },
  {
    "title": "坚强的心",
    "region": "美国",
    "year": "2023",
    "genre": "传记/体育",
    "category": "国产精选",
    "url": "./movie-0902.html",
    "cover": "./2.jpg"
  },
  {
    "title": "苍天有眼",
    "region": "中国香港",
    "year": "1998",
    "genre": "古装,悬疑,公案",
    "category": "国产精选",
    "url": "./movie-0903.html",
    "cover": "./3.jpg"
  },
  {
    "title": "空投艳史",
    "region": "美国",
    "year": "2022",
    "genre": "战争/爱情/剧情",
    "category": "悬疑犯罪",
    "url": "./movie-0904.html",
    "cover": "./4.jpg"
  },
  {
    "title": "千年的娱乐",
    "region": "日本",
    "year": "2026",
    "genre": "科幻,悬疑",
    "category": "国产精选",
    "url": "./movie-0905.html",
    "cover": "./5.jpg"
  },
  {
    "title": "欲海春潮",
    "region": "中国香港",
    "year": "1994",
    "genre": "剧情/情色/爱情",
    "category": "综艺动漫",
    "url": "./movie-0906.html",
    "cover": "./6.jpg"
  },
  {
    "title": "金牌客服董董恩",
    "region": "中国大陆",
    "year": "2024",
    "genre": "职场/喜剧",
    "category": "综艺动漫",
    "url": "./movie-0907.html",
    "cover": "./7.jpg"
  },
  {
    "title": "舞后芳邻",
    "region": "韩国",
    "year": "2012",
    "genre": "喜剧/歌舞/家庭",
    "category": "动作冒险",
    "url": "./movie-0908.html",
    "cover": "./8.jpg"
  },
  {
    "title": "哥布林杀手",
    "region": "日本",
    "year": "2022",
    "genre": "奇幻、冒险",
    "category": "悬疑犯罪",
    "url": "./movie-0909.html",
    "cover": "./9.jpg"
  },
  {
    "title": "女集中营",
    "region": "中国香港",
    "year": "1977",
    "genre": "剧情/战争/惊悚",
    "category": "海外热播",
    "url": "./movie-0910.html",
    "cover": "./10.jpg"
  },
  {
    "title": "歼狱行动2",
    "region": "美国",
    "year": "2027",
    "genre": "动作,犯罪,惊悚",
    "category": "国产精选",
    "url": "./movie-0911.html",
    "cover": "./11.jpg"
  },
  {
    "title": "韩裔美人的日与夜",
    "region": "美国",
    "year": "2023",
    "genre": "剧情,悬疑",
    "category": "爱情家庭",
    "url": "./movie-0912.html",
    "cover": "./12.jpg"
  },
  {
    "title": "猛龙过江",
    "region": "中国香港",
    "year": "2025",
    "genre": "动作,犯罪,剧情",
    "category": "动作冒险",
    "url": "./movie-0913.html",
    "cover": "./13.jpg"
  },
  {
    "title": "新的肌肤",
    "region": "英国",
    "year": "2024",
    "genre": "科幻伦理惊悚",
    "category": "经典剧集",
    "url": "./movie-0914.html",
    "cover": "./14.jpg"
  },
  {
    "title": "几度菊花香",
    "region": "中国大陆",
    "year": "2024",
    "genre": "爱情",
    "category": "海外热播",
    "url": "./movie-0915.html",
    "cover": "./15.jpg"
  },
  {
    "title": "我和格瓦拉的故事",
    "region": "阿根廷/西班牙",
    "year": "2024",
    "genre": "历史/传记",
    "category": "悬疑犯罪",
    "url": "./movie-0916.html",
    "cover": "./16.jpg"
  },
  {
    "title": "隔壁的男孩杀过来",
    "region": "美国",
    "year": "2024",
    "genre": "惊悚,犯罪",
    "category": "海外热播",
    "url": "./movie-0917.html",
    "cover": "./17.jpg"
  },
  {
    "title": "俾鬼捉",
    "region": "中国香港",
    "year": "1986",
    "genre": "喜剧/恐怖",
    "category": "高清电影",
    "url": "./movie-0918.html",
    "cover": "./18.jpg"
  },
  {
    "title": "武工队传奇",
    "region": "中国大陆",
    "year": "2014",
    "genre": "战争、动作、谍战",
    "category": "高清电影",
    "url": "./movie-0919.html",
    "cover": "./19.jpg"
  },
  {
    "title": "爱不可及",
    "region": "中国大陆",
    "year": "2024",
    "genre": "爱情,剧情,奇幻",
    "category": "爱情家庭",
    "url": "./movie-0920.html",
    "cover": "./20.jpg"
  },
  {
    "title": "马路与天使",
    "region": "中国香港",
    "year": "2026",
    "genre": "剧情,爱情",
    "category": "动作冒险",
    "url": "./movie-0921.html",
    "cover": "./21.jpg"
  },
  {
    "title": "杰和沉默鲍伯的反击",
    "region": "美国",
    "year": "2023",
    "genre": "喜剧",
    "category": "爱情家庭",
    "url": "./movie-0922.html",
    "cover": "./22.jpg"
  },
  {
    "title": "皮斯弗尔大兵",
    "region": "美国",
    "year": "2025",
    "genre": "战争,剧情,心理",
    "category": "高清电影",
    "url": "./movie-0923.html",
    "cover": "./23.jpg"
  },
  {
    "title": "荒漠争霸战",
    "region": "澳大利亚",
    "year": "2026",
    "genre": "动作/西部/科幻",
    "category": "经典剧集",
    "url": "./movie-0924.html",
    "cover": "./24.jpg"
  },
  {
    "title": "地下忍者",
    "region": "日本",
    "year": "2025",
    "genre": "动作,奇幻,惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-0925.html",
    "cover": "./25.jpg"
  },
  {
    "title": "我是威廉姆",
    "region": "英国/美国",
    "year": "2022",
    "genre": "剧情,奇幻",
    "category": "经典剧集",
    "url": "./movie-0926.html",
    "cover": "./26.jpg"
  },
  {
    "title": "不再著迷",
    "region": "中国香港",
    "year": "2025",
    "genre": "剧情,悬疑",
    "category": "爱情家庭",
    "url": "./movie-0927.html",
    "cover": "./27.jpg"
  },
  {
    "title": "诗意中国第六季",
    "region": "中国大陆",
    "year": "2023",
    "genre": "纪录片,历史,文化",
    "category": "国产精选",
    "url": "./movie-0928.html",
    "cover": "./28.jpg"
  },
  {
    "title": "结婚哪有那么男",
    "region": "中国大陆",
    "year": "2025",
    "genre": "喜剧",
    "category": "经典剧集",
    "url": "./movie-0929.html",
    "cover": "./29.jpg"
  },
  {
    "title": "异色国度:出逃之旅",
    "region": "法国/塞内加尔",
    "year": "2025",
    "genre": "剧情冒险",
    "category": "国产精选",
    "url": "./movie-0930.html",
    "cover": "./30.jpg"
  },
  {
    "title": "五行秘术",
    "region": "中国大陆",
    "year": "2024",
    "genre": "悬疑/冒险/奇幻",
    "category": "经典剧集",
    "url": "./movie-0931.html",
    "cover": "./31.jpg"
  },
  {
    "title": "最后的夫人",
    "region": "英国",
    "year": "2024",
    "genre": "历史/剧情",
    "category": "综艺动漫",
    "url": "./movie-0932.html",
    "cover": "./32.jpg"
  },
  {
    "title": "暴力启示录",
    "region": "美国/加拿大",
    "year": "2021",
    "genre": "动作,惊悚",
    "category": "动作冒险",
    "url": "./movie-0933.html",
    "cover": "./33.jpg"
  },
  {
    "title": "雾都孤儿2005",
    "region": "英国",
    "year": "2025",
    "genre": "剧情/犯罪/悬疑",
    "category": "悬疑犯罪",
    "url": "./movie-0934.html",
    "cover": "./34.jpg"
  },
  {
    "title": "派对女孩",
    "region": "美国",
    "year": "2025",
    "genre": "都市喜剧",
    "category": "爱情家庭",
    "url": "./movie-0935.html",
    "cover": "./35.jpg"
  },
  {
    "title": "三少爷的剑",
    "region": "中国香港/中国大陆",
    "year": "2026",
    "genre": "动作/武侠/古装",
    "category": "海外热播",
    "url": "./movie-0936.html",
    "cover": "./36.jpg"
  },
  {
    "title": "人是铁饭是钢",
    "region": "中国大陆",
    "year": "2022",
    "genre": "剧情",
    "category": "经典剧集",
    "url": "./movie-0937.html",
    "cover": "./37.jpg"
  },
  {
    "title": "僵尸奇兵粤语",
    "region": "中国香港",
    "year": "2023",
    "genre": "奇幻/动作/喜剧",
    "category": "爱情家庭",
    "url": "./movie-0938.html",
    "cover": "./38.jpg"
  },
  {
    "title": "让叶兰在空中飞舞",
    "region": "英国",
    "year": "2013",
    "genre": "剧情/音乐",
    "category": "悬疑犯罪",
    "url": "./movie-0939.html",
    "cover": "./39.jpg"
  },
  {
    "title": "血染两山红",
    "region": "中国香港",
    "year": "1992",
    "genre": "动作/武侠",
    "category": "动作冒险",
    "url": "./movie-0940.html",
    "cover": "./40.jpg"
  },
  {
    "title": "夺命真夫粤语",
    "region": "中国香港",
    "year": "2024",
    "genre": "悬疑,律政",
    "category": "爱情家庭",
    "url": "./movie-0941.html",
    "cover": "./41.jpg"
  },
  {
    "title": "黑暗城市",
    "region": "德国",
    "year": "2027",
    "genre": "科幻,惊悚,黑色电影",
    "category": "综艺动漫",
    "url": "./movie-0942.html",
    "cover": "./42.jpg"
  },
  {
    "title": "我在岛屿读书",
    "region": "中国大陆",
    "year": "2022",
    "genre": "真人秀,纪录片",
    "category": "综艺动漫",
    "url": "./movie-0943.html",
    "cover": "./43.jpg"
  },
  {
    "title": "西北风云",
    "region": "中国大陆",
    "year": "2025",
    "genre": "犯罪/动作",
    "category": "悬疑犯罪",
    "url": "./movie-0944.html",
    "cover": "./44.jpg"
  },
  {
    "title": "覆盖半球的谷物",
    "region": "中国/加拿大",
    "year": "2026",
    "genre": "科幻/悬疑",
    "category": "综艺动漫",
    "url": "./movie-0945.html",
    "cover": "./45.jpg"
  },
  {
    "title": "我才不要和人类恋爱呢",
    "region": "中国大陆",
    "year": "2024",
    "genre": "爱情,奇幻,喜剧",
    "category": "动作冒险",
    "url": "./movie-0946.html",
    "cover": "./46.jpg"
  },
  {
    "title": "在京都小住",
    "region": "日本",
    "year": "2022",
    "genre": "剧情,生活,治愈",
    "category": "悬疑犯罪",
    "url": "./movie-0947.html",
    "cover": "./47.jpg"
  },
  {
    "title": "海蜂突击队",
    "region": "中国大陆",
    "year": "2025",
    "genre": "军事动作",
    "category": "海外热播",
    "url": "./movie-0948.html",
    "cover": "./48.jpg"
  },
  {
    "title": "阿衰第七季",
    "region": "中国大陆",
    "year": "2024",
    "genre": "喜剧/校园",
    "category": "海外热播",
    "url": "./movie-0949.html",
    "cover": "./49.jpg"
  },
  {
    "title": "美洲豹女儿",
    "region": "巴西",
    "year": "2011",
    "genre": "动作,冒险",
    "category": "经典剧集",
    "url": "./movie-0950.html",
    "cover": "./50.jpg"
  },
  {
    "title": "小马虎",
    "region": "中国大陆",
    "year": "2024",
    "genre": "喜剧/家庭/儿童",
    "category": "综艺动漫",
    "url": "./movie-0951.html",
    "cover": "./51.jpg"
  },
  {
    "title": "朝九晚五",
    "region": "美国",
    "year": "1980",
    "genre": "喜剧",
    "category": "综艺动漫",
    "url": "./movie-0952.html",
    "cover": "./52.jpg"
  },
  {
    "title": "安东妮雅与珍",
    "region": "法国",
    "year": "2025",
    "genre": "剧情/女性/友情",
    "category": "高清电影",
    "url": "./movie-0953.html",
    "cover": "./53.jpg"
  },
  {
    "title": "求职记",
    "region": "中国大陆",
    "year": "2027",
    "genre": "剧情/喜剧",
    "category": "高清电影",
    "url": "./movie-0954.html",
    "cover": "./54.jpg"
  },
  {
    "title": "再见的延续",
    "region": "日本",
    "year": "2025",
    "genre": "剧情奇幻",
    "category": "高清电影",
    "url": "./movie-0955.html",
    "cover": "./55.jpg"
  },
  {
    "title": "美妙共振",
    "region": "英国",
    "year": "2013",
    "genre": "音乐,剧情",
    "category": "爱情家庭",
    "url": "./movie-0956.html",
    "cover": "./56.jpg"
  },
  {
    "title": "宽恕与原谅",
    "region": "法国",
    "year": "2022",
    "genre": "剧情家庭",
    "category": "经典剧集",
    "url": "./movie-0957.html",
    "cover": "./57.jpg"
  },
  {
    "title": "4大杀手:重出江湖",
    "region": "中国香港",
    "year": "2026",
    "genre": "动作,犯罪",
    "category": "经典剧集",
    "url": "./movie-0958.html",
    "cover": "./58.jpg"
  },
  {
    "title": "罗萨里奥",
    "region": "阿根廷",
    "year": "2022",
    "genre": "剧情/同性",
    "category": "爱情家庭",
    "url": "./movie-0959.html",
    "cover": "./59.jpg"
  },
  {
    "title": "死亡女孩的夏天",
    "region": "德国",
    "year": "2025",
    "genre": "悬疑/剧情",
    "category": "综艺动漫",
    "url": "./movie-0960.html",
    "cover": "./60.jpg"
  },
  {
    "title": "小小克星第二季",
    "region": "日本",
    "year": "2013",
    "genre": "动画,青春,治愈,奇幻",
    "category": "海外热播",
    "url": "./movie-0961.html",
    "cover": "./61.jpg"
  },
  {
    "title": "神计鬼诈",
    "region": "中国香港",
    "year": "1982",
    "genre": "喜剧、犯罪、动作",
    "category": "综艺动漫",
    "url": "./movie-0962.html",
    "cover": "./62.jpg"
  },
  {
    "title": "零水日",
    "region": "全球",
    "year": "2024",
    "genre": "纪录,灾难",
    "category": "高清电影",
    "url": "./movie-0963.html",
    "cover": "./63.jpg"
  },
  {
    "title": "活著的部分",
    "region": "中国大陆",
    "year": "2028",
    "genre": "剧情,家庭",
    "category": "爱情家庭",
    "url": "./movie-0964.html",
    "cover": "./64.jpg"
  },
  {
    "title": "清凌凌的水蓝莹莹的天2",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情,乡村,励志",
    "category": "海外热播",
    "url": "./movie-0965.html",
    "cover": "./65.jpg"
  },
  {
    "title": "客人是王",
    "region": "韩国",
    "year": "2024",
    "genre": "剧情、黑色幽默、悬疑",
    "category": "海外热播",
    "url": "./movie-0966.html",
    "cover": "./66.jpg"
  },
  {
    "title": "红粉舵爷",
    "region": "中国大陆",
    "year": "2025",
    "genre": "剧情/喜剧/年代",
    "category": "动作冒险",
    "url": "./movie-0967.html",
    "cover": "./67.jpg"
  },
  {
    "title": "女教练",
    "region": "韩国",
    "year": "2024",
    "genre": "运动励志",
    "category": "爱情家庭",
    "url": "./movie-0968.html",
    "cover": "./68.jpg"
  },
  {
    "title": "我的天使2019",
    "region": "美国",
    "year": "2019",
    "genre": "惊悚,剧情,悬疑",
    "category": "爱情家庭",
    "url": "./movie-0969.html",
    "cover": "./69.jpg"
  },
  {
    "title": "灌篮高手 剧场版3",
    "region": "日本",
    "year": "1995",
    "genre": "动画/运动",
    "category": "国产精选",
    "url": "./movie-0970.html",
    "cover": "./70.jpg"
  },
  {
    "title": "我会存活下来",
    "region": "韩国",
    "year": "2024",
    "genre": "剧情/悬疑/生存",
    "category": "综艺动漫",
    "url": "./movie-0971.html",
    "cover": "./71.jpg"
  },
  {
    "title": "死亡国度",
    "region": "美国",
    "year": "2025",
    "genre": "科幻,惊悚",
    "category": "综艺动漫",
    "url": "./movie-0972.html",
    "cover": "./72.jpg"
  },
  {
    "title": "巡演转学生",
    "region": "韩国",
    "year": "2025",
    "genre": "青春/音乐/励志",
    "category": "悬疑犯罪",
    "url": "./movie-0973.html",
    "cover": "./73.jpg"
  },
  {
    "title": "洛杉矶土匪",
    "region": "美国",
    "year": "2026",
    "genre": "犯罪/惊悚",
    "category": "国产精选",
    "url": "./movie-0974.html",
    "cover": "./74.jpg"
  },
  {
    "title": "香港奇案之吸血贵利王",
    "region": "中国香港",
    "year": "1994",
    "genre": "剧情,犯罪,惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-0975.html",
    "cover": "./75.jpg"
  },
  {
    "title": "天使的信仰",
    "region": "西班牙",
    "year": "2025",
    "genre": "悬疑,惊悚",
    "category": "爱情家庭",
    "url": "./movie-0976.html",
    "cover": "./76.jpg"
  },
  {
    "title": "对话的维度",
    "region": "捷克",
    "year": "1983",
    "genre": "动画/短片/奇幻",
    "category": "综艺动漫",
    "url": "./movie-0977.html",
    "cover": "./77.jpg"
  },
  {
    "title": "第七日的奇迹",
    "region": "日本",
    "year": "2025",
    "genre": "剧情/奇幻",
    "category": "高清电影",
    "url": "./movie-0978.html",
    "cover": "./78.jpg"
  },
  {
    "title": "汤姆维特",
    "region": "英国",
    "year": "2026",
    "genre": "惊悚,犯罪",
    "category": "高清电影",
    "url": "./movie-0979.html",
    "cover": "./79.jpg"
  },
  {
    "title": "生活大爆炸第七季",
    "region": "美国",
    "year": "2014",
    "genre": "喜剧,情景剧",
    "category": "国产精选",
    "url": "./movie-0980.html",
    "cover": "./80.jpg"
  },
  {
    "title": "封城之后",
    "region": "中国大陆",
    "year": "2023",
    "genre": "悬疑/灾难/人性",
    "category": "爱情家庭",
    "url": "./movie-0981.html",
    "cover": "./81.jpg"
  },
  {
    "title": "现在开始作秀时间",
    "region": "韩国",
    "year": "2022",
    "genre": "奇幻,爱情,喜剧",
    "category": "海外热播",
    "url": "./movie-0982.html",
    "cover": "./82.jpg"
  },
  {
    "title": "血源",
    "region": "美国/加拿大",
    "year": "2023",
    "genre": "恐怖/悬疑/科幻",
    "category": "悬疑犯罪",
    "url": "./movie-0983.html",
    "cover": "./83.jpg"
  },
  {
    "title": "沙漠之王",
    "region": "英国",
    "year": "2003",
    "genre": "战争,历史",
    "category": "高清电影",
    "url": "./movie-0984.html",
    "cover": "./84.jpg"
  },
  {
    "title": "赤裸女羔羊",
    "region": "中国香港",
    "year": "2025",
    "genre": "动作,惊悚",
    "category": "经典剧集",
    "url": "./movie-0985.html",
    "cover": "./85.jpg"
  },
  {
    "title": "进入盛夏之门",
    "region": "日本",
    "year": "2021",
    "genre": "科幻,剧情,温情",
    "category": "动作冒险",
    "url": "./movie-0986.html",
    "cover": "./86.jpg"
  },
  {
    "title": "卡美洛",
    "region": "英国",
    "year": "2026",
    "genre": "奇幻,历史,剧情",
    "category": "悬疑犯罪",
    "url": "./movie-0987.html",
    "cover": "./87.jpg"
  },
  {
    "title": "超完美杀手",
    "region": "韩国",
    "year": "2026",
    "genre": "动作/犯罪/科幻",
    "category": "国产精选",
    "url": "./movie-0988.html",
    "cover": "./88.jpg"
  },
  {
    "title": "血魔回魂",
    "region": "中国香港",
    "year": "1996",
    "genre": "恐怖/惊悚",
    "category": "国产精选",
    "url": "./movie-0989.html",
    "cover": "./89.jpg"
  },
  {
    "title": "新兵正传4",
    "region": "新加坡",
    "year": "2015",
    "genre": "喜剧/动作/军旅",
    "category": "综艺动漫",
    "url": "./movie-0990.html",
    "cover": "./90.jpg"
  },
  {
    "title": "警察与外星人国语",
    "region": "中国大陆 (合拍)",
    "year": "2025",
    "genre": "科幻喜剧",
    "category": "高清电影",
    "url": "./movie-0991.html",
    "cover": "./91.jpg"
  },
  {
    "title": "婚礼进行曲(电影)",
    "region": "中国大陆",
    "year": "2023",
    "genre": "爱情,喜剧,剧情",
    "category": "爱情家庭",
    "url": "./movie-0992.html",
    "cover": "./92.jpg"
  },
  {
    "title": "世界的角落是晚餐",
    "region": "日本",
    "year": "2026",
    "genre": "剧情,美食,治愈",
    "category": "爱情家庭",
    "url": "./movie-0993.html",
    "cover": "./93.jpg"
  },
  {
    "title": "当我们盟在一起",
    "region": "中国香港/中国大陆",
    "year": "2025",
    "genre": "悬疑/犯罪/兄弟情",
    "category": "高清电影",
    "url": "./movie-0994.html",
    "cover": "./94.jpg"
  },
  {
    "title": "恋恋巴黎",
    "region": "法国",
    "year": "2023",
    "genre": "爱情,剧情,喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-0995.html",
    "cover": "./95.jpg"
  },
  {
    "title": "真假学园5",
    "region": "日本",
    "year": "2024",
    "genre": "动作/青春/校园",
    "category": "悬疑犯罪",
    "url": "./movie-0996.html",
    "cover": "./96.jpg"
  },
  {
    "title": "泡泡糖危机 东京2040",
    "region": "日本",
    "year": "2024",
    "genre": "科幻、赛博朋克、动作",
    "category": "国产精选",
    "url": "./movie-0997.html",
    "cover": "./97.jpg"
  },
  {
    "title": "鸽子隧道",
    "region": "英国",
    "year": "2024",
    "genre": "剧情,惊悚,传记",
    "category": "动作冒险",
    "url": "./movie-0998.html",
    "cover": "./98.jpg"
  },
  {
    "title": "麦兜故事",
    "region": "中国香港",
    "year": "2024",
    "genre": "动画/剧情/喜剧",
    "category": "国产精选",
    "url": "./movie-0999.html",
    "cover": "./99.jpg"
  },
  {
    "title": "镇灵攻略第一季",
    "region": "中国大陆",
    "year": "2020",
    "genre": "奇幻,悬疑,动作",
    "category": "爱情家庭",
    "url": "./movie-1000.html",
    "cover": "./100.jpg"
  },
  {
    "title": "山魂霹雳",
    "region": "中国大陆",
    "year": "2025",
    "genre": "悬疑/冒险",
    "category": "悬疑犯罪",
    "url": "./movie-1001.html",
    "cover": "./101.jpg"
  },
  {
    "title": "欲燄情花",
    "region": "中国香港",
    "year": "2026",
    "genre": "爱情/惊悚",
    "category": "爱情家庭",
    "url": "./movie-1002.html",
    "cover": "./102.jpg"
  },
  {
    "title": "精忠岳飞",
    "region": "中国大陆",
    "year": "2025",
    "genre": "历史/传记/战争",
    "category": "海外热播",
    "url": "./movie-1003.html",
    "cover": "./103.jpg"
  },
  {
    "title": "冰上青春日记",
    "region": "俄罗斯",
    "year": "2018",
    "genre": "剧情/运动",
    "category": "动作冒险",
    "url": "./movie-1004.html",
    "cover": "./104.jpg"
  },
  {
    "title": "大雄的大魔境",
    "region": "日本",
    "year": "2025",
    "genre": "冒险奇幻",
    "category": "爱情家庭",
    "url": "./movie-1005.html",
    "cover": "./105.jpg"
  },
  {
    "title": "美国骗局",
    "region": "美国",
    "year": "2013",
    "genre": "剧情/犯罪/悬疑",
    "category": "经典剧集",
    "url": "./movie-1006.html",
    "cover": "./106.jpg"
  },
  {
    "title": "恐怖之森2",
    "region": "日本",
    "year": "2024",
    "genre": "恐怖",
    "category": "海外热播",
    "url": "./movie-1007.html",
    "cover": "./107.jpg"
  },
  {
    "title": "追剿魔头",
    "region": "中国大陆",
    "year": "2019",
    "genre": "悬疑,犯罪",
    "category": "高清电影",
    "url": "./movie-1008.html",
    "cover": "./108.jpg"
  },
  {
    "title": "今世迷情",
    "region": "中国大陆",
    "year": "2026",
    "genre": "爱情,悬疑,奇幻",
    "category": "动作冒险",
    "url": "./movie-1009.html",
    "cover": "./109.jpg"
  },
  {
    "title": "怒晴湘西",
    "region": "中国大陆",
    "year": "2019",
    "genre": "冒险/奇幻/动作",
    "category": "经典剧集",
    "url": "./movie-1010.html",
    "cover": "./110.jpg"
  },
  {
    "title": "非常浪漫",
    "region": "中国大陆",
    "year": "2024",
    "genre": "爱情/喜剧",
    "category": "高清电影",
    "url": "./movie-1011.html",
    "cover": "./111.jpg"
  },
  {
    "title": "风云际会",
    "region": "香港/中国大陆",
    "year": "2025",
    "genre": "商战/历史/家族",
    "category": "爱情家庭",
    "url": "./movie-1012.html",
    "cover": "./112.jpg"
  },
  {
    "title": "史努比秀第一季",
    "region": "美国",
    "year": "2021",
    "genre": "喜剧,动画,短片",
    "category": "综艺动漫",
    "url": "./movie-1013.html",
    "cover": "./113.jpg"
  },
  {
    "title": "蒂凡尼的早餐",
    "region": "美国",
    "year": "1961",
    "genre": "剧情/爱情/喜剧",
    "category": "经典剧集",
    "url": "./movie-1014.html",
    "cover": "./114.jpg"
  },
  {
    "title": "惹不起的宫主大人",
    "region": "中国大陆",
    "year": "2024",
    "genre": "古装/喜剧/动作/爱情",
    "category": "爱情家庭",
    "url": "./movie-1015.html",
    "cover": "./115.jpg"
  },
  {
    "title": "萌犬好声音4",
    "region": "美国",
    "year": "2026",
    "genre": "喜剧/音乐/家庭",
    "category": "高清电影",
    "url": "./movie-1016.html",
    "cover": "./116.jpg"
  },
  {
    "title": "高考那年遇见你",
    "region": "中国大陆",
    "year": "2023",
    "genre": "青春/爱情/校园",
    "category": "国产精选",
    "url": "./movie-1017.html",
    "cover": "./117.jpg"
  },
  {
    "title": "凶手或许就是你",
    "region": "英国",
    "year": "2024",
    "genre": "悬疑/犯罪",
    "category": "经典剧集",
    "url": "./movie-1018.html",
    "cover": "./118.jpg"
  },
  {
    "title": "遥远的爱",
    "region": "印度",
    "year": "2024",
    "genre": "爱情,剧情",
    "category": "悬疑犯罪",
    "url": "./movie-1019.html",
    "cover": "./119.jpg"
  },
  {
    "title": "动物狂想曲第二季",
    "region": "日本",
    "year": "2021",
    "genre": "剧情/悬疑/奇幻",
    "category": "高清电影",
    "url": "./movie-1020.html",
    "cover": "./120.jpg"
  },
  {
    "title": "薇琪的秘密",
    "region": "法国",
    "year": "2023",
    "genre": "奇幻,家庭,悬疑",
    "category": "海外热播",
    "url": "./movie-1021.html",
    "cover": "./121.jpg"
  },
  {
    "title": "情留西伯利亚",
    "region": "俄罗斯,法国",
    "year": "1998",
    "genre": "爱情,剧情",
    "category": "海外热播",
    "url": "./movie-1022.html",
    "cover": "./122.jpg"
  },
  {
    "title": "小旅人",
    "region": "中国台湾",
    "year": "2026",
    "genre": "动画/奇幻",
    "category": "经典剧集",
    "url": "./movie-1023.html",
    "cover": "./123.jpg"
  },
  {
    "title": "好运来临",
    "region": "中国大陆",
    "year": "2019",
    "genre": "剧情,喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-1024.html",
    "cover": "./124.jpg"
  },
  {
    "title": "印度爆玉米花",
    "region": "印度",
    "year": "2023",
    "genre": "喜剧,歌舞,家庭",
    "category": "爱情家庭",
    "url": "./movie-1025.html",
    "cover": "./125.jpg"
  },
  {
    "title": "宝可梦遥远的蓝天",
    "region": "日本",
    "year": "2024",
    "genre": "动画/冒险/奇幻",
    "category": "综艺动漫",
    "url": "./movie-1026.html",
    "cover": "./126.jpg"
  },
  {
    "title": "丽玛姐鬼魂返家",
    "region": "泰国",
    "year": "2022",
    "genre": "恐怖/喜剧",
    "category": "国产精选",
    "url": "./movie-1027.html",
    "cover": "./127.jpg"
  },
  {
    "title": "位元",
    "region": "中国香港",
    "year": "2024",
    "genre": "科幻/犯罪",
    "category": "国产精选",
    "url": "./movie-1028.html",
    "cover": "./128.jpg"
  },
  {
    "title": "绅士布朗科",
    "region": "英国",
    "year": "2025",
    "genre": "剧情/喜剧/运动",
    "category": "高清电影",
    "url": "./movie-1029.html",
    "cover": "./129.jpg"
  },
  {
    "title": "斗破苍穹第一季",
    "region": "中国大陆",
    "year": "2024",
    "genre": "奇幻、动作、冒险",
    "category": "爱情家庭",
    "url": "./movie-1030.html",
    "cover": "./130.jpg"
  },
  {
    "title": "半人马传说",
    "region": "中国大陆",
    "year": "2025",
    "genre": "奇幻/冒险/神话",
    "category": "经典剧集",
    "url": "./movie-1031.html",
    "cover": "./131.jpg"
  },
  {
    "title": "幕府将军",
    "region": "美国/日本",
    "year": "2024",
    "genre": "历史/战争",
    "category": "高清电影",
    "url": "./movie-1032.html",
    "cover": "./132.jpg"
  },
  {
    "title": "名侦探俱乐部第六季",
    "region": "中国大陆",
    "year": "2026",
    "genre": "推理、真人秀",
    "category": "综艺动漫",
    "url": "./movie-1033.html",
    "cover": "./133.jpg"
  },
  {
    "title": "怒海群雄",
    "region": "中国香港",
    "year": "2024",
    "genre": "动作/犯罪/海上冒险",
    "category": "海外热播",
    "url": "./movie-1034.html",
    "cover": "./134.jpg"
  },
  {
    "title": "食在云南",
    "region": "中国",
    "year": "2025",
    "genre": "纪录片,美食",
    "category": "高清电影",
    "url": "./movie-1035.html",
    "cover": "./135.jpg"
  },
  {
    "title": "猎捕者",
    "region": "中国大陆",
    "year": "2026",
    "genre": "动作,犯罪,悬疑",
    "category": "海外热播",
    "url": "./movie-1036.html",
    "cover": "./136.jpg"
  },
  {
    "title": "水浒笑传",
    "region": "中国香港",
    "year": "1993",
    "genre": "喜剧/古装",
    "category": "爱情家庭",
    "url": "./movie-1037.html",
    "cover": "./137.jpg"
  },
  {
    "title": "熊猫与你,滚滚而来!",
    "region": "中国大陆",
    "year": "2023",
    "genre": "喜剧,奇幻",
    "category": "悬疑犯罪",
    "url": "./movie-1038.html",
    "cover": "./138.jpg"
  },
  {
    "title": "八月桂花香",
    "region": "中国大陆",
    "year": "2023",
    "genre": "爱情/家庭",
    "category": "悬疑犯罪",
    "url": "./movie-1039.html",
    "cover": "./139.jpg"
  },
  {
    "title": "克拉拉传",
    "region": "英国",
    "year": "2015",
    "genre": "传记/剧情",
    "category": "爱情家庭",
    "url": "./movie-1040.html",
    "cover": "./140.jpg"
  },
  {
    "title": "逆青春 第二季",
    "region": "中国",
    "year": "2021",
    "genre": "青春,剧情,校园",
    "category": "综艺动漫",
    "url": "./movie-1041.html",
    "cover": "./141.jpg"
  },
  {
    "title": "亲兄弟",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情,家庭",
    "category": "爱情家庭",
    "url": "./movie-1042.html",
    "cover": "./142.jpg"
  },
  {
    "title": "社区女支书",
    "region": "中国大陆",
    "year": "2024",
    "genre": "现实,剧情,励志",
    "category": "高清电影",
    "url": "./movie-1043.html",
    "cover": "./143.jpg"
  },
  {
    "title": "大汉口",
    "region": "中国大陆",
    "year": "2021",
    "genre": "剧情/历史/商战",
    "category": "动作冒险",
    "url": "./movie-1044.html",
    "cover": "./144.jpg"
  },
  {
    "title": "乐高幻影忍者",
    "region": "丹麦/美国",
    "year": "2021",
    "genre": "动作/冒险/奇幻",
    "category": "海外热播",
    "url": "./movie-1045.html",
    "cover": "./145.jpg"
  },
  {
    "title": "收山",
    "region": "中国香港",
    "year": "2024",
    "genre": "剧情/动作",
    "category": "综艺动漫",
    "url": "./movie-1046.html",
    "cover": "./146.jpg"
  },
  {
    "title": "留级魔女 风嘉与黑暗魔女",
    "region": "日本",
    "year": "2023",
    "genre": "动画,奇幻,冒险",
    "category": "综艺动漫",
    "url": "./movie-1047.html",
    "cover": "./147.jpg"
  },
  {
    "title": "从山上看",
    "region": "法国",
    "year": "2024",
    "genre": "剧情,历史",
    "category": "国产精选",
    "url": "./movie-1048.html",
    "cover": "./148.jpg"
  },
  {
    "title": "我在天庭收废品",
    "region": "中国大陆",
    "year": "2024",
    "genre": "奇幻喜剧",
    "category": "爱情家庭",
    "url": "./movie-1049.html",
    "cover": "./149.jpg"
  },
  {
    "title": "下套",
    "region": "中国大陆",
    "year": "2018",
    "genre": "犯罪,悬疑,剧情",
    "category": "经典剧集",
    "url": "./movie-1050.html",
    "cover": "./150.jpg"
  },
  {
    "title": "新世纪福尔摩斯:地狱新娘",
    "region": "英国",
    "year": "2016",
    "genre": "悬疑,犯罪",
    "category": "海外热播",
    "url": "./movie-1051.html",
    "cover": "./1.jpg"
  },
  {
    "title": "注文津",
    "region": "韩国",
    "year": "2014",
    "genre": "爱情,奇幻",
    "category": "动作冒险",
    "url": "./movie-1052.html",
    "cover": "./2.jpg"
  },
  {
    "title": "班战斯的海盗",
    "region": "美国",
    "year": "2024",
    "genre": "动作,冒险",
    "category": "高清电影",
    "url": "./movie-1053.html",
    "cover": "./3.jpg"
  },
  {
    "title": "乘客2023",
    "region": "中国大陆",
    "year": "2023",
    "genre": "悬疑/剧情/公路",
    "category": "爱情家庭",
    "url": "./movie-1054.html",
    "cover": "./4.jpg"
  },
  {
    "title": "美国田园下的罪恶",
    "region": "美国",
    "year": "2007",
    "genre": "剧情/犯罪",
    "category": "动作冒险",
    "url": "./movie-1055.html",
    "cover": "./5.jpg"
  },
  {
    "title": "猛虎3",
    "region": "印度",
    "year": "2023",
    "genre": "谍战",
    "category": "悬疑犯罪",
    "url": "./movie-1056.html",
    "cover": "./6.jpg"
  },
  {
    "title": "黑手党老大",
    "region": "意大利/美国",
    "year": "2021",
    "genre": "犯罪/剧情/传记",
    "category": "综艺动漫",
    "url": "./movie-1057.html",
    "cover": "./7.jpg"
  },
  {
    "title": "铁蹄慈泪",
    "region": "蒙古/中国",
    "year": "2018",
    "genre": "历史剧情",
    "category": "动作冒险",
    "url": "./movie-1058.html",
    "cover": "./8.jpg"
  },
  {
    "title": "第三种爱情",
    "region": "中国大陆",
    "year": "2025",
    "genre": "爱情/奇幻",
    "category": "高清电影",
    "url": "./movie-1059.html",
    "cover": "./9.jpg"
  },
  {
    "title": "罗贝尔塔",
    "region": "法国",
    "year": "2025",
    "genre": "传记、剧情、音乐",
    "category": "海外热播",
    "url": "./movie-1060.html",
    "cover": "./10.jpg"
  },
  {
    "title": "无言的山丘",
    "region": "中国台湾",
    "year": "2024",
    "genre": "剧情,历史",
    "category": "动作冒险",
    "url": "./movie-1061.html",
    "cover": "./11.jpg"
  },
  {
    "title": "刘少奇的四十四天",
    "region": "中国大陆",
    "year": "1992",
    "genre": "传记",
    "category": "经典剧集",
    "url": "./movie-1062.html",
    "cover": "./12.jpg"
  },
  {
    "title": "爵士年代",
    "region": "美国",
    "year": "1981",
    "genre": "剧情,音乐",
    "category": "悬疑犯罪",
    "url": "./movie-1063.html",
    "cover": "./13.jpg"
  },
  {
    "title": "十五岁的船长",
    "region": "法国",
    "year": "1974",
    "genre": "冒险/剧情",
    "category": "国产精选",
    "url": "./movie-1064.html",
    "cover": "./14.jpg"
  },
  {
    "title": "祇园姊妹",
    "region": "日本",
    "year": "2025",
    "genre": "剧情/古装",
    "category": "综艺动漫",
    "url": "./movie-1065.html",
    "cover": "./15.jpg"
  },
  {
    "title": "先天性淫娃",
    "region": "意大利",
    "year": "2023",
    "genre": "剧情/女性/争议",
    "category": "动作冒险",
    "url": "./movie-1066.html",
    "cover": "./16.jpg"
  },
  {
    "title": "年鉴计划",
    "region": "美国",
    "year": "2024",
    "genre": "科幻/悬疑/青春",
    "category": "国产精选",
    "url": "./movie-1067.html",
    "cover": "./17.jpg"
  },
  {
    "title": "顽将飞渡娘子关",
    "region": "中国",
    "year": "1992",
    "genre": "战争动作",
    "category": "综艺动漫",
    "url": "./movie-1068.html",
    "cover": "./18.jpg"
  },
  {
    "title": "少年特工科迪2",
    "region": "美国",
    "year": "2024",
    "genre": "动作,喜剧,冒险",
    "category": "悬疑犯罪",
    "url": "./movie-1069.html",
    "cover": "./19.jpg"
  },
  {
    "title": "里亚德录大地",
    "region": "日本",
    "year": "2022",
    "genre": "动画,奇幻,冒险",
    "category": "国产精选",
    "url": "./movie-1070.html",
    "cover": "./20.jpg"
  },
  {
    "title": "荷叶之屋",
    "region": "日本",
    "year": "2023",
    "genre": "奇幻家庭",
    "category": "综艺动漫",
    "url": "./movie-1071.html",
    "cover": "./21.jpg"
  },
  {
    "title": "豚鼠特攻队",
    "region": "美国",
    "year": "2009",
    "genre": "动作,冒险,动画",
    "category": "悬疑犯罪",
    "url": "./movie-1072.html",
    "cover": "./22.jpg"
  },
  {
    "title": "见笑",
    "region": "中国台湾",
    "year": "2025",
    "genre": "剧情,喜剧",
    "category": "国产精选",
    "url": "./movie-1073.html",
    "cover": "./23.jpg"
  },
  {
    "title": "铁扇公主1941",
    "region": "中国大陆",
    "year": "1941",
    "genre": "动画/奇幻",
    "category": "动作冒险",
    "url": "./movie-1074.html",
    "cover": "./24.jpg"
  },
  {
    "title": "武动乾坤第一季",
    "region": "中国大陆",
    "year": "2026",
    "genre": "动画/玄幻",
    "category": "悬疑犯罪",
    "url": "./movie-1075.html",
    "cover": "./25.jpg"
  },
  {
    "title": "黑镜第六季",
    "region": "英国",
    "year": "2023",
    "genre": "科幻,惊悚",
    "category": "综艺动漫",
    "url": "./movie-1076.html",
    "cover": "./26.jpg"
  },
  {
    "title": "府上娶了个锦鲤新娘",
    "region": "中国大陆",
    "year": "2026",
    "genre": "喜剧/爱情/奇幻",
    "category": "经典剧集",
    "url": "./movie-1077.html",
    "cover": "./27.jpg"
  },
  {
    "title": "难以忽视的真相2",
    "region": "美国",
    "year": "2024",
    "genre": "纪录、环保、警示",
    "category": "高清电影",
    "url": "./movie-1078.html",
    "cover": "./28.jpg"
  },
  {
    "title": "上海迷雾",
    "region": "中国",
    "year": "2004",
    "genre": "悬疑",
    "category": "悬疑犯罪",
    "url": "./movie-1079.html",
    "cover": "./29.jpg"
  },
  {
    "title": "阿桑迪拉",
    "region": "南非",
    "year": "2018",
    "genre": "剧情/奇幻",
    "category": "悬疑犯罪",
    "url": "./movie-1080.html",
    "cover": "./30.jpg"
  },
  {
    "title": "当心蝙蝠侠第一季",
    "region": "美国",
    "year": "2019",
    "genre": "动作,犯罪,超级英雄",
    "category": "综艺动漫",
    "url": "./movie-1081.html",
    "cover": "./31.jpg"
  },
  {
    "title": "祭品2024",
    "region": "泰国",
    "year": "2024",
    "genre": "恐怖,惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-1082.html",
    "cover": "./32.jpg"
  },
  {
    "title": "千金莫嚣张",
    "region": "中国大陆",
    "year": "2024",
    "genre": "喜剧/爱情",
    "category": "国产精选",
    "url": "./movie-1083.html",
    "cover": "./33.jpg"
  },
  {
    "title": "太空堡垒:大电影",
    "region": "美国",
    "year": "2026",
    "genre": "科幻/动画/战争",
    "category": "海外热播",
    "url": "./movie-1084.html",
    "cover": "./34.jpg"
  },
  {
    "title": "废市",
    "region": "中国大陆",
    "year": "2025",
    "genre": "剧情,黑色幽默",
    "category": "海外热播",
    "url": "./movie-1085.html",
    "cover": "./35.jpg"
  },
  {
    "title": "魔精4",
    "region": "美国",
    "year": "1994",
    "genre": "喜剧,恐怖,科幻",
    "category": "爱情家庭",
    "url": "./movie-1086.html",
    "cover": "./36.jpg"
  },
  {
    "title": "奉旨成亲粤语",
    "region": "中国香港",
    "year": "2024",
    "genre": "喜剧/古装/爱情",
    "category": "海外热播",
    "url": "./movie-1087.html",
    "cover": "./37.jpg"
  },
  {
    "title": "猪皮天堂",
    "region": "美国",
    "year": "2026",
    "genre": "剧情、运动、黑色幽默",
    "category": "经典剧集",
    "url": "./movie-1088.html",
    "cover": "./38.jpg"
  },
  {
    "title": "创:光速战记",
    "region": "美国",
    "year": "2026",
    "genre": "科幻/动作",
    "category": "爱情家庭",
    "url": "./movie-1089.html",
    "cover": "./39.jpg"
  },
  {
    "title": "飞向星星的你",
    "region": "韩国",
    "year": "2025",
    "genre": "科幻",
    "category": "动作冒险",
    "url": "./movie-1090.html",
    "cover": "./40.jpg"
  },
  {
    "title": "黑暗",
    "region": "德国",
    "year": "2017",
    "genre": "悬疑/科幻/惊悚",
    "category": "高清电影",
    "url": "./movie-1091.html",
    "cover": "./41.jpg"
  },
  {
    "title": "易燃的孩子",
    "region": "中国大陆",
    "year": "2023",
    "genre": "剧情,家庭,青少年",
    "category": "经典剧集",
    "url": "./movie-1092.html",
    "cover": "./42.jpg"
  },
  {
    "title": "越光宝盒",
    "region": "中国",
    "year": "2024",
    "genre": "喜剧,奇幻,爱情",
    "category": "国产精选",
    "url": "./movie-1093.html",
    "cover": "./43.jpg"
  },
  {
    "title": "超时空大玩家",
    "region": "中国大陆",
    "year": "2023",
    "genre": "科幻,喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-1094.html",
    "cover": "./44.jpg"
  },
  {
    "title": "魔鬼克星:麻辣异攻队",
    "region": "美国",
    "year": "2026",
    "genre": "动作/喜剧/恐怖",
    "category": "海外热播",
    "url": "./movie-1095.html",
    "cover": "./45.jpg"
  },
  {
    "title": "暗黑",
    "region": "德国",
    "year": "2017",
    "genre": "科幻,悬疑,惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-1096.html",
    "cover": "./46.jpg"
  },
  {
    "title": "猎恶游戏泰语",
    "region": "泰国",
    "year": "2024",
    "genre": "悬疑、犯罪、动作",
    "category": "海外热播",
    "url": "./movie-1097.html",
    "cover": "./47.jpg"
  },
  {
    "title": "乌龙特务战",
    "region": "中国香港",
    "year": "1995",
    "genre": "喜剧,动作",
    "category": "动作冒险",
    "url": "./movie-1098.html",
    "cover": "./48.jpg"
  },
  {
    "title": "詹姆斯·怀特",
    "region": "英国",
    "year": "2023",
    "genre": "传记,剧情,运动",
    "category": "动作冒险",
    "url": "./movie-1099.html",
    "cover": "./49.jpg"
  },
  {
    "title": "寻找彼端的你",
    "region": "中国大陆",
    "year": "2026",
    "genre": "爱情/科幻",
    "category": "综艺动漫",
    "url": "./movie-1100.html",
    "cover": "./50.jpg"
  },
  {
    "title": "风流情孽",
    "region": "中国香港",
    "year": "1993",
    "genre": "剧情/情色",
    "category": "动作冒险",
    "url": "./movie-1101.html",
    "cover": "./51.jpg"
  },
  {
    "title": "女特警2024",
    "region": "中国大陆",
    "year": "2024",
    "genre": "动作,悬疑,刑侦",
    "category": "国产精选",
    "url": "./movie-1102.html",
    "cover": "./52.jpg"
  },
  {
    "title": "情迷佳人",
    "region": "中国香港",
    "year": "1992",
    "genre": "爱情,喜剧,剧情",
    "category": "爱情家庭",
    "url": "./movie-1103.html",
    "cover": "./53.jpg"
  },
  {
    "title": "错误的地方",
    "region": "西班牙",
    "year": "2016",
    "genre": "惊悚/犯罪",
    "category": "爱情家庭",
    "url": "./movie-1104.html",
    "cover": "./54.jpg"
  },
  {
    "title": "蜡笔小新:好别致的影分身",
    "region": "日本",
    "year": "2022",
    "genre": "喜剧,动画",
    "category": "悬疑犯罪",
    "url": "./movie-1105.html",
    "cover": "./55.jpg"
  },
  {
    "title": "马后炮",
    "region": "中国大陆",
    "year": "2025",
    "genre": "喜剧,悬疑",
    "category": "国产精选",
    "url": "./movie-1106.html",
    "cover": "./56.jpg"
  },
  {
    "title": "青春全垒打",
    "region": "日本",
    "year": "2025",
    "genre": "剧情,运动,青春",
    "category": "海外热播",
    "url": "./movie-1107.html",
    "cover": "./57.jpg"
  },
  {
    "title": "乐队唱聊吧",
    "region": "中国大陆",
    "year": "2028",
    "genre": "音乐/脱口秀",
    "category": "悬疑犯罪",
    "url": "./movie-1108.html",
    "cover": "./58.jpg"
  },
  {
    "title": "国家破产之日",
    "region": "韩国",
    "year": "2018",
    "genre": "剧情,历史,金融",
    "category": "高清电影",
    "url": "./movie-1109.html",
    "cover": "./59.jpg"
  },
  {
    "title": "荣誉之季",
    "region": "美国",
    "year": "2025",
    "genre": "剧情、运动、青春",
    "category": "综艺动漫",
    "url": "./movie-1110.html",
    "cover": "./60.jpg"
  },
  {
    "title": "处女塔",
    "region": "土耳其",
    "year": "2026",
    "genre": "爱情/历史/奇幻",
    "category": "爱情家庭",
    "url": "./movie-1111.html",
    "cover": "./61.jpg"
  },
  {
    "title": "我的德里情人",
    "region": "印度",
    "year": "2024",
    "genre": "爱情/剧情",
    "category": "经典剧集",
    "url": "./movie-1112.html",
    "cover": "./62.jpg"
  },
  {
    "title": "毁坏",
    "region": "法国",
    "year": "2019",
    "genre": "惊悚,悬疑",
    "category": "国产精选",
    "url": "./movie-1113.html",
    "cover": "./63.jpg"
  },
  {
    "title": "最美的安排",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情/家庭",
    "category": "悬疑犯罪",
    "url": "./movie-1114.html",
    "cover": "./64.jpg"
  },
  {
    "title": "喜剧 站前漫画",
    "region": "日本",
    "year": "2024",
    "genre": "剧情,喜剧",
    "category": "爱情家庭",
    "url": "./movie-1115.html",
    "cover": "./65.jpg"
  },
  {
    "title": "慈母复仇路",
    "region": "印度",
    "year": "2025",
    "genre": "剧情,动作,犯罪",
    "category": "国产精选",
    "url": "./movie-1116.html",
    "cover": "./66.jpg"
  },
  {
    "title": "神曲",
    "region": "意大利",
    "year": "2025",
    "genre": "奇幻,史诗,动画",
    "category": "动作冒险",
    "url": "./movie-1117.html",
    "cover": "./67.jpg"
  },
  {
    "title": "双子谜情",
    "region": "中国大陆/台湾",
    "year": "2024",
    "genre": "悬疑/家庭",
    "category": "爱情家庭",
    "url": "./movie-1118.html",
    "cover": "./68.jpg"
  },
  {
    "title": "我曾经很有趣",
    "region": "加拿大",
    "year": "2025",
    "genre": "剧情/喜剧",
    "category": "动作冒险",
    "url": "./movie-1119.html",
    "cover": "./69.jpg"
  },
  {
    "title": "蜡像",
    "region": "中国香港",
    "year": "2017",
    "genre": "恐怖,惊悚",
    "category": "爱情家庭",
    "url": "./movie-1120.html",
    "cover": "./70.jpg"
  },
  {
    "title": "夜行列车",
    "region": "中国大陆",
    "year": "2023",
    "genre": "悬疑/犯罪",
    "category": "高清电影",
    "url": "./movie-1121.html",
    "cover": "./71.jpg"
  },
  {
    "title": "心中的杀手",
    "region": "美国",
    "year": "2026",
    "genre": "惊悚/犯罪",
    "category": "爱情家庭",
    "url": "./movie-1122.html",
    "cover": "./72.jpg"
  },
  {
    "title": "圣诞故事",
    "region": "芬兰/德国",
    "year": "2024",
    "genre": "奇幻/家庭",
    "category": "海外热播",
    "url": "./movie-1123.html",
    "cover": "./73.jpg"
  },
  {
    "title": "密室·虐杀·情人魇",
    "region": "日本",
    "year": "2023",
    "genre": "惊悚/悬疑",
    "category": "经典剧集",
    "url": "./movie-1124.html",
    "cover": "./74.jpg"
  },
  {
    "title": "执法者们粤语",
    "region": "中国香港",
    "year": "2024",
    "genre": "警匪/动作",
    "category": "悬疑犯罪",
    "url": "./movie-1125.html",
    "cover": "./75.jpg"
  },
  {
    "title": "柏格曼岛",
    "region": "法国/瑞典",
    "year": "2023",
    "genre": "剧情,文艺,爱情",
    "category": "爱情家庭",
    "url": "./movie-1126.html",
    "cover": "./76.jpg"
  },
  {
    "title": "环太平洋2",
    "region": "美国",
    "year": "2026",
    "genre": "动作,科幻,机甲",
    "category": "经典剧集",
    "url": "./movie-1127.html",
    "cover": "./77.jpg"
  },
  {
    "title": "真爱的谎言之破冰者",
    "region": "中国大陆",
    "year": "2025",
    "genre": "爱情/悬疑/刑侦",
    "category": "综艺动漫",
    "url": "./movie-1128.html",
    "cover": "./78.jpg"
  },
  {
    "title": "活着再见",
    "region": "中国",
    "year": "2023",
    "genre": "悬疑,冒险,灾难",
    "category": "动作冒险",
    "url": "./movie-1129.html",
    "cover": "./79.jpg"
  },
  {
    "title": "够姜小强爱上够靓小奥",
    "region": "中国香港",
    "year": "2002",
    "genre": "爱情,喜剧",
    "category": "爱情家庭",
    "url": "./movie-1130.html",
    "cover": "./80.jpg"
  },
  {
    "title": "初代吸血鬼第二季",
    "region": "美国",
    "year": "2025",
    "genre": "剧情/奇幻/恐怖",
    "category": "综艺动漫",
    "url": "./movie-1131.html",
    "cover": "./81.jpg"
  },
  {
    "title": "致命密室",
    "region": "西班牙",
    "year": "2025",
    "genre": "悬疑,惊悚,犯罪",
    "category": "综艺动漫",
    "url": "./movie-1132.html",
    "cover": "./82.jpg"
  },
  {
    "title": "女孩的战地滑板课",
    "region": "阿富汗/美国",
    "year": "2023",
    "genre": "纪录片,运动,社会",
    "category": "高清电影",
    "url": "./movie-1133.html",
    "cover": "./83.jpg"
  },
  {
    "title": "牢狱鸳鸯",
    "region": "中国香港",
    "year": "2024",
    "genre": "喜剧,犯罪,爱情",
    "category": "海外热播",
    "url": "./movie-1134.html",
    "cover": "./84.jpg"
  },
  {
    "title": "蜂群第一季",
    "region": "美国",
    "year": "2025",
    "genre": "科幻,灾难",
    "category": "国产精选",
    "url": "./movie-1135.html",
    "cover": "./85.jpg"
  },
  {
    "title": "革命往事",
    "region": "意大利/阿尔及利亚",
    "year": "1972",
    "genre": "剧情/战争",
    "category": "爱情家庭",
    "url": "./movie-1136.html",
    "cover": "./86.jpg"
  },
  {
    "title": "十三邀第五季",
    "region": "中国大陆",
    "year": "2021",
    "genre": "访谈/人文",
    "category": "高清电影",
    "url": "./movie-1137.html",
    "cover": "./87.jpg"
  },
  {
    "title": "我们的客栈",
    "region": "中国大陆",
    "year": "2022",
    "genre": "悬疑/奇幻/剧情",
    "category": "爱情家庭",
    "url": "./movie-1138.html",
    "cover": "./88.jpg"
  },
  {
    "title": "希望与反抗",
    "region": "德国",
    "year": "2024",
    "genre": "剧情/历史/战争",
    "category": "国产精选",
    "url": "./movie-1139.html",
    "cover": "./89.jpg"
  },
  {
    "title": "泯灭心智",
    "region": "德国/奥地利",
    "year": "2026",
    "genre": "科幻/心理/惊悚",
    "category": "综艺动漫",
    "url": "./movie-1140.html",
    "cover": "./90.jpg"
  },
  {
    "title": "魔物猎人",
    "region": "日本/美国",
    "year": "2025",
    "genre": "奇幻/动作",
    "category": "动作冒险",
    "url": "./movie-1141.html",
    "cover": "./91.jpg"
  },
  {
    "title": "华丽舞步",
    "region": "中国大陆",
    "year": "2023",
    "genre": "爱情/音乐/竞技",
    "category": "综艺动漫",
    "url": "./movie-1142.html",
    "cover": "./92.jpg"
  },
  {
    "title": "小八路",
    "region": "中国大陆",
    "year": "1974",
    "genre": "战争,儿童,历史",
    "category": "高清电影",
    "url": "./movie-1143.html",
    "cover": "./93.jpg"
  },
  {
    "title": "志乃酱说不出自己的名字",
    "region": "日本",
    "year": "2023",
    "genre": "剧情/校园",
    "category": "动作冒险",
    "url": "./movie-1144.html",
    "cover": "./94.jpg"
  },
  {
    "title": "智能崛起",
    "region": "美国",
    "year": "2025",
    "genre": "科幻/惊悚",
    "category": "国产精选",
    "url": "./movie-1145.html",
    "cover": "./95.jpg"
  },
  {
    "title": "醉木人",
    "region": "中国大陆",
    "year": "2024",
    "genre": "武侠/动作",
    "category": "动作冒险",
    "url": "./movie-1146.html",
    "cover": "./96.jpg"
  },
  {
    "title": "四月四日",
    "region": "日本",
    "year": "2005",
    "genre": "爱情,奇幻,剧情",
    "category": "高清电影",
    "url": "./movie-1147.html",
    "cover": "./97.jpg"
  },
  {
    "title": "天池水怪",
    "region": "中国大陆",
    "year": "2027",
    "genre": "科幻/灾难/冒险",
    "category": "国产精选",
    "url": "./movie-1148.html",
    "cover": "./98.jpg"
  },
  {
    "title": "五个扑水的少年2021",
    "region": "中国大陆",
    "year": "2021",
    "genre": "喜剧,运动",
    "category": "动作冒险",
    "url": "./movie-1149.html",
    "cover": "./99.jpg"
  },
  {
    "title": "星球大战:克隆人的进攻",
    "region": "美国",
    "year": "2024",
    "genre": "动作,科幻,战争",
    "category": "高清电影",
    "url": "./movie-1150.html",
    "cover": "./100.jpg"
  },
  {
    "title": "最美身影第一季",
    "region": "中国大陆",
    "year": "2022",
    "genre": "人文/社会",
    "category": "海外热播",
    "url": "./movie-1151.html",
    "cover": "./101.jpg"
  },
  {
    "title": "倒霉蛋淘金记",
    "region": "中国",
    "year": "2024",
    "genre": "喜剧/冒险",
    "category": "海外热播",
    "url": "./movie-1152.html",
    "cover": "./102.jpg"
  },
  {
    "title": "拂晓的尤娜",
    "region": "日本",
    "year": "2018",
    "genre": "奇幻,冒险,爱情",
    "category": "爱情家庭",
    "url": "./movie-1153.html",
    "cover": "./103.jpg"
  },
  {
    "title": "绝命终结站4",
    "region": "美国",
    "year": "2025",
    "genre": "恐怖,惊悚",
    "category": "综艺动漫",
    "url": "./movie-1154.html",
    "cover": "./104.jpg"
  },
  {
    "title": "血缘寻亲",
    "region": "中国",
    "year": "2024",
    "genre": "剧情/家庭/悬疑",
    "category": "爱情家庭",
    "url": "./movie-1155.html",
    "cover": "./105.jpg"
  },
  {
    "title": "泰版我可能不会爱你国语",
    "region": "泰国",
    "year": "2023",
    "genre": "爱情,剧情",
    "category": "爱情家庭",
    "url": "./movie-1156.html",
    "cover": "./106.jpg"
  },
  {
    "title": "朋友之间国语",
    "region": "中国台湾",
    "year": "2025",
    "genre": "剧情/家庭/友情",
    "category": "综艺动漫",
    "url": "./movie-1157.html",
    "cover": "./107.jpg"
  },
  {
    "title": "烽火姻缘",
    "region": "中国大陆",
    "year": "1991",
    "genre": "战争,爱情",
    "category": "动作冒险",
    "url": "./movie-1158.html",
    "cover": "./108.jpg"
  },
  {
    "title": "金沙江畔",
    "region": "中国大陆",
    "year": "1963",
    "genre": "战争/历史",
    "category": "国产精选",
    "url": "./movie-1159.html",
    "cover": "./109.jpg"
  },
  {
    "title": "偶像",
    "region": "韩国",
    "year": "2019",
    "genre": "剧情,惊悚",
    "category": "海外热播",
    "url": "./movie-1160.html",
    "cover": "./110.jpg"
  },
  {
    "title": "又一春",
    "region": "中国大陆/台湾",
    "year": "2025",
    "genre": "剧情/家庭/LGBT",
    "category": "动作冒险",
    "url": "./movie-1161.html",
    "cover": "./111.jpg"
  },
  {
    "title": "银河守护队2",
    "region": "美国",
    "year": "2025",
    "genre": "科幻,动作,喜剧",
    "category": "海外热播",
    "url": "./movie-1162.html",
    "cover": "./112.jpg"
  },
  {
    "title": "恋爱中的敌人",
    "region": "韩国",
    "year": "2025",
    "genre": "爱情,喜剧,悬疑",
    "category": "爱情家庭",
    "url": "./movie-1163.html",
    "cover": "./113.jpg"
  },
  {
    "title": "弊家伙搞错咗",
    "region": "中国香港",
    "year": "2023",
    "genre": "喜剧,犯罪,黑色幽默",
    "category": "海外热播",
    "url": "./movie-1164.html",
    "cover": "./114.jpg"
  },
  {
    "title": "春满魔宫",
    "region": "中国香港",
    "year": "1991",
    "genre": "动作,古装,奇幻",
    "category": "经典剧集",
    "url": "./movie-1165.html",
    "cover": "./115.jpg"
  },
  {
    "title": "湿油漆",
    "region": "英国",
    "year": "2018",
    "genre": "悬疑,短片,心理",
    "category": "悬疑犯罪",
    "url": "./movie-1166.html",
    "cover": "./116.jpg"
  },
  {
    "title": "少林与武当",
    "region": "中国香港",
    "year": "2024",
    "genre": "动作/武侠",
    "category": "海外热播",
    "url": "./movie-1167.html",
    "cover": "./117.jpg"
  },
  {
    "title": "我的天使",
    "region": "法国",
    "year": "2024",
    "genre": "悬疑,惊悚",
    "category": "经典剧集",
    "url": "./movie-1168.html",
    "cover": "./118.jpg"
  },
  {
    "title": "继续跳舞",
    "region": "中国香港",
    "year": "1988",
    "genre": "剧情,歌舞",
    "category": "经典剧集",
    "url": "./movie-1169.html",
    "cover": "./119.jpg"
  },
  {
    "title": "榄不住的爱",
    "region": "中国大陆",
    "year": "2022",
    "genre": "剧情/运动/家庭",
    "category": "综艺动漫",
    "url": "./movie-1170.html",
    "cover": "./120.jpg"
  },
  {
    "title": "几近完美",
    "region": "法国",
    "year": "2022",
    "genre": "剧情/喜剧/爱情",
    "category": "国产精选",
    "url": "./movie-1171.html",
    "cover": "./121.jpg"
  },
  {
    "title": "亲爱的!加油!",
    "region": "中国台湾",
    "year": "2022",
    "genre": "家庭/喜剧",
    "category": "综艺动漫",
    "url": "./movie-1172.html",
    "cover": "./122.jpg"
  },
  {
    "title": "彼生时刻",
    "region": "中国大陆",
    "year": "2025",
    "genre": "剧情/奇幻",
    "category": "综艺动漫",
    "url": "./movie-1173.html",
    "cover": "./123.jpg"
  },
  {
    "title": "嗜育者",
    "region": "美国",
    "year": "2023",
    "genre": "科幻,惊悚,恐怖",
    "category": "海外热播",
    "url": "./movie-1174.html",
    "cover": "./124.jpg"
  },
  {
    "title": "摔跤不是摔跤",
    "region": "印度",
    "year": "2026",
    "genre": "剧情/运动/社会",
    "category": "悬疑犯罪",
    "url": "./movie-1175.html",
    "cover": "./125.jpg"
  },
  {
    "title": "鱼跃在花见粤语",
    "region": "中国香港",
    "year": "2011",
    "genre": "剧情,美食,家庭",
    "category": "动作冒险",
    "url": "./movie-1176.html",
    "cover": "./126.jpg"
  },
  {
    "title": "黑白金刚",
    "region": "中国香港",
    "year": "1992",
    "genre": "动作,喜剧",
    "category": "经典剧集",
    "url": "./movie-1177.html",
    "cover": "./127.jpg"
  },
  {
    "title": "青春之歌",
    "region": "中国大陆",
    "year": "2023",
    "genre": "青春校园",
    "category": "国产精选",
    "url": "./movie-1178.html",
    "cover": "./128.jpg"
  },
  {
    "title": "夏绿蒂的网",
    "region": "美国",
    "year": "2023",
    "genre": "奇幻/家庭",
    "category": "动作冒险",
    "url": "./movie-1179.html",
    "cover": "./129.jpg"
  },
  {
    "title": "罗马之战1",
    "region": "意大利",
    "year": "2025",
    "genre": "历史,动作,战争",
    "category": "爱情家庭",
    "url": "./movie-1180.html",
    "cover": "./130.jpg"
  },
  {
    "title": "女神捕之迷局",
    "region": "中国内地",
    "year": "2010",
    "genre": "悬疑,古装,动作",
    "category": "动作冒险",
    "url": "./movie-1181.html",
    "cover": "./131.jpg"
  },
  {
    "title": "黑客特攻",
    "region": "中国大陆",
    "year": "2026",
    "genre": "悬疑/犯罪/科技",
    "category": "国产精选",
    "url": "./movie-1182.html",
    "cover": "./132.jpg"
  },
  {
    "title": "眼泪之盐",
    "region": "法国",
    "year": "2023",
    "genre": "爱情、剧情",
    "category": "悬疑犯罪",
    "url": "./movie-1183.html",
    "cover": "./133.jpg"
  },
  {
    "title": "第二次也很美",
    "region": "中国大陆",
    "year": "2024",
    "genre": "爱情/家庭/喜剧",
    "category": "爱情家庭",
    "url": "./movie-1184.html",
    "cover": "./134.jpg"
  },
  {
    "title": "巨人",
    "region": "西班牙",
    "year": "2017",
    "genre": "奇幻,剧情,历史",
    "category": "动作冒险",
    "url": "./movie-1185.html",
    "cover": "./135.jpg"
  },
  {
    "title": "千万别松手",
    "region": "美国/英国",
    "year": "2025",
    "genre": "惊悚灾难",
    "category": "综艺动漫",
    "url": "./movie-1186.html",
    "cover": "./136.jpg"
  },
  {
    "title": "铁血战士:杀戮之王",
    "region": "美国",
    "year": "2028",
    "genre": "动作、科幻、恐怖",
    "category": "高清电影",
    "url": "./movie-1187.html",
    "cover": "./137.jpg"
  },
  {
    "title": "网际网路之子",
    "region": "中国台湾",
    "year": "2027",
    "genre": "科幻",
    "category": "悬疑犯罪",
    "url": "./movie-1188.html",
    "cover": "./138.jpg"
  },
  {
    "title": "非法制裁",
    "region": "美国",
    "year": "2007",
    "genre": "动作/惊悚",
    "category": "动作冒险",
    "url": "./movie-1189.html",
    "cover": "./139.jpg"
  },
  {
    "title": "誓言2022",
    "region": "韩国",
    "year": "2025",
    "genre": "悬疑,犯罪",
    "category": "综艺动漫",
    "url": "./movie-1190.html",
    "cover": "./140.jpg"
  },
  {
    "title": "阿娜尔罕",
    "region": "中国大陆",
    "year": "2025",
    "genre": "剧情,历史,歌舞",
    "category": "动作冒险",
    "url": "./movie-1191.html",
    "cover": "./141.jpg"
  },
  {
    "title": "街舞青春",
    "region": "中国大陆",
    "year": "2023",
    "genre": "歌舞,青春",
    "category": "爱情家庭",
    "url": "./movie-1192.html",
    "cover": "./142.jpg"
  },
  {
    "title": "扭转奇迹",
    "region": "美国",
    "year": "2024",
    "genre": "剧情,奇幻",
    "category": "爱情家庭",
    "url": "./movie-1193.html",
    "cover": "./143.jpg"
  },
  {
    "title": "芳华",
    "region": "中国大陆",
    "year": "2017",
    "genre": "剧情/历史/爱情",
    "category": "动作冒险",
    "url": "./movie-1194.html",
    "cover": "./144.jpg"
  },
  {
    "title": "往关塔那摩之路",
    "region": "英国/美国",
    "year": "2006",
    "genre": "剧情/战争/政治",
    "category": "动作冒险",
    "url": "./movie-1195.html",
    "cover": "./145.jpg"
  },
  {
    "title": "夏目友人帐",
    "region": "日本",
    "year": "2025",
    "genre": "奇幻治愈",
    "category": "海外热播",
    "url": "./movie-1196.html",
    "cover": "./146.jpg"
  },
  {
    "title": "银簪子",
    "region": "中国台湾",
    "year": "2024",
    "genre": "历史,家庭,悬疑",
    "category": "综艺动漫",
    "url": "./movie-1197.html",
    "cover": "./147.jpg"
  },
  {
    "title": "刑档内幕",
    "region": "中国香港",
    "year": "1997",
    "genre": "犯罪/纪录片式剧情",
    "category": "国产精选",
    "url": "./movie-1198.html",
    "cover": "./148.jpg"
  },
  {
    "title": "小小北极熊2神秘岛",
    "region": "德国",
    "year": "2024",
    "genre": "动画、冒险、家庭",
    "category": "高清电影",
    "url": "./movie-1199.html",
    "cover": "./149.jpg"
  },
  {
    "title": "凯文·哈特:听我解释",
    "region": "美国",
    "year": "2024",
    "genre": "喜剧/脱口秀",
    "category": "高清电影",
    "url": "./movie-1200.html",
    "cover": "./150.jpg"
  },
  {
    "title": "忠奸道",
    "region": "中国香港",
    "year": "2004",
    "genre": "犯罪、动作、剧情",
    "category": "爱情家庭",
    "url": "./movie-1201.html",
    "cover": "./1.jpg"
  },
  {
    "title": "初恋太空男孩",
    "region": "中国大陆",
    "year": "2025",
    "genre": "科幻、爱情",
    "category": "国产精选",
    "url": "./movie-1202.html",
    "cover": "./2.jpg"
  },
  {
    "title": "我们是",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情历史",
    "category": "经典剧集",
    "url": "./movie-1203.html",
    "cover": "./3.jpg"
  },
  {
    "title": "欺诈猎人",
    "region": "日本",
    "year": "2006",
    "genre": "犯罪/悬疑",
    "category": "动作冒险",
    "url": "./movie-1204.html",
    "cover": "./4.jpg"
  },
  {
    "title": "火鸟的沼泽",
    "region": "俄罗斯",
    "year": "2023",
    "genre": "剧情/奇幻/悬疑",
    "category": "爱情家庭",
    "url": "./movie-1205.html",
    "cover": "./5.jpg"
  },
  {
    "title": "麻木2015",
    "region": "加拿大",
    "year": "2015",
    "genre": "剧情/心理",
    "category": "国产精选",
    "url": "./movie-1206.html",
    "cover": "./6.jpg"
  },
  {
    "title": "飞天小猴",
    "region": "中国大陆",
    "year": "2017",
    "genre": "儿童,奇幻,冒险",
    "category": "高清电影",
    "url": "./movie-1207.html",
    "cover": "./7.jpg"
  },
  {
    "title": "甜心杀手",
    "region": "美国",
    "year": "2025",
    "genre": "动作/犯罪/黑色幽默",
    "category": "爱情家庭",
    "url": "./movie-1208.html",
    "cover": "./8.jpg"
  },
  {
    "title": "顶楼第二季",
    "region": "韩国",
    "year": "2024",
    "genre": "剧情,悬疑",
    "category": "海外热播",
    "url": "./movie-1209.html",
    "cover": "./9.jpg"
  },
  {
    "title": "凉宫春日的忧郁",
    "region": "日本",
    "year": "2006",
    "genre": "科幻/校园",
    "category": "动作冒险",
    "url": "./movie-1210.html",
    "cover": "./10.jpg"
  },
  {
    "title": "亚当等大人2",
    "region": "美国",
    "year": "2025",
    "genre": "喜剧、家庭",
    "category": "动作冒险",
    "url": "./movie-1211.html",
    "cover": "./11.jpg"
  },
  {
    "title": "四雄夺锦",
    "region": "中国台湾",
    "year": "2021",
    "genre": "历史,商战",
    "category": "海外热播",
    "url": "./movie-1212.html",
    "cover": "./12.jpg"
  },
  {
    "title": "四弘誓愿",
    "region": "日本",
    "year": "2024",
    "genre": "历史/宗教/动作",
    "category": "爱情家庭",
    "url": "./movie-1213.html",
    "cover": "./13.jpg"
  },
  {
    "title": "斯派克岛冒险之旅",
    "region": "英国",
    "year": "2023",
    "genre": "冒险/家庭",
    "category": "经典剧集",
    "url": "./movie-1214.html",
    "cover": "./14.jpg"
  },
  {
    "title": "朗园",
    "region": "中国",
    "year": "2024",
    "genre": "剧情,家庭",
    "category": "高清电影",
    "url": "./movie-1215.html",
    "cover": "./15.jpg"
  },
  {
    "title": "凛子小姐想试试",
    "region": "日本",
    "year": "2024",
    "genre": "剧情,成人,女性",
    "category": "爱情家庭",
    "url": "./movie-1216.html",
    "cover": "./16.jpg"
  },
  {
    "title": "男人百分百",
    "region": "中国大陆",
    "year": "2024",
    "genre": "喜剧,爱情,奇幻",
    "category": "动作冒险",
    "url": "./movie-1217.html",
    "cover": "./17.jpg"
  },
  {
    "title": "节奏组",
    "region": "英国",
    "year": "2026",
    "genre": "动作,惊悚",
    "category": "爱情家庭",
    "url": "./movie-1218.html",
    "cover": "./18.jpg"
  },
  {
    "title": "县长当村官",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情,乡村,现实",
    "category": "国产精选",
    "url": "./movie-1219.html",
    "cover": "./19.jpg"
  },
  {
    "title": "茶馆",
    "region": "中国大陆",
    "year": "1982",
    "genre": "剧情,历史",
    "category": "海外热播",
    "url": "./movie-1220.html",
    "cover": "./20.jpg"
  },
  {
    "title": "婚姻相对论",
    "region": "美国",
    "year": "2018",
    "genre": "剧情/悬疑/惊悚",
    "category": "动作冒险",
    "url": "./movie-1221.html",
    "cover": "./21.jpg"
  },
  {
    "title": "进球吧!少年",
    "region": "中国大陆",
    "year": "2027",
    "genre": "运动/励志/喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-1222.html",
    "cover": "./22.jpg"
  },
  {
    "title": "半城明媚半城雨第一季",
    "region": "中国大陆",
    "year": "2023",
    "genre": "奇幻,古装",
    "category": "悬疑犯罪",
    "url": "./movie-1223.html",
    "cover": "./23.jpg"
  },
  {
    "title": "我不卖身我卖子宫",
    "region": "中国香港",
    "year": "2008",
    "genre": "剧情/社会",
    "category": "动作冒险",
    "url": "./movie-1224.html",
    "cover": "./24.jpg"
  },
  {
    "title": "亚美尼亚行路遥",
    "region": "亚美尼亚/法国",
    "year": "2024",
    "genre": "公路/剧情/家庭",
    "category": "综艺动漫",
    "url": "./movie-1225.html",
    "cover": "./25.jpg"
  },
  {
    "title": "人间一天",
    "region": "中国大陆",
    "year": "2026",
    "genre": "奇幻/家庭",
    "category": "动作冒险",
    "url": "./movie-1226.html",
    "cover": "./26.jpg"
  },
  {
    "title": "嬲",
    "region": "中国香港",
    "year": "2025",
    "genre": "剧情/家庭",
    "category": "国产精选",
    "url": "./movie-1227.html",
    "cover": "./27.jpg"
  },
  {
    "title": "洪熙官之少林五祖",
    "region": "中国香港",
    "year": "2026",
    "genre": "动作武侠",
    "category": "高清电影",
    "url": "./movie-1228.html",
    "cover": "./28.jpg"
  },
  {
    "title": "来自星星的少年",
    "region": "日本",
    "year": "2024",
    "genre": "科幻,剧情,青春",
    "category": "动作冒险",
    "url": "./movie-1229.html",
    "cover": "./29.jpg"
  },
  {
    "title": "白雪溜冰团",
    "region": "中国大陆",
    "year": "2022",
    "genre": "剧情/运动/青春",
    "category": "综艺动漫",
    "url": "./movie-1230.html",
    "cover": "./30.jpg"
  },
  {
    "title": "吧女斯黛拉",
    "region": "法国",
    "year": "2023",
    "genre": "剧情,爱情",
    "category": "悬疑犯罪",
    "url": "./movie-1231.html",
    "cover": "./31.jpg"
  },
  {
    "title": "绿色直接行动",
    "region": "德国",
    "year": "2024",
    "genre": "剧情,惊悚",
    "category": "高清电影",
    "url": "./movie-1232.html",
    "cover": "./32.jpg"
  },
  {
    "title": "被控告的人",
    "region": "美国",
    "year": "2022",
    "genre": "剧情/惊悚",
    "category": "综艺动漫",
    "url": "./movie-1233.html",
    "cover": "./33.jpg"
  },
  {
    "title": "残酷的意图",
    "region": "美国",
    "year": "1999",
    "genre": "剧情、爱情、惊悚",
    "category": "爱情家庭",
    "url": "./movie-1234.html",
    "cover": "./34.jpg"
  },
  {
    "title": "印第安大屠杀",
    "region": "美国",
    "year": "2025",
    "genre": "历史/剧情/西部",
    "category": "高清电影",
    "url": "./movie-1235.html",
    "cover": "./35.jpg"
  },
  {
    "title": "杰克遇挫",
    "region": "美国",
    "year": "2026",
    "genre": "喜剧/动作/冒险",
    "category": "综艺动漫",
    "url": "./movie-1236.html",
    "cover": "./36.jpg"
  },
  {
    "title": "陌生人2",
    "region": "中国大陆",
    "year": "2024",
    "genre": "悬疑,犯罪",
    "category": "悬疑犯罪",
    "url": "./movie-1237.html",
    "cover": "./37.jpg"
  },
  {
    "title": "对某飞行员的追忆",
    "region": "日本",
    "year": "2021",
    "genre": "战争/爱情/冒险",
    "category": "经典剧集",
    "url": "./movie-1238.html",
    "cover": "./38.jpg"
  },
  {
    "title": "鬼也笑",
    "region": "新加坡",
    "year": "2024",
    "genre": "恐怖/喜剧",
    "category": "海外热播",
    "url": "./movie-1239.html",
    "cover": "./39.jpg"
  },
  {
    "title": "监狱犬计划",
    "region": "中国台湾",
    "year": "2023",
    "genre": "剧情/家庭/社会",
    "category": "动作冒险",
    "url": "./movie-1240.html",
    "cover": "./40.jpg"
  },
  {
    "title": "红。白。蓝",
    "region": "法国",
    "year": "2024",
    "genre": "剧情,文艺",
    "category": "动作冒险",
    "url": "./movie-1241.html",
    "cover": "./41.jpg"
  },
  {
    "title": "叠影狙击",
    "region": "中国香港",
    "year": "2024",
    "genre": "动作、悬疑、犯罪",
    "category": "动作冒险",
    "url": "./movie-1242.html",
    "cover": "./42.jpg"
  },
  {
    "title": "我不卖身我卖子宫",
    "region": "中国香港",
    "year": "2025",
    "genre": "剧情,伦理,女性",
    "category": "爱情家庭",
    "url": "./movie-1243.html",
    "cover": "./43.jpg"
  },
  {
    "title": "印度式救援",
    "region": "印度",
    "year": "2019",
    "genre": "动作,惊悚",
    "category": "综艺动漫",
    "url": "./movie-1244.html",
    "cover": "./44.jpg"
  },
  {
    "title": "犬爱奇缘",
    "region": "中国大陆",
    "year": "2024",
    "genre": "喜剧/爱情/家庭",
    "category": "悬疑犯罪",
    "url": "./movie-1245.html",
    "cover": "./45.jpg"
  },
  {
    "title": "印度性爱欲",
    "region": "印度",
    "year": "2025",
    "genre": "剧情,情色",
    "category": "综艺动漫",
    "url": "./movie-1246.html",
    "cover": "./46.jpg"
  },
  {
    "title": "草裙舞",
    "region": "美国",
    "year": "2009",
    "genre": "动画,短片",
    "category": "高清电影",
    "url": "./movie-1247.html",
    "cover": "./47.jpg"
  },
  {
    "title": "时光留声",
    "region": "中国台湾",
    "year": "2024",
    "genre": "奇幻",
    "category": "经典剧集",
    "url": "./movie-1248.html",
    "cover": "./48.jpg"
  },
  {
    "title": "基督最后的诱惑",
    "region": "美国/加拿大",
    "year": "1988",
    "genre": "剧情,宗教",
    "category": "动作冒险",
    "url": "./movie-1249.html",
    "cover": "./49.jpg"
  },
  {
    "title": "威尼斯疑魂",
    "region": "意大利/英国",
    "year": "2023",
    "genre": "悬疑,惊悚",
    "category": "经典剧集",
    "url": "./movie-1250.html",
    "cover": "./50.jpg"
  },
  {
    "title": "万亿风暴",
    "region": "美国",
    "year": "2026",
    "genre": "惊悚,悬疑,金融",
    "category": "悬疑犯罪",
    "url": "./movie-1251.html",
    "cover": "./51.jpg"
  },
  {
    "title": "300杀手",
    "region": "美国",
    "year": "2025",
    "genre": "动作/惊悚/犯罪",
    "category": "经典剧集",
    "url": "./movie-1252.html",
    "cover": "./52.jpg"
  },
  {
    "title": "安娜情欲史",
    "region": "丹麦/法国",
    "year": "2025",
    "genre": "剧情/爱情",
    "category": "悬疑犯罪",
    "url": "./movie-1253.html",
    "cover": "./53.jpg"
  },
  {
    "title": "偷月迷情",
    "region": "中国香港",
    "year": "2025",
    "genre": "爱情/悬疑",
    "category": "海外热播",
    "url": "./movie-1254.html",
    "cover": "./54.jpg"
  },
  {
    "title": "博物馆奇妙夜3",
    "region": "美国",
    "year": "2024",
    "genre": "奇幻、喜剧、冒险",
    "category": "动作冒险",
    "url": "./movie-1255.html",
    "cover": "./55.jpg"
  },
  {
    "title": "火锅之王",
    "region": "中国大陆",
    "year": "2024",
    "genre": "喜剧,剧情,美食",
    "category": "爱情家庭",
    "url": "./movie-1256.html",
    "cover": "./56.jpg"
  },
  {
    "title": "拦截终结者",
    "region": "美国",
    "year": "2027",
    "genre": "动作/科幻",
    "category": "高清电影",
    "url": "./movie-1257.html",
    "cover": "./57.jpg"
  },
  {
    "title": "科洛弗悖论",
    "region": "美国",
    "year": "2018",
    "genre": "科幻、惊悚、悬疑",
    "category": "综艺动漫",
    "url": "./movie-1258.html",
    "cover": "./58.jpg"
  },
  {
    "title": "开心汉堡店第十三季",
    "region": "美国",
    "year": "2022",
    "genre": "喜剧/动画",
    "category": "海外热播",
    "url": "./movie-1259.html",
    "cover": "./59.jpg"
  },
  {
    "title": "道士上山",
    "region": "中国大陆",
    "year": "2015",
    "genre": "剧情/奇幻/动作",
    "category": "海外热播",
    "url": "./movie-1260.html",
    "cover": "./60.jpg"
  },
  {
    "title": "最后的晚餐2025",
    "region": "中国大陆",
    "year": "2025",
    "genre": "悬疑/剧情/犯罪",
    "category": "综艺动漫",
    "url": "./movie-1261.html",
    "cover": "./61.jpg"
  },
  {
    "title": "早餐中国第四季",
    "region": "中国大陆",
    "year": "2024",
    "genre": "纪录片",
    "category": "爱情家庭",
    "url": "./movie-1262.html",
    "cover": "./62.jpg"
  },
  {
    "title": "第一次圣诞节",
    "region": "英国",
    "year": "2024",
    "genre": "喜剧,爱情,家庭",
    "category": "动作冒险",
    "url": "./movie-1263.html",
    "cover": "./63.jpg"
  },
  {
    "title": "太阳,不远",
    "region": "日本",
    "year": "2024",
    "genre": "剧情、灾难、家庭",
    "category": "海外热播",
    "url": "./movie-1264.html",
    "cover": "./64.jpg"
  },
  {
    "title": "鼓槌",
    "region": "印度",
    "year": "2025",
    "genre": "剧情/音乐",
    "category": "高清电影",
    "url": "./movie-1265.html",
    "cover": "./65.jpg"
  },
  {
    "title": "丧湿",
    "region": "日本",
    "year": "2023",
    "genre": "恐怖、喜剧",
    "category": "综艺动漫",
    "url": "./movie-1266.html",
    "cover": "./66.jpg"
  },
  {
    "title": "地下阿西西",
    "region": "意大利",
    "year": "2025",
    "genre": "悬疑/历史/惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-1267.html",
    "cover": "./67.jpg"
  },
  {
    "title": "平静的速度",
    "region": "日本",
    "year": "2026",
    "genre": "治愈生活",
    "category": "爱情家庭",
    "url": "./movie-1268.html",
    "cover": "./68.jpg"
  },
  {
    "title": "后宫",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情,古装",
    "category": "海外热播",
    "url": "./movie-1269.html",
    "cover": "./69.jpg"
  },
  {
    "title": "荒岛酒池",
    "region": "中国大陆",
    "year": "2020",
    "genre": "喜剧/冒险",
    "category": "国产精选",
    "url": "./movie-1270.html",
    "cover": "./70.jpg"
  },
  {
    "title": "关于一个女孩",
    "region": "英国",
    "year": "2002",
    "genre": "剧情/喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-1271.html",
    "cover": "./71.jpg"
  },
  {
    "title": "生死船票",
    "region": "中国香港",
    "year": "1998",
    "genre": "犯罪,剧情,动作",
    "category": "动作冒险",
    "url": "./movie-1272.html",
    "cover": "./72.jpg"
  },
  {
    "title": "乐与路",
    "region": "日本",
    "year": "2024",
    "genre": "剧情,音乐",
    "category": "海外热播",
    "url": "./movie-1273.html",
    "cover": "./73.jpg"
  },
  {
    "title": "吉祥不高兴",
    "region": "中国大陆",
    "year": "2023",
    "genre": "喜剧/爱情/古装",
    "category": "爱情家庭",
    "url": "./movie-1274.html",
    "cover": "./74.jpg"
  },
  {
    "title": "愤路狂逃",
    "region": "美国/英国",
    "year": "2026",
    "genre": "动作,惊悚,公路",
    "category": "经典剧集",
    "url": "./movie-1275.html",
    "cover": "./75.jpg"
  },
  {
    "title": "女战士艾菲菈&吉里鸥菈",
    "region": "日本",
    "year": "2024",
    "genre": "奇幻/动作/百合",
    "category": "动作冒险",
    "url": "./movie-1276.html",
    "cover": "./76.jpg"
  },
  {
    "title": "甜甜圈之王",
    "region": "加拿大",
    "year": "2025",
    "genre": "喜剧、传记",
    "category": "高清电影",
    "url": "./movie-1277.html",
    "cover": "./77.jpg"
  },
  {
    "title": "银发的阿基多",
    "region": "日本",
    "year": "2006",
    "genre": "动画/科幻/冒险",
    "category": "综艺动漫",
    "url": "./movie-1278.html",
    "cover": "./78.jpg"
  },
  {
    "title": "飞行大王",
    "region": "美国",
    "year": "2025",
    "genre": "冒险,传记,运动",
    "category": "海外热播",
    "url": "./movie-1279.html",
    "cover": "./79.jpg"
  },
  {
    "title": "国家",
    "region": "中国大陆",
    "year": "2026",
    "genre": "历史/战争/剧情",
    "category": "高清电影",
    "url": "./movie-1280.html",
    "cover": "./80.jpg"
  },
  {
    "title": "起诉教宗",
    "region": "意大利/法国",
    "year": "2024",
    "genre": "剧情/法律",
    "category": "经典剧集",
    "url": "./movie-1281.html",
    "cover": "./81.jpg"
  },
  {
    "title": "斩、",
    "region": "日本",
    "year": "2024",
    "genre": "动作/武士/剧情",
    "category": "悬疑犯罪",
    "url": "./movie-1282.html",
    "cover": "./82.jpg"
  },
  {
    "title": "大马帮",
    "region": "中国大陆",
    "year": "2025",
    "genre": "冒险,历史,剧情",
    "category": "爱情家庭",
    "url": "./movie-1283.html",
    "cover": "./83.jpg"
  },
  {
    "title": "金缕情歌",
    "region": "中国大陆",
    "year": "2024",
    "genre": "爱情/悬疑",
    "category": "爱情家庭",
    "url": "./movie-1284.html",
    "cover": "./84.jpg"
  },
  {
    "title": "我在看着你",
    "region": "美国",
    "year": "2017",
    "genre": "恐怖,惊悚,犯罪",
    "category": "经典剧集",
    "url": "./movie-1285.html",
    "cover": "./85.jpg"
  },
  {
    "title": "借镜杀人",
    "region": "英国",
    "year": "2024",
    "genre": "悬疑,犯罪,推理",
    "category": "海外热播",
    "url": "./movie-1286.html",
    "cover": "./86.jpg"
  },
  {
    "title": "午夜过后",
    "region": "西班牙",
    "year": "2024",
    "genre": "爱情/奇幻/惊悚",
    "category": "高清电影",
    "url": "./movie-1287.html",
    "cover": "./87.jpg"
  },
  {
    "title": "密噬派对",
    "region": "美国",
    "year": "2024",
    "genre": "悬疑惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-1288.html",
    "cover": "./88.jpg"
  },
  {
    "title": "布朗蒂姊妹",
    "region": "美国",
    "year": "2024",
    "genre": "剧情,悬疑,家庭",
    "category": "综艺动漫",
    "url": "./movie-1289.html",
    "cover": "./89.jpg"
  },
  {
    "title": "特战行动队",
    "region": "韩国",
    "year": "2024",
    "genre": "动作,犯罪,悬疑",
    "category": "高清电影",
    "url": "./movie-1290.html",
    "cover": "./90.jpg"
  },
  {
    "title": "现实",
    "region": "法国",
    "year": "2015",
    "genre": "悬疑",
    "category": "悬疑犯罪",
    "url": "./movie-1291.html",
    "cover": "./91.jpg"
  },
  {
    "title": "野兽之瞳",
    "region": "中国香港",
    "year": "2024",
    "genre": "动作,犯罪,剧情",
    "category": "动作冒险",
    "url": "./movie-1292.html",
    "cover": "./92.jpg"
  },
  {
    "title": "好莱坞队列",
    "region": "美国",
    "year": "1937",
    "genre": "喜剧/歌舞/爱情",
    "category": "高清电影",
    "url": "./movie-1293.html",
    "cover": "./93.jpg"
  },
  {
    "title": "厄勒克特拉,我的爱",
    "region": "希腊/法国",
    "year": "2023",
    "genre": "剧情/爱情/悬疑",
    "category": "悬疑犯罪",
    "url": "./movie-1294.html",
    "cover": "./94.jpg"
  },
  {
    "title": "英俊的哈利",
    "region": "德国",
    "year": "2026",
    "genre": "剧情",
    "category": "综艺动漫",
    "url": "./movie-1295.html",
    "cover": "./95.jpg"
  },
  {
    "title": "寒涛俪影",
    "region": "美国",
    "year": "1942",
    "genre": "爱情/悬疑",
    "category": "爱情家庭",
    "url": "./movie-1296.html",
    "cover": "./96.jpg"
  },
  {
    "title": "他乡客",
    "region": "中国香港",
    "year": "1985",
    "genre": "剧情",
    "category": "爱情家庭",
    "url": "./movie-1297.html",
    "cover": "./97.jpg"
  },
  {
    "title": "惩罚",
    "region": "韩国",
    "year": "2025",
    "genre": "悬疑/惊悚",
    "category": "高清电影",
    "url": "./movie-1298.html",
    "cover": "./98.jpg"
  },
  {
    "title": "夜间女妖",
    "region": "德国",
    "year": "2018",
    "genre": "恐怖/悬疑",
    "category": "动作冒险",
    "url": "./movie-1299.html",
    "cover": "./99.jpg"
  },
  {
    "title": "美声歌鸡",
    "region": "法国",
    "year": "2025",
    "genre": "喜剧,音乐,家庭",
    "category": "悬疑犯罪",
    "url": "./movie-1300.html",
    "cover": "./100.jpg"
  },
  {
    "title": "一个体面的男人",
    "region": "法国",
    "year": "2011",
    "genre": "剧情,伦理",
    "category": "国产精选",
    "url": "./movie-1301.html",
    "cover": "./101.jpg"
  },
  {
    "title": "职场小烈第五季",
    "region": "日本",
    "year": "2023",
    "genre": "喜剧,日常,励志",
    "category": "爱情家庭",
    "url": "./movie-1302.html",
    "cover": "./102.jpg"
  },
  {
    "title": "夜总会奇杀案",
    "region": "中国香港",
    "year": "1997",
    "genre": "悬疑,犯罪,惊悚",
    "category": "经典剧集",
    "url": "./movie-1303.html",
    "cover": "./103.jpg"
  },
  {
    "title": "火蓝刀锋",
    "region": "中国",
    "year": "2013",
    "genre": "军旅/动作/励志",
    "category": "经典剧集",
    "url": "./movie-1304.html",
    "cover": "./104.jpg"
  },
  {
    "title": "机器人之恋",
    "region": "韩国",
    "year": "2006",
    "genre": "爱情,科幻,剧情",
    "category": "高清电影",
    "url": "./movie-1305.html",
    "cover": "./105.jpg"
  },
  {
    "title": "执迷",
    "region": "中国大陆",
    "year": "2025",
    "genre": "悬疑,心理,爱情",
    "category": "国产精选",
    "url": "./movie-1306.html",
    "cover": "./106.jpg"
  },
  {
    "title": "风流大丈夫",
    "region": "中国香港",
    "year": "2024",
    "genre": "喜剧、剧情、伦理",
    "category": "经典剧集",
    "url": "./movie-1307.html",
    "cover": "./107.jpg"
  },
  {
    "title": "寻找阿曼达",
    "region": "英国",
    "year": "2024",
    "genre": "悬疑,剧情,心理",
    "category": "经典剧集",
    "url": "./movie-1308.html",
    "cover": "./108.jpg"
  },
  {
    "title": "垂乳女",
    "region": "日本",
    "year": "2027",
    "genre": "恐怖/民俗",
    "category": "海外热播",
    "url": "./movie-1309.html",
    "cover": "./109.jpg"
  },
  {
    "title": "百变飞车",
    "region": "美国",
    "year": "2024",
    "genre": "动作/科幻/冒险",
    "category": "高清电影",
    "url": "./movie-1310.html",
    "cover": "./110.jpg"
  },
  {
    "title": "管制塔",
    "region": "日本",
    "year": "2023",
    "genre": "悬疑/科幻",
    "category": "爱情家庭",
    "url": "./movie-1311.html",
    "cover": "./111.jpg"
  },
  {
    "title": "星光杀机",
    "region": "中国大陆",
    "year": "2025",
    "genre": "悬疑/惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-1312.html",
    "cover": "./112.jpg"
  },
  {
    "title": "极黑的布伦希尔特",
    "region": "日本",
    "year": "2014",
    "genre": "科幻,悬疑,惊悚,爱情",
    "category": "动作冒险",
    "url": "./movie-1313.html",
    "cover": "./113.jpg"
  },
  {
    "title": "至尊红颜",
    "region": "中国香港",
    "year": "2024",
    "genre": "古装、宫廷、悬疑",
    "category": "综艺动漫",
    "url": "./movie-1314.html",
    "cover": "./114.jpg"
  },
  {
    "title": "我们拥有夜晚",
    "region": "美国",
    "year": "2025",
    "genre": "剧情,犯罪",
    "category": "综艺动漫",
    "url": "./movie-1315.html",
    "cover": "./115.jpg"
  },
  {
    "title": "尘与雪",
    "region": "中国大陆",
    "year": "2027",
    "genre": "悬疑、犯罪、剧情",
    "category": "高清电影",
    "url": "./movie-1316.html",
    "cover": "./116.jpg"
  },
  {
    "title": "日出东方",
    "region": "中国大陆",
    "year": "2026",
    "genre": "剧情/历史",
    "category": "综艺动漫",
    "url": "./movie-1317.html",
    "cover": "./117.jpg"
  },
  {
    "title": "信心主宰",
    "region": "美国",
    "year": "2024",
    "genre": "悬疑,犯罪",
    "category": "高清电影",
    "url": "./movie-1318.html",
    "cover": "./118.jpg"
  },
  {
    "title": "谁知女子心",
    "region": "中国香港",
    "year": "2024",
    "genre": "剧情,女性,社会",
    "category": "海外热播",
    "url": "./movie-1319.html",
    "cover": "./119.jpg"
  },
  {
    "title": "夫人,大可不必",
    "region": "中国大陆",
    "year": "2023",
    "genre": "喜剧,爱情,古装",
    "category": "综艺动漫",
    "url": "./movie-1320.html",
    "cover": "./120.jpg"
  },
  {
    "title": "第一大总统",
    "region": "中国大陆",
    "year": "2011",
    "genre": "历史/传记",
    "category": "经典剧集",
    "url": "./movie-1321.html",
    "cover": "./121.jpg"
  },
  {
    "title": "七虎断魂枪",
    "region": "中国香港",
    "year": "2024",
    "genre": "动作/武侠/剧情",
    "category": "高清电影",
    "url": "./movie-1322.html",
    "cover": "./122.jpg"
  },
  {
    "title": "香港奇案雾夜屠夫",
    "region": "中国香港",
    "year": "1992",
    "genre": "犯罪/惊悚/恐怖",
    "category": "国产精选",
    "url": "./movie-1323.html",
    "cover": "./123.jpg"
  },
  {
    "title": "史酷比:神秘的开始",
    "region": "美国",
    "year": "2009",
    "genre": "动画,喜剧,家庭,悬疑",
    "category": "爱情家庭",
    "url": "./movie-1324.html",
    "cover": "./124.jpg"
  },
  {
    "title": "战国妖狐千魔混沌篇",
    "region": "日本",
    "year": "2026",
    "genre": "奇幻/战斗/热血",
    "category": "动作冒险",
    "url": "./movie-1325.html",
    "cover": "./125.jpg"
  },
  {
    "title": "俘虏国度",
    "region": "美国",
    "year": "2019",
    "genre": "科幻/惊悚/动作",
    "category": "海外热播",
    "url": "./movie-1326.html",
    "cover": "./126.jpg"
  },
  {
    "title": "摩登神探",
    "region": "中国香港",
    "year": "2024",
    "genre": "喜剧/动作/犯罪",
    "category": "经典剧集",
    "url": "./movie-1327.html",
    "cover": "./127.jpg"
  },
  {
    "title": "戏梦空间",
    "region": "德国",
    "year": "2024",
    "genre": "剧情/奇幻",
    "category": "海外热播",
    "url": "./movie-1328.html",
    "cover": "./128.jpg"
  },
  {
    "title": "一个好人粤语",
    "region": "香港",
    "year": "2023",
    "genre": "剧情/家庭/伦理",
    "category": "高清电影",
    "url": "./movie-1329.html",
    "cover": "./129.jpg"
  },
  {
    "title": "命运小说家",
    "region": "西班牙",
    "year": "2024",
    "genre": "悬疑/剧情",
    "category": "海外热播",
    "url": "./movie-1330.html",
    "cover": "./130.jpg"
  },
  {
    "title": "疯狂粉丝王",
    "region": "香港",
    "year": "2007",
    "genre": "喜剧",
    "category": "高清电影",
    "url": "./movie-1331.html",
    "cover": "./131.jpg"
  },
  {
    "title": "米歇拉·吉罗:句句属实",
    "region": "法国",
    "year": "2025",
    "genre": "喜剧/脱口秀",
    "category": "高清电影",
    "url": "./movie-1332.html",
    "cover": "./132.jpg"
  },
  {
    "title": "利特斯",
    "region": "英国",
    "year": "2009",
    "genre": "犯罪/剧情",
    "category": "悬疑犯罪",
    "url": "./movie-1333.html",
    "cover": "./133.jpg"
  },
  {
    "title": "红杏痴魂",
    "region": "中国香港",
    "year": "1993",
    "genre": "剧情,情色",
    "category": "综艺动漫",
    "url": "./movie-1334.html",
    "cover": "./134.jpg"
  },
  {
    "title": "刺客教条2:余烬",
    "region": "美国",
    "year": "2025",
    "genre": "动作,科幻,冒险",
    "category": "国产精选",
    "url": "./movie-1335.html",
    "cover": "./135.jpg"
  },
  {
    "title": "请君",
    "region": "中国大陆",
    "year": "2024",
    "genre": "奇幻,爱情,民国",
    "category": "动作冒险",
    "url": "./movie-1336.html",
    "cover": "./136.jpg"
  },
  {
    "title": "侠岚",
    "region": "中国",
    "year": "2027",
    "genre": "动画/动作/奇幻",
    "category": "海外热播",
    "url": "./movie-1337.html",
    "cover": "./137.jpg"
  },
  {
    "title": "超自然捉怪事务所",
    "region": "中国台湾",
    "year": "2025",
    "genre": "奇幻喜剧",
    "category": "爱情家庭",
    "url": "./movie-1338.html",
    "cover": "./138.jpg"
  },
  {
    "title": "怪谈协会",
    "region": "香港",
    "year": "2023",
    "genre": "恐怖,悬疑,惊悚",
    "category": "海外热播",
    "url": "./movie-1339.html",
    "cover": "./139.jpg"
  },
  {
    "title": "魔翼杀手5",
    "region": "美国",
    "year": "2007",
    "genre": "恐怖/奇幻",
    "category": "爱情家庭",
    "url": "./movie-1340.html",
    "cover": "./140.jpg"
  },
  {
    "title": "辣死你妈",
    "region": "马来西亚",
    "year": "2022",
    "genre": "喜剧,恐怖",
    "category": "经典剧集",
    "url": "./movie-1341.html",
    "cover": "./141.jpg"
  },
  {
    "title": "最弱无败的神装机龙",
    "region": "日本",
    "year": "2027",
    "genre": "动画/奇幻/战斗",
    "category": "经典剧集",
    "url": "./movie-1342.html",
    "cover": "./142.jpg"
  },
  {
    "title": "菜鸟老警第七季",
    "region": "美国",
    "year": "2026",
    "genre": "剧情/犯罪",
    "category": "爱情家庭",
    "url": "./movie-1343.html",
    "cover": "./143.jpg"
  },
  {
    "title": "只有我进入的隐藏地下城",
    "region": "日本",
    "year": "2024",
    "genre": "动画,奇幻,冒险",
    "category": "动作冒险",
    "url": "./movie-1344.html",
    "cover": "./144.jpg"
  },
  {
    "title": "远大前程2016",
    "region": "英国",
    "year": "2016",
    "genre": "剧情,爱情",
    "category": "综艺动漫",
    "url": "./movie-1345.html",
    "cover": "./145.jpg"
  },
  {
    "title": "愤怒管理",
    "region": "美国",
    "year": "2025",
    "genre": "剧情/悬疑",
    "category": "高清电影",
    "url": "./movie-1346.html",
    "cover": "./146.jpg"
  },
  {
    "title": "神圣之门",
    "region": "意大利/梵蒂冈",
    "year": "2026",
    "genre": "惊悚/宗教",
    "category": "高清电影",
    "url": "./movie-1347.html",
    "cover": "./147.jpg"
  },
  {
    "title": "雷神小队",
    "region": "美国",
    "year": "2024",
    "genre": "动作/喜剧",
    "category": "爱情家庭",
    "url": "./movie-1348.html",
    "cover": "./148.jpg"
  },
  {
    "title": "克拉克森的农场第一季",
    "region": "英国",
    "year": "2021",
    "genre": "纪录片/喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-1349.html",
    "cover": "./149.jpg"
  },
  {
    "title": "救世国语",
    "region": "台湾",
    "year": "2026",
    "genre": "科幻/悬疑/社会",
    "category": "海外热播",
    "url": "./movie-1350.html",
    "cover": "./150.jpg"
  },
  {
    "title": "山尘拂过童年牧歌",
    "region": "中国大陆",
    "year": "2028",
    "genre": "剧情/家庭/文艺",
    "category": "海外热播",
    "url": "./movie-1351.html",
    "cover": "./1.jpg"
  },
  {
    "title": "含笑九泉",
    "region": "中国香港",
    "year": "2024",
    "genre": "惊悚,犯罪,剧情",
    "category": "经典剧集",
    "url": "./movie-1352.html",
    "cover": "./2.jpg"
  },
  {
    "title": "神奇兵营42 第一季",
    "region": "中国大陆",
    "year": "2025",
    "genre": "喜剧/战争/奇幻",
    "category": "动作冒险",
    "url": "./movie-1353.html",
    "cover": "./3.jpg"
  },
  {
    "title": "一世独尊",
    "region": "中国大陆",
    "year": "2024",
    "genre": "古装,玄幻,权谋",
    "category": "国产精选",
    "url": "./movie-1354.html",
    "cover": "./4.jpg"
  },
  {
    "title": "关键杀机",
    "region": "美国",
    "year": "2019",
    "genre": "悬疑/犯罪",
    "category": "经典剧集",
    "url": "./movie-1355.html",
    "cover": "./5.jpg"
  },
  {
    "title": "爱我请留言粤语",
    "region": "中国香港",
    "year": "2025",
    "genre": "爱情/都市",
    "category": "动作冒险",
    "url": "./movie-1356.html",
    "cover": "./6.jpg"
  },
  {
    "title": "史蒂文斯小姐",
    "region": "美国",
    "year": "2016",
    "genre": "剧情、师生、文艺",
    "category": "国产精选",
    "url": "./movie-1357.html",
    "cover": "./7.jpg"
  },
  {
    "title": "狙击女妙探",
    "region": "美国",
    "year": "2024",
    "genre": "动作/喜剧",
    "category": "经典剧集",
    "url": "./movie-1358.html",
    "cover": "./8.jpg"
  },
  {
    "title": "连环计中计",
    "region": "中国大陆",
    "year": "2023",
    "genre": "悬疑,犯罪,动作",
    "category": "综艺动漫",
    "url": "./movie-1359.html",
    "cover": "./9.jpg"
  },
  {
    "title": "黄土地",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情,历史",
    "category": "综艺动漫",
    "url": "./movie-1360.html",
    "cover": "./10.jpg"
  },
  {
    "title": "单身剩蛋",
    "region": "中国香港",
    "year": "2023",
    "genre": "喜剧/爱情",
    "category": "动作冒险",
    "url": "./movie-1361.html",
    "cover": "./11.jpg"
  },
  {
    "title": "缩小人",
    "region": "美国",
    "year": "2027",
    "genre": "科幻,惊悚",
    "category": "海外热播",
    "url": "./movie-1362.html",
    "cover": "./12.jpg"
  },
  {
    "title": "乡下",
    "region": "法国",
    "year": "2019",
    "genre": "剧情,文艺",
    "category": "综艺动漫",
    "url": "./movie-1363.html",
    "cover": "./13.jpg"
  },
  {
    "title": "星期六杀手",
    "region": "中国香港",
    "year": "1991",
    "genre": "动作",
    "category": "综艺动漫",
    "url": "./movie-1364.html",
    "cover": "./14.jpg"
  },
  {
    "title": "月亮宝石",
    "region": "英国",
    "year": "2023",
    "genre": "悬疑,冒险",
    "category": "经典剧集",
    "url": "./movie-1365.html",
    "cover": "./15.jpg"
  },
  {
    "title": "巨鱼",
    "region": "澳大利亚",
    "year": "2025",
    "genre": "灾难冒险",
    "category": "国产精选",
    "url": "./movie-1366.html",
    "cover": "./16.jpg"
  },
  {
    "title": "魔殿屠龙",
    "region": "中国香港/中国大陆",
    "year": "2026",
    "genre": "奇幻,动作",
    "category": "综艺动漫",
    "url": "./movie-1367.html",
    "cover": "./17.jpg"
  },
  {
    "title": "凶劫601航班",
    "region": "美国/英国",
    "year": "2027",
    "genre": "惊悚/灾难/悬疑",
    "category": "经典剧集",
    "url": "./movie-1368.html",
    "cover": "./18.jpg"
  },
  {
    "title": "测量员",
    "region": "法国",
    "year": "2023",
    "genre": "剧情/冒险",
    "category": "动作冒险",
    "url": "./movie-1369.html",
    "cover": "./19.jpg"
  },
  {
    "title": "黑帮教父",
    "region": "美国",
    "year": "2024",
    "genre": "犯罪,剧情,动作",
    "category": "动作冒险",
    "url": "./movie-1370.html",
    "cover": "./20.jpg"
  },
  {
    "title": "卡片斗士翔",
    "region": "日本",
    "year": "2009",
    "genre": "动画",
    "category": "爱情家庭",
    "url": "./movie-1371.html",
    "cover": "./21.jpg"
  },
  {
    "title": "音乐战争",
    "region": "英国",
    "year": "2025",
    "genre": "音乐,剧情,战争",
    "category": "海外热播",
    "url": "./movie-1372.html",
    "cover": "./22.jpg"
  },
  {
    "title": "致真理",
    "region": "韩国",
    "year": "2025",
    "genre": "悬疑,惊悚,剧情",
    "category": "综艺动漫",
    "url": "./movie-1373.html",
    "cover": "./23.jpg"
  },
  {
    "title": "黄雀在后!",
    "region": "中国大陆",
    "year": "2024",
    "genre": "犯罪/悬疑",
    "category": "国产精选",
    "url": "./movie-1374.html",
    "cover": "./24.jpg"
  },
  {
    "title": "呼啸山庄1939",
    "region": "美国",
    "year": "1939",
    "genre": "剧情,爱情,哥特",
    "category": "经典剧集",
    "url": "./movie-1375.html",
    "cover": "./25.jpg"
  },
  {
    "title": "核磁共振",
    "region": "罗马尼亚",
    "year": "2022",
    "genre": "剧情,惊悚",
    "category": "高清电影",
    "url": "./movie-1376.html",
    "cover": "./26.jpg"
  },
  {
    "title": "爱情面前谁怕谁",
    "region": "中国大陆",
    "year": "2014",
    "genre": "爱情/喜剧",
    "category": "综艺动漫",
    "url": "./movie-1377.html",
    "cover": "./27.jpg"
  },
  {
    "title": "少爷和我",
    "region": "中国大陆",
    "year": "2024",
    "genre": "喜剧,剧情,年代",
    "category": "国产精选",
    "url": "./movie-1378.html",
    "cover": "./28.jpg"
  },
  {
    "title": "巨龙怪谭",
    "region": "英国",
    "year": "2024",
    "genre": "奇幻,剧情,神秘",
    "category": "爱情家庭",
    "url": "./movie-1379.html",
    "cover": "./29.jpg"
  },
  {
    "title": "漂亮宝贝直播中",
    "region": "中国台湾",
    "year": "2019",
    "genre": "惊悚,悬疑",
    "category": "国产精选",
    "url": "./movie-1380.html",
    "cover": "./30.jpg"
  },
  {
    "title": "女人在家",
    "region": "中国大陆",
    "year": "2025",
    "genre": "剧情,家庭,女性",
    "category": "海外热播",
    "url": "./movie-1381.html",
    "cover": "./31.jpg"
  },
  {
    "title": "败金财神",
    "region": "香港",
    "year": "1992",
    "genre": "喜剧/奇幻/贺岁",
    "category": "海外热播",
    "url": "./movie-1382.html",
    "cover": "./32.jpg"
  },
  {
    "title": "夜猫子",
    "region": "中国大陆",
    "year": "2025",
    "genre": "悬疑,犯罪,黑色电影",
    "category": "高清电影",
    "url": "./movie-1383.html",
    "cover": "./33.jpg"
  },
  {
    "title": "超体",
    "region": "法国",
    "year": "2024",
    "genre": "动作,科幻,哲学",
    "category": "悬疑犯罪",
    "url": "./movie-1384.html",
    "cover": "./34.jpg"
  },
  {
    "title": "我的老板是小猪",
    "region": "韩国",
    "year": "2025",
    "genre": "浪漫爱情喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-1385.html",
    "cover": "./35.jpg"
  },
  {
    "title": "皮相猎影",
    "region": "美国",
    "year": "2026",
    "genre": "犯罪/惊悚",
    "category": "经典剧集",
    "url": "./movie-1386.html",
    "cover": "./36.jpg"
  },
  {
    "title": "地球再发育",
    "region": "美国",
    "year": "2025",
    "genre": "科幻/冒险",
    "category": "海外热播",
    "url": "./movie-1387.html",
    "cover": "./37.jpg"
  },
  {
    "title": "犹太狮子",
    "region": "以色列,美国",
    "year": "2025",
    "genre": "历史,传记,战争",
    "category": "海外热播",
    "url": "./movie-1388.html",
    "cover": "./38.jpg"
  },
  {
    "title": "小镇警事",
    "region": "中国大陆",
    "year": "2014",
    "genre": "剧情/喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-1389.html",
    "cover": "./39.jpg"
  },
  {
    "title": "最美时光",
    "region": "中国香港",
    "year": "2024",
    "genre": "爱情/年代",
    "category": "高清电影",
    "url": "./movie-1390.html",
    "cover": "./40.jpg"
  },
  {
    "title": "记忆风暴",
    "region": "美国",
    "year": "2012",
    "genre": "科幻/悬疑/动作",
    "category": "动作冒险",
    "url": "./movie-1391.html",
    "cover": "./41.jpg"
  },
  {
    "title": "月出之战",
    "region": "中国大陆",
    "year": "2026",
    "genre": "科幻/战争",
    "category": "国产精选",
    "url": "./movie-1392.html",
    "cover": "./42.jpg"
  },
  {
    "title": "降临",
    "region": "美国",
    "year": "2016",
    "genre": "科幻,剧情",
    "category": "海外热播",
    "url": "./movie-1393.html",
    "cover": "./43.jpg"
  },
  {
    "title": "偷窥者2021",
    "region": "美国",
    "year": "2021",
    "genre": "惊悚,悬疑",
    "category": "动作冒险",
    "url": "./movie-1394.html",
    "cover": "./44.jpg"
  },
  {
    "title": "心痛",
    "region": "中国香港",
    "year": "2009",
    "genre": "剧情/爱情",
    "category": "悬疑犯罪",
    "url": "./movie-1395.html",
    "cover": "./45.jpg"
  },
  {
    "title": "星光照万家",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情,农村",
    "category": "悬疑犯罪",
    "url": "./movie-1396.html",
    "cover": "./46.jpg"
  },
  {
    "title": "电幻国度",
    "region": "美国",
    "year": "2026",
    "genre": "科幻,冒险",
    "category": "高清电影",
    "url": "./movie-1397.html",
    "cover": "./47.jpg"
  },
  {
    "title": "美好的一年",
    "region": "英国/美国",
    "year": "2006",
    "genre": "剧情/喜剧/爱情",
    "category": "悬疑犯罪",
    "url": "./movie-1398.html",
    "cover": "./48.jpg"
  },
  {
    "title": "熊熊乐园第二部",
    "region": "中国大陆",
    "year": "2017",
    "genre": "动画,儿童",
    "category": "爱情家庭",
    "url": "./movie-1399.html",
    "cover": "./49.jpg"
  },
  {
    "title": "皇天后土",
    "region": "中国台湾",
    "year": "2026",
    "genre": "历史,家庭,剧情",
    "category": "国产精选",
    "url": "./movie-1400.html",
    "cover": "./50.jpg"
  },
  {
    "title": "地下城里的人们",
    "region": "日本",
    "year": "2023",
    "genre": "奇幻,冒险,日常",
    "category": "高清电影",
    "url": "./movie-1401.html",
    "cover": "./51.jpg"
  },
  {
    "title": "碧玉离魂",
    "region": "中国台湾",
    "year": "2025",
    "genre": "惊悚/悬疑/民俗",
    "category": "海外热播",
    "url": "./movie-1402.html",
    "cover": "./52.jpg"
  },
  {
    "title": "灵丹妙药不及你",
    "region": "中国大陆",
    "year": "2023",
    "genre": "古装/爱情",
    "category": "经典剧集",
    "url": "./movie-1403.html",
    "cover": "./53.jpg"
  },
  {
    "title": "野生狼性",
    "region": "中国大陆",
    "year": "2024",
    "genre": "商战,职场,励志",
    "category": "经典剧集",
    "url": "./movie-1404.html",
    "cover": "./54.jpg"
  },
  {
    "title": "过界男女国语",
    "region": "中国香港",
    "year": "2023",
    "genre": "爱情/剧情/社会",
    "category": "国产精选",
    "url": "./movie-1405.html",
    "cover": "./55.jpg"
  },
  {
    "title": "豹头王传说",
    "region": "日本",
    "year": "2025",
    "genre": "奇幻,冒险,战争",
    "category": "综艺动漫",
    "url": "./movie-1406.html",
    "cover": "./56.jpg"
  },
  {
    "title": "胖子的铁皮缠结",
    "region": "中国大陆",
    "year": "2025",
    "genre": "剧情/文艺/黑色幽默",
    "category": "海外热播",
    "url": "./movie-1407.html",
    "cover": "./57.jpg"
  },
  {
    "title": "花漾牌手",
    "region": "中国台湾",
    "year": "2023",
    "genre": "喜剧,青春",
    "category": "动作冒险",
    "url": "./movie-1408.html",
    "cover": "./58.jpg"
  },
  {
    "title": "心灵深处的音乐",
    "region": "英国",
    "year": "2024",
    "genre": "剧情/音乐/家庭",
    "category": "高清电影",
    "url": "./movie-1409.html",
    "cover": "./59.jpg"
  },
  {
    "title": "座头市关所破",
    "region": "日本",
    "year": "2025",
    "genre": "动作,时代剧",
    "category": "海外热播",
    "url": "./movie-1410.html",
    "cover": "./60.jpg"
  },
  {
    "title": "搏击迷城",
    "region": "美国",
    "year": "2025",
    "genre": "动作,科幻",
    "category": "经典剧集",
    "url": "./movie-1411.html",
    "cover": "./61.jpg"
  },
  {
    "title": "祸水",
    "region": "中国香港",
    "year": "2025",
    "genre": "爱情,悬疑",
    "category": "动作冒险",
    "url": "./movie-1412.html",
    "cover": "./62.jpg"
  },
  {
    "title": "征服者威廉",
    "region": "英国/法国",
    "year": "2025",
    "genre": "历史/传记/动作",
    "category": "高清电影",
    "url": "./movie-1413.html",
    "cover": "./63.jpg"
  },
  {
    "title": "至尊黑杰克",
    "region": "中国香港",
    "year": "1995",
    "genre": "动作/犯罪/赌术",
    "category": "海外热播",
    "url": "./movie-1414.html",
    "cover": "./64.jpg"
  },
  {
    "title": "雷迪克编年史:黑暗女神",
    "region": "美国",
    "year": "2026",
    "genre": "动作,科幻,惊悚",
    "category": "海外热播",
    "url": "./movie-1415.html",
    "cover": "./65.jpg"
  },
  {
    "title": "乌龙巡警",
    "region": "中国香港",
    "year": "2023",
    "genre": "喜剧,动作",
    "category": "爱情家庭",
    "url": "./movie-1416.html",
    "cover": "./66.jpg"
  },
  {
    "title": "四个羁基的男人",
    "region": "台湾",
    "year": "2025",
    "genre": "剧情,喜剧",
    "category": "经典剧集",
    "url": "./movie-1417.html",
    "cover": "./67.jpg"
  },
  {
    "title": "骗神!骗鬼!金先达",
    "region": "中国台湾",
    "year": "2024",
    "genre": "喜剧,奇幻",
    "category": "高清电影",
    "url": "./movie-1418.html",
    "cover": "./68.jpg"
  },
  {
    "title": "肮脏的心",
    "region": "韩国",
    "year": "2023",
    "genre": "悬疑,惊悚",
    "category": "综艺动漫",
    "url": "./movie-1419.html",
    "cover": "./69.jpg"
  },
  {
    "title": "勾魂女郎",
    "region": "美国",
    "year": "2025",
    "genre": "恐怖/奇幻",
    "category": "动作冒险",
    "url": "./movie-1420.html",
    "cover": "./70.jpg"
  },
  {
    "title": "欲潮",
    "region": "日本",
    "year": "2025",
    "genre": "情色,剧情,心理",
    "category": "经典剧集",
    "url": "./movie-1421.html",
    "cover": "./71.jpg"
  },
  {
    "title": "那时便值得去世",
    "region": "日本",
    "year": "1971",
    "genre": "剧情,动作,犯罪",
    "category": "经典剧集",
    "url": "./movie-1422.html",
    "cover": "./72.jpg"
  },
  {
    "title": "女法医手记之来访者",
    "region": "中国大陆",
    "year": "2019",
    "genre": "悬疑/犯罪",
    "category": "动作冒险",
    "url": "./movie-1423.html",
    "cover": "./73.jpg"
  },
  {
    "title": "谁寄锦书来",
    "region": "中国大陆",
    "year": "2026",
    "genre": "爱情/悬疑",
    "category": "国产精选",
    "url": "./movie-1424.html",
    "cover": "./74.jpg"
  },
  {
    "title": "风驰电掣",
    "region": "美国",
    "year": "1994",
    "genre": "动作/犯罪/惊悚",
    "category": "海外热播",
    "url": "./movie-1425.html",
    "cover": "./75.jpg"
  },
  {
    "title": "画江湖之不良人",
    "region": "中国大陆",
    "year": "2021",
    "genre": "武侠,奇幻",
    "category": "海外热播",
    "url": "./movie-1426.html",
    "cover": "./76.jpg"
  },
  {
    "title": "张大千敦煌传奇",
    "region": "中国大陆",
    "year": "2005",
    "genre": "传记,历史,剧情",
    "category": "经典剧集",
    "url": "./movie-1427.html",
    "cover": "./77.jpg"
  },
  {
    "title": "野兽刑警",
    "region": "中国香港",
    "year": "2021",
    "genre": "动作,犯罪",
    "category": "海外热播",
    "url": "./movie-1428.html",
    "cover": "./78.jpg"
  },
  {
    "title": "末世指令",
    "region": "美国",
    "year": "2026",
    "genre": "科幻,动作,惊悚",
    "category": "经典剧集",
    "url": "./movie-1429.html",
    "cover": "./79.jpg"
  },
  {
    "title": "记得15",
    "region": "中国大陆",
    "year": "2025",
    "genre": "悬疑/青春",
    "category": "动作冒险",
    "url": "./movie-1430.html",
    "cover": "./80.jpg"
  },
  {
    "title": "重奏",
    "region": "法国",
    "year": "2023",
    "genre": "音乐,剧情",
    "category": "高清电影",
    "url": "./movie-1431.html",
    "cover": "./81.jpg"
  },
  {
    "title": "少年安乐死",
    "region": "荷兰",
    "year": "2024",
    "genre": "剧情,伦理,家庭",
    "category": "综艺动漫",
    "url": "./movie-1432.html",
    "cover": "./82.jpg"
  },
  {
    "title": "热海风云",
    "region": "日本",
    "year": "2024",
    "genre": "悬疑/商战",
    "category": "海外热播",
    "url": "./movie-1433.html",
    "cover": "./83.jpg"
  },
  {
    "title": "老而嚟癫",
    "region": "中国香港",
    "year": "2001",
    "genre": "剧情/喜剧",
    "category": "综艺动漫",
    "url": "./movie-1434.html",
    "cover": "./84.jpg"
  },
  {
    "title": "泣船威利",
    "region": "美国",
    "year": "2028",
    "genre": "喜剧/冒险",
    "category": "综艺动漫",
    "url": "./movie-1435.html",
    "cover": "./85.jpg"
  },
  {
    "title": "李天保娶亲",
    "region": "中国大陆",
    "year": "2023",
    "genre": "喜剧,戏曲,古装",
    "category": "海外热播",
    "url": "./movie-1436.html",
    "cover": "./86.jpg"
  },
  {
    "title": "指定幸存者第三季",
    "region": "美国",
    "year": "2019",
    "genre": "政治/惊悚",
    "category": "爱情家庭",
    "url": "./movie-1437.html",
    "cover": "./87.jpg"
  },
  {
    "title": "在我姐姐的婚纱里",
    "region": "中国台湾",
    "year": "2025",
    "genre": "剧情,家庭",
    "category": "经典剧集",
    "url": "./movie-1438.html",
    "cover": "./88.jpg"
  },
  {
    "title": "流浪者之歌1988",
    "region": "中国台湾",
    "year": "1988",
    "genre": "剧情/历史",
    "category": "爱情家庭",
    "url": "./movie-1439.html",
    "cover": "./89.jpg"
  },
  {
    "title": "圣灵",
    "region": "韩国",
    "year": "2022",
    "genre": "悬疑、惊悚",
    "category": "海外热播",
    "url": "./movie-1440.html",
    "cover": "./90.jpg"
  },
  {
    "title": "独女君未见第一季",
    "region": "中国大陆",
    "year": "2024",
    "genre": "古装/权谋/女性",
    "category": "高清电影",
    "url": "./movie-1441.html",
    "cover": "./91.jpg"
  },
  {
    "title": "奥图玛塔",
    "region": "西班牙",
    "year": "2025",
    "genre": "科幻/悬疑",
    "category": "动作冒险",
    "url": "./movie-1442.html",
    "cover": "./92.jpg"
  },
  {
    "title": "我的女神女汉子",
    "region": "中国大陆",
    "year": "2022",
    "genre": "喜剧,爱情,职场",
    "category": "悬疑犯罪",
    "url": "./movie-1443.html",
    "cover": "./93.jpg"
  },
  {
    "title": "志在出位",
    "region": "中国香港",
    "year": "1991",
    "genre": "喜剧,动作",
    "category": "动作冒险",
    "url": "./movie-1444.html",
    "cover": "./94.jpg"
  },
  {
    "title": "欢乐一家亲第十季",
    "region": "美国",
    "year": "2025",
    "genre": "喜剧",
    "category": "综艺动漫",
    "url": "./movie-1445.html",
    "cover": "./95.jpg"
  },
  {
    "title": "后裔3",
    "region": "美国",
    "year": "2019",
    "genre": "家庭/奇幻/冒险/歌舞",
    "category": "经典剧集",
    "url": "./movie-1446.html",
    "cover": "./96.jpg"
  },
  {
    "title": "大刀王五",
    "region": "中国大陆",
    "year": "2024",
    "genre": "动作,历史,武侠",
    "category": "国产精选",
    "url": "./movie-1447.html",
    "cover": "./97.jpg"
  },
  {
    "title": "达利博尔",
    "region": "捷克",
    "year": "2023",
    "genre": "剧情/音乐/历史",
    "category": "国产精选",
    "url": "./movie-1448.html",
    "cover": "./98.jpg"
  },
  {
    "title": "灵魂餐厅",
    "region": "美国",
    "year": "2021",
    "genre": "奇幻/剧情",
    "category": "海外热播",
    "url": "./movie-1449.html",
    "cover": "./99.jpg"
  },
  {
    "title": "求助!我把朋友变小了",
    "region": "美国",
    "year": "2025",
    "genre": "喜剧,科幻,家庭",
    "category": "高清电影",
    "url": "./movie-1450.html",
    "cover": "./100.jpg"
  },
  {
    "title": "新婚公寓",
    "region": "韩国",
    "year": "2023",
    "genre": "悬疑/惊悚/爱情",
    "category": "海外热播",
    "url": "./movie-1451.html",
    "cover": "./101.jpg"
  },
  {
    "title": "她的危险男友",
    "region": "中国大陆",
    "year": "2024",
    "genre": "爱情,悬疑,犯罪",
    "category": "悬疑犯罪",
    "url": "./movie-1452.html",
    "cover": "./102.jpg"
  },
  {
    "title": "夏普的滑铁卢",
    "region": "英国",
    "year": "2026",
    "genre": "战争/历史/动作",
    "category": "悬疑犯罪",
    "url": "./movie-1453.html",
    "cover": "./103.jpg"
  },
  {
    "title": "心灵家园",
    "region": "中国大陆",
    "year": "2026",
    "genre": "剧情,家庭",
    "category": "高清电影",
    "url": "./movie-1454.html",
    "cover": "./104.jpg"
  },
  {
    "title": "龙鸣",
    "region": "中国大陆",
    "year": "2026",
    "genre": "奇幻/动作",
    "category": "悬疑犯罪",
    "url": "./movie-1455.html",
    "cover": "./105.jpg"
  },
  {
    "title": "狼传说 銀河帝国的滅亡",
    "region": "日本",
    "year": "1988",
    "genre": "科幻,战争,动画",
    "category": "综艺动漫",
    "url": "./movie-1456.html",
    "cover": "./106.jpg"
  },
  {
    "title": "强扭的瓜",
    "region": "中国大陆",
    "year": "2024",
    "genre": "喜剧,爱情",
    "category": "综艺动漫",
    "url": "./movie-1457.html",
    "cover": "./107.jpg"
  },
  {
    "title": "剖析丑闻",
    "region": "英国",
    "year": "2024",
    "genre": "剧情/悬疑/犯罪",
    "category": "爱情家庭",
    "url": "./movie-1458.html",
    "cover": "./108.jpg"
  },
  {
    "title": "花豹少女队:勇闯西班牙",
    "region": "美国",
    "year": "2023",
    "genre": "音乐/冒险",
    "category": "爱情家庭",
    "url": "./movie-1459.html",
    "cover": "./109.jpg"
  },
  {
    "title": "喜欢您粤语",
    "region": "中国香港",
    "year": "2025",
    "genre": "爱情/喜剧",
    "category": "高清电影",
    "url": "./movie-1460.html",
    "cover": "./110.jpg"
  },
  {
    "title": "来自纽约的女孩",
    "region": "美国",
    "year": "2026",
    "genre": "喜剧,剧情",
    "category": "海外热播",
    "url": "./movie-1461.html",
    "cover": "./111.jpg"
  },
  {
    "title": "孤注一掷",
    "region": "中国",
    "year": "2023",
    "genre": "犯罪/剧情",
    "category": "海外热播",
    "url": "./movie-1462.html",
    "cover": "./112.jpg"
  },
  {
    "title": "姊姊",
    "region": "中国香港",
    "year": "2024",
    "genre": "剧情/家庭",
    "category": "国产精选",
    "url": "./movie-1463.html",
    "cover": "./113.jpg"
  },
  {
    "title": "派遣女公关彩华",
    "region": "日本",
    "year": "2023",
    "genre": "剧情/悬疑",
    "category": "悬疑犯罪",
    "url": "./movie-1464.html",
    "cover": "./114.jpg"
  },
  {
    "title": "请服药",
    "region": "中国大陆",
    "year": "2022",
    "genre": "悬疑、心理、科幻",
    "category": "爱情家庭",
    "url": "./movie-1465.html",
    "cover": "./115.jpg"
  },
  {
    "title": "剑侠唐璜",
    "region": "西班牙",
    "year": "2025",
    "genre": "动作、冒险、传记",
    "category": "海外热播",
    "url": "./movie-1466.html",
    "cover": "./116.jpg"
  },
  {
    "title": "绝密档案:迷失世界",
    "region": "美国",
    "year": "2025",
    "genre": "科幻,悬疑",
    "category": "动作冒险",
    "url": "./movie-1467.html",
    "cover": "./117.jpg"
  },
  {
    "title": "爱并离别着",
    "region": "中国台湾",
    "year": "2023",
    "genre": "爱情,家庭",
    "category": "经典剧集",
    "url": "./movie-1468.html",
    "cover": "./118.jpg"
  },
  {
    "title": "玩命关头",
    "region": "美国",
    "year": "2021",
    "genre": "动作",
    "category": "海外热播",
    "url": "./movie-1469.html",
    "cover": "./119.jpg"
  },
  {
    "title": "极限旋风",
    "region": "美国",
    "year": "2015",
    "genre": "动作/冒险/运动",
    "category": "动作冒险",
    "url": "./movie-1470.html",
    "cover": "./120.jpg"
  },
  {
    "title": "动态漫画·绝世古尊第二季",
    "region": "中国大陆",
    "year": "2025",
    "genre": "动画,玄幻,冒险",
    "category": "经典剧集",
    "url": "./movie-1471.html",
    "cover": "./121.jpg"
  },
  {
    "title": "开往幸福的列车",
    "region": "中国大陆",
    "year": "2026",
    "genre": "剧情/家庭/公路",
    "category": "经典剧集",
    "url": "./movie-1472.html",
    "cover": "./122.jpg"
  },
  {
    "title": "西班牙公主第一季",
    "region": "西班牙/英国",
    "year": "2024",
    "genre": "历史/爱情",
    "category": "高清电影",
    "url": "./movie-1473.html",
    "cover": "./123.jpg"
  },
  {
    "title": "妳是我的姐妹",
    "region": "中国台湾",
    "year": "2023",
    "genre": "剧情/家庭/同性",
    "category": "高清电影",
    "url": "./movie-1474.html",
    "cover": "./124.jpg"
  },
  {
    "title": "好友有喜",
    "region": "英国",
    "year": "2024",
    "genre": "喜剧/剧情",
    "category": "经典剧集",
    "url": "./movie-1475.html",
    "cover": "./125.jpg"
  },
  {
    "title": "圣诞末班车",
    "region": "中国大陆",
    "year": "2024",
    "genre": "奇幻,爱情,剧情",
    "category": "综艺动漫",
    "url": "./movie-1476.html",
    "cover": "./126.jpg"
  },
  {
    "title": "女王帝国",
    "region": "英国/美国",
    "year": "2021",
    "genre": "历史/宫廷/女性",
    "category": "高清电影",
    "url": "./movie-1477.html",
    "cover": "./127.jpg"
  },
  {
    "title": "销售奇姬",
    "region": "中国台湾",
    "year": "2023",
    "genre": "喜剧,励志",
    "category": "国产精选",
    "url": "./movie-1478.html",
    "cover": "./128.jpg"
  },
  {
    "title": "麻烦终结者",
    "region": "韩国",
    "year": "2025",
    "genre": "动作喜剧",
    "category": "综艺动漫",
    "url": "./movie-1479.html",
    "cover": "./129.jpg"
  },
  {
    "title": "吓我一跳",
    "region": "中国大陆",
    "year": "2024",
    "genre": "惊悚/喜剧",
    "category": "综艺动漫",
    "url": "./movie-1480.html",
    "cover": "./130.jpg"
  },
  {
    "title": "法外风云粤语",
    "region": "中国香港",
    "year": "2024",
    "genre": "剧情/律政/动作",
    "category": "动作冒险",
    "url": "./movie-1481.html",
    "cover": "./131.jpg"
  },
  {
    "title": "太空百合战斗姬",
    "region": "日本",
    "year": "2022",
    "genre": "科幻,动作,百合",
    "category": "爱情家庭",
    "url": "./movie-1482.html",
    "cover": "./132.jpg"
  },
  {
    "title": "玉茗茶骨",
    "region": "中国大陆",
    "year": "2023",
    "genre": "古装,悬疑,爱情",
    "category": "动作冒险",
    "url": "./movie-1483.html",
    "cover": "./133.jpg"
  },
  {
    "title": "新居风暴",
    "region": "韩国",
    "year": "2017",
    "genre": "悬疑/惊悚/剧情",
    "category": "国产精选",
    "url": "./movie-1484.html",
    "cover": "./134.jpg"
  },
  {
    "title": "飞龙引凤",
    "region": "中国香港",
    "year": "2025",
    "genre": "喜剧,爱情,古装,戏曲",
    "category": "动作冒险",
    "url": "./movie-1485.html",
    "cover": "./135.jpg"
  },
  {
    "title": "王尔德的婚礼",
    "region": "英国",
    "year": "2024",
    "genre": "爱情喜剧",
    "category": "高清电影",
    "url": "./movie-1486.html",
    "cover": "./136.jpg"
  },
  {
    "title": "孽欲人魔",
    "region": "美国",
    "year": "2025",
    "genre": "恐怖/惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-1487.html",
    "cover": "./137.jpg"
  },
  {
    "title": "性业大亨",
    "region": "美国",
    "year": "2022",
    "genre": "传记,剧情",
    "category": "动作冒险",
    "url": "./movie-1488.html",
    "cover": "./138.jpg"
  },
  {
    "title": "魔法奇幻秀",
    "region": "英国",
    "year": "2009",
    "genre": "奇幻/冒险",
    "category": "动作冒险",
    "url": "./movie-1489.html",
    "cover": "./139.jpg"
  },
  {
    "title": "来吃晚饭的人",
    "region": "日本",
    "year": "2026",
    "genre": "悬疑/剧情",
    "category": "海外热播",
    "url": "./movie-1490.html",
    "cover": "./140.jpg"
  },
  {
    "title": "异见者",
    "region": "法国",
    "year": "2025",
    "genre": "剧情/政治/惊悚",
    "category": "经典剧集",
    "url": "./movie-1491.html",
    "cover": "./141.jpg"
  },
  {
    "title": "不想长高的孩子",
    "region": "中国",
    "year": "2020",
    "genre": "剧情/儿童",
    "category": "国产精选",
    "url": "./movie-1492.html",
    "cover": "./142.jpg"
  },
  {
    "title": "快乐向前冲2009",
    "region": "中国大陆",
    "year": "2009",
    "genre": "喜剧,运动",
    "category": "高清电影",
    "url": "./movie-1493.html",
    "cover": "./143.jpg"
  },
  {
    "title": "大坝",
    "region": "中国大陆",
    "year": "2025",
    "genre": "灾难/悬疑",
    "category": "悬疑犯罪",
    "url": "./movie-1494.html",
    "cover": "./144.jpg"
  },
  {
    "title": "摇曳百合第一季",
    "region": "日本",
    "year": "2011",
    "genre": "喜剧/日常/百合",
    "category": "海外热播",
    "url": "./movie-1495.html",
    "cover": "./145.jpg"
  },
  {
    "title": "朋党",
    "region": "韩国",
    "year": "2024",
    "genre": "犯罪、动作、黑色幽默",
    "category": "爱情家庭",
    "url": "./movie-1496.html",
    "cover": "./146.jpg"
  },
  {
    "title": "盾之勇士成名录第二季",
    "region": "日本",
    "year": "2022",
    "genre": "动画,奇幻",
    "category": "综艺动漫",
    "url": "./movie-1497.html",
    "cover": "./147.jpg"
  },
  {
    "title": "欢乐一家亲第一季",
    "region": "美国",
    "year": "2024",
    "genre": "喜剧/家庭/情景剧",
    "category": "动作冒险",
    "url": "./movie-1498.html",
    "cover": "./148.jpg"
  },
  {
    "title": "每个人的生活",
    "region": "法国",
    "year": "2025",
    "genre": "剧情,家庭",
    "category": "高清电影",
    "url": "./movie-1499.html",
    "cover": "./149.jpg"
  },
  {
    "title": "共和国1949",
    "region": "中国大陆",
    "year": "2021",
    "genre": "历史/谍战",
    "category": "海外热播",
    "url": "./movie-1500.html",
    "cover": "./150.jpg"
  },
  {
    "title": "冒牌刺客",
    "region": "韩国",
    "year": "2026",
    "genre": "动作、喜剧、犯罪",
    "category": "爱情家庭",
    "url": "./movie-1501.html",
    "cover": "./1.jpg"
  },
  {
    "title": "万里寻母",
    "region": "意大利",
    "year": "2024",
    "genre": "剧情",
    "category": "经典剧集",
    "url": "./movie-1502.html",
    "cover": "./2.jpg"
  },
  {
    "title": "贞观之治",
    "region": "中国大陆",
    "year": "2025",
    "genre": "历史/剧情",
    "category": "国产精选",
    "url": "./movie-1503.html",
    "cover": "./3.jpg"
  },
  {
    "title": "抢救德梅洛",
    "region": "美国/巴西",
    "year": "2020",
    "genre": "传记,剧情",
    "category": "经典剧集",
    "url": "./movie-1504.html",
    "cover": "./4.jpg"
  },
  {
    "title": "晚安妈咪2022",
    "region": "美国",
    "year": "2022",
    "genre": "恐怖,悬疑,心理惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-1505.html",
    "cover": "./5.jpg"
  },
  {
    "title": "星际大奇航",
    "region": "美国/英国",
    "year": "2024",
    "genre": "科幻/喜剧",
    "category": "爱情家庭",
    "url": "./movie-1506.html",
    "cover": "./6.jpg"
  },
  {
    "title": "五星级鱼干女",
    "region": "日本",
    "year": "2025",
    "genre": "爱情/喜剧/职场",
    "category": "动作冒险",
    "url": "./movie-1507.html",
    "cover": "./7.jpg"
  },
  {
    "title": "照片中的女孩",
    "region": "美国",
    "year": "2024",
    "genre": "悬疑/剧情",
    "category": "国产精选",
    "url": "./movie-1508.html",
    "cover": "./8.jpg"
  },
  {
    "title": "天网狼蛛",
    "region": "中国",
    "year": "2022",
    "genre": "科幻/惊悚/灾难",
    "category": "悬疑犯罪",
    "url": "./movie-1509.html",
    "cover": "./9.jpg"
  },
  {
    "title": "邪恶勿语",
    "region": "英国",
    "year": "2025",
    "genre": "心理惊悚",
    "category": "动作冒险",
    "url": "./movie-1510.html",
    "cover": "./10.jpg"
  },
  {
    "title": "跟随节拍跳起来",
    "region": "美国",
    "year": "2021",
    "genre": "音乐,剧情",
    "category": "综艺动漫",
    "url": "./movie-1511.html",
    "cover": "./11.jpg"
  },
  {
    "title": "缘份精华游",
    "region": "中国香港",
    "year": "2024",
    "genre": "爱情,喜剧",
    "category": "动作冒险",
    "url": "./movie-1512.html",
    "cover": "./12.jpg"
  },
  {
    "title": "迷宫夺美",
    "region": "中国大陆",
    "year": "2024",
    "genre": "古装/动作/冒险",
    "category": "爱情家庭",
    "url": "./movie-1513.html",
    "cover": "./13.jpg"
  },
  {
    "title": "摩登衙门",
    "region": "中国香港",
    "year": "2025",
    "genre": "动作/喜剧",
    "category": "经典剧集",
    "url": "./movie-1514.html",
    "cover": "./14.jpg"
  },
  {
    "title": "邪屋",
    "region": "中国香港",
    "year": "2003",
    "genre": "恐怖,惊悚",
    "category": "国产精选",
    "url": "./movie-1515.html",
    "cover": "./15.jpg"
  },
  {
    "title": "罗雀高飞",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情/古装/女性",
    "category": "高清电影",
    "url": "./movie-1516.html",
    "cover": "./16.jpg"
  },
  {
    "title": "阳光普照",
    "region": "中国台湾",
    "year": "2024",
    "genre": "剧情/家庭",
    "category": "动作冒险",
    "url": "./movie-1517.html",
    "cover": "./17.jpg"
  },
  {
    "title": "你是我的毒玫瑰国语",
    "region": "中国台湾",
    "year": "2024",
    "genre": "爱情/心理惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-1518.html",
    "cover": "./18.jpg"
  },
  {
    "title": "魔法圣女",
    "region": "法国",
    "year": "2023",
    "genre": "奇幻/女性",
    "category": "综艺动漫",
    "url": "./movie-1519.html",
    "cover": "./19.jpg"
  },
  {
    "title": "变装皇后复仇记",
    "region": "美国",
    "year": "2023",
    "genre": "喜剧/犯罪",
    "category": "国产精选",
    "url": "./movie-1520.html",
    "cover": "./20.jpg"
  },
  {
    "title": "商战街",
    "region": "中国香港",
    "year": "2022",
    "genre": "剧情/商战",
    "category": "国产精选",
    "url": "./movie-1521.html",
    "cover": "./21.jpg"
  },
  {
    "title": "回声谷",
    "region": "美国",
    "year": "2023",
    "genre": "科幻/悬疑",
    "category": "高清电影",
    "url": "./movie-1522.html",
    "cover": "./22.jpg"
  },
  {
    "title": "第三只眼 2",
    "region": "印度",
    "year": "2027",
    "genre": "悬疑/科幻",
    "category": "综艺动漫",
    "url": "./movie-1523.html",
    "cover": "./23.jpg"
  },
  {
    "title": "秘密同盟",
    "region": "韩国",
    "year": "2024",
    "genre": "动作/犯罪",
    "category": "综艺动漫",
    "url": "./movie-1524.html",
    "cover": "./24.jpg"
  },
  {
    "title": "死之棘",
    "region": "日本",
    "year": "1990",
    "genre": "剧情,家庭,心理",
    "category": "动作冒险",
    "url": "./movie-1525.html",
    "cover": "./25.jpg"
  },
  {
    "title": "走出监狱的女人",
    "region": "韩国",
    "year": "2025",
    "genre": "剧情/女性",
    "category": "综艺动漫",
    "url": "./movie-1526.html",
    "cover": "./26.jpg"
  },
  {
    "title": "露西亚的圣诞愿望",
    "region": "北欧 (瑞典/丹麦)",
    "year": "2018",
    "genre": "家庭,奇幻",
    "category": "国产精选",
    "url": "./movie-1527.html",
    "cover": "./27.jpg"
  },
  {
    "title": "糊涂人多糊涂福",
    "region": "中国香港",
    "year": "1996",
    "genre": "喜剧、家庭、生活",
    "category": "悬疑犯罪",
    "url": "./movie-1528.html",
    "cover": "./28.jpg"
  },
  {
    "title": "魔童",
    "region": "美国",
    "year": "2028",
    "genre": "恐怖/超自然",
    "category": "动作冒险",
    "url": "./movie-1529.html",
    "cover": "./29.jpg"
  },
  {
    "title": "她说的算",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情,爱情,都市",
    "category": "悬疑犯罪",
    "url": "./movie-1530.html",
    "cover": "./30.jpg"
  },
  {
    "title": "我这一辈子2002",
    "region": "中国大陆",
    "year": "2002",
    "genre": "剧情/家庭",
    "category": "国产精选",
    "url": "./movie-1531.html",
    "cover": "./31.jpg"
  },
  {
    "title": "试着死了一次",
    "region": "日本",
    "year": "2023",
    "genre": "喜剧/奇幻",
    "category": "动作冒险",
    "url": "./movie-1532.html",
    "cover": "./32.jpg"
  },
  {
    "title": "赤裸",
    "region": "日本",
    "year": "2010",
    "genre": "剧情/情色",
    "category": "动作冒险",
    "url": "./movie-1533.html",
    "cover": "./33.jpg"
  },
  {
    "title": "饭前祷告",
    "region": "美国",
    "year": "2016",
    "genre": "剧情/家庭",
    "category": "国产精选",
    "url": "./movie-1534.html",
    "cover": "./34.jpg"
  },
  {
    "title": "日式面包王",
    "region": "日本",
    "year": "2025",
    "genre": "动画,美食,搞笑",
    "category": "海外热播",
    "url": "./movie-1535.html",
    "cover": "./35.jpg"
  },
  {
    "title": "15点17分,启程巴黎",
    "region": "美国",
    "year": "2024",
    "genre": "惊悚/真实改编",
    "category": "悬疑犯罪",
    "url": "./movie-1536.html",
    "cover": "./36.jpg"
  },
  {
    "title": "军神山本元帅与联合舰队",
    "region": "日本",
    "year": "1962",
    "genre": "战争,历史,传记",
    "category": "悬疑犯罪",
    "url": "./movie-1537.html",
    "cover": "./37.jpg"
  },
  {
    "title": "爱在托斯卡纳",
    "region": "意大利",
    "year": "2025",
    "genre": "爱情,喜剧,剧情",
    "category": "悬疑犯罪",
    "url": "./movie-1538.html",
    "cover": "./38.jpg"
  },
  {
    "title": "爱德华八世的故事",
    "region": "英国",
    "year": "2025",
    "genre": "传记/历史",
    "category": "动作冒险",
    "url": "./movie-1539.html",
    "cover": "./39.jpg"
  },
  {
    "title": "家族的形式",
    "region": "日本",
    "year": "2022",
    "genre": "家庭/剧情/治愈",
    "category": "综艺动漫",
    "url": "./movie-1540.html",
    "cover": "./40.jpg"
  },
  {
    "title": "陆小凤传奇",
    "region": "中国香港",
    "year": "2026",
    "genre": "武侠,悬疑,动作",
    "category": "悬疑犯罪",
    "url": "./movie-1541.html",
    "cover": "./41.jpg"
  },
  {
    "title": "小可爱娜斯佳第三季",
    "region": "俄罗斯",
    "year": "2025",
    "genre": "奇幻,儿童,家庭",
    "category": "动作冒险",
    "url": "./movie-1542.html",
    "cover": "./42.jpg"
  },
  {
    "title": "杰和沉默鲍伯的反击",
    "region": "美国",
    "year": "2001",
    "genre": "喜剧",
    "category": "高清电影",
    "url": "./movie-1543.html",
    "cover": "./43.jpg"
  },
  {
    "title": "没有出路的海",
    "region": "澳大利亚,英国",
    "year": "2024",
    "genre": "灾难,惊悚,生存",
    "category": "动作冒险",
    "url": "./movie-1544.html",
    "cover": "./44.jpg"
  },
  {
    "title": "空气之魂,云之精灵",
    "region": "日本",
    "year": "2026",
    "genre": "奇幻,动画,家庭",
    "category": "动作冒险",
    "url": "./movie-1545.html",
    "cover": "./45.jpg"
  },
  {
    "title": "杀手的童话",
    "region": "中国香港",
    "year": "1995",
    "genre": "爱情/犯罪",
    "category": "动作冒险",
    "url": "./movie-1546.html",
    "cover": "./46.jpg"
  },
  {
    "title": "饮料杯历险记第十一季",
    "region": "美国",
    "year": "2025",
    "genre": "喜剧,奇幻,冒险",
    "category": "经典剧集",
    "url": "./movie-1547.html",
    "cover": "./47.jpg"
  },
  {
    "title": "相睇七次半",
    "region": "中国香港",
    "year": "2024",
    "genre": "喜剧/爱情",
    "category": "经典剧集",
    "url": "./movie-1548.html",
    "cover": "./48.jpg"
  },
  {
    "title": "儿子的选择",
    "region": "韩国",
    "year": "2023",
    "genre": "剧情/家庭/人性",
    "category": "综艺动漫",
    "url": "./movie-1549.html",
    "cover": "./49.jpg"
  },
  {
    "title": "齐格菲歌舞团",
    "region": "美国",
    "year": "2025",
    "genre": "歌舞/传记/历史",
    "category": "经典剧集",
    "url": "./movie-1550.html",
    "cover": "./50.jpg"
  },
  {
    "title": "女黑手党",
    "region": "波兰",
    "year": "2018",
    "genre": "剧情/犯罪",
    "category": "经典剧集",
    "url": "./movie-1551.html",
    "cover": "./51.jpg"
  },
  {
    "title": "稚子骄阳",
    "region": "伊朗/法国",
    "year": "2020",
    "genre": "剧情家庭",
    "category": "悬疑犯罪",
    "url": "./movie-1552.html",
    "cover": "./52.jpg"
  },
  {
    "title": "村民反击战",
    "region": "中国大陆",
    "year": "2024",
    "genre": "喜剧/动作/农村",
    "category": "海外热播",
    "url": "./movie-1553.html",
    "cover": "./53.jpg"
  },
  {
    "title": "虚虚假假",
    "region": "中国大陆",
    "year": "2024",
    "genre": "悬疑,科幻",
    "category": "国产精选",
    "url": "./movie-1554.html",
    "cover": "./54.jpg"
  },
  {
    "title": "热诚传说:导师的黎明",
    "region": "日本",
    "year": "2023",
    "genre": "动画/奇幻/冒险",
    "category": "海外热播",
    "url": "./movie-1555.html",
    "cover": "./55.jpg"
  },
  {
    "title": "柯盼旅馆",
    "region": "意大利",
    "year": "2027",
    "genre": "悬疑/奇幻/剧情",
    "category": "动作冒险",
    "url": "./movie-1556.html",
    "cover": "./56.jpg"
  },
  {
    "title": "张震讲故事之鬼迷心窍",
    "region": "中国大陆",
    "year": "2024",
    "genre": "惊悚/悬疑",
    "category": "高清电影",
    "url": "./movie-1557.html",
    "cover": "./57.jpg"
  },
  {
    "title": "木乃伊2",
    "region": "美国",
    "year": "2026",
    "genre": "动作/冒险/奇幻",
    "category": "爱情家庭",
    "url": "./movie-1558.html",
    "cover": "./58.jpg"
  },
  {
    "title": "后备箱惊魂",
    "region": "韩国",
    "year": "2023",
    "genre": "悬疑/惊悚/犯罪",
    "category": "动作冒险",
    "url": "./movie-1559.html",
    "cover": "./59.jpg"
  },
  {
    "title": "奴仆时代",
    "region": "韩国",
    "year": "2025",
    "genre": "历史/惊悚",
    "category": "动作冒险",
    "url": "./movie-1560.html",
    "cover": "./60.jpg"
  },
  {
    "title": "感谢伟大的国家",
    "region": "苏联",
    "year": "1949",
    "genre": "剧情,战争,宣传",
    "category": "海外热播",
    "url": "./movie-1561.html",
    "cover": "./61.jpg"
  },
  {
    "title": "纽约,我爱你",
    "region": "美国",
    "year": "2025",
    "genre": "爱情/剧情",
    "category": "高清电影",
    "url": "./movie-1562.html",
    "cover": "./62.jpg"
  },
  {
    "title": "冲浪少年",
    "region": "澳大利亚",
    "year": "2023",
    "genre": "剧情/运动/家庭",
    "category": "悬疑犯罪",
    "url": "./movie-1563.html",
    "cover": "./63.jpg"
  },
  {
    "title": "卡夫卡",
    "region": "捷克/德国",
    "year": "2024",
    "genre": "剧情,传记",
    "category": "海外热播",
    "url": "./movie-1564.html",
    "cover": "./64.jpg"
  },
  {
    "title": "爱琳",
    "region": "英国",
    "year": "2028",
    "genre": "悬疑/惊悚/心理",
    "category": "悬疑犯罪",
    "url": "./movie-1565.html",
    "cover": "./65.jpg"
  },
  {
    "title": "科搜研之女第24季",
    "region": "日本",
    "year": "2025",
    "genre": "刑侦,推理",
    "category": "动作冒险",
    "url": "./movie-1566.html",
    "cover": "./66.jpg"
  },
  {
    "title": "马洛",
    "region": "美国",
    "year": "2023",
    "genre": "悬疑,犯罪",
    "category": "经典剧集",
    "url": "./movie-1567.html",
    "cover": "./67.jpg"
  },
  {
    "title": "第19分部",
    "region": "美国",
    "year": "2023",
    "genre": "科幻,悬疑,办公室喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-1568.html",
    "cover": "./68.jpg"
  },
  {
    "title": "母亲的女友",
    "region": "法国",
    "year": "2025",
    "genre": "剧情,爱情,家庭",
    "category": "国产精选",
    "url": "./movie-1569.html",
    "cover": "./69.jpg"
  },
  {
    "title": "我是赵传奇",
    "region": "中国内地",
    "year": "2024",
    "genre": "剧情/传记",
    "category": "爱情家庭",
    "url": "./movie-1570.html",
    "cover": "./70.jpg"
  },
  {
    "title": "世界属于你",
    "region": "意大利",
    "year": "2024",
    "genre": "剧情,喜剧",
    "category": "经典剧集",
    "url": "./movie-1571.html",
    "cover": "./71.jpg"
  },
  {
    "title": "新白蛇传之青蛇",
    "region": "中国大陆",
    "year": "2021",
    "genre": "奇幻、爱情、动作",
    "category": "爱情家庭",
    "url": "./movie-1572.html",
    "cover": "./72.jpg"
  },
  {
    "title": "无痛凯恩",
    "region": "美国",
    "year": "2024",
    "genre": "动作/科幻/犯罪",
    "category": "动作冒险",
    "url": "./movie-1573.html",
    "cover": "./73.jpg"
  },
  {
    "title": "焚城",
    "region": "中国大陆",
    "year": "2025",
    "genre": "灾难,动作,剧情",
    "category": "国产精选",
    "url": "./movie-1574.html",
    "cover": "./74.jpg"
  },
  {
    "title": "局中劫",
    "region": "中国大陆",
    "year": "2024",
    "genre": "悬疑/犯罪/商战",
    "category": "国产精选",
    "url": "./movie-1575.html",
    "cover": "./75.jpg"
  },
  {
    "title": "卡门与萝拉",
    "region": "西班牙",
    "year": "2025",
    "genre": "爱情,剧情,同性",
    "category": "悬疑犯罪",
    "url": "./movie-1576.html",
    "cover": "./76.jpg"
  },
  {
    "title": "省港一号通缉犯",
    "region": "中国香港",
    "year": "2025",
    "genre": "动作/警匪/犯罪",
    "category": "爱情家庭",
    "url": "./movie-1577.html",
    "cover": "./77.jpg"
  },
  {
    "title": "尺八·一声一世",
    "region": "中国大陆/日本",
    "year": "2019",
    "genre": "纪录片/音乐",
    "category": "国产精选",
    "url": "./movie-1578.html",
    "cover": "./78.jpg"
  },
  {
    "title": "与神对谈",
    "region": "美国",
    "year": "2024",
    "genre": "剧情/奇幻/哲学",
    "category": "经典剧集",
    "url": "./movie-1579.html",
    "cover": "./79.jpg"
  },
  {
    "title": "动感战士",
    "region": "中国大陆",
    "year": "2025",
    "genre": "动作科幻",
    "category": "经典剧集",
    "url": "./movie-1580.html",
    "cover": "./80.jpg"
  },
  {
    "title": "梦城兔福星",
    "region": "美国",
    "year": "1988",
    "genre": "喜剧",
    "category": "海外热播",
    "url": "./movie-1581.html",
    "cover": "./81.jpg"
  },
  {
    "title": "爱比死更难",
    "region": "法国/比利时",
    "year": "2024",
    "genre": "剧情/爱情/战争",
    "category": "综艺动漫",
    "url": "./movie-1582.html",
    "cover": "./82.jpg"
  },
  {
    "title": "神秘的大佛",
    "region": "中国大陆",
    "year": "1980",
    "genre": "动作悬疑",
    "category": "国产精选",
    "url": "./movie-1583.html",
    "cover": "./83.jpg"
  },
  {
    "title": "1966年世界杯",
    "region": "英国",
    "year": "2006",
    "genre": "喜剧家庭",
    "category": "爱情家庭",
    "url": "./movie-1584.html",
    "cover": "./84.jpg"
  },
  {
    "title": "四三二一",
    "region": "香港",
    "year": "2025",
    "genre": "犯罪,剧情",
    "category": "爱情家庭",
    "url": "./movie-1585.html",
    "cover": "./85.jpg"
  },
  {
    "title": "落跑钱",
    "region": "中国",
    "year": "2024",
    "genre": "喜剧,犯罪",
    "category": "悬疑犯罪",
    "url": "./movie-1586.html",
    "cover": "./86.jpg"
  },
  {
    "title": "没有你的最后的日子",
    "region": "法国",
    "year": "2023",
    "genre": "爱情,剧情",
    "category": "高清电影",
    "url": "./movie-1587.html",
    "cover": "./87.jpg"
  },
  {
    "title": "上帝的旨意",
    "region": "美国",
    "year": "2025",
    "genre": "惊悚,悬疑",
    "category": "国产精选",
    "url": "./movie-1588.html",
    "cover": "./88.jpg"
  },
  {
    "title": "禁苑春浓",
    "region": "中国大陆",
    "year": "2025",
    "genre": "古装,宫斗,爱情",
    "category": "综艺动漫",
    "url": "./movie-1589.html",
    "cover": "./89.jpg"
  },
  {
    "title": "机动部队粤语",
    "region": "中国香港",
    "year": "2026",
    "genre": "动作,犯罪",
    "category": "海外热播",
    "url": "./movie-1590.html",
    "cover": "./90.jpg"
  },
  {
    "title": "胡同交响曲",
    "region": "中国大陆",
    "year": "2023",
    "genre": "剧情,音乐",
    "category": "综艺动漫",
    "url": "./movie-1591.html",
    "cover": "./91.jpg"
  },
  {
    "title": "未来的未来",
    "region": "日本",
    "year": "2018",
    "genre": "动画",
    "category": "悬疑犯罪",
    "url": "./movie-1592.html",
    "cover": "./92.jpg"
  },
  {
    "title": "如此好人",
    "region": "中国台湾",
    "year": "2024",
    "genre": "爱情/喜剧/同性",
    "category": "悬疑犯罪",
    "url": "./movie-1593.html",
    "cover": "./93.jpg"
  },
  {
    "title": "山间铃响马帮来1954",
    "region": "中国大陆",
    "year": "1954",
    "genre": "战争,剧情",
    "category": "海外热播",
    "url": "./movie-1594.html",
    "cover": "./94.jpg"
  },
  {
    "title": "沉月",
    "region": "中国台湾",
    "year": "1999",
    "genre": "奇幻,爱情",
    "category": "高清电影",
    "url": "./movie-1595.html",
    "cover": "./95.jpg"
  },
  {
    "title": "间谍一家亲",
    "region": "美国",
    "year": "2025",
    "genre": "喜剧,动作",
    "category": "悬疑犯罪",
    "url": "./movie-1596.html",
    "cover": "./96.jpg"
  },
  {
    "title": "英雄宝剑",
    "region": "中国大陆",
    "year": "2025",
    "genre": "武侠,动作",
    "category": "动作冒险",
    "url": "./movie-1597.html",
    "cover": "./97.jpg"
  },
  {
    "title": "非正式播报",
    "region": "中国大陆",
    "year": "2024",
    "genre": "都市职场喜剧",
    "category": "综艺动漫",
    "url": "./movie-1598.html",
    "cover": "./98.jpg"
  },
  {
    "title": "百分比",
    "region": "美国",
    "year": "2025",
    "genre": "科幻/悬疑/社会",
    "category": "海外热播",
    "url": "./movie-1599.html",
    "cover": "./99.jpg"
  },
  {
    "title": "求生旅程",
    "region": "中国大陆",
    "year": "2025",
    "genre": "冒险/剧情",
    "category": "经典剧集",
    "url": "./movie-1600.html",
    "cover": "./100.jpg"
  },
  {
    "title": "去死吧,亲爱的",
    "region": "泰国",
    "year": "2023",
    "genre": "悬疑/惊悚/爱情",
    "category": "国产精选",
    "url": "./movie-1601.html",
    "cover": "./101.jpg"
  },
  {
    "title": "血战墓碑镇2",
    "region": "美国",
    "year": "2024",
    "genre": "动作,西部,恐怖",
    "category": "综艺动漫",
    "url": "./movie-1602.html",
    "cover": "./102.jpg"
  },
  {
    "title": "我的秘密室友2020",
    "region": "中国",
    "year": "2020",
    "genre": "爱情,奇幻",
    "category": "高清电影",
    "url": "./movie-1603.html",
    "cover": "./103.jpg"
  },
  {
    "title": "软糖泰山",
    "region": "中国大陆",
    "year": "2025",
    "genre": "奇幻喜剧",
    "category": "综艺动漫",
    "url": "./movie-1604.html",
    "cover": "./104.jpg"
  },
  {
    "title": "宝石迷踪",
    "region": "印度",
    "year": "2024",
    "genre": "悬疑/冒险",
    "category": "经典剧集",
    "url": "./movie-1605.html",
    "cover": "./105.jpg"
  },
  {
    "title": "老友鬼鬼粤语",
    "region": "中国香港",
    "year": "1991",
    "genre": "喜剧/奇幻/恐怖",
    "category": "高清电影",
    "url": "./movie-1606.html",
    "cover": "./106.jpg"
  },
  {
    "title": "我离家了,但......",
    "region": "德国",
    "year": "2024",
    "genre": "剧情,家庭",
    "category": "国产精选",
    "url": "./movie-1607.html",
    "cover": "./107.jpg"
  },
  {
    "title": "呆瓜向前冲",
    "region": "美国",
    "year": "2024",
    "genre": "喜剧/冒险",
    "category": "经典剧集",
    "url": "./movie-1608.html",
    "cover": "./108.jpg"
  },
  {
    "title": "铁门",
    "region": "土耳其",
    "year": "2022",
    "genre": "悬疑,奇幻",
    "category": "经典剧集",
    "url": "./movie-1609.html",
    "cover": "./109.jpg"
  },
  {
    "title": "八仙与跳蚤",
    "region": "中国大陆",
    "year": "2024",
    "genre": "奇幻/喜剧",
    "category": "爱情家庭",
    "url": "./movie-1610.html",
    "cover": "./110.jpg"
  },
  {
    "title": "心琴调音师",
    "region": "日本",
    "year": "2023",
    "genre": "剧情/音乐",
    "category": "爱情家庭",
    "url": "./movie-1611.html",
    "cover": "./111.jpg"
  },
  {
    "title": "如此亲密的背叛者",
    "region": "韩国",
    "year": "2024",
    "genre": "悬疑/家庭/犯罪",
    "category": "悬疑犯罪",
    "url": "./movie-1612.html",
    "cover": "./112.jpg"
  },
  {
    "title": "九星报喜",
    "region": "中国香港",
    "year": "2024",
    "genre": "喜剧,动作,贺岁",
    "category": "高清电影",
    "url": "./movie-1613.html",
    "cover": "./113.jpg"
  },
  {
    "title": "猫咪不跳舞",
    "region": "美国",
    "year": "1997",
    "genre": "动画/歌舞/家庭",
    "category": "国产精选",
    "url": "./movie-1614.html",
    "cover": "./114.jpg"
  },
  {
    "title": "东京24区",
    "region": "日本",
    "year": "2026",
    "genre": "悬疑,犯罪",
    "category": "海外热播",
    "url": "./movie-1615.html",
    "cover": "./115.jpg"
  },
  {
    "title": "樱桃派",
    "region": "中国台湾",
    "year": "2025",
    "genre": "剧情,家庭",
    "category": "高清电影",
    "url": "./movie-1616.html",
    "cover": "./116.jpg"
  },
  {
    "title": "凯撒密令",
    "region": "美国",
    "year": "2006",
    "genre": "动作、悬疑、历史、冒险",
    "category": "悬疑犯罪",
    "url": "./movie-1617.html",
    "cover": "./117.jpg"
  },
  {
    "title": "乌龙服务员",
    "region": "中国香港",
    "year": "2025",
    "genre": "喜剧/动作",
    "category": "爱情家庭",
    "url": "./movie-1618.html",
    "cover": "./118.jpg"
  },
  {
    "title": "给神的一封简短的信",
    "region": "日本",
    "year": "2023",
    "genre": "奇幻,治愈,剧情",
    "category": "动作冒险",
    "url": "./movie-1619.html",
    "cover": "./119.jpg"
  },
  {
    "title": "少战精英:爷爷的宝藏",
    "region": "中国大陆",
    "year": "2026",
    "genre": "动作/冒险/喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-1620.html",
    "cover": "./120.jpg"
  },
  {
    "title": "雷霆喷射手",
    "region": "美国",
    "year": "2025",
    "genre": "动作/运动",
    "category": "动作冒险",
    "url": "./movie-1621.html",
    "cover": "./121.jpg"
  },
  {
    "title": "爵士吧广岛",
    "region": "日本",
    "year": "2025",
    "genre": "剧情/音乐/历史",
    "category": "国产精选",
    "url": "./movie-1622.html",
    "cover": "./122.jpg"
  },
  {
    "title": "时光逆爱90年",
    "region": "中国大陆",
    "year": "2024",
    "genre": "爱情、科幻",
    "category": "悬疑犯罪",
    "url": "./movie-1623.html",
    "cover": "./123.jpg"
  },
  {
    "title": "伟大的奥马利",
    "region": "美国",
    "year": "2022",
    "genre": "剧情/传记",
    "category": "悬疑犯罪",
    "url": "./movie-1624.html",
    "cover": "./124.jpg"
  },
  {
    "title": "黯色沙滩",
    "region": "中国大陆",
    "year": "2025",
    "genre": "悬疑/犯罪/剧情",
    "category": "经典剧集",
    "url": "./movie-1625.html",
    "cover": "./125.jpg"
  },
  {
    "title": "九命奇冤梁天来",
    "region": "中国大陆",
    "year": "2014",
    "genre": "古装/悬疑/犯罪",
    "category": "海外热播",
    "url": "./movie-1626.html",
    "cover": "./126.jpg"
  },
  {
    "title": "茱丽叶国度",
    "region": "中国台湾",
    "year": "2024",
    "genre": "爱情/奇幻",
    "category": "国产精选",
    "url": "./movie-1627.html",
    "cover": "./127.jpg"
  },
  {
    "title": "后院活宝第一季",
    "region": "加拿大",
    "year": "2020",
    "genre": "动画、儿童、喜剧",
    "category": "国产精选",
    "url": "./movie-1628.html",
    "cover": "./128.jpg"
  },
  {
    "title": "够姜师姐之反恐叛变",
    "region": "中国香港",
    "year": "1995",
    "genre": "动作/惊悚",
    "category": "高清电影",
    "url": "./movie-1629.html",
    "cover": "./129.jpg"
  },
  {
    "title": "情深深雨濛濛",
    "region": "中国大陆/中国台湾",
    "year": "2001",
    "genre": "剧情,爱情,年代",
    "category": "高清电影",
    "url": "./movie-1630.html",
    "cover": "./130.jpg"
  },
  {
    "title": "红发女郎",
    "region": "法国",
    "year": "2025",
    "genre": "悬疑,犯罪",
    "category": "动作冒险",
    "url": "./movie-1631.html",
    "cover": "./131.jpg"
  },
  {
    "title": "走火入魔",
    "region": "中国香港",
    "year": "2024",
    "genre": "动作/犯罪/心理",
    "category": "高清电影",
    "url": "./movie-1632.html",
    "cover": "./132.jpg"
  },
  {
    "title": "没有空气的时间",
    "region": "英国",
    "year": "2025",
    "genre": "科幻/悬疑",
    "category": "国产精选",
    "url": "./movie-1633.html",
    "cover": "./133.jpg"
  },
  {
    "title": "皮囊",
    "region": "中国大陆",
    "year": "2023",
    "genre": "悬疑,奇幻,伦理",
    "category": "经典剧集",
    "url": "./movie-1634.html",
    "cover": "./134.jpg"
  },
  {
    "title": "吉伯特拒蛋行动",
    "region": "美国",
    "year": "2025",
    "genre": "喜剧/科幻",
    "category": "海外热播",
    "url": "./movie-1635.html",
    "cover": "./135.jpg"
  },
  {
    "title": "土豚",
    "region": "美国",
    "year": "2023",
    "genre": "犯罪,黑色幽默",
    "category": "综艺动漫",
    "url": "./movie-1636.html",
    "cover": "./136.jpg"
  },
  {
    "title": "古镇凶灵之巫咒缠身",
    "region": "中国大陆",
    "year": "2024",
    "genre": "恐怖,惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-1637.html",
    "cover": "./137.jpg"
  },
  {
    "title": "代号8",
    "region": "美国",
    "year": "2023",
    "genre": "科幻/悬疑",
    "category": "爱情家庭",
    "url": "./movie-1638.html",
    "cover": "./138.jpg"
  },
  {
    "title": "钻石王牌",
    "region": "日本",
    "year": "2027",
    "genre": "运动/剧情",
    "category": "动作冒险",
    "url": "./movie-1639.html",
    "cover": "./139.jpg"
  },
  {
    "title": "分手服务",
    "region": "韩国",
    "year": "2025",
    "genre": "爱情,喜剧,剧情",
    "category": "高清电影",
    "url": "./movie-1640.html",
    "cover": "./140.jpg"
  },
  {
    "title": "传奇的诞生",
    "region": "美国/英国",
    "year": "2024",
    "genre": "剧情,音乐,传记",
    "category": "经典剧集",
    "url": "./movie-1641.html",
    "cover": "./141.jpg"
  },
  {
    "title": "性伴侣的品格 初恋",
    "region": "日本",
    "year": "2025",
    "genre": "爱情,剧情",
    "category": "国产精选",
    "url": "./movie-1642.html",
    "cover": "./142.jpg"
  },
  {
    "title": "无负今日",
    "region": "中国大陆",
    "year": "2023",
    "genre": "剧情",
    "category": "经典剧集",
    "url": "./movie-1643.html",
    "cover": "./143.jpg"
  },
  {
    "title": "风暴过后",
    "region": "日本",
    "year": "2016",
    "genre": "剧情/家庭/灾难",
    "category": "动作冒险",
    "url": "./movie-1644.html",
    "cover": "./144.jpg"
  },
  {
    "title": "如梦",
    "region": "中国香港",
    "year": "2025",
    "genre": "爱情,奇幻,文艺",
    "category": "经典剧集",
    "url": "./movie-1645.html",
    "cover": "./145.jpg"
  },
  {
    "title": "恶夜追杀令",
    "region": "美国",
    "year": "2024",
    "genre": "动作/惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-1646.html",
    "cover": "./146.jpg"
  },
  {
    "title": "看我说什么",
    "region": "英国",
    "year": "2015",
    "genre": "剧情/音乐",
    "category": "国产精选",
    "url": "./movie-1647.html",
    "cover": "./147.jpg"
  },
  {
    "title": "国家宝藏第四季",
    "region": "中国大陆",
    "year": "2025",
    "genre": "悬疑/冒险",
    "category": "经典剧集",
    "url": "./movie-1648.html",
    "cover": "./148.jpg"
  },
  {
    "title": "丝绸鞋",
    "region": "中国大陆/意大利",
    "year": "2023",
    "genre": "剧情/历史/悬疑",
    "category": "爱情家庭",
    "url": "./movie-1649.html",
    "cover": "./149.jpg"
  },
  {
    "title": "菩提树",
    "region": "印度",
    "year": "2023",
    "genre": "剧情,奇幻,家庭",
    "category": "国产精选",
    "url": "./movie-1650.html",
    "cover": "./150.jpg"
  },
  {
    "title": "倒蛋部队",
    "region": "中国内地",
    "year": "2023",
    "genre": "军旅/喜剧",
    "category": "国产精选",
    "url": "./movie-1651.html",
    "cover": "./1.jpg"
  },
  {
    "title": "情迷利卡塔",
    "region": "意大利",
    "year": "2024",
    "genre": "爱情,剧情,历史",
    "category": "国产精选",
    "url": "./movie-1652.html",
    "cover": "./2.jpg"
  },
  {
    "title": "第18号机库",
    "region": "美国",
    "year": "2025",
    "genre": "科幻/惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-1653.html",
    "cover": "./3.jpg"
  },
  {
    "title": "比佛利山辣妹",
    "region": "美国",
    "year": "2025",
    "genre": "动作,喜剧",
    "category": "动作冒险",
    "url": "./movie-1654.html",
    "cover": "./4.jpg"
  },
  {
    "title": "楢山节考",
    "region": "日本",
    "year": "2024",
    "genre": "剧情/历史/人性",
    "category": "综艺动漫",
    "url": "./movie-1655.html",
    "cover": "./5.jpg"
  },
  {
    "title": "乌鸦住宅区",
    "region": "瑞典",
    "year": "2018",
    "genre": "剧情/社会",
    "category": "经典剧集",
    "url": "./movie-1656.html",
    "cover": "./6.jpg"
  },
  {
    "title": "睡觉的顽皮豹",
    "region": "日本",
    "year": "2016",
    "genre": "喜剧/儿童",
    "category": "高清电影",
    "url": "./movie-1657.html",
    "cover": "./7.jpg"
  },
  {
    "title": "绝命无常镇",
    "region": "中国大陆",
    "year": "2024",
    "genre": "悬疑/惊悚",
    "category": "国产精选",
    "url": "./movie-1658.html",
    "cover": "./8.jpg"
  },
  {
    "title": "拇指版星球大战",
    "region": "美国",
    "year": "1999",
    "genre": "喜剧/科幻/短片",
    "category": "经典剧集",
    "url": "./movie-1659.html",
    "cover": "./9.jpg"
  },
  {
    "title": "复仇:爱的故事",
    "region": "美国",
    "year": "2021",
    "genre": "动作/犯罪/惊悚",
    "category": "高清电影",
    "url": "./movie-1660.html",
    "cover": "./10.jpg"
  },
  {
    "title": "单眼皮",
    "region": "中国大陆",
    "year": "2022",
    "genre": "剧情/家庭",
    "category": "经典剧集",
    "url": "./movie-1661.html",
    "cover": "./11.jpg"
  },
  {
    "title": "顶楼第三季",
    "region": "韩国",
    "year": "2024",
    "genre": "悬疑/狗血/复仇/剧情",
    "category": "动作冒险",
    "url": "./movie-1662.html",
    "cover": "./12.jpg"
  },
  {
    "title": "小鹿斑比2",
    "region": "美国",
    "year": "2006",
    "genre": "动画,家庭,剧情",
    "category": "爱情家庭",
    "url": "./movie-1663.html",
    "cover": "./13.jpg"
  },
  {
    "title": "凶手还未睡",
    "region": "中国香港",
    "year": "2024",
    "genre": "悬疑/犯罪",
    "category": "动作冒险",
    "url": "./movie-1664.html",
    "cover": "./14.jpg"
  },
  {
    "title": "龙拳精武指",
    "region": "中国香港",
    "year": "1995",
    "genre": "动作/武侠",
    "category": "高清电影",
    "url": "./movie-1665.html",
    "cover": "./15.jpg"
  },
  {
    "title": "行尸走肉第七季",
    "region": "美国",
    "year": "2016",
    "genre": "恐怖/剧情",
    "category": "海外热播",
    "url": "./movie-1666.html",
    "cover": "./16.jpg"
  },
  {
    "title": "强者上钩",
    "region": "美国",
    "year": "2025",
    "genre": "动作/惊悚/运动",
    "category": "高清电影",
    "url": "./movie-1667.html",
    "cover": "./17.jpg"
  },
  {
    "title": "绣间藏春",
    "region": "中国大陆",
    "year": "2023",
    "genre": "古装/悬疑/爱情",
    "category": "高清电影",
    "url": "./movie-1668.html",
    "cover": "./18.jpg"
  },
  {
    "title": "我老婆是学生会长第二季",
    "region": "日本",
    "year": "2016",
    "genre": "喜剧,恋爱,校园",
    "category": "综艺动漫",
    "url": "./movie-1669.html",
    "cover": "./19.jpg"
  },
  {
    "title": "北极世界末日",
    "region": "加拿大/挪威",
    "year": "2026",
    "genre": "科幻,灾难,生存",
    "category": "海外热播",
    "url": "./movie-1670.html",
    "cover": "./20.jpg"
  },
  {
    "title": "缅因海快递",
    "region": "美国",
    "year": "2025",
    "genre": "悬疑/犯罪/黑色幽默",
    "category": "国产精选",
    "url": "./movie-1671.html",
    "cover": "./21.jpg"
  },
  {
    "title": "英雄神话",
    "region": "韩国",
    "year": "2022",
    "genre": "剧情,犯罪,动作",
    "category": "高清电影",
    "url": "./movie-1672.html",
    "cover": "./22.jpg"
  },
  {
    "title": "谍影雄风",
    "region": "中国大陆",
    "year": "2024",
    "genre": "谍战,悬疑,动作",
    "category": "爱情家庭",
    "url": "./movie-1673.html",
    "cover": "./23.jpg"
  },
  {
    "title": "冲锋陷阵粤语",
    "region": "中国香港",
    "year": "2024",
    "genre": "动作/犯罪",
    "category": "国产精选",
    "url": "./movie-1674.html",
    "cover": "./24.jpg"
  },
  {
    "title": "绝命杀机",
    "region": "美国",
    "year": "2025",
    "genre": "动作,悬疑,犯罪",
    "category": "经典剧集",
    "url": "./movie-1675.html",
    "cover": "./25.jpg"
  },
  {
    "title": "孪生陌生人",
    "region": "美国",
    "year": "2018",
    "genre": "剧情/悬疑",
    "category": "国产精选",
    "url": "./movie-1676.html",
    "cover": "./26.jpg"
  },
  {
    "title": "黑太阳731续集",
    "region": "香港",
    "year": "2025",
    "genre": "惊悚,历史,战争",
    "category": "悬疑犯罪",
    "url": "./movie-1677.html",
    "cover": "./27.jpg"
  },
  {
    "title": "冷血杀人狂",
    "region": "美国",
    "year": "2024",
    "genre": "惊悚/犯罪",
    "category": "动作冒险",
    "url": "./movie-1678.html",
    "cover": "./28.jpg"
  },
  {
    "title": "了不起的曹萱萱",
    "region": "中国大陆",
    "year": "2025",
    "genre": "喜剧,古装,女性",
    "category": "国产精选",
    "url": "./movie-1679.html",
    "cover": "./29.jpg"
  },
  {
    "title": "死亡军团",
    "region": "美国",
    "year": "2025",
    "genre": "动作/悬疑/科幻",
    "category": "高清电影",
    "url": "./movie-1680.html",
    "cover": "./30.jpg"
  },
  {
    "title": "可爱的露易丝",
    "region": "法国",
    "year": "2025",
    "genre": "奇幻/家庭",
    "category": "综艺动漫",
    "url": "./movie-1681.html",
    "cover": "./31.jpg"
  },
  {
    "title": "致命教案",
    "region": "韩国",
    "year": "2024",
    "genre": "动作/惊悚/犯罪",
    "category": "综艺动漫",
    "url": "./movie-1682.html",
    "cover": "./32.jpg"
  },
  {
    "title": "鹰巢",
    "region": "德国",
    "year": "2025",
    "genre": "战争/历史/惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-1683.html",
    "cover": "./33.jpg"
  },
  {
    "title": "盟军敢死队",
    "region": "美国",
    "year": "2025",
    "genre": "动作/战争",
    "category": "动作冒险",
    "url": "./movie-1684.html",
    "cover": "./34.jpg"
  },
  {
    "title": "漂浪人生",
    "region": "中国台湾",
    "year": "2025",
    "genre": "剧情/家庭",
    "category": "海外热播",
    "url": "./movie-1685.html",
    "cover": "./35.jpg"
  },
  {
    "title": "机器人挑战赛",
    "region": "美国",
    "year": "2024",
    "genre": "动作,科幻,运动",
    "category": "悬疑犯罪",
    "url": "./movie-1686.html",
    "cover": "./36.jpg"
  },
  {
    "title": "枕刀歌",
    "region": "中国",
    "year": "2023",
    "genre": "武侠/动画/动作",
    "category": "爱情家庭",
    "url": "./movie-1687.html",
    "cover": "./37.jpg"
  },
  {
    "title": "一不留神",
    "region": "中国大陆",
    "year": "2024",
    "genre": "喜剧/奇幻",
    "category": "悬疑犯罪",
    "url": "./movie-1688.html",
    "cover": "./38.jpg"
  },
  {
    "title": "姑鲁之恋",
    "region": "中国大陆",
    "year": "2017",
    "genre": "爱情民族",
    "category": "国产精选",
    "url": "./movie-1689.html",
    "cover": "./39.jpg"
  },
  {
    "title": "贱精姐弟 第二季",
    "region": "中国香港",
    "year": "2022",
    "genre": "喜剧/家庭/短剧",
    "category": "综艺动漫",
    "url": "./movie-1690.html",
    "cover": "./40.jpg"
  },
  {
    "title": "逍遥同盟",
    "region": "中国大陆",
    "year": "2024",
    "genre": "武侠,喜剧",
    "category": "经典剧集",
    "url": "./movie-1691.html",
    "cover": "./41.jpg"
  },
  {
    "title": "霸王战天神",
    "region": "中国大陆",
    "year": "2026",
    "genre": "奇幻,动作,古装",
    "category": "综艺动漫",
    "url": "./movie-1692.html",
    "cover": "./42.jpg"
  },
  {
    "title": "落魄大厨",
    "region": "西班牙",
    "year": "2024",
    "genre": "剧情/喜剧/美食",
    "category": "国产精选",
    "url": "./movie-1693.html",
    "cover": "./43.jpg"
  },
  {
    "title": "盲证",
    "region": "中国大陆",
    "year": "2026",
    "genre": "悬疑,犯罪,惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-1694.html",
    "cover": "./44.jpg"
  },
  {
    "title": "丛林大反攻2",
    "region": "美国",
    "year": "2012",
    "genre": "喜剧/冒险",
    "category": "国产精选",
    "url": "./movie-1695.html",
    "cover": "./45.jpg"
  },
  {
    "title": "大浩劫",
    "region": "韩国",
    "year": "2026",
    "genre": "灾难,科幻",
    "category": "海外热播",
    "url": "./movie-1696.html",
    "cover": "./46.jpg"
  },
  {
    "title": "我心深处1978",
    "region": "中国台湾",
    "year": "1978",
    "genre": "爱情/文艺",
    "category": "国产精选",
    "url": "./movie-1697.html",
    "cover": "./47.jpg"
  },
  {
    "title": "巴黎夜生活",
    "region": "法国",
    "year": "2023",
    "genre": "剧情,音乐",
    "category": "爱情家庭",
    "url": "./movie-1698.html",
    "cover": "./48.jpg"
  },
  {
    "title": "掳劫狂徒",
    "region": "澳大利亚",
    "year": "2023",
    "genre": "犯罪/惊悚",
    "category": "海外热播",
    "url": "./movie-1699.html",
    "cover": "./49.jpg"
  },
  {
    "title": "俄国人来了",
    "region": "美国",
    "year": "1987",
    "genre": "喜剧/剧情",
    "category": "国产精选",
    "url": "./movie-1700.html",
    "cover": "./50.jpg"
  },
  {
    "title": "怪谈1964",
    "region": "日本",
    "year": "2022",
    "genre": "恐怖/悬疑",
    "category": "悬疑犯罪",
    "url": "./movie-1701.html",
    "cover": "./51.jpg"
  },
  {
    "title": "乳痕",
    "region": "中国台湾",
    "year": "2024",
    "genre": "剧情/家庭",
    "category": "高清电影",
    "url": "./movie-1702.html",
    "cover": "./52.jpg"
  },
  {
    "title": "杀出西营盘",
    "region": "中国香港",
    "year": "2025",
    "genre": "动作,犯罪",
    "category": "综艺动漫",
    "url": "./movie-1703.html",
    "cover": "./53.jpg"
  },
  {
    "title": "替死鬼",
    "region": "韩国",
    "year": "2023",
    "genre": "悬疑/犯罪",
    "category": "综艺动漫",
    "url": "./movie-1704.html",
    "cover": "./54.jpg"
  },
  {
    "title": "似曾相识",
    "region": "法国",
    "year": "2025",
    "genre": "爱情,科幻,悬疑",
    "category": "经典剧集",
    "url": "./movie-1705.html",
    "cover": "./55.jpg"
  },
  {
    "title": "冒牌死党",
    "region": "中国大陆",
    "year": "2024",
    "genre": "喜剧悬疑",
    "category": "综艺动漫",
    "url": "./movie-1706.html",
    "cover": "./56.jpg"
  },
  {
    "title": "超人4:和平任务",
    "region": "美国",
    "year": "2025",
    "genre": "动作,科幻,冒险",
    "category": "悬疑犯罪",
    "url": "./movie-1707.html",
    "cover": "./57.jpg"
  },
  {
    "title": "黑玫瑰",
    "region": "中国香港",
    "year": "2018",
    "genre": "动作/犯罪",
    "category": "爱情家庭",
    "url": "./movie-1708.html",
    "cover": "./58.jpg"
  },
  {
    "title": "我放纵情欲的夜晚",
    "region": "韩国",
    "year": "2024",
    "genre": "剧情/爱情/情色",
    "category": "爱情家庭",
    "url": "./movie-1709.html",
    "cover": "./59.jpg"
  },
  {
    "title": "男国少年梦",
    "region": "中国台湾",
    "year": "2024",
    "genre": "剧情,同性,青春",
    "category": "高清电影",
    "url": "./movie-1710.html",
    "cover": "./60.jpg"
  },
  {
    "title": "界限1931",
    "region": "中国大陆",
    "year": "2024",
    "genre": "历史/战争/谍战",
    "category": "经典剧集",
    "url": "./movie-1711.html",
    "cover": "./61.jpg"
  },
  {
    "title": "刺客",
    "region": "中国香港/中国大陆",
    "year": "2024",
    "genre": "动作/武侠",
    "category": "悬疑犯罪",
    "url": "./movie-1712.html",
    "cover": "./62.jpg"
  },
  {
    "title": "一日冬春",
    "region": "中国大陆",
    "year": "2022",
    "genre": "爱情,剧情,文艺",
    "category": "经典剧集",
    "url": "./movie-1713.html",
    "cover": "./63.jpg"
  },
  {
    "title": "两条牛仔龙",
    "region": "美国",
    "year": "1972",
    "genre": "西部/喜剧/犯罪",
    "category": "高清电影",
    "url": "./movie-1714.html",
    "cover": "./64.jpg"
  },
  {
    "title": "显而易见的傻瓜:电影版",
    "region": "日本",
    "year": "2025",
    "genre": "喜剧,剧情",
    "category": "悬疑犯罪",
    "url": "./movie-1715.html",
    "cover": "./65.jpg"
  },
  {
    "title": "母亲机器人",
    "region": "美国",
    "year": "2023",
    "genre": "科幻,惊悚,家庭",
    "category": "动作冒险",
    "url": "./movie-1716.html",
    "cover": "./66.jpg"
  },
  {
    "title": "罗根",
    "region": "美国",
    "year": "2017",
    "genre": "动作/科幻/剧情",
    "category": "国产精选",
    "url": "./movie-1717.html",
    "cover": "./67.jpg"
  },
  {
    "title": "感官愉悦",
    "region": "法国",
    "year": "2025",
    "genre": "爱情,剧情",
    "category": "动作冒险",
    "url": "./movie-1718.html",
    "cover": "./68.jpg"
  },
  {
    "title": "说的就是你2",
    "region": "中国内地",
    "year": "2015",
    "genre": "喜剧,短片",
    "category": "国产精选",
    "url": "./movie-1719.html",
    "cover": "./69.jpg"
  },
  {
    "title": "迪士尼动画·筑梦100年",
    "region": "美国",
    "year": "2023",
    "genre": "纪录片/历史/动画",
    "category": "动作冒险",
    "url": "./movie-1720.html",
    "cover": "./70.jpg"
  },
  {
    "title": "警界传奇",
    "region": "中国大陆",
    "year": "2024",
    "genre": "刑侦,剧情",
    "category": "高清电影",
    "url": "./movie-1721.html",
    "cover": "./71.jpg"
  },
  {
    "title": "坦帕地狱",
    "region": "美国",
    "year": "2024",
    "genre": "犯罪,剧情",
    "category": "经典剧集",
    "url": "./movie-1722.html",
    "cover": "./72.jpg"
  },
  {
    "title": "爱诫",
    "region": "中国香港",
    "year": "2024",
    "genre": "爱情/伦理",
    "category": "国产精选",
    "url": "./movie-1723.html",
    "cover": "./73.jpg"
  },
  {
    "title": "格杀勿论",
    "region": "香港",
    "year": "2026",
    "genre": "动作,犯罪,惊悚",
    "category": "综艺动漫",
    "url": "./movie-1724.html",
    "cover": "./74.jpg"
  },
  {
    "title": "七日复仇",
    "region": "加拿大/法国",
    "year": "2010",
    "genre": "惊悚/犯罪",
    "category": "经典剧集",
    "url": "./movie-1725.html",
    "cover": "./75.jpg"
  },
  {
    "title": "不可能的任务:鬼影行动",
    "region": "美国",
    "year": "2025",
    "genre": "动作/科幻/惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-1726.html",
    "cover": "./76.jpg"
  },
  {
    "title": "东方神骏",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情/运动/历史",
    "category": "悬疑犯罪",
    "url": "./movie-1727.html",
    "cover": "./77.jpg"
  },
  {
    "title": "庭怨森森",
    "region": "美国",
    "year": "2024",
    "genre": "恐怖,悬疑",
    "category": "悬疑犯罪",
    "url": "./movie-1728.html",
    "cover": "./78.jpg"
  },
  {
    "title": "阿姆斯壮谎言",
    "region": "美国",
    "year": "2019",
    "genre": "剧情/悬疑/传记",
    "category": "综艺动漫",
    "url": "./movie-1729.html",
    "cover": "./79.jpg"
  },
  {
    "title": "金钱疑案",
    "region": "中国大陆",
    "year": "2024",
    "genre": "悬疑,金融,犯罪",
    "category": "经典剧集",
    "url": "./movie-1730.html",
    "cover": "./80.jpg"
  },
  {
    "title": "同居人是猫",
    "region": "日本",
    "year": "2019",
    "genre": "动画,治愈,日常",
    "category": "国产精选",
    "url": "./movie-1731.html",
    "cover": "./81.jpg"
  },
  {
    "title": "黑超特警组2",
    "region": "美国",
    "year": "2002",
    "genre": "喜剧/科幻/动作",
    "category": "海外热播",
    "url": "./movie-1732.html",
    "cover": "./82.jpg"
  },
  {
    "title": "悬河杀机",
    "region": "中国大陆",
    "year": "2024",
    "genre": "悬疑、刑侦",
    "category": "综艺动漫",
    "url": "./movie-1733.html",
    "cover": "./83.jpg"
  },
  {
    "title": "蔷薇少女第二季 梦之终结",
    "region": "日本",
    "year": "2024",
    "genre": "奇幻,战斗,剧情",
    "category": "海外热播",
    "url": "./movie-1734.html",
    "cover": "./84.jpg"
  },
  {
    "title": "三三两两的恋爱",
    "region": "中国大陆",
    "year": "2024",
    "genre": "爱情/喜剧",
    "category": "综艺动漫",
    "url": "./movie-1735.html",
    "cover": "./85.jpg"
  },
  {
    "title": "吸血鬼骑士第一季",
    "region": "日本",
    "year": "2008",
    "genre": "奇幻/爱情/悬疑",
    "category": "高清电影",
    "url": "./movie-1736.html",
    "cover": "./86.jpg"
  },
  {
    "title": "糊涂孖兄弟",
    "region": "中国香港",
    "year": "2025",
    "genre": "喜剧,动作",
    "category": "海外热播",
    "url": "./movie-1737.html",
    "cover": "./87.jpg"
  },
  {
    "title": "最后的信",
    "region": "日本",
    "year": "2023",
    "genre": "剧情,爱情,家庭",
    "category": "动作冒险",
    "url": "./movie-1738.html",
    "cover": "./88.jpg"
  },
  {
    "title": "陌生人的慰籍",
    "region": "英国",
    "year": "1990",
    "genre": "剧情,惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-1739.html",
    "cover": "./89.jpg"
  },
  {
    "title": "现代爱情恋曲粤语",
    "region": "中国香港",
    "year": "2023",
    "genre": "爱情、都市",
    "category": "悬疑犯罪",
    "url": "./movie-1740.html",
    "cover": "./90.jpg"
  },
  {
    "title": "滚滚红尘",
    "region": "中国",
    "year": "2025",
    "genre": "剧情/历史",
    "category": "综艺动漫",
    "url": "./movie-1741.html",
    "cover": "./91.jpg"
  },
  {
    "title": "猛鬼街国语",
    "region": "中国大陆",
    "year": "2024",
    "genre": "恐怖/惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-1742.html",
    "cover": "./92.jpg"
  },
  {
    "title": "苦役列车",
    "region": "日本",
    "year": "2023",
    "genre": "剧情/历史",
    "category": "悬疑犯罪",
    "url": "./movie-1743.html",
    "cover": "./93.jpg"
  },
  {
    "title": "娘家的故事2",
    "region": "中国大陆",
    "year": "2025",
    "genre": "家庭/都市",
    "category": "动作冒险",
    "url": "./movie-1744.html",
    "cover": "./94.jpg"
  },
  {
    "title": "风流学生",
    "region": "中国大陆",
    "year": "2016",
    "genre": "喜剧,青春,校园",
    "category": "高清电影",
    "url": "./movie-1745.html",
    "cover": "./95.jpg"
  },
  {
    "title": "灰姑娘药剂师 另一个故事",
    "region": "日本",
    "year": "2025",
    "genre": "医疗,剧情,职场",
    "category": "爱情家庭",
    "url": "./movie-1746.html",
    "cover": "./96.jpg"
  },
  {
    "title": "吉姆·加菲根:宇宙先生",
    "region": "美国",
    "year": "2023",
    "genre": "喜剧、脱口秀",
    "category": "海外热播",
    "url": "./movie-1747.html",
    "cover": "./97.jpg"
  },
  {
    "title": "狼的诱惑",
    "region": "韩国",
    "year": "2024",
    "genre": "爱情/悬疑",
    "category": "动作冒险",
    "url": "./movie-1748.html",
    "cover": "./98.jpg"
  },
  {
    "title": "神与欲",
    "region": "韩国",
    "year": "2018",
    "genre": "剧情/伦理",
    "category": "爱情家庭",
    "url": "./movie-1749.html",
    "cover": "./99.jpg"
  },
  {
    "title": "火并色情街",
    "region": "中国香港",
    "year": "1991",
    "genre": "动作/犯罪",
    "category": "经典剧集",
    "url": "./movie-1750.html",
    "cover": "./100.jpg"
  },
  {
    "title": "入侵者的晚宴",
    "region": "美国",
    "year": "2019",
    "genre": "喜剧,犯罪,惊悚",
    "category": "国产精选",
    "url": "./movie-1751.html",
    "cover": "./101.jpg"
  },
  {
    "title": "潘朵拉的盒子",
    "region": "美国",
    "year": "2026",
    "genre": "科幻,悬疑,惊悚",
    "category": "经典剧集",
    "url": "./movie-1752.html",
    "cover": "./102.jpg"
  },
  {
    "title": "布兰卡龙大军",
    "region": "西班牙",
    "year": "2027",
    "genre": "奇幻/冒险/战争",
    "category": "悬疑犯罪",
    "url": "./movie-1753.html",
    "cover": "./103.jpg"
  },
  {
    "title": "母难日",
    "region": "中国台湾",
    "year": "2023",
    "genre": "剧情/惊悚",
    "category": "经典剧集",
    "url": "./movie-1754.html",
    "cover": "./104.jpg"
  },
  {
    "title": "中国新歌声第一季",
    "region": "中国大陆",
    "year": "2016",
    "genre": "音乐/竞技/真人秀",
    "category": "海外热播",
    "url": "./movie-1755.html",
    "cover": "./105.jpg"
  },
  {
    "title": "秋叶原系女友",
    "region": "日本",
    "year": "2025",
    "genre": "爱情/喜剧",
    "category": "高清电影",
    "url": "./movie-1756.html",
    "cover": "./106.jpg"
  },
  {
    "title": "诺斯费拉图",
    "region": "德国",
    "year": "2025",
    "genre": "恐怖,历史,默片风格",
    "category": "海外热播",
    "url": "./movie-1757.html",
    "cover": "./107.jpg"
  },
  {
    "title": "香水2007",
    "region": "法国",
    "year": "2025",
    "genre": "剧情,悬疑,爱情",
    "category": "动作冒险",
    "url": "./movie-1758.html",
    "cover": "./108.jpg"
  },
  {
    "title": "放映爱",
    "region": "中国台湾",
    "year": "2023",
    "genre": "爱情,剧情",
    "category": "悬疑犯罪",
    "url": "./movie-1759.html",
    "cover": "./109.jpg"
  },
  {
    "title": "黄金大玩家",
    "region": "印度",
    "year": "2024",
    "genre": "动作,犯罪",
    "category": "国产精选",
    "url": "./movie-1760.html",
    "cover": "./110.jpg"
  },
  {
    "title": "台北女子图鉴",
    "region": "中国台湾",
    "year": "2022",
    "genre": "剧情/爱情",
    "category": "经典剧集",
    "url": "./movie-1761.html",
    "cover": "./111.jpg"
  },
  {
    "title": "惨淡的青春",
    "region": "中国大陆",
    "year": "2023",
    "genre": "剧情/文艺",
    "category": "国产精选",
    "url": "./movie-1762.html",
    "cover": "./112.jpg"
  },
  {
    "title": "续倒数第二次恋爱",
    "region": "日本",
    "year": "2014",
    "genre": "爱情/喜剧/中年",
    "category": "动作冒险",
    "url": "./movie-1763.html",
    "cover": "./113.jpg"
  },
  {
    "title": "皇帝",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情,历史,心理",
    "category": "动作冒险",
    "url": "./movie-1764.html",
    "cover": "./114.jpg"
  },
  {
    "title": "逝水年华",
    "region": "中国大陆",
    "year": "2025",
    "genre": "剧情/家庭",
    "category": "高清电影",
    "url": "./movie-1765.html",
    "cover": "./115.jpg"
  },
  {
    "title": "1208全民开讲",
    "region": "中国台湾",
    "year": "2006",
    "genre": "剧情/社会/悬疑",
    "category": "综艺动漫",
    "url": "./movie-1766.html",
    "cover": "./116.jpg"
  },
  {
    "title": "背鸭子的男孩",
    "region": "中国",
    "year": "2005",
    "genre": "剧情/公路/青春",
    "category": "高清电影",
    "url": "./movie-1767.html",
    "cover": "./117.jpg"
  },
  {
    "title": "七人魔法使",
    "region": "日本",
    "year": "2023",
    "genre": "奇幻,战斗,校园",
    "category": "国产精选",
    "url": "./movie-1768.html",
    "cover": "./118.jpg"
  },
  {
    "title": "城市之光1931",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情,悬疑,历史",
    "category": "海外热播",
    "url": "./movie-1769.html",
    "cover": "./119.jpg"
  },
  {
    "title": "西安事变",
    "region": "中国大陆",
    "year": "2025",
    "genre": "历史,悬疑",
    "category": "爱情家庭",
    "url": "./movie-1770.html",
    "cover": "./120.jpg"
  },
  {
    "title": "蚊魔",
    "region": "美国",
    "year": "2025",
    "genre": "恐怖,灾难,科幻",
    "category": "高清电影",
    "url": "./movie-1771.html",
    "cover": "./121.jpg"
  },
  {
    "title": "工作",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情",
    "category": "高清电影",
    "url": "./movie-1772.html",
    "cover": "./122.jpg"
  },
  {
    "title": "大侦探波洛第七季",
    "region": "英国",
    "year": "2000",
    "genre": "犯罪,悬疑,剧情",
    "category": "动作冒险",
    "url": "./movie-1773.html",
    "cover": "./123.jpg"
  },
  {
    "title": "恐惧大街3:1666",
    "region": "美国",
    "year": "2024",
    "genre": "恐怖历史",
    "category": "悬疑犯罪",
    "url": "./movie-1774.html",
    "cover": "./124.jpg"
  },
  {
    "title": "女生日记之做决定事务所",
    "region": "中国",
    "year": "2024",
    "genre": "喜剧/青春/奇幻",
    "category": "悬疑犯罪",
    "url": "./movie-1775.html",
    "cover": "./125.jpg"
  },
  {
    "title": "真爱营业",
    "region": "中国大陆",
    "year": "2024",
    "genre": "爱情/喜剧",
    "category": "海外热播",
    "url": "./movie-1776.html",
    "cover": "./126.jpg"
  },
  {
    "title": "头痛欲裂",
    "region": "中国大陆",
    "year": "2026",
    "genre": "犯罪/悬疑/动作",
    "category": "海外热播",
    "url": "./movie-1777.html",
    "cover": "./127.jpg"
  },
  {
    "title": "水果篮子 最终季",
    "region": "日本",
    "year": "2024",
    "genre": "奇幻/恋爱/治愈",
    "category": "经典剧集",
    "url": "./movie-1778.html",
    "cover": "./128.jpg"
  },
  {
    "title": "战争生活",
    "region": "美国,英国",
    "year": "2024",
    "genre": "纪录,战争,历史",
    "category": "经典剧集",
    "url": "./movie-1779.html",
    "cover": "./129.jpg"
  },
  {
    "title": "保险箱",
    "region": "德国",
    "year": "2025",
    "genre": "惊悚,犯罪",
    "category": "综艺动漫",
    "url": "./movie-1780.html",
    "cover": "./130.jpg"
  },
  {
    "title": "清凌凌的水蓝莹莹的天2",
    "region": "中国大陆",
    "year": "2025",
    "genre": "剧情/农村/家庭",
    "category": "爱情家庭",
    "url": "./movie-1781.html",
    "cover": "./131.jpg"
  },
  {
    "title": "十二岁的胡安娜",
    "region": "西班牙",
    "year": "2019",
    "genre": "剧情/历史",
    "category": "高清电影",
    "url": "./movie-1782.html",
    "cover": "./132.jpg"
  },
  {
    "title": "大西洋号角",
    "region": "英国/美国",
    "year": "2025",
    "genre": "历史/战争/灾难",
    "category": "悬疑犯罪",
    "url": "./movie-1783.html",
    "cover": "./133.jpg"
  },
  {
    "title": "逃跑新娘2017",
    "region": "韩国",
    "year": "2017",
    "genre": "爱情、喜剧",
    "category": "海外热播",
    "url": "./movie-1784.html",
    "cover": "./134.jpg"
  },
  {
    "title": "错位",
    "region": "日本",
    "year": "2024",
    "genre": "悬疑,惊悚,科幻",
    "category": "爱情家庭",
    "url": "./movie-1785.html",
    "cover": "./135.jpg"
  },
  {
    "title": "新荡寇志",
    "region": "中国大陆",
    "year": "2024",
    "genre": "动作、古装、武侠",
    "category": "综艺动漫",
    "url": "./movie-1786.html",
    "cover": "./136.jpg"
  },
  {
    "title": "世界之友",
    "region": "韩国",
    "year": "2025",
    "genre": "剧情/奇幻",
    "category": "高清电影",
    "url": "./movie-1787.html",
    "cover": "./137.jpg"
  },
  {
    "title": "青春应援",
    "region": "韩国",
    "year": "2023",
    "genre": "剧情/运动/青春",
    "category": "海外热播",
    "url": "./movie-1788.html",
    "cover": "./138.jpg"
  },
  {
    "title": "巫毒少女",
    "region": "美国",
    "year": "2024",
    "genre": "恐怖、奇幻、悬疑",
    "category": "综艺动漫",
    "url": "./movie-1789.html",
    "cover": "./139.jpg"
  },
  {
    "title": "60分钟特别节目",
    "region": "美国",
    "year": "2026",
    "genre": "真人秀、悬疑、实验",
    "category": "经典剧集",
    "url": "./movie-1790.html",
    "cover": "./140.jpg"
  },
  {
    "title": "飞吧,冰上之光",
    "region": "中国大陆",
    "year": "2024",
    "genre": "运动/励志",
    "category": "悬疑犯罪",
    "url": "./movie-1791.html",
    "cover": "./141.jpg"
  },
  {
    "title": "太阳底下三段情",
    "region": "中国台湾",
    "year": "2024",
    "genre": "剧情/爱情",
    "category": "悬疑犯罪",
    "url": "./movie-1792.html",
    "cover": "./142.jpg"
  },
  {
    "title": "爱欲四部曲2",
    "region": "印度",
    "year": "2025",
    "genre": "爱情/剧情",
    "category": "国产精选",
    "url": "./movie-1793.html",
    "cover": "./143.jpg"
  },
  {
    "title": "埃达尔和埃杰2",
    "region": "土耳其",
    "year": "2015",
    "genre": "剧情,家庭,喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-1794.html",
    "cover": "./144.jpg"
  },
  {
    "title": "摩纳哥女孩",
    "region": "法国",
    "year": "2024",
    "genre": "喜剧、爱情、剧情",
    "category": "国产精选",
    "url": "./movie-1795.html",
    "cover": "./145.jpg"
  },
  {
    "title": "皮罗斯马尼",
    "region": "格鲁吉亚",
    "year": "2023",
    "genre": "传记",
    "category": "爱情家庭",
    "url": "./movie-1796.html",
    "cover": "./146.jpg"
  },
  {
    "title": "有点心机又如何",
    "region": "日本",
    "year": "2025",
    "genre": "喜剧/爱情/职场",
    "category": "综艺动漫",
    "url": "./movie-1797.html",
    "cover": "./147.jpg"
  },
  {
    "title": "百合的雨声",
    "region": "日本",
    "year": "2024",
    "genre": "爱情、文艺",
    "category": "经典剧集",
    "url": "./movie-1798.html",
    "cover": "./148.jpg"
  },
  {
    "title": "扯蛋莎翁史",
    "region": "英国",
    "year": "2018",
    "genre": "喜剧,历史,恶搞",
    "category": "爱情家庭",
    "url": "./movie-1799.html",
    "cover": "./149.jpg"
  },
  {
    "title": "死神来了国语",
    "region": "中国台湾",
    "year": "2024",
    "genre": "恐怖,惊悚,悬疑",
    "category": "国产精选",
    "url": "./movie-1800.html",
    "cover": "./150.jpg"
  },
  {
    "title": "哥哥与姐姐",
    "region": "韩国",
    "year": "2024",
    "genre": "家庭、喜剧、温情",
    "category": "高清电影",
    "url": "./movie-1801.html",
    "cover": "./1.jpg"
  },
  {
    "title": "骚莎大块呆",
    "region": "美国",
    "year": "2019",
    "genre": "喜剧/家庭/运动",
    "category": "高清电影",
    "url": "./movie-1802.html",
    "cover": "./2.jpg"
  },
  {
    "title": "错爱天堂",
    "region": "泰国",
    "year": "2026",
    "genre": "爱情,悬疑,奇幻",
    "category": "爱情家庭",
    "url": "./movie-1803.html",
    "cover": "./3.jpg"
  },
  {
    "title": "俏罗成",
    "region": "中国大陆",
    "year": "1992",
    "genre": "动作/古装",
    "category": "经典剧集",
    "url": "./movie-1804.html",
    "cover": "./4.jpg"
  },
  {
    "title": "超难搞叔叔",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情,喜剧",
    "category": "爱情家庭",
    "url": "./movie-1805.html",
    "cover": "./5.jpg"
  },
  {
    "title": "老公不及格",
    "region": "韩国",
    "year": "2023",
    "genre": "喜剧,爱情",
    "category": "高清电影",
    "url": "./movie-1806.html",
    "cover": "./6.jpg"
  },
  {
    "title": "瓦尔兴湖家庭电影",
    "region": "德国",
    "year": "2023",
    "genre": "剧情,惊悚,悬疑",
    "category": "高清电影",
    "url": "./movie-1807.html",
    "cover": "./7.jpg"
  },
  {
    "title": "兄弟营",
    "region": "中国大陆",
    "year": "2019",
    "genre": "战争,历史,情感",
    "category": "动作冒险",
    "url": "./movie-1808.html",
    "cover": "./8.jpg"
  },
  {
    "title": "上错天堂招错魂",
    "region": "香港",
    "year": "1987",
    "genre": "喜剧、奇幻、鬼怪",
    "category": "综艺动漫",
    "url": "./movie-1809.html",
    "cover": "./9.jpg"
  },
  {
    "title": "上帝的召唤",
    "region": "美国/墨西哥",
    "year": "2024",
    "genre": "惊悚/剧情",
    "category": "高清电影",
    "url": "./movie-1810.html",
    "cover": "./10.jpg"
  },
  {
    "title": "青春激光",
    "region": "中国大陆",
    "year": "2018",
    "genre": "科幻,校园",
    "category": "高清电影",
    "url": "./movie-1811.html",
    "cover": "./11.jpg"
  },
  {
    "title": "芝麻开门",
    "region": "伊朗/法国",
    "year": "2025",
    "genre": "剧情/悬疑",
    "category": "悬疑犯罪",
    "url": "./movie-1812.html",
    "cover": "./12.jpg"
  },
  {
    "title": "墨西哥几点",
    "region": "墨西哥/美国",
    "year": "2025",
    "genre": "剧情",
    "category": "悬疑犯罪",
    "url": "./movie-1813.html",
    "cover": "./13.jpg"
  },
  {
    "title": "爱在大都市2",
    "region": "美国",
    "year": "2024",
    "genre": "爱情,喜剧",
    "category": "爱情家庭",
    "url": "./movie-1814.html",
    "cover": "./14.jpg"
  },
  {
    "title": "蜕皮计划",
    "region": "中国",
    "year": "2026",
    "genre": "科幻、悬疑、心理",
    "category": "高清电影",
    "url": "./movie-1815.html",
    "cover": "./15.jpg"
  },
  {
    "title": "法外之徒",
    "region": "韩国",
    "year": "2027",
    "genre": "犯罪/动作/悬疑",
    "category": "综艺动漫",
    "url": "./movie-1816.html",
    "cover": "./16.jpg"
  },
  {
    "title": "典当行",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情、商战、年代",
    "category": "经典剧集",
    "url": "./movie-1817.html",
    "cover": "./17.jpg"
  },
  {
    "title": "窗户掉下来的那天",
    "region": "韩国",
    "year": "2020",
    "genre": "剧情/灾难/喜剧",
    "category": "国产精选",
    "url": "./movie-1818.html",
    "cover": "./18.jpg"
  },
  {
    "title": "花楸故事",
    "region": "中国大陆",
    "year": "2026",
    "genre": "文艺剧情",
    "category": "经典剧集",
    "url": "./movie-1819.html",
    "cover": "./19.jpg"
  },
  {
    "title": "志愿者",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情,战争,历史",
    "category": "国产精选",
    "url": "./movie-1820.html",
    "cover": "./20.jpg"
  },
  {
    "title": "三利股份今日涨停",
    "region": "中国大陆",
    "year": "2029",
    "genre": "剧情/商战/犯罪",
    "category": "高清电影",
    "url": "./movie-1821.html",
    "cover": "./21.jpg"
  },
  {
    "title": "福音战士新剧场版:破",
    "region": "日本",
    "year": "2009",
    "genre": "科幻/机甲/心理",
    "category": "经典剧集",
    "url": "./movie-1822.html",
    "cover": "./22.jpg"
  },
  {
    "title": "皇太极",
    "region": "中国大陆",
    "year": "2012",
    "genre": "历史,传记",
    "category": "高清电影",
    "url": "./movie-1823.html",
    "cover": "./23.jpg"
  },
  {
    "title": "10 号公路",
    "region": "美国",
    "year": "2024",
    "genre": "惊悚/公路",
    "category": "动作冒险",
    "url": "./movie-1824.html",
    "cover": "./24.jpg"
  },
  {
    "title": "杀手怨曲",
    "region": "中国香港",
    "year": "2007",
    "genre": "犯罪/动作/悲剧",
    "category": "经典剧集",
    "url": "./movie-1825.html",
    "cover": "./25.jpg"
  },
  {
    "title": "滑板车男孩",
    "region": "印度",
    "year": "2023",
    "genre": "剧情/儿童/运动",
    "category": "高清电影",
    "url": "./movie-1826.html",
    "cover": "./26.jpg"
  },
  {
    "title": "惊爆摩天楼",
    "region": "美国",
    "year": "2026",
    "genre": "动作/灾难/悬疑",
    "category": "动作冒险",
    "url": "./movie-1827.html",
    "cover": "./27.jpg"
  },
  {
    "title": "方世玉",
    "region": "中国香港",
    "year": "2027",
    "genre": "动作,武侠",
    "category": "经典剧集",
    "url": "./movie-1828.html",
    "cover": "./28.jpg"
  },
  {
    "title": "地狱来的芳邻2",
    "region": "美国",
    "year": "2024",
    "genre": "喜剧,恐怖",
    "category": "高清电影",
    "url": "./movie-1829.html",
    "cover": "./29.jpg"
  },
  {
    "title": "雪与灰",
    "region": "日本",
    "year": "2024",
    "genre": "悬疑/犯罪",
    "category": "高清电影",
    "url": "./movie-1830.html",
    "cover": "./30.jpg"
  },
  {
    "title": "玫瑰行者",
    "region": "中国大陆",
    "year": "2021",
    "genre": "悬疑/犯罪/卧底",
    "category": "悬疑犯罪",
    "url": "./movie-1831.html",
    "cover": "./31.jpg"
  },
  {
    "title": "迷你特工队之超级恐龙力量",
    "region": "中国大陆/韩国",
    "year": "2025",
    "genre": "动画,动作,科幻",
    "category": "高清电影",
    "url": "./movie-1832.html",
    "cover": "./32.jpg"
  },
  {
    "title": "沃伦",
    "region": "波兰/乌克兰",
    "year": "2024",
    "genre": "历史/战争/剧情",
    "category": "爱情家庭",
    "url": "./movie-1833.html",
    "cover": "./33.jpg"
  },
  {
    "title": "梦在水面下",
    "region": "法国",
    "year": "2021",
    "genre": "剧情、悬疑、心理",
    "category": "经典剧集",
    "url": "./movie-1834.html",
    "cover": "./34.jpg"
  },
  {
    "title": "兔八哥之兔子快跑",
    "region": "美国",
    "year": "2015",
    "genre": "喜剧,冒险",
    "category": "动作冒险",
    "url": "./movie-1835.html",
    "cover": "./35.jpg"
  },
  {
    "title": "秋收起义",
    "region": "中国大陆",
    "year": "1993",
    "genre": "历史,战争,传记",
    "category": "悬疑犯罪",
    "url": "./movie-1836.html",
    "cover": "./36.jpg"
  },
  {
    "title": "匈奴大帝",
    "region": "美国/匈牙利",
    "year": "2025",
    "genre": "历史/战争",
    "category": "经典剧集",
    "url": "./movie-1837.html",
    "cover": "./37.jpg"
  },
  {
    "title": "狐狸猎手",
    "region": "美国",
    "year": "2014",
    "genre": "剧情/运动/传记/惊悚",
    "category": "国产精选",
    "url": "./movie-1838.html",
    "cover": "./38.jpg"
  },
  {
    "title": "维罗提卡",
    "region": "西班牙",
    "year": "2024",
    "genre": "恐怖,惊悚",
    "category": "综艺动漫",
    "url": "./movie-1839.html",
    "cover": "./39.jpg"
  },
  {
    "title": "更换心脏:改变世界的手术",
    "region": "日本",
    "year": "2021",
    "genre": "科幻,剧情,医疗",
    "category": "动作冒险",
    "url": "./movie-1840.html",
    "cover": "./40.jpg"
  },
  {
    "title": "最强阴阳师的异世界转生记",
    "region": "日本",
    "year": "2025",
    "genre": "奇幻/冒险/动作",
    "category": "综艺动漫",
    "url": "./movie-1841.html",
    "cover": "./41.jpg"
  },
  {
    "title": "危险关系1988",
    "region": "美国",
    "year": "2023",
    "genre": "悬疑,惊悚,年代",
    "category": "综艺动漫",
    "url": "./movie-1842.html",
    "cover": "./42.jpg"
  },
  {
    "title": "最后一次机会",
    "region": "中国",
    "year": "2025",
    "genre": "剧情,犯罪,悬疑",
    "category": "国产精选",
    "url": "./movie-1843.html",
    "cover": "./43.jpg"
  },
  {
    "title": "虚无飘渺",
    "region": "法国",
    "year": "2002",
    "genre": "剧情,爱情,奇幻",
    "category": "海外热播",
    "url": "./movie-1844.html",
    "cover": "./44.jpg"
  },
  {
    "title": "百草奇缘",
    "region": "中国大陆",
    "year": "2024",
    "genre": "奇幻冒险",
    "category": "悬疑犯罪",
    "url": "./movie-1845.html",
    "cover": "./45.jpg"
  },
  {
    "title": "爱在惜别时",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情/爱情",
    "category": "爱情家庭",
    "url": "./movie-1846.html",
    "cover": "./46.jpg"
  },
  {
    "title": "投行风云第二季",
    "region": "美国/英国",
    "year": "2022",
    "genre": "剧情",
    "category": "爱情家庭",
    "url": "./movie-1847.html",
    "cover": "./47.jpg"
  },
  {
    "title": "文明冲击",
    "region": "英国",
    "year": "2025",
    "genre": "科幻/悬疑/剧情",
    "category": "国产精选",
    "url": "./movie-1848.html",
    "cover": "./48.jpg"
  },
  {
    "title": "撒旦的圈套",
    "region": "美国/墨西哥",
    "year": "2025",
    "genre": "恐怖悬疑",
    "category": "爱情家庭",
    "url": "./movie-1849.html",
    "cover": "./49.jpg"
  },
  {
    "title": "少年悍将:犹大之约",
    "region": "美国",
    "year": "2024",
    "genre": "动画、超级英雄、动作",
    "category": "经典剧集",
    "url": "./movie-1850.html",
    "cover": "./50.jpg"
  },
  {
    "title": "侠女传奇国语",
    "region": "中国香港",
    "year": "1992",
    "genre": "武侠、动作、爱情",
    "category": "经典剧集",
    "url": "./movie-1851.html",
    "cover": "./51.jpg"
  },
  {
    "title": "真正胜负",
    "region": "韩国",
    "year": "2022",
    "genre": "剧情,犯罪,动作",
    "category": "国产精选",
    "url": "./movie-1852.html",
    "cover": "./52.jpg"
  },
  {
    "title": "雁雁",
    "region": "中国大陆",
    "year": "2024",
    "genre": "家庭剧情",
    "category": "海外热播",
    "url": "./movie-1853.html",
    "cover": "./53.jpg"
  },
  {
    "title": "睡煞惊魂",
    "region": "中国香港",
    "year": "1992",
    "genre": "恐怖/惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-1854.html",
    "cover": "./54.jpg"
  },
  {
    "title": "致命魔术",
    "region": "美国/英国",
    "year": "2006",
    "genre": "剧情/悬疑/科幻",
    "category": "爱情家庭",
    "url": "./movie-1855.html",
    "cover": "./55.jpg"
  },
  {
    "title": "宫锁金枝",
    "region": "中国大陆",
    "year": "2024",
    "genre": "古装,爱情,悬疑",
    "category": "综艺动漫",
    "url": "./movie-1856.html",
    "cover": "./56.jpg"
  },
  {
    "title": "危险之爱",
    "region": "韩国",
    "year": "2025",
    "genre": "爱情/犯罪/黑色",
    "category": "国产精选",
    "url": "./movie-1857.html",
    "cover": "./57.jpg"
  },
  {
    "title": "妹妹公主第一季",
    "region": "日本",
    "year": "2024",
    "genre": "动画/恋爱/奇幻",
    "category": "国产精选",
    "url": "./movie-1858.html",
    "cover": "./58.jpg"
  },
  {
    "title": "深夜!天才傻鹏",
    "region": "日本",
    "year": "2025",
    "genre": "喜剧/搞笑/无厘头",
    "category": "国产精选",
    "url": "./movie-1859.html",
    "cover": "./59.jpg"
  },
  {
    "title": "浪花淘尽",
    "region": "中国大陆",
    "year": "2018",
    "genre": "谍战/悬疑",
    "category": "高清电影",
    "url": "./movie-1860.html",
    "cover": "./60.jpg"
  },
  {
    "title": "饶舌歌王",
    "region": "美国",
    "year": "2025",
    "genre": "音乐,剧情,励志",
    "category": "悬疑犯罪",
    "url": "./movie-1861.html",
    "cover": "./61.jpg"
  },
  {
    "title": "鲨人魔",
    "region": "美国",
    "year": "2026",
    "genre": "恐怖/惊悚",
    "category": "爱情家庭",
    "url": "./movie-1862.html",
    "cover": "./62.jpg"
  },
  {
    "title": "暗战双凤楼",
    "region": "中国大陆",
    "year": "2024",
    "genre": "谍战,悬疑",
    "category": "国产精选",
    "url": "./movie-1863.html",
    "cover": "./63.jpg"
  },
  {
    "title": "大英雄郑成功",
    "region": "中国大陆",
    "year": "2004",
    "genre": "历史传记",
    "category": "经典剧集",
    "url": "./movie-1864.html",
    "cover": "./64.jpg"
  },
  {
    "title": "女战士艾菲菈&吉里鸥菈",
    "region": "日本",
    "year": "2026",
    "genre": "动作百合",
    "category": "海外热播",
    "url": "./movie-1865.html",
    "cover": "./65.jpg"
  },
  {
    "title": "如积雪般的永寂",
    "region": "日本",
    "year": "2024",
    "genre": "悬疑/爱情",
    "category": "经典剧集",
    "url": "./movie-1866.html",
    "cover": "./66.jpg"
  },
  {
    "title": "侏罗纪进攻",
    "region": "美国",
    "year": "2027",
    "genre": "动作,科幻,灾难",
    "category": "经典剧集",
    "url": "./movie-1867.html",
    "cover": "./67.jpg"
  },
  {
    "title": "毒海鸳鸯",
    "region": "美国",
    "year": "2024",
    "genre": "剧情,犯罪,爱情",
    "category": "国产精选",
    "url": "./movie-1868.html",
    "cover": "./68.jpg"
  },
  {
    "title": "卧虎藏龙",
    "region": "中国台湾/香港",
    "year": "2027",
    "genre": "武侠/动作/剧情",
    "category": "国产精选",
    "url": "./movie-1869.html",
    "cover": "./69.jpg"
  },
  {
    "title": "怎么就,结婚了",
    "region": "韩国",
    "year": "2020",
    "genre": "爱情/喜剧",
    "category": "悬疑犯罪",
    "url": "./movie-1870.html",
    "cover": "./70.jpg"
  },
  {
    "title": "面纱下的足球杯",
    "region": "伊朗/法国",
    "year": "2023",
    "genre": "剧情/运动",
    "category": "国产精选",
    "url": "./movie-1871.html",
    "cover": "./71.jpg"
  },
  {
    "title": "隐藏的恋情",
    "region": "法国",
    "year": "2005",
    "genre": "剧情/爱情",
    "category": "综艺动漫",
    "url": "./movie-1872.html",
    "cover": "./72.jpg"
  },
  {
    "title": "情深爱更浓",
    "region": "泰国",
    "year": "2024",
    "genre": "爱情,家庭,虐恋",
    "category": "经典剧集",
    "url": "./movie-1873.html",
    "cover": "./73.jpg"
  },
  {
    "title": "神盾局特工第七季",
    "region": "美国",
    "year": "2020",
    "genre": "科幻,动作",
    "category": "国产精选",
    "url": "./movie-1874.html",
    "cover": "./74.jpg"
  },
  {
    "title": "王牌特技人",
    "region": "中国香港",
    "year": "1989",
    "genre": "动作/剧情",
    "category": "经典剧集",
    "url": "./movie-1875.html",
    "cover": "./75.jpg"
  },
  {
    "title": "伏羲女娲",
    "region": "中国大陆",
    "year": "2026",
    "genre": "神话/史诗/爱情",
    "category": "悬疑犯罪",
    "url": "./movie-1876.html",
    "cover": "./76.jpg"
  },
  {
    "title": "史努比回家",
    "region": "美国",
    "year": "2025",
    "genre": "动画,冒险,家庭",
    "category": "高清电影",
    "url": "./movie-1877.html",
    "cover": "./77.jpg"
  },
  {
    "title": "时光大盗",
    "region": "澳大利亚",
    "year": "2018",
    "genre": "喜剧/科幻/犯罪",
    "category": "动作冒险",
    "url": "./movie-1878.html",
    "cover": "./78.jpg"
  },
  {
    "title": "俘虏2022",
    "region": "俄罗斯",
    "year": "2024",
    "genre": "战争/剧情",
    "category": "经典剧集",
    "url": "./movie-1879.html",
    "cover": "./79.jpg"
  },
  {
    "title": "魔鬼生化人2",
    "region": "美国",
    "year": "2026",
    "genre": "动作/科幻/惊悚",
    "category": "悬疑犯罪",
    "url": "./movie-1880.html",
    "cover": "./80.jpg"
  },
  {
    "title": "极道大战争",
    "region": "日本",
    "year": "2024",
    "genre": "喜剧动作",
    "category": "综艺动漫",
    "url": "./movie-1881.html",
    "cover": "./81.jpg"
  },
  {
    "title": "黄金马车",
    "region": "英国/法国",
    "year": "2024",
    "genre": "剧情,历史,冒险",
    "category": "国产精选",
    "url": "./movie-1882.html",
    "cover": "./82.jpg"
  },
  {
    "title": "新天师斗僵尸2",
    "region": "美国",
    "year": "2013",
    "genre": "喜剧,恐怖",
    "category": "海外热播",
    "url": "./movie-1883.html",
    "cover": "./83.jpg"
  },
  {
    "title": "新铁路少年",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情/家庭",
    "category": "海外热播",
    "url": "./movie-1884.html",
    "cover": "./84.jpg"
  },
  {
    "title": "疯狂一家秀",
    "region": "中国大陆",
    "year": "2025",
    "genre": "喜剧/家庭/公路",
    "category": "悬疑犯罪",
    "url": "./movie-1885.html",
    "cover": "./85.jpg"
  },
  {
    "title": "水晶美人",
    "region": "中国大陆",
    "year": "2024",
    "genre": "奇幻,爱情",
    "category": "爱情家庭",
    "url": "./movie-1886.html",
    "cover": "./86.jpg"
  },
  {
    "title": "鬼眼看人间",
    "region": "中国香港",
    "year": "2022",
    "genre": "奇幻/悬疑/单元剧",
    "category": "国产精选",
    "url": "./movie-1887.html",
    "cover": "./87.jpg"
  },
  {
    "title": "寻找牛腿琴",
    "region": "中国大陆",
    "year": "2023",
    "genre": "剧情,音乐",
    "category": "爱情家庭",
    "url": "./movie-1888.html",
    "cover": "./88.jpg"
  },
  {
    "title": "古堡屠龙",
    "region": "美国",
    "year": "2027",
    "genre": "动作,奇幻",
    "category": "海外热播",
    "url": "./movie-1889.html",
    "cover": "./89.jpg"
  },
  {
    "title": "瓢虫少女第五季",
    "region": "法国/韩国",
    "year": "2023",
    "genre": "动作,奇幻,少儿",
    "category": "海外热播",
    "url": "./movie-1890.html",
    "cover": "./90.jpg"
  },
  {
    "title": "淑女与髯",
    "region": "日本",
    "year": "2023",
    "genre": "喜剧爱情",
    "category": "综艺动漫",
    "url": "./movie-1891.html",
    "cover": "./91.jpg"
  },
  {
    "title": "如果我的田野会说话",
    "region": "中国内地",
    "year": "2026",
    "genre": "文艺/奇幻",
    "category": "国产精选",
    "url": "./movie-1892.html",
    "cover": "./92.jpg"
  },
  {
    "title": "立食师列传",
    "region": "日本",
    "year": "2024",
    "genre": "剧情/美食",
    "category": "悬疑犯罪",
    "url": "./movie-1893.html",
    "cover": "./93.jpg"
  },
  {
    "title": "百千家的妖怪王子",
    "region": "日本",
    "year": "2024",
    "genre": "奇幻/爱情",
    "category": "综艺动漫",
    "url": "./movie-1894.html",
    "cover": "./94.jpg"
  },
  {
    "title": "镜花水月情",
    "region": "中国大陆",
    "year": "2025",
    "genre": "爱情,奇幻",
    "category": "海外热播",
    "url": "./movie-1895.html",
    "cover": "./95.jpg"
  },
  {
    "title": "果汁",
    "region": "法国",
    "year": "2025",
    "genre": "悬疑/伦理",
    "category": "海外热播",
    "url": "./movie-1896.html",
    "cover": "./96.jpg"
  },
  {
    "title": "扮猪食老虎",
    "region": "香港",
    "year": "2025",
    "genre": "喜剧,动作,犯罪",
    "category": "高清电影",
    "url": "./movie-1897.html",
    "cover": "./97.jpg"
  },
  {
    "title": "男人勿近粤语",
    "region": "香港",
    "year": "2025",
    "genre": "喜剧,都市,爱情",
    "category": "经典剧集",
    "url": "./movie-1898.html",
    "cover": "./98.jpg"
  },
  {
    "title": "家有父母",
    "region": "中国大陆",
    "year": "2024",
    "genre": "家庭,伦理",
    "category": "国产精选",
    "url": "./movie-1899.html",
    "cover": "./99.jpg"
  },
  {
    "title": "张大千敦煌传奇",
    "region": "中国大陆",
    "year": "2025",
    "genre": "传记、历史、艺术",
    "category": "高清电影",
    "url": "./movie-1900.html",
    "cover": "./100.jpg"
  },
  {
    "title": "爱神艳史",
    "region": "美国",
    "year": "1948",
    "genre": "爱情/歌舞/喜剧",
    "category": "高清电影",
    "url": "./movie-1901.html",
    "cover": "./101.jpg"
  },
  {
    "title": "那一年,我们都爱过的女孩",
    "region": "中国大陆",
    "year": "2014",
    "genre": "爱情/青春/怀旧",
    "category": "高清电影",
    "url": "./movie-1902.html",
    "cover": "./102.jpg"
  },
  {
    "title": "禁忌咒纹",
    "region": "日本",
    "year": "2025",
    "genre": "动作/奇幻/热血",
    "category": "海外热播",
    "url": "./movie-1903.html",
    "cover": "./103.jpg"
  },
  {
    "title": "跨越边界",
    "region": "波兰/德国/乌克兰",
    "year": "2026",
    "genre": "战争/剧情/家庭",
    "category": "国产精选",
    "url": "./movie-1904.html",
    "cover": "./104.jpg"
  },
  {
    "title": "壁花女孩梦游中",
    "region": "中国台湾",
    "year": "2025",
    "genre": "奇幻/青春/治愈",
    "category": "经典剧集",
    "url": "./movie-1905.html",
    "cover": "./105.jpg"
  },
  {
    "title": "蒙面唱将猜猜猜第二季",
    "region": "中国大陆",
    "year": "2024",
    "genre": "音乐/真人秀",
    "category": "爱情家庭",
    "url": "./movie-1906.html",
    "cover": "./106.jpg"
  },
  {
    "title": "无情",
    "region": "中国香港",
    "year": "1989",
    "genre": "动作/犯罪",
    "category": "爱情家庭",
    "url": "./movie-1907.html",
    "cover": "./107.jpg"
  },
  {
    "title": "武林怪兽",
    "region": "中国大陆,香港",
    "year": "2019",
    "genre": "奇幻,喜剧",
    "category": "国产精选",
    "url": "./movie-1908.html",
    "cover": "./108.jpg"
  },
  {
    "title": "危机迷雾",
    "region": "中国香港",
    "year": "1995",
    "genre": "犯罪/悬疑/动作",
    "category": "海外热播",
    "url": "./movie-1909.html",
    "cover": "./109.jpg"
  },
  {
    "title": "武士的家用账",
    "region": "日本",
    "year": "2025",
    "genre": "剧情/家庭/历史",
    "category": "经典剧集",
    "url": "./movie-1910.html",
    "cover": "./110.jpg"
  },
  {
    "title": "海洛因",
    "region": "哥伦比亚/美国",
    "year": "2026",
    "genre": "犯罪,剧情,惊悚",
    "category": "海外热播",
    "url": "./movie-1911.html",
    "cover": "./111.jpg"
  },
  {
    "title": "史酷比!格斗狂热迷",
    "region": "美国",
    "year": "2024",
    "genre": "喜剧,悬疑,动作",
    "category": "经典剧集",
    "url": "./movie-1912.html",
    "cover": "./112.jpg"
  },
  {
    "title": "夺宝记",
    "region": "美国",
    "year": "2024",
    "genre": "动作/冒险",
    "category": "爱情家庭",
    "url": "./movie-1913.html",
    "cover": "./113.jpg"
  },
  {
    "title": "病毒2018",
    "region": "西班牙",
    "year": "2024",
    "genre": "科幻/灾难",
    "category": "动作冒险",
    "url": "./movie-1914.html",
    "cover": "./114.jpg"
  },
  {
    "title": "有夫之妇",
    "region": "日本",
    "year": "2024",
    "genre": "悬疑爱情",
    "category": "动作冒险",
    "url": "./movie-1915.html",
    "cover": "./115.jpg"
  },
  {
    "title": "大卫·科伯菲尔德",
    "region": "英国",
    "year": "2025",
    "genre": "剧情、历史、成长",
    "category": "动作冒险",
    "url": "./movie-1916.html",
    "cover": "./116.jpg"
  },
  {
    "title": "亿万第二季",
    "region": "美国",
    "year": "2025",
    "genre": "剧情,金融,犯罪",
    "category": "海外热播",
    "url": "./movie-1917.html",
    "cover": "./117.jpg"
  },
  {
    "title": "疯狂巨齿鲨",
    "region": "美国",
    "year": "2026",
    "genre": "灾难/惊悚",
    "category": "高清电影",
    "url": "./movie-1918.html",
    "cover": "./118.jpg"
  },
  {
    "title": "分裂的天空",
    "region": "德国",
    "year": "2021",
    "genre": "剧情,科幻,爱情",
    "category": "高清电影",
    "url": "./movie-1919.html",
    "cover": "./119.jpg"
  },
  {
    "title": "快要出发啦",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情、公路、治愈",
    "category": "爱情家庭",
    "url": "./movie-1920.html",
    "cover": "./120.jpg"
  },
  {
    "title": "三百勇士的最后抵抗",
    "region": "美国",
    "year": "2026",
    "genre": "动作/历史/战争",
    "category": "综艺动漫",
    "url": "./movie-1921.html",
    "cover": "./121.jpg"
  },
  {
    "title": "莲娜的甜美生活",
    "region": "法国",
    "year": "2021",
    "genre": "剧情",
    "category": "综艺动漫",
    "url": "./movie-1922.html",
    "cover": "./122.jpg"
  },
  {
    "title": "大佬爱美丽",
    "region": "中国香港",
    "year": "2004",
    "genre": "喜剧,动作,黑帮",
    "category": "爱情家庭",
    "url": "./movie-1923.html",
    "cover": "./123.jpg"
  },
  {
    "title": "自由!",
    "region": "法国",
    "year": "2024",
    "genre": "历史",
    "category": "海外热播",
    "url": "./movie-1924.html",
    "cover": "./124.jpg"
  },
  {
    "title": "黑色蜂暴",
    "region": "美国",
    "year": "2025",
    "genre": "灾难/科幻/动作",
    "category": "爱情家庭",
    "url": "./movie-1925.html",
    "cover": "./125.jpg"
  },
  {
    "title": "迈克尔·麦金泰尔:爱秀",
    "region": "英国",
    "year": "2023",
    "genre": "喜剧/脱口秀",
    "category": "海外热播",
    "url": "./movie-1926.html",
    "cover": "./126.jpg"
  },
  {
    "title": "霸海群英会",
    "region": "中国香港",
    "year": "1993",
    "genre": "动作,武侠,冒险",
    "category": "经典剧集",
    "url": "./movie-1927.html",
    "cover": "./127.jpg"
  },
  {
    "title": "执斧人",
    "region": "中国大陆",
    "year": "2024",
    "genre": "悬疑/犯罪",
    "category": "经典剧集",
    "url": "./movie-1928.html",
    "cover": "./128.jpg"
  },
  {
    "title": "英雄神话",
    "region": "美国",
    "year": "2025",
    "genre": "动作/悬疑",
    "category": "高清电影",
    "url": "./movie-1929.html",
    "cover": "./129.jpg"
  },
  {
    "title": "脑男",
    "region": "日本",
    "year": "2013",
    "genre": "犯罪悬疑",
    "category": "悬疑犯罪",
    "url": "./movie-1930.html",
    "cover": "./130.jpg"
  },
  {
    "title": "原地打转",
    "region": "中国台湾",
    "year": "2024",
    "genre": "悬疑,奇幻",
    "category": "海外热播",
    "url": "./movie-1931.html",
    "cover": "./131.jpg"
  },
  {
    "title": "乌鲁鲁的森林物语",
    "region": "日本",
    "year": "2012",
    "genre": "剧情/奇幻/家庭",
    "category": "国产精选",
    "url": "./movie-1932.html",
    "cover": "./132.jpg"
  },
  {
    "title": "上帝的男高音",
    "region": "意大利/英国",
    "year": "2018",
    "genre": "剧情/音乐/传记",
    "category": "经典剧集",
    "url": "./movie-1933.html",
    "cover": "./133.jpg"
  },
  {
    "title": "罗马的房子",
    "region": "西班牙/意大利",
    "year": "2024",
    "genre": "爱情/剧情",
    "category": "国产精选",
    "url": "./movie-1934.html",
    "cover": "./134.jpg"
  },
  {
    "title": "西猺护国记",
    "region": "中国大陆",
    "year": "2026",
    "genre": "古装,动作,奇幻",
    "category": "动作冒险",
    "url": "./movie-1935.html",
    "cover": "./135.jpg"
  },
  {
    "title": "娃娃公墓",
    "region": "日本",
    "year": "2025",
    "genre": "恐怖,悬疑",
    "category": "动作冒险",
    "url": "./movie-1936.html",
    "cover": "./136.jpg"
  },
  {
    "title": "鹰王",
    "region": "中国大陆",
    "year": "2024",
    "genre": "古装/动作/奇幻",
    "category": "经典剧集",
    "url": "./movie-1937.html",
    "cover": "./137.jpg"
  },
  {
    "title": "极速僵尸",
    "region": "中国香港/日本",
    "year": "2026",
    "genre": "动作/恐怖",
    "category": "海外热播",
    "url": "./movie-1938.html",
    "cover": "./138.jpg"
  },
  {
    "title": "扑克脸2022",
    "region": "美国",
    "year": "2022",
    "genre": "悬疑,犯罪",
    "category": "国产精选",
    "url": "./movie-1939.html",
    "cover": "./139.jpg"
  },
  {
    "title": "我爱古诗词第三季",
    "region": "中国内地",
    "year": "2023",
    "genre": "文化/竞赛",
    "category": "海外热播",
    "url": "./movie-1940.html",
    "cover": "./140.jpg"
  },
  {
    "title": "求爱敢死队",
    "region": "中国香港",
    "year": "1988",
    "genre": "喜剧,爱情",
    "category": "动作冒险",
    "url": "./movie-1941.html",
    "cover": "./141.jpg"
  },
  {
    "title": "着魔",
    "region": "法国/波兰",
    "year": "2023",
    "genre": "剧情/恐怖",
    "category": "海外热播",
    "url": "./movie-1942.html",
    "cover": "./142.jpg"
  },
  {
    "title": "天降横财心惊惊粤语",
    "region": "中国香港",
    "year": "2024",
    "genre": "喜剧,犯罪",
    "category": "经典剧集",
    "url": "./movie-1943.html",
    "cover": "./143.jpg"
  },
  {
    "title": "寻找牛腿琴",
    "region": "中国大陆",
    "year": "2024",
    "genre": "非遗/音乐",
    "category": "悬疑犯罪",
    "url": "./movie-1944.html",
    "cover": "./144.jpg"
  },
  {
    "title": "克伦西亚",
    "region": "英国/德国",
    "year": "2025",
    "genre": "奇幻/历史",
    "category": "国产精选",
    "url": "./movie-1945.html",
    "cover": "./145.jpg"
  },
  {
    "title": "雾柳镇",
    "region": "中国大陆",
    "year": "2025",
    "genre": "悬疑,年代",
    "category": "经典剧集",
    "url": "./movie-1946.html",
    "cover": "./146.jpg"
  },
  {
    "title": "㓥脑行尸",
    "region": "香港",
    "year": "2024",
    "genre": "恐怖/惊悚",
    "category": "国产精选",
    "url": "./movie-1947.html",
    "cover": "./147.jpg"
  },
  {
    "title": "雪崩余生",
    "region": "加拿大/挪威",
    "year": "2021",
    "genre": "惊悚/灾难",
    "category": "经典剧集",
    "url": "./movie-1948.html",
    "cover": "./148.jpg"
  },
  {
    "title": "9号秘事第四季",
    "region": "英国",
    "year": "2024",
    "genre": "剧情,悬疑,惊悚",
    "category": "爱情家庭",
    "url": "./movie-1949.html",
    "cover": "./149.jpg"
  },
  {
    "title": "黄色之鸟",
    "region": "法国/比利时",
    "year": "2023",
    "genre": "动画/奇幻",
    "category": "综艺动漫",
    "url": "./movie-1950.html",
    "cover": "./150.jpg"
  },
  {
    "title": "一棵树",
    "region": "中国大陆",
    "year": "2020",
    "genre": "剧情/家庭",
    "category": "悬疑犯罪",
    "url": "./movie-1951.html",
    "cover": "./1.jpg"
  },
  {
    "title": "屋檐下",
    "region": "中国大陆",
    "year": "2023",
    "genre": "家庭、伦理",
    "category": "国产精选",
    "url": "./movie-1952.html",
    "cover": "./2.jpg"
  },
  {
    "title": "废物",
    "region": "中国大陆",
    "year": "2025",
    "genre": "喜剧/剧情",
    "category": "国产精选",
    "url": "./movie-1953.html",
    "cover": "./3.jpg"
  },
  {
    "title": "姐妹情深",
    "region": "美国",
    "year": "1994",
    "genre": "剧情、爱情、伦理",
    "category": "爱情家庭",
    "url": "./movie-1954.html",
    "cover": "./4.jpg"
  },
  {
    "title": "阿尔法 (2019年电影)",
    "region": "美国",
    "year": "2019",
    "genre": "科幻/悬疑",
    "category": "国产精选",
    "url": "./movie-1955.html",
    "cover": "./5.jpg"
  },
  {
    "title": "钢的琴",
    "region": "中国大陆",
    "year": "2010",
    "genre": "剧情,喜剧,文艺",
    "category": "高清电影",
    "url": "./movie-1956.html",
    "cover": "./6.jpg"
  },
  {
    "title": "抗击",
    "region": "中国大陆",
    "year": "2024",
    "genre": "动作,战争,历史",
    "category": "悬疑犯罪",
    "url": "./movie-1957.html",
    "cover": "./7.jpg"
  },
  {
    "title": "迟来的守护者",
    "region": "英国",
    "year": "2020",
    "genre": "剧情,家庭,战争",
    "category": "国产精选",
    "url": "./movie-1958.html",
    "cover": "./8.jpg"
  },
  {
    "title": "妖幻三重奏",
    "region": "日本",
    "year": "2023",
    "genre": "奇幻喜剧",
    "category": "高清电影",
    "url": "./movie-1959.html",
    "cover": "./9.jpg"
  },
  {
    "title": "二人酒路",
    "region": "韩国",
    "year": "2025",
    "genre": "真人秀,旅行,美食",
    "category": "国产精选",
    "url": "./movie-1960.html",
    "cover": "./10.jpg"
  },
  {
    "title": "铁甲衣2:浴血奋战",
    "region": "英国",
    "year": "2024",
    "genre": "动作、历史、战争",
    "category": "综艺动漫",
    "url": "./movie-1961.html",
    "cover": "./11.jpg"
  },
  {
    "title": "无怨无悔",
    "region": "法国",
    "year": "2024",
    "genre": "剧情/家庭",
    "category": "悬疑犯罪",
    "url": "./movie-1962.html",
    "cover": "./12.jpg"
  },
  {
    "title": "强迫入境",
    "region": "美国",
    "year": "2023",
    "genre": "惊悚,剧情",
    "category": "经典剧集",
    "url": "./movie-1963.html",
    "cover": "./13.jpg"
  },
  {
    "title": "西游:伏妖篇",
    "region": "中国大陆/香港",
    "year": "2017",
    "genre": "奇幻/动作/喜剧",
    "category": "动作冒险",
    "url": "./movie-1964.html",
    "cover": "./14.jpg"
  },
  {
    "title": "戴安娜:音乐剧",
    "region": "英国",
    "year": "2025",
    "genre": "歌舞/传记/剧情",
    "category": "海外热播",
    "url": "./movie-1965.html",
    "cover": "./15.jpg"
  },
  {
    "title": "坎大哈",
    "region": "印度",
    "year": "2024",
    "genre": "动作战争",
    "category": "海外热播",
    "url": "./movie-1966.html",
    "cover": "./16.jpg"
  },
  {
    "title": "勇者赫鲁库",
    "region": "日本",
    "year": "2024",
    "genre": "奇幻,冒险,喜剧",
    "category": "爱情家庭",
    "url": "./movie-1967.html",
    "cover": "./17.jpg"
  },
  {
    "title": "一乐也",
    "region": "中国香港",
    "year": "1973",
    "genre": "喜剧,剧情",
    "category": "悬疑犯罪",
    "url": "./movie-1968.html",
    "cover": "./18.jpg"
  },
  {
    "title": "厄孕惊魂",
    "region": "西班牙",
    "year": "2019",
    "genre": "恐怖/悬疑",
    "category": "动作冒险",
    "url": "./movie-1969.html",
    "cover": "./19.jpg"
  },
  {
    "title": "八百八十号",
    "region": "法国/德国",
    "year": "2024",
    "genre": "战争,历史",
    "category": "国产精选",
    "url": "./movie-1970.html",
    "cover": "./20.jpg"
  },
  {
    "title": "疯狂83",
    "region": "中国香港",
    "year": "2024",
    "genre": "喜剧,动作,犯罪",
    "category": "经典剧集",
    "url": "./movie-1971.html",
    "cover": "./21.jpg"
  },
  {
    "title": "黎明前与妳相遇",
    "region": "法国",
    "year": "2023",
    "genre": "爱情/剧情/文艺",
    "category": "综艺动漫",
    "url": "./movie-1972.html",
    "cover": "./22.jpg"
  },
  {
    "title": "揪团玩到挂",
    "region": "美国",
    "year": "2025",
    "genre": "喜剧,恐怖,悬疑",
    "category": "国产精选",
    "url": "./movie-1973.html",
    "cover": "./23.jpg"
  },
  {
    "title": "蜡笔小新外传2 玩具大战",
    "region": "日本",
    "year": "2024",
    "genre": "喜剧,冒险,奇幻",
    "category": "动作冒险",
    "url": "./movie-1974.html",
    "cover": "./24.jpg"
  },
  {
    "title": "看了又看国语第五部",
    "region": "韩国",
    "year": "2025",
    "genre": "家庭/爱情/日常",
    "category": "国产精选",
    "url": "./movie-1975.html",
    "cover": "./25.jpg"
  },
  {
    "title": "快乐冬季",
    "region": "中国大陆",
    "year": "2021",
    "genre": "剧情,家庭",
    "category": "海外热播",
    "url": "./movie-1976.html",
    "cover": "./26.jpg"
  },
  {
    "title": "单车",
    "region": "中国大陆",
    "year": "2024",
    "genre": "剧情",
    "category": "悬疑犯罪",
    "url": "./movie-1977.html",
    "cover": "./27.jpg"
  },
  {
    "title": "城市服装店",
    "region": "中国台湾",
    "year": "2026",
    "genre": "剧情/奇幻",
    "category": "高清电影",
    "url": "./movie-1978.html",
    "cover": "./28.jpg"
  },
  {
    "title": "魔幻波",
    "region": "中国台湾",
    "year": "2025",
    "genre": "奇幻/喜剧/青春",
    "category": "爱情家庭",
    "url": "./movie-1979.html",
    "cover": "./29.jpg"
  },
  {
    "title": "欲盖弄潮",
    "region": "美国",
    "year": "2025",
    "genre": "悬疑/犯罪",
    "category": "海外热播",
    "url": "./movie-1980.html",
    "cover": "./30.jpg"
  },
  {
    "title": "忍者神龟第二季",
    "region": "美国",
    "year": "2025",
    "genre": "动作,动画,科幻",
    "category": "综艺动漫",
    "url": "./movie-1981.html",
    "cover": "./31.jpg"
  },
  {
    "title": "依法相爱",
    "region": "韩国",
    "year": "2022",
    "genre": "爱情/职场/喜剧",
    "category": "爱情家庭",
    "url": "./movie-1982.html",
    "cover": "./32.jpg"
  },
  {
    "title": "欢迎来到隔离病房",
    "region": "日本",
    "year": "2024",
    "genre": "剧情/喜剧/悬疑",
    "category": "高清电影",
    "url": "./movie-1983.html",
    "cover": "./33.jpg"
  },
  {
    "title": "失控玩家国语",
    "region": "美国/中国大陆(配音)",
    "year": "2021",
    "genre": "喜剧/动作/科幻",
    "category": "高清电影",
    "url": "./movie-1984.html",
    "cover": "./34.jpg"
  },
  {
    "title": "三角恋",
    "region": "中国香港",
    "year": "1998",
    "genre": "爱情/剧情",
    "category": "动作冒险",
    "url": "./movie-1985.html",
    "cover": "./35.jpg"
  },
  {
    "title": "布拉多",
    "region": "中国",
    "year": "2023",
    "genre": "剧情、家庭、公路",
    "category": "经典剧集",
    "url": "./movie-1986.html",
    "cover": "./36.jpg"
  },
  {
    "title": "长大的家伙",
    "region": "英国",
    "year": "2020",
    "genre": "剧情/奇幻/成人童话",
    "category": "爱情家庭",
    "url": "./movie-1987.html",
    "cover": "./37.jpg"
  },
  {
    "title": "番茄酱皇帝",
    "region": "西班牙/法国",
    "year": "2024",
    "genre": "动画/奇幻/家庭",
    "category": "经典剧集",
    "url": "./movie-1988.html",
    "cover": "./38.jpg"
  },
  {
    "title": "春色无边满人间",
    "region": "中国大陆",
    "year": "2025",
    "genre": "年代,剧情,家庭",
    "category": "悬疑犯罪",
    "url": "./movie-1989.html",
    "cover": "./39.jpg"
  },
  {
    "title": "侦探米娜",
    "region": "德国",
    "year": "2025",
    "genre": "犯罪,推理",
    "category": "海外热播",
    "url": "./movie-1990.html",
    "cover": "./40.jpg"
  },
  {
    "title": "熊本的同学",
    "region": "日本",
    "year": "2020",
    "genre": "剧情,家庭",
    "category": "悬疑犯罪",
    "url": "./movie-1991.html",
    "cover": "./41.jpg"
  },
  {
    "title": "卡美拉万岁",
    "region": "日本",
    "year": "2025",
    "genre": "动作,科幻",
    "category": "海外热播",
    "url": "./movie-1992.html",
    "cover": "./42.jpg"
  },
  {
    "title": "上帝粒子",
    "region": "美国",
    "year": "2025",
    "genre": "科幻/悬疑",
    "category": "悬疑犯罪",
    "url": "./movie-1993.html",
    "cover": "./43.jpg"
  },
  {
    "title": "少林与武当",
    "region": "中国香港",
    "year": "1980",
    "genre": "动作、武侠、功夫",
    "category": "经典剧集",
    "url": "./movie-1994.html",
    "cover": "./44.jpg"
  },
  {
    "title": "宋朝灰姑娘",
    "region": "中国大陆",
    "year": "2024",
    "genre": "古装,爱情,喜剧",
    "category": "海外热播",
    "url": "./movie-1995.html",
    "cover": "./45.jpg"
  },
  {
    "title": "链锯人剧场版:蕾塞篇",
    "region": "日本",
    "year": "2025",
    "genre": "动画/动作/奇幻",
    "category": "爱情家庭",
    "url": "./movie-1996.html",
    "cover": "./46.jpg"
  },
  {
    "title": "邪恶之城",
    "region": "美国",
    "year": "2025",
    "genre": "犯罪、惊悚、黑色电影",
    "category": "高清电影",
    "url": "./movie-1997.html",
    "cover": "./47.jpg"
  },
  {
    "title": "乐队唱聊吧",
    "region": "中国大陆",
    "year": "2024",
    "genre": "音乐/真人秀",
    "category": "经典剧集",
    "url": "./movie-1998.html",
    "cover": "./48.jpg"
  },
  {
    "title": "街头男战士",
    "region": "韩国",
    "year": "2027",
    "genre": "动作,犯罪,热血",
    "category": "高清电影",
    "url": "./movie-1999.html",
    "cover": "./49.jpg"
  },
  {
    "title": "迪纳莫之梦第一季",
    "region": "俄罗斯",
    "year": "2025",
    "genre": "剧情/运动",
    "category": "悬疑犯罪",
    "url": "./movie-2000.html",
    "cover": "./50.jpg"
  }
];
