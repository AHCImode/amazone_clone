export const initialState = {
    basket: [],
    user: null
};

const reducer = (state, action) => {

    console.log(action);
    
    switch(action.type){
        case 'ADD_TO_BASKET':
        return {
            ...state,
            basket: [...state.basket, action.item],
        };
        default:
            return state;

        case "SET_USER":
            return{
            ...state,
            user: action.user             
        
            }
    }

   
};

export default reducer;