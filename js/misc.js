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
    switch(item.id){
        case "1P":
            divname = "proj1";
            break;
        case "2P":
            divname = "proj2";
            break;
        case "3P":
            divname = "proj3";
            break;
        default:
            divname = "Not Found";
    }
    console.log(divname);
}

function revert(item){
    var divname = null;
    switch(item.id){
        case "1P":
            divname = "proj1";
            break;
        case "2P":
            divname = "proj2";
            break;
        case "3P":
            divname = "proj3";
            break;
        default:
            divname = "Not Found";
    }
    console.log(divname);
}