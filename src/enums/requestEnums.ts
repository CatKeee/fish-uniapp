export enum ContentTypeEnum {
  // json
  JSON = "application/json;charset=UTF-8",
  // form-data   上传资源（图片，视频）
  FORM_DATA = "multipart/form-data;charset=UTF-8",
}

export enum RequestCodeEnum {
  SUCCESS = 0, //成功
  FAILED = 1, // 失败
  TOKEN_INVALID = 2, // TOKEN参数无效
}

export enum StatusCode {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  INTERNAL_SERVER_ERROR = 500,
}
