# nexe_test

## 使い方　

- nexeをインストール
    ```
    yarn add nexe
    ```

- 必要なChromeDriverをダウンロード

    [ChromeDriverダウンロードページ](https://sites.google.com/a/chromium.org/chromedriver/downloads)

    chrome配下に`chromedriver`ファイルを格納して下さい
    windowsは`chromedriver.exe`ファイルを格納して下さい

- nexeでコンパイルを実行

    - Windows用
        ```
        node_modules/.bin/nexe src/index.js --target windows-x64--12.8.0
        ```
        ```
        compile:win
        ```

    - MAC用
        ```
        node_modules/.bin/nexe src/index.js --target mac-x64-12.8.0
        ```
        ```
        compile:mac
        ```

    - Linux用
        ```
        node_modules/.bin/nexe src/index.js --target linux-x64
        ```
        ```
        compile:linux
        ```

## 参考記事

- [「Node.jsでブラウザを自動操作してみよう」の感想・備忘録3 – 上尾市のWEBプログラマーによるブログ](https://ageo-soft.info/books/programming_books/javascript_books/268/)  
- [nexe/nexe: 🎉 create a single executable out of your node.js apps](https://github.com/nexe/nexe)  
- [node.jsでエクセルファイルを編集する方法 | Raccoon Tech Blog [株式会社ラクーンホールディングス 技術戦略部ブログ]](https://techblog.raccoon.ne.jp/archives/1610417694.html)  
- [Selenium × Chrome DevToolsで効率的な自動テストスクリプト作成 – 株式会社ルーター](https://rooter.jp/web-crawling/selenium_chrome_dev_tools/)
- [chrome ヘッドレスの環境構築(Mac編) – 株式会社ルーター](https://rooter.jp/web-crawling/setup-headless-chrome-mac/)
- [RPAクローラー構築時にSeleniumでよく使うJavaScriptチートシート – 株式会社ルーター](https://rooter.jp/web-crawling/selenium_execute_js/)
- [Downloads - ChromeDriver - WebDriver for Chrome](https://sites.google.com/a/chromium.org/chromedriver/downloads)
- [nexe Tips - Qiita](https://qiita.com/maruware/items/f0a3650d71726eadfdcf)
- [nexe/nexe: 🎉 create a single executable out of your node.js apps](https://github.com/nexe/nexe#target-string--object)
- [chromedriver - npm](https://www.npmjs.com/package/chromedriver)  

