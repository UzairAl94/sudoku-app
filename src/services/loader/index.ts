import React from "react";
import LoaderComponent from "./component/LoaderComponent";
import { ILoaderService } from "./loader.interface";

class LoaderService implements ILoaderService {
    on = (event: string, callback: Function) => {
        document.addEventListener(event, (e: any) => callback(e.detail));
    }

    show = (component: React.FunctionComponent<any> = LoaderComponent, props = {}) => {
        document.dispatchEvent(new CustomEvent('showLoader', { detail: { component, props } }));
    }

    hide = (component: React.FunctionComponent<any> = LoaderComponent) => {
        document.dispatchEvent(new CustomEvent('hideLoader', { detail: { component } }));
    }
}

export default new LoaderService();