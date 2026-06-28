# 中国象棋单机版 · Android 平板安装包

A WebView wrapper that packages the single-player Chinese Chess (Xiangqi) web
game into an installable Android tablet APK. The game's HTML/CSS/JS is bundled
offline under `app/src/main/assets/` and served over a secure
`https://appassets.androidplatform.net/` origin (via `WebViewAssetLoader`), so
`localStorage` and `fetch` work without any network connection.

## ▶ Prebuilt APK (install directly)

A ready-to-install debug APK is committed at:

```
android/apk/ChineseChess-xiangqi-v1.0.apk
```

Download it to an Android tablet/phone, enable "install from unknown sources",
and tap to install — or `adb install -r android/apk/ChineseChess-xiangqi-v1.0.apk`.
Runs fully offline on Android 5.0+ (minSdk 21).

## The game (`app/src/main/assets/index.html`)

A complete, self-contained single-player Xiangqi implementation (no external
dependencies, pure HTML5 canvas + JS):

- Full, correct rules for every piece — chariot, horse (with leg-block),
  cannon (screen capture), elephant (river + eye-block), advisor & general
  (palace), soldier (sideways after crossing the river), flying-general rule,
  and check / checkmate / stalemate detection.
- Built-in AI opponent (negamax + alpha-beta with move ordering) at three
  difficulty levels (易 / 中 / 难).
- Choose to play 红 (first) or 黑; board auto-flips to your side.
- Undo (悔棋), new game (新局), move highlights, last-move markers,
  check warnings, and a tablet-friendly responsive canvas.

> Note: the original Claude Design HTML could not be imported in this remote
> environment (the design MCP needs an interactive login, and the project is
> private), so this game was authored from scratch to the same spec. To use a
> different HTML instead, replace `index.html` per "Swapping in your own game
> HTML" below and rebuild.

## Project layout

```
android/
├── app/
│   ├── build.gradle                         # app module config (SDK levels, deps)
│   └── src/main/
│       ├── AndroidManifest.xml
│       ├── assets/index.html                # ← the game (replace with your HTML)
│       ├── java/com/xiangqi/tablet/MainActivity.java
│       └── res/                             # icon, theme, strings
├── build.gradle / settings.gradle          # root Gradle config
└── gradlew                                  # Gradle wrapper (Gradle 8.14.3)
```

- Package id: `com.xiangqi.tablet`
- App name: 中国象棋单机版
- minSdk 21 (Android 5.0+), targetSdk 34 — runs on phones and tablets
- Orientation: `fullSensor` + immersive fullscreen

## Swapping in your own game HTML

Replace `app/src/main/assets/index.html` with your file. If it references extra
assets (images, JS, CSS), drop them alongside it under `assets/` and reference
them with **relative** paths. Then rebuild.

## Building the APK

Prerequisites: JDK 17+, Android SDK with `platforms;android-34` and
`build-tools;34.0.0`. Point Gradle at your SDK via `local.properties`:

```
sdk.dir=/path/to/android-sdk
```

Build the debug APK:

```
cd android
./gradlew assembleDebug
```

Output: `app/build/outputs/apk/debug/app-debug.apk`

Install on a tablet (developer mode / "install from unknown sources" enabled):

```
adb install -r app/build/outputs/apk/debug/app-debug.apk
```

> The debug APK is signed with the standard Android debug key — fine for
> sideloading and testing. For Play Store distribution, build a release variant
> signed with your own keystore (`./gradlew assembleRelease`).
