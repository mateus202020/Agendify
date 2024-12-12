import dayjs from "dayjs";
import { openHours } from "../../utils/open-hours.js";
import { hoursClick } from "../../modules/form/hours-click.js";

const hours = document.getElementById("time");

export function hoursLoad({ date, dailySchedules }) {
  // Limpa a lista de horários.
  hours.innerHTML = "";

  // Obtém a lista de horários ocupados.
  const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"));

  // Cria a lista de horários disponíveis/indisponíveis.
  const opening = openHours.map((hour) => {
    // Recupera somente a hora.
    const [scheduleHour] = hour.split(":");

    // Adiciona a hora na data e verifica se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    const available = !unavailableHours.includes(hour) && !isHourPast;

    return {
      hour,
      available,
    };
  });

  // Gera os elementos <option> dinamicamente.
  opening.forEach(({ hour, available }) => {
    const option = document.createElement("option");
    option.classList.add("hour");
    option.classList.add(available ? "hour-available" : "hour-unavailable");
    option.textContent = hour;

  
    if (!available) {
      option.disabled = true;
    }


    hours.append(option);
  });
}
