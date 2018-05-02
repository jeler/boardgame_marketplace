const mongoose = require("mongoose")
const User = mongoose.model("User")
var max_login_attempts = 5,
    lock_time = 30 * 60 * 1000,
    lockout = false
// login_attempts = 0;
// min * seconds * milliseconds(current = 30 min)

class UserController {
    createnewuser(req, res) {
        User.find({ email: req.body.email }, function (err, user) {
            console.log(user)
            if (user.length != 0) {
                res.json({ err: "User already exists!" })
            }
            else {

                var user = new User
                    ({
                        email: req.body.email,
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        password: req.body.password,
                        birthday: req.body.birthday
                    })
                user.save(function (err) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        req.session.user_id = user.id;
                        var session_user = req.session.user_id
                        res.json({ message: "Successfully added user!" });
                    }
                })
            }
        })
    };

    loginuser(req, res) {
        User.find({ email: req.body.email }, function (err, user)
        // find user in db
        {
            if (user.length == 0) {
                // login_attempts++;
                // console.log("this is login_attempts",login_attempts);
                // user doesn't exist
                // increment login attempt
                res.json({ err: "Invalid Credentials!" })
            }
            else 
            {
            bcrypt.compare(req.body.password, user[0].password)
                .then(same => {
                    req.session.user_id = user[0].id
                    var session_user = req.session.user_id
                    res.json({user: user, session_user: session_user});
                })
                .catch(function (err) {
                    res.json({ pw_error: "Invalid Credentials!" })
                })
            }
        })
    }
                    
    logout(req, res) {
        req.session.destroy();
        res.json({message: "You have been logged out!"})
    }

    checkSessionId(req, res) {
        console.log(req.session.user_id, "do you exist here?");
        if (req.session.user_id === undefined) {
            res.json({session: false})
        }
        else {
            User.findOne({_id: req.session.user_id}, function(err, user)
        {
            if(user)
            {
                
                res.json({session: req.session.user_id, user:user});
            }
        })
        }
    }
}
module.exports = new UserController
{

}