<template>
    <content-base>
        <div class="row justify-content-md-center">
            <div class="col-3">
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="username" class="form-label">用户名</label>
                        <input v-model="username"  type="text" class="form-control" id="username">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">密码</label>
                        <input v-model="password"  type="password" class="form-control" id="password">
                    </div>
                    <div class="error-message">{{ error_message }}</div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </content-base>
</template>

<script>
import ContentBase from '@/components/ContentBase.vue';
import { ref } from 'vue';

export default {
    components: { ContentBase },
    name: "LoginView",
    setup() {
        let error_message = ref('');
        let username = ref('');
        let password = ref('');

        const login = () => {
            console.log(username.value, password.value);
        }

        return {
            error_message,
            username, 
            password,
            login
        }
    }
}
</script>

<style scoped>

</style>