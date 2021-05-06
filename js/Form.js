class Form {
    constructor() {

    }

    display() {
        var title = createElement("h2")
        title.html("Car Racing Game")
        title.position(440, 100);

        var input = createInput("Name");
        input.position(450,250);

        var button = createButton("Play");
        button.position(540,300);


        button.mousePressed(function(){
            input.hide();
            button.hide();

            name = input.value()

            var greeting = createElement("h3")
            greeting.html("Hello " + name );
            greeting.position(450,250)


        })


    }
}

//callback fn
//fn

// var title


// Car Racing Game

// var title = createElement("h2")
// title.html("Car Racing Game")
// title.position(130,0);
// craeteInput("Name");
// createButton("play")
