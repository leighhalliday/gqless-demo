// @ts-nocheck
import * as extensions from "../extensions";
import { lazyGetters } from "@gqless/utils";
import {
  ObjectNode,
  FieldNode,
  ArrayNode,
  Arguments,
  ArgumentsField,
  EnumNode,
  ScalarNode,
  InputNode,
  InputNodeField
} from "gqless";

export const schema = {
  get Query() {
    return new ObjectNode(
      {
        get users() {
          return new FieldNode(
            new ArrayNode(schema.users, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.users_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.users_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.users_bool_exp, true);
              }
            }),
            false
          );
        },
        get users_aggregate() {
          return new FieldNode(
            schema.users_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.users_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.users_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.users_bool_exp, true);
              }
            }),
            false
          );
        },
        get users_by_pk() {
          return new FieldNode(
            schema.users,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                }
              },
              true
            ),
            true
          );
        },
        get capsules() {
          return new FieldNode(
            new ArrayNode(schema.Capsule, true),
            new Arguments({
              get find() {
                return new ArgumentsField(schema.CapsulesFind, true);
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order() {
                return new ArgumentsField(schema.String, true);
              },
              get sort() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        },
        get capsulesPast() {
          return new FieldNode(
            new ArrayNode(schema.Capsule, true),
            new Arguments({
              get find() {
                return new ArgumentsField(schema.CapsulesFind, true);
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order() {
                return new ArgumentsField(schema.String, true);
              },
              get sort() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        },
        get capsulesUpcoming() {
          return new FieldNode(
            new ArrayNode(schema.Capsule, true),
            new Arguments({
              get find() {
                return new ArgumentsField(schema.CapsulesFind, true);
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order() {
                return new ArgumentsField(schema.String, true);
              },
              get sort() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        },
        get capsule() {
          return new FieldNode(
            schema.Capsule,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                }
              },
              true
            ),
            true
          );
        },
        get company() {
          return new FieldNode(schema.Info, undefined, true);
        },
        get cores() {
          return new FieldNode(
            new ArrayNode(schema.Core, true),
            new Arguments({
              get find() {
                return new ArgumentsField(schema.CoresFind, true);
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order() {
                return new ArgumentsField(schema.String, true);
              },
              get sort() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        },
        get coresPast() {
          return new FieldNode(
            new ArrayNode(schema.Core, true),
            new Arguments({
              get find() {
                return new ArgumentsField(schema.CoresFind, true);
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order() {
                return new ArgumentsField(schema.String, true);
              },
              get sort() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        },
        get coresUpcoming() {
          return new FieldNode(
            new ArrayNode(schema.Core, true),
            new Arguments({
              get find() {
                return new ArgumentsField(schema.CoresFind, true);
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order() {
                return new ArgumentsField(schema.String, true);
              },
              get sort() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        },
        get core() {
          return new FieldNode(
            schema.Core,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                }
              },
              true
            ),
            true
          );
        },
        get dragons() {
          return new FieldNode(
            new ArrayNode(schema.Dragon, true),
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              }
            }),
            true
          );
        },
        get dragon() {
          return new FieldNode(
            schema.Dragon,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                }
              },
              true
            ),
            true
          );
        },
        get histories() {
          return new FieldNode(
            new ArrayNode(schema.History, true),
            new Arguments({
              get find() {
                return new ArgumentsField(schema.HistoryFind, true);
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order() {
                return new ArgumentsField(schema.String, true);
              },
              get sort() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        },
        get historiesResult() {
          return new FieldNode(
            schema.HistoriesResult,
            new Arguments({
              get find() {
                return new ArgumentsField(schema.HistoryFind, true);
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order() {
                return new ArgumentsField(schema.String, true);
              },
              get sort() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        },
        get history() {
          return new FieldNode(
            schema.History,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                }
              },
              true
            ),
            true
          );
        },
        get landpads() {
          return new FieldNode(
            new ArrayNode(schema.Landpad, true),
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              }
            }),
            true
          );
        },
        get landpad() {
          return new FieldNode(
            schema.Landpad,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                }
              },
              true
            ),
            true
          );
        },
        get launches() {
          return new FieldNode(
            new ArrayNode(schema.Launch, true),
            new Arguments({
              get find() {
                return new ArgumentsField(schema.LaunchFind, true);
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order() {
                return new ArgumentsField(schema.String, true);
              },
              get sort() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        },
        get launchesPast() {
          return new FieldNode(
            new ArrayNode(schema.Launch, true),
            new Arguments({
              get find() {
                return new ArgumentsField(schema.LaunchFind, true);
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order() {
                return new ArgumentsField(schema.String, true);
              },
              get sort() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        },
        get launchesPastResult() {
          return new FieldNode(
            schema.LaunchesPastResult,
            new Arguments({
              get find() {
                return new ArgumentsField(schema.LaunchFind, true);
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order() {
                return new ArgumentsField(schema.String, true);
              },
              get sort() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        },
        get launchesUpcoming() {
          return new FieldNode(
            new ArrayNode(schema.Launch, true),
            new Arguments({
              get find() {
                return new ArgumentsField(schema.LaunchFind, true);
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order() {
                return new ArgumentsField(schema.String, true);
              },
              get sort() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        },
        get launch() {
          return new FieldNode(
            schema.Launch,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                }
              },
              true
            ),
            true
          );
        },
        get launchLatest() {
          return new FieldNode(
            schema.Launch,
            new Arguments({
              get offset() {
                return new ArgumentsField(schema.Int, true);
              }
            }),
            true
          );
        },
        get launchNext() {
          return new FieldNode(
            schema.Launch,
            new Arguments({
              get offset() {
                return new ArgumentsField(schema.Int, true);
              }
            }),
            true
          );
        },
        get launchpads() {
          return new FieldNode(
            new ArrayNode(schema.Launchpad, true),
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              }
            }),
            true
          );
        },
        get launchpad() {
          return new FieldNode(
            schema.Launchpad,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                }
              },
              true
            ),
            true
          );
        },
        get missions() {
          return new FieldNode(
            new ArrayNode(schema.Mission, true),
            new Arguments({
              get find() {
                return new ArgumentsField(schema.MissionsFind, true);
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              }
            }),
            true
          );
        },
        get missionsResult() {
          return new FieldNode(
            schema.MissionResult,
            new Arguments({
              get find() {
                return new ArgumentsField(schema.MissionsFind, true);
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              }
            }),
            true
          );
        },
        get mission() {
          return new FieldNode(
            schema.Mission,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                }
              },
              true
            ),
            true
          );
        },
        get payloads() {
          return new FieldNode(
            new ArrayNode(schema.Payload, true),
            new Arguments({
              get find() {
                return new ArgumentsField(schema.PayloadsFind, true);
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order() {
                return new ArgumentsField(schema.String, true);
              },
              get sort() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        },
        get payload() {
          return new FieldNode(
            schema.Payload,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                }
              },
              true
            ),
            true
          );
        },
        get roadster() {
          return new FieldNode(schema.Roadster, undefined, true);
        },
        get rockets() {
          return new FieldNode(
            new ArrayNode(schema.Rocket, true),
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              }
            }),
            true
          );
        },
        get rocketsResult() {
          return new FieldNode(
            schema.RocketsResult,
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              }
            }),
            true
          );
        },
        get rocket() {
          return new FieldNode(
            schema.Rocket,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                }
              },
              true
            ),
            true
          );
        },
        get ships() {
          return new FieldNode(
            new ArrayNode(schema.Ship, true),
            new Arguments({
              get find() {
                return new ArgumentsField(schema.ShipsFind, true);
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order() {
                return new ArgumentsField(schema.String, true);
              },
              get sort() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        },
        get shipsResult() {
          return new FieldNode(
            schema.ShipsResult,
            new Arguments({
              get find() {
                return new ArgumentsField(schema.ShipsFind, true);
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order() {
                return new ArgumentsField(schema.String, true);
              },
              get sort() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        },
        get ship() {
          return new FieldNode(
            schema.Ship,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                }
              },
              true
            ),
            true
          );
        }
      },
      { name: "Query", extension: ((extensions as any) || {}).Query }
    );
  },
  get users_select_column() {
    return new EnumNode({ name: "users_select_column" });
  },
  get Int() {
    return new ScalarNode({
      name: "Int",
      extension: ((extensions as any) || {}).Int
    });
  },
  get users_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get rocket() {
          return new InputNodeField(schema.order_by, true);
        },
        get timestamp() {
          return new InputNodeField(schema.order_by, true);
        },
        get twitter() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "users_order_by" }
    );
  },
  get order_by() {
    return new EnumNode({ name: "order_by" });
  },
  get users_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.users_bool_exp, true),
            true
          );
        },
        get _not() {
          return new InputNodeField(schema.users_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.users_bool_exp, true),
            true
          );
        },
        get id() {
          return new InputNodeField(schema.uuid_comparison_exp, true);
        },
        get name() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get rocket() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get timestamp() {
          return new InputNodeField(schema.timestamptz_comparison_exp, true);
        },
        get twitter() {
          return new InputNodeField(schema.String_comparison_exp, true);
        }
      },
      { name: "users_bool_exp" }
    );
  },
  get uuid_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.uuid, true);
        },
        get _gt() {
          return new InputNodeField(schema.uuid, true);
        },
        get _gte() {
          return new InputNodeField(schema.uuid, true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema.uuid, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.uuid, true);
        },
        get _lte() {
          return new InputNodeField(schema.uuid, true);
        },
        get _neq() {
          return new InputNodeField(schema.uuid, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema.uuid, true), true);
        }
      },
      { name: "uuid_comparison_exp" }
    );
  },
  get uuid() {
    return new ScalarNode({
      name: "uuid",
      extension: ((extensions as any) || {}).uuid
    });
  },
  get Boolean() {
    return new ScalarNode({
      name: "Boolean",
      extension: ((extensions as any) || {}).Boolean
    });
  },
  get String_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.String, true);
        },
        get _gt() {
          return new InputNodeField(schema.String, true);
        },
        get _gte() {
          return new InputNodeField(schema.String, true);
        },
        get _ilike() {
          return new InputNodeField(schema.String, true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _like() {
          return new InputNodeField(schema.String, true);
        },
        get _lt() {
          return new InputNodeField(schema.String, true);
        },
        get _lte() {
          return new InputNodeField(schema.String, true);
        },
        get _neq() {
          return new InputNodeField(schema.String, true);
        },
        get _nilike() {
          return new InputNodeField(schema.String, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get _nlike() {
          return new InputNodeField(schema.String, true);
        },
        get _nsimilar() {
          return new InputNodeField(schema.String, true);
        },
        get _similar() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "String_comparison_exp" }
    );
  },
  get String() {
    return new ScalarNode({
      name: "String",
      extension: ((extensions as any) || {}).String
    });
  },
  get timestamptz_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.timestamptz, true);
        },
        get _gt() {
          return new InputNodeField(schema.timestamptz, true);
        },
        get _gte() {
          return new InputNodeField(schema.timestamptz, true);
        },
        get _in() {
          return new InputNodeField(
            new ArrayNode(schema.timestamptz, true),
            true
          );
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.timestamptz, true);
        },
        get _lte() {
          return new InputNodeField(schema.timestamptz, true);
        },
        get _neq() {
          return new InputNodeField(schema.timestamptz, true);
        },
        get _nin() {
          return new InputNodeField(
            new ArrayNode(schema.timestamptz, true),
            true
          );
        }
      },
      { name: "timestamptz_comparison_exp" }
    );
  },
  get timestamptz() {
    return new ScalarNode({
      name: "timestamptz",
      extension: ((extensions as any) || {}).timestamptz
    });
  },
  get users() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.uuid, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get rocket() {
          return new FieldNode(schema.String, undefined, true);
        },
        get timestamp() {
          return new FieldNode(schema.timestamptz, undefined, false);
        },
        get twitter() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "users", extension: ((extensions as any) || {}).users }
    );
  },
  get users_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(schema.users_aggregate_fields, undefined, true);
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.users, false),
            undefined,
            false
          );
        }
      },
      {
        name: "users_aggregate",
        extension: ((extensions as any) || {}).users_aggregate
      }
    );
  },
  get users_aggregate_fields() {
    return new ObjectNode(
      {
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.users_select_column, true),
                  true
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get max() {
          return new FieldNode(schema.users_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.users_min_fields, undefined, true);
        }
      },
      {
        name: "users_aggregate_fields",
        extension: ((extensions as any) || {}).users_aggregate_fields
      }
    );
  },
  get users_max_fields() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get rocket() {
          return new FieldNode(schema.String, undefined, true);
        },
        get timestamp() {
          return new FieldNode(schema.timestamptz, undefined, true);
        },
        get twitter() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "users_max_fields",
        extension: ((extensions as any) || {}).users_max_fields
      }
    );
  },
  get users_min_fields() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get rocket() {
          return new FieldNode(schema.String, undefined, true);
        },
        get timestamp() {
          return new FieldNode(schema.timestamptz, undefined, true);
        },
        get twitter() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "users_min_fields",
        extension: ((extensions as any) || {}).users_min_fields
      }
    );
  },
  get CapsulesFind() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.ID, true);
        },
        get landings() {
          return new InputNodeField(schema.Int, true);
        },
        get mission() {
          return new InputNodeField(schema.String, true);
        },
        get original_launch() {
          return new InputNodeField(schema.Date, true);
        },
        get reuse_count() {
          return new InputNodeField(schema.Int, true);
        },
        get status() {
          return new InputNodeField(schema.String, true);
        },
        get type() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "CapsulesFind" }
    );
  },
  get ID() {
    return new ScalarNode({
      name: "ID",
      extension: ((extensions as any) || {}).ID
    });
  },
  get Date() {
    return new ScalarNode({
      name: "Date",
      extension: ((extensions as any) || {}).Date
    });
  },
  get Capsule() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, true);
        },
        get landings() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get missions() {
          return new FieldNode(
            new ArrayNode(schema.CapsuleMission, true),
            undefined,
            true
          );
        },
        get original_launch() {
          return new FieldNode(schema.Date, undefined, true);
        },
        get reuse_count() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get status() {
          return new FieldNode(schema.String, undefined, true);
        },
        get type() {
          return new FieldNode(schema.String, undefined, true);
        },
        get dragon() {
          return new FieldNode(schema.Dragon, undefined, true);
        }
      },
      { name: "Capsule", extension: ((extensions as any) || {}).Capsule }
    );
  },
  get CapsuleMission() {
    return new ObjectNode(
      {
        get flight() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "CapsuleMission",
        extension: ((extensions as any) || {}).CapsuleMission
      }
    );
  },
  get Dragon() {
    return new ObjectNode(
      {
        get active() {
          return new FieldNode(schema.Boolean, undefined, true);
        },
        get crew_capacity() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get diameter() {
          return new FieldNode(schema.Distance, undefined, true);
        },
        get dry_mass_kg() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get dry_mass_lb() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get first_flight() {
          return new FieldNode(schema.String, undefined, true);
        },
        get heat_shield() {
          return new FieldNode(schema.DragonHeatShield, undefined, true);
        },
        get height_w_trunk() {
          return new FieldNode(schema.Distance, undefined, true);
        },
        get id() {
          return new FieldNode(schema.ID, undefined, true);
        },
        get launch_payload_mass() {
          return new FieldNode(schema.Mass, undefined, true);
        },
        get launch_payload_vol() {
          return new FieldNode(schema.Volume, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get orbit_duration_yr() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get pressurized_capsule() {
          return new FieldNode(
            schema.DragonPressurizedCapsule,
            undefined,
            true
          );
        },
        get return_payload_mass() {
          return new FieldNode(schema.Mass, undefined, true);
        },
        get return_payload_vol() {
          return new FieldNode(schema.Volume, undefined, true);
        },
        get sidewall_angle_deg() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get thrusters() {
          return new FieldNode(
            new ArrayNode(schema.DragonThrust, true),
            undefined,
            true
          );
        },
        get trunk() {
          return new FieldNode(schema.DragonTrunk, undefined, true);
        },
        get type() {
          return new FieldNode(schema.String, undefined, true);
        },
        get wikipedia() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "Dragon", extension: ((extensions as any) || {}).Dragon }
    );
  },
  get Distance() {
    return new ObjectNode(
      {
        get feet() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get meters() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      { name: "Distance", extension: ((extensions as any) || {}).Distance }
    );
  },
  get Float() {
    return new ScalarNode({
      name: "Float",
      extension: ((extensions as any) || {}).Float
    });
  },
  get DragonHeatShield() {
    return new ObjectNode(
      {
        get dev_partner() {
          return new FieldNode(schema.String, undefined, true);
        },
        get material() {
          return new FieldNode(schema.String, undefined, true);
        },
        get size_meters() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get temp_degrees() {
          return new FieldNode(schema.Int, undefined, true);
        }
      },
      {
        name: "DragonHeatShield",
        extension: ((extensions as any) || {}).DragonHeatShield
      }
    );
  },
  get Mass() {
    return new ObjectNode(
      {
        get kg() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get lb() {
          return new FieldNode(schema.Int, undefined, true);
        }
      },
      { name: "Mass", extension: ((extensions as any) || {}).Mass }
    );
  },
  get Volume() {
    return new ObjectNode(
      {
        get cubic_feet() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get cubic_meters() {
          return new FieldNode(schema.Int, undefined, true);
        }
      },
      { name: "Volume", extension: ((extensions as any) || {}).Volume }
    );
  },
  get DragonPressurizedCapsule() {
    return new ObjectNode(
      {
        get payload_volume() {
          return new FieldNode(schema.Volume, undefined, true);
        }
      },
      {
        name: "DragonPressurizedCapsule",
        extension: ((extensions as any) || {}).DragonPressurizedCapsule
      }
    );
  },
  get DragonThrust() {
    return new ObjectNode(
      {
        get amount() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get fuel_1() {
          return new FieldNode(schema.String, undefined, true);
        },
        get fuel_2() {
          return new FieldNode(schema.String, undefined, true);
        },
        get pods() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get thrust() {
          return new FieldNode(schema.Force, undefined, true);
        },
        get type() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "DragonThrust",
        extension: ((extensions as any) || {}).DragonThrust
      }
    );
  },
  get Force() {
    return new ObjectNode(
      {
        get kN() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get lbf() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      { name: "Force", extension: ((extensions as any) || {}).Force }
    );
  },
  get DragonTrunk() {
    return new ObjectNode(
      {
        get cargo() {
          return new FieldNode(schema.DragonTrunkCargo, undefined, true);
        },
        get trunk_volume() {
          return new FieldNode(schema.Volume, undefined, true);
        }
      },
      {
        name: "DragonTrunk",
        extension: ((extensions as any) || {}).DragonTrunk
      }
    );
  },
  get DragonTrunkCargo() {
    return new ObjectNode(
      {
        get solar_array() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get unpressurized_cargo() {
          return new FieldNode(schema.Boolean, undefined, true);
        }
      },
      {
        name: "DragonTrunkCargo",
        extension: ((extensions as any) || {}).DragonTrunkCargo
      }
    );
  },
  get Info() {
    return new ObjectNode(
      {
        get ceo() {
          return new FieldNode(schema.String, undefined, true);
        },
        get coo() {
          return new FieldNode(schema.String, undefined, true);
        },
        get cto_propulsion() {
          return new FieldNode(schema.String, undefined, true);
        },
        get cto() {
          return new FieldNode(schema.String, undefined, true);
        },
        get employees() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get founded() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get founder() {
          return new FieldNode(schema.String, undefined, true);
        },
        get headquarters() {
          return new FieldNode(schema.Address, undefined, true);
        },
        get launch_sites() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get links() {
          return new FieldNode(schema.InfoLinks, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get summary() {
          return new FieldNode(schema.String, undefined, true);
        },
        get test_sites() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get valuation() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get vehicles() {
          return new FieldNode(schema.Int, undefined, true);
        }
      },
      { name: "Info", extension: ((extensions as any) || {}).Info }
    );
  },
  get Address() {
    return new ObjectNode(
      {
        get address() {
          return new FieldNode(schema.String, undefined, true);
        },
        get city() {
          return new FieldNode(schema.String, undefined, true);
        },
        get state() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "Address", extension: ((extensions as any) || {}).Address }
    );
  },
  get InfoLinks() {
    return new ObjectNode(
      {
        get elon_twitter() {
          return new FieldNode(schema.String, undefined, true);
        },
        get flickr() {
          return new FieldNode(schema.String, undefined, true);
        },
        get twitter() {
          return new FieldNode(schema.String, undefined, true);
        },
        get website() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "InfoLinks", extension: ((extensions as any) || {}).InfoLinks }
    );
  },
  get CoresFind() {
    return new InputNode(
      {
        get asds_attempts() {
          return new InputNodeField(schema.Int, true);
        },
        get asds_landings() {
          return new InputNodeField(schema.Int, true);
        },
        get block() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.String, true);
        },
        get missions() {
          return new InputNodeField(schema.String, true);
        },
        get original_launch() {
          return new InputNodeField(schema.Date, true);
        },
        get reuse_count() {
          return new InputNodeField(schema.Int, true);
        },
        get rtls_attempts() {
          return new InputNodeField(schema.Int, true);
        },
        get rtls_landings() {
          return new InputNodeField(schema.Int, true);
        },
        get status() {
          return new InputNodeField(schema.String, true);
        },
        get water_landing() {
          return new InputNodeField(schema.Boolean, true);
        }
      },
      { name: "CoresFind" }
    );
  },
  get Core() {
    return new ObjectNode(
      {
        get asds_attempts() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get asds_landings() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get block() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.ID, undefined, true);
        },
        get missions() {
          return new FieldNode(
            new ArrayNode(schema.CapsuleMission, true),
            undefined,
            true
          );
        },
        get original_launch() {
          return new FieldNode(schema.Date, undefined, true);
        },
        get reuse_count() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get rtls_attempts() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get rtls_landings() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get status() {
          return new FieldNode(schema.String, undefined, true);
        },
        get water_landing() {
          return new FieldNode(schema.Boolean, undefined, true);
        }
      },
      { name: "Core", extension: ((extensions as any) || {}).Core }
    );
  },
  get HistoryFind() {
    return new InputNode(
      {
        get end() {
          return new InputNodeField(schema.Date, true);
        },
        get flight_number() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.ID, true);
        },
        get start() {
          return new InputNodeField(schema.Date, true);
        }
      },
      { name: "HistoryFind" }
    );
  },
  get History() {
    return new ObjectNode(
      {
        get details() {
          return new FieldNode(schema.String, undefined, true);
        },
        get event_date_unix() {
          return new FieldNode(schema.Date, undefined, true);
        },
        get event_date_utc() {
          return new FieldNode(schema.Date, undefined, true);
        },
        get id() {
          return new FieldNode(schema.ID, undefined, true);
        },
        get links() {
          return new FieldNode(schema.Link, undefined, true);
        },
        get title() {
          return new FieldNode(schema.String, undefined, true);
        },
        get flight() {
          return new FieldNode(schema.Launch, undefined, true);
        }
      },
      { name: "History", extension: ((extensions as any) || {}).History }
    );
  },
  get Link() {
    return new ObjectNode(
      {
        get article() {
          return new FieldNode(schema.String, undefined, true);
        },
        get reddit() {
          return new FieldNode(schema.String, undefined, true);
        },
        get wikipedia() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "Link", extension: ((extensions as any) || {}).Link }
    );
  },
  get Launch() {
    return new ObjectNode(
      {
        get details() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.ID, undefined, true);
        },
        get is_tentative() {
          return new FieldNode(schema.Boolean, undefined, true);
        },
        get launch_date_local() {
          return new FieldNode(schema.Date, undefined, true);
        },
        get launch_date_unix() {
          return new FieldNode(schema.Date, undefined, true);
        },
        get launch_date_utc() {
          return new FieldNode(schema.Date, undefined, true);
        },
        get launch_site() {
          return new FieldNode(schema.LaunchSite, undefined, true);
        },
        get launch_success() {
          return new FieldNode(schema.Boolean, undefined, true);
        },
        get launch_year() {
          return new FieldNode(schema.String, undefined, true);
        },
        get links() {
          return new FieldNode(schema.LaunchLinks, undefined, true);
        },
        get mission_id() {
          return new FieldNode(
            new ArrayNode(schema.String, true),
            undefined,
            true
          );
        },
        get mission_name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get rocket() {
          return new FieldNode(schema.LaunchRocket, undefined, true);
        },
        get static_fire_date_unix() {
          return new FieldNode(schema.Date, undefined, true);
        },
        get static_fire_date_utc() {
          return new FieldNode(schema.Date, undefined, true);
        },
        get telemetry() {
          return new FieldNode(schema.LaunchTelemetry, undefined, true);
        },
        get tentative_max_precision() {
          return new FieldNode(schema.String, undefined, true);
        },
        get upcoming() {
          return new FieldNode(schema.Boolean, undefined, true);
        },
        get ships() {
          return new FieldNode(
            new ArrayNode(schema.Ship, true),
            undefined,
            true
          );
        }
      },
      { name: "Launch", extension: ((extensions as any) || {}).Launch }
    );
  },
  get LaunchSite() {
    return new ObjectNode(
      {
        get site_id() {
          return new FieldNode(schema.String, undefined, true);
        },
        get site_name_long() {
          return new FieldNode(schema.String, undefined, true);
        },
        get site_name() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "LaunchSite", extension: ((extensions as any) || {}).LaunchSite }
    );
  },
  get LaunchLinks() {
    return new ObjectNode(
      {
        get article_link() {
          return new FieldNode(schema.String, undefined, true);
        },
        get flickr_images() {
          return new FieldNode(
            new ArrayNode(schema.String, true),
            undefined,
            true
          );
        },
        get mission_patch_small() {
          return new FieldNode(schema.String, undefined, true);
        },
        get mission_patch() {
          return new FieldNode(schema.String, undefined, true);
        },
        get presskit() {
          return new FieldNode(schema.String, undefined, true);
        },
        get reddit_campaign() {
          return new FieldNode(schema.String, undefined, true);
        },
        get reddit_launch() {
          return new FieldNode(schema.String, undefined, true);
        },
        get reddit_media() {
          return new FieldNode(schema.String, undefined, true);
        },
        get reddit_recovery() {
          return new FieldNode(schema.String, undefined, true);
        },
        get video_link() {
          return new FieldNode(schema.String, undefined, true);
        },
        get wikipedia() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "LaunchLinks",
        extension: ((extensions as any) || {}).LaunchLinks
      }
    );
  },
  get LaunchRocket() {
    return new ObjectNode(
      {
        get fairings() {
          return new FieldNode(schema.LaunchRocketFairings, undefined, true);
        },
        get first_stage() {
          return new FieldNode(schema.LaunchRocketFirstStage, undefined, true);
        },
        get rocket_name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get rocket_type() {
          return new FieldNode(schema.String, undefined, true);
        },
        get rocket() {
          return new FieldNode(schema.Rocket, undefined, true);
        },
        get second_stage() {
          return new FieldNode(schema.LaunchRocketSecondStage, undefined, true);
        }
      },
      {
        name: "LaunchRocket",
        extension: ((extensions as any) || {}).LaunchRocket
      }
    );
  },
  get LaunchRocketFairings() {
    return new ObjectNode(
      {
        get recovered() {
          return new FieldNode(schema.Boolean, undefined, true);
        },
        get recovery_attempt() {
          return new FieldNode(schema.Boolean, undefined, true);
        },
        get reused() {
          return new FieldNode(schema.Boolean, undefined, true);
        },
        get ship() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "LaunchRocketFairings",
        extension: ((extensions as any) || {}).LaunchRocketFairings
      }
    );
  },
  get LaunchRocketFirstStage() {
    return new ObjectNode(
      {
        get cores() {
          return new FieldNode(
            new ArrayNode(schema.LaunchRocketFirstStageCore, true),
            undefined,
            true
          );
        }
      },
      {
        name: "LaunchRocketFirstStage",
        extension: ((extensions as any) || {}).LaunchRocketFirstStage
      }
    );
  },
  get LaunchRocketFirstStageCore() {
    return new ObjectNode(
      {
        get block() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get core() {
          return new FieldNode(schema.Core, undefined, true);
        },
        get flight() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get gridfins() {
          return new FieldNode(schema.Boolean, undefined, true);
        },
        get land_success() {
          return new FieldNode(schema.Boolean, undefined, true);
        },
        get landing_intent() {
          return new FieldNode(schema.Boolean, undefined, true);
        },
        get landing_type() {
          return new FieldNode(schema.String, undefined, true);
        },
        get landing_vehicle() {
          return new FieldNode(schema.String, undefined, true);
        },
        get legs() {
          return new FieldNode(schema.Boolean, undefined, true);
        },
        get reused() {
          return new FieldNode(schema.Boolean, undefined, true);
        }
      },
      {
        name: "LaunchRocketFirstStageCore",
        extension: ((extensions as any) || {}).LaunchRocketFirstStageCore
      }
    );
  },
  get Rocket() {
    return new ObjectNode(
      {
        get active() {
          return new FieldNode(schema.Boolean, undefined, true);
        },
        get boosters() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get company() {
          return new FieldNode(schema.String, undefined, true);
        },
        get cost_per_launch() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get country() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get diameter() {
          return new FieldNode(schema.Distance, undefined, true);
        },
        get engines() {
          return new FieldNode(schema.RocketEngines, undefined, true);
        },
        get first_flight() {
          return new FieldNode(schema.Date, undefined, true);
        },
        get first_stage() {
          return new FieldNode(schema.RocketFirstStage, undefined, true);
        },
        get height() {
          return new FieldNode(schema.Distance, undefined, true);
        },
        get id() {
          return new FieldNode(schema.ID, undefined, true);
        },
        get landing_legs() {
          return new FieldNode(schema.RocketLandingLegs, undefined, true);
        },
        get mass() {
          return new FieldNode(schema.Mass, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get payload_weights() {
          return new FieldNode(
            new ArrayNode(schema.RocketPayloadWeight, true),
            undefined,
            true
          );
        },
        get second_stage() {
          return new FieldNode(schema.RocketSecondStage, undefined, true);
        },
        get stages() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get success_rate_pct() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get type() {
          return new FieldNode(schema.String, undefined, true);
        },
        get wikipedia() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "Rocket", extension: ((extensions as any) || {}).Rocket }
    );
  },
  get RocketEngines() {
    return new ObjectNode(
      {
        get number() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get type() {
          return new FieldNode(schema.String, undefined, true);
        },
        get version() {
          return new FieldNode(schema.String, undefined, true);
        },
        get layout() {
          return new FieldNode(schema.String, undefined, true);
        },
        get engine_loss_max() {
          return new FieldNode(schema.String, undefined, true);
        },
        get propellant_1() {
          return new FieldNode(schema.String, undefined, true);
        },
        get propellant_2() {
          return new FieldNode(schema.String, undefined, true);
        },
        get thrust_sea_level() {
          return new FieldNode(schema.Force, undefined, true);
        },
        get thrust_vacuum() {
          return new FieldNode(schema.Force, undefined, true);
        },
        get thrust_to_weight() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "RocketEngines",
        extension: ((extensions as any) || {}).RocketEngines
      }
    );
  },
  get RocketFirstStage() {
    return new ObjectNode(
      {
        get burn_time_sec() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get engines() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get fuel_amount_tons() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get reusable() {
          return new FieldNode(schema.Boolean, undefined, true);
        },
        get thrust_sea_level() {
          return new FieldNode(schema.Force, undefined, true);
        },
        get thrust_vacuum() {
          return new FieldNode(schema.Force, undefined, true);
        }
      },
      {
        name: "RocketFirstStage",
        extension: ((extensions as any) || {}).RocketFirstStage
      }
    );
  },
  get RocketLandingLegs() {
    return new ObjectNode(
      {
        get number() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get material() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "RocketLandingLegs",
        extension: ((extensions as any) || {}).RocketLandingLegs
      }
    );
  },
  get RocketPayloadWeight() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.String, undefined, true);
        },
        get kg() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get lb() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "RocketPayloadWeight",
        extension: ((extensions as any) || {}).RocketPayloadWeight
      }
    );
  },
  get RocketSecondStage() {
    return new ObjectNode(
      {
        get burn_time_sec() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get engines() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get fuel_amount_tons() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get payloads() {
          return new FieldNode(
            schema.RocketSecondStagePayloads,
            undefined,
            true
          );
        },
        get thrust() {
          return new FieldNode(schema.Force, undefined, true);
        }
      },
      {
        name: "RocketSecondStage",
        extension: ((extensions as any) || {}).RocketSecondStage
      }
    );
  },
  get RocketSecondStagePayloads() {
    return new ObjectNode(
      {
        get option_1() {
          return new FieldNode(schema.String, undefined, true);
        },
        get composite_fairing() {
          return new FieldNode(
            schema.RocketSecondStagePayloadCompositeFairing,
            undefined,
            true
          );
        }
      },
      {
        name: "RocketSecondStagePayloads",
        extension: ((extensions as any) || {}).RocketSecondStagePayloads
      }
    );
  },
  get RocketSecondStagePayloadCompositeFairing() {
    return new ObjectNode(
      {
        get height() {
          return new FieldNode(schema.Distance, undefined, true);
        },
        get diameter() {
          return new FieldNode(schema.Distance, undefined, true);
        }
      },
      {
        name: "RocketSecondStagePayloadCompositeFairing",
        extension: ((extensions as any) || {})
          .RocketSecondStagePayloadCompositeFairing
      }
    );
  },
  get LaunchRocketSecondStage() {
    return new ObjectNode(
      {
        get block() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get payloads() {
          return new FieldNode(
            new ArrayNode(schema.Payload, true),
            undefined,
            true
          );
        }
      },
      {
        name: "LaunchRocketSecondStage",
        extension: ((extensions as any) || {}).LaunchRocketSecondStage
      }
    );
  },
  get Payload() {
    return new ObjectNode(
      {
        get customers() {
          return new FieldNode(
            new ArrayNode(schema.String, true),
            undefined,
            true
          );
        },
        get id() {
          return new FieldNode(schema.ID, undefined, true);
        },
        get manufacturer() {
          return new FieldNode(schema.String, undefined, true);
        },
        get nationality() {
          return new FieldNode(schema.String, undefined, true);
        },
        get norad_id() {
          return new FieldNode(
            new ArrayNode(schema.Int, true),
            undefined,
            true
          );
        },
        get orbit_params() {
          return new FieldNode(schema.PayloadOrbitParams, undefined, true);
        },
        get orbit() {
          return new FieldNode(schema.String, undefined, true);
        },
        get payload_mass_kg() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get payload_mass_lbs() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get payload_type() {
          return new FieldNode(schema.String, undefined, true);
        },
        get reused() {
          return new FieldNode(schema.Boolean, undefined, true);
        }
      },
      { name: "Payload", extension: ((extensions as any) || {}).Payload }
    );
  },
  get PayloadOrbitParams() {
    return new ObjectNode(
      {
        get apoapsis_km() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get arg_of_pericenter() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get eccentricity() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get epoch() {
          return new FieldNode(schema.Date, undefined, true);
        },
        get inclination_deg() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get lifespan_years() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get mean_anomaly() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get mean_motion() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get periapsis_km() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get period_min() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get raan() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get reference_system() {
          return new FieldNode(schema.String, undefined, true);
        },
        get regime() {
          return new FieldNode(schema.String, undefined, true);
        },
        get semi_major_axis_km() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "PayloadOrbitParams",
        extension: ((extensions as any) || {}).PayloadOrbitParams
      }
    );
  },
  get LaunchTelemetry() {
    return new ObjectNode(
      {
        get flight_club() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "LaunchTelemetry",
        extension: ((extensions as any) || {}).LaunchTelemetry
      }
    );
  },
  get Ship() {
    return new ObjectNode(
      {
        get abs() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get active() {
          return new FieldNode(schema.Boolean, undefined, true);
        },
        get attempted_landings() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get class() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get course_deg() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get home_port() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.ID, undefined, true);
        },
        get image() {
          return new FieldNode(schema.String, undefined, true);
        },
        get imo() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get missions() {
          return new FieldNode(
            new ArrayNode(schema.ShipMission, true),
            undefined,
            true
          );
        },
        get mmsi() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get model() {
          return new FieldNode(schema.String, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get position() {
          return new FieldNode(schema.ShipLocation, undefined, true);
        },
        get roles() {
          return new FieldNode(
            new ArrayNode(schema.String, true),
            undefined,
            true
          );
        },
        get speed_kn() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get status() {
          return new FieldNode(schema.String, undefined, true);
        },
        get successful_landings() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get type() {
          return new FieldNode(schema.String, undefined, true);
        },
        get url() {
          return new FieldNode(schema.String, undefined, true);
        },
        get weight_kg() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get weight_lbs() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get year_built() {
          return new FieldNode(schema.Int, undefined, true);
        }
      },
      { name: "Ship", extension: ((extensions as any) || {}).Ship }
    );
  },
  get ShipMission() {
    return new ObjectNode(
      {
        get flight() {
          return new FieldNode(schema.String, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "ShipMission",
        extension: ((extensions as any) || {}).ShipMission
      }
    );
  },
  get ShipLocation() {
    return new ObjectNode(
      {
        get latitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.Float, undefined, true);
        }
      },
      {
        name: "ShipLocation",
        extension: ((extensions as any) || {}).ShipLocation
      }
    );
  },
  get HistoriesResult() {
    return new ObjectNode(
      {
        get result() {
          return new FieldNode(schema.Result, undefined, true);
        },
        get data() {
          return new FieldNode(
            new ArrayNode(schema.History, true),
            undefined,
            true
          );
        }
      },
      {
        name: "HistoriesResult",
        extension: ((extensions as any) || {}).HistoriesResult
      }
    );
  },
  get Result() {
    return new ObjectNode(
      {
        get totalCount() {
          return new FieldNode(schema.Int, undefined, true);
        }
      },
      { name: "Result", extension: ((extensions as any) || {}).Result }
    );
  },
  get Landpad() {
    return new ObjectNode(
      {
        get attempted_landings() {
          return new FieldNode(schema.String, undefined, true);
        },
        get details() {
          return new FieldNode(schema.String, undefined, true);
        },
        get full_name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.ID, undefined, true);
        },
        get landing_type() {
          return new FieldNode(schema.String, undefined, true);
        },
        get location() {
          return new FieldNode(schema.Location, undefined, true);
        },
        get status() {
          return new FieldNode(schema.String, undefined, true);
        },
        get successful_landings() {
          return new FieldNode(schema.String, undefined, true);
        },
        get wikipedia() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "Landpad", extension: ((extensions as any) || {}).Landpad }
    );
  },
  get Location() {
    return new ObjectNode(
      {
        get latitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get region() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "Location", extension: ((extensions as any) || {}).Location }
    );
  },
  get LaunchFind() {
    return new InputNode(
      {
        get apoapsis_km() {
          return new InputNodeField(schema.Float, true);
        },
        get block() {
          return new InputNodeField(schema.Int, true);
        },
        get cap_serial() {
          return new InputNodeField(schema.String, true);
        },
        get capsule_reuse() {
          return new InputNodeField(schema.String, true);
        },
        get core_flight() {
          return new InputNodeField(schema.Int, true);
        },
        get core_reuse() {
          return new InputNodeField(schema.String, true);
        },
        get core_serial() {
          return new InputNodeField(schema.String, true);
        },
        get customer() {
          return new InputNodeField(schema.String, true);
        },
        get eccentricity() {
          return new InputNodeField(schema.Float, true);
        },
        get end() {
          return new InputNodeField(schema.Date, true);
        },
        get epoch() {
          return new InputNodeField(schema.Date, true);
        },
        get fairings_recovered() {
          return new InputNodeField(schema.String, true);
        },
        get fairings_recovery_attempt() {
          return new InputNodeField(schema.String, true);
        },
        get fairings_reuse() {
          return new InputNodeField(schema.String, true);
        },
        get fairings_reused() {
          return new InputNodeField(schema.String, true);
        },
        get fairings_ship() {
          return new InputNodeField(schema.String, true);
        },
        get gridfins() {
          return new InputNodeField(schema.String, true);
        },
        get id() {
          return new InputNodeField(schema.ID, true);
        },
        get inclination_deg() {
          return new InputNodeField(schema.Float, true);
        },
        get land_success() {
          return new InputNodeField(schema.String, true);
        },
        get landing_intent() {
          return new InputNodeField(schema.String, true);
        },
        get landing_type() {
          return new InputNodeField(schema.String, true);
        },
        get landing_vehicle() {
          return new InputNodeField(schema.String, true);
        },
        get launch_date_local() {
          return new InputNodeField(schema.Date, true);
        },
        get launch_date_utc() {
          return new InputNodeField(schema.Date, true);
        },
        get launch_success() {
          return new InputNodeField(schema.String, true);
        },
        get launch_year() {
          return new InputNodeField(schema.String, true);
        },
        get legs() {
          return new InputNodeField(schema.String, true);
        },
        get lifespan_years() {
          return new InputNodeField(schema.Float, true);
        },
        get longitude() {
          return new InputNodeField(schema.Float, true);
        },
        get manufacturer() {
          return new InputNodeField(schema.String, true);
        },
        get mean_motion() {
          return new InputNodeField(schema.Float, true);
        },
        get mission_id() {
          return new InputNodeField(schema.String, true);
        },
        get mission_name() {
          return new InputNodeField(schema.String, true);
        },
        get nationality() {
          return new InputNodeField(schema.String, true);
        },
        get norad_id() {
          return new InputNodeField(schema.Int, true);
        },
        get orbit() {
          return new InputNodeField(schema.String, true);
        },
        get payload_id() {
          return new InputNodeField(schema.String, true);
        },
        get payload_type() {
          return new InputNodeField(schema.String, true);
        },
        get periapsis_km() {
          return new InputNodeField(schema.Float, true);
        },
        get period_min() {
          return new InputNodeField(schema.Float, true);
        },
        get raan() {
          return new InputNodeField(schema.Float, true);
        },
        get reference_system() {
          return new InputNodeField(schema.String, true);
        },
        get regime() {
          return new InputNodeField(schema.String, true);
        },
        get reused() {
          return new InputNodeField(schema.String, true);
        },
        get rocket_id() {
          return new InputNodeField(schema.String, true);
        },
        get rocket_name() {
          return new InputNodeField(schema.String, true);
        },
        get rocket_type() {
          return new InputNodeField(schema.String, true);
        },
        get second_stage_block() {
          return new InputNodeField(schema.String, true);
        },
        get semi_major_axis_km() {
          return new InputNodeField(schema.Float, true);
        },
        get ship() {
          return new InputNodeField(schema.String, true);
        },
        get side_core1_reuse() {
          return new InputNodeField(schema.String, true);
        },
        get side_core2_reuse() {
          return new InputNodeField(schema.String, true);
        },
        get site_id() {
          return new InputNodeField(schema.String, true);
        },
        get site_name_long() {
          return new InputNodeField(schema.String, true);
        },
        get site_name() {
          return new InputNodeField(schema.String, true);
        },
        get start() {
          return new InputNodeField(schema.Date, true);
        },
        get tbd() {
          return new InputNodeField(schema.String, true);
        },
        get tentative_max_precision() {
          return new InputNodeField(schema.String, true);
        },
        get tentative() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "LaunchFind" }
    );
  },
  get LaunchesPastResult() {
    return new ObjectNode(
      {
        get result() {
          return new FieldNode(schema.Result, undefined, true);
        },
        get data() {
          return new FieldNode(
            new ArrayNode(schema.Launch, true),
            undefined,
            true
          );
        }
      },
      {
        name: "LaunchesPastResult",
        extension: ((extensions as any) || {}).LaunchesPastResult
      }
    );
  },
  get Launchpad() {
    return new ObjectNode(
      {
        get attempted_launches() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get details() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.ID, undefined, true);
        },
        get location() {
          return new FieldNode(schema.Location, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get status() {
          return new FieldNode(schema.String, undefined, true);
        },
        get successful_launches() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get vehicles_launched() {
          return new FieldNode(
            new ArrayNode(schema.Rocket, true),
            undefined,
            true
          );
        },
        get wikipedia() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "Launchpad", extension: ((extensions as any) || {}).Launchpad }
    );
  },
  get MissionsFind() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.ID, true);
        },
        get manufacturer() {
          return new InputNodeField(schema.String, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get payload_id() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "MissionsFind" }
    );
  },
  get Mission() {
    return new ObjectNode(
      {
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.ID, undefined, true);
        },
        get manufacturers() {
          return new FieldNode(
            new ArrayNode(schema.String, true),
            undefined,
            true
          );
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get twitter() {
          return new FieldNode(schema.String, undefined, true);
        },
        get website() {
          return new FieldNode(schema.String, undefined, true);
        },
        get wikipedia() {
          return new FieldNode(schema.String, undefined, true);
        },
        get payloads() {
          return new FieldNode(
            new ArrayNode(schema.Payload, true),
            undefined,
            true
          );
        }
      },
      { name: "Mission", extension: ((extensions as any) || {}).Mission }
    );
  },
  get MissionResult() {
    return new ObjectNode(
      {
        get result() {
          return new FieldNode(schema.Result, undefined, true);
        },
        get data() {
          return new FieldNode(
            new ArrayNode(schema.Mission, true),
            undefined,
            true
          );
        }
      },
      {
        name: "MissionResult",
        extension: ((extensions as any) || {}).MissionResult
      }
    );
  },
  get PayloadsFind() {
    return new InputNode(
      {
        get apoapsis_km() {
          return new InputNodeField(schema.Float, true);
        },
        get customer() {
          return new InputNodeField(schema.String, true);
        },
        get eccentricity() {
          return new InputNodeField(schema.Float, true);
        },
        get epoch() {
          return new InputNodeField(schema.Date, true);
        },
        get inclination_deg() {
          return new InputNodeField(schema.Float, true);
        },
        get lifespan_years() {
          return new InputNodeField(schema.Float, true);
        },
        get longitude() {
          return new InputNodeField(schema.Float, true);
        },
        get manufacturer() {
          return new InputNodeField(schema.String, true);
        },
        get mean_motion() {
          return new InputNodeField(schema.Float, true);
        },
        get nationality() {
          return new InputNodeField(schema.String, true);
        },
        get norad_id() {
          return new InputNodeField(schema.Int, true);
        },
        get orbit() {
          return new InputNodeField(schema.String, true);
        },
        get payload_id() {
          return new InputNodeField(schema.ID, true);
        },
        get payload_type() {
          return new InputNodeField(schema.String, true);
        },
        get periapsis_km() {
          return new InputNodeField(schema.Float, true);
        },
        get period_min() {
          return new InputNodeField(schema.Float, true);
        },
        get raan() {
          return new InputNodeField(schema.Float, true);
        },
        get reference_system() {
          return new InputNodeField(schema.String, true);
        },
        get regime() {
          return new InputNodeField(schema.String, true);
        },
        get reused() {
          return new InputNodeField(schema.Boolean, true);
        },
        get semi_major_axis_km() {
          return new InputNodeField(schema.Float, true);
        }
      },
      { name: "PayloadsFind" }
    );
  },
  get Roadster() {
    return new ObjectNode(
      {
        get apoapsis_au() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get details() {
          return new FieldNode(schema.String, undefined, true);
        },
        get earth_distance_km() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get earth_distance_mi() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get eccentricity() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get epoch_jd() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get inclination() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get launch_date_unix() {
          return new FieldNode(schema.Date, undefined, true);
        },
        get launch_date_utc() {
          return new FieldNode(schema.Date, undefined, true);
        },
        get launch_mass_kg() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get launch_mass_lbs() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get mars_distance_km() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get mars_distance_mi() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get norad_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get orbit_type() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get periapsis_arg() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get periapsis_au() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get period_days() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get semi_major_axis_au() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get speed_kph() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get speed_mph() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get wikipedia() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "Roadster", extension: ((extensions as any) || {}).Roadster }
    );
  },
  get RocketsResult() {
    return new ObjectNode(
      {
        get result() {
          return new FieldNode(schema.Result, undefined, true);
        },
        get data() {
          return new FieldNode(
            new ArrayNode(schema.Rocket, true),
            undefined,
            true
          );
        }
      },
      {
        name: "RocketsResult",
        extension: ((extensions as any) || {}).RocketsResult
      }
    );
  },
  get ShipsFind() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.ID, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get model() {
          return new InputNodeField(schema.String, true);
        },
        get type() {
          return new InputNodeField(schema.String, true);
        },
        get role() {
          return new InputNodeField(schema.String, true);
        },
        get active() {
          return new InputNodeField(schema.Boolean, true);
        },
        get imo() {
          return new InputNodeField(schema.Int, true);
        },
        get mmsi() {
          return new InputNodeField(schema.Int, true);
        },
        get abs() {
          return new InputNodeField(schema.Int, true);
        },
        get class() {
          return new InputNodeField(schema.Int, true);
        },
        get weight_lbs() {
          return new InputNodeField(schema.Int, true);
        },
        get weight_kg() {
          return new InputNodeField(schema.Int, true);
        },
        get year_built() {
          return new InputNodeField(schema.Int, true);
        },
        get home_port() {
          return new InputNodeField(schema.String, true);
        },
        get status() {
          return new InputNodeField(schema.String, true);
        },
        get speed_kn() {
          return new InputNodeField(schema.Int, true);
        },
        get course_deg() {
          return new InputNodeField(schema.Int, true);
        },
        get latitude() {
          return new InputNodeField(schema.Float, true);
        },
        get longitude() {
          return new InputNodeField(schema.Float, true);
        },
        get successful_landings() {
          return new InputNodeField(schema.Int, true);
        },
        get attempted_landings() {
          return new InputNodeField(schema.Int, true);
        },
        get mission() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "ShipsFind" }
    );
  },
  get ShipsResult() {
    return new ObjectNode(
      {
        get result() {
          return new FieldNode(schema.Result, undefined, true);
        },
        get data() {
          return new FieldNode(
            new ArrayNode(schema.Ship, true),
            undefined,
            true
          );
        }
      },
      {
        name: "ShipsResult",
        extension: ((extensions as any) || {}).ShipsResult
      }
    );
  },
  get Mutation() {
    return new ObjectNode(
      {
        get delete_users() {
          return new FieldNode(
            schema.users_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.users_bool_exp, false);
                }
              },
              true
            ),
            true
          );
        },
        get insert_users() {
          return new FieldNode(
            schema.users_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.users_insert_input, false),
                  false
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.users_on_conflict, true);
              }
            }),
            true
          );
        },
        get update_users() {
          return new FieldNode(
            schema.users_mutation_response,
            new Arguments({
              get _set() {
                return new ArgumentsField(schema.users_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.users_bool_exp, false);
              }
            }),
            true
          );
        }
      },
      { name: "Mutation", extension: ((extensions as any) || {}).Mutation }
    );
  },
  get users_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.users, false),
            undefined,
            false
          );
        }
      },
      {
        name: "users_mutation_response",
        extension: ((extensions as any) || {}).users_mutation_response
      }
    );
  },
  get users_insert_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.uuid, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get rocket() {
          return new InputNodeField(schema.String, true);
        },
        get timestamp() {
          return new InputNodeField(schema.timestamptz, true);
        },
        get twitter() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "users_insert_input" }
    );
  },
  get users_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.users_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.users_update_column, false),
            false
          );
        }
      },
      { name: "users_on_conflict" }
    );
  },
  get users_constraint() {
    return new EnumNode({ name: "users_constraint" });
  },
  get users_update_column() {
    return new EnumNode({ name: "users_update_column" });
  },
  get users_set_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.uuid, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get rocket() {
          return new InputNodeField(schema.String, true);
        },
        get timestamp() {
          return new InputNodeField(schema.timestamptz, true);
        },
        get twitter() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "users_set_input" }
    );
  },
  get Subscription() {
    return new ObjectNode(
      {
        get users() {
          return new FieldNode(
            new ArrayNode(schema.users, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.users_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.users_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.users_bool_exp, true);
              }
            }),
            false
          );
        },
        get users_aggregate() {
          return new FieldNode(
            schema.users_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.users_select_column, true),
                  true
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.users_order_by, true),
                  true
                );
              },
              get where() {
                return new ArgumentsField(schema.users_bool_exp, true);
              }
            }),
            false
          );
        },
        get users_by_pk() {
          return new FieldNode(
            schema.users,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                }
              },
              true
            ),
            true
          );
        }
      },
      {
        name: "Subscription",
        extension: ((extensions as any) || {}).Subscription
      }
    );
  },
  get __Schema() {
    return new ObjectNode(
      {
        get types() {
          return new FieldNode(
            new ArrayNode(schema.__Type, false),
            undefined,
            false
          );
        },
        get queryType() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get mutationType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get subscriptionType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get directives() {
          return new FieldNode(
            new ArrayNode(schema.__Directive, false),
            undefined,
            false
          );
        }
      },
      { name: "__Schema", extension: ((extensions as any) || {}).__Schema }
    );
  },
  get __Type() {
    return new ObjectNode(
      {
        get kind() {
          return new FieldNode(schema.__TypeKind, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(schema.__Field, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get interfaces() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        },
        get enumValues() {
          return new FieldNode(
            new ArrayNode(schema.__EnumValue, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get inputFields() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, true),
            undefined,
            true
          );
        },
        get ofType() {
          return new FieldNode(schema.__Type, undefined, true);
        }
      },
      { name: "__Type", extension: ((extensions as any) || {}).__Type }
    );
  },
  get __TypeKind() {
    return new EnumNode({ name: "__TypeKind" });
  },
  get __Field() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "__Field", extension: ((extensions as any) || {}).__Field }
    );
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get defaultValue() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "__InputValue",
        extension: ((extensions as any) || {}).__InputValue
      }
    );
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "__EnumValue",
        extension: ((extensions as any) || {}).__EnumValue
      }
    );
  },
  get __Directive() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get locations() {
          return new FieldNode(
            new ArrayNode(schema.__DirectiveLocation, false),
            undefined,
            false
          );
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        }
      },
      {
        name: "__Directive",
        extension: ((extensions as any) || {}).__Directive
      }
    );
  },
  get __DirectiveLocation() {
    return new EnumNode({ name: "__DirectiveLocation" });
  },
  get conflict_action() {
    return new EnumNode({ name: "conflict_action" });
  },
  get users_aggregate_order_by() {
    return new InputNode(
      {
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.users_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.users_min_order_by, true);
        }
      },
      { name: "users_aggregate_order_by" }
    );
  },
  get users_max_order_by() {
    return new InputNode(
      {
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get rocket() {
          return new InputNodeField(schema.order_by, true);
        },
        get timestamp() {
          return new InputNodeField(schema.order_by, true);
        },
        get twitter() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "users_max_order_by" }
    );
  },
  get users_min_order_by() {
    return new InputNode(
      {
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get rocket() {
          return new InputNodeField(schema.order_by, true);
        },
        get timestamp() {
          return new InputNodeField(schema.order_by, true);
        },
        get twitter() {
          return new InputNodeField(schema.order_by, true);
        }
      },
      { name: "users_min_order_by" }
    );
  },
  get users_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.users_insert_input, false),
            false
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.users_on_conflict, true);
        }
      },
      { name: "users_arr_rel_insert_input" }
    );
  },
  get users_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.users_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.users_on_conflict, true);
        }
      },
      { name: "users_obj_rel_insert_input" }
    );
  },
  get ObjectID() {
    return new ScalarNode({
      name: "ObjectID",
      extension: ((extensions as any) || {}).ObjectID
    });
  },
  get CoreMission() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get flight() {
          return new FieldNode(schema.Int, undefined, true);
        }
      },
      {
        name: "CoreMission",
        extension: ((extensions as any) || {}).CoreMission
      }
    );
  }
};

lazyGetters(schema);
