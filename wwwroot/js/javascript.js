
$("#calculateGrade").click(function () {
    var iAssignmentsGrade = document.getElementById("assignments").value;
    var iGroupProjectsGrade = document.getElementById("group_projects").value;
    var iQuizzesGrade = document.getElementById("quizzes").value;
    var iExamsGrade = document.getElementById("exams").value;
    var iIntexGrade = document.getElementById("intex").value;

    if (iAssignmentsGrade > 100 || iAssignmentsGrade < 0) {
        alert("Please enter a number between 0-100")
    }
    else if (iGroupProjectsGrade > 100 || iGroupProjectsGrade < 0) {
        alert("Please enter a number between 0-100")
    }
    else if (iQuizzesGrade > 100 || iQuizzesGrade < 0) {
        alert("Please enter a number between 0-100")
    }
    else if (iExamsGrade > 100 || iExamsGrade < 0) {
        alert("Please enter a number between 0-100")
    }
    else if (iIntexGrade > 100 || iIntexGrade < 0) {
        alert("Please enter a number between 0-100")
    }
    else {
        //set up some blank variables to be used later on
        var iFinalGrade = 0;

        //calculate the final grade based on grade weights and what the user inputted
        iFinalGrade = ((iAssignmentsGrade * .5) + (iGroupProjectsGrade * .1) + (iQuizzesGrade * .1) + (iExamsGrade * .2) + (iIntexGrade * .1));

        //create an output variable
        alert('Based on the grades that you inputted, you will end up with a ' + iFinalGrade + ' in the class');
    }
    //alert(iAssignmentsGrade);
    
});
