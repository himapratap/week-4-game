var i = 10;
var characterArr = ['c1', 'c2', 'c3', 'c4'];
var myName, defenderName;
var defender;
var myhp = 0;
var me;
var myHeartPoint = 0;
var attackCount = 0;
var myAttackPoint, enemyAttackPoint, enemyHeartPoint, chargedAttackPoint = 0;
var comment;
$(document).ready(function() {


    $(".character").on("click", function() {
        me = $(this);
        myName = me.attr("value");
        console.log("You have chosen ", myName);

        $(".character").each(function(index) {
            var otherCharacters = $(this).attr("value");
            console.log(otherCharacters);
            if (otherCharacters !== myName) {
                var enemy = $(this).clone();
                $(this).hide();
                enemy.removeClass("character active");
                enemy.addClass("enemy")
                $(".enemies").append(enemy);
            }
        });

    });



    $(document).on('click', '.enemy', function() {

        defender = $(this);
        console.log("You have clicked enemy as:" + defender.attr("id"));

        setDefender();


    });

    function setDefender() {
        defenderName = defender.attr("value");

        $(".defender").append(defender);
        myHeartPoint = parseInt(me.attr("hp"));
        myAttackPoint = parseInt(me.attr("ap"));
        enemyHeartPoint = parseInt(defender.attr("hp"));
        enemyAttackPoint = parseInt(defender.attr("ap"));


    }


    $(document).on('click', '.attack', function() {
        attackCount++;
        console.log($("#c2 #hp").html());

        myHeartPoint = myHeartPoint - enemyAttackPoint;
        chargedAttackPoint = (myAttackPoint * attackCount);
        enemyHeartPoint = enemyHeartPoint - chargedAttackPoint;
        me.find("#hp").text(myHeartPoint);
        defender.find("#hp").text(enemyHeartPoint);
        comment = "You attacked for " + chargedAttackPoint + " and enemy attacked for " + enemyAttackPoint;
        console.log(comment);

        $("#comment").text(comment);

        ifWon();
    });

    function ifWon() {
        if (myHeartPoint < 0 && enemyHeartPoint > 0) {
            alert("You Lose ! GAME OVER !!!!!");
            restart();
        } else if (enemyHeartPoint < 0) {
            if ($(".enemy").length == 0) {
                alert("YAAAY YOU WON !!");
                restart();

            } else {
                alert("Enemy is dead with " + enemyHeartPoint + " heart points. Select new defender..");

            }
            comment = "";
            $("#comment").text(comment);
            defender.fadeOut();


        }
    }

    function restart() {
        location.reload();
        /*    $(".character").each(function(index) {
                $(this).show();

            });

            $(".enemy").each(function(index) {
                $(this).remove();

            });


             $(".defender").each(function(index) {
                $(this).remove();

            });*/
    }
});
