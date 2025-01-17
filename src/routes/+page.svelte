<script context="module">
    import posts from '../posts.json';
</script>

<style>
    .post-content {
        display: -webkit-box; 
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5; /* Show only 5 lines */
        overflow: hidden; /* Hide overflow */
    }
</style>

<div>
    <div class="pl-20 pt-12 pb-8">
        <img src="src/images/icon.png" alt="Logo" class="h-12">
    </div>
    <div class="px-20 lg:py-56 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-60">
        {#each posts as post}
            <div class="d">
                <p class="font-semibold">{post.date}</p>
                <h2 class="text-2xl font-bold mb-4">{post.title}</h2>
                <p class="post-content text-xl">
                    {post.content}
                </p>
                <a href={`/blog/${post.slug}`} class="inline-block px-4 py-1 border border-black rounded-full text-black bg-white hover:bg-black hover:text-white transition duration-300 mt-8">
                    Read more
                </a>
            </div>
        {/each}
    </div>
</div>
