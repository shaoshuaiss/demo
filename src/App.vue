<template>
    <div id="app">
        <index msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
    import index from './pages/main'

    export default {
        name: 'App',
        components: {
            index
        }
    }
</script>

<style>
    html,
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    #app {
        width: 100%;
        height: 100%;
    }
</style>