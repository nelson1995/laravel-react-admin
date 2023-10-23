<?php

function generateApiToken($data)
{
    $cipherMethod = "aes-128-ctr";

    if(!in_array($cipherMethod,openssl_get_cipher_methods())){
      return "";
    }

    $ivLen = openssl_cipher_iv_length($cipherMethod);
    $encryptionIv = "1235711131719232";
    $encryptionKey = openssl_digest(php_uname(),'MD5',TRUE);

    return openssl_encrypt($data, $cipherMethod,
            $encryptionKey, 0, $encryptionIv);
}

function decryptApiToken($data)
{
    $cipherMethod = "aes-128-ctr";
    
    if(!in_array($cipherMethod,openssl_get_cipher_methods())){
      return "";
    }

    $ivLen = openssl_cipher_iv_length($cipherMethod);
    $decryptionIv = "1235711131719232";
    $decryptionKey = openssl_digest(php_uname(), 'MD5', TRUE);

    return openssl_decrypt($data, $cipherMethod,
            $decryptionKey, 0, $decryptionIv);
}