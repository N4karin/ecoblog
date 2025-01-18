<script lang="ts">
    // Get posts as props
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
    let posts = data.props.posts;
</script>

<div class="px-16">
    <!-- Header -->
    <div class="flex pt-12 pb-8">
        <a href="/">
            <img src="src/images/icon.png" alt="Logo" class="h-12" />
        </a>
    </div>
    <!-- Body -->
    <div class="md:py-56 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-24">
        {#each posts as post}
            <div class="max-w-md">
                <p class="font-semibold">{post.date}</p>
                <h2 class="text-2xl font-bold mb-4">{post.title}</h2>
                <p class="post-content text-xl">
                    {post.content}
                </p>
                <a
                    href={`/post?id=${post.slug}`}
                    class="inline-block font-semibold px-4 py-1 border border-black rounded-full text-black bg-white hover:bg-black hover:text-white transition duration-100 mt-8"
                >
                    Read more
                </a>
            </div>
        {/each}
    </div>
</div>

<style>
    /* Display 5 lines as preview */
    .post-content {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5; 
        overflow: hidden; 
    }
</style>
