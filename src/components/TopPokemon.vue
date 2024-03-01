<template>
    <div class="q-pa-md top-header flex flex-center">      
        <div class="row items-start">
            <div class="col q-pa-md"
                v-for="(item, index) in top3Pokemon"
                :key="index">                
                <q-card class="my-card">
                    <q-card-section>
                    <div class="text-h6">Top {{ index + 1 }}</div>
                    <div class="text-subtitle" style="text-transform: capitalize;">{{ item.name }}</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <img :src="item.sprites.other.home.front_default" width="320">
                    </q-card-section>
                </q-card>                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({

    }),
    props: {
        top3Pokemon: Array
    }
}
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 350px;
}
</style>