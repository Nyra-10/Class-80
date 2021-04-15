var nameofstudentsarray = [];
function submit() {
    var displaystudentarray = [];
    for (var j = 1; j <= 4; j++) {
        var name = document.getElementById("name_of_the_student_" + j).value;
        console.log(name);
        nameofstudentsarray.push(name);
    }
    var noofstudents=nameofstudentsarray.length;

    for(var k=0; k<noofstudents;k++){
        displaystudentarray.push("<h4>name- "+nameofstudentsarray[k]+"</h4>");
        console.log(displaystudentarray);
    }
    document.getElementById("display_name_with_commas").innerHTML=displaystudentarray;
    var removecommas=displaystudentarray.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=removecommas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    nameofstudentsarray.sort();
    var displaystudentarraysort=[];
    var noofstudents=nameofstudentsarray.length;

    for(var k=0; k<noofstudents;k++){
        displaystudentarraysort.push("<h4>name- "+nameofstudentsarray[k]+"</h4>");
        console.log(displaystudentarraysort);
    }
    var removecommas=displaystudentarraysort.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=removecommas;
}