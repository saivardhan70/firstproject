import { Page } from '@playwright/test';
import { LoginPageObjects } from '../PageobjectRepository/LoginPageObjects';


export class LoginPage {
    private page : Page;
    private locators = LoginPageObjects;

    constructor(page :Page){
        this.page = page;
    }

    async login(userData:any){
        await this.page.fill(this.locators.username, userData.username);
        await this.page.fill(this.locators.password, userData.password);
    }

    async loginButton(){
        await this.page.click(this.locators.loginButton);
    }

    async invoicesTab(){
        await this.page.click(this.locators.invoicesTab);
    }
}