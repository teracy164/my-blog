export interface BaseResponse {
    id: string;
}
export interface Blog extends BaseResponse {
    title: string;
    contents: string;
    tags: string[];
    created_at: string;
}
export interface Career extends BaseResponse {
    date: string;
    contents: string;
}
export interface Skill extends BaseResponse {
    category: string;
    level: string;
    note: string;
}
