//alert("Test template");

var projectName = null;
//var play_icon = document.getElementById('play_icon');
var textString;

// Your JS code here


function hasBlanks() {
    let blanks = " \t\n\r";
    for (let count = 0; count < textString.length; count++) {
        if (blanks.includes(textString[count])) {
            return true;
        }
    }
}

function getProject() {
    var textString_box = document.getElementById('project-name');
    console.log("The project title is:" + " " + textString);
    textString_box.value = String("¡Good!: Project title sent");
    return;
}

function checkProject() {
    //alert("this is working");
    textString = document.getElementById('project-name').value;
    if (textString == "") {
        alert("ERROR: ¡No project title to use! Introduce it and try again");
        return;

    } else if (hasBlanks(textString)) {
        alert("ERROR: There are spaces on your title! Please delete them and try again");
        return;
    } else {
        getProject()


    }

}