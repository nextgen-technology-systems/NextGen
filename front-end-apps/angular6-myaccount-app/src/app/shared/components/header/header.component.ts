import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    pushRightClass: string = 'push-right';
	username:String;
	
	// Subject to handle subscription.
	private unsubscribe = new Subject<void>();

    constructor(public router: Router, private authService: AuthService) {
    	
        
    }

    ngOnInit() {
    	
    }
    
    /**
     * Unsubscribe from all Observable.
     */
    public ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
	}

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
    
    goToProfile(){
	    this.router.navigateByUrl('/dashboard');	
    }

    /**
     * Logs out user by requesting the delete of the auth token and clearing all local session variable.s
     */
    public onLoggedout() {
    	try{
    		this.authService.logout().pipe(takeUntil(this.unsubscribe)).subscribe(
			      data => {	  
			    	  let response = data[0];
			        },
					(err: HttpErrorResponse) => {
						if(err.error instanceof Error){
							//console.log(`Service issue: returned code ${err.status}, body error: ${err.error}.`);           
						}
						else{
							//console.log(`Back-end Service error, client/netowork issue: returned code ${err.status}, body error: ${err.error}.`);               
						}
					}
    		);
    	}
    	catch(exception){
    		//console.log("HTTP Call unable to process logout.");
    	}
    	finally{
		    this.router.navigateByUrl('/login');
    	}
    }

}
