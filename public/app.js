//variables 

const resistanceDiv = $(".resistenceContainer");
const cardioDiv = $(".cardioContainer");
const $btnCardio = $(".btnCardio");
const $btnResistence = $(".btnResistence")
const $appendDiv = $("#appendDiv")


//appends time and day to  page

const today = moment().format('LL')
const timeNow = moment().format('LT');
const $timeNow = $(".timeNow");
$timeNow.append(today + " " + timeNow);

//when workout button it's clicked the div for workout to show

$btnResistence.on("click", function (event) {
    event.preventDefault()
    cardioDiv.hide()
    resistanceDiv.show()

})


//when form it's submitted a post request it's sent to the server

$("#resistanceComplete").on("click", function (event) {
    console.log(event.target)
    event.preventDefault();
    var newRecord = {
        exName: $("#exName").val().trim(),
        weight: $("#weights").val().trim(),
        sets: $("#sets").val().trim(),
        rep: $("#reps").val().trim(),
        duration: $("#duration").val().trim(),
    };

    console.log(newRecord)
    $.ajax({
        url: "/api/workouts",
        type: "POST",
        data: newRecord
    }).then(function () {
        console.log("worked")


    })


})


$("#resistanceUpdate").on("click", function (event) {

    event.preventDefault();
    var newRecord = {
        exName: $("#exName").val().trim(),
        weight: $("#weights").val().trim(),
        sets: $("#sets").val().trim(),
        rep: $("#reps").val().trim(),
        duration: $("#duration").val().trim(),
    };
    var id = $(this).data("id");

    console.log(newRecord)
    $.ajax({
        url: "/api/workouts" + id,
        type: "PUT",
        data: newRecord
    }).then(function () {


        console.log("worked")

    })


})



//when server runs makes a get request to display all recents workouts
$(document).ready(function () {
    $.ajax({
        url: '/api/workouts',
        method: 'GET'
    }).then(data => {
        data.forEach(element => {

            console.log(element.exName)
            console.log(element.distance)
            console.log(element.duration)
            console.log(element._id)
            var pNew = $("<button>");
            pNew.addClass("recentBtn ")
            pNew.attr("data-id");

            var recentWorkout = element.exName
            pNew.prepend(recentWorkout)
            $(".allWorkouts").append(pNew);
            return
        });


    }).then(

    )
})


$(".allWorkouts").on("click", function () {



    $.ajax({
        url: "/api/workouts/",
        type: "GET"

    }).then(function (res) {

        // Reload the page to get the updated list
        console.log(res)

    }
    );
});


//set up the height of modal when it's showing
$('#myModal').on('show.bs.modal', function () {
    $('.modal-content').css('height', $(window).height() * 0.2);
});

$(".closeIcon").on("click", function () {
    location.reload()


})