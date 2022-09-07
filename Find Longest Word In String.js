const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", (e) => {
    textarea.style.height = "63px";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
});

function lgword() {
    var str = document.getElementById("textarea").value;
    // console.log(str);
    var strsplit = str.split(' ');
    var maxlength = 0;

    for (var i = 0; i < strsplit.length; i++) {
        if (strsplit[i].length > maxlength) {
            maxlength = strsplit[i].length;
            var result = strsplit[i];
        }
    }
    document.getElementById("resultval").innerHTML = result;

}

function resclr(){
    document.getElementById("textarea").value = "";
    document.getElementById("resultval").innerHTML = "";
    textarea.style.height = "63px";
}