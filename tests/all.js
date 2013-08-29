var assert = require("assert");
var hepburn = require("../lib/hepburn");

var hiraganaTests = {
  "ひらがな": "HIRAGANA",
  "あいうえお かきくけこ": "AIUEO KAKIKUKEKO",
  "きゃきゅきょ": "KYAKYUKYO",
  "あんこ": "ANKO",
  "どらえもん": "DORAEMON",
  "かんぽ": "KANPO",
  "ほんま": "HONMA",
  "へっぽこ": "HEPPOKO",
  "べっぷ": "BEPPU",
  "いっしき": "ISSHIKI",
  "えっちゅう": "ETCHUU",
  "はっちょう": "HATCHOU",
  "うさぎ": "USAGI",
  "たろう": "TAROU",
  "おおさま": "OOSAMA",
  "きょうと": "KYOUTO",
  "きょおと": "KYOOTO",
  "とおる": "TOORU",
  "さいとう": "SAITOU",
  "こんにちは": "KONNICHIHA"
};

var katakanaTests = {
  "カタカナ": "KATAKANA",
  "チャーシュー": "CHASHU",
  "ちぢむ": "CHIDJIMU",
  "マッモト": "MAMOTO"
};

var toHiraganaTests = {
  "AIKA": "あいか",
  "AIKI": "あいき",
  "AISA": "あいさ",
  "AINA": "あいな",
  "AIKO": "あいこ",
  "AIJI": "あいじ",
  "AIYO": "あいよ",
  "AINO": "あいの",
  "AIMI": "あいみ",
  "AIRA": "あいら",
  "AIRI": "あいり",
  "AEKA": "あえか",
  "AEKO": "あえこ",
  "AEMI": "あえみ",
  "AOIKO": "あおいこ",
  "AOBAKO": "あおばこ",
  "AOI": "あおい",
  "AOBA": "あおば",
  "AONA": "あおな",
  "AONO": "あおの",
  "AKANE": "あかね",
  "AKAMI": "あかみ",
  "AKARI": "あかり",
  "AKIRAKO": "あきらこ",
  "AKIE": "あきえ",
  "AKISA": "あきさ",
  "AKINA": "あきな",
  "AKIKO": "あきこ",
  "AKIYO": "あきよ",
  "AKINO": "あきの",
  "AKIHO": "あきほ",
  "AKIRA": "あきら",
  "AKIYOU": "あきよう",
  "AKIBA": "あきば",
  "AKUMI": "あくみ",
  "AGURI": "あぐり",
  "AKEGARASU": "あけがらす",
  "AKEMI": "あけみ",
  "AKEYO": "あけよ",
  "AKENO": "あけの",
  "AKEHO": "あけほ",
  "AGEASHIDORI": "あげあしどり",
  "AGEHA": "あげは",
  "ASAYO": "あさよ",
  "ASAE": "あさえ",
  "ASAKA": "あさか",
  "ASAKICHI": "あさきち",
  "ASAMI": "あさみ",
  "ASAKO": "あさこ",
  "ASANO": "あさの",
  "ASAHO": "あさほ",
  "ASAJI": "あさじ",
  "AZAMI": "あざみ",
  "ASHIKA": "あしか",
  "ASHIE": "あしえ",
  "ASHINO": "あしの",
  "ASUKA": "あすか",
  "ASUMI": "あすみ",
  "ASUKI": "あすき",
  "ASUE": "あすえ",
  "ASUNA": "あすな",
  "ASURU": "あする",
  "AZUMINO": "あずみの",
  "AZUSA": "あずさ",
  "AZUMI": "あずみ",
  "AZUKI": "あずき",
  "ASEMI": "あせみ",
  "ASOMI": "あそみ",
  "ASONO": "あその",
  "ACHIKA": "あちか",
  "AKKO": "あっこ",
  "ATSUYO": "あつよ",
  "ATSUKA": "あつか",
  "ATSUKI": "あつき",
  "ATSUKO": "あつこ",
  "ATSUSA": "あつさ",
  "ATSUMI": "あつみ",
  "ATSUE": "あつえ",
  "ATSUNO": "あつの",
  "ATSUHO": "あつほ",
  "ADZUSA": "あづさ",
  "ADZUMI": "あづみ",
  "ADZUMA": "あづま",
  "ADZUHA": "あづは",
  "ATORI": "あとり",
  "ANAMI": "あなみ",
  "ANIKA": "あにか",
  "AMANE": "あまね",
  "AMANO": "あまの",
  "AMIKA": "あみか",
  "AMIE": "あみえ",
  "AMIKO": "あみこ",
  "AMIYO": "あみよ",
  "AYANE": "あやね",
  "AYAKA": "あやか",
  "AYAME": "あやめ",
  "AYAE": "あやえ",
  "AYASA": "あやさ",
  "AYANA": "あやな",
  "AYAKO": "あやこ",
  "AYAMI": "あやみ",
  "AYANO": "あやの",
  "AYAHA": "あやは",
  "AYUKA": "あゆか",
  "AYUMI": "あゆみ",
  "AYUNA": "あゆな",
  "AYUKO": "あゆこ",
  "AYUSA": "あゆさ",
  "AYUKAWA": "あゆかわ",
  "AYUME": "あゆめ",
  "AYUMU": "あゆむ",
  "AYUHA": "あゆは",
  "AYURI": "あゆり",
  "AYOKO": "あよこ",
  "AYOMI": "あよみ",
  "ARASAGASHI": "あらさがし",
  "ARAI": "あらい",
  "ARAKO": "あらこ",
  "ARISA": "ありさ",
  "ARINA": "ありな",
  "AROHA": "あろは",
  "AWAMI": "あわみ",
  "AWANO": "あわの",
  "ANNE": "あんね",
  "ANNA": "あんな",
  "ANJU": "あんじゅ",
  "ANZU": "あんず",
  "ANTA": "あんた",
  "ANJI": "あんじ",
  "ANRI": "あんり",
  "AKO": "あこ",
  "AYO": "あよ",
  "AYA": "あや",
  "IUKO": "いうこ",
  "IEKO": "いえこ",
  "IOKO": "いおこ",
  "IORI": "いおり",
  "IKIKO": "いきこ",
  "IKIO": "いきお",
  "IKUMI": "いくみ",
  "IKUE": "いくえ",
  "IKUKO": "いくこ",
  "IKUYO": "いくよ",
  "IKUHO": "いくほ",
  "IKUO": "いくお",
  "ISAE": "いさえ",
  "ISAKO": "いさこ",
  "ISANA": "いさな",
  "ISAO": "いさお",
  "ISHIE": "いしえ",
  "ISHIKO": "いしこ",
  "ISHIO": "いしお",
  "IZUMI": "いずみ",
  "ISERIMEGUMI": "いせりめぐみ",
  "ISEJO": "いせじょ",
  "ISOE": "いそえ",
  "ISOKO": "いそこ",
  "ISOMI": "いそみ",
  "ISOMU": "いそむ",
  "ICHIGOHIME": "いちごひめ",
  "ICHIKA": "いちか",
  "ICHIGO": "いちご",
  "ICHIE": "いちえ",
  "ICHIKO": "いちこ",
  "ICHINO": "いちの",
  "ICHIHO": "いちほ",
  "IPPEI": "いっぺい",
  "ITSUKA": "いつか",
  "ITSUE": "いつえ",
  "ITSUKO": "いつこ",
  "ITSUMI": "いつみ",
  "ITSUYO": "いつよ",
  "ITSUHO": "いつほ",
  "ITSUHA": "いつは",
  "ITSUWA": "いつわ",
  "IDZUMIKO": "いづみこ",
  "IDZUKO": "いづこ",
  "IDZUMI": "いづみ",
  "IDZUYO": "いづよ",
  "ITONE": "いとね",
  "ITOE": "いとえ",
  "ITOKO": "いとこ",
  "ITOMI": "いとみ",
  "INAKO": "いなこ",
  "INAHO": "いなほ",
  "INEKO": "いねこ",
  "INOKO": "いのこ",
  "IBUKI": "いぶき",
  "IHOKO": "いほこ",
  "IMAKO": "いまこ",
  "IMAMURA": "いまむら",
  "IMARI": "いまり",
  "IMIKO": "いみこ",
  "IMEKO": "いめこ",
  "IYOKO": "いよこ",
  "IRIKO": "いりこ",
  "IRONE": "いろね",
  "IROHA": "いろは",
  "IWAE": "いわえ",
  "IWAKO": "いわこ",
  "IKU": "いく",
  "IKUNO": "いくの",
  "IE": "いえ",
  "ISHI": "いし",
  "ITO": "いと",
  "INORI": "いのり",
  "UIKO": "ういこ",
  "USAKO": "うさこ",
  "USHIO": "うしお",
  "UTAKO": "うたこ",
  "UTAYO": "うたよ",
  "UTSUGI": "うつぎ",
  "UMIKO": "うみこ",
  "UMEKICHI": "うめきち",
  "UMEKO": "うめこ",
  "UMEJI": "うめじ",
  "UMEHARU": "うめはる",
  "UMEJO": "うめじょ",
  "UMEYO": "うめよ",
  "URAKO": "うらこ",
  "URARA": "うらら",
  "UNPEI": "うんぺい",
  "UTSUHO": "うつほ",
  "EIKO": "えいこ",
  "YOUKO": "ようこ",
  "ESHIKO": "えしこ",
  "ECHIE": "えちえ",
  "ETSUKA": "えつか",
  "ETSUKO": "えつこ",
  "ETSUYO": "えつよ",
  "ENAKO": "えなこ",
  "EBIZOU": "えびぞう",
  "EMINA": "えみな",
  "EMIKO": "えみこ",
  "ERIKA": "えりか",
  "ERIE": "えりえ",
  "ERISA": "えりさ",
  "ERINA": "えりな",
  "ERIKO": "えりこ",
  "ERIO": "えりお",
  "ERIHO": "えりほ",
  "ERIMO": "えりも",
  "ERUSA": "えるさ",
  "ERUKO": "えるこ",
  "ENMA": "えんま",
  "OKINA": "おきな",
  "OGIWARA": "おぎわら",
  "OKUNO": "おくの",
  "OSAKO": "おさこ",
  "OSAME": "おさめ",
  "OTSUYO": "おつよ",
  "OTOHIME": "おとひめ",
  "OMAKO": "おまこ",
  "ORIE": "おりえ",
  "ORIBE": "おりべ",
  "OIWA": "おいわ",
  "OKICHI": "おきち",
  "OTAMA": "おたま",
  "OGIN": "おぎん",
  "OKOU": "おこう",
  "OICHINOKATA": "おいちのかた",
  "OSHIU": "おしう",
  "OSHIZU": "おしず",
  "OSHICHI": "おしち",
  "OSHAKA": "おしゃか",
  "OKATSU": "おかつ",
  "OSOME": "おそめ",
  "OKURA": "おくら",
  "ONAO": "おなお",
  "OTOYO": "おとよ",
  "ONOU": "おのう",
  "OHAMA": "おはま",
  "OYUU": "おゆう",
  "OYOU": "およう",
  "OSATO": "おさと",
  "ORYUU": "おりゅう",
  "KAIKO": "かいこ",
  "KAISHI": "かいし",
  "KOU": "こう",
  "KOUKO": "こうこ",
  "KAEKO": "かえこ",
  "KAORUKO": "かおるこ",
  "KAORI": "かおり",
  "KAORU": "かおる",
  "KAKUKO": "かくこ",
  "KAGUYA": "かぐや",
  "KASANE": "かさね",
  "KAZANE": "かざね",
  "KAZAMI": "かざみ",
  "KASHIKO": "かしこ",
  "KASHIYO": "かしよ",
  "KAJIKO": "かじこ",
  "KASUMI": "かすみ",
  "KAZUE": "かずえ",
  "KAZUKO": "かずこ",
  "KAZUMI": "かずみ",
  "KAZUYO": "かずよ",
  "KAZUO": "かずお",
  "KAZUHO": "かずほ",
  "KAZUHA": "かずは",
  "KAZUYA": "かずや",
  "KACHIKO": "かちこ",
  "KATSUE": "かつえ",
  "KATSUKO": "かつこ",
  "KATSUYO": "かつよ",
  "KATSUMI": "かつみ",
  "KATSUHIKO": "かつひこ",
  "KADZUE": "かづえ",
  "KADZUSA": "かづさ",
  "KADZUKO": "かづこ",
  "KADZUMI": "かづみ",
  "KANAE": "かなえ",
  "KANAME": "かなめ",
  "KANAKO": "かなこ",
  "KANAJO": "かなじょ",
  "KANAMI": "かなみ",
  "KANABUN": "かなぶん",
  "KANEE": "かねえ",
  "KANEKO": "かねこ",
  "KANEMI": "かねみ",
  "KANEYO": "かねよ",
  "KANOKA": "かのか",
  "KANOE": "かのえ",
  "KANOKO": "かのこ",
  "KAINA": "かいな",
  "KAEDE": "かえで",
  "KAHORUKO": "かほるこ",
  "KAHOKO": "かほこ",
  "KAHORI": "かほり",
  "KAMAKO": "かまこ",
  "KAMIE": "かみえ",
  "KAMIKO": "かみこ",
  "KAMEKO": "かめこ",
  "KAMEYO": "かめよ",
  "KAYAKA": "かやか",
  "KAYAKO": "かやこ",
  "KAYANO": "かやの",
  "KAYOI": "かよい",
  "KAYOKO": "かよこ",
  "KAYOMI": "かよみ",
  "KARINSHI": "かりんし",
  "KANKO": "かんこ",
  "KANNA": "かんな",
  "KANPEI": "かんぺい",
  "KAKO": "かこ",
  "KAYO": "かよ",
  "KATSU": "かつ",
  "KANO": "かの",
  "GANTA": "がんた",
  "KIIKO": "きいこ",
  "KIEKO": "きえこ",
  "KIKUI": "きくい",
  "KIKUE": "きくえ",
  "KIKUKO": "きくこ",
  "KIKUMI": "きくみ",
  "KIKUYO": "きくよ",
  "KIKUNA": "きくな",
  "KIKUNO": "きくの",
  "KIKUO": "きくお",
  "KIKUHIME": "きくひめ",
  "KIKUMARO": "きくまろ",
  "KISAE": "きさえ",
  "KISAKO": "きさこ",
  "KISHIKO": "きしこ",
  "KISEKO": "きせこ",
  "KITAKO": "きたこ",
  "KICHIKO": "きちこ",
  "KICHIBEE": "きちべえ",
  "KINAKO": "きなこ",
  "KINUE": "きぬえ",
  "KINUKO": "きぬこ",
  "KINUYO": "きぬよ",
  "KINEKO": "きねこ",
  "KINOE": "きのえ",
  "KINOKO": "きのこ",
  "KINOJI": "きのじ",
  "KIMIE": "きみえ",
  "KIMIKA": "きみか",
  "KIMIKO": "きみこ",
  "KIMIJO": "きみじょ",
  "KIMIYO": "きみよ",
  "KIMIJI": "きみじ",
  "KIMUKO": "きむこ",
  "KYOU": "きょう",
  "KIYAKO": "きやこ",
  "KYOUKO": "きょうこ",
  "KYOUMI": "きょうみ",
  "KIYOIKO": "きよいこ",
  "KIYOKA": "きよか",
  "KIYOE": "きよえ",
  "KIYOKO": "きよこ",
  "KIYOICHI": "きよいち",
  "KIYOSHI": "きよし",
  "KIYOMI": "きよみ",
  "KIYOHIDE": "きよひで",
  "KIYONA": "きよな",
  "KIYONO": "きよの",
  "KIYOHIKO": "きよひこ",
  "KIYOHA": "きよは",
  "KIRINTEI": "きりんてい",
  "KIRIE": "きりえ",
  "KIRIKO": "きりこ",
  "KIWAKO": "きわこ",
  "KINKA": "きんか",
  "KINKO": "きんこ",
  "KINSHI": "きんし",
  "KINTAROU": "きんたろう",
  "KIN'YO": "きんよ",
  "KIN'YA": "きんや",
  "KIE": "きえ",
  "KINO": "きの",
  "GINPEI": "ぎんぺい",
  "KUSUKA": "くすか",
  "KUCHAYO": "くちゃよ",
  "KUNIE": "くにえ",
  "KUNIKO": "くにこ",
  "KUNIYO": "くによ",
  "KUNIMI": "くにみ",
  "KUNOKO": "くのこ",
  "KUMAI": "くまい",
  "KUMAKO": "くまこ",
  "KUMIKO": "くみこ",
  "KUMEKO": "くめこ",
  "KURAKO": "くらこ",
  "KURINA": "くりな",
  "KURIKO": "くりこ",
  "KURUMI": "くるみ",
  "KUREKO": "くれこ",
  "KUREHA": "くれは",
  "GUNJOU": "ぐんじょう",
  "KEIICHI": "けいいち",
  "KEIGO": "けいご",
  "KEIKO": "けいこ",
  "KEISEKI": "けいせき",
  "KEIYA": "けいや",
  "KEEKO": "けえこ",
  "KESAE": "けさえ",
  "KESAKO": "けさこ",
  "KESAYO": "けさよ",
  "KESANO": "けさの",
  "KESAMI": "けさみ",
  "KEMIKO": "けみこ",
  "KEMEKO": "けめこ",
  "KEYOKO": "けよこ",
  "KEN'ICHI": "けんいち",
  "KENGO": "けんご",
  "KENJI": "けんじ",
  "KENSUKE": "けんすけ",
  "GENPEI": "げんぺい",
  "KOUICHI": "こういち",
  "KOUJI": "こうじ",
  "KOUHEI": "こうへい",
  "KOKURIKO": "こくりこ",
  "KOKESHI": "こけし",
  "KOKOROKO": "こころこ",
  "KOKONE": "ここね",
  "KOKOMI": "ここみ",
  "KOKORO": "こころ",
  "KOZUE": "こずえ",
  "KOTSUKO": "こつこ",
  "KODZUE": "こづえ",
  "KOCHOU": "こちょう",
  "KOTOE": "ことえ",
  "KOTOKO": "ことこ",
  "KOTOMI": "ことみ",
  "KOTONO": "ことの",
  "KOTOHA": "ことは",
  "KONAMI": "こなみ",
  "KONOHA": "このは",
};

for (var hiragana in hiraganaTests) {
  assert.equal(hepburn.fromKana(hiragana), hiraganaTests[hiragana]); //, "Hirigana conversion failed");
}

for (var katakana in katakanaTests) {
  assert.equal(hepburn.fromKana(katakana), katakanaTests[katakana]); //, "Katakana conversion failed");
}

for (var romaji in toHiraganaTests) {
  assert.equal(hepburn.toHiragana(romaji), toHiraganaTests[romaji]); //, "Hepburn conversion failed");
  assert.equal(hepburn.fromKana(toHiraganaTests[romaji]), romaji); //, "Hepburn conversion failed");
}
