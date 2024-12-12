import {apiConfig} from "./api-config.js";


export async function scheduleNew({id, name, number, consultation, when}){
    try{

        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({id, name, number, consultation, when})
        })

        alert("Agendamento realizado com sucesso!")

    }catch(error){
        console.log(error)
        alert("Não foi possível agendar. Tente novamente mais tarde.")
    }
}