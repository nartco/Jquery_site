$(function () {

    $("#home_child_a").chainedTo("#home_parent_a");

    $("#h_search_list").css('display', 'none');

    $("#h_search").submit(function (e) {
        var child_a = $("#search_activity_result").val();
        var parent_a = $("#search_activity_cat").val();

        if (child_a === '' || parent_a === '') {
            e.preventDefault();

            var $input = $("#h_search_autocomplete");
            $input.css('color', '#f44336');
            $input.val('Veuillez entrer une activité');
        }
    });

    $("#h_search_autocomplete").focus(function () {
        $(this).val("");
        $(this).css('color', '#444');
    });

    $("#h_more").click(function (e) {
        e.preventDefault();

        $(this).css('display', 'none');
        $("#h_search_list").show();
    });

});
