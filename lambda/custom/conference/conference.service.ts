import {Conference} from './conference';

export class ConferenceService {
    private conferences = new Array<Conference>();

    constructor() {
        this.conferences.push(new Conference('JAX', '05.11.2018', '09.11.2018', 'Munich'));
        this.conferences.push(new Conference('OOP', '21.01.2019', '25.01.2019', 'Munich'));
    }

    public getConference(name: string) {
        for (let conference of this.conferences) {
            if (conference.name.toLowerCase() === name.toLowerCase()) {
                return conference;
            }
        }
    }
}