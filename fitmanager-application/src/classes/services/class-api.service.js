import axios from 'axios';
import { ClassAssembler } from "./class.assembler.js";
import { Member } from "../../members/model/member.entity.js";

const BASE_URL = import.meta.env.VITE_API_URL;

export class ClassApiService {
    async getAllClasses() {
        try {
            const [classesRes, employeesRes] = await Promise.all([
                axios.get(`${BASE_URL}/api/v1/Classes`),
                axios.get(`${BASE_URL}/api/v1/Employee`)
            ]);

            const classes = ClassAssembler.toEntitiesFromResponse(classesRes.data);
            const employees = employeesRes.data;

            const employeeMap = {};
            for (const emp of employees) {
                employeeMap[emp.id] = emp.fullName;
            }

            return classes.map(c => ({
                ...c,
                trainerName: employeeMap[c.trainer_id] || 'Unknown'
            }));
        } catch (error) {
            console.error('Error fetching classes or employees:', error);
            throw error;
        }
    }

    async testLocalMembershipTypes() {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/MembershipType`);
            console.log('✅ Datos recibidos desde backend local:', response.data.data);
            return response.data.data;
        } catch (error) {
            console.error('❌ Error al llamar al backend local:', error);
            throw error;
        }
    }

    addClass(gymClass) {
        return axios.post(`${BASE_URL}/api/v1/Classes`, gymClass);
    }

    updateClass(gymClass) {
        return axios.put(`${BASE_URL}/api/v1/Classes/${gymClass.id}`, gymClass)
            .catch(error => {
                console.error('Error updating class:', error);
                throw error;
            });
    }

    deleteClass(gymClass) {
        return axios.delete(`${BASE_URL}/api/v1/Classes/${gymClass.id}`)
            .catch(error => {
                console.error('Error deleting class:', error);
                throw error;
            });
    }

    async getMembersByClass(gymClass) {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/Attendances/class/${gymClass.id}`);
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
}
