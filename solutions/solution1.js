function gradeSelector(marks) {
    if (typeof marks !== 'number'){
        return "This is an invalid input !"
    }
    
    if (marks >= 0 && marks < 40) {
      return "E";
    } else if (marks >= 40 && marks <= 49) {
      return "D";
    } else if (marks >= 50 && marks <= 59) {
      return "C";
    } else if (marks >= 60 && marks <= 79) {
      return "B";
    } else if (marks >= 80 && marks <= 100) {
      return "A";
    } else {
      return "Marks range is 0 to 100";
    }
  }
  
  console.log(gradeSelector());