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
        removeAndSetEnemies();

    });



    function removeAndSetEnemies() {

        for (var i = 0; i < characterArr.length; i++) {
            var char = characterArr[i];
            if (char != myName) {
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

        myHeartPoint = myHeartPoint - enemyAttackPoint;
        chargedAttackPoint = (myAttackPoint * attackCount);
        enemyHeartPoint = enemyHeartPoint - chargedAttackPoint;



        me.find("#hp").text(myHeartPoint);
        defender.find("#hp").text(enemyHeartPoint);
        comment = "You attacked for " + chargedAttackPoint + " and enemey attacked for " + enemyAttackPoint;
        console.log(comment);

        $("#comment").text(comment);

        ifWon();
    });

    function ifWon(){
        if (myHeartPoint < 0 && enemyHeartPoint > 0){
            alert("you lose");
            restart();
        }
    }

});
