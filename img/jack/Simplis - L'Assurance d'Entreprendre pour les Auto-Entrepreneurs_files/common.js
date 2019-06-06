$(document).ready(function() {

    // Navigation --------------------------------------------------------------

    $("#nav_show").css('display', 'none');

    $('#nav-button').click(function(e) {
        e.preventDefault();
        $("#nav_show").stop().fadeToggle();
    });

    if ($("#h_nav").data('affix') == "1" && $(window).width() > 1360) {
        $("#h_nav").affix({
            top: 20
        });
    } else {
        $("#h_nav").addClass('affix');
    }

    $(window).scroll(function() {
        if ($("#h_nav").hasClass('affix') === false) {
            $("#nav_show").stop().hide();
        }

        if ($(".call_to_action").length) {
            if($(window).width() > 600){  
                if ($(window).scrollTop() > 100) {
                    $(".call_to_action").addClass('minimize');
                } else {
                    $(".call_to_action").removeClass('minimize');
                }
            } else {
                $(".call_to_action").addClass('minimize');
            }
        }
    });

    if($(window).width() <= 600){  
        $(".call_to_action").addClass('minimize');
    }


    // Scroll to section -------------------------------------------------------

    $('.scroll-section').click(function(e) {
        e.preventDefault();

        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 70
        }, 1000);
    });

    // Set block height same for all cols in row -------------------------------

    var setColAsSameSize = function() {
        var max_height;

        $(".same_col_h").each(function() {
            max_height = 0;

            $parent = $(this);

            $parent.find('.same_col').each(function() {
                $(this).css("height", "auto");
            });

            $parent.find('.same_col').each(function() {
                $self = $(this);
                if ($self.height() > max_height) {
                    max_height = $self.height();
                }
            });

            $parent.find('.same_col').each(function() {
                $(this).height(max_height);
            });
        });
    };

    setColAsSameSize();

    $(window).resize(function() {
        setColAsSameSize();
    });

    // Widget ------------------------------------------------------------------

    if ($("#footer_child_a").length) {
        $("#footer_child_a").chainedTo("#footer_parent_a");
    }

    if ($(".f_search_dropdown").length) {
        $(".f_search_dropdown").css('display', 'none');

        $("#f_search").submit(function (e) {
            var child_a = $("#footer_search_activity_result").val();
            var parent_a = $("#footer_search_activity_cat").val();

            if (child_a === '' || parent_a === '') {
                e.preventDefault();

                var $input = $("#widget_search_activity");
                $input.css('color', '#f44336');
                $input.val('Veuillez entrer une activité');
            }
        });

        $("#widget_search_activity").focus(function () {
            $(this).val("");
            $(this).css('color', '#9CD1EB');
        });

        $("#f_more").click(function (e) {
            e.preventDefault();

            $(this).css('display', 'none');
            $(".f_search_dropdown").show();
        });
    }

    // Callback ----------------------------------------------------------------

    $('.product-button').click(function(e) {
        e.preventDefault();

        var product = ($(this).data('product')) ? '/product/' + $(this).data('product') : '';
        var frameUrl = baseUrl + "form/callback" + product;

        $("#iframe-callback-wrapper").html('<iframe src="' + frameUrl + '" id="home-callback" style="width:100%;height:350px; border: none;"></iframe>');
        $("#being_called_modal").modal('show');
        // Facebook pixel
        // fbq('track', 'Lead');
    });

    // Callback 2 --------------------------------------------------------------

    $('.btn_call_action_2').click(function(e) {
        e.preventDefault();

        var product2 = ($(this).data('product')) ? '/product/' + $(this).data('product') : '';
        var frameUrl2 = baseUrl + "form/callback" + product2;

        $("#iframe-callback-wrapper-2").html('<iframe src="' + frameUrl2 + '" id="home-callback" style="width:100%;height:350px; border: none;"></iframe>');
        $("#being_called_modal_2").modal('show');
    });

    $(document).ready(function() {

        var product3 = ($("#iframe-callback-wrapper-3").data('product')) ? '/product/' + $("#iframe-callback-wrapper-3").data('product') : '';
        var frameUrl3 = baseUrl + "form/callback" + product3 + '/blue';

        $("#iframe-callback-wrapper-3").html('<iframe src="' + frameUrl3 + '" id="home-callback" style="width:100%;height:350px; border: none;"></iframe>');
    });

    // Form verification -------------------------------------------------------

    $(".form-check").each(function() {
        $self = $(this);

        $self.find('input').focusin(function() {
            $input = $(this);
            $parent = $input.parent();

            if ($parent.hasClass('form-error')) {
                $parent.removeClass('form-error');
            }
        });

        $self.find('input').focusout(function() {
            $input = $(this);
            $parent = $input.parent();

            if ($input.val() !== "") {
               $parent.removeClass('form-error');
               $parent.addClass('form-valid');
            } else {
               $parent.removeClass('form-valid');
            }

            if ($input.hasClass('field-email') && $input.val() !== "") {
                var email_pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);

                if ( ! email_pattern.test($input.val())) {
                    $parent.removeClass('form-valid');
                    $parent.addClass('form-error');
                }
            }

            if ($input.hasClass('field-phone') && $input.val() !== "") {
                var phone_pattern = new RegExp(/^0[1-9]\d{8}$/);

                if ( ! phone_pattern.test($input.val())) {
                    $parent.removeClass('form-valid');
                    $parent.addClass('form-error');
                }
            }

            if ($input.hasClass('field-cp') && $input.val() !== "") {
                var cp_pattern = new RegExp(/^[0-9]{5}$/);

                if ( ! cp_pattern.test($input.val())) {
                    $parent.removeClass('form-valid');
                    $parent.addClass('form-error');
                }
                else {
                    $parent.removeClass('form-error');
                }
            }
        });

        $self.find('select').change(function() {
           $input = $(this);
           $parent = $input.parent();

            if ($input.val() !== "") {
                $parent.removeClass('form-error');
                $parent.addClass('form-valid');
            } else {
                $parent.removeClass('form-valid');
            }
        });
    });

    // Responsive Header
    var header_full = function() {
        if ($(window).width() < 1300) {
            $("#h_nav").removeClass('affix-top');
            $("#h_nav").addClass('affix');
            $(window).off('.affix');
        }
    };

    header_full();

    $(window).resize(function() {
        header_full();
    });

