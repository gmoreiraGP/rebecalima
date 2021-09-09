import { Directus } from '@directus/sdk'

const directus = new Directus('http://localhost:8055/')

export const clients = directus.items('clients')
export const checklists = directus.items('checklist_clients')

export default directus
