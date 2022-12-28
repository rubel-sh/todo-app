import moment from "moment";

export const useRelativeTime = (previousDate) => {
  return moment(previousDate).fromNow();
};
