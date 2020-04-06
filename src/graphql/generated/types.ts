import * as extensions from "../extensions";
import {
  TypeData,
  FieldsType,
  FieldsTypeArg,
  EnumType,
  ScalarType
} from "gqless";

type Extension<TName extends string> = TName extends keyof typeof extensions
  ? typeof extensions[TName]
  : any;

/**
 * @name Query
 * @type OBJECT
 */
type t_Query = FieldsType<
  {
    __typename: t_String<"Query">;

    /**
     * fetch data from the table: "users"
     */
    users: FieldsTypeArg<
      {
        distinct_on?: users_select_column[] | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
        order_by?: users_order_by[] | undefined | null;
        where?: users_bool_exp | undefined | null;
      },
      t_users[]
    >;

    /**
     * fetch aggregated fields from the table: "users"
     */
    users_aggregate: FieldsTypeArg<
      {
        distinct_on?: users_select_column[] | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
        order_by?: users_order_by[] | undefined | null;
        where?: users_bool_exp | undefined | null;
      },
      t_users_aggregate
    >;

    /**
     * fetch data from the table: "users" using primary key columns
     */
    users_by_pk?: FieldsTypeArg<{ id: any }, t_users | undefined | null>;
    capsules?: FieldsTypeArg<
      {
        find?: CapsulesFind | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
        order?: string | undefined | null;
        sort?: string | undefined | null;
      },
      (t_Capsule | undefined | null)[] | undefined | null
    >;
    capsulesPast?: FieldsTypeArg<
      {
        find?: CapsulesFind | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
        order?: string | undefined | null;
        sort?: string | undefined | null;
      },
      (t_Capsule | undefined | null)[] | undefined | null
    >;
    capsulesUpcoming?: FieldsTypeArg<
      {
        find?: CapsulesFind | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
        order?: string | undefined | null;
        sort?: string | undefined | null;
      },
      (t_Capsule | undefined | null)[] | undefined | null
    >;
    capsule?: FieldsTypeArg<{ id: string }, t_Capsule | undefined | null>;
    company?: t_Info | undefined | null;
    cores?: FieldsTypeArg<
      {
        find?: CoresFind | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
        order?: string | undefined | null;
        sort?: string | undefined | null;
      },
      (t_Core | undefined | null)[] | undefined | null
    >;
    coresPast?: FieldsTypeArg<
      {
        find?: CoresFind | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
        order?: string | undefined | null;
        sort?: string | undefined | null;
      },
      (t_Core | undefined | null)[] | undefined | null
    >;
    coresUpcoming?: FieldsTypeArg<
      {
        find?: CoresFind | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
        order?: string | undefined | null;
        sort?: string | undefined | null;
      },
      (t_Core | undefined | null)[] | undefined | null
    >;
    core?: FieldsTypeArg<{ id: string }, t_Core | undefined | null>;
    dragons?: FieldsTypeArg<
      { limit?: number | undefined | null; offset?: number | undefined | null },
      (t_Dragon | undefined | null)[] | undefined | null
    >;
    dragon?: FieldsTypeArg<{ id: string }, t_Dragon | undefined | null>;
    histories?: FieldsTypeArg<
      {
        find?: HistoryFind | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
        order?: string | undefined | null;
        sort?: string | undefined | null;
      },
      (t_History | undefined | null)[] | undefined | null
    >;
    historiesResult?: FieldsTypeArg<
      {
        find?: HistoryFind | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
        order?: string | undefined | null;
        sort?: string | undefined | null;
      },
      t_HistoriesResult | undefined | null
    >;
    history?: FieldsTypeArg<{ id: string }, t_History | undefined | null>;
    landpads?: FieldsTypeArg<
      { limit?: number | undefined | null; offset?: number | undefined | null },
      (t_Landpad | undefined | null)[] | undefined | null
    >;
    landpad?: FieldsTypeArg<{ id: string }, t_Landpad | undefined | null>;
    launches?: FieldsTypeArg<
      {
        find?: LaunchFind | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
        order?: string | undefined | null;
        sort?: string | undefined | null;
      },
      (t_Launch | undefined | null)[] | undefined | null
    >;
    launchesPast?: FieldsTypeArg<
      {
        find?: LaunchFind | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
        order?: string | undefined | null;
        sort?: string | undefined | null;
      },
      (t_Launch | undefined | null)[] | undefined | null
    >;
    launchesPastResult?: FieldsTypeArg<
      {
        find?: LaunchFind | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
        order?: string | undefined | null;
        sort?: string | undefined | null;
      },
      t_LaunchesPastResult | undefined | null
    >;
    launchesUpcoming?: FieldsTypeArg<
      {
        find?: LaunchFind | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
        order?: string | undefined | null;
        sort?: string | undefined | null;
      },
      (t_Launch | undefined | null)[] | undefined | null
    >;
    launch?: FieldsTypeArg<{ id: string }, t_Launch | undefined | null>;
    launchLatest?: FieldsTypeArg<
      { offset?: number | undefined | null },
      t_Launch | undefined | null
    >;
    launchNext?: FieldsTypeArg<
      { offset?: number | undefined | null },
      t_Launch | undefined | null
    >;
    launchpads?: FieldsTypeArg<
      { limit?: number | undefined | null; offset?: number | undefined | null },
      (t_Launchpad | undefined | null)[] | undefined | null
    >;
    launchpad?: FieldsTypeArg<{ id: string }, t_Launchpad | undefined | null>;
    missions?: FieldsTypeArg<
      {
        find?: MissionsFind | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
      },
      (t_Mission | undefined | null)[] | undefined | null
    >;
    missionsResult?: FieldsTypeArg<
      {
        find?: MissionsFind | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
      },
      t_MissionResult | undefined | null
    >;
    mission?: FieldsTypeArg<{ id: string }, t_Mission | undefined | null>;
    payloads?: FieldsTypeArg<
      {
        find?: PayloadsFind | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
        order?: string | undefined | null;
        sort?: string | undefined | null;
      },
      (t_Payload | undefined | null)[] | undefined | null
    >;
    payload?: FieldsTypeArg<{ id: string }, t_Payload | undefined | null>;
    roadster?: t_Roadster | undefined | null;
    rockets?: FieldsTypeArg<
      { limit?: number | undefined | null; offset?: number | undefined | null },
      (t_Rocket | undefined | null)[] | undefined | null
    >;
    rocketsResult?: FieldsTypeArg<
      { limit?: number | undefined | null; offset?: number | undefined | null },
      t_RocketsResult | undefined | null
    >;
    rocket?: FieldsTypeArg<{ id: string }, t_Rocket | undefined | null>;
    ships?: FieldsTypeArg<
      {
        find?: ShipsFind | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
        order?: string | undefined | null;
        sort?: string | undefined | null;
      },
      (t_Ship | undefined | null)[] | undefined | null
    >;
    shipsResult?: FieldsTypeArg<
      {
        find?: ShipsFind | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
        order?: string | undefined | null;
        sort?: string | undefined | null;
      },
      t_ShipsResult | undefined | null
    >;
    ship?: FieldsTypeArg<{ id: string }, t_Ship | undefined | null>;
  },
  Extension<"Query">
>;

/**
 * @name users_select_column
 * @type ENUM
 */
type t_users_select_column = EnumType<
  "id" | "name" | "rocket" | "timestamp" | "twitter"
>;

/**
 * @name Int
 * @type SCALAR
 */
type t_Int<T extends number = number> = ScalarType<T, Extension<"Int">>;

/**
 * @name users_order_by
 * @type INPUT_OBJECT
 */
export type users_order_by = {
  id?: order_by | undefined | null;
  name?: order_by | undefined | null;
  rocket?: order_by | undefined | null;
  timestamp?: order_by | undefined | null;
  twitter?: order_by | undefined | null;
};

/**
 * @name order_by
 * @type ENUM
 */
type t_order_by = EnumType<
  | "asc"
  | "asc_nulls_first"
  | "asc_nulls_last"
  | "desc"
  | "desc_nulls_first"
  | "desc_nulls_last"
>;

/**
 * @name users_bool_exp
 * @type INPUT_OBJECT
 */
