<script setup lang="ts">
const year = new Date().getFullYear()
let mobileNav = ref<boolean>(false)
let iconSwitch = ref<boolean>(false)

const toggleMobileNav = () => {
    mobileNav.value = !mobileNav.value
    iconSwitch.value = !iconSwitch.value
}
</script>

<template>
    <header class="max-lg:py-0 py-5 w-full font-semibold duration-200">
        <div class="w-4/6 m-auto flex max-lg:hidden">
            <div>
                <nuxt-img src="https://img.logoipsum.com/287.svg" class="w-20"/>
            </div>
            <div class="m-auto"></div>
            <div>
                <NuxtLink to="/" class="ml-3 link-effect">link 1</NuxtLink>
                <NuxtLink to="/" class="ml-3 link-effect">link 1</NuxtLink>
                <NuxtLink to="/" class="ml-3 link-effect">link 1</NuxtLink>
                <NuxtLink to="/" class="ml-3 link-effect">link 1</NuxtLink>
            </div>
        </div>

        <div class="lg:hidden py-2 flex w-11/12 justify-end m-auto">
            <div class="">
                <i class='bx bx-menu duration-200 bx-md' @click="toggleMobileNav" :class="{'toggle-icon-active': mobileNav}"></i>
            </div>
        </div>

        <Transition name="mobile-nav">
            <div class="absolute top-0 bottom-0 left-0 h-screen w-screen duration-200 bg-cyan-400 lg:hidden" v-if="mobileNav">
                <div class="flex flex-col py-2 w-11/12 m-auto">
                    <div class="">
                        <i class='bx bx-x duration-200 bx-md' @click="toggleMobileNav" :class="{'toggle-icon-active': mobileNav}"></i>
                    </div>
                    
                    <div class="m-auto my-5">
                        <nuxt-img src="https://img.logoipsum.com/287.svg" class="w-32"/>
                    </div>
                    <div class="flex flex-col m-auto">
                        <a href="/" class="ml-3 link-effect">link 1</a>
                        <a href="/" class="ml-3 link-effect">link 1</a>
                        <a href="/" class="ml-3 link-effect">link 1</a>
                        <a href="/" class="ml-3 link-effect">link 1</a>
                    </div>
                </div>
                    
            </div>
        </Transition>
    </header>

    <slot/>


    <footer class="w-full my-5">
        <div class="w-4/6 m-auto flex justify-center">
            <p>&copy; {{ year }} site.com</p>
            <NuxtLink to="/" class="underline ml-3">Legal notice</NuxtLink>
            <NuxtLink to="/" class="underline ml-3">Privacy policy</NuxtLink>
        </div>
    </footer>
</template>

<style scoped>
.toggle-icon-active{
	transform: rotate(180deg);
}

.mobile-nav-enter-active, .mobile-nav-leave-active {
	transition: 1s ease all;
}
.mobile-nav-enter-from, .mobile-nav-leave-to {
	transform: translateX(-100%);
}
.mobile-nav-enter-to {
	transform: translateX(0);
}
</style>