$(document).ready(function() {
    $(".section").click(function() {
        $(this).find(".content").slideToggle("slow");
    });

    $(".resume-container").hover(
        function() {
            $(this).css("box-shadow", "0 8px 16px rgba(0, 0, 0, 0.7)");
        }, 
        function() {
            $(this).css("box-shadow", "0 4px 8px rgba(0, 0, 0, 0.5)");
        }
    );
});
