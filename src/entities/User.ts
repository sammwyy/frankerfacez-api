import EmoteSet from "./EmoteSet";
import Resource from "./Resource";

type EmoteSetList = {
    [key: string]: EmoteSet;
}

export default interface User {
    room: {
        _id: number;
        twitch_id: number;
        youtuber_id: number | null;
        id: string;
        is_group: boolean;
        display_name: string;
        set: number;
        moderator_badge: null | Resource;
        vip_badge: null | Resource;
    };

    sets: EmoteSetList;
}