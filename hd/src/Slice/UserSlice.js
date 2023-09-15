import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'

 export const fetchUsers = createAsyncThunk("user/fetchUsers" , async ()=>{

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    return users;

 });

const userSlice = createSlice({
    name : 'user',
    initialState : {
        data : [],
        isLoading : false,
        isSuccess : false,
        errorMessage : ""
    },

    extraReducers : {
         [fetchUsers.pennding] : (state , action) =>{
        
            return {...state , isLoading : true }
         },

         [fetchUsers.fulfilled] : (state , action) =>{
            return {...state , isLoading : false , data : action.payload , isSuccess : true}
         },

         [fetchUsers.rejected] : (state , action) =>{
            return {...state , isLoading : false , errorMessage : action.payload , isSuccess : false}
         }
        
    }

})

export default userSlice.reducer;