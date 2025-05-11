import axios from "axios";
import { WeekAssembler } from "./week.assembler";

export class WeekApiService {
    getWeekAttendance() {
        return axios.get("http://localhost:3000/attendance/week")
            .then((response) => {

                const weekAttendance = response.data?.weekAttendance;

                if (!Array.isArray(weekAttendance)) {
                    console.error("Invalid weekAttendance format");
                    return [];
                }
                
                const weekly_heatmap = WeekAssembler.toEntitiesFromResponse(weekAttendance)

                return {
                    weekly_heatmap
                };
            })
            .catch((error) => {
                console.error("Error fetching week attendance:", error);
                throw error;
            });
    }
}