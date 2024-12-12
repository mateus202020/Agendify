import dayjs from "dayjs";

const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")
const btn = document.querySelector(".button")
const form = document.querySelector(".form")
const schedule = document.querySelector(".schedule")

export function schedulesShow({dailySchedules}){
    try{
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li")

            const time = dayjs(schedule.when).format("HH:mm")
            item.setAttribute("data-id", schedule.id)

            item.innerHTML = 
                    `
                        <p>${time}</p>
                        <strong>${schedule.name}</strong>
                        <span>${schedule.consultation}</span>
                        <button><img src="./src/assets/deletar.svg" alt="Deletar" class="delete-icon"></button>
                    `
            
            const hour = dayjs(schedule.when).hour()

            if(hour <=12){
                periodMorning.append(item)
            }else if(hour > 12 && hour <= 18){
                periodAfternoon.append(item)
            }else{
                periodNight.append(item)
            }
        })
                    
        
  
    }catch(error){
        alert("Não foi possivel exibir os agendamentos!")
        console.log(error)
    }
}


btn.addEventListener("click", () => {
    schedule.classList.add("none")
    form.classList.remove("none")
    btn.classList.add("none")
})

