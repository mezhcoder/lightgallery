import lightGallery from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.3";
import lgPager from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.3/plugins/pager";

lightGallery(document.getElementById("gallery-container"), {
    speed: 500,
    plugins: [lgPager]
});
