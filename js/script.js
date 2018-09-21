$(window).scroll(function() {
        if ($("#menu").offset().top > 100) {
            $("#menu").addClass("bg-light");
						$("#menu").addClass("fixed-top");

        } else {
            $("#menu").removeClass("bg-Danger");
        }
      });
