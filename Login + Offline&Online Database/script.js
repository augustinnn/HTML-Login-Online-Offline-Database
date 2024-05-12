function lookupGrade() {
    var name = document.getElementById("name").value;
    var studentId = document.getElementById("student-id").value;

    fetch('students.csv')
        .then(response => response.text())
        .then(text => {
            var data = CSVToArray(text);
            var found = false;
            for (var i = 0; i < data.length; i++) {
                if (data[i][0] === name && data[i][1] === studentId) {
                    document.getElementById("result").innerText = "Grade: " + data[i][2];
                    found = true;
                    break;
                }
            }
            if (!found) {
                document.getElementById("result").innerText = "No grade found for the provided name and student ID.";
            }
        });
}

function CSVToArray(strData, strDelimiter) {
    strDelimiter = (strDelimiter || ",");
    var objPattern = new RegExp((
    "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

    "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

    "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
    var arrData = [[]];
    var arrMatches = null;
    while (arrMatches = objPattern.exec(strData)) {
        var strMatchedDelimiter = arrMatches[1];
        if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter) {
            arrData.push([]);
        }
        var strMatchedValue;
        if (arrMatches[2]) {
            strMatchedValue = arrMatches[2].replace(new RegExp("\"\"", "g"), "\"");
        } else {
            strMatchedValue = arrMatches[3];
        }
        arrData[arrData.length - 1].push(strMatchedValue);
    }
    return (arrData);
}
