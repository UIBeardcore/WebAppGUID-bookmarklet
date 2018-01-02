javascript: (function(UI, B, e, a, r, d, C, O, R, E) {
    try {
        if (UI.SdlDitaDeliveryRootPath != undefined) {
            R = UI.document;
        } else {
            throw("");
        }
    } catch (ex) {
        alert("Not a SDL Delivery Web APP!");
        return;
    }

    // if (R.getElementById(r)) return;

    // E = R[B + "NS"] && R.documentElement.namespaceURI;
    // E = E ? R[B + "NS"](E, O) : R[B](O);

    // E[e]("id", r);
    // E[e]("src", C + d);
    // (R[a]("head")[0] || R[a]("body")[0]).appendChild(E);

    alert("Topic ID: " + R.querySelector(".page-content > h1.topictitle1").id.split("__")[0]);
})(
    window.top/*, // UI,
    "createElement", //B,
    "setAttribute", //e,
    "getElementsByTagName", //a
    "UIBeardcoreDevTools", //r
    "web-app-bkmlet.js", //d
    "https://cdn.rawgit.com/UIBeardcore/UIBeardcore.DeveloperTool/master/", //C
    "script" // o,r,e
    */
);
