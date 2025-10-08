import { InjectionToken } from "@angular/core";

export const BACKEND_URL = new InjectionToken<string>("BackendUrl",{
  providedIn : "root",
  factory : () => "http://localhost:5000/api"
});