import apiClient from "../config/api-client";
import { AuthRequest } from "../model/AuthRequest";
import { AuthResponse } from "../model/AuthResponse";
import { Profile } from "../model/Profile";

export const createProfile = (profile: Profile) => {
  return apiClient.post<Profile>("/register", profile);
  //  return apiClient.post<Expense>("/expenses", expense);
};

export const authenticate = (authRequest: AuthRequest) => {
  return apiClient.post<AuthResponse>("/login", authRequest);
};
