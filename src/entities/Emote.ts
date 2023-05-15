import Resource from "./Resource";

export default interface Emote {
    id: number;
    name: string;
    height: number;
    width: number;
    public: boolean;
    hidden: boolean;
    modifier: boolean;
    modifier_flags: number;
    css: string | null;
    owner: {
        _id: number;
        name: string;
        display_name: string;
    };
    urls: Resource;
    status: number;
    usage_count: number;
    created_at: string;
    last_updated: string;
}