export type users_bool_exp = {
  _and?: (users_bool_exp | undefined | null)[] | undefined | null;
  _not?: users_bool_exp | undefined | null;
  _or?: (users_bool_exp | undefined | null)[] | undefined | null;
  id?: uuid_comparison_exp | undefined | null;
  name?: String_comparison_exp | undefined | null;
  rocket?: String_comparison_exp | undefined | null;
  timestamp?: timestamptz_comparison_exp | undefined | null;
  twitter?: String_comparison_exp | undefined | null;
};

/**
 * @name uuid_comparison_exp
 * @type INPUT_OBJECT
 */
export type uuid_comparison_exp = {
  _eq?: any | undefined | null;
  _gt?: any | undefined | null;
  _gte?: any | undefined | null;
  _in?: any[] | undefined | null;
  _is_null?: boolean | undefined | null;
  _lt?: any | undefined | null;
  _lte?: any | undefined | null;
  _neq?: any | undefined | null;
  _nin?: any[] | undefined | null;
};

/**
 * @name uuid
 * @type SCALAR
 */
type t_uuid<T extends any = any> = ScalarType<T, Extension<"uuid">>;

/**
 * @name Boolean
 * @type SCALAR
 */
type t_Boolean<T extends boolean = boolean> = ScalarType<
  T,
  Extension<"Boolean">
>;

/**
 * @name String_comparison_exp
 * @type INPUT_OBJECT
 */
export type String_comparison_exp = {
  _eq?: string | undefined | null;
  _gt?: string | undefined | null;
  _gte?: string | undefined | null;
  _ilike?: string | undefined | null;
  _in?: string[] | undefined | null;
  _is_null?: boolean | undefined | null;
  _like?: string | undefined | null;
  _lt?: string | undefined | null;
  _lte?: string | undefined | null;
  _neq?: string | undefined | null;
  _nilike?: string | undefined | null;
  _nin?: string[] | undefined | null;
  _nlike?: string | undefined | null;
  _nsimilar?: string | undefined | null;
  _similar?: string | undefined | null;
};

/**
 * @name String
 * @type SCALAR
 */
type t_String<T extends string = string> = ScalarType<T, Extension<"String">>;

/**
 * @name timestamptz_comparison_exp
 * @type INPUT_OBJECT
 */
export type timestamptz_comparison_exp = {
  _eq?: any | undefined | null;
  _gt?: any | undefined | null;
  _gte?: any | undefined | null;
  _in?: any[] | undefined | null;
  _is_null?: boolean | undefined | null;
  _lt?: any | undefined | null;
  _lte?: any | undefined | null;
  _neq?: any | undefined | null;
  _nin?: any[] | undefined | null;
};

/**
 * @name timestamptz
 * @type SCALAR
 */
type t_timestamptz<T extends any = any> = ScalarType<
  T,
  Extension<"timestamptz">
>;

/**
 * @name users
 * @type OBJECT
 */
type t_users = FieldsType<
  {
    __typename: t_String<"users">;
    id: t_uuid;
    name?: t_String | undefined | null;
    rocket?: t_String | undefined | null;
    timestamp: t_timestamptz;
    twitter?: t_String | undefined | null;
  },
  Extension<"users">
>;

/**
 * @name users_aggregate
 * @type OBJECT
 */
type t_users_aggregate = FieldsType<
  {
    __typename: t_String<"users_aggregate">;
    aggregate?: t_users_aggregate_fields | undefined | null;
    nodes: t_users[];
  },
  Extension<"users_aggregate">
>;

/**
 * @name users_aggregate_fields
 * @type OBJECT
 */
type t_users_aggregate_fields = FieldsType<
  {
    __typename: t_String<"users_aggregate_fields">;
    count?: FieldsTypeArg<
      {
        columns?: users_select_column[] | undefined | null;
        distinct?: boolean | undefined | null;
      },
      t_Int | undefined | null
    >;
    max?: t_users_max_fields | undefined | null;
    min?: t_users_min_fields | undefined | null;
  },
  Extension<"users_aggregate_fields">
>;

/**
 * @name users_max_fields
 * @type OBJECT
 */
type t_users_max_fields = FieldsType<
  {
    __typename: t_String<"users_max_fields">;
    name?: t_String | undefined | null;
    rocket?: t_String | undefined | null;
    timestamp?: t_timestamptz | undefined | null;
    twitter?: t_String | undefined | null;
  },
  Extension<"users_max_fields">
>;

/**
 * @name users_min_fields
 * @type OBJECT
 */
type t_users_min_fields = FieldsType<
  {
    __typename: t_String<"users_min_fields">;
    name?: t_String | undefined | null;
    rocket?: t_String | undefined | null;
    timestamp?: t_timestamptz | undefined | null;
    twitter?: t_String | undefined | null;
  },
  Extension<"users_min_fields">
>;

/**
 * @name CapsulesFind
 * @type INPUT_OBJECT
 */
export type CapsulesFind = {
  id?: string | undefined | null;
  landings?: number | undefined | null;
  mission?: string | undefined | null;
  original_launch?: string | undefined | null;
  reuse_count?: number | undefined | null;
  status?: string | undefined | null;
  type?: string | undefined | null;
};

/**
 * @name ID
 * @type SCALAR
 */
type t_ID<T extends string = string> = ScalarType<T, Extension<"ID">>;

/**
 * @name Date
 * @type SCALAR
 */
type t_Date<T extends string = string> = ScalarType<T, Extension<"Date">>;

/**
 * @name Capsule
 * @type OBJECT
 */
type t_Capsule = FieldsType<
  {
    __typename: t_String<"Capsule">;
    id?: t_ID | undefined | null;
    landings?: t_Int | undefined | null;
    missions?: (t_CapsuleMission | undefined | null)[] | undefined | null;
    original_launch?: t_Date | undefined | null;
    reuse_count?: t_Int | undefined | null;
    status?: t_String | undefined | null;
    type?: t_String | undefined | null;
    dragon?: t_Dragon | undefined | null;
  },
  Extension<"Capsule">
>;

/**
 * @name CapsuleMission
 * @type OBJECT
 */
type t_CapsuleMission = FieldsType<
  {
    __typename: t_String<"CapsuleMission">;
    flight?: t_Int | undefined | null;
    name?: t_String | undefined | null;
  },
  Extension<"CapsuleMission">
>;

/**
 * @name Dragon
 * @type OBJECT
 */
type t_Dragon = FieldsType<
  {
    __typename: t_String<"Dragon">;
    active?: t_Boolean | undefined | null;
    crew_capacity?: t_Int | undefined | null;
    description?: t_String | undefined | null;
    diameter?: t_Distance | undefined | null;
    dry_mass_kg?: t_Int | undefined | null;
    dry_mass_lb?: t_Int | undefined | null;
    first_flight?: t_String | undefined | null;
    heat_shield?: t_DragonHeatShield | undefined | null;
    height_w_trunk?: t_Distance | undefined | null;
    id?: t_ID | undefined | null;
    launch_payload_mass?: t_Mass | undefined | null;
    launch_payload_vol?: t_Volume | undefined | null;
    name?: t_String | undefined | null;
    orbit_duration_yr?: t_Int | undefined | null;
    pressurized_capsule?: t_DragonPressurizedCapsule | undefined | null;
    return_payload_mass?: t_Mass | undefined | null;
    return_payload_vol?: t_Volume | undefined | null;
    sidewall_angle_deg?: t_Float | undefined | null;
    thrusters?: (t_DragonThrust | undefined | null)[] | undefined | null;
    trunk?: t_DragonTrunk | undefined | null;
    type?: t_String | undefined | null;
    wikipedia?: t_String | undefined | null;
  },
  Extension<"Dragon">
>;

/**
 * @name Distance
 * @type OBJECT
 */
type t_Distance = FieldsType<
  {
    __typename: t_String<"Distance">;
    feet?: t_Float | undefined | null;
    meters?: t_Float | undefined | null;
  },
  Extension<"Distance">
>;

/**
 * @name Float
 * @type SCALAR
 */
type t_Float<T extends number = number> = ScalarType<T, Extension<"Float">>;

/**
 * @name DragonHeatShield
 * @type OBJECT
 */
