import { Injectable, signal } from "@angular/core";

interface ToastState {
  outgoing : boolean;
  message : string | null;
}

@Injectable({
    providedIn : "root"
})
export class ToastService {

    toastParams = signal<ToastState>({
        outgoing : false,
        message : null
    })

    pushToastParams(message : string, duration : number){
        this.toastParams.set({
            outgoing : true,
            message : message
        });

        setTimeout(() => {
            this.toastParams.set({
                outgoing : false,
                message : null
            });  
        }, duration);
    }
}