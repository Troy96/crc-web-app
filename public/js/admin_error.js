$(document).ready(function () {

    $("#adminCreateForm").validate({
        rules: {
            first_name: { required: true },
            last_name: { required: true },
            email: { required: true },
            phone: { required: true },
            password: { required: true },
        },
        messages: {
            first_name: {required: "Please enter your first name"},
            last_name: {required: "Please enter your last name"},
            email: {required: "Please enter email"},
            phone: {required: "Please enter phone"},
            password: {required: "Please enter password"},
        },
        errorPlacement: function (error, element) {

            error.css("color", "#FF0000");
            error.insertAfter(element.parent());
        },
        highlight: function (element, errorClass, validClass) {
            $(element).parents(".rowval").addClass(errorClass);
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents(".rowval").removeClass(errorClass);
        }
    });

});