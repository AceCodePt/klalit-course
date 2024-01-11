import {signal, computed, effect} from "@preact/signals-react"

export const count = signal(0)

export const increment = () => { count.value++}
export const decremnet = () => { count.value--}

export const doubledCount = computed(() => count.value * 2)

const firstName = signal("")
const lastName = signal("")

export const fullName = computed(() => firstName.value + lastName.value)

effect(() => {
    console.log(count.value)
})