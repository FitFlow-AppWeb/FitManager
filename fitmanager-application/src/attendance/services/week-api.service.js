import axios from "axios";
import { WeekAssembler } from "./week.assembler";

export class WeekApiService {
    getWeekAttendance() {
        return axios.get("http://localhost:3000/attendance")
            .then((response) => {
                const heatmapResource = response.data?.weekly_heatmap;

                if (typeof heatmapResource !== 'object') {
                    console.error("Invalid weekly_heatmap format");
                    return WeekAssembler.toEntityFromResource({});
                }

                const weekly_heatmap_entity = WeekAssembler.toEntityFromResource(heatmapResource);
                return weekly_heatmap_entity;
            })
            .catch((error) => {
                console.error("Error fetching week attendance:", error);
                throw error;
            });
    }
}