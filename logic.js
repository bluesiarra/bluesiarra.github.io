console.log("! WARNING !");
console.log("Do not type anything here unless you are absolutely sure you understand what you are doing.");

function all_closed(){
    //Sets all of the unit dropdowns to be closed by default
    elements = document.getElementsByClassName("unit-lessons");
    for (var i = 0; i < elements.length; i++){
        elements[i].style.display="none";
    }
}

function toggle_close(unit){
    var unit_lessons = document.getElementById("unit" + unit.toString() + "-lessons");
    if (unit_lessons.style.display === "none") {
        unit_lessons.style.display = "block";
   }else{
    unit_lessons.style.display = "none";
   }
}

all_closed()