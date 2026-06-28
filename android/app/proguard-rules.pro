# Keep WebView JavaScript interface (none used currently, but safe default)
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}
