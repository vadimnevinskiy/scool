import { ADD_PROFILE } from "../vars"
import {ProfileType} from "../types";

export let setProfile = (profile: ProfileType | null) => {
    return {
        type: ADD_PROFILE,
        profile
    }
}
