console.log("! WARNING !");
console.log("Do not type anything here unless you are absolutely sure you understand what you are doing.");

function toggle_close(unit){
    var unit_lessons = document.getElementById("unit" + unit.toString() + "-lessons");
    if (unit_lessons.style.display === "none") {
        unit_lessons.style.display = "block";
   }else{
    unit_lessons.style.display = "none";
   }
}