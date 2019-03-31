$(document).ready(function () {
 
    $("#jobForm").validate({
        rules: {
            comp_name: {
                required: true,
                

            },
            placement_type:{
                required: true
            },
            location: {
                required: true
            },
           venue: {
               required: true
           },
           date: {
               required: true
           },
           time: {
               required: true
           },
           eligibility:{
               required: true
           },
           jd: {
               required: true
           }

        },
        messages: {
            comp_name: {
                required: "Please enter your company name"
             
            },
            placement_type: {
                required: "Please select Placement Type"
            },
            location: {
                required: "Please enter job Location"
            },
            venue: {
                required: "Please enter Venue"
            },
            date: {
                required: "Please Select Date"
            },
            time: {
                required: "Please enter time"
            },
            eligibility:{
                required: "Please enter eligibility criteria"
            },
            jd: {
                required: "Please Upload Job Description"
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

});