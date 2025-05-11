export class Summary {
    constructor(
        weeklyOverview = {
            asistencias_lunes: 0,
            asistencias_martes: 0,
            asistencias_miercoles: 0,
            asistencias_jueves: 0,
            asistencias_viernes: 0,
            asistencias_sabado: 0,
            asistencias_domingo: 0
        },
        historicalSummary = {
            average_daily_attendance: 0,
            average_daily_absences: 0,
            overall_attendance_rate: '', 
            average_peak_time: '',       
            max_attendance: 0,
            min_attendance: 0,
            most_frequent_user: ''
        }
    ) 
    {
        this.weeklyOverview = weeklyOverview;
        this.historicalSummary = historicalSummary;
    }
}