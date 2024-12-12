import { scheduleDays } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js"
const period = document.querySelectorAll(".period")

period.forEach((periods) => {

    periods.addEventListener("click",  async (event) => {
        
        if(event.target.classList.contains("delete-icon")){

            const item = event.target.closest("li")

   
            
            const {id} = item.dataset

            

            if(id){
                const Confirm = confirm(
                    "Tem certeza que deseja cancelar o agendamento?"
                )

                if(Confirm){
                    await scheduleCancel({id})

                    scheduleDays()
                }
            }
        }

            
    })
})


