$(document).ready(function(){
    $(function(){
        $("#typed").typed({
            strings: ["Welcome to <strong>PROBZIP</strong>","Know more about us\nby <strong>scrolling down</strong>"],
            typeSpeed: 120,
			startDelay: 1500,
			backSpeed: 120,
            backDelay: 700,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: true,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });
    });
    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }