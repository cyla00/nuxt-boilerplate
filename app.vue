<script setup lang="ts">
const { locale } = useI18n()

</script>

<template>
    <div class="text-sm">
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>

<style>
html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
    font-family: Montserrat;
}
body{
    margin: 0;
    padding: 0;
}
i {
	vertical-align: middle;
}
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 150ms;
}

.back-shadow{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
.link-effect:hover, .btn-effect:hover{
    transition: 0.2s;
    opacity: 50%;
}
.link-effect:active, .btn-effect:active{
    transition: 0.2s;
    opacity: 100%;
}

.unselectable {
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>
