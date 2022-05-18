---
title: "Chrome拡張機能を作ろう!"
date: "2022-05-15"
update_data: "2022-05-15"
janle: "programming"
view_janle: "プログラミング"
category: "js"
view_category: "JS"
detail: "TEST"
---

## 今回やること

今回はGoogle Chromeの拡張機能を作っていきます。

まあ、作れるの?という感じの人もいると思いますが、

- JavaScript(できた方が楽だけどできなくてもおｋ)
  
  - ウェブとかの記述をするプログラミング言語

- 設定用のJSONファイル

- HTML(メニューとかを表示したい場合)
  
  - ウェブサイトとかの土台

- テキストエディタ(メモ帳でも可能)

の4点があればとりあえず作れます。

他にもメニューなどの見た目を変えたい場合はCSSもできたほうが良いです。

これで技術についての説明は終わったので拡張機能の種類についての説明に移ります

拡張機能の種類は主にこの3つです。

### Browser Actions

右上についててよく見かけるやつです。

有名なもので言うと殆どの拡張で見かけます。

### Page Actions

ページによって表示されたり

されなかったりするタイプの拡張機能です。

### Override Pages

新しいタブなどのページを置き換えたりできます。

主に

- 新しいタブ

- ブックマーク

- 履歴

といったものを置き換えることができます。

それと、注意点ですが、一つの拡張機能で一つのページしか置き換えられません。

私もこのように新しいタブを自作のものにしています。

![]()

### 今回作る拡張機能

今回はコピークリップボードを拡張する拡張機能の『コピー+』を作っていきます。(クソダサネーミング)

画像はこんな感じです。

![]()

まあ、とてもシンプルです。

仕組みはこの様になっています。

1. 普通のコピーをそのままコピーできます。

2. コピーしたものを0.5秒刻みで取得
   
   - コピー履歴をJSから取得するのは無理みたい
   
   - そもそもできたとしてもOSごとに取得方法が異なる

3. 結果が変わった場合のみリストに書き込む
   
   - 時刻を取得して古いものから順に消す

それと、メニューからコピーした文字を確認できます。

といった感じで割と単純です。

まあ、こんな感じで仕組みを解説したところで実際にコードを書いてきましょう。

## 実践

### 環境構築

まずは任意のディレクトリ内にフォルダを作っていきましょう。

なるべくわかりやすいところがおすすめです。

フォルダを作ったらこの中に設定ファイルを書いていきます。

まずは、テキストエディタで『manifest.json』という名前で保存して
以下のように入力

```json
// この『//』はいらないはいらない
{
  "name": "名前", // 名前
  "version": "1.0.0", // 拡張機能のバージョン
  "manifest_version": 3, // 設定ファイルバージョン
  "description": "説明です。", // 説明
  "permissions" : [ // アクセス権限とか
    "activeTab",
	"contextMenus",
    "storage",
    "clipboardRead"
	],
  "action": {
    "default_popup": "popup.html" // アイコンクリックしたときのHTML
  },
  "background": {
    "service_worker": "background.js" // 裏で動くJSファイル
  },
  "icons": {
    "48": "アイコン.png" // アイコン
  }
}
```

これが今回使う設定になります。

ここからJSファイルを書いておきます。

同じディレクトリ内に『background.js』を作成

この中にメニューの表示などの操作を記述していきます。

まずはメニューからこのように入力

```js
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    type: "normal",
    id: "parent",
    title: "コピー+",
    contexts: ["editable","selection"]
  });

  chrome.contextMenus.create({
    type: "normal",
    id: "c1",
    parentId: "parent",
    title: "ペースト",
    contexts: ["editable"]
  });

  chrome.contextMenus.create({
    type: "normal",
    id: "gc1",
    parentId: "c1",
    title: "1",
    contexts: ["all"]
  });

  chrome.contextMenus.create({
    type: "normal",
    id: "gc2",
    parentId: "c1",
    title: "2",
    contexts: ["all"]
  });

  chrome.contextMenus.create({
    type: "normal",
    id: "gc3",
    parentId: "c1",
    title: "3",
    contexts: ["all"]
  });

  chrome.contextMenus.create({
    type: "normal",
    id: "gc4",
    parentId: "c1",
    title: "4",
    contexts: ["all"]
  });

  chrome.contextMenus.create({
    type: "normal",
    id: "gc5",
    parentId: "c1",
    title: "5",
    contexts: ["all"]
  });
})

chrome.contextMenus.onClicked.addListener((info,tab,item) => {
  const selectedMenu = info.menuItemId;
  const targetName = info.stext;

  switch (selectedMenu) {
    case "c":
      chrome.storage.local.set({text: targetName}, (val) => {});
      console.log("AAA");
      saveToClipboard(targetName);
      break;
    
    case "gc1":
      chrome.storage.local.get("text", (valtext) => {
        console.log(valtext);
      });
      break;
  }
});
```
