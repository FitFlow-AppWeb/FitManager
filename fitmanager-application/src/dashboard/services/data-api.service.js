// src/services/data-api.service.js (Reconfirmación del código)

import api from '../../login/services/api.js';
import { DataAssembler } from './data.assembler.js';

export class DataApiService {

    async getStatistics() {
        try {
            const membersResponse = await api.get('/api/v1/Member');
            const allMembers = membersResponse.data?.data || [];
            const totalMembersCount = allMembers.length;
            const activeMembersCount = allMembers.filter(member =>
                member.membershipStatus && member.membershipStatus.status === 'Active'
            ).length;


            const attendanceTodayResponse = await api.get('/api/v1/Attendances/raw-today');
            const todayAttendances = attendanceTodayResponse.data?.data || [];
            const attendanceTodayCount = todayAttendances.length;

            const paymentsResponse = await api.get('/api/v1/MembershipPayment');
            const allPayments = paymentsResponse.data?.data || [];

            const now = new Date();
            const currentMonth = now.getMonth();
            const currentYear = now.getFullYear();


            const newMembersCount = allMembers.filter(member => {
                if (!member.membershipStatus || !member.membershipStatus.startDate) {
                    return false;
                }
                const startDate = new Date(member.membershipStatus.startDate);
                return startDate.getMonth() === currentMonth && startDate.getFullYear() === currentYear;
            }).length;

            const revenueMonth = allPayments.filter(payment => {
                const paymentDate = new Date(payment.date);
                return paymentDate.getMonth() === currentMonth && paymentDate.getFullYear() === currentYear;
            }).reduce((sum, payment) => sum + payment.amount, 0);

            const pendingPaymentsCount = allMembers.filter(member =>
                member.membershipStatus && member.membershipStatus.status === 'Pending'
            ).length;

            const processedStatistics = [
                {
                    title: "Total Members",
                    value: totalMembersCount,
                    change: "+2.5%",
                    period: "Since last month",
                    image: "https://i.imgur.com/7xuhDoA.jpg"
                },

                {
                    title: "Active Members",
                    value: activeMembersCount,
                    change: "-10%",
                    period: "Since yesterday",
                    image: "https://i.imgur.com/Nz3kPLv.jpg"
                },
                {
                    title: "Attendance Today",
                    value: attendanceTodayCount,
                    change: "-6%",
                    period: "Since last week",
                    image: "https://i.imgur.com/kkDG6LF.jpg"
                },
                {
                    title: "Revenue/Month",
                    value: revenueMonth,
                    change: "+5.8%",
                    period: "Since last month",
                    image: "https://i.imgur.com/OqnBJHW.jpg"
                },
                {
                    title: "New Members/Month",
                    value: newMembersCount,
                    change: "+20%",
                    period: "Since last month",
                    image: "https://i.imgur.com/Oyv43JT.jpg"
                },
                {
                    title: "Pending Payments",
                    value: pendingPaymentsCount,
                    change: "-52%",
                    period: "Since last month",
                    image: "https://i.imgur.com/L9Uv5Fe.jpg"
                }
            ];

            return DataAssembler.toEntitiesFromResponse(processedStatistics);

        } catch (error) {
            console.error('Error fetching statistics:', error);
            throw error;
        }
    }
}