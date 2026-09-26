<!-- ===== Function ======================================================== -->

<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";

    let { children } = $props();
</script>

<!-- ===== Form ============================================================ -->

<svelte:head>
    <title>Vin's Personal Console</title>
    <link
        rel="icon"
        href={favicon} />
</svelte:head>

<!-- ===== Driver Code ===================================================== -->

{@render children()}
