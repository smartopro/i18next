import i18next from "i18next";
import Fetch from "i18next-fetch-backend";

i18next
    .use(Fetch)
    .init({
        backend: {
            loadPath: "locales/{{lng}}/{{ns}}.json"
        },
        lng: "ru",
        fallbackLng: "ru",
        // preload: ["en", "ru"],
        // supportedLngs: ["en", "ru"],
        // load: ["en", "ru"],
        ns: "translation",
        // defaultNS: "translation",
        debug: true
    }, function(err, t) {
        // init set content
        updateContent();
    });

function updateContent() {
    Object.keys(i18next.getResourceBundle(i18next.language, "translation")).forEach(item => {
        document.querySelector(`[data-lngID="${item}"]`).innerHTML = i18next.t(item);
    });
}

i18next.on('languageChanged', () => {
    updateContent();
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn-lng").forEach(item => {
        item.onclick = function () {
            i18next.changeLanguage(item.dataset.lng);
        }
    });
});
