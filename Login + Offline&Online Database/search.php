<?php
$db_host = 'localhost:8889';
$db_user = 'root';
$db_password = 'root';
$db_db = 'grades';

$conn = new mysqli($db_host, $db_user, $db_password, $db_db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$studentId = $_POST['student_id'];

$sql = "SELECT * FROM students WHERE name = '$name' AND student_id = '$studentId'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "Name: " . $row["name"]. " - Student ID: " . $row["student_id"]. " - Grade: " . $row["grade"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>
