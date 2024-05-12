<?php

$data = json_decode(file_get_contents('php://input'), true);

if (!empty($data['name']) && !empty($data['studentID']) && !empty($data['grade'])) {
    $file = 'students.csv';
    $line = "{$data['name']},{$data['studentID']},{$data['grade']}\n";
    file_put_contents($file, $line, FILE_APPEND | LOCK_EX);
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}

?>
