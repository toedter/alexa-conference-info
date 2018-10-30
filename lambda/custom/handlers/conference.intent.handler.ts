import {RequestHandler} from 'ask-sdk-core';
import {ConferenceService} from '../conference/conference.service';

export class ConferenceIntentHandler implements RequestHandler {
    private comferenceService: ConferenceService;

    constructor() {
        this.comferenceService = new ConferenceService();
    }

    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ConferenceIntent';
    }

    handle(handlerInput) {
        const conferenceName = handlerInput.requestEnvelope.request.intent.slots.Name.value;
        console.log('conf name: ' + conferenceName);
        const conference = this.comferenceService.getConference(conferenceName);
        console.log('conf: ' + conference);

        let speechText = '';
        if (conference) {
            speechText = 'The next ' + conference.name + ' is from ' + conference.from + ' to ' + conference.to + ' in ' + conference.location;
        } else {
            speechText = 'Sorry, I don\'t know a conference with name ' + conferenceName;
        }

        console.log('speechtext: ' + speechText);

        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('conference info', speechText)
            .getResponse();
    }
}
