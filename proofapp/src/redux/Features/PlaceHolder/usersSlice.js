import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
    return await fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(data => data.data)
    .catch(error => console.log(error.message))
})

export const getUserById = createAsyncThunk("getUserById", async (id) => {
    return await fetch(`https://reqres.in/api/users/${id}`)
    .then(response => response.json())
    .then(data => data.data)
    .catch(error => console.log(error.message))
})

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        usersCopy: [],
        userData: {}
    }, 
    reducers: {
        cleanDataUser: (state) => {
            state.userData = {}
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
        .addCase(getUserById.fulfilled, (state, action) => {
            state.userData = action.payload
        })
    }
})

export const { cleanDataUser } = userSlice.actions
export default userSlice.reducer