const year = document.getElementById(  "year" )
const thisYear = new Date().getFullYear()
year.setAttribute("datetieme", thisYear)
year.textContent = thisYear

