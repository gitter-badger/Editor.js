mocha.setup({ ignoreLeaks: true });

var el;

before(function() {
    el = document.createElement("div");

    el.setAttribute("id", "map");
    el.setAttribute("style", "display: none");

    document.body.appendChild(el);
});
