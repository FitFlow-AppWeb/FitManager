export class WeeklyAttendance {
    constructor(
        lunes = {},
        martes = {},
        miercoles = {},
        jueves = {},
        viernes = {},
        sabado = {},
        domingo = {}
    ) {
        this.lunes = lunes;
        this.martes = martes;
        this.miercoles = miercoles;
        this.jueves = jueves;
        this.viernes = viernes;
        this.sabado = sabado;
        this.domingo = domingo;
    }
}