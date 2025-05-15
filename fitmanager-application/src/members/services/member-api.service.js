/**
 * This file contains the MemberApiService class, which is responsible for handling
 * API requests related to member data. It includes methods to fetch all members,
 * add a new member, update an existing member, and deactivate a member (delete).
 * The service uses the MemberAssembler to convert plain data into Member entities.
 *
 * Author: Cassius Martel
 */

import axios from 'axios';
import { MemberAssembler } from './member.assembler.js';

export class MemberApiService {
    getAllMembers() {
        return axios.get('https://fitmanager.onrender.com/member')
            .then(response => MemberAssembler.toEntitiesFromResponse(response.data))
            .catch(error => {
                console.error('Error fetching members:', error);
                throw error;
            });
    }

    addMember(member) {
        return axios.post("https://fitmanager.onrender.com/member", member);
    }

    updateMember(member) {
        return axios.put(`https://fitmanager.onrender.com/member/${member.id}`, member)
            .catch(error => {
                console.error('Error updating member:', error);
                throw error;
            });
    }

    deactivateMember(member) {
        return axios.delete(`https://fitmanager.onrender.com/member/${member.id}`)
            .catch(error => {
                console.error('Error deleting member:', error);
                throw error;
            });
    }
}
