<script lang="ts">
    import type { PageData } from "./$types";
    
    let { data }: { data: PageData } = $props();
    let post = data.props.post
</script>

<style>
</style>

<div class="px-32 py-16">
        <h1>{post.title}</h1>
        <img src={post.image}/>
        <p>{post.date}</p>
        <div>{@html post.content}</div>
</div>


