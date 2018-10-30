import {RequestHandler} from 'ask-sdk-core';

export class LaunchRequestHandler implements RequestHandler {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    }

    handle(handlerInput) {
        const speechText = 'Welcome to Kai\'s conference info, you can ask \'When is the next JAX conference?\'';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    }
}
