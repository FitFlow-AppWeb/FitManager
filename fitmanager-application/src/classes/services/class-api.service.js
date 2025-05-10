import axios from 'axios';
import  {ClassAssembler} from "./class.assembler.js";

export class ClassApiService {
    getAllClasses() {
        return axios.get('http://localhost:3000/classes')
            .then(response => ClassAssembler.toEntitiesFromResponse(response.data))
            .catch(error => {
                console.error('Error fetching classes:', error);
                throw error;
            });
    }
}