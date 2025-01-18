// src/routes/post/+page.ts
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
    const response = await event.fetch('/posts.json');
    
    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }

    const posts = await response.json();
    const slug = event.url.searchParams.get('id');
    const post = posts.find((p: { slug: string }) => p.slug === slug);

    if (!post) {
        throw new Error(`Post not found for slug: ${slug}`);
    }

    return {
        props: {
            post,
        },
    };
};
