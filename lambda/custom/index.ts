import * as Alexa from 'ask-sdk-core';
import {CancelAndStopIntentHandler} from './handlers/cancel.and.stop.intent.handler';
import {ConferenceIntentHandler} from './handlers/conference.intent.handler';
import {ConferenceInfoErrorHandler} from './handlers/error.handler';
import {HelpIntentHandler} from './handlers/help.intent.handler';
import {LaunchRequestHandler} from './handlers/launch.request.handler';
import {SessionEndedRequestHandler} from './handlers/session.ended.request.handler';

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
    .addRequestHandlers(
        new LaunchRequestHandler(),
        new ConferenceIntentHandler(),
        new HelpIntentHandler(),
        new CancelAndStopIntentHandler(),
        new SessionEndedRequestHandler(),
    )
    .addErrorHandlers(new ConferenceInfoErrorHandler())
    .lambda();
