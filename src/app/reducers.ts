import { Client, Story, People } from './type';

export function clientReducer(state: Client = null, action): Client {
    if (action.type === 'SET_CLIENT') return action.client;
    if (action.type === 'LOG_OUT') return null;
    return state;
}

export function storiesReducer(state: Story[] = [], action): Story[] {
    if (action.type === 'SET_STORIES') return action.stories;
    if (action.type === 'CREATE_STORY') return [action.story, ...state];
    if (action.type === 'LIKE_STORY') {
        return state.map(story => {
            if (story._id !== action._id) return story;
            return {...story, fans: [...story.fans, action.fan]};
        });
    }
    if (action.type === 'DISLIKE_STORY') {
        return state.map(story => {
            if (story._id !== action._id) return story;
            return {...story, fans: story.fans.filter(f => f._id !== action.idUser)};
        });
    }
    if (action.type === 'ADD_COMMENT') {
        return state.map(story => {
            if (story._id !== action._id) return story;
            return {...story, comments: [...story.comments, action.comment ] };
        });
    }
    return state;
}

const defaultPeople: People = {
    friends: [],
    otherUsers: [],
    sentRequests: [],
    inCommingRequests: []
};

export function peopleReducer(state: People = defaultPeople, action): People {
    if (action.type === 'SET_PEOPLE') return action.people;
    if (action.type === 'ADD_FRIEND') {
        return {
            ...state,
            otherUsers: state.otherUsers.filter(u => u._id !== action.user._id),
            sentRequests: [...state.sentRequests, action.user]
        };
    }
    if (action.type === 'CANCEL_REQUEST') {
        return {
            ...state,
            sentRequests: state.sentRequests.filter(u => u._id !== action.user._id),
            otherUsers: [...state.otherUsers, action.user]
        };
    }
}
