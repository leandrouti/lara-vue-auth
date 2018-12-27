# Authentication JWT API in Laravel

## Tutorial From

* https://medium.com/@ripoche.b/create-a-spa-with-role-based-authentication-with-laravel-and-vue-js-ac4b260b882f

* https://codeburst.io/api-authentication-in-laravel-vue-spa-using-jwt-auth-d8251b3632e0

* https://blog.pusher.com/laravel-jwt/

## Resorces

* Laravel 5.7
* tymon/jwt-auth:dev-develop
* Vuejs
* Vue Router
* Vue axios
* @websanova/vue-auth

## Notes
### Install Laravel npm dependecies

```
npm install
```

### Install additional dependecies

```
npm install --save-dev vue-axios vue-router vue-loader vue-template-compiler
```

### Create File App.vue in resources/js folder
`App.vue` is the main front end file, with the header links (`<router-link>`) and, renders the vue components. (`<router-view>`)

### Create File Home.vue in resources/js/components/
`Home.vue` is the component loaded when you are not logged in.

### Replace the content on resorces/js/app.js
`app.js` is where setup vue, vue-router and load all the vue single file components.

### Replace the content on welcome.blade.php
`welcome.blade.php` is the file loaded when first visit the site. Since the site is single page, on laravel side is the unique web route to be loaded.

### npm run watch
```
npm run watch
``` 
watches for changes in the js/vue files and recompile.

### Create the vue components
In the `js/components` create the files `Login.vue`, `Register.vue`, `UserDetail.vue`, `Users.vue`.
These files are like the .blade.php in laravel.

### Update routes on resources/js/app.js
Import and setup the routes for the vue components in the `resources/js/app.js`

### Install @websanova/vue-auth
To handle the authentication on the frontend side, `npm install @websanova/vue-auth` and update `resources/js/app.js`

`meta{auth : true / false}` are the routes / requests authentications.

On `resources/js/app.js`:

`auth: require(‘@websanova/vue-auth/drivers/auth/bearer.js’)` configures the vue-router to use the bearer driver to handle the authentication token.

`http: require(‘@websanova/vue-auth/drivers/http/axios.1.x.js’)` configures the vue-auth to use axios http driver for http requests.

`router: require(‘@websanova/vue-auth/drivers/router/vue-router.2.x.js’)` configures the vue-auth to use vue-router

### Install tymon/jwt-auth:dev-develop
```
composer require tymon/jwt-auth:dev-develop
```

Generate JWT keys:
```
php artisan jwt:secret
```

Change `config/auth.php` defaults->guard to `api`, and `guards` -> `api` -> `driver` to `jwt`.

Modify `app/User.php` User model to implement JWT tokens.

On `app/Http/Kernel.php` on application's route middleware add `jwt.auth` and `jwt.refresh`:

```
protected $routeMiddleware = [
    ...
    'jwt.auth' => \Tymon\JWTAuth\Middleware\GetUserFromToken::class,

    'jwt.refresh' => \Tymon\JWTAuth\Middleware\RefreshToken::class,
];
```

### Handle user registration
make the controller with 
```
php artisan make:controller AuthController
```
fill the controller, and add the routes on `routes/api.php`

