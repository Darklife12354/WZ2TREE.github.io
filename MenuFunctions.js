$(document).ready(function () {
    $("#guns").hover(function () {
        $(".gunsSubMenu").show();
        }, function () {
        $(".gunsSubMenu").hide();
        }
    );
    //Another Hover
    $(".assaltRiflesButton").hover(function () {
        $(".gunsSubMenu").show();
        $(".assaltRiflesMenu").show();    
        }, function () {
            $(".gunsSubMenu").hide();
            $(".assaltRiflesMenu").hide();   
        }
    );
    //Another Hover
    $("#hoverButton").hover(function () {
        $(".gunsSubMenu").show();
        $(".assaltRiflesMenu").show();  
        }, function () {
            $(".gunsSubMenu").hide();
            $(".assaltRiflesMenu").hide();   
        }
    );
    //Another Hover
    $(selector).hover(function () {
            // over
            
        }, function () {
            // out
        }
    );
});