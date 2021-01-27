function something()
{
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

var intervalID = setInterval(something, 1000);