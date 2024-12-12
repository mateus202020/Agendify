import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";
import { scheduleDays } from "../../modules/schedules/load.js"
import { hoursLoad } from "../form/hours-load.js";

const form = document.querySelector(".form")
const btn_form = document.querySelector(".btn-schedule")
const schedule = document.querySelector(".schedule")
const btn = document.querySelector(".button")
const Clientdate = document.getElementById("data")
const ClientTime = document.getElementById("time")
const ClientName = document.getElementById("nome") 


const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
Clientdate.value = inputToday
Clientdate.min = inputToday

form.onsubmit = async (event) => {
    event.preventDefault()

    try{
        const name = ClientName.value.trim()

        if(!name){
            return alert("Campo nome não Preenchido")
        }
       
       const number = document.getElementById("phone").value
       
       if(!number){
            return alert("Campo telefone não Preenchido")
       }

       const consultation = document.getElementById("descricao").value.trim()

       if(!consultation){
            return alert("Campo Motaivo da Consulta não Preenchido")
       }

       const date = Clientdate.value

       if(!date){
            return alert("Campo Data não preenchido")
       }

       const time = ClientTime.value
       
       if(!time){
        return alert("Campo Hora não preenchido")
       }


       const [hour] = time.split(":")
       console.log(hour)

       const when = dayjs(data.value).add(hour, "hour")
       console.log(when)

       const id = new Date().getTime().toString()


       await scheduleNew({
            id, 
            name, 
            number, 
            consultation, 
            when
     })

     await scheduleDays()


    }catch(error){
        alert("Não foi possível realizar o agendamento.")
        console.log(error)
    }
}


btn_form.addEventListener("click", () => {
     schedule.classList.remove("none")
     form.classList.add("none")
     btn.classList.remove("none")
})

