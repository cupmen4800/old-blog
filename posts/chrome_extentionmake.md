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

## 今回使う技術や言語

今回はGoogle Chromeの拡張機能を作っていきます。

まあ、作れるの?という感じの人もいると思いますが、

- JavaScript(できた方が楽だけどできなくても解説するからおｋ)
  
  - ウェブとかの記述をするプログラミング言語
  - サーバー関連とかもできる
  - インストール不要

- 設定用のJSONファイル
  
  - 使うファイルやアイコン、権限などを設定する

- HTML(アイコンクリックしたときのやつとかを表示したい場合に必要)
  
  - ウェブサイトとかの土台になる言語

- テキストエディタ(メモ帳でも可能)
  
  - VSCode推奨

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

今回はアクセスしているサイトのリンクやタイトル瞬時にコピーする拡張機能の

『コピーLink』を作っていきます。(クソダサネーミング)

画像はこんな感じです。

![]()

まあ、とてもシンプルです。

仕組みはこの様になっています。

1. メニューをクリック or ショートカットを入力

2. その瞬間アクセスしているサイトのURLをコピー

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
{
  "name": "コピーLink", // 名前
  "version": "1.0.0", // 拡張機能のバージョン
  "manifest_version": 3, // 設定ファイルのバージョン　※ググると
  "description": "コピーの拡張", // 説明
  "permissions" : [
    "activeTab",
	"contextMenus",
    "clipboardRead",
    "clipboardWrite",
    "tabs"
	],
  "action": {
    "default_popup": "index.html"
  },
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["*://*/*"],
      "js": ["smith.js"]
    }
  ],
  "icons": {
    "48": "LEEKS.devTeropIcon.png"
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
    title: "URLをコピー",
    contexts: ["all"]
  });
})

chrome.contextMenus.onClicked.addListener((info,tab,item) => {
  chrome.tabs.query({ currentWindow: true, active: true }, (tab) => {
    let clipText  = ``
    switch (info.menuItemId) {
      case "parent":
        clipText = `${tab.url}`
        console.log(tab.url)
        chrome.tabs.sendMessage(tab.id, {"clipTxt": "ABC"})
        break;
    }
  })
});
```
