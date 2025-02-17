import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "",
    error: "",
    user: {
        id: "",
        name: "Shuvo Bhowmik",
        email: "",
        picture: "",
        status: "",
        token: ""
    }
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.status = "";
            state.error = "";
            state.user = {
                id: "",
                name: "",
                email: "",
                picture: "",
                status: "",
                token: ""
            };
        }
    }
});

// ✅ Proper Export Koro
export const { logout } = userSlice.actions;
export default userSlice.reducer;
