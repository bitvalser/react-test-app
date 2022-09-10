import { MainItem } from 'interfaces/main-item.interface';
import { createAction } from 'redux-actions';

export enum MainActions {
  GET_DATA = '[Main] GET_DATA',
  SUCCESS_GET_DATA = '[Main] SUCCESS_GET_DATA',
  ERROR_GET_DATA = '[Main] ERROR_GET_DATA',

  GET_DETAILS = '[Main] GET_DETAILS',
  SUCCESS_GET_DETAILS = '[Main] SUCCESS_GET_DETAILS',
  ERROR_GET_DETAILS = '[Main] ERROR_GET_DETAILS',
}

export const getDataAction = createAction(MainActions.GET_DATA);
export const successGetDataAction = createAction(MainActions.SUCCESS_GET_DATA, (payload: MainItem[]) => payload);
export const errorGetDataAction = createAction(MainActions.ERROR_GET_DATA);

export const getDetailsAction = createAction(MainActions.GET_DETAILS, (payload: string) => payload);
export const successGetDetailsAction = createAction(MainActions.SUCCESS_GET_DETAILS, (payload: MainItem) => payload);
export const errorGetDetailsAction = createAction(MainActions.ERROR_GET_DETAILS);
