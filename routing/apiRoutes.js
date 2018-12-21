
var friends = require("../app/data/friends");

var foundFriend;
var newFriend;
var lowestDifference = 50;

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

    app.post("/api/friends", function(req, res) {
        newFriend = req.body;
        findFriend()
        res.json(foundFriend);
        friends.push(req.body);
    });



};

function findFriend(){

    for(var i = 0; i < friends.length; i++){

        var totalDifference = 0;

        for (var j = 0; j < friends[i].scores.length; j++){
            
            var difference = newFriend.scores[j] - friends[i].scores[j]
            totalDifference += Math.abs(difference);
        }
        if (totalDifference < lowestDifference){
            lowestDifference = totalDifference;
            foundFriend = friends[i];
        }

    }





}