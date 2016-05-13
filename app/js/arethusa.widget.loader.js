function loadArethusaWidget(id,url,conf) {
    $.when(
        $.getStylesheet('http://localhost:8090/arethusa.min.css'),
        $.getStylesheet('http://localhost:8090/vendor/foundation-icons/foundation-icons.css'),
        $.getStylesheet('http://localhost:8090/vendor/font-awesome-4.1.0/css/font-awesome.min.css'),
        $.getStylesheet('http://localhost:8090/vendor/angular-foundation-colorpicker/css/colorpicker.css'),
        $.getScript('/arethusa.monolith.js')
    ).then(function() {
        var widget = new Arethusa();
        widget.on(id).from(url).with(conf).start();
    })
}