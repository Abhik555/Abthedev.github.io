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