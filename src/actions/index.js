import * as Types from './../constants/ActionTypes';

export const actFetchBikes = (bikes) => {
    return {
        type : Types.FETCH_BIKES,
        bikes
    }
}