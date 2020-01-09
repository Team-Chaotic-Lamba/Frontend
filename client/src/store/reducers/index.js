import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  INITIALIZE_START,
  INITIALIZE_SUCCESS,
  INITIALIZE_FAIL,
  MOVE_START,
  MOVE_SUCCESS,
  MOVE_FAIL,
  SAY_START,
  SAY_SUCCESS,
  SAY_FAIL,
  SUBSCRIBE_CHAT_START,
  SUBSCRIBE_CHAT_SUCCESS
} from "../actions";

const initialState = {
  username: "",
  isLoggedIn: false,
  exploredRooms: [],
  health: 100,
  items: [],
  chatMessages: [
    "John said: Go to ele asdfasfd asdfsadfasdf sadfasdfasdf asfdsafas",
    "Eli said: four spaces ",
    "John said: Go to ele",
    "Eli said: four spaces ",
    "John said: Go to ele",
    "Eli said: four spaces ",
    "John said: Go to ele",
    "Eli said: four spaces ",
    "John said: Go to ele",
    "Eli said: four spaces ",
    "John said: Go to ele",
    "Eli said: four spaces "
  ],
  currentRoom: {
    title: "",
    description: "",
    players: [],
    items: [],
    coords: []
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: ""
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload
      };
    case LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: ""
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload
      };
    case INITIALIZE_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case INITIALIZE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentRoom: {
          title: action.payload.title,
          description: action.payload.description,
          players: action.payload.players
        },
        error: ""
      };
    case INITIALIZE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case MOVE_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case MOVE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentRoom: {
          title: action.payload.title,
          description: action.payload.description,
          players: action.payload.players
        },
        error: ""
      };
    case MOVE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case SUBSCRIBE_CHAT_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case SUBSCRIBE_CHAT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chatMessages: [...state.chatMessages, action.payload],
        error: ""
      };
    default:
      return state;
  }
};
