export const REGEX = {
  firstUpperAllLethes: /^[A-Z][a-zA-Z]+$/,
  everythingExceptSpace: /^[^\s]+$/,
  youtube:
    /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))\/((?:[\w\-]+\?v=|embed\/|live\/|v\/)?)([\w\-]+)(\S+)?$/,
  gameName: /^[A-Z][\w!@#$%^&-:®*() ]{0,50}$/,
};
