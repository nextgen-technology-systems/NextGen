import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { takeUntil } from 'rxjs/operators';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit,OnDestroy{
	
	readonly ROUTE_DASHBOARD = "/dashboard";
	public alerts: Array<any> = [];
    private hideAlert: boolean;
	public email: string;
	public password: string;
    public showLoadingScreen: boolean;

    // Subject to handle subscription.
    private unsubscribe = new Subject<void>();
    
    constructor(public router: Router, 
    			private authService: AuthService) 
    			{}

    ngOnInit() {
    	this.hideAlert = false;
        this.showLoadingScreen = false;    
    }
    
    /**
     * Unsubscribe from all Observable.
     */
    public ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
	}

    /**
     * Form event that gets triggered when user clicks on log in button.
     * If the fields set by user are valid, validate user credentials.
     */
    onLoggedin(f: NgForm) {

//    	this.testLogingMethodIsForTestingONlyNotProd();
    	
        if(f.valid){
            this.showLoadingScreen = true;
           // this.validateUser();
           console.log('logging in...');
           this.router.navigateByUrl(this.ROUTE_DASHBOARD);
        }
        else{
            this.failedAlert("User Name and Password are required. Please try again");
        }
    }
    
    /**
     * Process login service request to COP Login service.
     */
    private validateUser(){
        try{         
	    	this.authService.login(this.email, this.password)
	    	.pipe(takeUntil(this.unsubscribe))
	    	.subscribe(
                data => {
                   /** if(data.token === null || data.token === undefined){
                    	this.failedAlert("Unable to authenticate username/password.");
                    	return;
                    }*/
                   
                         // User found. Route to home page.
                    sessionStorage.setItem('isLoggedin', 'true');
                    this.router.navigateByUrl(this.ROUTE_DASHBOARD);
                    //this.router.navigate(['/login']);


                  
                },
                error => {
  		    	  this.failedAlert("Please check username/password and try again.");
            });
        }
        catch(exception){
        	this.failedAlert("Unable to process request at this time. Please try again");
        }
    }
    
    
    
    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
    
    private successAlert(successMsg:string){
    	this.alerts = [];
        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: successMsg
            }
        );
    }
    
    private failedAlert(errorMsg:string){
    	this.alerts = [];
        this.alerts.push(
            {
                id: 4,
                type: 'danger',
                message: errorMsg
            }
        );
    }   
    
}

