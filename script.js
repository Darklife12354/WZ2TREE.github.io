$(document).ready(function () {
    $('#gunOptions').change(function () {
        var selectedValue = $(this).val();
        if (selectedValue !== "") {
            var section = $('#' + selectedValue);
            section.get(0).scrollIntoView();
        }
    });
});