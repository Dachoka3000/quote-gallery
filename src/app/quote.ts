export class Quote {
    showDetails: boolean;
    constructor(public name:string, public author:string, public quote:string){
        this.showDetails= false;
    }
}
