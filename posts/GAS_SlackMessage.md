---
title: "GASで予定を送信するBotを作ろう!"
date: "2022-04-29"
update_data: "2022-04-29"
janle: "programming"
view_janle: "プログラミング"
category: "gas"
view_category: "GAS"
detail: ""

---

## 今回やること

今回は、スプレッドシートに書いた直近の予定をSlackに定期投稿するプログラムをGASで作っていきます。

具体的にはこんな感じです。(画質汚くてすみません。)

![メッセージの画像](/storage/article/GAS_SlackMessage/Mihon.jpg)

今回はこのように予定と時間それと、誰の予定かを記入します。

## GASとは?

GASとはGoogleが開発しているGoogleアプリ向けのプログラミング言語です。

要は、VBAのGoogle版です。

主に、Google Workspaceなどを使っている会社などで使われることが多いです。

GASにはこのような特徴があります。

- JavaScriptベースなので構文がJavaScriptとほぼ一緒
  
  - alert()などのブラウザ関数が使えない
  
  - 少し古いバージョンがベースになっている

- クラウド上で動作する
  
  - Googleのサーバー上で動くのでPCを起動しておく必要がない

- ウェブサイトが作れる
  
  - 主に社用ウェブサイトの作成に使える

- Google製品との連携が楽(スプレッドシート、Gmail、AdSense、Youtube)

これを踏まえてメリットとデメリットを見てみます

- メリット
  
  - クラウドで動作するからPCを起動する必要がない
  
  - すぐに動作する
  
  - Google製品との連携が楽
    
    - AdSenseやYoutubeアナリティクスとの連携は特筆できる点
  
  - JSユーザーにとってはとっつきやすい

- デメリット
  
  - ファイルとしてのダウンロードができない
  
  - VBAとは書き方が違う
  
  - 無料版(Google Workspace未加入)では制限がある
    
    - また、Google Workspaceのプランによっても制限が変わります。

このように一長一短ありますが、AdSenseなどとの連携はOfficeユーザーの方にとってもとても魅力的ではないでしょうか?

といったところで、そろそろ本題に入っていきます。

## 本題

ということで、GASのプログラムを作っていきたいのですが、

その前に予定を書き込むスプレッドシートのファイルを作っていきましょう。

## 入力するスプレッドシートを作

まずは、スプレッドシートの新規ファイルを作ってください。

そしたら、E〜Zを消してください。

![E〜Zの削除後画像](/storage/article/GAS_SlackMessage/FZ.jpg)

次に上4つにこのように項目を入力して、わかりやすいように色を変えておきましょう。

![イメージ](/storage/article/GAS_SlackMessage/ColorSheet.jpg)

他にも、全体に線をつけたりしておきましょう。

装飾したら、それぞれ日付と時間を上のような形で入力しましょう。

名前と予定は適当に入力してください。

データが送信されるには次の条件が必要です。

- 日付が現在日時と一致していること

- 時刻が過ぎていないこと

入力し終わったら、いよいよGASのエディタを起動していきましょう。

起動するには『拡張機能』、『Apps Script』をクリック。

![イメージ](/storage/article/GAS_SlackMessage/GAS_Boot.jpg)

これでGASを起動できました。

そしたら、コードを書いていきましょう。

## GASを書いてみよう

まずは、ここに書いてあるのを全部消してください。

そしたら、このように書いておきます。

```js
const SLACK_BOT_TOKEN="***"
```

これは箱みたいなものです。

この中に文字や数字を入力していきます。

また、文字はダブルクォーテーションで囲みましょう。

その他にも、constは後から入れ替えができません。

このように後から入れ替えができない値を定数といいます。

覚えておきましょう。

また、ここの文字は後でAPIキーというものを取得します。

APIというのは他のサービス(SlackやAmazon、Youtubeなど...)と連携するものです。

APIキーというのはそれと連携するパスワードみたいなものです。

