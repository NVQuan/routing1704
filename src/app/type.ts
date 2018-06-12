export interface Client {
    _id: string;
    name: string;
    email: string;
    token: string;
}

export interface UserInfo {
    _id: string;
    name: string;
}

export interface Story {
    _id: string;
    author: UserInfo;
    content: string;
    comment: {
        _id: string;
        author: UserInfo;
        content: string;
        fans: string[];
    };
    fans: UserInfo[];
}

export interface AppState {
    client: Client;
    stories: Story[];
}
