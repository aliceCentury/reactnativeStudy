/**
 * Created by gaocai on 16/9/19.
 */

import * as types from '../action/actionType';

export function getList(data) {
    return dispatch => {
        fetch('https://cft.upmi.com.cn/api-auction/gw/getAuctionProductListByStatus')
            .then(response => response.json()).then(responseData => {
            dispatch(
                {
                    type: types.GIRL_LIST,
                    loading: true,
                    girlList: responseData.results
                }
            );
        }).catch((error) => {
            console.log('error')
        }).done();
    }
}


