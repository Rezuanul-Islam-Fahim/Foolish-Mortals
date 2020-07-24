$(document).ready(function () {
    $("#myModal").on("hidden.bs.modal", function () {
        $("#iframeYoutube").attr("src", "#");
    })
})

function changeVideo(vId) {
    var iframe = document.getElementById("iframeYoutube");
    iframe.src = "https://www.youtube.com/embed/" + vId;

    $("#myModal").modal("show");
}