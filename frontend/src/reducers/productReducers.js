import {ALL_PRODUCTS_FAIL,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_REQUEST,
    CLEAR_ERRORS

} from '../constants/productConstants'
export const productsReducer = (state = { products:['abc'] },action) =>{
    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
            return{
                loading:true,
                products:[]
            }
        case ALL_PRODUCTS_SUCCESS:
            return{
                loading:false,
                products:action.payload.products,
                productsCount:action.payload.productsCount
            }
        case ALL_PRODUCTS_FAIL:
            return{
                loading:false,
                products:action.payload
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        
        default: return state
    }
}
