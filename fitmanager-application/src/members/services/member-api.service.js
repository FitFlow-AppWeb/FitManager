import axios from 'axios';
import { MemberAssembler } from './member.assembler.js';

export class MemberApiService {
    getAllMembers() {
        return axios.get('http://localhost:3000/member')
            .then(response => MemberAssembler.toEntitiesFromResponse(response.data))
            .catch(error => {
                console.error('Error fetching members:', error);
                throw error;
            });
    }

    addMember(member) {
        return axios.post("http://localhost:3000/member", member);
    }

    updateMember(member) {
        return axios.put(`http://localhost:3000/member/${member.id}`, member)
            .catch(error => {
                console.error('Error updating member:', error);
                throw error;
            });
    }
    deactivateMember(member) {

        return axios.delete(`http://localhost:3000/member/${member.id}`)
            .catch(error => {
                console.error('Error deleting member:', error);
                throw error;
            });
    }


}













