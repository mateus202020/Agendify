import {scheduleDays} from "../schedules/load.js"

//Seleciona o input de data

const selectedDate = document.getElementById("data")

selectedDate.onchange = () => scheduleDays()