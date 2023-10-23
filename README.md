## Instructions on setting up.

-   On your favourite terminal clone the repository to your directory and `cd` into the repositories directory
-   Run command `composer install`.
-   Run `cp .env.example .env` and edit it.
-   Run command `php artisan migrate --seed`
-   Run command `php artisan passport:install`
-   Run command `npm install`
-   You can also run `php artisan test` to make sure all tests pass.
-   Run commands `php artisan serve` and `npm run dev` in different terminal windows or tabs.
-   Finally copy and paste the generated url from `php artisan serve` terminal window into your browser and hit enter.

Email is `admin@mail.com` password is `1234`
