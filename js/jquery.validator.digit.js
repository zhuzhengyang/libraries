$(document).ready(function () {
            jQuery.validator.addClassRules("digits", {
                required: true,
                min: 0
            });
            $("form").each(function () {
                $(this).validate();
            });
});
