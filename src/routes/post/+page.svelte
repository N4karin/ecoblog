<script lang="ts">
    // Get post as props
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
    let post = data.props.post;
</script>

<div class="px-16">
    <!-- Header -->
    <div class="flex justify-between pt-12 sm:pb-8 lg:pb-28">
        <a href="/">
            <img src="images/icon.png" alt="Logo" class="h-12" />
        </a>

        <a href="/" class="inline-block px-5 my-3 border font-semibold border-black rounded-full text-black bg-white hover:bg-black hover:text-white transition duration-100">
            Close
        </a>
    </div>
    <!-- Body -->
    <div>
        <div>
            <h2 class="text-sm font-semibold pb-2">{post.date}</h2>
            <h1 class="text-2xl font-bold">{post.title}</h1>
        </div>
        <div class="grid pt-12 sm:grid-cols-1 md:grid-cols-2">
            <div class="w-3/5 pb-12">
                {@html post.content}
            </div>

            <div class="pb-12 max-w-[1000px]">
                <img src={post.image} alt="Post Image"/>
            </div>
        </div>
    </div>
</div>

<style>
</style>
