<?php
// Simple PHP mail handler for static hosting
header('Content-Type: application/json');

$to = 'info@savsa.tr';
$subjectPrefix = 'Yeni İletişim Mesajı:';

function sanitize($s) { return htmlspecialchars(trim($s ?? ''), ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); }

$name = sanitize($_POST['name'] ?? '');
$email = sanitize($_POST['email'] ?? '');
$company = sanitize($_POST['company'] ?? '');
$message = sanitize($_POST['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
  http_response_code(400);
  echo json_encode([ 'ok' => false, 'error' => 'Zorunlu alanlar eksik' ]);
  exit;
}

$subject = $subjectPrefix . ' ' . $name;
$body = "Ad Soyad: $name\nE-posta: $email\nKurum: " . ($company === '' ? '-' : $company) . "\n\nMesaj:\n$message\n";
$headers = 'From: SAVSA.TR <noreply@savsa.tr>' . "\r\n" .
           'Reply-To: ' . $email . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

$ok = @mail($to, $subject, $body, $headers);
if ($ok) {
  echo json_encode([ 'ok' => true ]);
} else {
  http_response_code(500);
  echo json_encode([ 'ok' => false, 'error' => 'Gönderilemedi' ]);
}