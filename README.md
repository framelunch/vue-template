# [WIP] vue template

## 解説

Vueを用いて静的サイトを作成するテンプレ候補

### vue-cliじゃダメなの？

3.0.0 alpha-11試したんだけど設定があまりにも隠蔽されててこれに頼るのちょっと怖かった

### [scaffold-frontend](https://github.com/framelunch/scaffold-frontend)との違い

#### gulp不使用

* css出力時に.vueファイルからスタイルを取り出す際にwebpackを通す必要があり、gulpとwebpackから両方出力するのは嫌な予感がした
* viewだけのためにgulp使うのもなぁ…ということでwebpack一本化
* JSのエントリーポイントから使いたいCSSをimportすればOK

#### ViewテンプレがEJSからhandlebarsへ

* ejs用のloaderが微妙感あった 更新が遅いとか
* vueのテンプレ構文との統一(mustache)
* まぁvue使うならそんなにテンプレで頑張ることもないでしょう

#### babelでES2015+からTypeScriptへ

* vueをTypeScriptで書きたかったため
* 型だけならflowでもいいんだけど[公式ドキュメントでもTypeScriptが激推しされてた](https://jp.vuejs.org/v2/guide/typescript.html)ので

#### webpackでdll使った

vendor.bundleのかわりにdll化。はやいらしい

#### commit時のフック処理

`src` の中の`.ts`, `.css`, `.json`, `.vue`を整形(prettier)し、lintかけてダメならエラー(commitさせない)

#### Prettier

あっちだとブランチ切ってあるんだけど、こっちはもう追加しちゃった

## 既知の問題点

### view(handlebars)

* includeが `/src/views` からの相対パス
    * 頑張ったけどどうにもならなかった
* 変数をテンプレに埋め込めない
    * 仕様。`/src/views/data.json` に書いて!

### vue

* sourcemapが効かない
    * 謎。TypeScriptのせい？

### webpack

* dllの恩恵をdevelopmentだと受けられない？
    * ファイルサイズがかわんない気がする…けどdllの読み込みをコメントアウトするとエラーになるから読んではいるっぽい
* handlebarsのhelperまわりでWARNINGが出ている
    * 出力されるhtmlに問題がないので無視 うっかりこの辺のhelperがbundleされてる気配もなし

## Prettierのすすめ

commit時に勝手にコードを整形してくれる。

エディタを設定すると保存時にもいい感じに整形してくれる。

### VSCode設定

1. [拡張](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)を入れる
1. ローカル設定に以下を追加

```json
{
  // prettier
  "[typescript]": {
    "editor.formatOnSave": true
  },
  "[css]": {
    "editor.formatOnSave": true
  },
  "[vue]": {
    "editor.formatOnSave": true
  },
  "[json]": {
    "editor.formatOnSave": true
  },
}
```

グローバル設定をどうするかは人によりますが、falseにしといたほうがいいと思います。他のプロジェクトで適当に整形されたりするので。

### IntelliJ設定

[この辺](https://qiita.com/kouchi67/items/6d3b5cf66f57c4ff6600)を参考に。


## TODO

- [ ] VuexでSPAモード & 静的アセット書き出し
- [ ] サンプルプロジェクトをもうちょいいい感じに
