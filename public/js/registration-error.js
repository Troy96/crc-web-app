$(document).ready(function () {
    
    allcourses("course", "branch"); // first parameter is id of course drop-down and second parameter is id of branch drop-down
   
    $("#signupForm").validate({
        rules: {
            firstname: {
                required: true,
                minlength: 3

            },
            lastname: {
                required: true,
                minlength: 3
            },
            email: {
                required: true
            },
            username: {
                required: true,
                minlength: 3

            },
            password: {
                required: true,
                minlength: 5,
                maxlength: 15

            },
            conform_password: {
                required: true,
                minlength: 5,
                maxlength: 15,
                equalTo: "#password"
            },
            dob: {
                required: true
            },
            highschool_marks : {
                required: true
            },
            Intermediate_marks : {
                required: true
            },
            btech_marks : {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            gender: "required",
            mobile_no: {
                required: true,
                minlength: 10,
                maxlength: 10
            },
            address: {
                required: true,
                minlength: 5
            },
            College_id: {
                required: true
            },
            user_type: "required",

            course: {
                required: true
            },
            branch: {
                required: true
            },
            enroll_no: {
                required: true
            },
            backlogs: {
                required: true
            },
            startyear: {
                required: true
            },
            endyear: {
                required: true
            },
            training_company: {
                required: true
            },
            training_location: {
                required: true
            },
            training_duration: {
                required: true
            },
            native_place: {
                required: true
            },
            resume: {
                required: true
            }

        },
        messages: {
            firstname: {
                required: "Please enter your firstname",
                minlength: "Please enter atleast 3 characters"
            },
            lastname: {
                required: " Please enter your lastname",
                minlength: "Please enter atleast 3 characters"
            },
            email: {
                required: "Please enter your email id "
            },
            username: {
                required: "Please enter a username",
                minlength: "Please enter atleast 3 characters"
            },
            dob: "Please select dob",
            password: {
                required: "Please enter a password",
                minlength: "Your password must be at least 5 characters long",
                maxlength: "Your password not more than 15 characters long"
            },
            conform_password: {
                required: "Please enter a password",
                minlength: "Your password must be at least 5 characters long",
                maxlength: "Your password not more than 15 characters long",
                equalTo: "Please enter the same password as above"
            },
            gender: "Please select your gender",
            mobile_no: {
                required: "Please enter your mobile number",
                minlength: "Your number atleast 10 digit ",
                maxlength: "Your number not more than 10 digit"
            },
            address: {
                required: "Please enter your home address",
                minlength: "Your home address atleast 5 character"
            },
            College_id: {
                required: "Please enter your college id"
            },

            course: {
                required: "Please select your course"
            },

            branch: {
                required: "Please select your branch"
            },

            enroll_no: {
                required: "Please enter your enroll no"
            },

            backlogs: {
                required: "Please enter your backogs"
            },
            startyear: {
                required: "Please slelect your course start year"
            },
            endyear: {
                required: "Please select your course end year"
            },
            training_company: {
                required: "Please enter the Training Company"
            },
            training_location: {
                required: "Please enter the Training Location"
            },
            training_duration: {
                required: "Please enter the Training Duration"
            },
            native_place: {
                required: "Please enter the native place"
            },
            highschool_marks : {
                 required: "Please enter the High School Marks"
            },
            Intermediate_marks : {
                 required: "Please enter the Intermediate Marks"
            },
            btech_marks : {
                 required: "Please enter the B.Tech Marks"
            },
            resume : {
                required: "Please upload the CV"
            }
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


//more form validation here -----

$(function () {
    $("#datepicker").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1900:'today'"
    });

    // Start year here
    $('#startyear').append($('<option />').val("").html("start course"));
    $('#endyear').append($('<option />').val("").html("end course"));
    for (i = new Date().getFullYear(); i > 1900; i--) {

        $('#startyear').append($('<option />').val(i).html(i));
        
    }

    for (i = new Date().getFullYear()+10; i > 1900; i--) {

        $('#endyear').append($('<option />').val(i).html(i));
    }
    //end year here 

});




});