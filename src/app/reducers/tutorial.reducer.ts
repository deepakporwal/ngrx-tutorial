
import { Tutorial } from "../models/tutorial.models";
import * as TutorialActions from './../actions/tutorial.actions';


const initialState = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}

export function reducer(state : Tutorial[] = [initialState] ,action : TutorialActions.Actions)
{
    switch (action.type) {
        case 'ADD_TUTORIAL':
            return [...state,action.payload];
    
        case 'REMOVE_TUTORIAL' :
            debugger
            console.log(action.payload)
            state.splice(action.payload, 1); // use splice to remove 1 item
            return state; 
        default:
            return state;
    }
}