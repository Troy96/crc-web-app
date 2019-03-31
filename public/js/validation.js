$(function(){

  //ADDING CUSTOM VALIDATION FUNCTION
  $.validator.addMethod('strongPassword', function(value, element) {
    return this.optional(element) || value.length >= 5;
  });

  $.validator.addMethod('nameLength', function(value, element) {
    return this.optional(element) || value.length >= 3;
  });

  $('#user-register').validate({
    rules: {
      firstname: {
        required: true,
        letterswithbasicpunc: true,
        nameLength: true
      },
      lastname: {
        required: true,
        letterswithbasicpunc: true,
        nameLength: true
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        strongPassword: true
      },
      password_confirmation: {
        required: true,
        equalTo: '#password'
      }
    },
    messages: {
      firstname: {
        required:'<span class="pf-5 text-danger align-middle">'+
        '&nbsp <i class="fas fa-exclamation-circle"></i> Enter a name please!'+
        '</span>',
        letterswithbasicpunc:'<span class="pf-5 text-danger align-middle">'+
        '&nbsp <i class="fas fa-exclamation-circle"></i> The name must contain only letters!'+
        '</span>',
        nameLength:'<span class="pf-5 text-danger align-middle">'+
        '&nbsp <i class="fas fa-exclamation-circle"></i> The name must be at least 3 chars!'+
        '</span>'
      },
      lastname: {
        required:'<span class="pf-5 text-danger align-middle">'+
        '&nbsp <i class="fas fa-exclamation-circle"></i> Enter a name please!'+
        '</span>',
        letterswithbasicpunc:'<span class="pf-5 text-danger align-middle">'+
        '&nbsp <i class="fas fa-exclamation-circle"></i> The name must contain only letters!'+
        '</span>',
        nameLength:'<span class="pf-5 text-danger align-middle">'+
        '&nbsp <i class="fas fa-exclamation-circle"></i> The name must be at least 3 chars!'+
        '</span>'
      },
      email: {
        required: '<span class="pf-5 text-danger align-middle">'+
        '&nbsp <i class="fas fa-exclamation-circle"></i> Enter an e mail please!'+
        '</span>',
        email: '<span class="pf-5 text-danger align-middle">'+
        '&nbsp <i class="fas fa-exclamation-circle"></i> Enter a valid email please!'+
        '</span>'
      },
      password: {
        required:'<span class="pf-5 text-danger align-middle">'+
        '&nbsp <i class="fas fa-exclamation-circle"></i> Enter a password please!'+
        '</span>',
        strongPassword:'<span class="pf-5 text-danger align-middle">'+
        '&nbsp <i class="fas fa-exclamation-circle"></i> The password must be at least 5 chars!'+
        '</span>'
      },
      password_confirmation: {
        required:'<span class="pf-5 text-danger align-middle">'+
        '&nbsp <i class="fas fa-exclamation-circle"></i> Enter a password please!'+
        '</span>',
        equalTo:'<span class="pf-5 text-danger align-middle">'+
        '&nbsp <i class="fas fa-exclamation-circle"></i> Enter same password please!'+
        '</span>'
      }
    }
  });
});