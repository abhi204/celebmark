import { ACCESS_TOKEN_EXPIRE, REFRESH_TOKEN_EXPIRE } from "../_consts/auth";

export function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
  }
  
export function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }
  
export function deleteCookie(cname) {
    setCookie(cname,'',0);
  } 

export function storeTokens(access, refresh){
  setCookie('access', access, ACCESS_TOKEN_EXPIRE);
  setCookie('refresh', refresh, REFRESH_TOKEN_EXPIRE);
}