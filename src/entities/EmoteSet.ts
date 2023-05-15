import Emote from "./Emote";

export default interface EmoteSet {
    id: number;
    _type: number;
    icon: string | null;
    title: string;
    css: string | null;
    emoticons: Emote[];
}