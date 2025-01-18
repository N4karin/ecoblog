import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
    // Get posts from local .json file
    const response = await event.fetch('/posts.json');
    const posts = await response.json();

    // Pass post to +page.svelte
    return {
        props: {
            posts,
        },
    };
};
