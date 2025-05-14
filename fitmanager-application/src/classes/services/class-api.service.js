// 
// Description: This code defines the `ClassApiService` class, which handles the communication with an API to manage gym classes and their associated data. It includes several methods:
// - `getAllClasses`: Fetches all classes and employees data concurrently. It then assembles the class data and associates each class with its trainer's name based on the employee data.
// - `addClass`: Sends a POST request to add a new class.
// - `updateClass`: Sends a PUT request to update an existing class.
// - `deleteClass`: Sends a DELETE request to remove a class.
// - `getMembersByClass`: Fetches all members and filters them by the `members_ids` associated with a specific class, returning a list of member objects.
// The `ClassAssembler` is used to convert API responses into class entities, and the `Member` class is used to represent members.
// Author: Cassius Martel
//

import axios from 'axios';
import { ClassAssembler } from "./class.assembler.js";
import { Member } from "../../members/model/member.entity.js";

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
