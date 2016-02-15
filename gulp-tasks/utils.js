'use strict';

module.exports = {
  logCmd : logCmd
};

function logCmd(cmd,cb){
  cmd.stdout.on('data',function(chunk){
    if(chunk){
      process.stdout.write(chunk);
    }
  });
  cmd.stderr.on('data',function(chunk){
    if(chunk){
        process.stderr.write(chunk);
    }
  });
  cmd.on('exit',function(code){
    if(code){
      process.stderr.write(code);
    }
    cb(code);
  });
  cmd.on('error', function( err ){ console.log(err); });
}
