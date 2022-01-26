import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: '',
    dataset: 'production',
    apiVersion: '2022-01-26',
    token: '',
    useCdn: false,
})
