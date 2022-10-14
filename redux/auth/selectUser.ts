import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const selectUser = (state: RootState) =>  state.auth.firstName + " " + state.auth.lastName;

console.log({selectUser});


export const userSelector= createSelector(selectUser, state => state)