type t_DragonHeatShield = FieldsType<
  {
    __typename: t_String<"DragonHeatShield">;
    dev_partner?: t_String | undefined | null;
    material?: t_String | undefined | null;
    size_meters?: t_Float | undefined | null;
    temp_degrees?: t_Int | undefined | null;
  },
  Extension<"DragonHeatShield">
>;

/**
 * @name Mass
 * @type OBJECT
 */
type t_Mass = FieldsType<
  {
    __typename: t_String<"Mass">;
    kg?: t_Int | undefined | null;
    lb?: t_Int | undefined | null;
  },
  Extension<"Mass">
>;

/**
 * @name Volume
 * @type OBJECT
 */
type t_Volume = FieldsType<
  {
    __typename: t_String<"Volume">;
    cubic_feet?: t_Int | undefined | null;
    cubic_meters?: t_Int | undefined | null;
  },
  Extension<"Volume">
>;

/**
 * @name DragonPressurizedCapsule
 * @type OBJECT
 */
type t_DragonPressurizedCapsule = FieldsType<
  {
    __typename: t_String<"DragonPressurizedCapsule">;
    payload_volume?: t_Volume | undefined | null;
  },
  Extension<"DragonPressurizedCapsule">
>;

/**
 * @name DragonThrust
 * @type OBJECT
 */
type t_DragonThrust = FieldsType<
  {
    __typename: t_String<"DragonThrust">;
    amount?: t_Int | undefined | null;
    fuel_1?: t_String | undefined | null;
    fuel_2?: t_String | undefined | null;
    pods?: t_Int | undefined | null;
    thrust?: t_Force | undefined | null;
    type?: t_String | undefined | null;
  },
  Extension<"DragonThrust">
>;

/**
 * @name Force
 * @type OBJECT
 */
type t_Force = FieldsType<
  {
    __typename: t_String<"Force">;
    kN?: t_Float | undefined | null;
    lbf?: t_Float | undefined | null;
  },
  Extension<"Force">
>;

/**
 * @name DragonTrunk
 * @type OBJECT
 */
type t_DragonTrunk = FieldsType<
  {
    __typename: t_String<"DragonTrunk">;
    cargo?: t_DragonTrunkCargo | undefined | null;
    trunk_volume?: t_Volume | undefined | null;
  },
  Extension<"DragonTrunk">
>;

/**
 * @name DragonTrunkCargo
 * @type OBJECT
 */
type t_DragonTrunkCargo = FieldsType<
  {
    __typename: t_String<"DragonTrunkCargo">;
    solar_array?: t_Int | undefined | null;
    unpressurized_cargo?: t_Boolean | undefined | null;
  },
  Extension<"DragonTrunkCargo">
>;

/**
 * @name Info
 * @type OBJECT
 */
type t_Info = FieldsType<
  {
    __typename: t_String<"Info">;
    ceo?: t_String | undefined | null;
    coo?: t_String | undefined | null;
    cto_propulsion?: t_String | undefined | null;
    cto?: t_String | undefined | null;
    employees?: t_Int | undefined | null;
    founded?: t_Int | undefined | null;
    founder?: t_String | undefined | null;
    headquarters?: t_Address | undefined | null;
    launch_sites?: t_Int | undefined | null;
    links?: t_InfoLinks | undefined | null;
    name?: t_String | undefined | null;
    summary?: t_String | undefined | null;
    test_sites?: t_Int | undefined | null;
    valuation?: t_Float | undefined | null;
    vehicles?: t_Int | undefined | null;
  },
  Extension<"Info">
>;

/**
 * @name Address
 * @type OBJECT
 */
type t_Address = FieldsType<
  {
    __typename: t_String<"Address">;
    address?: t_String | undefined | null;
    city?: t_String | undefined | null;
    state?: t_String | undefined | null;
  },
  Extension<"Address">
>;

/**
 * @name InfoLinks
 * @type OBJECT
 */
type t_InfoLinks = FieldsType<
  {
    __typename: t_String<"InfoLinks">;
    elon_twitter?: t_String | undefined | null;
    flickr?: t_String | undefined | null;
    twitter?: t_String | undefined | null;
    website?: t_String | undefined | null;
  },
  Extension<"InfoLinks">
>;

/**
 * @name CoresFind
 * @type INPUT_OBJECT
 */
export type CoresFind = {
  asds_attempts?: number | undefined | null;
  asds_landings?: number | undefined | null;
  block?: number | undefined | null;
  id?: string | undefined | null;
  missions?: string | undefined | null;
  original_launch?: string | undefined | null;
  reuse_count?: number | undefined | null;
  rtls_attempts?: number | undefined | null;
  rtls_landings?: number | undefined | null;
  status?: string | undefined | null;
  water_landing?: boolean | undefined | null;
};

/**
 * @name Core
 * @type OBJECT
 */
type t_Core = FieldsType<
  {
    __typename: t_String<"Core">;
    asds_attempts?: t_Int | undefined | null;
    asds_landings?: t_Int | undefined | null;
    block?: t_Int | undefined | null;
    id?: t_ID | undefined | null;
    missions?: (t_CapsuleMission | undefined | null)[] | undefined | null;
    original_launch?: t_Date | undefined | null;
    reuse_count?: t_Int | undefined | null;
    rtls_attempts?: t_Int | undefined | null;
    rtls_landings?: t_Int | undefined | null;
    status?: t_String | undefined | null;
    water_landing?: t_Boolean | undefined | null;
  },
  Extension<"Core">
>;

/**
 * @name HistoryFind
 * @type INPUT_OBJECT
 */
export type HistoryFind = {
  end?: string | undefined | null;
  flight_number?: number | undefined | null;
  id?: string | undefined | null;
  start?: string | undefined | null;
};

/**
 * @name History
 * @type OBJECT
 */
type t_History = FieldsType<
  {
    __typename: t_String<"History">;
    details?: t_String | undefined | null;
    event_date_unix?: t_Date | undefined | null;
    event_date_utc?: t_Date | undefined | null;
    id?: t_ID | undefined | null;
    links?: t_Link | undefined | null;
    title?: t_String | undefined | null;
    flight?: t_Launch | undefined | null;
  },
  Extension<"History">
>;

/**
 * @name Link
 * @type OBJECT
 */
type t_Link = FieldsType<
  {
    __typename: t_String<"Link">;
    article?: t_String | undefined | null;
    reddit?: t_String | undefined | null;
    wikipedia?: t_String | undefined | null;
  },
  Extension<"Link">
>;

/**
 * @name Launch
 * @type OBJECT
 */
type t_Launch = FieldsType<
  {
    __typename: t_String<"Launch">;
    details?: t_String | undefined | null;
    id?: t_ID | undefined | null;
    is_tentative?: t_Boolean | undefined | null;
    launch_date_local?: t_Date | undefined | null;
    launch_date_unix?: t_Date | undefined | null;
    launch_date_utc?: t_Date | undefined | null;
    launch_site?: t_LaunchSite | undefined | null;
    launch_success?: t_Boolean | undefined | null;
    launch_year?: t_String | undefined | null;
    links?: t_LaunchLinks | undefined | null;
    mission_id?: (t_String | undefined | null)[] | undefined | null;
    mission_name?: t_String | undefined | null;
    rocket?: t_LaunchRocket | undefined | null;
    static_fire_date_unix?: t_Date | undefined | null;
    static_fire_date_utc?: t_Date | undefined | null;
    telemetry?: t_LaunchTelemetry | undefined | null;
    tentative_max_precision?: t_String | undefined | null;
    upcoming?: t_Boolean | undefined | null;
    ships?: (t_Ship | undefined | null)[] | undefined | null;
  },
  Extension<"Launch">
>;

/**
 * @name LaunchSite
 * @type OBJECT
 */
type t_LaunchSite = FieldsType<
  {
    __typename: t_String<"LaunchSite">;
    site_id?: t_String | undefined | null;
    site_name_long?: t_String | undefined | null;
    site_name?: t_String | undefined | null;
  },
  Extension<"LaunchSite">
>;

/**
 * @name LaunchLinks
 * @type OBJECT
 */
