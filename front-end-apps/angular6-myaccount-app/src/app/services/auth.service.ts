import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceResponse } from './../model/sharedModel/ServiceResponse';
import { URLHandlerService } from './urlhandler.service';

@Injectable()
export class AuthService {

	readonly HTTP_AUTH_LOGIN = "login";
	readonly HTTP_AUTH_LOGOUT = "logout";
	readonly LOGOUT_SUCCESS = "Success";

	// Move this to a shared constant file.
	readonly LOCALSTORAGE_USER = "currentUser";	
	readonly LOCALSTORAGE_LOGGEDFLAG = "currentUser";
	readonly LOCALSTORAGE_APIFULL_TOKEN = "LDAPTOKEN";
	readonly LOCALSTORAGE_LOGGED_FLAG = "isLoggedin";
	readonly LOCALSTORAGE_DBENVS = "databseEnvs";
	
	constructor(private http: HttpClient, 
		private urlHandler: URLHandlerService, 
		private router: Router) { }
  
	/**
	 * Retrieve the LDAP token of the logged in user.
	 */
	public getToken(): string{
		let currentUser = JSON.parse(sessionStorage.getItem(this.LOCALSTORAGE_USER));
		
		if(currentUser)
			return currentUser.token;
		return '';
	}
	
	
	/**
	 * Send request to authenticate user with credentials and store information if valid.
	 * login successful if there's a JWT token in the response
	 */
	public login(email: string, password: string) {
		  return this.http.post<any>(this.urlHandler.HTTP_URL_ADMIN + this.HTTP_AUTH_LOGIN, { email: email, password: password })
		      .pipe(map(user => {
				  if (user && user.token) {
					  // store user details and jwt token in local storage.
					  sessionStorage.setItem(this.LOCALSTORAGE_LOGGEDFLAG, 'true');
					  sessionStorage.setItem(this.LOCALSTORAGE_USER, JSON.stringify(user));
			      }
			      return user;
			  }));
	  }
	  

	/**
	 * Send request with existing token to log out.
	 */
	  public logout() {
		  let userToken = this.getToken();  
		  return this.http.post<ServiceResponse>(this.urlHandler.HTTP_URL_ADMIN + this.HTTP_AUTH_LOGOUT, { token: userToken });
	  } 
}
