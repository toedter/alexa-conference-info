import {RequestHandler} from 'ask-sdk-core';

export class HelpIntentHandler implements RequestHandler {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    }

    handle(handlerInput) {
        const speechText = 'You can ask \'Tell me about JAX\'!';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Help', speechText)
            .getResponse();
    }
}
