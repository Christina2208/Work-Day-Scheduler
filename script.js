

$(function () {

var todayDate = dayjs().format("dddd, MMMM D, YYYY, H:mma")
$("#currentDay").text(todayDate);

function timeTracker() {
//gets current time
var now = dayjs().hour();

$(".time-block").each(function(){
    var timeBlock = parseInt($(this).attr("id").split("hour-")[1]);

if (timeBlock === now) {
    $(this).addClass("present")
} else if (timeBlock < now) {
    $(this).addClass("past")
} else {
    $(this).addClass("future")
}
// console.log(timeBlock);

})}
timeTracker()

$(".saveBtn").click(function(){
    var hour = $(this).parent().attr("id");
    var userInput = $(this).siblings(".description").val();
    localStorage.setItem(hour, userInput)
})

$("textarea").html(function(){
    var timeBlock = $(this).parent().attr("id");
    $(this).val(localStorage.getItem(timeBlock));
})

});
