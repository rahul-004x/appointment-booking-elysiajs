import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const Type = t.Union(
  [
    t.Literal("MEDICAL"),
    t.Literal("HOUSE_HELP"),
    t.Literal("BEAUTY"),
    t.Literal("FITNESS"),
    t.Literal("EDUCATION"),
    t.Literal("OTHER"),
  ],
  { additionalProperties: false },
);
