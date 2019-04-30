let ResultCode = {

  OK: "OK",
  BAD_REQUEST: "BAD_REQUEST",
  CAPTCHA_ERROR: "CAPTCHA_ERROR",
  NEED_CAPTCHA: "NEED_CAPTCHA",
  NEED_SHARE_CODE: "NEED_SHARE_CODE",
  SHARE_CODE_ERROR: "SHARE_CODE_ERROR",
  USERNAME_PASSWORD_ERROR: "USERNAME_PASSWORD_ERROR",
  REQUIRE_GENDER: "REQUIRE_GENDER",
  REQUIRE_PHONE: "REQUIRE_PHONE",
  PARAMS_ERROR: "PARAMS_ERROR",
  LOGIN: "LOGIN",
  UNAUTHORIZED: "UNAUTHORIZED",
  NOT_FOUND: "NOT_FOUND",
  RANGE_NOT_SATISFIABLE: "RANGE_NOT_SATISFIABLE",
  NOT_INSTALLED: "NOT_INSTALLED",
  UNKNOWN: "UNKNOWN"

}

let ResultCodeMap = {

  OK: {
    name: "成功",
    value: "OK"
  },
  BAD_REQUEST: {
    name: "请求不合法",
    value: "BAD_REQUEST"
  },
  CAPTCHA_ERROR: {
    name: "验证码错误",
    value: "CAPTCHA_ERROR"
  },
  NEED_CAPTCHA: {
    name: "验证码必填",
    value: "NEED_CAPTCHA"
  },
  NEED_SHARE_CODE: {
    name: "提取码必填",
    value: "NEED_SHARE_CODE"
  },
  SHARE_CODE_ERROR: {
    name: "提取码错误",
    value: "SHARE_CODE_ERROR"
  },
  USERNAME_PASSWORD_ERROR: {
    name: "用户名或密码错误",
    value: "USERNAME_PASSWORD_ERROR"
  },
  REQUIRE_GENDER: {
    name: "必须首先填写性别",
    value: "REQUIRE_GENDER"
  },
  REQUIRE_PHONE: {
    name: "必须首先认证手机",
    value: "REQUIRE_PHONE"
  },
  PARAMS_ERROR: {
    name: "请求参数错误",
    value: "PARAMS_ERROR"
  },
  LOGIN: {
    name: "未登录，禁止访问",
    value: "LOGIN"
  },
  UNAUTHORIZED: {
    name: "没有权限，禁止访问",
    value: "UNAUTHORIZED"
  },
  NOT_FOUND: {
    name: "内容不存在",
    value: "NOT_FOUND"
  },
  RANGE_NOT_SATISFIABLE: {
    name: "范围错误",
    value: "RANGE_NOT_SATISFIABLE"
  },
  NOT_INSTALLED: {
    name: "尚未安装",
    value: "NOT_INSTALLED"
  },

  UNKNOWN: {
    name: "服务器未知错误",
    value: "UNKNOWN"
  }


}

let ResultCodeList = [];
for (let key in ResultCodeMap) {
  if (ResultCodeMap.hasOwnProperty(key)) {
    ResultCodeList.push(ResultCodeMap[key]);
  }
}

export {ResultCode, ResultCodeMap, ResultCodeList};
