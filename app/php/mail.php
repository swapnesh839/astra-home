<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Check if the request is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Read the JSON input
    $inputJSON = file_get_contents('php://input');
    $data = json_decode($inputJSON, true);

    // Basic validation
    if (!isset($data['businessName']) || !isset($data['fullName']) || !isset($data['email']) || 
        !isset($data['phone']) || !isset($data['yourTitle']) || !isset($data['requirement'])) {
        http_response_code(400); // Bad request
        echo json_encode(array("status" => "error", "message" => "Invalid input"));
        exit;
    }

    // Email Content
    $toEmail = 'hello@environply.com';
    $subject = 'Environ Inbound Lead';
    $message = "<div>Business Name: {$data['businessName']}</div>"
             . "<div>Full Name: {$data['fullName']}</div>"
             . "<div>Email: {$data['email']}</div>"
             . "<div>Phone: {$data['phone']}</div>"
             . "<div>Your Title: {$data['yourTitle']}</div>"
             . "<div>Requirement: {$data['requirement']}</div>";

    // Email Headers
    $headers = 'From: hello@starllysolutions.com' . "\r\n" .
               'Reply-To: hello@starllysolutions.com' . "\r\n" .
               'X-Mailer: PHP/' . phpversion() . "\r\n" .
               'Content-type: text/html; charset=utf-8';

    // Sending Email
    if(mail($toEmail, $subject, $message, $headers)) {
        echo json_encode(array("status" => "success", "message" => "Email sent"));
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(array("status" => "error", "message" => "Email not sent"));
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("status" => "error", "message" => "Method not allowed"));
}
?>
