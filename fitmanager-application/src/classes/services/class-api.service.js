import axios from 'axios';
import  {ClassAssembler} from "./class.assembler.js";
import {Member} from "../../members/model/member.entity.js";

export class ClassApiService {
    async getAllClasses() {
        try {
            const [classesRes, employeesRes] = await Promise.all([
                axios.get('http://localhost:3000/classes'),
                axios.get('http://localhost:3000/employees')
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

    addClass(gymClass) {
        return axios.post("http://localhost:3000/classes", gymClass);
    }
    updateClass(gymClass) {
        return axios.put(`http://localhost:3000/classes/${gymClass.id}`, gymClass)
            .catch(error => {
                console.error('Error updating class:', error);
                throw error;
            });
    }

    deleteClass(gymClass) {

        return axios.delete(`http://localhost:3000/classes/${gymClass.id}`)
            .catch(error => {
                console.error('Error deleting class:', error);
                throw error;
            });
    }

    async getMembersByClass(gymClass) {
        try {
            const response = await axios.get('http://localhost:3000/member');
            const allMembers = response.data;

            const filteredMembers = allMembers
                .filter(member => gymClass.members_ids.includes(Number(member.id)));


            return filteredMembers.map(m =>
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
            console.error('Error fetching members:', error);
            throw error;
        }
    }
}