/**
 * This is the outbound to PSTN voice handler that routes the call from the Customer to a PSTN destination.
 */
exports.handler = function (context, event, callback) {

    const voiceResponse = new Twilio.twiml.VoiceResponse();
    const dial = voiceResponse.dial({ callerId: event.From });
    dial.number(event.To);

    return callback(null, voiceResponse);
};
