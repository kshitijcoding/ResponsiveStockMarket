import Constants from './actionConstants';


let initialState = {
    isSearchSuccess : false,
    stockData: {}
}

export default function HomePageReducer(state = initialState, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case Constants.SEARCH_SUCCESSFULL:
            newState.isSearchSuccess = true,
            newState.stockData = action.data
            break;
        case Constants.SEARCH_UNSUCCESSFULL:
            newState.isSearchSuccess = false
            break;
        default:
            break;
    }
    return newState
}