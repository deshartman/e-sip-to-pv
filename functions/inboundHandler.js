/**
 * This is the inbound from PSTN voice handler that routes the call to the Customer SIP Trunk domain (to PBX)
 */
exports.handler = async function (context, event, callback) {

    const voiceResponse = new Twilio.twiml.VoiceResponse();

    voiceResponse.dial().sip(event.To + '@' + context.SIP_DOMAIN);
    return callback(null, voiceResponse);
};



