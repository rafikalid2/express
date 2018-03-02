/**
 * This file serve to run all service we have
 */

var env = {
    HOST                : "http://localhost:8000/",
    PORT                : 8000,

    DB_HOST             : "mongodb://localhost:27017/",
    DB_USERNAME         : "",
    DB_PASSWORD         : "",
    DB_NAME             : "kuteShopDb",

    SESSION_SECRET      : "123456789",
    BCRYPT_SALTROUNDS   : 10
}

module.exports = {

    apps : [

        // Authentication service
        {
            name      : 'Authentication Service',
            script    : 'services/authenticationService.js',
            env
        },

        // Store service
        // {
        //     name      : 'Store Service',
        //     script    : 'services/storeService.js',
        //     env
        // },
    ]

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  
  // deploy : {
  //   production : {
  //     user : 'node',
  //     host : '212.83.163.1',
  //     ref  : 'origin/master',
  //     repo : 'git@github.com:repo.git',
  //     path : '/var/www/production',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
  //   },
  //   dev : {
  //     user : 'node',
  //     host : '212.83.163.1',
  //     ref  : 'origin/master',
  //     repo : 'git@github.com:repo.git',
  //     path : '/var/www/development',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
  //     env  : {
  //       NODE_ENV: 'dev'
  //     }
  //   }
  // }
};
