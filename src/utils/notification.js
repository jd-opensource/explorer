import Message from 'flarej/lib/components/antd/message';
const Notification = {};
export default Notification;

export function createNotification(notification, isMobile) {
  Notification.success = ({ title, description, duration, onClose, mask }) => {
    if (!isMobile) {
      return notification.success({ title, description, duration: duration == null ? 2 : duration });
    } else {
      return notification[0].success(description, duration == null ? 2 : duration, onClose, mask);
    }
  };

  Notification.error = ({ message="提示", description, duration, onClose, mask, actions }) => {
    if (!isMobile) {
      return notification.error({ message, description, duration: duration == null ? 10 : duration });

    } else {
      return notification[1].alert(title, description, actions);
    }
  };
}