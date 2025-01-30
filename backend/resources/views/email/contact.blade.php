<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Email</title>
</head>
<body>
    <h2>You have received an enquiry.</h2>
    <p>Name:{{ $mailData['name']}}</p>
    <p>email:{{ $mailData['email']}}</p>
    <p>phone:{{ $mailData['phone']}}</p>
    <p>subject:{{ $mailData['subject']}}</p>
    <p>Message:</p>
    <p>{{$mailData['message']}}</p>

    <p>Thanks</p>
</body>
</html>