type t_LaunchLinks = FieldsType<
  {
    __typename: t_String<"LaunchLinks">;
    article_link?: t_String | undefined | null;
    flickr_images?: (t_String | undefined | null)[] | undefined | null;
    mission_patch_small?: t_String | undefined | null;
    mission_patch?: t_String | undefined | null;
    presskit?: t_String | undefined | null;
    reddit_campaign?: t_String | undefined | null;
    reddit_launch?: t_String | undefined | null;
    reddit_media?: t_String | undefined | null;
    reddit_recovery?: t_String | undefined | null;
    video_link?: t_String | undefined | null;
    wikipedia?: t_String | undefined | null;
  },
  Extension<"LaunchLinks">
>;

/**
 * @name LaunchRocket
 * @type OBJECT
 */
type t_LaunchRocket = FieldsType<
  {
    __typename: t_String<"LaunchRocket">;
    fairings?: t_LaunchRocketFairings | undefined | null;
    first_stage?: t_LaunchRocketFirstStage | undefined | null;
    rocket_name?: t_String | undefined | null;
    rocket_type?: t_String | undefined | null;
    rocket?: t_Rocket | undefined | null;
    second_stage?: t_LaunchRocketSecondStage | undefined | null;
  },
  Extension<"LaunchRocket">
>;

/**
 * @name LaunchRocketFairings
 * @type OBJECT
 */
type t_LaunchRocketFairings = FieldsType<
  {
    __typename: t_String<"LaunchRocketFairings">;
    recovered?: t_Boolean | undefined | null;
    recovery_attempt?: t_Boolean | undefined | null;
    reused?: t_Boolean | undefined | null;
    ship?: t_String | undefined | null;
  },
  Extension<"LaunchRocketFairings">
>;

/**
 * @name LaunchRocketFirstStage
 * @type OBJECT
 */
type t_LaunchRocketFirstStage = FieldsType<
  {
    __typename: t_String<"LaunchRocketFirstStage">;
    cores?:
      | (t_LaunchRocketFirstStageCore | undefined | null)[]
      | undefined
      | null;
  },
  Extension<"LaunchRocketFirstStage">
>;

/**
 * @name LaunchRocketFirstStageCore
 * @type OBJECT
 */
type t_LaunchRocketFirstStageCore = FieldsType<
  {
    __typename: t_String<"LaunchRocketFirstStageCore">;
    block?: t_Int | undefined | null;
    core?: t_Core | undefined | null;
    flight?: t_Int | undefined | null;
    gridfins?: t_Boolean | undefined | null;
    land_success?: t_Boolean | undefined | null;
    landing_intent?: t_Boolean | undefined | null;
    landing_type?: t_String | undefined | null;
    landing_vehicle?: t_String | undefined | null;
    legs?: t_Boolean | undefined | null;
    reused?: t_Boolean | undefined | null;
  },
  Extension<"LaunchRocketFirstStageCore">
>;

/**
 * @name Rocket
 * @type OBJECT
 */
type t_Rocket = FieldsType<
  {
    __typename: t_String<"Rocket">;
    active?: t_Boolean | undefined | null;
    boosters?: t_Int | undefined | null;
    company?: t_String | undefined | null;
    cost_per_launch?: t_Int | undefined | null;
    country?: t_String | undefined | null;
    description?: t_String | undefined | null;
    diameter?: t_Distance | undefined | null;
    engines?: t_RocketEngines | undefined | null;
    first_flight?: t_Date | undefined | null;
    first_stage?: t_RocketFirstStage | undefined | null;
    height?: t_Distance | undefined | null;
    id?: t_ID | undefined | null;
    landing_legs?: t_RocketLandingLegs | undefined | null;
    mass?: t_Mass | undefined | null;
    name?: t_String | undefined | null;
    payload_weights?:
      | (t_RocketPayloadWeight | undefined | null)[]
      | undefined
      | null;
    second_stage?: t_RocketSecondStage | undefined | null;
    stages?: t_Int | undefined | null;
    success_rate_pct?: t_Int | undefined | null;
    type?: t_String | undefined | null;
    wikipedia?: t_String | undefined | null;
  },
  Extension<"Rocket">
>;

/**
 * @name RocketEngines
 * @type OBJECT
 */
type t_RocketEngines = FieldsType<
  {
    __typename: t_String<"RocketEngines">;
    number?: t_Int | undefined | null;
    type?: t_String | undefined | null;
    version?: t_String | undefined | null;
    layout?: t_String | undefined | null;
    engine_loss_max?: t_String | undefined | null;
    propellant_1?: t_String | undefined | null;
    propellant_2?: t_String | undefined | null;
    thrust_sea_level?: t_Force | undefined | null;
    thrust_vacuum?: t_Force | undefined | null;
    thrust_to_weight?: t_Float | undefined | null;
  },
  Extension<"RocketEngines">
>;

/**
 * @name RocketFirstStage
 * @type OBJECT
 */
type t_RocketFirstStage = FieldsType<
  {
    __typename: t_String<"RocketFirstStage">;
    burn_time_sec?: t_Int | undefined | null;
    engines?: t_Int | undefined | null;
    fuel_amount_tons?: t_Float | undefined | null;
    reusable?: t_Boolean | undefined | null;
    thrust_sea_level?: t_Force | undefined | null;
    thrust_vacuum?: t_Force | undefined | null;
  },
  Extension<"RocketFirstStage">
>;

/**
 * @name RocketLandingLegs
 * @type OBJECT
 */
type t_RocketLandingLegs = FieldsType<
  {
    __typename: t_String<"RocketLandingLegs">;
    number?: t_Int | undefined | null;
    material?: t_String | undefined | null;
  },
  Extension<"RocketLandingLegs">
>;

/**
 * @name RocketPayloadWeight
 * @type OBJECT
 */
type t_RocketPayloadWeight = FieldsType<
  {
    __typename: t_String<"RocketPayloadWeight">;
    id?: t_String | undefined | null;
    kg?: t_Int | undefined | null;
    lb?: t_Int | undefined | null;
    name?: t_String | undefined | null;
  },
  Extension<"RocketPayloadWeight">
>;

/**
 * @name RocketSecondStage
 * @type OBJECT
 */
type t_RocketSecondStage = FieldsType<
  {
    __typename: t_String<"RocketSecondStage">;
    burn_time_sec?: t_Int | undefined | null;
    engines?: t_Int | undefined | null;
    fuel_amount_tons?: t_Float | undefined | null;
    payloads?: t_RocketSecondStagePayloads | undefined | null;
    thrust?: t_Force | undefined | null;
  },
  Extension<"RocketSecondStage">
>;

/**
 * @name RocketSecondStagePayloads
 * @type OBJECT
 */
type t_RocketSecondStagePayloads = FieldsType<
  {
    __typename: t_String<"RocketSecondStagePayloads">;
    option_1?: t_String | undefined | null;
    composite_fairing?:
      | t_RocketSecondStagePayloadCompositeFairing
      | undefined
      | null;
  },
  Extension<"RocketSecondStagePayloads">
>;

/**
 * @name RocketSecondStagePayloadCompositeFairing
 * @type OBJECT
 */
type t_RocketSecondStagePayloadCompositeFairing = FieldsType<
  {
    __typename: t_String<"RocketSecondStagePayloadCompositeFairing">;
    height?: t_Distance | undefined | null;
    diameter?: t_Distance | undefined | null;
  },
  Extension<"RocketSecondStagePayloadCompositeFairing">
>;

/**
 * @name LaunchRocketSecondStage
 * @type OBJECT
 */
type t_LaunchRocketSecondStage = FieldsType<
  {
    __typename: t_String<"LaunchRocketSecondStage">;
    block?: t_Int | undefined | null;
    payloads?: (t_Payload | undefined | null)[] | undefined | null;
  },
  Extension<"LaunchRocketSecondStage">
>;

/**
 * @name Payload
 * @type OBJECT
 */