//DED_
    // Simulation liens internes  -------------------------------------------------------
    $(".ancre").click(function(evt){
        if(this.href){

        } else{
          evt.preventDefault();
        }
        var ancre;
        if(this.id)
          ancre = this.id.substring(1);
        else
          ancre = this.name.substring(1);
        var pos = $("#"+ancre ).offset().top;
        $(document).scrollTop(pos);
    });

    // Enquête Satisfaction -------------------------------------------------------

    // Change l'aspect des étoiles survolées
    $(".glyphicon-star-empty").mouseover( function(){
        var n = $(this).attr("for");
        n = n.substr(n.length-1);
        $("label[for ^= 'note']").removeClass("glyphicon-star");
        $("label[for ^= 'note']").addClass("glyphicon-star-empty");
        for(i=1; i<=n; i++){
          $("label[for='note" + i + "']").addClass("glyphicon-star");
          $("label[for='note" + i + "']").removeClass("glyphicon-star-empty");
        }
    });

    // Aspect lorsqu'on ne survole plus les étoiles
    $(".etoiles").mouseleave( function() {
        $("label[for ^= 'note']:not('.selectionnee')").removeClass("glyphicon-star");
        $("label[for ^= 'note']:not('.selectionnee')").addClass("glyphicon-star-empty");
        $("label[for ^= 'note'].selectionnee").removeClass("glyphicon-star-empty");
        $("label[for ^= 'note'].selectionnee").addClass("glyphicon-star");
    });

    // Sélection d'une étoile
    $(".etoiles input[type='radio']").click( function() {
        var n = $(this).attr("id");
        n = n.substr(n.length-1);
        $("label[for ^= 'note']").removeClass("selectionnee");
        for(i=1; i<=n; i++){
          $("label[for='note" + i + "']").addClass("selectionnee");
        }

    });

    // Envoi de la note en AJAX
    $("#frm_evaluation").submit(function (evt){
        evt.preventDefault();
        var envoyees = $("#frm_evaluation").serialize();
        var envoyeesArray = $("#frm_evaluation").serializeArray();
        var donnees = new Array;
        for(i in envoyeesArray){
          donnees[envoyeesArray[i].name] = envoyeesArray[i].value;
        }

      $.ajax({
          type : "POST",
          url : donnees["url"],
          data : envoyees,
          // dataType : "html",
          // succes : function(html, statut){
          //   $(html).appendTo("#evaluation");
          // },
          // error : function(resultat, statut, erreur){
          //   $(resultat).appendTo("#evaluation");
          //   $(erreur).appendTo("#evaluation");
          // }
        });
        $("#evaluation").modal("hide");
    })


    // Payment -------------------------------------------------------

    // Google Analytics -------------------------------------------------------
    // $(".gaLead .gaClick").click(function(){
    //     ga("send", {
    //           hitType : "event",
    //           eventCategory : "Lead",
    //           eventAction : "Clic",
    //           eventLabel : ""
    //         });
    // })

    // Modification du mot de passe -------------------------------------------------------
    $("#frm_mdp").submit(function(evt){
      if ($("[name='nouveau']").val() != $("[name='confirmation']").val() || (!$("[name='nouveau']").val() || !$("[name='confirmation']").val()) ){
        $("[name='nouveau'], [name='confirmation']").addClass("error");
        evt.preventDefault();
      }
    });

    $("[name='nouveau'], [name='confirmation']").on("input", function(){
      $("[name='nouveau'], [name='confirmation']").removeClass("error");
      if($("[name='nouveau']").val() == $("[name='confirmation']").val() && ($("[name='nouveau']").val() || $("[name='confirmation']").val()) ) {
        $("[name='nouveau'], [name='confirmation']").addClass("success");
        $("[name='nouveau'], [name='confirmation']").removeClass("error");
      }
      else {
        $("[name='nouveau'], [name='confirmation']").addClass("error");
        $("[name='nouveau'], [name='confirmation']").removeClass("success");
      }
    });

    // FAQ -------------------------------------------------------
    $("div.item_title").each(function() {                   // ajout d'un id pour créer une ancre dans la page FAQ
      if($(this).html().indexOf("Comment résilier mon contrat Simplis") >= 0){
        $(this).attr("id", "resiliation");
      }
    });

    //Formulaire demande devis
    $("#s_subscribe").click(function(evt){
      location.hash = "#register_form";     //en version mobile positionne au niveau du formulaire s'il n'est pas validé
      $("#fregister_form").submit();
    });

//_DED

// call button
$('.btn_call_action').click(function(event){
  event.preventDefault();
  $('.btn_call_1').click();
});

});