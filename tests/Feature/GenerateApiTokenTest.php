<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GenerateApiTokenTest extends TestCase
{
    public $data = "nelson@mail.com";
    public $apiToken;
    
    public function test_decrypt_api_token()
    {
        $this->apiToken = generateApiToken($this->data);
        $decryptedData = decryptApiToken($this->apiToken);
        $this->assertEquals($this->data, $decryptedData);
    }
}
