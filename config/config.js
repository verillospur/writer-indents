// 
//  config.js 
//  ~/config/ 
// 
//  created:    2021-06-26
// 
//  app-wide configuration 
// 
'use strict';

const config = () => {

    return {
      
        // log
        log: require('../log/config'), 
        
        // mongodb
        //mongodb: require('../data/config'), 

        // users
        //clients: require('../clients/config'), 

    };
};

module.exports = config();
