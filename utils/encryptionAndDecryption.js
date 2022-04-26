const bcrypt = require ('bcrypt');
const saltRounds = 10;


const comparePassword = async (hashedPassword, password) =>{
  
    return   bcrypt.compareSync(password, hashedPassword, function(err, result) {
          
      if(err){
          throw err
      }
      
      return result
      });
  }


  const encryptFunction = async (password) =>{
    const hassedPass = bcrypt.hashSync(password, saltRounds, function(err, hash) {
       
        if(err){
            throw err
        }

        console.log('I am has value ', hash)
        return hash
    });

    return hassedPass
}


module.exports = { comparePassword, encryptFunction}