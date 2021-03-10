var Student_Names = [];

function Submit() {
    var Student_1 = document.getElementById("Student_Name_1").value;
    var Student_2 = document.getElementById("Student_Name_2").value;
    var Student_3 = document.getElementById("Student_Name_3").value;
    var Student_4 = document.getElementById("Student_Name_4").value;

    Student_Names.push(Student_1);
    Student_Names.push(Student_2);
    Student_Names.push(Student_3);
    Student_Names.push(Student_4);

    console.log(Student_Names);

    document.getElementById("Names").innerHTML = Student_Names;

    document.getElementById("Submit").style.display = "none";
    document.getElementById("Sort").style.display = "inline-block";
}

function Sorting() {
    Student_Names.sort()
    console.log(Student_Names);
    document.getElementById("Names").innerHTML = Student_Names;
}