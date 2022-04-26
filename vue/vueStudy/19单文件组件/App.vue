<template>
    <div>
        <school/>
        <student/>
    </div>
</template>

<script>
import school from './school.vue'
import student from './students.vue'

export default {
    name : 'App',
    components : {
        school,
        student
    }
}
</script>

<style>

</style>