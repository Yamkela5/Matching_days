//var dates = document.getElementsByClassName('weekDays')
//console.log(dates)
var check = document.querySelectorAll('.weekDays')
var dateInput1 =document.getElementById('myId')
var date = document.getElementById('myDate')

function myDays() {
    for (var i = 0; i < check.length; i++) {
        check[i].classList.remove('style1');
        check[i].classList.remove('style2');
        check[i].classList.remove('style3');
}

        var Day = new Date(dateInput1.value)
        var Days = new Date(date.value)
        var list= Day.getDay()
        var lists = Days.getDay()
        if (list===lists) {
          check[lists].classList.add('style1')

        }else {
          check[list].classList.add('style2')
          check[lists].classList.add('style3')
        }


}
dateInput1.addEventListener('change', 'myDays')
