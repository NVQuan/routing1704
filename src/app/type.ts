export interface Client {
    _id: string;
    name: string;
    email: string;
    token: string;
}

export interface AppState {
    client: Client;
}
