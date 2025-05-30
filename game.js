var level=0;
var highscore=0;
var clicks=-1;
var possiblecolors=['blue','red','yellow','green'];
var pattern=[];
var userpattern=[];


$("button").click(function(element){//user side!!
    clicks++;
    var color=element.target.id;//id  represents color here!!
    animation("#"+color);
    audio(color);
    checkpattern(color);

})

function checkpattern(color){
    userpattern.push(color);
    if(color==pattern[clicks]){
        if(userpattern.length==pattern.length){
            setTimeout(function(){
            userpattern=[];
            nextlvl();
            clicks=-1;},1000)
        }
        else{} }
    else{
        $("#level").html("Game over! maybe can do better try again");
        Lost();
        userpattern=[];
        pattern=[];

        if(level>highscore){

            highscore=level;
            $('#Score').html("High Score="+highscore);
        }
        level=0;
        clicks=-1;
    }
}
function Lost(){
    var sound=new Audio("sounds/lost.mp3");
    sound.play();
}

function audio(color){
    var sound=new Audio("sounds/"+color+".mp3");
    sound.play();
}
function addcolor(color){
    pattern.push(color);
}
function animation(color){
    $(color).fadeOut(150).fadeIn(150);
}
function nextlvl(){
    level++;
        $("#level").html("Level="+level);
    var rand=Math.floor(Math.random()*4);
  var color=possiblecolors[rand];
    addcolor(color);
        audio(color);
        animation("#"+color);
}

$(document).keypress(function(){
    if(level<=0){
        nextlvl()
    
    }

})