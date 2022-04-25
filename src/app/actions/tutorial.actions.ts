import { Action } from "@ngrx/store";
import { Tutorial } from "../models/tutorial.models";

export const ADD_TUTORIAL = 'ADD_TUTORIAL';
export const REMOVE_TUTORIAL = 'REMOVE_TUTORIAL';

export class AddTutorial implements Action
{
    readonly type = ADD_TUTORIAL; 
    constructor(public payload : Tutorial)
    {
        
    }
}

export class RemoveTutorial implements Action
{
    type = REMOVE_TUTORIAL;
    constructor(public payload : number)
    {

    }
}

export type Actions = AddTutorial | RemoveTutorial;