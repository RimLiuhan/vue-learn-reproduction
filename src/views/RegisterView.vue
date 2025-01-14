<template>
    <content-base>
        <div class="row justify-content-md-center">
            <div class="col-3">
                <form @submit.prevent="register">
                    <div class="mb-3">
                        <label for="username" class="form-label">用户名</label>
                        <input v-model="username"  type="text" class="form-control" id="username">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">密码</label>
                        <input v-model="password"  type="password" class="form-control" id="password">
                    </div>
                    <div class="mb-3">
                        <label for="password_confirm" class="form-label">确认密码</label>
                        <input v-model="password_confirm"  type="password" class="form-control" id="password_confirm">
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
import { useStore } from 'vuex';
import router from '@/router';
import $ from 'jquery';

export default {
    components: { ContentBase },
    name: "LoginView",
    setup() {
        const store = useStore();
        let error_message = ref('');
        let username = ref('');
        let password = ref('');
        let password_confirm = ref('');

        console.log(store, router);

        const register = () => {
            error_message.value = "";
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/user/",
                type: "post",
                data: {
                    username: username.value,
                    password: password.value,
                    password_confirm: password_confirm.value
                },
                success(resp) {
                    if (resp.result === "success") {
                            store.dispatch('login', {
                            username: username.value,
                            password: password.value,
                            success() {
                                router.push({name: "userlist"});
                            },
                            error() {
                                error_message.value = "系统异常, 请稍后尝试";
                            }
                        })
                    }
                    else error_message.value = resp.result;
                }
            })
        }

        return {
            error_message,
            username, 
            password,
            register,
            password_confirm
        }
    }
}
</script>

<style scoped>
.error-message {
    color: red
}
</style>