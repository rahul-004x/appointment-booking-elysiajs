import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ServicePlain = t.Object(
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
);

export const ServiceRelations = t.Object(
  {
    providerId: t.Object(
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
    ),
    availabilities: t.Array(
      t.Object(
        {
          id: t.String(),
          dayOfWeek: t.Integer(),
          startTime: t.String(),
          endTime: t.String(),
          serviceId: t.String(),
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

export const ServicePlainInputCreate = t.Object(
  {
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
  },
  { additionalProperties: false },
);

export const ServicePlainInputUpdate = t.Object(
  {
    name: t.Optional(t.String()),
    type: t.Optional(
      t.Union(
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
    ),
    durationMinutes: t.Optional(t.Integer()),
  },
  { additionalProperties: false },
);

export const ServiceRelationsInputCreate = t.Object(
  {
    providerId: t.Object(
      {
        connect: t.Object(
          {
            id: t.String({ additionalProperties: false }),
          },
          { additionalProperties: false },
        ),
      },
      { additionalProperties: false },
    ),
    availabilities: t.Optional(
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

export const ServiceRelationsInputUpdate = t.Partial(
  t.Object(
    {
      providerId: t.Object(
        {
          connect: t.Object(
            {
              id: t.String({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
      availabilities: t.Partial(
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

export const ServiceWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
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
    { $id: "Service" },
  ),
);

export const ServiceWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ id: t.String() }, { additionalProperties: false }),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ id: t.String() })], {
          additionalProperties: false,
        }),
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
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Service" },
);

export const ServiceSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      type: t.Boolean(),
      providerId: t.Boolean(),
      durationMinutes: t.Boolean(),
      createdAt: t.Boolean(),
      userId: t.Boolean(),
      availabilities: t.Boolean(),
      appointments: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const ServiceInclude = t.Partial(
  t.Object(
    {
      type: t.Boolean(),
      providerId: t.Boolean(),
      availabilities: t.Boolean(),
      appointments: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const ServiceOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      durationMinutes: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      userId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Service = t.Composite([ServicePlain, ServiceRelations], {
  additionalProperties: false,
});

export const ServiceInputCreate = t.Composite(
  [ServicePlainInputCreate, ServiceRelationsInputCreate],
  { additionalProperties: false },
);

export const ServiceInputUpdate = t.Composite(
  [ServicePlainInputUpdate, ServiceRelationsInputUpdate],
  { additionalProperties: false },
);
