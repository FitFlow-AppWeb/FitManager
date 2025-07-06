import api from '../../login/services/axios.config.js'; // usa la instancia con token
import { ClassAssembler } from "./class.assembler.js";
import { Member } from "../../members/model/member.entity.js";

export class ClassApiService {
    async getAllClasses() {
        try {
            const [classesRes, employeesRes] = await Promise.all([
                api.get(`/api/v1/Classes`),
                api.get(`/api/v1/Employee`)
            ]);

            const classesRaw = classesRes.data.data;
            const employees = employeesRes.data.data;

            const employeeMap = {};
            for (const emp of employees) {
                employeeMap[emp.id] = `${emp.firstName ?? ""} ${emp.lastName ?? ""}`.trim();
            }

            return classesRaw.map(c => {
                const startDate = new Date(c.startDate);
                const hours = startDate.getHours().toString().padStart(2, "0");
                const minutes = startDate.getMinutes().toString().padStart(2, "0");

                return {
                    ...c,
                    trainerName: employeeMap[c.employeeId] || "—",
                    date: startDate.toLocaleDateString(),
                    time: `${hours}:${minutes}`
                };
            });
        } catch (error) {
            console.error('Error fetching classes or employees:', error);
            throw error;
        }
    }


    async testLocalMembershipTypes() {
        try {
            const response = await api.get(`/api/v1/MembershipType`);
            console.log('✅ Datos recibidos desde backend local:', response.data.data);
            return response.data.data;
        } catch (error) {
            console.error('❌ Error al llamar al backend local:', error);
            throw error;
        }
    }

    addClass(gymClass) {
        return api.post(`/api/v1/Classes`, gymClass);
    }

    updateClass(gymClass) {
        return api.put(`/api/v1/Classes/${gymClass.id}`, gymClass)
            .catch(error => {
                console.error('Error updating class:', error);
                throw error;
            });
    }

    deleteClass(gymClass) {
        return api.delete(`/api/v1/Classes/${gymClass.id}`)
            .catch(error => {
                console.error('Error deleting class:', error);
                throw error;
            });
    }

    async getMembersByClass(gymClass) {
        try {
            const response = await api.get(`/api/v1/Attendances/class/${gymClass.id}`);
            return response.data.data.map(m =>
                new Member(
                    Number(m.id),
                    m.fullName,
                    m.age,
                    m.membershipStatus,
                    m.membershipType,
                    m.expirationDate,
                    m.dni,
                    m.email,
                    m.phone,
                    m.address,
                    m.membershipStartDate,
                    m.profilePicture
                )
            );
        } catch (error) {
            console.error('Error fetching members by class:', error);
            throw error;
        }
    }
    getAllTrainers() {
        return api.get("/api/v1/Employee").then(res => res.data?.data ?? []);
    }
}
