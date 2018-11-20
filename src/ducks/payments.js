import { connect as connectMQTT } from 'mqtt';

const client = connectMQTT('ws://localhost:9001/mqtt');

export const SUBMIT_PAYMENT = 'payments/SUBMIT_PAYMENT';
export const PAYMENT_COMPLETE = 'payments/PAYMENT_COMPLETE';
export const SENT_MQTT = 'payments/SENT_MQTT';

const initialState = {
  processing: false,
  complete: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_PAYMENT:
      client.publish('dev/test', JSON.stringify(...state));

      return { ...state, processing: true, complete: false };

    case PAYMENT_COMPLETE:
      return { ...state, processing: false, complete: true };

    case SENT_MQTT:
      return { ...state, processing: false, complete: true };

    default:
      return { ...state };
  }
};
