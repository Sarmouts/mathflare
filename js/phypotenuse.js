﻿$(document).ready(function () {
    $("#button").click(function (e) {
        e.preventDefault();
        var fside = $("#fside").val();
        var sside = $("#sside").val();
        var result = Math.sqrt((fside * fside) + (sside * sside));
        if (fside <= 0 || sside <= 0) {
            $("#output").text("Please enter a valid value");
            $("#fside").val(1);
            $("#sside").val(1);
        }
        else {
            $("#output").text("The hypotenuse of the right triangle is " + result + " cm");
            $("#fside").val(1);
            $("#sside").val(1);
        }
    });
    $(".show-formula").click(function () {
        $("#formula").toggle(500);
    });
});