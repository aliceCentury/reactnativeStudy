/**
 * Created by gaocai on 16/9/19.
 */

import * as types from '../action/actionType';

export function fetchGirl(index = 1) {
    return dispatch => {
        fetch('https://cft.upmi.com.cn/api-product/gw/crowdfund/list/history/1')
            .then(response => response.json()).then(responseData => {
            dispatch(receiverGirlList(responseData));
        }).catch((error) => {
            console.log('error')
        }).done();
    }
}

function receiverGirlList(data) {
    return {
        type: types.GIRL_LIST,
        loading: true,
        girlList: data.data        
    }
}

