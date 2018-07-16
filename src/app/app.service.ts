import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Injectable()
export class AppService {
    public _isLoading: boolean;
    private _contentTitle = 'Content Title';

    // contentTitle = 'Content Title';
    contentTitleColor = 'primary';

    get contentTitle(): string{
        return this._contentTitle;
    }
    set contentTitle(value: string) {
        this._contentTitle = value;

        this.titleService.setTitle( this._contentTitle );
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    beginLoading(delay?: number, timeout?: number): void {
        if (delay) {
            setTimeout(() => {
                this.setLoading(timeout)
            }, delay)
        } else {
            this.setLoading(timeout);
        }
    }

    private setLoading(timeout?: number): void {
        this._isLoading = true;

        if ( timeout ) {
            setTimeout(() => this.endLoading(), timeout);
        }
    }

    endLoading(): void {
        this._isLoading = false;
    }

    simulateLoad() {
        this.beginLoading(1000);

        setTimeout(() => {
            this.endLoading();
        }, 5000)
    }

    constructor(private titleService: Title) { }
}
