/**
 * Created by rmetcalf9 on 5/2/2018.
 */
'use strict';
//var fs = require('fs');

/*
 Return the seed data to be used, either from a file or hardcoded depending
 on enviroment variable setting
*/
function getseedData(env_var_name, model_name) {
  var kongsarrayenv = process.env[env_var_name];
  if (typeof (kongsarrayenv) != 'undefined') {
    const jsonkongs = JSON.parse(kongsarrayenv);
    //console.log(jsonkongs);
    var seedUserData = [];
    for(var attributename in jsonkongs){
      //console.log(attributename+": "+jsonkongs[attributename]);
      var kongentity = {};
      kongentity['name']=attributename;
      kongentity['type']="default";
      kongentity['kong_admin_url']=jsonkongs[attributename];
      kongentity['kong_api_key']="";
      kongentity['health_checks']=false;
      seedUserData.push(kongentity);
    }
    //console.log(seed);
  }

  return seedUserData;
}

module.exports = {
  userSeedData: [],
  kongNodeSeedData: getseedData('KONGA_KONGS_ARRAYS', 'kong_node')
}