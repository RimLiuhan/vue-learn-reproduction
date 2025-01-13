// import $ from 'jquery';
// import { jwtDecode } from 'jwt-decode';

const ModuleUser = {
    state: {
        username: "",
        id: "",
        photo: "",
        followerCount: 0,
        access: "",
        refresh: "",
        is_login: false,
    },
    getters: {
    },
    mutations: {
        updateUser(state, user) {
            state.id = user.id;
            state.username = user.username;
            state.photo = user.photo;
            state.followerCount = user.followerCount;
            state.access = user.access;
            state.refresh = user.refresh;
            state.is_login = user.is_login;
        },
    },
    actions: {
    },
    modules: {
    }
}

export default ModuleUser;