type t_Payload = FieldsType<
  {
    __typename: t_String<"Payload">;
    customers?: (t_String | undefined | null)[] | undefined | null;
    id?: t_ID | undefined | null;
    manufacturer?: t_String | undefined | null;
    nationality?: t_String | undefined | null;
    norad_id?: (t_Int | undefined | null)[] | undefined | null;
    orbit_params?: t_PayloadOrbitParams | undefined | null;
    orbit?: t_String | undefined | null;
    payload_mass_kg?: t_Float | undefined | null;
    payload_mass_lbs?: t_Float | undefined | null;
    payload_type?: t_String | undefined | null;
    reused?: t_Boolean | undefined | null;
  },
  Extension<"Payload">
>;

/**
 * @name PayloadOrbitParams
 * @type OBJECT
 */
type t_PayloadOrbitParams = FieldsType<
  {
    __typename: t_String<"PayloadOrbitParams">;
    apoapsis_km?: t_Float | undefined | null;
    arg_of_pericenter?: t_Float | undefined | null;
    eccentricity?: t_Float | undefined | null;
    epoch?: t_Date | undefined | null;
    inclination_deg?: t_Float | undefined | null;
    lifespan_years?: t_Float | undefined | null;
    longitude?: t_Float | undefined | null;
    mean_anomaly?: t_Float | undefined | null;
    mean_motion?: t_Float | undefined | null;
    periapsis_km?: t_Float | undefined | null;
    period_min?: t_Float | undefined | null;
    raan?: t_Float | undefined | null;
    reference_system?: t_String | undefined | null;
    regime?: t_String | undefined | null;
    semi_major_axis_km?: t_Float | undefined | null;
  },
  Extension<"PayloadOrbitParams">
>;

/**
 * @name LaunchTelemetry
 * @type OBJECT
 */
type t_LaunchTelemetry = FieldsType<
  {
    __typename: t_String<"LaunchTelemetry">;
    flight_club?: t_String | undefined | null;
  },
  Extension<"LaunchTelemetry">
>;

/**
 * @name Ship
 * @type OBJECT
 */
type t_Ship = FieldsType<
  {
    __typename: t_String<"Ship">;
    abs?: t_Int | undefined | null;
    active?: t_Boolean | undefined | null;
    attempted_landings?: t_Int | undefined | null;
    class?: t_Int | undefined | null;
    course_deg?: t_Int | undefined | null;
    home_port?: t_String | undefined | null;
    id?: t_ID | undefined | null;
    image?: t_String | undefined | null;
    imo?: t_Int | undefined | null;
    missions?: (t_ShipMission | undefined | null)[] | undefined | null;
    mmsi?: t_Int | undefined | null;
    model?: t_String | undefined | null;
    name?: t_String | undefined | null;
    position?: t_ShipLocation | undefined | null;
    roles?: (t_String | undefined | null)[] | undefined | null;
    speed_kn?: t_Float | undefined | null;
    status?: t_String | undefined | null;
    successful_landings?: t_Int | undefined | null;
    type?: t_String | undefined | null;
    url?: t_String | undefined | null;
    weight_kg?: t_Int | undefined | null;
    weight_lbs?: t_Int | undefined | null;
    year_built?: t_Int | undefined | null;
  },
  Extension<"Ship">
>;

/**
 * @name ShipMission
 * @type OBJECT
 */
type t_ShipMission = FieldsType<
  {
    __typename: t_String<"ShipMission">;
    flight?: t_String | undefined | null;
    name?: t_String | undefined | null;
  },
  Extension<"ShipMission">
>;

/**
 * @name ShipLocation
 * @type OBJECT
 */
type t_ShipLocation = FieldsType<
  {
    __typename: t_String<"ShipLocation">;
    latitude?: t_Float | undefined | null;
    longitude?: t_Float | undefined | null;
  },
  Extension<"ShipLocation">
>;

/**
 * @name HistoriesResult
 * @type OBJECT
 */
type t_HistoriesResult = FieldsType<
  {
    __typename: t_String<"HistoriesResult">;
    result?: t_Result | undefined | null;
    data?: (t_History | undefined | null)[] | undefined | null;
  },
  Extension<"HistoriesResult">
>;

/**
 * @name Result
 * @type OBJECT
 */
type t_Result = FieldsType<
  {
    __typename: t_String<"Result">;
    totalCount?: t_Int | undefined | null;
  },
  Extension<"Result">
>;

/**
 * @name Landpad
 * @type OBJECT
 */
type t_Landpad = FieldsType<
  {
    __typename: t_String<"Landpad">;
    attempted_landings?: t_String | undefined | null;
    details?: t_String | undefined | null;
    full_name?: t_String | undefined | null;
    id?: t_ID | undefined | null;
    landing_type?: t_String | undefined | null;
    location?: t_Location | undefined | null;
    status?: t_String | undefined | null;
    successful_landings?: t_String | undefined | null;
    wikipedia?: t_String | undefined | null;
  },
  Extension<"Landpad">
>;

/**
 * @name Location
 * @type OBJECT
 */
type t_Location = FieldsType<
  {
    __typename: t_String<"Location">;
    latitude?: t_Float | undefined | null;
    longitude?: t_Float | undefined | null;
    name?: t_String | undefined | null;
    region?: t_String | undefined | null;
  },
  Extension<"Location">
>;

/**
 * @name LaunchFind
 * @type INPUT_OBJECT
 */
export type LaunchFind = {
  apoapsis_km?: number | undefined | null;
  block?: number | undefined | null;
  cap_serial?: string | undefined | null;
  capsule_reuse?: string | undefined | null;
  core_flight?: number | undefined | null;
  core_reuse?: string | undefined | null;
  core_serial?: string | undefined | null;
  customer?: string | undefined | null;
  eccentricity?: number | undefined | null;
  end?: string | undefined | null;
  epoch?: string | undefined | null;
  fairings_recovered?: string | undefined | null;
  fairings_recovery_attempt?: string | undefined | null;
  fairings_reuse?: string | undefined | null;
  fairings_reused?: string | undefined | null;
  fairings_ship?: string | undefined | null;
  gridfins?: string | undefined | null;
  id?: string | undefined | null;
  inclination_deg?: number | undefined | null;
  land_success?: string | undefined | null;
  landing_intent?: string | undefined | null;
  landing_type?: string | undefined | null;
  landing_vehicle?: string | undefined | null;
  launch_date_local?: string | undefined | null;
  launch_date_utc?: string | undefined | null;
  launch_success?: string | undefined | null;
  launch_year?: string | undefined | null;
  legs?: string | undefined | null;
  lifespan_years?: number | undefined | null;
  longitude?: number | undefined | null;
  manufacturer?: string | undefined | null;
  mean_motion?: number | undefined | null;
  mission_id?: string | undefined | null;
  mission_name?: string | undefined | null;
  nationality?: string | undefined | null;
  norad_id?: number | undefined | null;
  orbit?: string | undefined | null;
  payload_id?: string | undefined | null;
  payload_type?: string | undefined | null;
  periapsis_km?: number | undefined | null;
  period_min?: number | undefined | null;
  raan?: number | undefined | null;
  reference_system?: string | undefined | null;
  regime?: string | undefined | null;
  reused?: string | undefined | null;
  rocket_id?: string | undefined | null;
  rocket_name?: string | undefined | null;
  rocket_type?: string | undefined | null;
  second_stage_block?: string | undefined | null;
  semi_major_axis_km?: number | undefined | null;
  ship?: string | undefined | null;
  side_core1_reuse?: string | undefined | null;
  side_core2_reuse?: string | undefined | null;
  site_id?: string | undefined | null;
  site_name_long?: string | undefined | null;
  site_name?: string | undefined | null;
  start?: string | undefined | null;
  tbd?: string | undefined | null;
  tentative_max_precision?: string | undefined | null;
  tentative?: string | undefined | null;
};

/**
 * @name LaunchesPastResult
 * @type OBJECT
 */
type t_LaunchesPastResult = FieldsType<
  {
    __typename: t_String<"LaunchesPastResult">;
    result?: t_Result | undefined | null;
    data?: (t_Launch | undefined | null)[] | undefined | null;
  },
  Extension<"LaunchesPastResult">
>;

/**
 * @name Launchpad
 * @type OBJECT
 */
