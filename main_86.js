var grades = [];
        var update_scores = function () {
           var val = get_itemList(grades);
           document.getElementById("scores").value = val;
           document.getElementById("studentName").value = val;
           document.getElementById("score").value = "";   
           document.getElementById("studentName").focus();
        }    
        
        var student_grade_add_click = function() {
        var last = document.getElementById("studentName").value;
                var score = parseFloat(document.getElementById('score').value);
                grades.push([last, score]);  
                update_scores();
                document.getElementById("averageScore").value = getAverageScore(grades);
        }

        var get_itemList = function(itemList) {
           if ( itemList.length == 0 ) {
              return "";
           }
           var list = "";
           for ( var i = 0; i < itemList.length; i++) {
              var current = itemList[i];
              for ( var attribute in current ) {
                  list += current[attribute] + ", "; 
              }
          list += "\n";  
           }
           return list;
        }
        
        
        function getAverageScore(grades){ 
        
        var numberOfStudents = grades.length; 
        var sum = 0; 
        if(numberOfStudents > 0) { 
            for(var i=0; i < numberOfStudents; i++) {
                sum += grades[i][1]; 
            }
        return sum/numberOfStudents; 
        }
        return 0; 
        }
        
        function clear_click()
        {
                document.getElementById("form").reset();
                document.getElementById("averageScore").value="";
                grades.splice(0, grades.length);  
        }
        
        var sort_click = function () 
        {
        grades.sort();
        update_scores();
        }
        
        window.onload = function() {
                document.getElementById("addButton").onclick = student_grade_add_click;
                document.getElementById("sortButton").onclick = sort_click;      
                document.getElementById("studentName").focus();
        }
        