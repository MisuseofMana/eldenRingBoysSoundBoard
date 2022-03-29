<template>
    <v-expand-transition>
        <div v-if="opened" :key="title" class="mb-10">
            <h2 class="text-left teal--text mb-5">{{ title }}</h2>
            <v-row v-if="boardItems">
                <v-col cols="6" xs="6" sm="6" md="4" lg="2" v-for="(item, index) in boardItems" :key="index+item.soundClip">
                    <SoundCard
                    :displayText="item.displayText"
                    :soundClip="item.soundClip"
                    :audio="item.audio"
                    :isNew="item.new"
                    class="mb-3 text-center"
                    />
                </v-col>
            </v-row>
            <div v-else>
                <p class="teal--text">Coming soon, you scallywag.</p>
            </div>
        </div>
    </v-expand-transition>
</template>

<script>
import SoundCard from '@/components/SoundCard'

export default {
    props: {
        title: {
            type: String,
            default:""
        },
        image: {
            type: String,
            default: ''
        },
        boardItems: {
            type: Array,
            default: () => []
        },
        opened: {
            type: Boolean,
            default: false,
        }
    },
    components: {
        SoundCard
    }
}
</script>

<style lang="scss" scoped>

</style>