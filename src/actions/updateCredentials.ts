import { FieldInfo } from "../common/entities/fieldInfo";
import { actionDefs } from "../common/const/actions";
import { BaseAction } from "../common/redux/actionBase";
import { LoginCredentials } from "../api/model";

export const updateCredentials = (login : LoginCredentials) : BaseAction => (
{
  type: actionDefs.UPDATE_LOGIN_CREDENTIALS,
  payload: login,
});