type t_Launchpad = FieldsType<
  {
    __typename: t_String<"Launchpad">;
    attempted_launches?: t_Int | undefined | null;
    details?: t_String | undefined | null;
    id?: t_ID | undefined | null;
    location?: t_Location | undefined | null;
    name?: t_String | undefined | null;
    status?: t_String | undefined | null;
    successful_launches?: t_Int | undefined | null;
    vehicles_launched?: (t_Rocket | undefined | null)[] | undefined | null;
    wikipedia?: t_String | undefined | null;
  },
  Extension<"Launchpad">
>;

/**
 * @name MissionsFind
 * @type INPUT_OBJECT
 */
export type MissionsFind = {
  id?: string | undefined | null;
  manufacturer?: string | undefined | null;
  name?: string | undefined | null;
  payload_id?: string | undefined | null;
};

/**
 * @name Mission
 * @type OBJECT
 */
type t_Mission = FieldsType<
  {
    __typename: t_String<"Mission">;
    description?: t_String | undefined | null;
    id?: t_ID | undefined | null;
    manufacturers?: (t_String | undefined | null)[] | undefined | null;
    name?: t_String | undefined | null;
    twitter?: t_String | undefined | null;
    website?: t_String | undefined | null;
    wikipedia?: t_String | undefined | null;
    payloads?: (t_Payload | undefined | null)[] | undefined | null;
  },
  Extension<"Mission">
>;

/**
 * @name MissionResult
 * @type OBJECT
 */
type t_MissionResult = FieldsType<
  {
    __typename: t_String<"MissionResult">;
    result?: t_Result | undefined | null;
    data?: (t_Mission | undefined | null)[] | undefined | null;
  },
  Extension<"MissionResult">
>;

/**
 * @name PayloadsFind
 * @type INPUT_OBJECT
 */
export type PayloadsFind = {
  apoapsis_km?: number | undefined | null;
  customer?: string | undefined | null;
  eccentricity?: number | undefined | null;
  epoch?: string | undefined | null;
  inclination_deg?: number | undefined | null;
  lifespan_years?: number | undefined | null;
  longitude?: number | undefined | null;
  manufacturer?: string | undefined | null;
  mean_motion?: number | undefined | null;
  nationality?: string | undefined | null;
  norad_id?: number | undefined | null;
  orbit?: string | undefined | null;
  payload_id?: string | undefined | null;
  payload_type?: string | undefined | null;
  periapsis_km?: number | undefined | null;
  period_min?: number | undefined | null;
  raan?: number | undefined | null;
  reference_system?: string | undefined | null;
  regime?: string | undefined | null;
  reused?: boolean | undefined | null;
  semi_major_axis_km?: number | undefined | null;
};

/**
 * @name Roadster
 * @type OBJECT
 */
type t_Roadster = FieldsType<
  {
    __typename: t_String<"Roadster">;
    apoapsis_au?: t_Float | undefined | null;
    details?: t_String | undefined | null;
    earth_distance_km?: t_Float | undefined | null;
    earth_distance_mi?: t_Float | undefined | null;
    eccentricity?: t_Float | undefined | null;
    epoch_jd?: t_Float | undefined | null;
    inclination?: t_Float | undefined | null;
    launch_date_unix?: t_Date | undefined | null;
    launch_date_utc?: t_Date | undefined | null;
    launch_mass_kg?: t_Int | undefined | null;
    launch_mass_lbs?: t_Int | undefined | null;
    longitude?: t_Float | undefined | null;
    mars_distance_km?: t_Float | undefined | null;
    mars_distance_mi?: t_Float | undefined | null;
    name?: t_String | undefined | null;
    norad_id?: t_Int | undefined | null;
    orbit_type?: t_Float | undefined | null;
    periapsis_arg?: t_Float | undefined | null;
    periapsis_au?: t_Float | undefined | null;
    period_days?: t_Float | undefined | null;
    semi_major_axis_au?: t_Float | undefined | null;
    speed_kph?: t_Float | undefined | null;
    speed_mph?: t_Float | undefined | null;
    wikipedia?: t_String | undefined | null;
  },
  Extension<"Roadster">
>;

/**
 * @name RocketsResult
 * @type OBJECT
 */
type t_RocketsResult = FieldsType<
  {
    __typename: t_String<"RocketsResult">;
    result?: t_Result | undefined | null;
    data?: (t_Rocket | undefined | null)[] | undefined | null;
  },
  Extension<"RocketsResult">
>;

/**
 * @name ShipsFind
 * @type INPUT_OBJECT
 */
export type ShipsFind = {
  id?: string | undefined | null;
  name?: string | undefined | null;
  model?: string | undefined | null;
  type?: string | undefined | null;
  role?: string | undefined | null;
  active?: boolean | undefined | null;
  imo?: number | undefined | null;
  mmsi?: number | undefined | null;
  abs?: number | undefined | null;
  class?: number | undefined | null;
  weight_lbs?: number | undefined | null;
  weight_kg?: number | undefined | null;
  year_built?: number | undefined | null;
  home_port?: string | undefined | null;
  status?: string | undefined | null;
  speed_kn?: number | undefined | null;
  course_deg?: number | undefined | null;
  latitude?: number | undefined | null;
  longitude?: number | undefined | null;
  successful_landings?: number | undefined | null;
  attempted_landings?: number | undefined | null;
  mission?: string | undefined | null;
};

/**
 * @name ShipsResult
 * @type OBJECT
 */
type t_ShipsResult = FieldsType<
  {
    __typename: t_String<"ShipsResult">;
    result?: t_Result | undefined | null;
    data?: (t_Ship | undefined | null)[] | undefined | null;
  },
  Extension<"ShipsResult">
>;

/**
 * @name Mutation
 * @type OBJECT
 */
type t_Mutation = FieldsType<
  {
    __typename: t_String<"Mutation">;

    /**
     * delete data from the table: "users"
     */
    delete_users?: FieldsTypeArg<
      { where: users_bool_exp },
      t_users_mutation_response | undefined | null
    >;

    /**
     * insert data into the table: "users"
     */
    insert_users?: FieldsTypeArg<
      {
        objects: users_insert_input[];
        on_conflict?: users_on_conflict | undefined | null;
      },
      t_users_mutation_response | undefined | null
    >;

    /**
     * update data of the table: "users"
     */
    update_users?: FieldsTypeArg<
      { _set?: users_set_input | undefined | null; where: users_bool_exp },
      t_users_mutation_response | undefined | null
    >;
  },
  Extension<"Mutation">
>;

/**
 * @name users_mutation_response
 * @type OBJECT
 */
type t_users_mutation_response = FieldsType<
  {
    __typename: t_String<"users_mutation_response">;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_users[];
  },
  Extension<"users_mutation_response">
>;

/**
 * @name users_insert_input
 * @type INPUT_OBJECT
 */
export type users_insert_input = {
  id?: any | undefined | null;
  name?: string | undefined | null;
  rocket?: string | undefined | null;
  timestamp?: any | undefined | null;
  twitter?: string | undefined | null;
};

/**
 * @name users_on_conflict
 * @type INPUT_OBJECT
 */
export type users_on_conflict = {
  constraint: users_constraint;
  update_columns: users_update_column[];
};

/**
 * @name users_constraint
 * @type ENUM
 */
type t_users_constraint = EnumType<"users_pkey">;

/**
 * @name users_update_column
 * @type ENUM
 */
type t_users_update_column = EnumType<
  "id" | "name" | "rocket" | "timestamp" | "twitter"
>;

/**
 * @name users_set_input
 * @type INPUT_OBJECT
 */
export type users_set_input = {
  id?: any | undefined | null;
  name?: string | undefined | null;
  rocket?: string | undefined | null;
  timestamp?: any | undefined | null;
  twitter?: string | undefined | null;
};

/**
 * @name Subscription
 * @type OBJECT
 */
