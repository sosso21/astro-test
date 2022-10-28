<template>
<h2> Dynamic date :  {{vueClock}} </h2>
</template>
<script>
export default {
    setup( ) {
        return {
            vueClock: Date()
        }
    }
}
</script>