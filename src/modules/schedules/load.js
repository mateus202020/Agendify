import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import {schedulesShow} from "../schedules/show.js"
import { hoursLoad } from "../form/hours-load.js";

const selecteDate = document.getElementById("data");

export async function scheduleDays(){

    const date = selecteDate.value

    const dailySchedules = await scheduleFetchByDay({date})

    schedulesShow({dailySchedules})

    hoursLoad({date, dailySchedules})
    
}

