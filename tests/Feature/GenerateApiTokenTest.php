<?php

test('api token is generated', function(){
    $data = "nelson@mail.com";
    $apiToken;

    $apiToken = generateApiToken($data);

    // $this->assert
});

test('api token can be decrypted', function(){
    $data = "nelson@mail.com";
    $apiToken;

    $apiToken = generateApiToken($data);
    $decryptedData = decryptApiToken($apiToken);

    $this->assertEquals($data, $decryptedData);
});
