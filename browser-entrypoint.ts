import * as comet from './index'

declare global {
    interface Window {
        comet: typeof comet;
    }
}


window.comet = comet;
