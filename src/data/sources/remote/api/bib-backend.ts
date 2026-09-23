import { InjectionToken } from "@angular/core";

export const BACKEND_URL = new InjectionToken<string>("BackendUrl",{
  providedIn : "root",
  factory : () => "https://localhost:5001/api"
});