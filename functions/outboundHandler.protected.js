/**
 * This is the outbound to PSTN voice handler that routes the call from the Customer to a PSTN destination.
 */
exports.handler = function (context, event, callback) {

    // Convert SIP URI to +E.614
    let to = event.To.match(/^sip:((\+)?[0-9]+)@(.*)/)[1];
    let from = event.From.match(/^sip:((\+)?[0-9]+)@(.*)/)[1];

    const voiceResponse = new Twilio.twiml.VoiceResponse();
    const dial = voiceResponse.dial({ callerId: from });
    dial.number(to);

    return callback(null, voiceResponse);
};
