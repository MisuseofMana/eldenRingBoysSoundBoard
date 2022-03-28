<template>
    <div class="mb-10">
    <h2 class="text-left blue-grey--text text--darken-1 mb-5">{{ title }}</h2>
    <v-img 
    v-if="image"
    :src="require(`@/assets/images/${image}.jpg`)"
    width="400px"
    class="mb-5"
    ></v-img>
    <v-row v-if="boardItems">
        <v-col cols="12" xs="12" sm="12" md="4" lg="2" v-for="(item, index) in boardItems" :key="index+item.soundClip">
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
        <p class="blue-grey--text text--darken-1">Coming Soon</p>
    </div>
    </div>
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
        }
    },
    components: {
        SoundCard
    }
}
</script>

<style lang="scss" scoped>

</style>