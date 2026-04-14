import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const UserPlain = t.Object(
  {
    id: t.String(),
    name: t.String(),
    email: t.String(),
    passwordHash: t.String(),
    role: t.Union([t.Literal("USER"), t.Literal("SERVICE_PROVIDER")], {
      additionalProperties: false,
    }),
    createdAt: t.Date(),
  },
  { additionalProperties: false },
);

export const UserRelations = t.Object(
  {
    services: t.Array(
      t.Object(
        {
          id: t.String(),
          name: t.String(),
          type: t.Union(
            [
              t.Literal("MEDICAL"),
              t.Literal("HOUSE_HELP"),
              t.Literal("BEAUTY"),
              t.Literal("FITNESS"),
              t.Literal("EDUCATION"),
              t.Literal("OTHER"),
            ],
            { additionalProperties: false },
          ),
          durationMinutes: t.Integer(),
          createdAt: t.Date(),
          userId: t.String(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
    appointments: t.Array(
      t.Object(
        {
          id: t.String(),
          userId: t.String(),
          ServiceId: t.String(),
          date: t.String(),
          startTime: t.String(),
          endTime: t.String(),
          slotId: t.String(),
          status: t.Union([t.Literal("BOOKED"), t.Literal("CANCELLED")], {
            additionalProperties: false,
          }),
          createdAt: t.Date(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const UserPlainInputCreate = t.Object(
  {
    name: t.String(),
    email: t.String(),
    passwordHash: t.String(),
    role: t.Union([t.Literal("USER"), t.Literal("SERVICE_PROVIDER")], {
      additionalProperties: false,
    }),
  },
  { additionalProperties: false },
);

export const UserPlainInputUpdate = t.Object(
  {
    name: t.Optional(t.String()),
    email: t.Optional(t.String()),
    passwordHash: t.Optional(t.String()),
    role: t.Optional(
      t.Union([t.Literal("USER"), t.Literal("SERVICE_PROVIDER")], {
        additionalProperties: false,
      }),
    ),
  },
  { additionalProperties: false },
);

export const UserRelationsInputCreate = t.Object(
  {
    services: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
    appointments: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const UserRelationsInputUpdate = t.Partial(
  t.Object(
    {
      services: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
      appointments: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
    },
    { additionalProperties: false },
  ),
);

export const UserWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          name: t.String(),
          email: t.String(),
          passwordHash: t.String(),
          role: t.Union([t.Literal("USER"), t.Literal("SERVICE_PROVIDER")], {
            additionalProperties: false,
          }),
          createdAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "User" },
  ),
);

export const UserWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String(), email: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [t.Object({ id: t.String() }), t.Object({ email: t.String() })],
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object({
            AND: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            NOT: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            OR: t.Array(Self, { additionalProperties: false }),
          }),
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object(
            {
              id: t.String(),
              name: t.String(),
              email: t.String(),
              passwordHash: t.String(),
              role: t.Union(
                [t.Literal("USER"), t.Literal("SERVICE_PROVIDER")],
                { additionalProperties: false },
              ),
              createdAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "User" },
);

export const UserSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      email: t.Boolean(),
      passwordHash: t.Boolean(),
      role: t.Boolean(),
      createdAt: t.Boolean(),
      services: t.Boolean(),
      appointments: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const UserInclude = t.Partial(
  t.Object(
    {
      role: t.Boolean(),
      services: t.Boolean(),
      appointments: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const UserOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      passwordHash: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const User = t.Composite([UserPlain, UserRelations], {
  additionalProperties: false,
});

export const UserInputCreate = t.Composite(
  [UserPlainInputCreate, UserRelationsInputCreate],
  { additionalProperties: false },
);

export const UserInputUpdate = t.Composite(
  [UserPlainInputUpdate, UserRelationsInputUpdate],
  { additionalProperties: false },
);
