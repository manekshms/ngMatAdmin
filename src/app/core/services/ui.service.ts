import { Subject } from 'rxjs';

export class UIService {
    private loader:Subject<boolean> = new Subject();

    showLoader(){
        this.loader.next(true);
    }

    hideLoader(){
       this.loader.next(false); 
    }

    getLoader(){
        return this.loader;
    }
}