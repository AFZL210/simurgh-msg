import { TwilioConfig } from "./types";
import twilio, { Twilio } from "twilio";

class SmsService {
  twilioConfig: TwilioConfig;
  messanger: Twilio;

  constructor(twilioConfig: TwilioConfig) {
    this.twilioConfig = twilioConfig;

    this.messanger = twilio(this.twilioConfig.sid, this.twilioConfig.authToken);
  }

  async sendSms(phoneNumber: string, message: string) {
    try {
      await this.messanger.messages.create({
        from: this.twilioConfig.twilioNumber,
        to: phoneNumber,
        body: message,
      });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

export { SmsService };
