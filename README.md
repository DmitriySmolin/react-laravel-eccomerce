 Clone this repo using `git clone --depth=1 https://github.com/DmitriySmolin/react-laravel-crud.git <YOUR_PROJECT_NAME>`

## Frontend

1.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
2.  Run `npm run install` in order to install dependencies and clean the git repo.<br />
    _At this point you can run `npm start` to see the example app at `http://localhost:3000`._
3.  Run `npm run clean` to delete the example app.


## Backend

1.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
2.  Run `composer install` in order to install dependencies and clean the git repo.<br />
3.  Set up a database connection in a file .env 
4.  Run a database migration `php artisan migrate:fresh --sed`
    _At this point you can run `php artisan serve` to see the example app at `http://localhost:8000`._

