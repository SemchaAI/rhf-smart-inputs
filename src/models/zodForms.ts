import type { userBaseSchema } from "@/utils/config/zod";

export enum ActionType {
  Create = "Create",
  Update = "Update",
}

export interface IUserFormProps {
  type: ActionType.Create | ActionType.Update;
  formData?: Partial<userBaseSchema>;
  onClose?: () => void;
}
