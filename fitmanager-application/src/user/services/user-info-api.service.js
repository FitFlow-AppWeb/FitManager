export async function getUserInfo() {
    // Simular retraso de red
    await new Promise(resolve => setTimeout(resolve, 500));

    return {
        managementTeam: 'Team Alpha',
        telecom: 'Commercial Plus',
        remoteAssociate: '-13 1995 802 751',
        disparities: 'Vendrides 2',
        planAssist: 'Active',
        // Campos adicionales
        id: 1,
        username: "powergym_pro",
        email: "ness@gmail.com",
        phone: "+51 990 530 751",
        plan: "Platino"
    };
}