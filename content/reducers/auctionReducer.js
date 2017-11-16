/**
 * Created by gaocai on 16/9/19.
 */

import * as types from '../action/actionType';

import {fromJS, List,toJS} from 'immutable'

const initialState = fromJS({
    auctionList:[],
    moodDetails:{}
})
export default (state = initialState, action) => {
    switch (action.type) {
        case types.GIRL_LIST:
            return state.set('auctionList',action.data)
        default:
            return state
    }
}