type t_Subscription = FieldsType<
  {
    __typename: t_String<"Subscription">;

    /**
     * fetch data from the table: "users"
     */
    users: FieldsTypeArg<
      {
        distinct_on?: users_select_column[] | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
        order_by?: users_order_by[] | undefined | null;
        where?: users_bool_exp | undefined | null;
      },
      t_users[]
    >;

    /**
     * fetch aggregated fields from the table: "users"
     */
    users_aggregate: FieldsTypeArg<
      {
        distinct_on?: users_select_column[] | undefined | null;
        limit?: number | undefined | null;
        offset?: number | undefined | null;
        order_by?: users_order_by[] | undefined | null;
        where?: users_bool_exp | undefined | null;
      },
      t_users_aggregate
    >;

    /**
     * fetch data from the table: "users" using primary key columns
     */
    users_by_pk?: FieldsTypeArg<{ id: any }, t_users | undefined | null>;
  },
  Extension<"Subscription">
>;

/**
 * @name __Schema
 * @type OBJECT
 */
type t___Schema = FieldsType<
  {
    __typename: t_String<"__Schema">;

    /**
     * A list of all types supported by this server.
     */
    types: t___Type[];

    /**
     * The type that query operations will be rooted at.
     */
    queryType: t___Type;

    /**
     * If this server supports mutation, the type that mutation operations will be rooted at.
     */
    mutationType?: t___Type | undefined | null;

    /**
     * If this server support subscription, the type that subscription operations will be rooted at.
     */
    subscriptionType?: t___Type | undefined | null;

    /**
     * A list of all directives supported by this server.
     */
    directives: t___Directive[];
  },
  Extension<"__Schema">
>;

/**
 * @name __Type
 * @type OBJECT
 */
type t___Type = FieldsType<
  {
    __typename: t_String<"__Type">;
    kind: t___TypeKind;
    name?: t_String | undefined | null;
    description?: t_String | undefined | null;
    fields?: FieldsTypeArg<
      { includeDeprecated?: boolean | undefined | null },
      t___Field[] | undefined | null
    >;
    interfaces?: t___Type[] | undefined | null;
    possibleTypes?: t___Type[] | undefined | null;
    enumValues?: FieldsTypeArg<
      { includeDeprecated?: boolean | undefined | null },
      t___EnumValue[] | undefined | null
    >;
    inputFields?: t___InputValue[] | undefined | null;
    ofType?: t___Type | undefined | null;
  },
  Extension<"__Type">
>;

/**
 * @name __TypeKind
 * @type ENUM
 */
type t___TypeKind = EnumType<
  | "SCALAR"
  | "OBJECT"
  | "INTERFACE"
  | "UNION"
  | "ENUM"
  | "INPUT_OBJECT"
  | "LIST"
  | "NON_NULL"
>;

/**
 * @name __Field
 * @type OBJECT
 */
type t___Field = FieldsType<
  {
    __typename: t_String<"__Field">;
    name: t_String;
    description?: t_String | undefined | null;
    args: t___InputValue[];
    type: t___Type;
    isDeprecated: t_Boolean;
    deprecationReason?: t_String | undefined | null;
  },
  Extension<"__Field">
>;

/**
 * @name __InputValue
 * @type OBJECT
 */
type t___InputValue = FieldsType<
  {
    __typename: t_String<"__InputValue">;
    name: t_String;
    description?: t_String | undefined | null;
    type: t___Type;

    /**
     * A GraphQL-formatted string representing the default value for this input value.
     */
    defaultValue?: t_String | undefined | null;
  },
  Extension<"__InputValue">
>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
type t___EnumValue = FieldsType<
  {
    __typename: t_String<"__EnumValue">;
    name: t_String;
    description?: t_String | undefined | null;
    isDeprecated: t_Boolean;
    deprecationReason?: t_String | undefined | null;
  },
  Extension<"__EnumValue">
>;

/**
 * @name __Directive
 * @type OBJECT
 */
type t___Directive = FieldsType<
  {
    __typename: t_String<"__Directive">;
    name: t_String;
    description?: t_String | undefined | null;
    locations: t___DirectiveLocation[];
    args: t___InputValue[];
  },
  Extension<"__Directive">
>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
type t___DirectiveLocation = EnumType<
  | "QUERY"
  | "MUTATION"
  | "SUBSCRIPTION"
  | "FIELD"
  | "FRAGMENT_DEFINITION"
  | "FRAGMENT_SPREAD"
  | "INLINE_FRAGMENT"
  | "VARIABLE_DEFINITION"
  | "SCHEMA"
  | "SCALAR"
  | "OBJECT"
  | "FIELD_DEFINITION"
  | "ARGUMENT_DEFINITION"
  | "INTERFACE"
  | "UNION"
  | "ENUM"
  | "ENUM_VALUE"
  | "INPUT_OBJECT"
  | "INPUT_FIELD_DEFINITION"
>;

/**
 * @name conflict_action
 * @type ENUM
 */
type t_conflict_action = EnumType<"ignore" | "update">;

/**
 * @name users_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type users_aggregate_order_by = {
  count?: order_by | undefined | null;
  max?: users_max_order_by | undefined | null;
  min?: users_min_order_by | undefined | null;
};

/**
 * @name users_max_order_by
 * @type INPUT_OBJECT
 */
export type users_max_order_by = {
  name?: order_by | undefined | null;
  rocket?: order_by | undefined | null;
  timestamp?: order_by | undefined | null;
  twitter?: order_by | undefined | null;
};

/**
 * @name users_min_order_by
 * @type INPUT_OBJECT
 */
export type users_min_order_by = {
  name?: order_by | undefined | null;
  rocket?: order_by | undefined | null;
  timestamp?: order_by | undefined | null;
  twitter?: order_by | undefined | null;
};

/**
 * @name users_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type users_arr_rel_insert_input = {
  data: users_insert_input[];
  on_conflict?: users_on_conflict | undefined | null;
};

/**
 * @name users_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type users_obj_rel_insert_input = {
  data: users_insert_input;
  on_conflict?: users_on_conflict | undefined | null;
};

/**
 * @name ObjectID
 * @type SCALAR
 */
type t_ObjectID<T extends any = any> = ScalarType<T, Extension<"ObjectID">>;

/**
 * @name CoreMission
 * @type OBJECT
 */
type t_CoreMission = FieldsType<
  {
    __typename: t_String<"CoreMission">;
    name?: t_String | undefined | null;
    flight?: t_Int | undefined | null;
  },
  Extension<"CoreMission">
>;

/**
 * @name Query
 * @type OBJECT
 */
export type Query = TypeData<t_Query>;

/**
 * @name users_select_column
 * @type ENUM
 */
export type users_select_column = TypeData<t_users_select_column>;

/**
 * @name Int
 * @type SCALAR
 */
export type Int = TypeData<t_Int>;

/**
 * @name order_by
 * @type ENUM
 */
export type order_by = TypeData<t_order_by>;

/**
 * @name uuid
 * @type SCALAR
 */
export type uuid = TypeData<t_uuid>;

/**
 * @name Boolean
 * @type SCALAR
 */
export type Boolean = TypeData<t_Boolean>;

/**
 * @name String
 * @type SCALAR
 */
export type String = TypeData<t_String>;

/**
 * @name timestamptz
 * @type SCALAR
 */
export type timestamptz = TypeData<t_timestamptz>;

/**
 * @name users
 * @type OBJECT
 */
export type users = TypeData<t_users>;

/**
 * @name users_aggregate
 * @type OBJECT
 */
export type users_aggregate = TypeData<t_users_aggregate>;

/**
 * @name users_aggregate_fields
 * @type OBJECT
 */
export type users_aggregate_fields = TypeData<t_users_aggregate_fields>;

/**
 * @name users_max_fields
 * @type OBJECT
 */
export type users_max_fields = TypeData<t_users_max_fields>;

/**
 * @name users_min_fields
 * @type OBJECT
 */
export type users_min_fields = TypeData<t_users_min_fields>;

/**
 * @name ID
 * @type SCALAR
 */
export type ID = TypeData<t_ID>;

/**
 * @name Date
 * @type SCALAR
 */
export type Date = TypeData<t_Date>;

/**
 * @name Capsule
 * @type OBJECT
 */
export type Capsule = TypeData<t_Capsule>;

/**
 * @name CapsuleMission
 * @type OBJECT
 */
export type CapsuleMission = TypeData<t_CapsuleMission>;

/**
 * @name Dragon
 * @type OBJECT
 */
export type Dragon = TypeData<t_Dragon>;

/**
 * @name Distance
 * @type OBJECT
 */
