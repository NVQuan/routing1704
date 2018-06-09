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
    author: UserInfo;
    content: string;
    comment: {
        _id: string;
        author: UserInfo;
        content: string;
        fans: string[];
    };
    fans: string[];
}

export interface AppState {
    client: Client;
    stories: Story[];
}
