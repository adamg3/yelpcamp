var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {name: "Clouds Rest", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur lorem eu quam ornare dictum. Nullam diam ante, bibendum tempor diam et, suscipit accumsan orci. Quisque condimentum mauris et luctus lacinia. Pellentesque accumsan sapien diam, sit amet porta sapien bibendum non. Nulla sollicitudin diam sed lectus tempus pellentesque. Donec accumsan vulputate commodo. Pellentesque sagittis scelerisque ipsum a imperdiet."},
    {name: "Fine Fields", image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur lorem eu quam ornare dictum. Nullam diam ante, bibendum tempor diam et, suscipit accumsan orci. Quisque condimentum mauris et luctus lacinia. Pellentesque accumsan sapien diam, sit amet porta sapien bibendum non. Nulla sollicitudin diam sed lectus tempus pellentesque. Donec accumsan vulputate commodo. Pellentesque sagittis scelerisque ipsum a imperdiet."},
    {name: "Woodland Hallow", image: "https://farm5.staticflickr.com/4153/4835814837_feef6f969b.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur lorem eu quam ornare dictum. Nullam diam ante, bibendum tempor diam et, suscipit accumsan orci. Quisque condimentum mauris et luctus lacinia. Pellentesque accumsan sapien diam, sit amet porta sapien bibendum non. Nulla sollicitudin diam sed lectus tempus pellentesque. Donec accumsan vulputate commodo. Pellentesque sagittis scelerisque ipsum a imperdiet."},
];

function seedDB(){
    Campground.remove({}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("removed campgrounds");
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        Comment.create({
                            text: "This place is great!",
                            author: "Jim"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created a new comment");
                            };
                        });
                    };
                });
            });
        };
    });
};
module.exports = seedDB;