ここでAPIキーに関しての説明も終わったので、続きをやっていきます。

今度は関数を作っていきます。

関数とは、複数の処理をまとめたものです。

GASではこの関数を実行してコードを動かします。

まず、関数はこのように書いてください。

```js
function postSlackbot() {
  // この中に処理を書いていきます
}
```

この中に、メッセージを送信する処理を入力していきます。

また、コメントアウト(//で始まるやつ)はただの説明なので不要です。

このように入力してください。

```js
function postSlackbot() {
  // ↓変数はletで定義
  let token = SLACK_BOT_TOKEN; // トークン
  let slackApp = SlackApp.create(token); //Slackライブラリとの連携(これでメッセージを送信したりする)
  let channelId = "#送るチャンネル名"; //送るチャンネル名
  let message = getMessage(); //メッセージ生成関数
  slackApp.postMessage(channelId, message);
}
```

コメントアウト(//から始まるやつ)は不要です。

また、letで定義したものは変数といって

基本は定数と同じなのですが、あとから入れ替えができます。

ただ、ここではあまり出番がなかったためここで出てきますが、

今回はconstでもおｋです。

また、基本的にはconstで十分です。

そしたら、getMessageという関数を作成。

```js
function getMessage() {

}
```

この中にシートから時間などの値を収集して

メッセージを作ってその文字列を返す処理を作っていきます。

このようにしてください

```js
function getMessage() {
  // ここで定数の定義をします

  // ↓変数定義は『let』
  // 殆どの場合const ↓Gアプリを指す ↓このファイルを指定      ↓シートを選択
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("入力シート"); // シートファイルを取得
  const range = sheet.getDataRange();

  //                   ↓で2次元配列にする ↓で配列の指定した場所を切り落とす
  const values = range.getValues().slice(1);
  const date = new Date(); // newで配列や時間などを作成できる。
  // Date()が日時を表している。(Arrayで配列になったりする)
  // Date(ここに文字を入れると取得する日時が決められる )

  //               ↓日付を文字にする      ↓データ ↓タイムゾーン ↓『西暦-月-日付』になる
  const todayStr = Utilities.formatDate(date, 'JST', 'yyyy-MM-dd');
  //               ↓時間を文字にする                 ↓『時間:分』になる
  const totime = Utilities.formatDate(date, "JST", "HH:mm");
}
```

コードについて解説しておきます。

- sheetでシートのファイルを取得
  
  - 『SpreadsheetApp』がスプレッドシートから情報を取得することを意味している。
  
  - 『getActiveSpreadsheet()』が最初から入っている関数でスプレッドシートなどのアプリからGASを開いた場合にそのファイルを指定します。
  
  - 『getSheetByName("シート名")』でシートを指定します。
    
    - シートが一枚しか無い場合は不要です。

- range.Values().slice()
  
  - range=シートからすべてのセルを取得
  
  - getValues()で二次元配列(
    
    ```js
    [
      ["A"]
      ["B"]
      ["C"]
      ["D"]
    ]
    ```
    
    このように書く)に変換
    
    ※二次元配列とはcsvみたいなデータです。
  
  - slice(1)で上の4項目を削除

- 『new』演算子というのは様々な関数を使って実際の値を作れます。
  
  - Date()関数で時間を取得
  
  - ()内に何もなければ現在時刻を取得
  
  - 時刻を指定したい場合は
  
  ```js
    Date(西暦, 月, 日付, 時刻, 分, 秒, コンマ秒);
  ```
  
  と入力
  
  - 他にもArray()で配列(["A","B","C"])こういうやつを作れる。

- todayStrで現在時刻から『西暦-月-日付』の形の文字に変換します。
  
  - Utilities.formatDate(date, "タイムゾーン(日本の場合はJST)", "返される文字列")
    
    - 文字列部分はyyyyで西暦、MMで月、日付 HHで時刻、mmで分を表す。

説明は以上です。

そしたら、上から順に日付が一致して、時間が過ぎていない場合のみメッセージを返したいので

データ選別処理の繰り返しなどを繰り返し実行させます。

下記のように入力してください。

```js
function getMessage() {
  // ここで定数の定義をします

  // ↓変数定義は『let』
  // 殆どの場合const ↓Gアプリを指す ↓このファイルを指定      ↓シートを選択
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("入力シート"); // シートファイルを取得
  const range = sheet.getDataRange();

  //                   ↓で2次元配列にする ↓で配列の指定した場所を切り落とす
  const values = range.getValues().slice(1);
  const date = new Date(); // newで配列や時間などを作成できる。
  // Date()が日時を表している。(Arrayで配列になったりする)
  // Date(ここに文字を入れると取得する日時が決められる )

  //               ↓日付を文字にする      ↓データ ↓タイムゾーン ↓『西暦-月-日付』になる
  const todayStr = Utilities.formatDate(date, 'JST', 'yyyy-MM-dd');
  //               ↓時間を文字にする                 ↓『時間:分』になる
  const totime = Utilities.formatDate(date, "JST", "HH:mm");

  // ここでループ

  //   ↓変数.       ↓式  ↓配列の数   ↓式が達成されるまでi+1される
  for (let i = 0; i < values.length; i++) { //生成されるメッセージの条件の定義

    //               ↓日付を文字にする      ↓データ      ↓タイムゾーン ↓『西暦-月-日付』になる
    const forvalD = Utilities.formatDate(values[i][0], "JST", "yyyy-MM-dd"); // シートから日時を抽出
    //               ↓時間を文字にする                          ↓『時間:分』になる
    const forvalT = Utilities.formatDate(values[i][1], "JST", "HH:mm"); // シートから時刻を抽出
  }
}
```

ループする際にはfor文を使います。

for文は一定の条件を満たすまで処理を繰り返します。

改めてfor文の書き方は次のとおりです。

```js
for (let i = 比較したい値; i < 比較したい値; 足すか引くかの動作を入力(例 i+1, i-1)) {

}
```

足す1などの場合はi++やi--でおｋです。

また、forの下の定数はそれぞれシートに入力したデータを文字列に変換します。

そしたら、シートのデータ選別をしていきます。

for文の中に以下のように入力してください。

```js
if (forvalD == todayStr &&
  // ↓数学の不等号と同じ意味
    forvalT >= totime)
    {

  }
```

条件によって結果を変える場合は下のような形で入力します。

```js
//       ↓不等号と同じ意味
if (Test >= Test2 && Test3 == Test4) {
//                ↑『なおかつ』や『それと』などと言った意味がある
}
```

if文を書いたら、このように記入

```js
if (forvalD == todayStr &&
  // ↓数学の不等号と同じ意味
    forvalT >= totime)
    {

    // ↓名前欄が空欄の場合
    if (values[i][2] == "") {
      name = "???"; // ???になる
    } else { // else{}でそれ以外を表現
      name = values[i][2]; // 普通に表示する
    }

    // 上と同じ
    if (values[i][3] == "") {
      theme = "???";
    } else {
      theme = values[i][3];
    }
    // ↓送信されるメッセージのテンプレにシートの値を埋め込んだやつ
    const postInfo =
      ":calendar: 直近の予定 :calendar:\n" +
      "予定 : " + theme + "\n" +
      "書いたやつ : " + name + "さん\n" +
      "時間 : " + forvalT + "\n" +
      "\n" +
      "早めに準備しましょう\n" +
      "予定一覧はここ→シートのリンク";
    return postInfo
  }
```

ifの中で更にifで名前と予定が空欄の場合に???と表示するようにしています。

ここに表示する文字は任意で大丈夫です。

その他にも、

```js
else {
  処理
}
```

でifの条件に合わなかった場合に別の結果を表示できます。

更にその下に実際に送信されるメッセージが書かれています。

また、値同士を足したい場合は+でつなげてください。

数字の場合は足し算、文字の場合は単純に文字が連結されます。

こちらもそれぞれ、『theme、name、forvalT』が入っていれば大丈夫です。

また、:calender:は🗓の絵文字です。

更に、その下に

```js
return postInfo
```

と入力してください。

これで値を返します。

値を返すというのは、例えば、

```js
console.log(getMessage()) /// console.log()はコンソールに入力した値を表示する関数
```

結果:

```
:calendar: 直近の予定 :calendar:
予定 : theme
書いたやつ : nameさん
時間 : " + forvalT

早めに準備しましょう
予定一覧はここ→貼ったリンク
```

こういった感じで最終的に出た結果をさっきの文字とかみたいに使用することができます。

これでプログラムは完成したので、Slackの設定、さっき言ったAPIキーの取得と

Slackと連携を取るためのライブラリを導入します。

とは言ってもコードを書くことは無いのでそんな難しくありません。

## Slackの設定とAPIキー取得、ライブラリ

[こちら](https://qiita.com/da1002/items/d8381f2c915fa94bbc4e)の記事を御覧ください。(人任せ)

上の記事を参考にしてAPIキーを取得したらここにコピペしてください。

```js
const SLACK_BOT_TOKEN="APIキー"
```

また、ライブラリ導入も上の記事を御覧ください。

## 一度実行してみよう

1. GASのエディタの実行ボタンをクリックしてみましょう。
   
   - 一応ですが、この部分が『postSlackbot』になっているか確認しておきましょう。
   
   - ![](/storage/article/GAS_SlackMessage/GAS_Home.jpg)

2. すると、『承認が必要です』と出てくるので、『権限を確認』をクリック
   
   - ![権限認証のイメージ](/storage/article/GAS_SlackMessage/KENGENSHO.jpg)

3. 自分のアカウントを選択
   
   - ![](/storage/article/GAccountSecret.jpg)

4. 『このアプリはGoogleで確認されていません』と表示されますが、『詳細を表示』をクリック
   
   - ![](/storage/article/GAS_SlackMessage/WarnPage.jpg)
   
   -  この表示が出てくる理由はGoogleが未確認のコードのためちゃんと挙動を知った状態で動かしてください。という意味で表示されます。

5.  『安全ではないプロジェクトに移動』をクリック

6. 改めて説明が出てきます。

7. 『許可』を選択

そしたら、指定したSlackチャンネルにアクセスしてください。 

これで正常に表示できている場合はそのまま次の工程に進んでください。

正常に送信できていない場合は以下の要な場合があります。

- データが入力されていない

- 日時が違う

- 時間が過ぎている

- コードのミスやAPIキーの貼り忘れ

## 定期実行をしよう

ここで一定時間ごとにメッセージを送りたいので定期実行をする必要があります。

 まずは、左側のメニューからトリガーをクリック

![](/storage/article/GAS_SlackMessage/Trigger.jpg)

そしたら、右下の『トリガーを作成』をクリック

それぞれの設定をこのようにしておいてください。

![](/storage/article/GAS_SlackMessage/TimeTrigger.jpg)

また、『時間ベースのトリガータイム』と『時間の間隔』は任意の時間にしておいてください。

他にも、無料ユーザーの方は30分おきで動作を確認しておりますので30分以上にしておきましょう。

これで、『保存』をクリック

これで完成です!

## 最後に

いかがでしたか?(クソブログ感)

これ以外にもGoogleカレンダーとの連携や

ChatWorkと連携してみたりなど他にも色々なことができます。

ということで、また別の記事か動画でお会いしましょう!!

## 参考にした記事

[GAS×Slack×スプレッドシートを用いたLT管理Bot作成 - Qiita](https://qiita.com/da1002/items/d8381f2c915fa94bbc4e)

参考にさせていただき、

本当にありがとうございました。
