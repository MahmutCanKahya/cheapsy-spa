export default class AlertifyService {
    constructor() {}
  
    success(message) {
      alertify.success(message);
    }
    warning(message) {
      alertify.warning(message);
    }
    error(message) {
      alertify.error(message);
    }
}