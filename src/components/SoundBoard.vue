<template>
    <div class="mb-10">
    <h2 class="text-left teal--text mb-5">{{ title }}</h2>
    <v-img 
    v-if="image"
    :src="require(`@/assets/images/${image}.jpg`)"
    width="600px"
    height="120px"
    class="mb-5"
    ></v-img>
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