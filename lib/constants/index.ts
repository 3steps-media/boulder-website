export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Boulderhallen Finden';
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Die besten Boulderhallen Deutschlands ✓ Transparente Bewertungen, Öffnungszeiten, Preise, u.v.m. ➤ Hier findest du die richtige Boulderhalle in deiner Nähe.';
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
export const FEATURED_IMAGE_PLACEHOLDER = 'https://images.unsplash.com/photo-1563268381-06ddf2b1f46d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
export const GRAPHQL_API_URL = process.env.NEXT_ENVIRONMENT_TYPE === 'local'
    ? process.env.WORDPRESS_LOCAL_GRAPHQL_API_URL
    : process.env.WORDPRESS_STAGING_GRAPHQL_API_URL;