import { ADD_PROFILE } from "../vars"
import {ProfileType} from "../types";

export let setProfile = (profile: ProfileType) => {
    return {
        type: ADD_PROFILE,
        profile
    }
}
