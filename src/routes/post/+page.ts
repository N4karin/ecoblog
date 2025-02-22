import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
    // Get posts from local .json file
    const response = await event.fetch('/posts.json');
    const posts = await response.json();

    // Get post by id from URL parameter
    const slug = event.url.searchParams.get('id');
    const post = posts.find((p: { slug: string }) => p.slug === slug);

    // Pass post to +page.svelte
    return {
        props: {
            post,
        },
    };
};
