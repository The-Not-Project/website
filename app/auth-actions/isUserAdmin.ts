'use server'

import { getUsersRoles } from "./getUserRoles"

export async function isUserAdmin(): Promise<boolean> {

    try {
        const roles = await getUsersRoles()
        return roles.some(role => role.name === 'admin')
    } catch  (error) {
        console.error('Error checking admin status', error)
        
        return false
    }
}