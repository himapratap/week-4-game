var i = 10;
var characterArr = ['c1', 'c2', 'c3', 'c4'];
var myCharacter;
var defender;
var myhp = 0;

$(document).ready(function() {


    $(".character").on("click", function() {
        myCharacter = $(this).attr("value");
        console.log("You have chosen ", myCharacter);
        removeAndSetEnemies();

    });



    function removeAndSetEnemies() {

        for (var i = 0; i < characterArr.length; i++) {
            var char = characterArr[i];
            if (char != myCharacter) {
                var enemy = $("#" + char);
                enemy.remove();
                enemy.removeClass("character active");

                enemy.addClass("enemy")
                $(".enemies").append(enemy);

            }
        }


    }



    $(document).on('click', '.enemy', function() {

        defender = $(this);
        console.log("You have clicked enemy as:" + defender);

        setDefender();


    });

    function setDefender() {
        $(".defender").append(defender);


    }


    $(document).on('click', '.attack', function() {
        console.log($("#" + myCharacter + " #hp"));
        myhp = parseInt($("#" + myCharacter).attr("hp"));
        console.log(" prev hp");
        console.log(myhp);
        myhp = myhp - 10;
        $("#" + myCharacter).attr("hp", myhp);
        $("#" + myCharacter + " #hp").text(myhp);


    });


});
