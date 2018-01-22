const passport= require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const BasicStrategy = require('passport-http').BasicStrategy;
const config = require('@config');
const DBusers = require('@DB').users;

let strategies= {
    basic: {
        init(){
            return;
            passport.use(new BasicStrategy(
                async function  (login,password,done) {
                    try{
                        //todo
                        const user=await DBusers.get.byCredentials(login,password);
                    }catch (err){
                        //todo
                    }
                }
            ))
        }
    },
    JWTAccess: {
        init(){

        }
    },
    JWTRefresh: {
        init(){

        }
    }
}


module.exports=function () {
    Object.keys(strategies).forEach(name=>{
        strategies[name].init();
        console.log(`+${name}: initialized`);
    })
    console.log('+Auth: initialized');
}