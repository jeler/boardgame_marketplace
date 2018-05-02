const mongoose = require("mongoose")
const BoardGame = mongoose.model("BoardGame")
const User = mongoose.model("User")



class BoardGameController {
    creategame(req, res) {
        console.log("got here in controller!")
        console.log(req.session.user_id)
        User.findOne({ _id: req.session.user_id }, function (err, user) {
            if (user) {
                console.log("in user when creating game!!")
                var boardgame = new BoardGame(req.body);
                boardgame._user = user._id;
                user.boardgames.push(boardgame);
                boardgame.save(function (err) {
                    user.save(function (err) {
                        if (err) { console.log(err) }
                        else {
                            res.json({ message: "Success!" })
                        }
                    })
                })
            }
            else {
                res.json(err)
            }
        })
    }

    findgames(req, res) {
        BoardGame.find({})
            .populate('_user')
            .exec(function (err, games) {
                if (err) {
                    res.json({ message: "frowny face" })
                }
                else {
                    console.log(games, "this is games at line 47!")
                    console.log(games._user, "games user")
                    res.json({ games })
                }
            })
    }

    delete(req, res) {
        BoardGame.findOneAndRemove({ _id: req.params.id }, function (err, boardgame) {
            if (err) {
                console.log(err)
            }
            else {
                User.update
                    (
                    { $pull: { "boardgames": req.params.id } },
                    function (err, response) {
                        if (err) throw err;
                        res.json({ response });
                    }
                    )
            }
        })
    }
    random(req, res) {
        BoardGame.count().exec(function (err, count) {
            if (err) {
                console.log(err)
            }
            else {

                var random = Math.floor(Math.random() * count)
            }
            BoardGame.findOne().skip(random).exec(
                function (err, result) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        res.json({ result })
                    }
                }
            )
        })
    }

    get_game(req, res) {
        BoardGame.findOne({ _id: req.params.id }, function (err, game) {
            if (err) {
                console.log(err)
            }
            else {
                res.json({ game })
            }
        }

        )
    }

    edit_game (req, res) {
        BoardGame.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, game)
        {
            if(err)
            {
                console.log(err)
            }
            else
            {
                res.json({ game })
            }
        }
        )
    }
}

module.exports = new BoardGameController
{

}