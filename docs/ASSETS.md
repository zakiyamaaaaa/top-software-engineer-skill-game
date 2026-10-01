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
