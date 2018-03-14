import RestClient from './../../restClient'
import actionConstants from './actionConstants';
export default {
    doSearchForStock: (dispatch, url) => {
        return (dispatch) => {
            let success = (responseJson) => {
                 return dispatch ({type :actionConstants.SEARCH_SUCCESSFULL, data: responseJson} )             
            }
            let fail = () => {
                return dispatch ({type :actionConstants.SEARCH_UNSUCCESSFULL} )             
                
            }
             return RestClient.get(url,success,fail);
        }
    }
}