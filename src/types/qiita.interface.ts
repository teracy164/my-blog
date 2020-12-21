export interface QiitaUser {
    // TODO
}

/**
 * 投稿
 * 参考：https://qiita.com/api/v2/docs#%E6%8A%95%E7%A8%BF
 */
export interface QiitaItem {
    rendered_body: string;
    body: string;
    coediting: boolean;
    comments_count: number;
    created_at: string;
    group: any;
    id: string;
    likes_count: number;
    private: boolean;
    reactions_count: number;
    tags: { name: string; version: string[] }[];
    title: string;
    updated_at: string;
    url: string;
    user: QiitaUser;
    page_views_count: number;
}
