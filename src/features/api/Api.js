import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// url initialization
export const baseUrl = {
    prod: "https://super-auto-cash-mobile-api.herokuapp.com"
}
export const apiUrl = {
    userLogin: `${baseUrl.prod}/user/login`,
    userRegister: `${baseUrl.prod}/user/register`,
    merchantLogin: `${baseUrl.prod}/merchant/login`,
    menuCreate: `${baseUrl.prod}/menu/create`,
    menuAll: `${baseUrl.prod}/menu/`
}

// api slice state
const initialState = {
    loading: false,
    payload: {}
}

// get method
export const get = createAsyncThunk(
    "api/post",
    async (request) => {
        let queryParam = ""
        if (request.queryParam !== undefined && request.queryParam.size > 0) {
            // query param not empty
            queryParam = "?"
            for (const [key, value] of request.queryParam.entries()) {
                queryParam += key + "=" + value + "&"
            }
            queryParam = queryParam.substring(0, queryParam.length - 1) // remove last `&` in queryParam
        }
        const response = await fetch(request.endpoint + queryParam, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + request.token
            },
        })
        return response.json()
    }
)

// post method
export const post = createAsyncThunk(
    "api/post",
    async (request) => {
        const response = await fetch(request.endpoint, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + request.token
            },
            "body": JSON.stringify({
                "data": request.data
            })
        })
        return response.json()
    }
)

// slicer
export const apiSlice = createSlice({
    name: "api",
    initialState,
    reducers: {
        resetPayload: (state) => {
            state.payload = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(post.pending, (state) => {
                state.loading = true
            })
            .addCase(post.fulfilled, (state, action) => {
                state.loading = false
                state.payload = action.payload
            })
    }
})

// reducer actions
export const { resetPayload } = apiSlice.actions

// select state
export const selectLoading = (state) => (state.api.loading)
export const selectPayload = (state) => (state.api.payload)

export default apiSlice.reducer