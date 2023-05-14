import { LightningElement, api } from 'lwc';

export default class SearchFlight extends LightningElement
{

    @api headerName;


    connectedCallback()
    {
        console.log(this.headerName);
    }




}