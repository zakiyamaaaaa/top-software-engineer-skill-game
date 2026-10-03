# 画像・音声の制作記録

画像は内蔵 imagegen ツールで新規生成し、実際のゲームへ組み込みました。

## ギルド背景

保存先: `assets/guild.png`

最終プロンプト:

Use case: illustration-story. Asset type: wide background for an original Japanese engineering fantasy RPG browser game. A beautiful cozy magical engineering guild library at twilight, huge arched windows overlooking floating islands, pale lavender sky, warm gold lamps, teal glowing crystals, wooden desks with magical blueprints, bookshelves and plants, highly polished anime game background, painterly detailed environmental concept art. Wide landscape 1536x1024 composition, empty central floor suitable for overlay of UI and characters. Inviting atmosphere of discovery. No characters, no text, no logo, no watermark.

## ヒカリ

保存先: `assets/hikari.png`

最終プロンプト:

Use case: illustration-story. Asset type: original visual novel character portrait for Japanese engineering fantasy RPG. One adult female magical software engineer named Hikari, about 27 years old, friendly confident expression, short dark indigo bob hair with turquoise hair clip, amber eyes, cream guild uniform with teal capelet and subtle gold embroidery, holding a small glowing crystal notebook, tasteful anime visual novel illustration, polished fine linework and soft cel shading. Waist-up portrait, centered, entire head and shoulders visible, plain dark teal background, no letters, no text, no logo, no watermark. Character occupies frame with comfortable margin.

## 音

`scripts/make_audio.py` でオリジナルの旋律をPCM WAVとして合成しました。外部音源は使っていません。

- `assets/guild-theme.wav`: 32秒のループBGM。C / Am / F / G系の和音とベル、柔らかなパッド。
- `assets/success.wav`: 正解の上昇アルペジオ。
- `assets/discover.wav`: 誤答からの発見を表す柔らかな2音。
- `assets/complete.wav`: クエスト完了のファンファーレ。
- `assets/page.wav`: 会話とページ送りのベル。

## 学習図解

65スキルの事前解説に使う章ごとのSVG図解です。各図は外部画像やフォントに依存せず、`viewBox`内の図形と、初学者にも意味が伝わる日本語ラベルだけで構成しています。略語は図の中で日本語の意味を添え、`learning.js`の各トピックから対応する章の図と説明的な代替テキストを参照します。

- `assets/topics/chapter-00.svg`: 言語とプログラミング（値・型・実行・エラー）
- `assets/topics/chapter-01.svg`: オブジェクト指向（カプセル化・抽象化・継承・多態性の4つと、コンポジションとの違い）
- `assets/topics/chapter-02.svg`: データ構造とアルゴリズム（手順数・データの並べ方・探索）
- `assets/topics/chapter-03.svg`: メモリ管理（参照・データの寿命・不要なデータの回収）
- `assets/topics/chapter-04.svg`: OSとコンピュータ（実行単位・仮想メモリ・入出力・待ち時間）
- `assets/topics/chapter-05.svg`: 並行・非同期処理（共有データ・同期・中止と時間制限）
- `assets/topics/chapter-06.svg`: ネットワークとWeb（名前解決・暗号化・通信・サービス間の約束）
- `assets/topics/chapter-07.svg`: データベース（識別子・索引・まとめた更新・安全な構造変更）
- `assets/topics/chapter-08.svg`: 分散システム（一部の障害・再試行・値が揃うまでの時間・複製）
- `assets/topics/chapter-09.svg`: セキュリティ（本人確認・入力防御・暗号・必要な権限）
- `assets/topics/chapter-10.svg`: テストとデバッグ（テストの大きさ・境目の値・再現実験・整理）
- `assets/topics/chapter-11.svg`: 性能と運用（処理時間・遅さの分布・観測・配信・復旧）
- `assets/topics/chapter-12.svg`: 判断力とモバイル（要求・選択・レビュー・同期・誰でも使える画面）

## 2D広場のキャラクター

- `assets/player.svg`: 見習い設計士の元の正面画像。
- `assets/player-down.svg`、`player-up.svg`、`player-left.svg`、`player-right.svg`: 操作用の4方向画像。正面・背面・左の横顔・右の横顔を別SVGとして用意し、移動方向に合わせて画像ファイルを切り替えます。
- `assets/hikari-sprite.svg`: 既存のヒカリの色・衣装に合わせた広場用の小さなキャラクター。

これらは図形を手書きしたオリジナルSVGです。外部素材や画像生成は使わず、既存の背景に重ねて表示します。
