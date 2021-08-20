import {ActionsProfileReducerTypes, ProfileStateType} from "./types";
import { ADD_PROFILE } from "./vars";

const initialState: ProfileStateType = {
    profile: null
}

const profileReducer = (state: ProfileStateType = initialState, action: ActionsProfileReducerTypes): ProfileStateType => {
    switch (action.type) {
        case ADD_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
    }
    return state
}

export default profileReducer;
