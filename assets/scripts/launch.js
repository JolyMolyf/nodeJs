console.log("Hello js i am working");


if ('undefined' == typeof window.jQuery) {
    console.log("no jquery")
} else {
    console.log("jquery")
}

setTimeout(function () {
    $("html").addClass("loader");
    $("html").removeClass("loader");
    $(".loader").css({ display: "none" });
    $(".text").animate({ opacity: "1" });
}, 3500);







document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('slide');
    button.onclick = function () {
        document.getElementById('works').scrollLeft += 20;
    };
}, false);