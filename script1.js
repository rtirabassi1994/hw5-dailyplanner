$(".saveBtn").on("click", function(event){
    // Pull value from the textare of chosen save button. This will serve as the value for out setItem
    var value = $(this).siblings(".description").val();
    
    // Pull the id of the clicked element to serve as the id
    var time = $(this).parent().attr("id");

    // This is where you will save the data to local storage
    localStorage.setItem(time, value);
});

// Function to update the color of the time display
function hourUpdater() {
    //let moment grab the current hour
    var currentTime = moment().hours();
    
    // pull the id from each id within the time columns
    $(".time-block").each(function(){
        
        // take the value frome each id and setting to the variable block. HINT parseInt
        var block = parseInt($(this).attr("id").split("-")[1]);

        // if statments to ask: Is the current time before the block? after the block or equal to the block

        // in each if statement you will need to add a class and remove a class
        if(block < currentTime) {
            // add the class of past to that element
            $(this).addClass("past");
        } else if (block === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }        
    });
}

hourUpdater();

//this allows your hourUpdater function to execute every 15000ms/1hour
var interval = setInterval(hourUpdater, 15000);

// here we need to access the values from localstorage and GET the items to display them on screen
$("#hour-9 .description").val(localStorage.getItem('hour-9'));
$("#hour-10 .description").val(localStorage.getItem('hour-10'));
$("#hour-11 .description").val(localStorage.getItem('hour-11'));
$("#hour-12 .description").val(localStorage.getItem('hour-12'));
$("#hour-13 .description").val(localStorage.getItem('hour-13'));
$("#hour-14 .description").val(localStorage.getItem('hour-14'));
$("#hour-15 .description").val(localStorage.getItem('hour-15'));
$("#hour-16 .description").val(localStorage.getItem('hour-16'));
$("#hour-17 .description").val(localStorage.getItem('hour-17'));

//we want to use moment to displayh the current day on the page
$("#currentDay").text(moment().format('MMMM Do YYYY'));
