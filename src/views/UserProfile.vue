<template>
    <content-base>
        <div class="row">
            <div class="col-3">
                <user-profile-info></user-profile-info>
                <user-profile-write></user-profile-write>
            </div>
            <div class="col-9">
                <user-profile-posts></user-profile-posts>
            </div>
        </div>
    </content-base>
</template>

<script>
import ContentBase from '@/components/ContentBase.vue'
import UserProfilePosts from '@/components/UserProfilePosts.vue'
import UserProfileInfo from '@/components/UserProfileInfo.vue'
import UserProfileWrite from '@/components/UserProfileWrite.vue'
import { useRoute } from 'vue-router';

export default {
    components: { ContentBase, UserProfilePosts, UserProfileInfo, UserProfileWrite },
    name: "UserProfile",
    setup() {
        const route = useRoute();
        const userId = route.params.userId;
        console.log(userId);
    }
}
</script>

<style scoped>

</style>