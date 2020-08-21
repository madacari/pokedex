// shipitfile.js
module.exports = shipit => {
    // Load shipit-deploy tasks
    require('shipit-deploy')(shipit)
  
    shipit.initConfig({
      default: {
        deployTo: '~/pokedex/',
      },
      staging: {
        servers: 'ubuntu@ec2-3-17-109-25.us-east-2.compute.amazonaws.com',
      },
    })
  }
