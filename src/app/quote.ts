export class Quote {
    showDetails: boolean;
    constructor(public name:string, public author:string, public quotecontent:string){
        this.showDetails= false;
    }
}