export type Distance = TypeData<t_Distance>;

/**
 * @name Float
 * @type SCALAR
 */
export type Float = TypeData<t_Float>;

/**
 * @name DragonHeatShield
 * @type OBJECT
 */
export type DragonHeatShield = TypeData<t_DragonHeatShield>;

/**
 * @name Mass
 * @type OBJECT
 */
export type Mass = TypeData<t_Mass>;

/**
 * @name Volume
 * @type OBJECT
 */
export type Volume = TypeData<t_Volume>;

/**
 * @name DragonPressurizedCapsule
 * @type OBJECT
 */
export type DragonPressurizedCapsule = TypeData<t_DragonPressurizedCapsule>;

/**
 * @name DragonThrust
 * @type OBJECT
 */
export type DragonThrust = TypeData<t_DragonThrust>;

/**
 * @name Force
 * @type OBJECT
 */
export type Force = TypeData<t_Force>;

/**
 * @name DragonTrunk
 * @type OBJECT
 */
export type DragonTrunk = TypeData<t_DragonTrunk>;

/**
 * @name DragonTrunkCargo
 * @type OBJECT
 */
export type DragonTrunkCargo = TypeData<t_DragonTrunkCargo>;

/**
 * @name Info
 * @type OBJECT
 */
export type Info = TypeData<t_Info>;

/**
 * @name Address
 * @type OBJECT
 */
export type Address = TypeData<t_Address>;

/**
 * @name InfoLinks
 * @type OBJECT
 */
export type InfoLinks = TypeData<t_InfoLinks>;

/**
 * @name Core
 * @type OBJECT
 */
export type Core = TypeData<t_Core>;

/**
 * @name History
 * @type OBJECT
 */
export type History = TypeData<t_History>;

/**
 * @name Link
 * @type OBJECT
 */
export type Link = TypeData<t_Link>;

/**
 * @name Launch
 * @type OBJECT
 */
export type Launch = TypeData<t_Launch>;

/**
 * @name LaunchSite
 * @type OBJECT
 */
export type LaunchSite = TypeData<t_LaunchSite>;

/**
 * @name LaunchLinks
 * @type OBJECT
 */
export type LaunchLinks = TypeData<t_LaunchLinks>;

/**
 * @name LaunchRocket
 * @type OBJECT
 */
export type LaunchRocket = TypeData<t_LaunchRocket>;

/**
 * @name LaunchRocketFairings
 * @type OBJECT
 */
export type LaunchRocketFairings = TypeData<t_LaunchRocketFairings>;

/**
 * @name LaunchRocketFirstStage
 * @type OBJECT
 */
export type LaunchRocketFirstStage = TypeData<t_LaunchRocketFirstStage>;

/**
 * @name LaunchRocketFirstStageCore
 * @type OBJECT
 */
export type LaunchRocketFirstStageCore = TypeData<t_LaunchRocketFirstStageCore>;

/**
 * @name Rocket
 * @type OBJECT
 */
export type Rocket = TypeData<t_Rocket>;

/**
 * @name RocketEngines
 * @type OBJECT
 */
export type RocketEngines = TypeData<t_RocketEngines>;

/**
 * @name RocketFirstStage
 * @type OBJECT
 */
export type RocketFirstStage = TypeData<t_RocketFirstStage>;

/**
 * @name RocketLandingLegs
 * @type OBJECT
 */
export type RocketLandingLegs = TypeData<t_RocketLandingLegs>;

/**
 * @name RocketPayloadWeight
 * @type OBJECT
 */
export type RocketPayloadWeight = TypeData<t_RocketPayloadWeight>;

/**
 * @name RocketSecondStage
 * @type OBJECT
 */
export type RocketSecondStage = TypeData<t_RocketSecondStage>;

/**
 * @name RocketSecondStagePayloads
 * @type OBJECT
 */
export type RocketSecondStagePayloads = TypeData<t_RocketSecondStagePayloads>;

/**
 * @name RocketSecondStagePayloadCompositeFairing
 * @type OBJECT
 */
export type RocketSecondStagePayloadCompositeFairing = TypeData<
  t_RocketSecondStagePayloadCompositeFairing
>;

/**
 * @name LaunchRocketSecondStage
 * @type OBJECT
 */
export type LaunchRocketSecondStage = TypeData<t_LaunchRocketSecondStage>;

/**
 * @name Payload
 * @type OBJECT
 */
export type Payload = TypeData<t_Payload>;

/**
 * @name PayloadOrbitParams
 * @type OBJECT
 */
export type PayloadOrbitParams = TypeData<t_PayloadOrbitParams>;

/**
 * @name LaunchTelemetry
 * @type OBJECT
 */
export type LaunchTelemetry = TypeData<t_LaunchTelemetry>;

/**
 * @name Ship
 * @type OBJECT
 */
export type Ship = TypeData<t_Ship>;

/**
 * @name ShipMission
 * @type OBJECT
 */
export type ShipMission = TypeData<t_ShipMission>;

/**
 * @name ShipLocation
 * @type OBJECT
 */
export type ShipLocation = TypeData<t_ShipLocation>;

/**
 * @name HistoriesResult
 * @type OBJECT
 */
export type HistoriesResult = TypeData<t_HistoriesResult>;

/**
 * @name Result
 * @type OBJECT
 */
export type Result = TypeData<t_Result>;

/**
 * @name Landpad
 * @type OBJECT
 */
export type Landpad = TypeData<t_Landpad>;

/**
 * @name Location
 * @type OBJECT
 */
export type Location = TypeData<t_Location>;

/**
 * @name LaunchesPastResult
 * @type OBJECT
 */
export type LaunchesPastResult = TypeData<t_LaunchesPastResult>;

/**
 * @name Launchpad
 * @type OBJECT
 */
export type Launchpad = TypeData<t_Launchpad>;

/**
 * @name Mission
 * @type OBJECT
 */
export type Mission = TypeData<t_Mission>;

/**
 * @name MissionResult
 * @type OBJECT
 */
export type MissionResult = TypeData<t_MissionResult>;

/**
 * @name Roadster
 * @type OBJECT
 */
export type Roadster = TypeData<t_Roadster>;

/**
 * @name RocketsResult
 * @type OBJECT
 */
export type RocketsResult = TypeData<t_RocketsResult>;

/**
 * @name ShipsResult
 * @type OBJECT
 */
export type ShipsResult = TypeData<t_ShipsResult>;

/**
 * @name Mutation
 * @type OBJECT
 */
export type Mutation = TypeData<t_Mutation>;

/**
 * @name users_mutation_response
 * @type OBJECT
 */
export type users_mutation_response = TypeData<t_users_mutation_response>;

/**
 * @name users_constraint
 * @type ENUM
 */
export type users_constraint = TypeData<t_users_constraint>;

/**
 * @name users_update_column
 * @type ENUM
 */
export type users_update_column = TypeData<t_users_update_column>;

/**
 * @name Subscription
 * @type OBJECT
 */
export type Subscription = TypeData<t_Subscription>;

/**
 * @name __Schema
 * @type OBJECT
 */
export type __Schema = TypeData<t___Schema>;

/**
 * @name __Type
 * @type OBJECT
 */
export type __Type = TypeData<t___Type>;

/**
 * @name __TypeKind
 * @type ENUM
 */
export type __TypeKind = TypeData<t___TypeKind>;

/**
 * @name __Field
 * @type OBJECT
 */
export type __Field = TypeData<t___Field>;

/**
 * @name __InputValue
 * @type OBJECT
 */
export type __InputValue = TypeData<t___InputValue>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
export type __EnumValue = TypeData<t___EnumValue>;

/**
 * @name __Directive
 * @type OBJECT
 */
export type __Directive = TypeData<t___Directive>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
export type __DirectiveLocation = TypeData<t___DirectiveLocation>;

/**
 * @name conflict_action
 * @type ENUM
 */
export type conflict_action = TypeData<t_conflict_action>;

/**
 * @name ObjectID
 * @type SCALAR
 */
export type ObjectID = TypeData<t_ObjectID>;

/**
 * @name CoreMission
 * @type OBJECT
 */
export type CoreMission = TypeData<t_CoreMission>;
