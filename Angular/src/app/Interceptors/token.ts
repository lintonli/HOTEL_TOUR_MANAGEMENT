import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export function TokenInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  if (
    req.url === 'http://localhost:4001/users/login' ||
    req.url === 'http://localhost:4001/users/register'
  ) {
    return next(req);
  } else {
    const token = localStorage.getItem('token') as string;
    const modifiedRequest = req.clone({
      headers: new HttpHeaders().append('token', token),
    });
    return next(modifiedRequest);
  }
}
