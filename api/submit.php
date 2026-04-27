<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    // 1. Save to requests.json (Local Database)
    $file = 'requests.json';
    $current = [];
    if (file_exists($file)) {
        $content = file_get_contents($file);
        if ($content) {
            $current = json_decode($content, true) ?? [];
        }
    }
    
    $data['submitted_at'] = date('Y-m-d H:i:s');
    $current[] = $data;
    file_put_contents($file, json_encode($current, JSON_PRETTY_PRINT));

    // 2. Send Email Notification to the User via SMTP (PHPMailer)
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';                // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'ronanreaper@gmail.com';             // Your Gmail address
        $mail->Password   = 'yizu swxd fsfg wbbo';              // Your Gmail App Password (16 characters)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption
        $mail->Port       = 587;                                    // TCP port to connect to

        // Recipients
        $mail->setFrom('ronanreaper@gmail.com', 'CipherForge');
        $email = isset($data['email']) ? $data['email'] : '';
        $name = isset($data['fullName']) ? $data['fullName'] : 'Client';
        $mail->addAddress($email, $name);   // Add a recipient

        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Next Steps: Your CipherForge System Request';
        
        $message = "
        <html>
        <body style='font-family: Arial, sans-serif; color: #333; line-height: 1.6;'>
            <div style='max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #6366f1; border-radius: 10px;'>
                <h2 style='color: #6366f1;'>Hello " . htmlspecialchars($data['fullName']) . "!</h2>
                <p>Thank you for your request for a <strong>" . htmlspecialchars($data['projectType']) . "</strong>. We've received your details!</p>
                
                <div style='background: #f4f4f9; padding: 15px; border-radius: 8px; border-left: 4px solid #6366f1;'>
                    <p style='margin: 0;'><strong>Meeting Request:</strong> To discuss your system architecture, we would like to invite you to an <strong>online meeting</strong>.</p>
                </div>
                
                <p>Our lead engineer will contact you shortly to finalize the date and time. In the meantime, if you have more details, feel free to reply to this email.</p>
                
                <p>Best Regards,<br><strong>CipherForge Team</strong></p>
                <hr style='border: none; border-top: 1px solid #eee;'>
                <p style='font-size: 11px; color: #888;'>This is an automated security-focused system response from CipherForge.</p>
            </div>
        </body>
        </html>
        ";
        
        $mail->Body = $message;

        $mail->send();
        echo json_encode(['success' => true, 'message' => 'Request saved and email sent via SMTP!']);
    } catch (Exception $e) {
        // Even if email fails, we saved the request
        echo json_encode(['success' => true, 'message' => 'Request saved, but email could not be sent. Error: ' . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid data received.']);
}
