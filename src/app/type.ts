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
    comments: {
        _id: string;
        author: UserInfo;
        content: string;
    }[];
    fans: UserInfo[];
}

export interface People {
    friends: UserInfo[];
    inCommingRequests: UserInfo[];
    otherUsers: UserInfo[];
    sentRequests: UserInfo[];
}

export interface AppState {
    client: Client;
    stories: Story[];
    people: People;
}
