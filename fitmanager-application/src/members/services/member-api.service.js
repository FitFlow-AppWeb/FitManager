
/**
 * This file contains the MemberApiService class, which simulates
 * communication with a backend API to manage member data.
 *
 * Cassius Martel
 */

import { Member } from "../model/member.entity";


export class MemberApiService {

    constructor() {
        this.members = [
            new Member({
                id: "1",
                fullName: "Kurt Cobain",
                age: 27,
                membershipStatus: "active",
                membershipType: "annual",
                expirationDate: "2025-12-31",
                dni: "78295786",
                email: "kurt@example.com",
                phone: "+1234567890",
                address: "Jirón NoSé 996",
                membershipStartDate: "2021-01-01",
                profilePicture: "/images/kurt.jpg"
            }),
            new Member({
                id: "2",
                fullName: "John Doe",
                age: 30,
                membershipStatus: "pending",
                membershipType: "monthly",
                expirationDate: "2025-06-15",
                dni: "23456789",
                email: "john@example.com",
                phone: "+1234567891",
                address: "Avenida Mbappe 2311",
                membershipStartDate: "2024-02-01",
                profilePicture: "/images/john.jpg"
            }),
            new Member({
                id: "3",
                fullName: "Jane Smith",
                age: 25,
                membershipStatus: "inactive",
                membershipType: "quarterly",
                expirationDate: "2024-08-20",
                dni: "34567890",
                email: "jane@example.com",
                phone: "+1234567892",
                address: "Calle Las Palmas 222",
                membershipStartDate: "2022-05-01",
                profilePicture: "/images/jane.jpg"
            }),
            new Member({
                id: "4",
                fullName: "Michael Johnson",
                age: 35,
                membershipStatus: "active",
                membershipType: "annual",
                expirationDate: "2025-05-10",
                dni: "45678901",
                email: "michael@example.com",
                phone: "+1234567893",
                address: "Jiron no tengo ideas 22",
                membershipStartDate: "2023-05-10",
                profilePicture: "/images/michael.jpg"
            }),
            new Member({
                id: "5",
                fullName: "Sarah Connor",
                age: 28,
                membershipStatus: "active",
                membershipType: "monthly",
                expirationDate: "2025-07-01",
                dni: "56789012",
                email: "sarah@example.com",
                phone: "+1234567894",
                address: "Avenida AAAA 111",
                membershipStartDate: "2024-06-15",
                profilePicture: "/images/sarah.jpg"
            }),
            new Member({
                id: "6",
                fullName: "David Bowie",
                age: 50,
                membershipStatus: "inactive",
                membershipType: "quarterly",
                expirationDate: "2023-11-01",
                dni: "67890123",
                email: "david@example.com",
                phone: "+1234567895",
                address: "Calle Profe subame puntos si ve esto 92",
                membershipStartDate: "2022-11-01",
                profilePicture: "/images/david.jpg" }),
            new Member({
                id: "7",
                fullName: "Elena Gilbert",
                age: 22,
                membershipStatus: "active",
                membershipType: "annual",
                expirationDate: "2025-09-10",
                dni: "78901234",
                email: "elena@example.com",
                phone: "+1234567896",
                address: "Calle Las Palmas 223",
                membershipStartDate: "2023-09-10",
                profilePicture: "/images/elena.jpg" }),
            new Member({
                id: "8",
                fullName: "Tom Hanks",
                age: 45,
                membershipStatus: "pending",
                membershipType: "monthly",
                expirationDate: "2025-10-30",
                dni: "89012345",
                email: "tom@example.com",
                phone: "+1234567897",
                address: "Calle Las Palmas 2221",
                membershipStartDate: "2024-10-01",
                profilePicture: "/images/tom.jpg" }),
            new Member({
                id: "9",
                fullName: "Angela Jolie",
                age: 40,
                membershipStatus: "inactive",
                membershipType: "quarterly",
                expirationDate: "2023-12-20",
                dni: "90123456",
                email: "angela@example.com",
                phone: "+1234567898",
                address: "Calle Las Palmas 2222",
                membershipStartDate: "2022-12-20",
                profilePicture: "/images/angela.jpg" }),
            new Member({
                id: "10",
                fullName: "Chris Hemsworth",
                age: 33,
                membershipStatus: "active",
                membershipType: "annual",
                expirationDate: "2025-03-25",
                dni: "01234567",
                email: "chris@example.com",
                phone: "+1234567899",
                address: "Calle Las Palmas 2223",
                membershipStartDate: "2023-03-25",
                profilePicture: "/images/chris.jpg" }),
            new Member({
                id: "11",
                fullName: "Natalie Portman",
                age: 32,
                membershipStatus: "active",
                membershipType: "monthly",
                expirationDate: "2025-01-10",
                dni: "12345678",
                email: "natalie@example.com",
                phone: "+1234567800",
                address: "Calle Las Palmas 2224",
                membershipStartDate: "2024-01-10",
                profilePicture: "/images/natalie.jpg" }),
            new Member({
                id: "12",
                fullName: "Brad Pitt",
                age: 50,
                membershipStatus: "pending",
                membershipType: "quarterly",
                expirationDate: "2024-05-15",
                dni: "23456789",
                email: "brad@example.com",
                phone: "+1234567801",
                address: "Calle Las Palmas 11",
                membershipStartDate: "2023-05-15",
                profilePicture: "/images/brad.jpg" }),
            new Member({
                id: "13",
                fullName: "Emma Watson",
                age: 28,
                membershipStatus: "inactive",
                membershipType: "annual",
                expirationDate: "2025-04-30",
                dni: "34567890",
                email: "emma@example.com",
                phone: "+1234567802",
                address: "Calle Las Palmas 115",
                membershipStartDate: "2022-04-30",
                profilePicture: "/images/emma.jpg" }),
            new Member({
                id: "14",
                fullName: "Johnny Depp",
                age: 55,
                membershipStatus: "active",
                membershipType: "monthly",
                expirationDate: "2025-02-28",
                dni: "45678901",
                email: "johnny@example.com",
                phone: "+1234567803",
                address: "Calle Las Palmas 119",
                membershipStartDate: "2024-02-28",
                profilePicture: "/images/johnny.jpg" }),
            new Member({
                id: "15",
                fullName: "Hugh Jackman",
                age: 48,
                membershipStatus: "pending",
                membershipType: "annual",
                expirationDate: "2025-08-15",
                dni: "56789012",
                email: "hugh@example.com",
                phone: "+1234567804",
                address: "Calle Las Palmas 113",
                membershipStartDate: "2023-08-15",
                profilePicture: "/images/hugh.jpg" })
        ];
    }

    getAllMembers() {
        return this.members;
    }

    getMemberById(id) {
        return this.members.find(member => member.id === id);
    }
}
