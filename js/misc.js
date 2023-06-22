function opengithub(){
    console.log("Opening Github");
    console.log(btn.item.toString);
    window.open("https://www.github.com/Abhik555");
}

function submitsuggestion(){
    const text = document.getElementById("text1");
    const name = document.getElementById("email");
    const idea = text.value;
    const author = name.value;
    console.log(idea)
    console.log(author)
}

function hover(item){

    var divname = null;
    var parent = null;
    var obj = null;

    switch(item.id){
        case "1P":
            divname = "pro1";
            break;
        case "2P":
            divname = "pro2";
            break;
        case "3P":
            divname = "pro3";
            break;
        default:
            divname = "Not Found";
    }

    parent = document.getElementById(divname);
    
    switch(divname){
        case "pro1":
            obj = document.getElementById("abo1");
            break;
        case "pro2":
            obj = document.getElementById("abo2");
            break;
        case "pro3":
            obj = document.getElementById("abo3");
            break;
        default:
            obj = "Not Found ERROR"
    }

    //obj.style.visibility = "visible";
    //parent.style.visibility = "hidden";
}

function revert(item){

    var divname = null;
    var obj = null;
    var parent = null;

    switch(item.id){
        case "1P":
            divname = "pro1";
            break;
        case "2P":
            divname = "pro2";
            break;
        case "3P":
            divname = "pro3";
            break;
        default:
            divname = "Not Found";
    }
    
    parent = document.getElementById(divname);

    switch(divname){
        case "pro1":
            obj = document.getElementById("abo1");
            break;
        case "pro2":
            obj = document.getElementById("abo2");
            break;
        case "pro3":
            obj = document.getElementById("abo3");
            break;
        default:
            obj = "Not Found ERROR"
    }

    //obj.style.visibility = "hidden";
    //parent.style.visibility = "visible";

}