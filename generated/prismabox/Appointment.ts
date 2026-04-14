import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const AppointmentPlain = t.Object(
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
);

export const AppointmentRelations = t.Object(
  {
    user: t.Object(
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
    service: t.Object(
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
  },
  { additionalProperties: false },
);

export const AppointmentPlainInputCreate = t.Object(
  {
    date: t.String(),
    startTime: t.String(),
    endTime: t.String(),
    status: t.Union([t.Literal("BOOKED"), t.Literal("CANCELLED")], {
      additionalProperties: false,
    }),
  },
  { additionalProperties: false },
);

export const AppointmentPlainInputUpdate = t.Object(
  {
    date: t.Optional(t.String()),
    startTime: t.Optional(t.String()),
    endTime: t.Optional(t.String()),
    status: t.Optional(
      t.Union([t.Literal("BOOKED"), t.Literal("CANCELLED")], {
        additionalProperties: false,
      }),
    ),
  },
  { additionalProperties: false },
);

export const AppointmentRelationsInputCreate = t.Object(
  {
    user: t.Object(
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
    service: t.Object(
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
  },
  { additionalProperties: false },
);

export const AppointmentRelationsInputUpdate = t.Partial(
  t.Object(
    {
      user: t.Object(
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
      service: t.Object(
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
    },
    { additionalProperties: false },
  ),
);

export const AppointmentWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
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
    { $id: "Appointment" },
  ),
);

export const AppointmentWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String(), slotId: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [t.Object({ id: t.String() }), t.Object({ slotId: t.String() })],
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
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Appointment" },
);

export const AppointmentSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      userId: t.Boolean(),
      user: t.Boolean(),
      ServiceId: t.Boolean(),
      service: t.Boolean(),
      date: t.Boolean(),
      startTime: t.Boolean(),
      endTime: t.Boolean(),
      slotId: t.Boolean(),
      status: t.Boolean(),
      createdAt: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const AppointmentInclude = t.Partial(
  t.Object(
    {
      user: t.Boolean(),
      service: t.Boolean(),
      status: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const AppointmentOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      userId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ServiceId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      date: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      startTime: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      endTime: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      slotId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Appointment = t.Composite(
  [AppointmentPlain, AppointmentRelations],
  { additionalProperties: false },
);

export const AppointmentInputCreate = t.Composite(
  [AppointmentPlainInputCreate, AppointmentRelationsInputCreate],
  { additionalProperties: false },
);

export const AppointmentInputUpdate = t.Composite(
  [AppointmentPlainInputUpdate, AppointmentRelationsInputUpdate],
  { additionalProperties: false },
);
