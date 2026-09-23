import { CanActivateFn } from '@angular/router';
import { LoginAuthService } from '../../data/services/login-auth.service';
import { computed, inject, Signal } from '@angular/core';
import { SessionUC } from '../../domain/use-cases/session-usecase';
import { ToastService } from '../services/toast-service';
import { Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const loginAuthService = inject(LoginAuthService);
  const sessionUC = inject(SessionUC)
  const toastService = inject(ToastService)
  const router = inject(Router)
  var ongoingMessage : Signal<boolean> = computed(() => toastService.toastParams().outgoing);

  if (!ongoingMessage()) {
    return sessionUC.me().pipe(
      map(() => {console.log("GUARD ME SUCCESS");return true;}),

      catchError(err => {
        console.log("GUARD ME ERROR")
        loginAuthService.setAuthenticated(false);

        toastService.pushToastParams(
          err.error.message,
          5000
        );

        return of(router.createUrlTree(["/libros"]));
      })
    );
  }

  return false;
};
