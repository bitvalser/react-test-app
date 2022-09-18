import { TodoItem } from '@interfaces/todo-item.interface';
import { createAction } from 'typesafe-actions';

export enum MainActions {
  GetData = '[Main] GetData',
  SuccessGetData = '[Main] SuccessGetData',
  ErrorGetData = '[Main] ErrorGetData',

  GetDetails = '[Main] GetDetails',
  SuccessGetDetails = '[Main] SuccessGetDetails',
  ErrorGetDetails = '[Main] ErrorGetDetails',
}

export const getDataAction = createAction(MainActions.GetData)();
export const successGetDataAction = createAction(MainActions.SuccessGetData, (payload: TodoItem[]) => payload)();
export const errorGetDataAction = createAction(MainActions.ErrorGetData)();

export const getDetailsAction = createAction(MainActions.GetDetails, (payload: string) => payload)();
export const successGetDetailsAction = createAction(MainActions.SuccessGetDetails, (payload: TodoItem) => payload)();
export const errorGetDetailsAction = createAction(MainActions.ErrorGetDetails)();
