
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model TenantUser
 * 
 */
export type TenantUser = $Result.DefaultSelection<Prisma.$TenantUserPayload>
/**
 * Model Guest
 * 
 */
export type Guest = $Result.DefaultSelection<Prisma.$GuestPayload>
/**
 * Model TenantGuest
 * 
 */
export type TenantGuest = $Result.DefaultSelection<Prisma.$TenantGuestPayload>
/**
 * Model RoomCategory
 * 
 */
export type RoomCategory = $Result.DefaultSelection<Prisma.$RoomCategoryPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model BookingEvent
 * 
 */
export type BookingEvent = $Result.DefaultSelection<Prisma.$BookingEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SubscriptionStatus: {
  trialing: 'trialing',
  active: 'active',
  past_due: 'past_due',
  cancelled: 'cancelled',
  suspended: 'suspended'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const StaffRole: {
  owner: 'owner',
  manager: 'manager',
  staff: 'staff'
};

export type StaffRole = (typeof StaffRole)[keyof typeof StaffRole]


export const BookingStatus: {
  pending: 'pending',
  confirmed: 'confirmed',
  cancelled: 'cancelled',
  completed: 'completed',
  refunded: 'refunded'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]

}

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type StaffRole = $Enums.StaffRole

export const StaffRole: typeof $Enums.StaffRole

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenantUser`: Exposes CRUD operations for the **TenantUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TenantUsers
    * const tenantUsers = await prisma.tenantUser.findMany()
    * ```
    */
  get tenantUser(): Prisma.TenantUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guest`: Exposes CRUD operations for the **Guest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guests
    * const guests = await prisma.guest.findMany()
    * ```
    */
  get guest(): Prisma.GuestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenantGuest`: Exposes CRUD operations for the **TenantGuest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TenantGuests
    * const tenantGuests = await prisma.tenantGuest.findMany()
    * ```
    */
  get tenantGuest(): Prisma.TenantGuestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomCategory`: Exposes CRUD operations for the **RoomCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomCategories
    * const roomCategories = await prisma.roomCategory.findMany()
    * ```
    */
  get roomCategory(): Prisma.RoomCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingEvent`: Exposes CRUD operations for the **BookingEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingEvents
    * const bookingEvents = await prisma.bookingEvent.findMany()
    * ```
    */
  get bookingEvent(): Prisma.BookingEventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tenant: 'Tenant',
    TenantUser: 'TenantUser',
    Guest: 'Guest',
    TenantGuest: 'TenantGuest',
    RoomCategory: 'RoomCategory',
    Booking: 'Booking',
    BookingEvent: 'BookingEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tenant" | "tenantUser" | "guest" | "tenantGuest" | "roomCategory" | "booking" | "bookingEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      TenantUser: {
        payload: Prisma.$TenantUserPayload<ExtArgs>
        fields: Prisma.TenantUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantUserPayload>
          }
          findFirst: {
            args: Prisma.TenantUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantUserPayload>
          }
          findMany: {
            args: Prisma.TenantUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantUserPayload>[]
          }
          create: {
            args: Prisma.TenantUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantUserPayload>
          }
          createMany: {
            args: Prisma.TenantUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantUserPayload>[]
          }
          delete: {
            args: Prisma.TenantUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantUserPayload>
          }
          update: {
            args: Prisma.TenantUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantUserPayload>
          }
          deleteMany: {
            args: Prisma.TenantUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantUserPayload>[]
          }
          upsert: {
            args: Prisma.TenantUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantUserPayload>
          }
          aggregate: {
            args: Prisma.TenantUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenantUser>
          }
          groupBy: {
            args: Prisma.TenantUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantUserCountArgs<ExtArgs>
            result: $Utils.Optional<TenantUserCountAggregateOutputType> | number
          }
        }
      }
      Guest: {
        payload: Prisma.$GuestPayload<ExtArgs>
        fields: Prisma.GuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findFirst: {
            args: Prisma.GuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findMany: {
            args: Prisma.GuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          create: {
            args: Prisma.GuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          createMany: {
            args: Prisma.GuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          delete: {
            args: Prisma.GuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          update: {
            args: Prisma.GuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          deleteMany: {
            args: Prisma.GuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          upsert: {
            args: Prisma.GuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          aggregate: {
            args: Prisma.GuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuest>
          }
          groupBy: {
            args: Prisma.GuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestCountArgs<ExtArgs>
            result: $Utils.Optional<GuestCountAggregateOutputType> | number
          }
        }
      }
      TenantGuest: {
        payload: Prisma.$TenantGuestPayload<ExtArgs>
        fields: Prisma.TenantGuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantGuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantGuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantGuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantGuestPayload>
          }
          findFirst: {
            args: Prisma.TenantGuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantGuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantGuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantGuestPayload>
          }
          findMany: {
            args: Prisma.TenantGuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantGuestPayload>[]
          }
          create: {
            args: Prisma.TenantGuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantGuestPayload>
          }
          createMany: {
            args: Prisma.TenantGuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantGuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantGuestPayload>[]
          }
          delete: {
            args: Prisma.TenantGuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantGuestPayload>
          }
          update: {
            args: Prisma.TenantGuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantGuestPayload>
          }
          deleteMany: {
            args: Prisma.TenantGuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantGuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantGuestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantGuestPayload>[]
          }
          upsert: {
            args: Prisma.TenantGuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantGuestPayload>
          }
          aggregate: {
            args: Prisma.TenantGuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenantGuest>
          }
          groupBy: {
            args: Prisma.TenantGuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantGuestCountArgs<ExtArgs>
            result: $Utils.Optional<TenantGuestCountAggregateOutputType> | number
          }
        }
      }
      RoomCategory: {
        payload: Prisma.$RoomCategoryPayload<ExtArgs>
        fields: Prisma.RoomCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload>
          }
          findFirst: {
            args: Prisma.RoomCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload>
          }
          findMany: {
            args: Prisma.RoomCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload>[]
          }
          create: {
            args: Prisma.RoomCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload>
          }
          createMany: {
            args: Prisma.RoomCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload>[]
          }
          delete: {
            args: Prisma.RoomCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload>
          }
          update: {
            args: Prisma.RoomCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload>
          }
          deleteMany: {
            args: Prisma.RoomCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload>[]
          }
          upsert: {
            args: Prisma.RoomCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomCategoryPayload>
          }
          aggregate: {
            args: Prisma.RoomCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomCategory>
          }
          groupBy: {
            args: Prisma.RoomCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCategoryCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      BookingEvent: {
        payload: Prisma.$BookingEventPayload<ExtArgs>
        fields: Prisma.BookingEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload>
          }
          findFirst: {
            args: Prisma.BookingEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload>
          }
          findMany: {
            args: Prisma.BookingEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload>[]
          }
          create: {
            args: Prisma.BookingEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload>
          }
          createMany: {
            args: Prisma.BookingEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload>[]
          }
          delete: {
            args: Prisma.BookingEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload>
          }
          update: {
            args: Prisma.BookingEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload>
          }
          deleteMany: {
            args: Prisma.BookingEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload>[]
          }
          upsert: {
            args: Prisma.BookingEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload>
          }
          aggregate: {
            args: Prisma.BookingEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingEvent>
          }
          groupBy: {
            args: Prisma.BookingEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingEventCountArgs<ExtArgs>
            result: $Utils.Optional<BookingEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    tenant?: TenantOmit
    tenantUser?: TenantUserOmit
    guest?: GuestOmit
    tenantGuest?: TenantGuestOmit
    roomCategory?: RoomCategoryOmit
    booking?: BookingOmit
    bookingEvent?: BookingEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    tenantUsers: number
    tenantGuests: number
    roomCategories: number
    bookings: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenantUsers?: boolean | TenantCountOutputTypeCountTenantUsersArgs
    tenantGuests?: boolean | TenantCountOutputTypeCountTenantGuestsArgs
    roomCategories?: boolean | TenantCountOutputTypeCountRoomCategoriesArgs
    bookings?: boolean | TenantCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountTenantUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantUserWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountTenantGuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantGuestWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountRoomCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomCategoryWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type GuestCountOutputType
   */

  export type GuestCountOutputType = {
    tenantGuests: number
    bookings: number
  }

  export type GuestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenantGuests?: boolean | GuestCountOutputTypeCountTenantGuestsArgs
    bookings?: boolean | GuestCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestCountOutputType
     */
    select?: GuestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeCountTenantGuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantGuestWhereInput
  }

  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type RoomCategoryCountOutputType
   */

  export type RoomCategoryCountOutputType = {
    bookings: number
  }

  export type RoomCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | RoomCategoryCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * RoomCategoryCountOutputType without action
   */
  export type RoomCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategoryCountOutputType
     */
    select?: RoomCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCategoryCountOutputType without action
   */
  export type RoomCategoryCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    events: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | BookingCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    telegramBotToken: string | null
    webhookUrl: string | null
    subscriptionStatus: $Enums.SubscriptionStatus | null
    stripeCustomerId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    telegramBotToken: string | null
    webhookUrl: string | null
    subscriptionStatus: $Enums.SubscriptionStatus | null
    stripeCustomerId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    telegramBotToken: number
    webhookUrl: number
    subscriptionStatus: number
    stripeCustomerId: number
    settings: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    telegramBotToken?: true
    webhookUrl?: true
    subscriptionStatus?: true
    stripeCustomerId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    telegramBotToken?: true
    webhookUrl?: true
    subscriptionStatus?: true
    stripeCustomerId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    telegramBotToken?: true
    webhookUrl?: true
    subscriptionStatus?: true
    stripeCustomerId?: true
    settings?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    telegramBotToken: string
    webhookUrl: string | null
    subscriptionStatus: $Enums.SubscriptionStatus
    stripeCustomerId: string | null
    settings: JsonValue
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    telegramBotToken?: boolean
    webhookUrl?: boolean
    subscriptionStatus?: boolean
    stripeCustomerId?: boolean
    settings?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantUsers?: boolean | Tenant$tenantUsersArgs<ExtArgs>
    tenantGuests?: boolean | Tenant$tenantGuestsArgs<ExtArgs>
    roomCategories?: boolean | Tenant$roomCategoriesArgs<ExtArgs>
    bookings?: boolean | Tenant$bookingsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    telegramBotToken?: boolean
    webhookUrl?: boolean
    subscriptionStatus?: boolean
    stripeCustomerId?: boolean
    settings?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    telegramBotToken?: boolean
    webhookUrl?: boolean
    subscriptionStatus?: boolean
    stripeCustomerId?: boolean
    settings?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    telegramBotToken?: boolean
    webhookUrl?: boolean
    subscriptionStatus?: boolean
    stripeCustomerId?: boolean
    settings?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "telegramBotToken" | "webhookUrl" | "subscriptionStatus" | "stripeCustomerId" | "settings" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenantUsers?: boolean | Tenant$tenantUsersArgs<ExtArgs>
    tenantGuests?: boolean | Tenant$tenantGuestsArgs<ExtArgs>
    roomCategories?: boolean | Tenant$roomCategoriesArgs<ExtArgs>
    bookings?: boolean | Tenant$bookingsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      tenantUsers: Prisma.$TenantUserPayload<ExtArgs>[]
      tenantGuests: Prisma.$TenantGuestPayload<ExtArgs>[]
      roomCategories: Prisma.$RoomCategoryPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      telegramBotToken: string
      webhookUrl: string | null
      subscriptionStatus: $Enums.SubscriptionStatus
      stripeCustomerId: string | null
      settings: Prisma.JsonValue
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenantUsers<T extends Tenant$tenantUsersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$tenantUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tenantGuests<T extends Tenant$tenantGuestsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$tenantGuestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantGuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roomCategories<T extends Tenant$roomCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$roomCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Tenant$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly telegramBotToken: FieldRef<"Tenant", 'String'>
    readonly webhookUrl: FieldRef<"Tenant", 'String'>
    readonly subscriptionStatus: FieldRef<"Tenant", 'SubscriptionStatus'>
    readonly stripeCustomerId: FieldRef<"Tenant", 'String'>
    readonly settings: FieldRef<"Tenant", 'Json'>
    readonly isActive: FieldRef<"Tenant", 'Boolean'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.tenantUsers
   */
  export type Tenant$tenantUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantUser
     */
    select?: TenantUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantUser
     */
    omit?: TenantUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantUserInclude<ExtArgs> | null
    where?: TenantUserWhereInput
    orderBy?: TenantUserOrderByWithRelationInput | TenantUserOrderByWithRelationInput[]
    cursor?: TenantUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TenantUserScalarFieldEnum | TenantUserScalarFieldEnum[]
  }

  /**
   * Tenant.tenantGuests
   */
  export type Tenant$tenantGuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantGuest
     */
    select?: TenantGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantGuest
     */
    omit?: TenantGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantGuestInclude<ExtArgs> | null
    where?: TenantGuestWhereInput
    orderBy?: TenantGuestOrderByWithRelationInput | TenantGuestOrderByWithRelationInput[]
    cursor?: TenantGuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TenantGuestScalarFieldEnum | TenantGuestScalarFieldEnum[]
  }

  /**
   * Tenant.roomCategories
   */
  export type Tenant$roomCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
    where?: RoomCategoryWhereInput
    orderBy?: RoomCategoryOrderByWithRelationInput | RoomCategoryOrderByWithRelationInput[]
    cursor?: RoomCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomCategoryScalarFieldEnum | RoomCategoryScalarFieldEnum[]
  }

  /**
   * Tenant.bookings
   */
  export type Tenant$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model TenantUser
   */

  export type AggregateTenantUser = {
    _count: TenantUserCountAggregateOutputType | null
    _min: TenantUserMinAggregateOutputType | null
    _max: TenantUserMaxAggregateOutputType | null
  }

  export type TenantUserMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.StaffRole | null
    inviteToken: string | null
    inviteExpiry: Date | null
    lastLoginAt: Date | null
    createdAt: Date | null
  }

  export type TenantUserMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.StaffRole | null
    inviteToken: string | null
    inviteExpiry: Date | null
    lastLoginAt: Date | null
    createdAt: Date | null
  }

  export type TenantUserCountAggregateOutputType = {
    id: number
    tenantId: number
    email: number
    passwordHash: number
    role: number
    inviteToken: number
    inviteExpiry: number
    lastLoginAt: number
    createdAt: number
    _all: number
  }


  export type TenantUserMinAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    passwordHash?: true
    role?: true
    inviteToken?: true
    inviteExpiry?: true
    lastLoginAt?: true
    createdAt?: true
  }

  export type TenantUserMaxAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    passwordHash?: true
    role?: true
    inviteToken?: true
    inviteExpiry?: true
    lastLoginAt?: true
    createdAt?: true
  }

  export type TenantUserCountAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    passwordHash?: true
    role?: true
    inviteToken?: true
    inviteExpiry?: true
    lastLoginAt?: true
    createdAt?: true
    _all?: true
  }

  export type TenantUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantUser to aggregate.
     */
    where?: TenantUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantUsers to fetch.
     */
    orderBy?: TenantUserOrderByWithRelationInput | TenantUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TenantUsers
    **/
    _count?: true | TenantUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantUserMaxAggregateInputType
  }

  export type GetTenantUserAggregateType<T extends TenantUserAggregateArgs> = {
        [P in keyof T & keyof AggregateTenantUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenantUser[P]>
      : GetScalarType<T[P], AggregateTenantUser[P]>
  }




  export type TenantUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantUserWhereInput
    orderBy?: TenantUserOrderByWithAggregationInput | TenantUserOrderByWithAggregationInput[]
    by: TenantUserScalarFieldEnum[] | TenantUserScalarFieldEnum
    having?: TenantUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantUserCountAggregateInputType | true
    _min?: TenantUserMinAggregateInputType
    _max?: TenantUserMaxAggregateInputType
  }

  export type TenantUserGroupByOutputType = {
    id: string
    tenantId: string
    email: string
    passwordHash: string
    role: $Enums.StaffRole
    inviteToken: string | null
    inviteExpiry: Date | null
    lastLoginAt: Date | null
    createdAt: Date
    _count: TenantUserCountAggregateOutputType | null
    _min: TenantUserMinAggregateOutputType | null
    _max: TenantUserMaxAggregateOutputType | null
  }

  type GetTenantUserGroupByPayload<T extends TenantUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantUserGroupByOutputType[P]>
            : GetScalarType<T[P], TenantUserGroupByOutputType[P]>
        }
      >
    >


  export type TenantUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    inviteToken?: boolean
    inviteExpiry?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantUser"]>

  export type TenantUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    inviteToken?: boolean
    inviteExpiry?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantUser"]>

  export type TenantUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    inviteToken?: boolean
    inviteExpiry?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantUser"]>

  export type TenantUserSelectScalar = {
    id?: boolean
    tenantId?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    inviteToken?: boolean
    inviteExpiry?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
  }

  export type TenantUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "email" | "passwordHash" | "role" | "inviteToken" | "inviteExpiry" | "lastLoginAt" | "createdAt", ExtArgs["result"]["tenantUser"]>
  export type TenantUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type TenantUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type TenantUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $TenantUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TenantUser"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      email: string
      passwordHash: string
      role: $Enums.StaffRole
      inviteToken: string | null
      inviteExpiry: Date | null
      lastLoginAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["tenantUser"]>
    composites: {}
  }

  type TenantUserGetPayload<S extends boolean | null | undefined | TenantUserDefaultArgs> = $Result.GetResult<Prisma.$TenantUserPayload, S>

  type TenantUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantUserCountAggregateInputType | true
    }

  export interface TenantUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TenantUser'], meta: { name: 'TenantUser' } }
    /**
     * Find zero or one TenantUser that matches the filter.
     * @param {TenantUserFindUniqueArgs} args - Arguments to find a TenantUser
     * @example
     * // Get one TenantUser
     * const tenantUser = await prisma.tenantUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantUserFindUniqueArgs>(args: SelectSubset<T, TenantUserFindUniqueArgs<ExtArgs>>): Prisma__TenantUserClient<$Result.GetResult<Prisma.$TenantUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TenantUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantUserFindUniqueOrThrowArgs} args - Arguments to find a TenantUser
     * @example
     * // Get one TenantUser
     * const tenantUser = await prisma.tenantUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantUserFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantUserClient<$Result.GetResult<Prisma.$TenantUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TenantUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUserFindFirstArgs} args - Arguments to find a TenantUser
     * @example
     * // Get one TenantUser
     * const tenantUser = await prisma.tenantUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantUserFindFirstArgs>(args?: SelectSubset<T, TenantUserFindFirstArgs<ExtArgs>>): Prisma__TenantUserClient<$Result.GetResult<Prisma.$TenantUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TenantUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUserFindFirstOrThrowArgs} args - Arguments to find a TenantUser
     * @example
     * // Get one TenantUser
     * const tenantUser = await prisma.tenantUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantUserFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantUserClient<$Result.GetResult<Prisma.$TenantUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TenantUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TenantUsers
     * const tenantUsers = await prisma.tenantUser.findMany()
     * 
     * // Get first 10 TenantUsers
     * const tenantUsers = await prisma.tenantUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantUserWithIdOnly = await prisma.tenantUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantUserFindManyArgs>(args?: SelectSubset<T, TenantUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TenantUser.
     * @param {TenantUserCreateArgs} args - Arguments to create a TenantUser.
     * @example
     * // Create one TenantUser
     * const TenantUser = await prisma.tenantUser.create({
     *   data: {
     *     // ... data to create a TenantUser
     *   }
     * })
     * 
     */
    create<T extends TenantUserCreateArgs>(args: SelectSubset<T, TenantUserCreateArgs<ExtArgs>>): Prisma__TenantUserClient<$Result.GetResult<Prisma.$TenantUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TenantUsers.
     * @param {TenantUserCreateManyArgs} args - Arguments to create many TenantUsers.
     * @example
     * // Create many TenantUsers
     * const tenantUser = await prisma.tenantUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantUserCreateManyArgs>(args?: SelectSubset<T, TenantUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TenantUsers and returns the data saved in the database.
     * @param {TenantUserCreateManyAndReturnArgs} args - Arguments to create many TenantUsers.
     * @example
     * // Create many TenantUsers
     * const tenantUser = await prisma.tenantUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TenantUsers and only return the `id`
     * const tenantUserWithIdOnly = await prisma.tenantUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantUserCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TenantUser.
     * @param {TenantUserDeleteArgs} args - Arguments to delete one TenantUser.
     * @example
     * // Delete one TenantUser
     * const TenantUser = await prisma.tenantUser.delete({
     *   where: {
     *     // ... filter to delete one TenantUser
     *   }
     * })
     * 
     */
    delete<T extends TenantUserDeleteArgs>(args: SelectSubset<T, TenantUserDeleteArgs<ExtArgs>>): Prisma__TenantUserClient<$Result.GetResult<Prisma.$TenantUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TenantUser.
     * @param {TenantUserUpdateArgs} args - Arguments to update one TenantUser.
     * @example
     * // Update one TenantUser
     * const tenantUser = await prisma.tenantUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUserUpdateArgs>(args: SelectSubset<T, TenantUserUpdateArgs<ExtArgs>>): Prisma__TenantUserClient<$Result.GetResult<Prisma.$TenantUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TenantUsers.
     * @param {TenantUserDeleteManyArgs} args - Arguments to filter TenantUsers to delete.
     * @example
     * // Delete a few TenantUsers
     * const { count } = await prisma.tenantUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantUserDeleteManyArgs>(args?: SelectSubset<T, TenantUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenantUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TenantUsers
     * const tenantUser = await prisma.tenantUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUserUpdateManyArgs>(args: SelectSubset<T, TenantUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenantUsers and returns the data updated in the database.
     * @param {TenantUserUpdateManyAndReturnArgs} args - Arguments to update many TenantUsers.
     * @example
     * // Update many TenantUsers
     * const tenantUser = await prisma.tenantUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TenantUsers and only return the `id`
     * const tenantUserWithIdOnly = await prisma.tenantUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenantUserUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TenantUser.
     * @param {TenantUserUpsertArgs} args - Arguments to update or create a TenantUser.
     * @example
     * // Update or create a TenantUser
     * const tenantUser = await prisma.tenantUser.upsert({
     *   create: {
     *     // ... data to create a TenantUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TenantUser we want to update
     *   }
     * })
     */
    upsert<T extends TenantUserUpsertArgs>(args: SelectSubset<T, TenantUserUpsertArgs<ExtArgs>>): Prisma__TenantUserClient<$Result.GetResult<Prisma.$TenantUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TenantUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUserCountArgs} args - Arguments to filter TenantUsers to count.
     * @example
     * // Count the number of TenantUsers
     * const count = await prisma.tenantUser.count({
     *   where: {
     *     // ... the filter for the TenantUsers we want to count
     *   }
     * })
    **/
    count<T extends TenantUserCountArgs>(
      args?: Subset<T, TenantUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TenantUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantUserAggregateArgs>(args: Subset<T, TenantUserAggregateArgs>): Prisma.PrismaPromise<GetTenantUserAggregateType<T>>

    /**
     * Group by TenantUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantUserGroupByArgs['orderBy'] }
        : { orderBy?: TenantUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TenantUser model
   */
  readonly fields: TenantUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TenantUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TenantUser model
   */
  interface TenantUserFieldRefs {
    readonly id: FieldRef<"TenantUser", 'String'>
    readonly tenantId: FieldRef<"TenantUser", 'String'>
    readonly email: FieldRef<"TenantUser", 'String'>
    readonly passwordHash: FieldRef<"TenantUser", 'String'>
    readonly role: FieldRef<"TenantUser", 'StaffRole'>
    readonly inviteToken: FieldRef<"TenantUser", 'String'>
    readonly inviteExpiry: FieldRef<"TenantUser", 'DateTime'>
    readonly lastLoginAt: FieldRef<"TenantUser", 'DateTime'>
    readonly createdAt: FieldRef<"TenantUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TenantUser findUnique
   */
  export type TenantUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantUser
     */
    select?: TenantUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantUser
     */
    omit?: TenantUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantUserInclude<ExtArgs> | null
    /**
     * Filter, which TenantUser to fetch.
     */
    where: TenantUserWhereUniqueInput
  }

  /**
   * TenantUser findUniqueOrThrow
   */
  export type TenantUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantUser
     */
    select?: TenantUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantUser
     */
    omit?: TenantUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantUserInclude<ExtArgs> | null
    /**
     * Filter, which TenantUser to fetch.
     */
    where: TenantUserWhereUniqueInput
  }

  /**
   * TenantUser findFirst
   */
  export type TenantUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantUser
     */
    select?: TenantUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantUser
     */
    omit?: TenantUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantUserInclude<ExtArgs> | null
    /**
     * Filter, which TenantUser to fetch.
     */
    where?: TenantUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantUsers to fetch.
     */
    orderBy?: TenantUserOrderByWithRelationInput | TenantUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantUsers.
     */
    cursor?: TenantUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantUsers.
     */
    distinct?: TenantUserScalarFieldEnum | TenantUserScalarFieldEnum[]
  }

  /**
   * TenantUser findFirstOrThrow
   */
  export type TenantUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantUser
     */
    select?: TenantUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantUser
     */
    omit?: TenantUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantUserInclude<ExtArgs> | null
    /**
     * Filter, which TenantUser to fetch.
     */
    where?: TenantUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantUsers to fetch.
     */
    orderBy?: TenantUserOrderByWithRelationInput | TenantUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantUsers.
     */
    cursor?: TenantUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantUsers.
     */
    distinct?: TenantUserScalarFieldEnum | TenantUserScalarFieldEnum[]
  }

  /**
   * TenantUser findMany
   */
  export type TenantUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantUser
     */
    select?: TenantUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantUser
     */
    omit?: TenantUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantUserInclude<ExtArgs> | null
    /**
     * Filter, which TenantUsers to fetch.
     */
    where?: TenantUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantUsers to fetch.
     */
    orderBy?: TenantUserOrderByWithRelationInput | TenantUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TenantUsers.
     */
    cursor?: TenantUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantUsers.
     */
    distinct?: TenantUserScalarFieldEnum | TenantUserScalarFieldEnum[]
  }

  /**
   * TenantUser create
   */
  export type TenantUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantUser
     */
    select?: TenantUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantUser
     */
    omit?: TenantUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantUserInclude<ExtArgs> | null
    /**
     * The data needed to create a TenantUser.
     */
    data: XOR<TenantUserCreateInput, TenantUserUncheckedCreateInput>
  }

  /**
   * TenantUser createMany
   */
  export type TenantUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TenantUsers.
     */
    data: TenantUserCreateManyInput | TenantUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TenantUser createManyAndReturn
   */
  export type TenantUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantUser
     */
    select?: TenantUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TenantUser
     */
    omit?: TenantUserOmit<ExtArgs> | null
    /**
     * The data used to create many TenantUsers.
     */
    data: TenantUserCreateManyInput | TenantUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TenantUser update
   */
  export type TenantUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantUser
     */
    select?: TenantUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantUser
     */
    omit?: TenantUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantUserInclude<ExtArgs> | null
    /**
     * The data needed to update a TenantUser.
     */
    data: XOR<TenantUserUpdateInput, TenantUserUncheckedUpdateInput>
    /**
     * Choose, which TenantUser to update.
     */
    where: TenantUserWhereUniqueInput
  }

  /**
   * TenantUser updateMany
   */
  export type TenantUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TenantUsers.
     */
    data: XOR<TenantUserUpdateManyMutationInput, TenantUserUncheckedUpdateManyInput>
    /**
     * Filter which TenantUsers to update
     */
    where?: TenantUserWhereInput
    /**
     * Limit how many TenantUsers to update.
     */
    limit?: number
  }

  /**
   * TenantUser updateManyAndReturn
   */
  export type TenantUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantUser
     */
    select?: TenantUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TenantUser
     */
    omit?: TenantUserOmit<ExtArgs> | null
    /**
     * The data used to update TenantUsers.
     */
    data: XOR<TenantUserUpdateManyMutationInput, TenantUserUncheckedUpdateManyInput>
    /**
     * Filter which TenantUsers to update
     */
    where?: TenantUserWhereInput
    /**
     * Limit how many TenantUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TenantUser upsert
   */
  export type TenantUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantUser
     */
    select?: TenantUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantUser
     */
    omit?: TenantUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantUserInclude<ExtArgs> | null
    /**
     * The filter to search for the TenantUser to update in case it exists.
     */
    where: TenantUserWhereUniqueInput
    /**
     * In case the TenantUser found by the `where` argument doesn't exist, create a new TenantUser with this data.
     */
    create: XOR<TenantUserCreateInput, TenantUserUncheckedCreateInput>
    /**
     * In case the TenantUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUserUpdateInput, TenantUserUncheckedUpdateInput>
  }

  /**
   * TenantUser delete
   */
  export type TenantUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantUser
     */
    select?: TenantUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantUser
     */
    omit?: TenantUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantUserInclude<ExtArgs> | null
    /**
     * Filter which TenantUser to delete.
     */
    where: TenantUserWhereUniqueInput
  }

  /**
   * TenantUser deleteMany
   */
  export type TenantUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantUsers to delete
     */
    where?: TenantUserWhereInput
    /**
     * Limit how many TenantUsers to delete.
     */
    limit?: number
  }

  /**
   * TenantUser without action
   */
  export type TenantUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantUser
     */
    select?: TenantUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantUser
     */
    omit?: TenantUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantUserInclude<ExtArgs> | null
  }


  /**
   * Model Guest
   */

  export type AggregateGuest = {
    _count: GuestCountAggregateOutputType | null
    _avg: GuestAvgAggregateOutputType | null
    _sum: GuestSumAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  export type GuestAvgAggregateOutputType = {
    telegramId: number | null
  }

  export type GuestSumAggregateOutputType = {
    telegramId: bigint | null
  }

  export type GuestMinAggregateOutputType = {
    id: string | null
    telegramId: bigint | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    languageCode: string | null
    optInNotifications: boolean | null
    createdAt: Date | null
  }

  export type GuestMaxAggregateOutputType = {
    id: string | null
    telegramId: bigint | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    languageCode: string | null
    optInNotifications: boolean | null
    createdAt: Date | null
  }

  export type GuestCountAggregateOutputType = {
    id: number
    telegramId: number
    firstName: number
    lastName: number
    phoneNumber: number
    languageCode: number
    optInNotifications: number
    createdAt: number
    _all: number
  }


  export type GuestAvgAggregateInputType = {
    telegramId?: true
  }

  export type GuestSumAggregateInputType = {
    telegramId?: true
  }

  export type GuestMinAggregateInputType = {
    id?: true
    telegramId?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    languageCode?: true
    optInNotifications?: true
    createdAt?: true
  }

  export type GuestMaxAggregateInputType = {
    id?: true
    telegramId?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    languageCode?: true
    optInNotifications?: true
    createdAt?: true
  }

  export type GuestCountAggregateInputType = {
    id?: true
    telegramId?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    languageCode?: true
    optInNotifications?: true
    createdAt?: true
    _all?: true
  }

  export type GuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guest to aggregate.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guests
    **/
    _count?: true | GuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestMaxAggregateInputType
  }

  export type GetGuestAggregateType<T extends GuestAggregateArgs> = {
        [P in keyof T & keyof AggregateGuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuest[P]>
      : GetScalarType<T[P], AggregateGuest[P]>
  }




  export type GuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestWhereInput
    orderBy?: GuestOrderByWithAggregationInput | GuestOrderByWithAggregationInput[]
    by: GuestScalarFieldEnum[] | GuestScalarFieldEnum
    having?: GuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestCountAggregateInputType | true
    _avg?: GuestAvgAggregateInputType
    _sum?: GuestSumAggregateInputType
    _min?: GuestMinAggregateInputType
    _max?: GuestMaxAggregateInputType
  }

  export type GuestGroupByOutputType = {
    id: string
    telegramId: bigint
    firstName: string
    lastName: string | null
    phoneNumber: string | null
    languageCode: string | null
    optInNotifications: boolean
    createdAt: Date
    _count: GuestCountAggregateOutputType | null
    _avg: GuestAvgAggregateOutputType | null
    _sum: GuestSumAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  type GetGuestGroupByPayload<T extends GuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestGroupByOutputType[P]>
            : GetScalarType<T[P], GuestGroupByOutputType[P]>
        }
      >
    >


  export type GuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    languageCode?: boolean
    optInNotifications?: boolean
    createdAt?: boolean
    tenantGuests?: boolean | Guest$tenantGuestsArgs<ExtArgs>
    bookings?: boolean | Guest$bookingsArgs<ExtArgs>
    _count?: boolean | GuestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    languageCode?: boolean
    optInNotifications?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    languageCode?: boolean
    optInNotifications?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectScalar = {
    id?: boolean
    telegramId?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    languageCode?: boolean
    optInNotifications?: boolean
    createdAt?: boolean
  }

  export type GuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "telegramId" | "firstName" | "lastName" | "phoneNumber" | "languageCode" | "optInNotifications" | "createdAt", ExtArgs["result"]["guest"]>
  export type GuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenantGuests?: boolean | Guest$tenantGuestsArgs<ExtArgs>
    bookings?: boolean | Guest$bookingsArgs<ExtArgs>
    _count?: boolean | GuestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GuestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guest"
    objects: {
      tenantGuests: Prisma.$TenantGuestPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      telegramId: bigint
      firstName: string
      lastName: string | null
      phoneNumber: string | null
      languageCode: string | null
      optInNotifications: boolean
      createdAt: Date
    }, ExtArgs["result"]["guest"]>
    composites: {}
  }

  type GuestGetPayload<S extends boolean | null | undefined | GuestDefaultArgs> = $Result.GetResult<Prisma.$GuestPayload, S>

  type GuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestCountAggregateInputType | true
    }

  export interface GuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guest'], meta: { name: 'Guest' } }
    /**
     * Find zero or one Guest that matches the filter.
     * @param {GuestFindUniqueArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestFindUniqueArgs>(args: SelectSubset<T, GuestFindUniqueArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuestFindUniqueOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestFindFirstArgs>(args?: SelectSubset<T, GuestFindFirstArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guests
     * const guests = await prisma.guest.findMany()
     * 
     * // Get first 10 Guests
     * const guests = await prisma.guest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestWithIdOnly = await prisma.guest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuestFindManyArgs>(args?: SelectSubset<T, GuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guest.
     * @param {GuestCreateArgs} args - Arguments to create a Guest.
     * @example
     * // Create one Guest
     * const Guest = await prisma.guest.create({
     *   data: {
     *     // ... data to create a Guest
     *   }
     * })
     * 
     */
    create<T extends GuestCreateArgs>(args: SelectSubset<T, GuestCreateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guests.
     * @param {GuestCreateManyArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestCreateManyArgs>(args?: SelectSubset<T, GuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guests and returns the data saved in the database.
     * @param {GuestCreateManyAndReturnArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuestCreateManyAndReturnArgs>(args?: SelectSubset<T, GuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guest.
     * @param {GuestDeleteArgs} args - Arguments to delete one Guest.
     * @example
     * // Delete one Guest
     * const Guest = await prisma.guest.delete({
     *   where: {
     *     // ... filter to delete one Guest
     *   }
     * })
     * 
     */
    delete<T extends GuestDeleteArgs>(args: SelectSubset<T, GuestDeleteArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guest.
     * @param {GuestUpdateArgs} args - Arguments to update one Guest.
     * @example
     * // Update one Guest
     * const guest = await prisma.guest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestUpdateArgs>(args: SelectSubset<T, GuestUpdateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guests.
     * @param {GuestDeleteManyArgs} args - Arguments to filter Guests to delete.
     * @example
     * // Delete a few Guests
     * const { count } = await prisma.guest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestDeleteManyArgs>(args?: SelectSubset<T, GuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestUpdateManyArgs>(args: SelectSubset<T, GuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests and returns the data updated in the database.
     * @param {GuestUpdateManyAndReturnArgs} args - Arguments to update many Guests.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuestUpdateManyAndReturnArgs>(args: SelectSubset<T, GuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guest.
     * @param {GuestUpsertArgs} args - Arguments to update or create a Guest.
     * @example
     * // Update or create a Guest
     * const guest = await prisma.guest.upsert({
     *   create: {
     *     // ... data to create a Guest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guest we want to update
     *   }
     * })
     */
    upsert<T extends GuestUpsertArgs>(args: SelectSubset<T, GuestUpsertArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestCountArgs} args - Arguments to filter Guests to count.
     * @example
     * // Count the number of Guests
     * const count = await prisma.guest.count({
     *   where: {
     *     // ... the filter for the Guests we want to count
     *   }
     * })
    **/
    count<T extends GuestCountArgs>(
      args?: Subset<T, GuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuestAggregateArgs>(args: Subset<T, GuestAggregateArgs>): Prisma.PrismaPromise<GetGuestAggregateType<T>>

    /**
     * Group by Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestGroupByArgs['orderBy'] }
        : { orderBy?: GuestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guest model
   */
  readonly fields: GuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenantGuests<T extends Guest$tenantGuestsArgs<ExtArgs> = {}>(args?: Subset<T, Guest$tenantGuestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantGuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Guest$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Guest$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Guest model
   */
  interface GuestFieldRefs {
    readonly id: FieldRef<"Guest", 'String'>
    readonly telegramId: FieldRef<"Guest", 'BigInt'>
    readonly firstName: FieldRef<"Guest", 'String'>
    readonly lastName: FieldRef<"Guest", 'String'>
    readonly phoneNumber: FieldRef<"Guest", 'String'>
    readonly languageCode: FieldRef<"Guest", 'String'>
    readonly optInNotifications: FieldRef<"Guest", 'Boolean'>
    readonly createdAt: FieldRef<"Guest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Guest findUnique
   */
  export type GuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findUniqueOrThrow
   */
  export type GuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findFirst
   */
  export type GuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findFirstOrThrow
   */
  export type GuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findMany
   */
  export type GuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guests to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest create
   */
  export type GuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to create a Guest.
     */
    data: XOR<GuestCreateInput, GuestUncheckedCreateInput>
  }

  /**
   * Guest createMany
   */
  export type GuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guest createManyAndReturn
   */
  export type GuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guest update
   */
  export type GuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to update a Guest.
     */
    data: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
    /**
     * Choose, which Guest to update.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest updateMany
   */
  export type GuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
  }

  /**
   * Guest updateManyAndReturn
   */
  export type GuestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
  }

  /**
   * Guest upsert
   */
  export type GuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The filter to search for the Guest to update in case it exists.
     */
    where: GuestWhereUniqueInput
    /**
     * In case the Guest found by the `where` argument doesn't exist, create a new Guest with this data.
     */
    create: XOR<GuestCreateInput, GuestUncheckedCreateInput>
    /**
     * In case the Guest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
  }

  /**
   * Guest delete
   */
  export type GuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter which Guest to delete.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest deleteMany
   */
  export type GuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guests to delete
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to delete.
     */
    limit?: number
  }

  /**
   * Guest.tenantGuests
   */
  export type Guest$tenantGuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantGuest
     */
    select?: TenantGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantGuest
     */
    omit?: TenantGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantGuestInclude<ExtArgs> | null
    where?: TenantGuestWhereInput
    orderBy?: TenantGuestOrderByWithRelationInput | TenantGuestOrderByWithRelationInput[]
    cursor?: TenantGuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TenantGuestScalarFieldEnum | TenantGuestScalarFieldEnum[]
  }

  /**
   * Guest.bookings
   */
  export type Guest$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Guest without action
   */
  export type GuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
  }


  /**
   * Model TenantGuest
   */

  export type AggregateTenantGuest = {
    _count: TenantGuestCountAggregateOutputType | null
    _min: TenantGuestMinAggregateOutputType | null
    _max: TenantGuestMaxAggregateOutputType | null
  }

  export type TenantGuestMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    guestId: string | null
    firstSeen: Date | null
  }

  export type TenantGuestMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    guestId: string | null
    firstSeen: Date | null
  }

  export type TenantGuestCountAggregateOutputType = {
    id: number
    tenantId: number
    guestId: number
    firstSeen: number
    _all: number
  }


  export type TenantGuestMinAggregateInputType = {
    id?: true
    tenantId?: true
    guestId?: true
    firstSeen?: true
  }

  export type TenantGuestMaxAggregateInputType = {
    id?: true
    tenantId?: true
    guestId?: true
    firstSeen?: true
  }

  export type TenantGuestCountAggregateInputType = {
    id?: true
    tenantId?: true
    guestId?: true
    firstSeen?: true
    _all?: true
  }

  export type TenantGuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantGuest to aggregate.
     */
    where?: TenantGuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantGuests to fetch.
     */
    orderBy?: TenantGuestOrderByWithRelationInput | TenantGuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantGuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantGuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TenantGuests
    **/
    _count?: true | TenantGuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantGuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantGuestMaxAggregateInputType
  }

  export type GetTenantGuestAggregateType<T extends TenantGuestAggregateArgs> = {
        [P in keyof T & keyof AggregateTenantGuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenantGuest[P]>
      : GetScalarType<T[P], AggregateTenantGuest[P]>
  }




  export type TenantGuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantGuestWhereInput
    orderBy?: TenantGuestOrderByWithAggregationInput | TenantGuestOrderByWithAggregationInput[]
    by: TenantGuestScalarFieldEnum[] | TenantGuestScalarFieldEnum
    having?: TenantGuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantGuestCountAggregateInputType | true
    _min?: TenantGuestMinAggregateInputType
    _max?: TenantGuestMaxAggregateInputType
  }

  export type TenantGuestGroupByOutputType = {
    id: string
    tenantId: string
    guestId: string
    firstSeen: Date
    _count: TenantGuestCountAggregateOutputType | null
    _min: TenantGuestMinAggregateOutputType | null
    _max: TenantGuestMaxAggregateOutputType | null
  }

  type GetTenantGuestGroupByPayload<T extends TenantGuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGuestGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGuestGroupByOutputType[P]>
        }
      >
    >


  export type TenantGuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    guestId?: boolean
    firstSeen?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantGuest"]>

  export type TenantGuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    guestId?: boolean
    firstSeen?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantGuest"]>

  export type TenantGuestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    guestId?: boolean
    firstSeen?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantGuest"]>

  export type TenantGuestSelectScalar = {
    id?: boolean
    tenantId?: boolean
    guestId?: boolean
    firstSeen?: boolean
  }

  export type TenantGuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "guestId" | "firstSeen", ExtArgs["result"]["tenantGuest"]>
  export type TenantGuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }
  export type TenantGuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }
  export type TenantGuestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }

  export type $TenantGuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TenantGuest"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      guest: Prisma.$GuestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      guestId: string
      firstSeen: Date
    }, ExtArgs["result"]["tenantGuest"]>
    composites: {}
  }

  type TenantGuestGetPayload<S extends boolean | null | undefined | TenantGuestDefaultArgs> = $Result.GetResult<Prisma.$TenantGuestPayload, S>

  type TenantGuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantGuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantGuestCountAggregateInputType | true
    }

  export interface TenantGuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TenantGuest'], meta: { name: 'TenantGuest' } }
    /**
     * Find zero or one TenantGuest that matches the filter.
     * @param {TenantGuestFindUniqueArgs} args - Arguments to find a TenantGuest
     * @example
     * // Get one TenantGuest
     * const tenantGuest = await prisma.tenantGuest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantGuestFindUniqueArgs>(args: SelectSubset<T, TenantGuestFindUniqueArgs<ExtArgs>>): Prisma__TenantGuestClient<$Result.GetResult<Prisma.$TenantGuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TenantGuest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantGuestFindUniqueOrThrowArgs} args - Arguments to find a TenantGuest
     * @example
     * // Get one TenantGuest
     * const tenantGuest = await prisma.tenantGuest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantGuestFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantGuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantGuestClient<$Result.GetResult<Prisma.$TenantGuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TenantGuest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGuestFindFirstArgs} args - Arguments to find a TenantGuest
     * @example
     * // Get one TenantGuest
     * const tenantGuest = await prisma.tenantGuest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantGuestFindFirstArgs>(args?: SelectSubset<T, TenantGuestFindFirstArgs<ExtArgs>>): Prisma__TenantGuestClient<$Result.GetResult<Prisma.$TenantGuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TenantGuest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGuestFindFirstOrThrowArgs} args - Arguments to find a TenantGuest
     * @example
     * // Get one TenantGuest
     * const tenantGuest = await prisma.tenantGuest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantGuestFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantGuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantGuestClient<$Result.GetResult<Prisma.$TenantGuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TenantGuests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TenantGuests
     * const tenantGuests = await prisma.tenantGuest.findMany()
     * 
     * // Get first 10 TenantGuests
     * const tenantGuests = await prisma.tenantGuest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantGuestWithIdOnly = await prisma.tenantGuest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantGuestFindManyArgs>(args?: SelectSubset<T, TenantGuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantGuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TenantGuest.
     * @param {TenantGuestCreateArgs} args - Arguments to create a TenantGuest.
     * @example
     * // Create one TenantGuest
     * const TenantGuest = await prisma.tenantGuest.create({
     *   data: {
     *     // ... data to create a TenantGuest
     *   }
     * })
     * 
     */
    create<T extends TenantGuestCreateArgs>(args: SelectSubset<T, TenantGuestCreateArgs<ExtArgs>>): Prisma__TenantGuestClient<$Result.GetResult<Prisma.$TenantGuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TenantGuests.
     * @param {TenantGuestCreateManyArgs} args - Arguments to create many TenantGuests.
     * @example
     * // Create many TenantGuests
     * const tenantGuest = await prisma.tenantGuest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantGuestCreateManyArgs>(args?: SelectSubset<T, TenantGuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TenantGuests and returns the data saved in the database.
     * @param {TenantGuestCreateManyAndReturnArgs} args - Arguments to create many TenantGuests.
     * @example
     * // Create many TenantGuests
     * const tenantGuest = await prisma.tenantGuest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TenantGuests and only return the `id`
     * const tenantGuestWithIdOnly = await prisma.tenantGuest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantGuestCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantGuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantGuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TenantGuest.
     * @param {TenantGuestDeleteArgs} args - Arguments to delete one TenantGuest.
     * @example
     * // Delete one TenantGuest
     * const TenantGuest = await prisma.tenantGuest.delete({
     *   where: {
     *     // ... filter to delete one TenantGuest
     *   }
     * })
     * 
     */
    delete<T extends TenantGuestDeleteArgs>(args: SelectSubset<T, TenantGuestDeleteArgs<ExtArgs>>): Prisma__TenantGuestClient<$Result.GetResult<Prisma.$TenantGuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TenantGuest.
     * @param {TenantGuestUpdateArgs} args - Arguments to update one TenantGuest.
     * @example
     * // Update one TenantGuest
     * const tenantGuest = await prisma.tenantGuest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantGuestUpdateArgs>(args: SelectSubset<T, TenantGuestUpdateArgs<ExtArgs>>): Prisma__TenantGuestClient<$Result.GetResult<Prisma.$TenantGuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TenantGuests.
     * @param {TenantGuestDeleteManyArgs} args - Arguments to filter TenantGuests to delete.
     * @example
     * // Delete a few TenantGuests
     * const { count } = await prisma.tenantGuest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantGuestDeleteManyArgs>(args?: SelectSubset<T, TenantGuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenantGuests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TenantGuests
     * const tenantGuest = await prisma.tenantGuest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantGuestUpdateManyArgs>(args: SelectSubset<T, TenantGuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenantGuests and returns the data updated in the database.
     * @param {TenantGuestUpdateManyAndReturnArgs} args - Arguments to update many TenantGuests.
     * @example
     * // Update many TenantGuests
     * const tenantGuest = await prisma.tenantGuest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TenantGuests and only return the `id`
     * const tenantGuestWithIdOnly = await prisma.tenantGuest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenantGuestUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantGuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantGuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TenantGuest.
     * @param {TenantGuestUpsertArgs} args - Arguments to update or create a TenantGuest.
     * @example
     * // Update or create a TenantGuest
     * const tenantGuest = await prisma.tenantGuest.upsert({
     *   create: {
     *     // ... data to create a TenantGuest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TenantGuest we want to update
     *   }
     * })
     */
    upsert<T extends TenantGuestUpsertArgs>(args: SelectSubset<T, TenantGuestUpsertArgs<ExtArgs>>): Prisma__TenantGuestClient<$Result.GetResult<Prisma.$TenantGuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TenantGuests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGuestCountArgs} args - Arguments to filter TenantGuests to count.
     * @example
     * // Count the number of TenantGuests
     * const count = await prisma.tenantGuest.count({
     *   where: {
     *     // ... the filter for the TenantGuests we want to count
     *   }
     * })
    **/
    count<T extends TenantGuestCountArgs>(
      args?: Subset<T, TenantGuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantGuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TenantGuest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantGuestAggregateArgs>(args: Subset<T, TenantGuestAggregateArgs>): Prisma.PrismaPromise<GetTenantGuestAggregateType<T>>

    /**
     * Group by TenantGuest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGuestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGuestGroupByArgs['orderBy'] }
        : { orderBy?: TenantGuestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TenantGuest model
   */
  readonly fields: TenantGuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TenantGuest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantGuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guest<T extends GuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuestDefaultArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TenantGuest model
   */
  interface TenantGuestFieldRefs {
    readonly id: FieldRef<"TenantGuest", 'String'>
    readonly tenantId: FieldRef<"TenantGuest", 'String'>
    readonly guestId: FieldRef<"TenantGuest", 'String'>
    readonly firstSeen: FieldRef<"TenantGuest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TenantGuest findUnique
   */
  export type TenantGuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantGuest
     */
    select?: TenantGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantGuest
     */
    omit?: TenantGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantGuestInclude<ExtArgs> | null
    /**
     * Filter, which TenantGuest to fetch.
     */
    where: TenantGuestWhereUniqueInput
  }

  /**
   * TenantGuest findUniqueOrThrow
   */
  export type TenantGuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantGuest
     */
    select?: TenantGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantGuest
     */
    omit?: TenantGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantGuestInclude<ExtArgs> | null
    /**
     * Filter, which TenantGuest to fetch.
     */
    where: TenantGuestWhereUniqueInput
  }

  /**
   * TenantGuest findFirst
   */
  export type TenantGuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantGuest
     */
    select?: TenantGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantGuest
     */
    omit?: TenantGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantGuestInclude<ExtArgs> | null
    /**
     * Filter, which TenantGuest to fetch.
     */
    where?: TenantGuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantGuests to fetch.
     */
    orderBy?: TenantGuestOrderByWithRelationInput | TenantGuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantGuests.
     */
    cursor?: TenantGuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantGuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantGuests.
     */
    distinct?: TenantGuestScalarFieldEnum | TenantGuestScalarFieldEnum[]
  }

  /**
   * TenantGuest findFirstOrThrow
   */
  export type TenantGuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantGuest
     */
    select?: TenantGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantGuest
     */
    omit?: TenantGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantGuestInclude<ExtArgs> | null
    /**
     * Filter, which TenantGuest to fetch.
     */
    where?: TenantGuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantGuests to fetch.
     */
    orderBy?: TenantGuestOrderByWithRelationInput | TenantGuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantGuests.
     */
    cursor?: TenantGuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantGuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantGuests.
     */
    distinct?: TenantGuestScalarFieldEnum | TenantGuestScalarFieldEnum[]
  }

  /**
   * TenantGuest findMany
   */
  export type TenantGuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantGuest
     */
    select?: TenantGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantGuest
     */
    omit?: TenantGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantGuestInclude<ExtArgs> | null
    /**
     * Filter, which TenantGuests to fetch.
     */
    where?: TenantGuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantGuests to fetch.
     */
    orderBy?: TenantGuestOrderByWithRelationInput | TenantGuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TenantGuests.
     */
    cursor?: TenantGuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantGuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantGuests.
     */
    distinct?: TenantGuestScalarFieldEnum | TenantGuestScalarFieldEnum[]
  }

  /**
   * TenantGuest create
   */
  export type TenantGuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantGuest
     */
    select?: TenantGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantGuest
     */
    omit?: TenantGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantGuestInclude<ExtArgs> | null
    /**
     * The data needed to create a TenantGuest.
     */
    data: XOR<TenantGuestCreateInput, TenantGuestUncheckedCreateInput>
  }

  /**
   * TenantGuest createMany
   */
  export type TenantGuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TenantGuests.
     */
    data: TenantGuestCreateManyInput | TenantGuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TenantGuest createManyAndReturn
   */
  export type TenantGuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantGuest
     */
    select?: TenantGuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TenantGuest
     */
    omit?: TenantGuestOmit<ExtArgs> | null
    /**
     * The data used to create many TenantGuests.
     */
    data: TenantGuestCreateManyInput | TenantGuestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantGuestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TenantGuest update
   */
  export type TenantGuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantGuest
     */
    select?: TenantGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantGuest
     */
    omit?: TenantGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantGuestInclude<ExtArgs> | null
    /**
     * The data needed to update a TenantGuest.
     */
    data: XOR<TenantGuestUpdateInput, TenantGuestUncheckedUpdateInput>
    /**
     * Choose, which TenantGuest to update.
     */
    where: TenantGuestWhereUniqueInput
  }

  /**
   * TenantGuest updateMany
   */
  export type TenantGuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TenantGuests.
     */
    data: XOR<TenantGuestUpdateManyMutationInput, TenantGuestUncheckedUpdateManyInput>
    /**
     * Filter which TenantGuests to update
     */
    where?: TenantGuestWhereInput
    /**
     * Limit how many TenantGuests to update.
     */
    limit?: number
  }

  /**
   * TenantGuest updateManyAndReturn
   */
  export type TenantGuestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantGuest
     */
    select?: TenantGuestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TenantGuest
     */
    omit?: TenantGuestOmit<ExtArgs> | null
    /**
     * The data used to update TenantGuests.
     */
    data: XOR<TenantGuestUpdateManyMutationInput, TenantGuestUncheckedUpdateManyInput>
    /**
     * Filter which TenantGuests to update
     */
    where?: TenantGuestWhereInput
    /**
     * Limit how many TenantGuests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantGuestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TenantGuest upsert
   */
  export type TenantGuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantGuest
     */
    select?: TenantGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantGuest
     */
    omit?: TenantGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantGuestInclude<ExtArgs> | null
    /**
     * The filter to search for the TenantGuest to update in case it exists.
     */
    where: TenantGuestWhereUniqueInput
    /**
     * In case the TenantGuest found by the `where` argument doesn't exist, create a new TenantGuest with this data.
     */
    create: XOR<TenantGuestCreateInput, TenantGuestUncheckedCreateInput>
    /**
     * In case the TenantGuest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantGuestUpdateInput, TenantGuestUncheckedUpdateInput>
  }

  /**
   * TenantGuest delete
   */
  export type TenantGuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantGuest
     */
    select?: TenantGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantGuest
     */
    omit?: TenantGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantGuestInclude<ExtArgs> | null
    /**
     * Filter which TenantGuest to delete.
     */
    where: TenantGuestWhereUniqueInput
  }

  /**
   * TenantGuest deleteMany
   */
  export type TenantGuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantGuests to delete
     */
    where?: TenantGuestWhereInput
    /**
     * Limit how many TenantGuests to delete.
     */
    limit?: number
  }

  /**
   * TenantGuest without action
   */
  export type TenantGuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantGuest
     */
    select?: TenantGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantGuest
     */
    omit?: TenantGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantGuestInclude<ExtArgs> | null
  }


  /**
   * Model RoomCategory
   */

  export type AggregateRoomCategory = {
    _count: RoomCategoryCountAggregateOutputType | null
    _avg: RoomCategoryAvgAggregateOutputType | null
    _sum: RoomCategorySumAggregateOutputType | null
    _min: RoomCategoryMinAggregateOutputType | null
    _max: RoomCategoryMaxAggregateOutputType | null
  }

  export type RoomCategoryAvgAggregateOutputType = {
    pricePerNight: Decimal | null
    maxGuests: number | null
    totalInventory: number | null
  }

  export type RoomCategorySumAggregateOutputType = {
    pricePerNight: Decimal | null
    maxGuests: number | null
    totalInventory: number | null
  }

  export type RoomCategoryMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    description: string | null
    pricePerNight: Decimal | null
    currency: string | null
    maxGuests: number | null
    totalInventory: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCategoryMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    description: string | null
    pricePerNight: Decimal | null
    currency: string | null
    maxGuests: number | null
    totalInventory: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCategoryCountAggregateOutputType = {
    id: number
    tenantId: number
    name: number
    description: number
    pricePerNight: number
    currency: number
    maxGuests: number
    totalInventory: number
    imageUrls: number
    amenities: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomCategoryAvgAggregateInputType = {
    pricePerNight?: true
    maxGuests?: true
    totalInventory?: true
  }

  export type RoomCategorySumAggregateInputType = {
    pricePerNight?: true
    maxGuests?: true
    totalInventory?: true
  }

  export type RoomCategoryMinAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    description?: true
    pricePerNight?: true
    currency?: true
    maxGuests?: true
    totalInventory?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCategoryMaxAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    description?: true
    pricePerNight?: true
    currency?: true
    maxGuests?: true
    totalInventory?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCategoryCountAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    description?: true
    pricePerNight?: true
    currency?: true
    maxGuests?: true
    totalInventory?: true
    imageUrls?: true
    amenities?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomCategory to aggregate.
     */
    where?: RoomCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomCategories to fetch.
     */
    orderBy?: RoomCategoryOrderByWithRelationInput | RoomCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomCategories
    **/
    _count?: true | RoomCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomCategoryMaxAggregateInputType
  }

  export type GetRoomCategoryAggregateType<T extends RoomCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomCategory[P]>
      : GetScalarType<T[P], AggregateRoomCategory[P]>
  }




  export type RoomCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomCategoryWhereInput
    orderBy?: RoomCategoryOrderByWithAggregationInput | RoomCategoryOrderByWithAggregationInput[]
    by: RoomCategoryScalarFieldEnum[] | RoomCategoryScalarFieldEnum
    having?: RoomCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCategoryCountAggregateInputType | true
    _avg?: RoomCategoryAvgAggregateInputType
    _sum?: RoomCategorySumAggregateInputType
    _min?: RoomCategoryMinAggregateInputType
    _max?: RoomCategoryMaxAggregateInputType
  }

  export type RoomCategoryGroupByOutputType = {
    id: string
    tenantId: string
    name: string
    description: string
    pricePerNight: Decimal
    currency: string
    maxGuests: number
    totalInventory: number
    imageUrls: string[]
    amenities: string[]
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: RoomCategoryCountAggregateOutputType | null
    _avg: RoomCategoryAvgAggregateOutputType | null
    _sum: RoomCategorySumAggregateOutputType | null
    _min: RoomCategoryMinAggregateOutputType | null
    _max: RoomCategoryMaxAggregateOutputType | null
  }

  type GetRoomCategoryGroupByPayload<T extends RoomCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], RoomCategoryGroupByOutputType[P]>
        }
      >
    >


  export type RoomCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    description?: boolean
    pricePerNight?: boolean
    currency?: boolean
    maxGuests?: boolean
    totalInventory?: boolean
    imageUrls?: boolean
    amenities?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    bookings?: boolean | RoomCategory$bookingsArgs<ExtArgs>
    _count?: boolean | RoomCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomCategory"]>

  export type RoomCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    description?: boolean
    pricePerNight?: boolean
    currency?: boolean
    maxGuests?: boolean
    totalInventory?: boolean
    imageUrls?: boolean
    amenities?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomCategory"]>

  export type RoomCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    description?: boolean
    pricePerNight?: boolean
    currency?: boolean
    maxGuests?: boolean
    totalInventory?: boolean
    imageUrls?: boolean
    amenities?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomCategory"]>

  export type RoomCategorySelectScalar = {
    id?: boolean
    tenantId?: boolean
    name?: boolean
    description?: boolean
    pricePerNight?: boolean
    currency?: boolean
    maxGuests?: boolean
    totalInventory?: boolean
    imageUrls?: boolean
    amenities?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "name" | "description" | "pricePerNight" | "currency" | "maxGuests" | "totalInventory" | "imageUrls" | "amenities" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["roomCategory"]>
  export type RoomCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    bookings?: boolean | RoomCategory$bookingsArgs<ExtArgs>
    _count?: boolean | RoomCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type RoomCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $RoomCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomCategory"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      name: string
      description: string
      pricePerNight: Prisma.Decimal
      currency: string
      maxGuests: number
      totalInventory: number
      imageUrls: string[]
      amenities: string[]
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roomCategory"]>
    composites: {}
  }

  type RoomCategoryGetPayload<S extends boolean | null | undefined | RoomCategoryDefaultArgs> = $Result.GetResult<Prisma.$RoomCategoryPayload, S>

  type RoomCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCategoryCountAggregateInputType | true
    }

  export interface RoomCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomCategory'], meta: { name: 'RoomCategory' } }
    /**
     * Find zero or one RoomCategory that matches the filter.
     * @param {RoomCategoryFindUniqueArgs} args - Arguments to find a RoomCategory
     * @example
     * // Get one RoomCategory
     * const roomCategory = await prisma.roomCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomCategoryFindUniqueArgs>(args: SelectSubset<T, RoomCategoryFindUniqueArgs<ExtArgs>>): Prisma__RoomCategoryClient<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomCategoryFindUniqueOrThrowArgs} args - Arguments to find a RoomCategory
     * @example
     * // Get one RoomCategory
     * const roomCategory = await prisma.roomCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomCategoryClient<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCategoryFindFirstArgs} args - Arguments to find a RoomCategory
     * @example
     * // Get one RoomCategory
     * const roomCategory = await prisma.roomCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomCategoryFindFirstArgs>(args?: SelectSubset<T, RoomCategoryFindFirstArgs<ExtArgs>>): Prisma__RoomCategoryClient<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCategoryFindFirstOrThrowArgs} args - Arguments to find a RoomCategory
     * @example
     * // Get one RoomCategory
     * const roomCategory = await prisma.roomCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomCategoryClient<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomCategories
     * const roomCategories = await prisma.roomCategory.findMany()
     * 
     * // Get first 10 RoomCategories
     * const roomCategories = await prisma.roomCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomCategoryWithIdOnly = await prisma.roomCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomCategoryFindManyArgs>(args?: SelectSubset<T, RoomCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomCategory.
     * @param {RoomCategoryCreateArgs} args - Arguments to create a RoomCategory.
     * @example
     * // Create one RoomCategory
     * const RoomCategory = await prisma.roomCategory.create({
     *   data: {
     *     // ... data to create a RoomCategory
     *   }
     * })
     * 
     */
    create<T extends RoomCategoryCreateArgs>(args: SelectSubset<T, RoomCategoryCreateArgs<ExtArgs>>): Prisma__RoomCategoryClient<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomCategories.
     * @param {RoomCategoryCreateManyArgs} args - Arguments to create many RoomCategories.
     * @example
     * // Create many RoomCategories
     * const roomCategory = await prisma.roomCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCategoryCreateManyArgs>(args?: SelectSubset<T, RoomCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomCategories and returns the data saved in the database.
     * @param {RoomCategoryCreateManyAndReturnArgs} args - Arguments to create many RoomCategories.
     * @example
     * // Create many RoomCategories
     * const roomCategory = await prisma.roomCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomCategories and only return the `id`
     * const roomCategoryWithIdOnly = await prisma.roomCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomCategory.
     * @param {RoomCategoryDeleteArgs} args - Arguments to delete one RoomCategory.
     * @example
     * // Delete one RoomCategory
     * const RoomCategory = await prisma.roomCategory.delete({
     *   where: {
     *     // ... filter to delete one RoomCategory
     *   }
     * })
     * 
     */
    delete<T extends RoomCategoryDeleteArgs>(args: SelectSubset<T, RoomCategoryDeleteArgs<ExtArgs>>): Prisma__RoomCategoryClient<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomCategory.
     * @param {RoomCategoryUpdateArgs} args - Arguments to update one RoomCategory.
     * @example
     * // Update one RoomCategory
     * const roomCategory = await prisma.roomCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomCategoryUpdateArgs>(args: SelectSubset<T, RoomCategoryUpdateArgs<ExtArgs>>): Prisma__RoomCategoryClient<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomCategories.
     * @param {RoomCategoryDeleteManyArgs} args - Arguments to filter RoomCategories to delete.
     * @example
     * // Delete a few RoomCategories
     * const { count } = await prisma.roomCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomCategoryDeleteManyArgs>(args?: SelectSubset<T, RoomCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomCategories
     * const roomCategory = await prisma.roomCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomCategoryUpdateManyArgs>(args: SelectSubset<T, RoomCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomCategories and returns the data updated in the database.
     * @param {RoomCategoryUpdateManyAndReturnArgs} args - Arguments to update many RoomCategories.
     * @example
     * // Update many RoomCategories
     * const roomCategory = await prisma.roomCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomCategories and only return the `id`
     * const roomCategoryWithIdOnly = await prisma.roomCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomCategory.
     * @param {RoomCategoryUpsertArgs} args - Arguments to update or create a RoomCategory.
     * @example
     * // Update or create a RoomCategory
     * const roomCategory = await prisma.roomCategory.upsert({
     *   create: {
     *     // ... data to create a RoomCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomCategory we want to update
     *   }
     * })
     */
    upsert<T extends RoomCategoryUpsertArgs>(args: SelectSubset<T, RoomCategoryUpsertArgs<ExtArgs>>): Prisma__RoomCategoryClient<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCategoryCountArgs} args - Arguments to filter RoomCategories to count.
     * @example
     * // Count the number of RoomCategories
     * const count = await prisma.roomCategory.count({
     *   where: {
     *     // ... the filter for the RoomCategories we want to count
     *   }
     * })
    **/
    count<T extends RoomCategoryCountArgs>(
      args?: Subset<T, RoomCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomCategoryAggregateArgs>(args: Subset<T, RoomCategoryAggregateArgs>): Prisma.PrismaPromise<GetRoomCategoryAggregateType<T>>

    /**
     * Group by RoomCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomCategoryGroupByArgs['orderBy'] }
        : { orderBy?: RoomCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomCategory model
   */
  readonly fields: RoomCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends RoomCategory$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, RoomCategory$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomCategory model
   */
  interface RoomCategoryFieldRefs {
    readonly id: FieldRef<"RoomCategory", 'String'>
    readonly tenantId: FieldRef<"RoomCategory", 'String'>
    readonly name: FieldRef<"RoomCategory", 'String'>
    readonly description: FieldRef<"RoomCategory", 'String'>
    readonly pricePerNight: FieldRef<"RoomCategory", 'Decimal'>
    readonly currency: FieldRef<"RoomCategory", 'String'>
    readonly maxGuests: FieldRef<"RoomCategory", 'Int'>
    readonly totalInventory: FieldRef<"RoomCategory", 'Int'>
    readonly imageUrls: FieldRef<"RoomCategory", 'String[]'>
    readonly amenities: FieldRef<"RoomCategory", 'String[]'>
    readonly isActive: FieldRef<"RoomCategory", 'Boolean'>
    readonly createdAt: FieldRef<"RoomCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"RoomCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomCategory findUnique
   */
  export type RoomCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
    /**
     * Filter, which RoomCategory to fetch.
     */
    where: RoomCategoryWhereUniqueInput
  }

  /**
   * RoomCategory findUniqueOrThrow
   */
  export type RoomCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
    /**
     * Filter, which RoomCategory to fetch.
     */
    where: RoomCategoryWhereUniqueInput
  }

  /**
   * RoomCategory findFirst
   */
  export type RoomCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
    /**
     * Filter, which RoomCategory to fetch.
     */
    where?: RoomCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomCategories to fetch.
     */
    orderBy?: RoomCategoryOrderByWithRelationInput | RoomCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomCategories.
     */
    cursor?: RoomCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomCategories.
     */
    distinct?: RoomCategoryScalarFieldEnum | RoomCategoryScalarFieldEnum[]
  }

  /**
   * RoomCategory findFirstOrThrow
   */
  export type RoomCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
    /**
     * Filter, which RoomCategory to fetch.
     */
    where?: RoomCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomCategories to fetch.
     */
    orderBy?: RoomCategoryOrderByWithRelationInput | RoomCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomCategories.
     */
    cursor?: RoomCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomCategories.
     */
    distinct?: RoomCategoryScalarFieldEnum | RoomCategoryScalarFieldEnum[]
  }

  /**
   * RoomCategory findMany
   */
  export type RoomCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
    /**
     * Filter, which RoomCategories to fetch.
     */
    where?: RoomCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomCategories to fetch.
     */
    orderBy?: RoomCategoryOrderByWithRelationInput | RoomCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomCategories.
     */
    cursor?: RoomCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomCategories.
     */
    distinct?: RoomCategoryScalarFieldEnum | RoomCategoryScalarFieldEnum[]
  }

  /**
   * RoomCategory create
   */
  export type RoomCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomCategory.
     */
    data: XOR<RoomCategoryCreateInput, RoomCategoryUncheckedCreateInput>
  }

  /**
   * RoomCategory createMany
   */
  export type RoomCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomCategories.
     */
    data: RoomCategoryCreateManyInput | RoomCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomCategory createManyAndReturn
   */
  export type RoomCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many RoomCategories.
     */
    data: RoomCategoryCreateManyInput | RoomCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomCategory update
   */
  export type RoomCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomCategory.
     */
    data: XOR<RoomCategoryUpdateInput, RoomCategoryUncheckedUpdateInput>
    /**
     * Choose, which RoomCategory to update.
     */
    where: RoomCategoryWhereUniqueInput
  }

  /**
   * RoomCategory updateMany
   */
  export type RoomCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomCategories.
     */
    data: XOR<RoomCategoryUpdateManyMutationInput, RoomCategoryUncheckedUpdateManyInput>
    /**
     * Filter which RoomCategories to update
     */
    where?: RoomCategoryWhereInput
    /**
     * Limit how many RoomCategories to update.
     */
    limit?: number
  }

  /**
   * RoomCategory updateManyAndReturn
   */
  export type RoomCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * The data used to update RoomCategories.
     */
    data: XOR<RoomCategoryUpdateManyMutationInput, RoomCategoryUncheckedUpdateManyInput>
    /**
     * Filter which RoomCategories to update
     */
    where?: RoomCategoryWhereInput
    /**
     * Limit how many RoomCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomCategory upsert
   */
  export type RoomCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomCategory to update in case it exists.
     */
    where: RoomCategoryWhereUniqueInput
    /**
     * In case the RoomCategory found by the `where` argument doesn't exist, create a new RoomCategory with this data.
     */
    create: XOR<RoomCategoryCreateInput, RoomCategoryUncheckedCreateInput>
    /**
     * In case the RoomCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomCategoryUpdateInput, RoomCategoryUncheckedUpdateInput>
  }

  /**
   * RoomCategory delete
   */
  export type RoomCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
    /**
     * Filter which RoomCategory to delete.
     */
    where: RoomCategoryWhereUniqueInput
  }

  /**
   * RoomCategory deleteMany
   */
  export type RoomCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomCategories to delete
     */
    where?: RoomCategoryWhereInput
    /**
     * Limit how many RoomCategories to delete.
     */
    limit?: number
  }

  /**
   * RoomCategory.bookings
   */
  export type RoomCategory$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * RoomCategory without action
   */
  export type RoomCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCategory
     */
    select?: RoomCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomCategory
     */
    omit?: RoomCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    nightsCount: number | null
    guestCount: number | null
    totalAmountPaid: Decimal | null
  }

  export type BookingSumAggregateOutputType = {
    nightsCount: number | null
    guestCount: number | null
    totalAmountPaid: Decimal | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    guestId: string | null
    roomCategoryId: string | null
    bookingReference: string | null
    checkIn: Date | null
    checkOut: Date | null
    nightsCount: number | null
    guestCount: number | null
    totalAmountPaid: Decimal | null
    currency: string | null
    status: $Enums.BookingStatus | null
    paymentIntentId: string | null
    telegramPaymentChargeId: string | null
    receiptPdfUrl: string | null
    reviewSentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    guestId: string | null
    roomCategoryId: string | null
    bookingReference: string | null
    checkIn: Date | null
    checkOut: Date | null
    nightsCount: number | null
    guestCount: number | null
    totalAmountPaid: Decimal | null
    currency: string | null
    status: $Enums.BookingStatus | null
    paymentIntentId: string | null
    telegramPaymentChargeId: string | null
    receiptPdfUrl: string | null
    reviewSentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    tenantId: number
    guestId: number
    roomCategoryId: number
    bookingReference: number
    checkIn: number
    checkOut: number
    nightsCount: number
    guestCount: number
    totalAmountPaid: number
    currency: number
    status: number
    paymentIntentId: number
    telegramPaymentChargeId: number
    receiptPdfUrl: number
    reviewSentAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    nightsCount?: true
    guestCount?: true
    totalAmountPaid?: true
  }

  export type BookingSumAggregateInputType = {
    nightsCount?: true
    guestCount?: true
    totalAmountPaid?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    tenantId?: true
    guestId?: true
    roomCategoryId?: true
    bookingReference?: true
    checkIn?: true
    checkOut?: true
    nightsCount?: true
    guestCount?: true
    totalAmountPaid?: true
    currency?: true
    status?: true
    paymentIntentId?: true
    telegramPaymentChargeId?: true
    receiptPdfUrl?: true
    reviewSentAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    tenantId?: true
    guestId?: true
    roomCategoryId?: true
    bookingReference?: true
    checkIn?: true
    checkOut?: true
    nightsCount?: true
    guestCount?: true
    totalAmountPaid?: true
    currency?: true
    status?: true
    paymentIntentId?: true
    telegramPaymentChargeId?: true
    receiptPdfUrl?: true
    reviewSentAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    tenantId?: true
    guestId?: true
    roomCategoryId?: true
    bookingReference?: true
    checkIn?: true
    checkOut?: true
    nightsCount?: true
    guestCount?: true
    totalAmountPaid?: true
    currency?: true
    status?: true
    paymentIntentId?: true
    telegramPaymentChargeId?: true
    receiptPdfUrl?: true
    reviewSentAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    tenantId: string
    guestId: string
    roomCategoryId: string
    bookingReference: string
    checkIn: Date
    checkOut: Date
    nightsCount: number
    guestCount: number
    totalAmountPaid: Decimal
    currency: string
    status: $Enums.BookingStatus
    paymentIntentId: string | null
    telegramPaymentChargeId: string | null
    receiptPdfUrl: string | null
    reviewSentAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    guestId?: boolean
    roomCategoryId?: boolean
    bookingReference?: boolean
    checkIn?: boolean
    checkOut?: boolean
    nightsCount?: boolean
    guestCount?: boolean
    totalAmountPaid?: boolean
    currency?: boolean
    status?: boolean
    paymentIntentId?: boolean
    telegramPaymentChargeId?: boolean
    receiptPdfUrl?: boolean
    reviewSentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    roomCategory?: boolean | RoomCategoryDefaultArgs<ExtArgs>
    events?: boolean | Booking$eventsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    guestId?: boolean
    roomCategoryId?: boolean
    bookingReference?: boolean
    checkIn?: boolean
    checkOut?: boolean
    nightsCount?: boolean
    guestCount?: boolean
    totalAmountPaid?: boolean
    currency?: boolean
    status?: boolean
    paymentIntentId?: boolean
    telegramPaymentChargeId?: boolean
    receiptPdfUrl?: boolean
    reviewSentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    roomCategory?: boolean | RoomCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    guestId?: boolean
    roomCategoryId?: boolean
    bookingReference?: boolean
    checkIn?: boolean
    checkOut?: boolean
    nightsCount?: boolean
    guestCount?: boolean
    totalAmountPaid?: boolean
    currency?: boolean
    status?: boolean
    paymentIntentId?: boolean
    telegramPaymentChargeId?: boolean
    receiptPdfUrl?: boolean
    reviewSentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    roomCategory?: boolean | RoomCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    tenantId?: boolean
    guestId?: boolean
    roomCategoryId?: boolean
    bookingReference?: boolean
    checkIn?: boolean
    checkOut?: boolean
    nightsCount?: boolean
    guestCount?: boolean
    totalAmountPaid?: boolean
    currency?: boolean
    status?: boolean
    paymentIntentId?: boolean
    telegramPaymentChargeId?: boolean
    receiptPdfUrl?: boolean
    reviewSentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "guestId" | "roomCategoryId" | "bookingReference" | "checkIn" | "checkOut" | "nightsCount" | "guestCount" | "totalAmountPaid" | "currency" | "status" | "paymentIntentId" | "telegramPaymentChargeId" | "receiptPdfUrl" | "reviewSentAt" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    roomCategory?: boolean | RoomCategoryDefaultArgs<ExtArgs>
    events?: boolean | Booking$eventsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    roomCategory?: boolean | RoomCategoryDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    roomCategory?: boolean | RoomCategoryDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      guest: Prisma.$GuestPayload<ExtArgs>
      roomCategory: Prisma.$RoomCategoryPayload<ExtArgs>
      events: Prisma.$BookingEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      guestId: string
      roomCategoryId: string
      bookingReference: string
      checkIn: Date
      checkOut: Date
      nightsCount: number
      guestCount: number
      totalAmountPaid: Prisma.Decimal
      currency: string
      status: $Enums.BookingStatus
      paymentIntentId: string | null
      telegramPaymentChargeId: string | null
      receiptPdfUrl: string | null
      reviewSentAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guest<T extends GuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuestDefaultArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    roomCategory<T extends RoomCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomCategoryDefaultArgs<ExtArgs>>): Prisma__RoomCategoryClient<$Result.GetResult<Prisma.$RoomCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    events<T extends Booking$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly tenantId: FieldRef<"Booking", 'String'>
    readonly guestId: FieldRef<"Booking", 'String'>
    readonly roomCategoryId: FieldRef<"Booking", 'String'>
    readonly bookingReference: FieldRef<"Booking", 'String'>
    readonly checkIn: FieldRef<"Booking", 'DateTime'>
    readonly checkOut: FieldRef<"Booking", 'DateTime'>
    readonly nightsCount: FieldRef<"Booking", 'Int'>
    readonly guestCount: FieldRef<"Booking", 'Int'>
    readonly totalAmountPaid: FieldRef<"Booking", 'Decimal'>
    readonly currency: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly paymentIntentId: FieldRef<"Booking", 'String'>
    readonly telegramPaymentChargeId: FieldRef<"Booking", 'String'>
    readonly receiptPdfUrl: FieldRef<"Booking", 'String'>
    readonly reviewSentAt: FieldRef<"Booking", 'DateTime'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.events
   */
  export type Booking$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
    where?: BookingEventWhereInput
    orderBy?: BookingEventOrderByWithRelationInput | BookingEventOrderByWithRelationInput[]
    cursor?: BookingEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingEventScalarFieldEnum | BookingEventScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model BookingEvent
   */

  export type AggregateBookingEvent = {
    _count: BookingEventCountAggregateOutputType | null
    _min: BookingEventMinAggregateOutputType | null
    _max: BookingEventMaxAggregateOutputType | null
  }

  export type BookingEventMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    event: string | null
    createdAt: Date | null
  }

  export type BookingEventMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    event: string | null
    createdAt: Date | null
  }

  export type BookingEventCountAggregateOutputType = {
    id: number
    bookingId: number
    event: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type BookingEventMinAggregateInputType = {
    id?: true
    bookingId?: true
    event?: true
    createdAt?: true
  }

  export type BookingEventMaxAggregateInputType = {
    id?: true
    bookingId?: true
    event?: true
    createdAt?: true
  }

  export type BookingEventCountAggregateInputType = {
    id?: true
    bookingId?: true
    event?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type BookingEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingEvent to aggregate.
     */
    where?: BookingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingEvents to fetch.
     */
    orderBy?: BookingEventOrderByWithRelationInput | BookingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingEvents
    **/
    _count?: true | BookingEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingEventMaxAggregateInputType
  }

  export type GetBookingEventAggregateType<T extends BookingEventAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingEvent[P]>
      : GetScalarType<T[P], AggregateBookingEvent[P]>
  }




  export type BookingEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingEventWhereInput
    orderBy?: BookingEventOrderByWithAggregationInput | BookingEventOrderByWithAggregationInput[]
    by: BookingEventScalarFieldEnum[] | BookingEventScalarFieldEnum
    having?: BookingEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingEventCountAggregateInputType | true
    _min?: BookingEventMinAggregateInputType
    _max?: BookingEventMaxAggregateInputType
  }

  export type BookingEventGroupByOutputType = {
    id: string
    bookingId: string
    event: string
    metadata: JsonValue
    createdAt: Date
    _count: BookingEventCountAggregateOutputType | null
    _min: BookingEventMinAggregateOutputType | null
    _max: BookingEventMaxAggregateOutputType | null
  }

  type GetBookingEventGroupByPayload<T extends BookingEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingEventGroupByOutputType[P]>
            : GetScalarType<T[P], BookingEventGroupByOutputType[P]>
        }
      >
    >


  export type BookingEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    event?: boolean
    metadata?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingEvent"]>

  export type BookingEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    event?: boolean
    metadata?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingEvent"]>

  export type BookingEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    event?: boolean
    metadata?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingEvent"]>

  export type BookingEventSelectScalar = {
    id?: boolean
    bookingId?: boolean
    event?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type BookingEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "event" | "metadata" | "createdAt", ExtArgs["result"]["bookingEvent"]>
  export type BookingEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type BookingEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type BookingEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $BookingEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingEvent"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      event: string
      metadata: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["bookingEvent"]>
    composites: {}
  }

  type BookingEventGetPayload<S extends boolean | null | undefined | BookingEventDefaultArgs> = $Result.GetResult<Prisma.$BookingEventPayload, S>

  type BookingEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingEventCountAggregateInputType | true
    }

  export interface BookingEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingEvent'], meta: { name: 'BookingEvent' } }
    /**
     * Find zero or one BookingEvent that matches the filter.
     * @param {BookingEventFindUniqueArgs} args - Arguments to find a BookingEvent
     * @example
     * // Get one BookingEvent
     * const bookingEvent = await prisma.bookingEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingEventFindUniqueArgs>(args: SelectSubset<T, BookingEventFindUniqueArgs<ExtArgs>>): Prisma__BookingEventClient<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingEventFindUniqueOrThrowArgs} args - Arguments to find a BookingEvent
     * @example
     * // Get one BookingEvent
     * const bookingEvent = await prisma.bookingEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingEventFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingEventClient<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingEventFindFirstArgs} args - Arguments to find a BookingEvent
     * @example
     * // Get one BookingEvent
     * const bookingEvent = await prisma.bookingEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingEventFindFirstArgs>(args?: SelectSubset<T, BookingEventFindFirstArgs<ExtArgs>>): Prisma__BookingEventClient<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingEventFindFirstOrThrowArgs} args - Arguments to find a BookingEvent
     * @example
     * // Get one BookingEvent
     * const bookingEvent = await prisma.bookingEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingEventFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingEventClient<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingEvents
     * const bookingEvents = await prisma.bookingEvent.findMany()
     * 
     * // Get first 10 BookingEvents
     * const bookingEvents = await prisma.bookingEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingEventWithIdOnly = await prisma.bookingEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingEventFindManyArgs>(args?: SelectSubset<T, BookingEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingEvent.
     * @param {BookingEventCreateArgs} args - Arguments to create a BookingEvent.
     * @example
     * // Create one BookingEvent
     * const BookingEvent = await prisma.bookingEvent.create({
     *   data: {
     *     // ... data to create a BookingEvent
     *   }
     * })
     * 
     */
    create<T extends BookingEventCreateArgs>(args: SelectSubset<T, BookingEventCreateArgs<ExtArgs>>): Prisma__BookingEventClient<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingEvents.
     * @param {BookingEventCreateManyArgs} args - Arguments to create many BookingEvents.
     * @example
     * // Create many BookingEvents
     * const bookingEvent = await prisma.bookingEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingEventCreateManyArgs>(args?: SelectSubset<T, BookingEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingEvents and returns the data saved in the database.
     * @param {BookingEventCreateManyAndReturnArgs} args - Arguments to create many BookingEvents.
     * @example
     * // Create many BookingEvents
     * const bookingEvent = await prisma.bookingEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingEvents and only return the `id`
     * const bookingEventWithIdOnly = await prisma.bookingEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingEventCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingEvent.
     * @param {BookingEventDeleteArgs} args - Arguments to delete one BookingEvent.
     * @example
     * // Delete one BookingEvent
     * const BookingEvent = await prisma.bookingEvent.delete({
     *   where: {
     *     // ... filter to delete one BookingEvent
     *   }
     * })
     * 
     */
    delete<T extends BookingEventDeleteArgs>(args: SelectSubset<T, BookingEventDeleteArgs<ExtArgs>>): Prisma__BookingEventClient<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingEvent.
     * @param {BookingEventUpdateArgs} args - Arguments to update one BookingEvent.
     * @example
     * // Update one BookingEvent
     * const bookingEvent = await prisma.bookingEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingEventUpdateArgs>(args: SelectSubset<T, BookingEventUpdateArgs<ExtArgs>>): Prisma__BookingEventClient<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingEvents.
     * @param {BookingEventDeleteManyArgs} args - Arguments to filter BookingEvents to delete.
     * @example
     * // Delete a few BookingEvents
     * const { count } = await prisma.bookingEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingEventDeleteManyArgs>(args?: SelectSubset<T, BookingEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingEvents
     * const bookingEvent = await prisma.bookingEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingEventUpdateManyArgs>(args: SelectSubset<T, BookingEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingEvents and returns the data updated in the database.
     * @param {BookingEventUpdateManyAndReturnArgs} args - Arguments to update many BookingEvents.
     * @example
     * // Update many BookingEvents
     * const bookingEvent = await prisma.bookingEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingEvents and only return the `id`
     * const bookingEventWithIdOnly = await prisma.bookingEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingEventUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingEvent.
     * @param {BookingEventUpsertArgs} args - Arguments to update or create a BookingEvent.
     * @example
     * // Update or create a BookingEvent
     * const bookingEvent = await prisma.bookingEvent.upsert({
     *   create: {
     *     // ... data to create a BookingEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingEvent we want to update
     *   }
     * })
     */
    upsert<T extends BookingEventUpsertArgs>(args: SelectSubset<T, BookingEventUpsertArgs<ExtArgs>>): Prisma__BookingEventClient<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingEventCountArgs} args - Arguments to filter BookingEvents to count.
     * @example
     * // Count the number of BookingEvents
     * const count = await prisma.bookingEvent.count({
     *   where: {
     *     // ... the filter for the BookingEvents we want to count
     *   }
     * })
    **/
    count<T extends BookingEventCountArgs>(
      args?: Subset<T, BookingEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingEventAggregateArgs>(args: Subset<T, BookingEventAggregateArgs>): Prisma.PrismaPromise<GetBookingEventAggregateType<T>>

    /**
     * Group by BookingEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingEventGroupByArgs['orderBy'] }
        : { orderBy?: BookingEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingEvent model
   */
  readonly fields: BookingEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookingEvent model
   */
  interface BookingEventFieldRefs {
    readonly id: FieldRef<"BookingEvent", 'String'>
    readonly bookingId: FieldRef<"BookingEvent", 'String'>
    readonly event: FieldRef<"BookingEvent", 'String'>
    readonly metadata: FieldRef<"BookingEvent", 'Json'>
    readonly createdAt: FieldRef<"BookingEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookingEvent findUnique
   */
  export type BookingEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
    /**
     * Filter, which BookingEvent to fetch.
     */
    where: BookingEventWhereUniqueInput
  }

  /**
   * BookingEvent findUniqueOrThrow
   */
  export type BookingEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
    /**
     * Filter, which BookingEvent to fetch.
     */
    where: BookingEventWhereUniqueInput
  }

  /**
   * BookingEvent findFirst
   */
  export type BookingEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
    /**
     * Filter, which BookingEvent to fetch.
     */
    where?: BookingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingEvents to fetch.
     */
    orderBy?: BookingEventOrderByWithRelationInput | BookingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingEvents.
     */
    cursor?: BookingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingEvents.
     */
    distinct?: BookingEventScalarFieldEnum | BookingEventScalarFieldEnum[]
  }

  /**
   * BookingEvent findFirstOrThrow
   */
  export type BookingEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
    /**
     * Filter, which BookingEvent to fetch.
     */
    where?: BookingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingEvents to fetch.
     */
    orderBy?: BookingEventOrderByWithRelationInput | BookingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingEvents.
     */
    cursor?: BookingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingEvents.
     */
    distinct?: BookingEventScalarFieldEnum | BookingEventScalarFieldEnum[]
  }

  /**
   * BookingEvent findMany
   */
  export type BookingEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
    /**
     * Filter, which BookingEvents to fetch.
     */
    where?: BookingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingEvents to fetch.
     */
    orderBy?: BookingEventOrderByWithRelationInput | BookingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingEvents.
     */
    cursor?: BookingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingEvents.
     */
    distinct?: BookingEventScalarFieldEnum | BookingEventScalarFieldEnum[]
  }

  /**
   * BookingEvent create
   */
  export type BookingEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingEvent.
     */
    data: XOR<BookingEventCreateInput, BookingEventUncheckedCreateInput>
  }

  /**
   * BookingEvent createMany
   */
  export type BookingEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingEvents.
     */
    data: BookingEventCreateManyInput | BookingEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingEvent createManyAndReturn
   */
  export type BookingEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * The data used to create many BookingEvents.
     */
    data: BookingEventCreateManyInput | BookingEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingEvent update
   */
  export type BookingEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingEvent.
     */
    data: XOR<BookingEventUpdateInput, BookingEventUncheckedUpdateInput>
    /**
     * Choose, which BookingEvent to update.
     */
    where: BookingEventWhereUniqueInput
  }

  /**
   * BookingEvent updateMany
   */
  export type BookingEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingEvents.
     */
    data: XOR<BookingEventUpdateManyMutationInput, BookingEventUncheckedUpdateManyInput>
    /**
     * Filter which BookingEvents to update
     */
    where?: BookingEventWhereInput
    /**
     * Limit how many BookingEvents to update.
     */
    limit?: number
  }

  /**
   * BookingEvent updateManyAndReturn
   */
  export type BookingEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * The data used to update BookingEvents.
     */
    data: XOR<BookingEventUpdateManyMutationInput, BookingEventUncheckedUpdateManyInput>
    /**
     * Filter which BookingEvents to update
     */
    where?: BookingEventWhereInput
    /**
     * Limit how many BookingEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingEvent upsert
   */
  export type BookingEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingEvent to update in case it exists.
     */
    where: BookingEventWhereUniqueInput
    /**
     * In case the BookingEvent found by the `where` argument doesn't exist, create a new BookingEvent with this data.
     */
    create: XOR<BookingEventCreateInput, BookingEventUncheckedCreateInput>
    /**
     * In case the BookingEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingEventUpdateInput, BookingEventUncheckedUpdateInput>
  }

  /**
   * BookingEvent delete
   */
  export type BookingEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
    /**
     * Filter which BookingEvent to delete.
     */
    where: BookingEventWhereUniqueInput
  }

  /**
   * BookingEvent deleteMany
   */
  export type BookingEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingEvents to delete
     */
    where?: BookingEventWhereInput
    /**
     * Limit how many BookingEvents to delete.
     */
    limit?: number
  }

  /**
   * BookingEvent without action
   */
  export type BookingEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    telegramBotToken: 'telegramBotToken',
    webhookUrl: 'webhookUrl',
    subscriptionStatus: 'subscriptionStatus',
    stripeCustomerId: 'stripeCustomerId',
    settings: 'settings',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const TenantUserScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    inviteToken: 'inviteToken',
    inviteExpiry: 'inviteExpiry',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt'
  };

  export type TenantUserScalarFieldEnum = (typeof TenantUserScalarFieldEnum)[keyof typeof TenantUserScalarFieldEnum]


  export const GuestScalarFieldEnum: {
    id: 'id',
    telegramId: 'telegramId',
    firstName: 'firstName',
    lastName: 'lastName',
    phoneNumber: 'phoneNumber',
    languageCode: 'languageCode',
    optInNotifications: 'optInNotifications',
    createdAt: 'createdAt'
  };

  export type GuestScalarFieldEnum = (typeof GuestScalarFieldEnum)[keyof typeof GuestScalarFieldEnum]


  export const TenantGuestScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    guestId: 'guestId',
    firstSeen: 'firstSeen'
  };

  export type TenantGuestScalarFieldEnum = (typeof TenantGuestScalarFieldEnum)[keyof typeof TenantGuestScalarFieldEnum]


  export const RoomCategoryScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    name: 'name',
    description: 'description',
    pricePerNight: 'pricePerNight',
    currency: 'currency',
    maxGuests: 'maxGuests',
    totalInventory: 'totalInventory',
    imageUrls: 'imageUrls',
    amenities: 'amenities',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomCategoryScalarFieldEnum = (typeof RoomCategoryScalarFieldEnum)[keyof typeof RoomCategoryScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    guestId: 'guestId',
    roomCategoryId: 'roomCategoryId',
    bookingReference: 'bookingReference',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    nightsCount: 'nightsCount',
    guestCount: 'guestCount',
    totalAmountPaid: 'totalAmountPaid',
    currency: 'currency',
    status: 'status',
    paymentIntentId: 'paymentIntentId',
    telegramPaymentChargeId: 'telegramPaymentChargeId',
    receiptPdfUrl: 'receiptPdfUrl',
    reviewSentAt: 'reviewSentAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const BookingEventScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    event: 'event',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type BookingEventScalarFieldEnum = (typeof BookingEventScalarFieldEnum)[keyof typeof BookingEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StaffRole'
   */
  export type EnumStaffRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StaffRole'>
    


  /**
   * Reference to a field of type 'StaffRole[]'
   */
  export type ListEnumStaffRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StaffRole[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    telegramBotToken?: StringFilter<"Tenant"> | string
    webhookUrl?: StringNullableFilter<"Tenant"> | string | null
    subscriptionStatus?: EnumSubscriptionStatusFilter<"Tenant"> | $Enums.SubscriptionStatus
    stripeCustomerId?: StringNullableFilter<"Tenant"> | string | null
    settings?: JsonFilter<"Tenant">
    isActive?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    tenantUsers?: TenantUserListRelationFilter
    tenantGuests?: TenantGuestListRelationFilter
    roomCategories?: RoomCategoryListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    telegramBotToken?: SortOrder
    webhookUrl?: SortOrderInput | SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    settings?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantUsers?: TenantUserOrderByRelationAggregateInput
    tenantGuests?: TenantGuestOrderByRelationAggregateInput
    roomCategories?: RoomCategoryOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    telegramBotToken?: string
    stripeCustomerId?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    webhookUrl?: StringNullableFilter<"Tenant"> | string | null
    subscriptionStatus?: EnumSubscriptionStatusFilter<"Tenant"> | $Enums.SubscriptionStatus
    settings?: JsonFilter<"Tenant">
    isActive?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    tenantUsers?: TenantUserListRelationFilter
    tenantGuests?: TenantGuestListRelationFilter
    roomCategories?: RoomCategoryListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id" | "telegramBotToken" | "stripeCustomerId">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    telegramBotToken?: SortOrder
    webhookUrl?: SortOrderInput | SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    settings?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    telegramBotToken?: StringWithAggregatesFilter<"Tenant"> | string
    webhookUrl?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    subscriptionStatus?: EnumSubscriptionStatusWithAggregatesFilter<"Tenant"> | $Enums.SubscriptionStatus
    stripeCustomerId?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    settings?: JsonWithAggregatesFilter<"Tenant">
    isActive?: BoolWithAggregatesFilter<"Tenant"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type TenantUserWhereInput = {
    AND?: TenantUserWhereInput | TenantUserWhereInput[]
    OR?: TenantUserWhereInput[]
    NOT?: TenantUserWhereInput | TenantUserWhereInput[]
    id?: StringFilter<"TenantUser"> | string
    tenantId?: StringFilter<"TenantUser"> | string
    email?: StringFilter<"TenantUser"> | string
    passwordHash?: StringFilter<"TenantUser"> | string
    role?: EnumStaffRoleFilter<"TenantUser"> | $Enums.StaffRole
    inviteToken?: StringNullableFilter<"TenantUser"> | string | null
    inviteExpiry?: DateTimeNullableFilter<"TenantUser"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"TenantUser"> | Date | string | null
    createdAt?: DateTimeFilter<"TenantUser"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type TenantUserOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    inviteToken?: SortOrderInput | SortOrder
    inviteExpiry?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type TenantUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    inviteToken?: string
    tenantId_email?: TenantUserTenantIdEmailCompoundUniqueInput
    AND?: TenantUserWhereInput | TenantUserWhereInput[]
    OR?: TenantUserWhereInput[]
    NOT?: TenantUserWhereInput | TenantUserWhereInput[]
    tenantId?: StringFilter<"TenantUser"> | string
    email?: StringFilter<"TenantUser"> | string
    passwordHash?: StringFilter<"TenantUser"> | string
    role?: EnumStaffRoleFilter<"TenantUser"> | $Enums.StaffRole
    inviteExpiry?: DateTimeNullableFilter<"TenantUser"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"TenantUser"> | Date | string | null
    createdAt?: DateTimeFilter<"TenantUser"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id" | "inviteToken" | "tenantId_email">

  export type TenantUserOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    inviteToken?: SortOrderInput | SortOrder
    inviteExpiry?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TenantUserCountOrderByAggregateInput
    _max?: TenantUserMaxOrderByAggregateInput
    _min?: TenantUserMinOrderByAggregateInput
  }

  export type TenantUserScalarWhereWithAggregatesInput = {
    AND?: TenantUserScalarWhereWithAggregatesInput | TenantUserScalarWhereWithAggregatesInput[]
    OR?: TenantUserScalarWhereWithAggregatesInput[]
    NOT?: TenantUserScalarWhereWithAggregatesInput | TenantUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TenantUser"> | string
    tenantId?: StringWithAggregatesFilter<"TenantUser"> | string
    email?: StringWithAggregatesFilter<"TenantUser"> | string
    passwordHash?: StringWithAggregatesFilter<"TenantUser"> | string
    role?: EnumStaffRoleWithAggregatesFilter<"TenantUser"> | $Enums.StaffRole
    inviteToken?: StringNullableWithAggregatesFilter<"TenantUser"> | string | null
    inviteExpiry?: DateTimeNullableWithAggregatesFilter<"TenantUser"> | Date | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"TenantUser"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TenantUser"> | Date | string
  }

  export type GuestWhereInput = {
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    id?: StringFilter<"Guest"> | string
    telegramId?: BigIntFilter<"Guest"> | bigint | number
    firstName?: StringFilter<"Guest"> | string
    lastName?: StringNullableFilter<"Guest"> | string | null
    phoneNumber?: StringNullableFilter<"Guest"> | string | null
    languageCode?: StringNullableFilter<"Guest"> | string | null
    optInNotifications?: BoolFilter<"Guest"> | boolean
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    tenantGuests?: TenantGuestListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type GuestOrderByWithRelationInput = {
    id?: SortOrder
    telegramId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    languageCode?: SortOrderInput | SortOrder
    optInNotifications?: SortOrder
    createdAt?: SortOrder
    tenantGuests?: TenantGuestOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type GuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    telegramId?: bigint | number
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    firstName?: StringFilter<"Guest"> | string
    lastName?: StringNullableFilter<"Guest"> | string | null
    phoneNumber?: StringNullableFilter<"Guest"> | string | null
    languageCode?: StringNullableFilter<"Guest"> | string | null
    optInNotifications?: BoolFilter<"Guest"> | boolean
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    tenantGuests?: TenantGuestListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id" | "telegramId">

  export type GuestOrderByWithAggregationInput = {
    id?: SortOrder
    telegramId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    languageCode?: SortOrderInput | SortOrder
    optInNotifications?: SortOrder
    createdAt?: SortOrder
    _count?: GuestCountOrderByAggregateInput
    _avg?: GuestAvgOrderByAggregateInput
    _max?: GuestMaxOrderByAggregateInput
    _min?: GuestMinOrderByAggregateInput
    _sum?: GuestSumOrderByAggregateInput
  }

  export type GuestScalarWhereWithAggregatesInput = {
    AND?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    OR?: GuestScalarWhereWithAggregatesInput[]
    NOT?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guest"> | string
    telegramId?: BigIntWithAggregatesFilter<"Guest"> | bigint | number
    firstName?: StringWithAggregatesFilter<"Guest"> | string
    lastName?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    languageCode?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    optInNotifications?: BoolWithAggregatesFilter<"Guest"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Guest"> | Date | string
  }

  export type TenantGuestWhereInput = {
    AND?: TenantGuestWhereInput | TenantGuestWhereInput[]
    OR?: TenantGuestWhereInput[]
    NOT?: TenantGuestWhereInput | TenantGuestWhereInput[]
    id?: StringFilter<"TenantGuest"> | string
    tenantId?: StringFilter<"TenantGuest"> | string
    guestId?: StringFilter<"TenantGuest"> | string
    firstSeen?: DateTimeFilter<"TenantGuest"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
  }

  export type TenantGuestOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    guestId?: SortOrder
    firstSeen?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    guest?: GuestOrderByWithRelationInput
  }

  export type TenantGuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_guestId?: TenantGuestTenantIdGuestIdCompoundUniqueInput
    AND?: TenantGuestWhereInput | TenantGuestWhereInput[]
    OR?: TenantGuestWhereInput[]
    NOT?: TenantGuestWhereInput | TenantGuestWhereInput[]
    tenantId?: StringFilter<"TenantGuest"> | string
    guestId?: StringFilter<"TenantGuest"> | string
    firstSeen?: DateTimeFilter<"TenantGuest"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
  }, "id" | "tenantId_guestId">

  export type TenantGuestOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    guestId?: SortOrder
    firstSeen?: SortOrder
    _count?: TenantGuestCountOrderByAggregateInput
    _max?: TenantGuestMaxOrderByAggregateInput
    _min?: TenantGuestMinOrderByAggregateInput
  }

  export type TenantGuestScalarWhereWithAggregatesInput = {
    AND?: TenantGuestScalarWhereWithAggregatesInput | TenantGuestScalarWhereWithAggregatesInput[]
    OR?: TenantGuestScalarWhereWithAggregatesInput[]
    NOT?: TenantGuestScalarWhereWithAggregatesInput | TenantGuestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TenantGuest"> | string
    tenantId?: StringWithAggregatesFilter<"TenantGuest"> | string
    guestId?: StringWithAggregatesFilter<"TenantGuest"> | string
    firstSeen?: DateTimeWithAggregatesFilter<"TenantGuest"> | Date | string
  }

  export type RoomCategoryWhereInput = {
    AND?: RoomCategoryWhereInput | RoomCategoryWhereInput[]
    OR?: RoomCategoryWhereInput[]
    NOT?: RoomCategoryWhereInput | RoomCategoryWhereInput[]
    id?: StringFilter<"RoomCategory"> | string
    tenantId?: StringFilter<"RoomCategory"> | string
    name?: StringFilter<"RoomCategory"> | string
    description?: StringFilter<"RoomCategory"> | string
    pricePerNight?: DecimalFilter<"RoomCategory"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"RoomCategory"> | string
    maxGuests?: IntFilter<"RoomCategory"> | number
    totalInventory?: IntFilter<"RoomCategory"> | number
    imageUrls?: StringNullableListFilter<"RoomCategory">
    amenities?: StringNullableListFilter<"RoomCategory">
    isActive?: BoolFilter<"RoomCategory"> | boolean
    createdAt?: DateTimeFilter<"RoomCategory"> | Date | string
    updatedAt?: DateTimeFilter<"RoomCategory"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    bookings?: BookingListRelationFilter
  }

  export type RoomCategoryOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerNight?: SortOrder
    currency?: SortOrder
    maxGuests?: SortOrder
    totalInventory?: SortOrder
    imageUrls?: SortOrder
    amenities?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type RoomCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomCategoryWhereInput | RoomCategoryWhereInput[]
    OR?: RoomCategoryWhereInput[]
    NOT?: RoomCategoryWhereInput | RoomCategoryWhereInput[]
    tenantId?: StringFilter<"RoomCategory"> | string
    name?: StringFilter<"RoomCategory"> | string
    description?: StringFilter<"RoomCategory"> | string
    pricePerNight?: DecimalFilter<"RoomCategory"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"RoomCategory"> | string
    maxGuests?: IntFilter<"RoomCategory"> | number
    totalInventory?: IntFilter<"RoomCategory"> | number
    imageUrls?: StringNullableListFilter<"RoomCategory">
    amenities?: StringNullableListFilter<"RoomCategory">
    isActive?: BoolFilter<"RoomCategory"> | boolean
    createdAt?: DateTimeFilter<"RoomCategory"> | Date | string
    updatedAt?: DateTimeFilter<"RoomCategory"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    bookings?: BookingListRelationFilter
  }, "id">

  export type RoomCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerNight?: SortOrder
    currency?: SortOrder
    maxGuests?: SortOrder
    totalInventory?: SortOrder
    imageUrls?: SortOrder
    amenities?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCategoryCountOrderByAggregateInput
    _avg?: RoomCategoryAvgOrderByAggregateInput
    _max?: RoomCategoryMaxOrderByAggregateInput
    _min?: RoomCategoryMinOrderByAggregateInput
    _sum?: RoomCategorySumOrderByAggregateInput
  }

  export type RoomCategoryScalarWhereWithAggregatesInput = {
    AND?: RoomCategoryScalarWhereWithAggregatesInput | RoomCategoryScalarWhereWithAggregatesInput[]
    OR?: RoomCategoryScalarWhereWithAggregatesInput[]
    NOT?: RoomCategoryScalarWhereWithAggregatesInput | RoomCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomCategory"> | string
    tenantId?: StringWithAggregatesFilter<"RoomCategory"> | string
    name?: StringWithAggregatesFilter<"RoomCategory"> | string
    description?: StringWithAggregatesFilter<"RoomCategory"> | string
    pricePerNight?: DecimalWithAggregatesFilter<"RoomCategory"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"RoomCategory"> | string
    maxGuests?: IntWithAggregatesFilter<"RoomCategory"> | number
    totalInventory?: IntWithAggregatesFilter<"RoomCategory"> | number
    imageUrls?: StringNullableListFilter<"RoomCategory">
    amenities?: StringNullableListFilter<"RoomCategory">
    isActive?: BoolWithAggregatesFilter<"RoomCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RoomCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoomCategory"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    tenantId?: StringFilter<"Booking"> | string
    guestId?: StringFilter<"Booking"> | string
    roomCategoryId?: StringFilter<"Booking"> | string
    bookingReference?: StringFilter<"Booking"> | string
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    nightsCount?: IntFilter<"Booking"> | number
    guestCount?: IntFilter<"Booking"> | number
    totalAmountPaid?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    paymentIntentId?: StringNullableFilter<"Booking"> | string | null
    telegramPaymentChargeId?: StringNullableFilter<"Booking"> | string | null
    receiptPdfUrl?: StringNullableFilter<"Booking"> | string | null
    reviewSentAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
    roomCategory?: XOR<RoomCategoryScalarRelationFilter, RoomCategoryWhereInput>
    events?: BookingEventListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    guestId?: SortOrder
    roomCategoryId?: SortOrder
    bookingReference?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    nightsCount?: SortOrder
    guestCount?: SortOrder
    totalAmountPaid?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentIntentId?: SortOrderInput | SortOrder
    telegramPaymentChargeId?: SortOrderInput | SortOrder
    receiptPdfUrl?: SortOrderInput | SortOrder
    reviewSentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    guest?: GuestOrderByWithRelationInput
    roomCategory?: RoomCategoryOrderByWithRelationInput
    events?: BookingEventOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingReference?: string
    paymentIntentId?: string
    telegramPaymentChargeId?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    tenantId?: StringFilter<"Booking"> | string
    guestId?: StringFilter<"Booking"> | string
    roomCategoryId?: StringFilter<"Booking"> | string
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    nightsCount?: IntFilter<"Booking"> | number
    guestCount?: IntFilter<"Booking"> | number
    totalAmountPaid?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    receiptPdfUrl?: StringNullableFilter<"Booking"> | string | null
    reviewSentAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
    roomCategory?: XOR<RoomCategoryScalarRelationFilter, RoomCategoryWhereInput>
    events?: BookingEventListRelationFilter
  }, "id" | "bookingReference" | "paymentIntentId" | "telegramPaymentChargeId">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    guestId?: SortOrder
    roomCategoryId?: SortOrder
    bookingReference?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    nightsCount?: SortOrder
    guestCount?: SortOrder
    totalAmountPaid?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentIntentId?: SortOrderInput | SortOrder
    telegramPaymentChargeId?: SortOrderInput | SortOrder
    receiptPdfUrl?: SortOrderInput | SortOrder
    reviewSentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    tenantId?: StringWithAggregatesFilter<"Booking"> | string
    guestId?: StringWithAggregatesFilter<"Booking"> | string
    roomCategoryId?: StringWithAggregatesFilter<"Booking"> | string
    bookingReference?: StringWithAggregatesFilter<"Booking"> | string
    checkIn?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    checkOut?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    nightsCount?: IntWithAggregatesFilter<"Booking"> | number
    guestCount?: IntWithAggregatesFilter<"Booking"> | number
    totalAmountPaid?: DecimalWithAggregatesFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Booking"> | string
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    paymentIntentId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    telegramPaymentChargeId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    receiptPdfUrl?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    reviewSentAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type BookingEventWhereInput = {
    AND?: BookingEventWhereInput | BookingEventWhereInput[]
    OR?: BookingEventWhereInput[]
    NOT?: BookingEventWhereInput | BookingEventWhereInput[]
    id?: StringFilter<"BookingEvent"> | string
    bookingId?: StringFilter<"BookingEvent"> | string
    event?: StringFilter<"BookingEvent"> | string
    metadata?: JsonFilter<"BookingEvent">
    createdAt?: DateTimeFilter<"BookingEvent"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type BookingEventOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    event?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type BookingEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingEventWhereInput | BookingEventWhereInput[]
    OR?: BookingEventWhereInput[]
    NOT?: BookingEventWhereInput | BookingEventWhereInput[]
    bookingId?: StringFilter<"BookingEvent"> | string
    event?: StringFilter<"BookingEvent"> | string
    metadata?: JsonFilter<"BookingEvent">
    createdAt?: DateTimeFilter<"BookingEvent"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id">

  export type BookingEventOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    event?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    _count?: BookingEventCountOrderByAggregateInput
    _max?: BookingEventMaxOrderByAggregateInput
    _min?: BookingEventMinOrderByAggregateInput
  }

  export type BookingEventScalarWhereWithAggregatesInput = {
    AND?: BookingEventScalarWhereWithAggregatesInput | BookingEventScalarWhereWithAggregatesInput[]
    OR?: BookingEventScalarWhereWithAggregatesInput[]
    NOT?: BookingEventScalarWhereWithAggregatesInput | BookingEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookingEvent"> | string
    bookingId?: StringWithAggregatesFilter<"BookingEvent"> | string
    event?: StringWithAggregatesFilter<"BookingEvent"> | string
    metadata?: JsonWithAggregatesFilter<"BookingEvent">
    createdAt?: DateTimeWithAggregatesFilter<"BookingEvent"> | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    telegramBotToken: string
    webhookUrl?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantUsers?: TenantUserCreateNestedManyWithoutTenantInput
    tenantGuests?: TenantGuestCreateNestedManyWithoutTenantInput
    roomCategories?: RoomCategoryCreateNestedManyWithoutTenantInput
    bookings?: BookingCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    telegramBotToken: string
    webhookUrl?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantUsers?: TenantUserUncheckedCreateNestedManyWithoutTenantInput
    tenantGuests?: TenantGuestUncheckedCreateNestedManyWithoutTenantInput
    roomCategories?: RoomCategoryUncheckedCreateNestedManyWithoutTenantInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    telegramBotToken?: StringFieldUpdateOperationsInput | string
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantUsers?: TenantUserUpdateManyWithoutTenantNestedInput
    tenantGuests?: TenantGuestUpdateManyWithoutTenantNestedInput
    roomCategories?: RoomCategoryUpdateManyWithoutTenantNestedInput
    bookings?: BookingUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    telegramBotToken?: StringFieldUpdateOperationsInput | string
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantUsers?: TenantUserUncheckedUpdateManyWithoutTenantNestedInput
    tenantGuests?: TenantGuestUncheckedUpdateManyWithoutTenantNestedInput
    roomCategories?: RoomCategoryUncheckedUpdateManyWithoutTenantNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    telegramBotToken: string
    webhookUrl?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    telegramBotToken?: StringFieldUpdateOperationsInput | string
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    telegramBotToken?: StringFieldUpdateOperationsInput | string
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.StaffRole
    inviteToken?: string | null
    inviteExpiry?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    tenant: TenantCreateNestedOneWithoutTenantUsersInput
  }

  export type TenantUserUncheckedCreateInput = {
    id?: string
    tenantId: string
    email: string
    passwordHash: string
    role?: $Enums.StaffRole
    inviteToken?: string | null
    inviteExpiry?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TenantUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutTenantUsersNestedInput
  }

  export type TenantUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUserCreateManyInput = {
    id?: string
    tenantId: string
    email: string
    passwordHash: string
    role?: $Enums.StaffRole
    inviteToken?: string | null
    inviteExpiry?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TenantUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestCreateInput = {
    id?: string
    telegramId: bigint | number
    firstName: string
    lastName?: string | null
    phoneNumber?: string | null
    languageCode?: string | null
    optInNotifications?: boolean
    createdAt?: Date | string
    tenantGuests?: TenantGuestCreateNestedManyWithoutGuestInput
    bookings?: BookingCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateInput = {
    id?: string
    telegramId: bigint | number
    firstName: string
    lastName?: string | null
    phoneNumber?: string | null
    languageCode?: string | null
    optInNotifications?: boolean
    createdAt?: Date | string
    tenantGuests?: TenantGuestUncheckedCreateNestedManyWithoutGuestInput
    bookings?: BookingUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    optInNotifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantGuests?: TenantGuestUpdateManyWithoutGuestNestedInput
    bookings?: BookingUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    optInNotifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantGuests?: TenantGuestUncheckedUpdateManyWithoutGuestNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type GuestCreateManyInput = {
    id?: string
    telegramId: bigint | number
    firstName: string
    lastName?: string | null
    phoneNumber?: string | null
    languageCode?: string | null
    optInNotifications?: boolean
    createdAt?: Date | string
  }

  export type GuestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    optInNotifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    optInNotifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantGuestCreateInput = {
    id?: string
    firstSeen?: Date | string
    tenant: TenantCreateNestedOneWithoutTenantGuestsInput
    guest: GuestCreateNestedOneWithoutTenantGuestsInput
  }

  export type TenantGuestUncheckedCreateInput = {
    id?: string
    tenantId: string
    guestId: string
    firstSeen?: Date | string
  }

  export type TenantGuestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutTenantGuestsNestedInput
    guest?: GuestUpdateOneRequiredWithoutTenantGuestsNestedInput
  }

  export type TenantGuestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantGuestCreateManyInput = {
    id?: string
    tenantId: string
    guestId: string
    firstSeen?: Date | string
  }

  export type TenantGuestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantGuestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCategoryCreateInput = {
    id?: string
    name: string
    description: string
    pricePerNight: Decimal | DecimalJsLike | number | string
    currency?: string
    maxGuests: number
    totalInventory: number
    imageUrls?: RoomCategoryCreateimageUrlsInput | string[]
    amenities?: RoomCategoryCreateamenitiesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutRoomCategoriesInput
    bookings?: BookingCreateNestedManyWithoutRoomCategoryInput
  }

  export type RoomCategoryUncheckedCreateInput = {
    id?: string
    tenantId: string
    name: string
    description: string
    pricePerNight: Decimal | DecimalJsLike | number | string
    currency?: string
    maxGuests: number
    totalInventory: number
    imageUrls?: RoomCategoryCreateimageUrlsInput | string[]
    amenities?: RoomCategoryCreateamenitiesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomCategoryInput
  }

  export type RoomCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerNight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    totalInventory?: IntFieldUpdateOperationsInput | number
    imageUrls?: RoomCategoryUpdateimageUrlsInput | string[]
    amenities?: RoomCategoryUpdateamenitiesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutRoomCategoriesNestedInput
    bookings?: BookingUpdateManyWithoutRoomCategoryNestedInput
  }

  export type RoomCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerNight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    totalInventory?: IntFieldUpdateOperationsInput | number
    imageUrls?: RoomCategoryUpdateimageUrlsInput | string[]
    amenities?: RoomCategoryUpdateamenitiesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutRoomCategoryNestedInput
  }

  export type RoomCategoryCreateManyInput = {
    id?: string
    tenantId: string
    name: string
    description: string
    pricePerNight: Decimal | DecimalJsLike | number | string
    currency?: string
    maxGuests: number
    totalInventory: number
    imageUrls?: RoomCategoryCreateimageUrlsInput | string[]
    amenities?: RoomCategoryCreateamenitiesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerNight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    totalInventory?: IntFieldUpdateOperationsInput | number
    imageUrls?: RoomCategoryUpdateimageUrlsInput | string[]
    amenities?: RoomCategoryUpdateamenitiesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerNight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    totalInventory?: IntFieldUpdateOperationsInput | number
    imageUrls?: RoomCategoryUpdateimageUrlsInput | string[]
    amenities?: RoomCategoryUpdateamenitiesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    bookingReference: string
    checkIn: Date | string
    checkOut: Date | string
    nightsCount: number
    guestCount: number
    totalAmountPaid: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.BookingStatus
    paymentIntentId?: string | null
    telegramPaymentChargeId?: string | null
    receiptPdfUrl?: string | null
    reviewSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutBookingsInput
    guest: GuestCreateNestedOneWithoutBookingsInput
    roomCategory: RoomCategoryCreateNestedOneWithoutBookingsInput
    events?: BookingEventCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    tenantId: string
    guestId: string
    roomCategoryId: string
    bookingReference: string
    checkIn: Date | string
    checkOut: Date | string
    nightsCount: number
    guestCount: number
    totalAmountPaid: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.BookingStatus
    paymentIntentId?: string | null
    telegramPaymentChargeId?: string | null
    receiptPdfUrl?: string | null
    reviewSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: BookingEventUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    totalAmountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramPaymentChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviewSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutBookingsNestedInput
    guest?: GuestUpdateOneRequiredWithoutBookingsNestedInput
    roomCategory?: RoomCategoryUpdateOneRequiredWithoutBookingsNestedInput
    events?: BookingEventUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    roomCategoryId?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    totalAmountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramPaymentChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviewSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: BookingEventUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    tenantId: string
    guestId: string
    roomCategoryId: string
    bookingReference: string
    checkIn: Date | string
    checkOut: Date | string
    nightsCount: number
    guestCount: number
    totalAmountPaid: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.BookingStatus
    paymentIntentId?: string | null
    telegramPaymentChargeId?: string | null
    receiptPdfUrl?: string | null
    reviewSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    totalAmountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramPaymentChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviewSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    roomCategoryId?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    totalAmountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramPaymentChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviewSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingEventCreateInput = {
    id?: string
    event: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutEventsInput
  }

  export type BookingEventUncheckedCreateInput = {
    id?: string
    bookingId: string
    event: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BookingEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutEventsNestedInput
  }

  export type BookingEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingEventCreateManyInput = {
    id?: string
    bookingId: string
    event: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BookingEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TenantUserListRelationFilter = {
    every?: TenantUserWhereInput
    some?: TenantUserWhereInput
    none?: TenantUserWhereInput
  }

  export type TenantGuestListRelationFilter = {
    every?: TenantGuestWhereInput
    some?: TenantGuestWhereInput
    none?: TenantGuestWhereInput
  }

  export type RoomCategoryListRelationFilter = {
    every?: RoomCategoryWhereInput
    some?: RoomCategoryWhereInput
    none?: RoomCategoryWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TenantUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantGuestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    telegramBotToken?: SortOrder
    webhookUrl?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrder
    settings?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    telegramBotToken?: SortOrder
    webhookUrl?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    telegramBotToken?: SortOrder
    webhookUrl?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStaffRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffRoleFilter<$PrismaModel> | $Enums.StaffRole
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type TenantUserTenantIdEmailCompoundUniqueInput = {
    tenantId: string
    email: string
  }

  export type TenantUserCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    inviteToken?: SortOrder
    inviteExpiry?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TenantUserMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    inviteToken?: SortOrder
    inviteExpiry?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TenantUserMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    inviteToken?: SortOrder
    inviteExpiry?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumStaffRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffRoleWithAggregatesFilter<$PrismaModel> | $Enums.StaffRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffRoleFilter<$PrismaModel>
    _max?: NestedEnumStaffRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type GuestCountOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    languageCode?: SortOrder
    optInNotifications?: SortOrder
    createdAt?: SortOrder
  }

  export type GuestAvgOrderByAggregateInput = {
    telegramId?: SortOrder
  }

  export type GuestMaxOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    languageCode?: SortOrder
    optInNotifications?: SortOrder
    createdAt?: SortOrder
  }

  export type GuestMinOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    languageCode?: SortOrder
    optInNotifications?: SortOrder
    createdAt?: SortOrder
  }

  export type GuestSumOrderByAggregateInput = {
    telegramId?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type GuestScalarRelationFilter = {
    is?: GuestWhereInput
    isNot?: GuestWhereInput
  }

  export type TenantGuestTenantIdGuestIdCompoundUniqueInput = {
    tenantId: string
    guestId: string
  }

  export type TenantGuestCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    guestId?: SortOrder
    firstSeen?: SortOrder
  }

  export type TenantGuestMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    guestId?: SortOrder
    firstSeen?: SortOrder
  }

  export type TenantGuestMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    guestId?: SortOrder
    firstSeen?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type RoomCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerNight?: SortOrder
    currency?: SortOrder
    maxGuests?: SortOrder
    totalInventory?: SortOrder
    imageUrls?: SortOrder
    amenities?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomCategoryAvgOrderByAggregateInput = {
    pricePerNight?: SortOrder
    maxGuests?: SortOrder
    totalInventory?: SortOrder
  }

  export type RoomCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerNight?: SortOrder
    currency?: SortOrder
    maxGuests?: SortOrder
    totalInventory?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePerNight?: SortOrder
    currency?: SortOrder
    maxGuests?: SortOrder
    totalInventory?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomCategorySumOrderByAggregateInput = {
    pricePerNight?: SortOrder
    maxGuests?: SortOrder
    totalInventory?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type RoomCategoryScalarRelationFilter = {
    is?: RoomCategoryWhereInput
    isNot?: RoomCategoryWhereInput
  }

  export type BookingEventListRelationFilter = {
    every?: BookingEventWhereInput
    some?: BookingEventWhereInput
    none?: BookingEventWhereInput
  }

  export type BookingEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    guestId?: SortOrder
    roomCategoryId?: SortOrder
    bookingReference?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    nightsCount?: SortOrder
    guestCount?: SortOrder
    totalAmountPaid?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentIntentId?: SortOrder
    telegramPaymentChargeId?: SortOrder
    receiptPdfUrl?: SortOrder
    reviewSentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    nightsCount?: SortOrder
    guestCount?: SortOrder
    totalAmountPaid?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    guestId?: SortOrder
    roomCategoryId?: SortOrder
    bookingReference?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    nightsCount?: SortOrder
    guestCount?: SortOrder
    totalAmountPaid?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentIntentId?: SortOrder
    telegramPaymentChargeId?: SortOrder
    receiptPdfUrl?: SortOrder
    reviewSentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    guestId?: SortOrder
    roomCategoryId?: SortOrder
    bookingReference?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    nightsCount?: SortOrder
    guestCount?: SortOrder
    totalAmountPaid?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentIntentId?: SortOrder
    telegramPaymentChargeId?: SortOrder
    receiptPdfUrl?: SortOrder
    reviewSentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    nightsCount?: SortOrder
    guestCount?: SortOrder
    totalAmountPaid?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type BookingEventCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    event?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingEventMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    event?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingEventMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    event?: SortOrder
    createdAt?: SortOrder
  }

  export type TenantUserCreateNestedManyWithoutTenantInput = {
    create?: XOR<TenantUserCreateWithoutTenantInput, TenantUserUncheckedCreateWithoutTenantInput> | TenantUserCreateWithoutTenantInput[] | TenantUserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenantUserCreateOrConnectWithoutTenantInput | TenantUserCreateOrConnectWithoutTenantInput[]
    createMany?: TenantUserCreateManyTenantInputEnvelope
    connect?: TenantUserWhereUniqueInput | TenantUserWhereUniqueInput[]
  }

  export type TenantGuestCreateNestedManyWithoutTenantInput = {
    create?: XOR<TenantGuestCreateWithoutTenantInput, TenantGuestUncheckedCreateWithoutTenantInput> | TenantGuestCreateWithoutTenantInput[] | TenantGuestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenantGuestCreateOrConnectWithoutTenantInput | TenantGuestCreateOrConnectWithoutTenantInput[]
    createMany?: TenantGuestCreateManyTenantInputEnvelope
    connect?: TenantGuestWhereUniqueInput | TenantGuestWhereUniqueInput[]
  }

  export type RoomCategoryCreateNestedManyWithoutTenantInput = {
    create?: XOR<RoomCategoryCreateWithoutTenantInput, RoomCategoryUncheckedCreateWithoutTenantInput> | RoomCategoryCreateWithoutTenantInput[] | RoomCategoryUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RoomCategoryCreateOrConnectWithoutTenantInput | RoomCategoryCreateOrConnectWithoutTenantInput[]
    createMany?: RoomCategoryCreateManyTenantInputEnvelope
    connect?: RoomCategoryWhereUniqueInput | RoomCategoryWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutTenantInput = {
    create?: XOR<BookingCreateWithoutTenantInput, BookingUncheckedCreateWithoutTenantInput> | BookingCreateWithoutTenantInput[] | BookingUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTenantInput | BookingCreateOrConnectWithoutTenantInput[]
    createMany?: BookingCreateManyTenantInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TenantUserUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<TenantUserCreateWithoutTenantInput, TenantUserUncheckedCreateWithoutTenantInput> | TenantUserCreateWithoutTenantInput[] | TenantUserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenantUserCreateOrConnectWithoutTenantInput | TenantUserCreateOrConnectWithoutTenantInput[]
    createMany?: TenantUserCreateManyTenantInputEnvelope
    connect?: TenantUserWhereUniqueInput | TenantUserWhereUniqueInput[]
  }

  export type TenantGuestUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<TenantGuestCreateWithoutTenantInput, TenantGuestUncheckedCreateWithoutTenantInput> | TenantGuestCreateWithoutTenantInput[] | TenantGuestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenantGuestCreateOrConnectWithoutTenantInput | TenantGuestCreateOrConnectWithoutTenantInput[]
    createMany?: TenantGuestCreateManyTenantInputEnvelope
    connect?: TenantGuestWhereUniqueInput | TenantGuestWhereUniqueInput[]
  }

  export type RoomCategoryUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<RoomCategoryCreateWithoutTenantInput, RoomCategoryUncheckedCreateWithoutTenantInput> | RoomCategoryCreateWithoutTenantInput[] | RoomCategoryUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RoomCategoryCreateOrConnectWithoutTenantInput | RoomCategoryCreateOrConnectWithoutTenantInput[]
    createMany?: RoomCategoryCreateManyTenantInputEnvelope
    connect?: RoomCategoryWhereUniqueInput | RoomCategoryWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<BookingCreateWithoutTenantInput, BookingUncheckedCreateWithoutTenantInput> | BookingCreateWithoutTenantInput[] | BookingUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTenantInput | BookingCreateOrConnectWithoutTenantInput[]
    createMany?: BookingCreateManyTenantInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TenantUserUpdateManyWithoutTenantNestedInput = {
    create?: XOR<TenantUserCreateWithoutTenantInput, TenantUserUncheckedCreateWithoutTenantInput> | TenantUserCreateWithoutTenantInput[] | TenantUserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenantUserCreateOrConnectWithoutTenantInput | TenantUserCreateOrConnectWithoutTenantInput[]
    upsert?: TenantUserUpsertWithWhereUniqueWithoutTenantInput | TenantUserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: TenantUserCreateManyTenantInputEnvelope
    set?: TenantUserWhereUniqueInput | TenantUserWhereUniqueInput[]
    disconnect?: TenantUserWhereUniqueInput | TenantUserWhereUniqueInput[]
    delete?: TenantUserWhereUniqueInput | TenantUserWhereUniqueInput[]
    connect?: TenantUserWhereUniqueInput | TenantUserWhereUniqueInput[]
    update?: TenantUserUpdateWithWhereUniqueWithoutTenantInput | TenantUserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: TenantUserUpdateManyWithWhereWithoutTenantInput | TenantUserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: TenantUserScalarWhereInput | TenantUserScalarWhereInput[]
  }

  export type TenantGuestUpdateManyWithoutTenantNestedInput = {
    create?: XOR<TenantGuestCreateWithoutTenantInput, TenantGuestUncheckedCreateWithoutTenantInput> | TenantGuestCreateWithoutTenantInput[] | TenantGuestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenantGuestCreateOrConnectWithoutTenantInput | TenantGuestCreateOrConnectWithoutTenantInput[]
    upsert?: TenantGuestUpsertWithWhereUniqueWithoutTenantInput | TenantGuestUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: TenantGuestCreateManyTenantInputEnvelope
    set?: TenantGuestWhereUniqueInput | TenantGuestWhereUniqueInput[]
    disconnect?: TenantGuestWhereUniqueInput | TenantGuestWhereUniqueInput[]
    delete?: TenantGuestWhereUniqueInput | TenantGuestWhereUniqueInput[]
    connect?: TenantGuestWhereUniqueInput | TenantGuestWhereUniqueInput[]
    update?: TenantGuestUpdateWithWhereUniqueWithoutTenantInput | TenantGuestUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: TenantGuestUpdateManyWithWhereWithoutTenantInput | TenantGuestUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: TenantGuestScalarWhereInput | TenantGuestScalarWhereInput[]
  }

  export type RoomCategoryUpdateManyWithoutTenantNestedInput = {
    create?: XOR<RoomCategoryCreateWithoutTenantInput, RoomCategoryUncheckedCreateWithoutTenantInput> | RoomCategoryCreateWithoutTenantInput[] | RoomCategoryUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RoomCategoryCreateOrConnectWithoutTenantInput | RoomCategoryCreateOrConnectWithoutTenantInput[]
    upsert?: RoomCategoryUpsertWithWhereUniqueWithoutTenantInput | RoomCategoryUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: RoomCategoryCreateManyTenantInputEnvelope
    set?: RoomCategoryWhereUniqueInput | RoomCategoryWhereUniqueInput[]
    disconnect?: RoomCategoryWhereUniqueInput | RoomCategoryWhereUniqueInput[]
    delete?: RoomCategoryWhereUniqueInput | RoomCategoryWhereUniqueInput[]
    connect?: RoomCategoryWhereUniqueInput | RoomCategoryWhereUniqueInput[]
    update?: RoomCategoryUpdateWithWhereUniqueWithoutTenantInput | RoomCategoryUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: RoomCategoryUpdateManyWithWhereWithoutTenantInput | RoomCategoryUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: RoomCategoryScalarWhereInput | RoomCategoryScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutTenantNestedInput = {
    create?: XOR<BookingCreateWithoutTenantInput, BookingUncheckedCreateWithoutTenantInput> | BookingCreateWithoutTenantInput[] | BookingUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTenantInput | BookingCreateOrConnectWithoutTenantInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTenantInput | BookingUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: BookingCreateManyTenantInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTenantInput | BookingUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTenantInput | BookingUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TenantUserUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<TenantUserCreateWithoutTenantInput, TenantUserUncheckedCreateWithoutTenantInput> | TenantUserCreateWithoutTenantInput[] | TenantUserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenantUserCreateOrConnectWithoutTenantInput | TenantUserCreateOrConnectWithoutTenantInput[]
    upsert?: TenantUserUpsertWithWhereUniqueWithoutTenantInput | TenantUserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: TenantUserCreateManyTenantInputEnvelope
    set?: TenantUserWhereUniqueInput | TenantUserWhereUniqueInput[]
    disconnect?: TenantUserWhereUniqueInput | TenantUserWhereUniqueInput[]
    delete?: TenantUserWhereUniqueInput | TenantUserWhereUniqueInput[]
    connect?: TenantUserWhereUniqueInput | TenantUserWhereUniqueInput[]
    update?: TenantUserUpdateWithWhereUniqueWithoutTenantInput | TenantUserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: TenantUserUpdateManyWithWhereWithoutTenantInput | TenantUserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: TenantUserScalarWhereInput | TenantUserScalarWhereInput[]
  }

  export type TenantGuestUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<TenantGuestCreateWithoutTenantInput, TenantGuestUncheckedCreateWithoutTenantInput> | TenantGuestCreateWithoutTenantInput[] | TenantGuestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenantGuestCreateOrConnectWithoutTenantInput | TenantGuestCreateOrConnectWithoutTenantInput[]
    upsert?: TenantGuestUpsertWithWhereUniqueWithoutTenantInput | TenantGuestUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: TenantGuestCreateManyTenantInputEnvelope
    set?: TenantGuestWhereUniqueInput | TenantGuestWhereUniqueInput[]
    disconnect?: TenantGuestWhereUniqueInput | TenantGuestWhereUniqueInput[]
    delete?: TenantGuestWhereUniqueInput | TenantGuestWhereUniqueInput[]
    connect?: TenantGuestWhereUniqueInput | TenantGuestWhereUniqueInput[]
    update?: TenantGuestUpdateWithWhereUniqueWithoutTenantInput | TenantGuestUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: TenantGuestUpdateManyWithWhereWithoutTenantInput | TenantGuestUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: TenantGuestScalarWhereInput | TenantGuestScalarWhereInput[]
  }

  export type RoomCategoryUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<RoomCategoryCreateWithoutTenantInput, RoomCategoryUncheckedCreateWithoutTenantInput> | RoomCategoryCreateWithoutTenantInput[] | RoomCategoryUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RoomCategoryCreateOrConnectWithoutTenantInput | RoomCategoryCreateOrConnectWithoutTenantInput[]
    upsert?: RoomCategoryUpsertWithWhereUniqueWithoutTenantInput | RoomCategoryUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: RoomCategoryCreateManyTenantInputEnvelope
    set?: RoomCategoryWhereUniqueInput | RoomCategoryWhereUniqueInput[]
    disconnect?: RoomCategoryWhereUniqueInput | RoomCategoryWhereUniqueInput[]
    delete?: RoomCategoryWhereUniqueInput | RoomCategoryWhereUniqueInput[]
    connect?: RoomCategoryWhereUniqueInput | RoomCategoryWhereUniqueInput[]
    update?: RoomCategoryUpdateWithWhereUniqueWithoutTenantInput | RoomCategoryUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: RoomCategoryUpdateManyWithWhereWithoutTenantInput | RoomCategoryUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: RoomCategoryScalarWhereInput | RoomCategoryScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<BookingCreateWithoutTenantInput, BookingUncheckedCreateWithoutTenantInput> | BookingCreateWithoutTenantInput[] | BookingUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTenantInput | BookingCreateOrConnectWithoutTenantInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTenantInput | BookingUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: BookingCreateManyTenantInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTenantInput | BookingUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTenantInput | BookingUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutTenantUsersInput = {
    create?: XOR<TenantCreateWithoutTenantUsersInput, TenantUncheckedCreateWithoutTenantUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutTenantUsersInput
    connect?: TenantWhereUniqueInput
  }

  export type EnumStaffRoleFieldUpdateOperationsInput = {
    set?: $Enums.StaffRole
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TenantUpdateOneRequiredWithoutTenantUsersNestedInput = {
    create?: XOR<TenantCreateWithoutTenantUsersInput, TenantUncheckedCreateWithoutTenantUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutTenantUsersInput
    upsert?: TenantUpsertWithoutTenantUsersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutTenantUsersInput, TenantUpdateWithoutTenantUsersInput>, TenantUncheckedUpdateWithoutTenantUsersInput>
  }

  export type TenantGuestCreateNestedManyWithoutGuestInput = {
    create?: XOR<TenantGuestCreateWithoutGuestInput, TenantGuestUncheckedCreateWithoutGuestInput> | TenantGuestCreateWithoutGuestInput[] | TenantGuestUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: TenantGuestCreateOrConnectWithoutGuestInput | TenantGuestCreateOrConnectWithoutGuestInput[]
    createMany?: TenantGuestCreateManyGuestInputEnvelope
    connect?: TenantGuestWhereUniqueInput | TenantGuestWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutGuestInput = {
    create?: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput> | BookingCreateWithoutGuestInput[] | BookingUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutGuestInput | BookingCreateOrConnectWithoutGuestInput[]
    createMany?: BookingCreateManyGuestInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TenantGuestUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<TenantGuestCreateWithoutGuestInput, TenantGuestUncheckedCreateWithoutGuestInput> | TenantGuestCreateWithoutGuestInput[] | TenantGuestUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: TenantGuestCreateOrConnectWithoutGuestInput | TenantGuestCreateOrConnectWithoutGuestInput[]
    createMany?: TenantGuestCreateManyGuestInputEnvelope
    connect?: TenantGuestWhereUniqueInput | TenantGuestWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput> | BookingCreateWithoutGuestInput[] | BookingUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutGuestInput | BookingCreateOrConnectWithoutGuestInput[]
    createMany?: BookingCreateManyGuestInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type TenantGuestUpdateManyWithoutGuestNestedInput = {
    create?: XOR<TenantGuestCreateWithoutGuestInput, TenantGuestUncheckedCreateWithoutGuestInput> | TenantGuestCreateWithoutGuestInput[] | TenantGuestUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: TenantGuestCreateOrConnectWithoutGuestInput | TenantGuestCreateOrConnectWithoutGuestInput[]
    upsert?: TenantGuestUpsertWithWhereUniqueWithoutGuestInput | TenantGuestUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: TenantGuestCreateManyGuestInputEnvelope
    set?: TenantGuestWhereUniqueInput | TenantGuestWhereUniqueInput[]
    disconnect?: TenantGuestWhereUniqueInput | TenantGuestWhereUniqueInput[]
    delete?: TenantGuestWhereUniqueInput | TenantGuestWhereUniqueInput[]
    connect?: TenantGuestWhereUniqueInput | TenantGuestWhereUniqueInput[]
    update?: TenantGuestUpdateWithWhereUniqueWithoutGuestInput | TenantGuestUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: TenantGuestUpdateManyWithWhereWithoutGuestInput | TenantGuestUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: TenantGuestScalarWhereInput | TenantGuestScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutGuestNestedInput = {
    create?: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput> | BookingCreateWithoutGuestInput[] | BookingUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutGuestInput | BookingCreateOrConnectWithoutGuestInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutGuestInput | BookingUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: BookingCreateManyGuestInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutGuestInput | BookingUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutGuestInput | BookingUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TenantGuestUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<TenantGuestCreateWithoutGuestInput, TenantGuestUncheckedCreateWithoutGuestInput> | TenantGuestCreateWithoutGuestInput[] | TenantGuestUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: TenantGuestCreateOrConnectWithoutGuestInput | TenantGuestCreateOrConnectWithoutGuestInput[]
    upsert?: TenantGuestUpsertWithWhereUniqueWithoutGuestInput | TenantGuestUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: TenantGuestCreateManyGuestInputEnvelope
    set?: TenantGuestWhereUniqueInput | TenantGuestWhereUniqueInput[]
    disconnect?: TenantGuestWhereUniqueInput | TenantGuestWhereUniqueInput[]
    delete?: TenantGuestWhereUniqueInput | TenantGuestWhereUniqueInput[]
    connect?: TenantGuestWhereUniqueInput | TenantGuestWhereUniqueInput[]
    update?: TenantGuestUpdateWithWhereUniqueWithoutGuestInput | TenantGuestUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: TenantGuestUpdateManyWithWhereWithoutGuestInput | TenantGuestUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: TenantGuestScalarWhereInput | TenantGuestScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput> | BookingCreateWithoutGuestInput[] | BookingUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutGuestInput | BookingCreateOrConnectWithoutGuestInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutGuestInput | BookingUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: BookingCreateManyGuestInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutGuestInput | BookingUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutGuestInput | BookingUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutTenantGuestsInput = {
    create?: XOR<TenantCreateWithoutTenantGuestsInput, TenantUncheckedCreateWithoutTenantGuestsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutTenantGuestsInput
    connect?: TenantWhereUniqueInput
  }

  export type GuestCreateNestedOneWithoutTenantGuestsInput = {
    create?: XOR<GuestCreateWithoutTenantGuestsInput, GuestUncheckedCreateWithoutTenantGuestsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutTenantGuestsInput
    connect?: GuestWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutTenantGuestsNestedInput = {
    create?: XOR<TenantCreateWithoutTenantGuestsInput, TenantUncheckedCreateWithoutTenantGuestsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutTenantGuestsInput
    upsert?: TenantUpsertWithoutTenantGuestsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutTenantGuestsInput, TenantUpdateWithoutTenantGuestsInput>, TenantUncheckedUpdateWithoutTenantGuestsInput>
  }

  export type GuestUpdateOneRequiredWithoutTenantGuestsNestedInput = {
    create?: XOR<GuestCreateWithoutTenantGuestsInput, GuestUncheckedCreateWithoutTenantGuestsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutTenantGuestsInput
    upsert?: GuestUpsertWithoutTenantGuestsInput
    connect?: GuestWhereUniqueInput
    update?: XOR<XOR<GuestUpdateToOneWithWhereWithoutTenantGuestsInput, GuestUpdateWithoutTenantGuestsInput>, GuestUncheckedUpdateWithoutTenantGuestsInput>
  }

  export type RoomCategoryCreateimageUrlsInput = {
    set: string[]
  }

  export type RoomCategoryCreateamenitiesInput = {
    set: string[]
  }

  export type TenantCreateNestedOneWithoutRoomCategoriesInput = {
    create?: XOR<TenantCreateWithoutRoomCategoriesInput, TenantUncheckedCreateWithoutRoomCategoriesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutRoomCategoriesInput
    connect?: TenantWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutRoomCategoryInput = {
    create?: XOR<BookingCreateWithoutRoomCategoryInput, BookingUncheckedCreateWithoutRoomCategoryInput> | BookingCreateWithoutRoomCategoryInput[] | BookingUncheckedCreateWithoutRoomCategoryInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomCategoryInput | BookingCreateOrConnectWithoutRoomCategoryInput[]
    createMany?: BookingCreateManyRoomCategoryInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutRoomCategoryInput = {
    create?: XOR<BookingCreateWithoutRoomCategoryInput, BookingUncheckedCreateWithoutRoomCategoryInput> | BookingCreateWithoutRoomCategoryInput[] | BookingUncheckedCreateWithoutRoomCategoryInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomCategoryInput | BookingCreateOrConnectWithoutRoomCategoryInput[]
    createMany?: BookingCreateManyRoomCategoryInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoomCategoryUpdateimageUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RoomCategoryUpdateamenitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TenantUpdateOneRequiredWithoutRoomCategoriesNestedInput = {
    create?: XOR<TenantCreateWithoutRoomCategoriesInput, TenantUncheckedCreateWithoutRoomCategoriesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutRoomCategoriesInput
    upsert?: TenantUpsertWithoutRoomCategoriesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutRoomCategoriesInput, TenantUpdateWithoutRoomCategoriesInput>, TenantUncheckedUpdateWithoutRoomCategoriesInput>
  }

  export type BookingUpdateManyWithoutRoomCategoryNestedInput = {
    create?: XOR<BookingCreateWithoutRoomCategoryInput, BookingUncheckedCreateWithoutRoomCategoryInput> | BookingCreateWithoutRoomCategoryInput[] | BookingUncheckedCreateWithoutRoomCategoryInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomCategoryInput | BookingCreateOrConnectWithoutRoomCategoryInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutRoomCategoryInput | BookingUpsertWithWhereUniqueWithoutRoomCategoryInput[]
    createMany?: BookingCreateManyRoomCategoryInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutRoomCategoryInput | BookingUpdateWithWhereUniqueWithoutRoomCategoryInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutRoomCategoryInput | BookingUpdateManyWithWhereWithoutRoomCategoryInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutRoomCategoryNestedInput = {
    create?: XOR<BookingCreateWithoutRoomCategoryInput, BookingUncheckedCreateWithoutRoomCategoryInput> | BookingCreateWithoutRoomCategoryInput[] | BookingUncheckedCreateWithoutRoomCategoryInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomCategoryInput | BookingCreateOrConnectWithoutRoomCategoryInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutRoomCategoryInput | BookingUpsertWithWhereUniqueWithoutRoomCategoryInput[]
    createMany?: BookingCreateManyRoomCategoryInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutRoomCategoryInput | BookingUpdateWithWhereUniqueWithoutRoomCategoryInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutRoomCategoryInput | BookingUpdateManyWithWhereWithoutRoomCategoryInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutBookingsInput = {
    create?: XOR<TenantCreateWithoutBookingsInput, TenantUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutBookingsInput
    connect?: TenantWhereUniqueInput
  }

  export type GuestCreateNestedOneWithoutBookingsInput = {
    create?: XOR<GuestCreateWithoutBookingsInput, GuestUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutBookingsInput
    connect?: GuestWhereUniqueInput
  }

  export type RoomCategoryCreateNestedOneWithoutBookingsInput = {
    create?: XOR<RoomCategoryCreateWithoutBookingsInput, RoomCategoryUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RoomCategoryCreateOrConnectWithoutBookingsInput
    connect?: RoomCategoryWhereUniqueInput
  }

  export type BookingEventCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingEventCreateWithoutBookingInput, BookingEventUncheckedCreateWithoutBookingInput> | BookingEventCreateWithoutBookingInput[] | BookingEventUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingEventCreateOrConnectWithoutBookingInput | BookingEventCreateOrConnectWithoutBookingInput[]
    createMany?: BookingEventCreateManyBookingInputEnvelope
    connect?: BookingEventWhereUniqueInput | BookingEventWhereUniqueInput[]
  }

  export type BookingEventUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingEventCreateWithoutBookingInput, BookingEventUncheckedCreateWithoutBookingInput> | BookingEventCreateWithoutBookingInput[] | BookingEventUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingEventCreateOrConnectWithoutBookingInput | BookingEventCreateOrConnectWithoutBookingInput[]
    createMany?: BookingEventCreateManyBookingInputEnvelope
    connect?: BookingEventWhereUniqueInput | BookingEventWhereUniqueInput[]
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type TenantUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<TenantCreateWithoutBookingsInput, TenantUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutBookingsInput
    upsert?: TenantUpsertWithoutBookingsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutBookingsInput, TenantUpdateWithoutBookingsInput>, TenantUncheckedUpdateWithoutBookingsInput>
  }

  export type GuestUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<GuestCreateWithoutBookingsInput, GuestUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutBookingsInput
    upsert?: GuestUpsertWithoutBookingsInput
    connect?: GuestWhereUniqueInput
    update?: XOR<XOR<GuestUpdateToOneWithWhereWithoutBookingsInput, GuestUpdateWithoutBookingsInput>, GuestUncheckedUpdateWithoutBookingsInput>
  }

  export type RoomCategoryUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<RoomCategoryCreateWithoutBookingsInput, RoomCategoryUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RoomCategoryCreateOrConnectWithoutBookingsInput
    upsert?: RoomCategoryUpsertWithoutBookingsInput
    connect?: RoomCategoryWhereUniqueInput
    update?: XOR<XOR<RoomCategoryUpdateToOneWithWhereWithoutBookingsInput, RoomCategoryUpdateWithoutBookingsInput>, RoomCategoryUncheckedUpdateWithoutBookingsInput>
  }

  export type BookingEventUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingEventCreateWithoutBookingInput, BookingEventUncheckedCreateWithoutBookingInput> | BookingEventCreateWithoutBookingInput[] | BookingEventUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingEventCreateOrConnectWithoutBookingInput | BookingEventCreateOrConnectWithoutBookingInput[]
    upsert?: BookingEventUpsertWithWhereUniqueWithoutBookingInput | BookingEventUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingEventCreateManyBookingInputEnvelope
    set?: BookingEventWhereUniqueInput | BookingEventWhereUniqueInput[]
    disconnect?: BookingEventWhereUniqueInput | BookingEventWhereUniqueInput[]
    delete?: BookingEventWhereUniqueInput | BookingEventWhereUniqueInput[]
    connect?: BookingEventWhereUniqueInput | BookingEventWhereUniqueInput[]
    update?: BookingEventUpdateWithWhereUniqueWithoutBookingInput | BookingEventUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingEventUpdateManyWithWhereWithoutBookingInput | BookingEventUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingEventScalarWhereInput | BookingEventScalarWhereInput[]
  }

  export type BookingEventUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingEventCreateWithoutBookingInput, BookingEventUncheckedCreateWithoutBookingInput> | BookingEventCreateWithoutBookingInput[] | BookingEventUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingEventCreateOrConnectWithoutBookingInput | BookingEventCreateOrConnectWithoutBookingInput[]
    upsert?: BookingEventUpsertWithWhereUniqueWithoutBookingInput | BookingEventUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingEventCreateManyBookingInputEnvelope
    set?: BookingEventWhereUniqueInput | BookingEventWhereUniqueInput[]
    disconnect?: BookingEventWhereUniqueInput | BookingEventWhereUniqueInput[]
    delete?: BookingEventWhereUniqueInput | BookingEventWhereUniqueInput[]
    connect?: BookingEventWhereUniqueInput | BookingEventWhereUniqueInput[]
    update?: BookingEventUpdateWithWhereUniqueWithoutBookingInput | BookingEventUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingEventUpdateManyWithWhereWithoutBookingInput | BookingEventUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingEventScalarWhereInput | BookingEventScalarWhereInput[]
  }

  export type BookingCreateNestedOneWithoutEventsInput = {
    create?: XOR<BookingCreateWithoutEventsInput, BookingUncheckedCreateWithoutEventsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutEventsInput
    connect?: BookingWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<BookingCreateWithoutEventsInput, BookingUncheckedCreateWithoutEventsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutEventsInput
    upsert?: BookingUpsertWithoutEventsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutEventsInput, BookingUpdateWithoutEventsInput>, BookingUncheckedUpdateWithoutEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStaffRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffRoleFilter<$PrismaModel> | $Enums.StaffRole
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStaffRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffRoleWithAggregatesFilter<$PrismaModel> | $Enums.StaffRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffRoleFilter<$PrismaModel>
    _max?: NestedEnumStaffRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type TenantUserCreateWithoutTenantInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.StaffRole
    inviteToken?: string | null
    inviteExpiry?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TenantUserUncheckedCreateWithoutTenantInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.StaffRole
    inviteToken?: string | null
    inviteExpiry?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TenantUserCreateOrConnectWithoutTenantInput = {
    where: TenantUserWhereUniqueInput
    create: XOR<TenantUserCreateWithoutTenantInput, TenantUserUncheckedCreateWithoutTenantInput>
  }

  export type TenantUserCreateManyTenantInputEnvelope = {
    data: TenantUserCreateManyTenantInput | TenantUserCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type TenantGuestCreateWithoutTenantInput = {
    id?: string
    firstSeen?: Date | string
    guest: GuestCreateNestedOneWithoutTenantGuestsInput
  }

  export type TenantGuestUncheckedCreateWithoutTenantInput = {
    id?: string
    guestId: string
    firstSeen?: Date | string
  }

  export type TenantGuestCreateOrConnectWithoutTenantInput = {
    where: TenantGuestWhereUniqueInput
    create: XOR<TenantGuestCreateWithoutTenantInput, TenantGuestUncheckedCreateWithoutTenantInput>
  }

  export type TenantGuestCreateManyTenantInputEnvelope = {
    data: TenantGuestCreateManyTenantInput | TenantGuestCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type RoomCategoryCreateWithoutTenantInput = {
    id?: string
    name: string
    description: string
    pricePerNight: Decimal | DecimalJsLike | number | string
    currency?: string
    maxGuests: number
    totalInventory: number
    imageUrls?: RoomCategoryCreateimageUrlsInput | string[]
    amenities?: RoomCategoryCreateamenitiesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutRoomCategoryInput
  }

  export type RoomCategoryUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    description: string
    pricePerNight: Decimal | DecimalJsLike | number | string
    currency?: string
    maxGuests: number
    totalInventory: number
    imageUrls?: RoomCategoryCreateimageUrlsInput | string[]
    amenities?: RoomCategoryCreateamenitiesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomCategoryInput
  }

  export type RoomCategoryCreateOrConnectWithoutTenantInput = {
    where: RoomCategoryWhereUniqueInput
    create: XOR<RoomCategoryCreateWithoutTenantInput, RoomCategoryUncheckedCreateWithoutTenantInput>
  }

  export type RoomCategoryCreateManyTenantInputEnvelope = {
    data: RoomCategoryCreateManyTenantInput | RoomCategoryCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutTenantInput = {
    id?: string
    bookingReference: string
    checkIn: Date | string
    checkOut: Date | string
    nightsCount: number
    guestCount: number
    totalAmountPaid: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.BookingStatus
    paymentIntentId?: string | null
    telegramPaymentChargeId?: string | null
    receiptPdfUrl?: string | null
    reviewSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guest: GuestCreateNestedOneWithoutBookingsInput
    roomCategory: RoomCategoryCreateNestedOneWithoutBookingsInput
    events?: BookingEventCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutTenantInput = {
    id?: string
    guestId: string
    roomCategoryId: string
    bookingReference: string
    checkIn: Date | string
    checkOut: Date | string
    nightsCount: number
    guestCount: number
    totalAmountPaid: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.BookingStatus
    paymentIntentId?: string | null
    telegramPaymentChargeId?: string | null
    receiptPdfUrl?: string | null
    reviewSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: BookingEventUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutTenantInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutTenantInput, BookingUncheckedCreateWithoutTenantInput>
  }

  export type BookingCreateManyTenantInputEnvelope = {
    data: BookingCreateManyTenantInput | BookingCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type TenantUserUpsertWithWhereUniqueWithoutTenantInput = {
    where: TenantUserWhereUniqueInput
    update: XOR<TenantUserUpdateWithoutTenantInput, TenantUserUncheckedUpdateWithoutTenantInput>
    create: XOR<TenantUserCreateWithoutTenantInput, TenantUserUncheckedCreateWithoutTenantInput>
  }

  export type TenantUserUpdateWithWhereUniqueWithoutTenantInput = {
    where: TenantUserWhereUniqueInput
    data: XOR<TenantUserUpdateWithoutTenantInput, TenantUserUncheckedUpdateWithoutTenantInput>
  }

  export type TenantUserUpdateManyWithWhereWithoutTenantInput = {
    where: TenantUserScalarWhereInput
    data: XOR<TenantUserUpdateManyMutationInput, TenantUserUncheckedUpdateManyWithoutTenantInput>
  }

  export type TenantUserScalarWhereInput = {
    AND?: TenantUserScalarWhereInput | TenantUserScalarWhereInput[]
    OR?: TenantUserScalarWhereInput[]
    NOT?: TenantUserScalarWhereInput | TenantUserScalarWhereInput[]
    id?: StringFilter<"TenantUser"> | string
    tenantId?: StringFilter<"TenantUser"> | string
    email?: StringFilter<"TenantUser"> | string
    passwordHash?: StringFilter<"TenantUser"> | string
    role?: EnumStaffRoleFilter<"TenantUser"> | $Enums.StaffRole
    inviteToken?: StringNullableFilter<"TenantUser"> | string | null
    inviteExpiry?: DateTimeNullableFilter<"TenantUser"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"TenantUser"> | Date | string | null
    createdAt?: DateTimeFilter<"TenantUser"> | Date | string
  }

  export type TenantGuestUpsertWithWhereUniqueWithoutTenantInput = {
    where: TenantGuestWhereUniqueInput
    update: XOR<TenantGuestUpdateWithoutTenantInput, TenantGuestUncheckedUpdateWithoutTenantInput>
    create: XOR<TenantGuestCreateWithoutTenantInput, TenantGuestUncheckedCreateWithoutTenantInput>
  }

  export type TenantGuestUpdateWithWhereUniqueWithoutTenantInput = {
    where: TenantGuestWhereUniqueInput
    data: XOR<TenantGuestUpdateWithoutTenantInput, TenantGuestUncheckedUpdateWithoutTenantInput>
  }

  export type TenantGuestUpdateManyWithWhereWithoutTenantInput = {
    where: TenantGuestScalarWhereInput
    data: XOR<TenantGuestUpdateManyMutationInput, TenantGuestUncheckedUpdateManyWithoutTenantInput>
  }

  export type TenantGuestScalarWhereInput = {
    AND?: TenantGuestScalarWhereInput | TenantGuestScalarWhereInput[]
    OR?: TenantGuestScalarWhereInput[]
    NOT?: TenantGuestScalarWhereInput | TenantGuestScalarWhereInput[]
    id?: StringFilter<"TenantGuest"> | string
    tenantId?: StringFilter<"TenantGuest"> | string
    guestId?: StringFilter<"TenantGuest"> | string
    firstSeen?: DateTimeFilter<"TenantGuest"> | Date | string
  }

  export type RoomCategoryUpsertWithWhereUniqueWithoutTenantInput = {
    where: RoomCategoryWhereUniqueInput
    update: XOR<RoomCategoryUpdateWithoutTenantInput, RoomCategoryUncheckedUpdateWithoutTenantInput>
    create: XOR<RoomCategoryCreateWithoutTenantInput, RoomCategoryUncheckedCreateWithoutTenantInput>
  }

  export type RoomCategoryUpdateWithWhereUniqueWithoutTenantInput = {
    where: RoomCategoryWhereUniqueInput
    data: XOR<RoomCategoryUpdateWithoutTenantInput, RoomCategoryUncheckedUpdateWithoutTenantInput>
  }

  export type RoomCategoryUpdateManyWithWhereWithoutTenantInput = {
    where: RoomCategoryScalarWhereInput
    data: XOR<RoomCategoryUpdateManyMutationInput, RoomCategoryUncheckedUpdateManyWithoutTenantInput>
  }

  export type RoomCategoryScalarWhereInput = {
    AND?: RoomCategoryScalarWhereInput | RoomCategoryScalarWhereInput[]
    OR?: RoomCategoryScalarWhereInput[]
    NOT?: RoomCategoryScalarWhereInput | RoomCategoryScalarWhereInput[]
    id?: StringFilter<"RoomCategory"> | string
    tenantId?: StringFilter<"RoomCategory"> | string
    name?: StringFilter<"RoomCategory"> | string
    description?: StringFilter<"RoomCategory"> | string
    pricePerNight?: DecimalFilter<"RoomCategory"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"RoomCategory"> | string
    maxGuests?: IntFilter<"RoomCategory"> | number
    totalInventory?: IntFilter<"RoomCategory"> | number
    imageUrls?: StringNullableListFilter<"RoomCategory">
    amenities?: StringNullableListFilter<"RoomCategory">
    isActive?: BoolFilter<"RoomCategory"> | boolean
    createdAt?: DateTimeFilter<"RoomCategory"> | Date | string
    updatedAt?: DateTimeFilter<"RoomCategory"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutTenantInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutTenantInput, BookingUncheckedUpdateWithoutTenantInput>
    create: XOR<BookingCreateWithoutTenantInput, BookingUncheckedCreateWithoutTenantInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutTenantInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutTenantInput, BookingUncheckedUpdateWithoutTenantInput>
  }

  export type BookingUpdateManyWithWhereWithoutTenantInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutTenantInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    tenantId?: StringFilter<"Booking"> | string
    guestId?: StringFilter<"Booking"> | string
    roomCategoryId?: StringFilter<"Booking"> | string
    bookingReference?: StringFilter<"Booking"> | string
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    nightsCount?: IntFilter<"Booking"> | number
    guestCount?: IntFilter<"Booking"> | number
    totalAmountPaid?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    paymentIntentId?: StringNullableFilter<"Booking"> | string | null
    telegramPaymentChargeId?: StringNullableFilter<"Booking"> | string | null
    receiptPdfUrl?: StringNullableFilter<"Booking"> | string | null
    reviewSentAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type TenantCreateWithoutTenantUsersInput = {
    id?: string
    name: string
    telegramBotToken: string
    webhookUrl?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantGuests?: TenantGuestCreateNestedManyWithoutTenantInput
    roomCategories?: RoomCategoryCreateNestedManyWithoutTenantInput
    bookings?: BookingCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutTenantUsersInput = {
    id?: string
    name: string
    telegramBotToken: string
    webhookUrl?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantGuests?: TenantGuestUncheckedCreateNestedManyWithoutTenantInput
    roomCategories?: RoomCategoryUncheckedCreateNestedManyWithoutTenantInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutTenantUsersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutTenantUsersInput, TenantUncheckedCreateWithoutTenantUsersInput>
  }

  export type TenantUpsertWithoutTenantUsersInput = {
    update: XOR<TenantUpdateWithoutTenantUsersInput, TenantUncheckedUpdateWithoutTenantUsersInput>
    create: XOR<TenantCreateWithoutTenantUsersInput, TenantUncheckedCreateWithoutTenantUsersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutTenantUsersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutTenantUsersInput, TenantUncheckedUpdateWithoutTenantUsersInput>
  }

  export type TenantUpdateWithoutTenantUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    telegramBotToken?: StringFieldUpdateOperationsInput | string
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantGuests?: TenantGuestUpdateManyWithoutTenantNestedInput
    roomCategories?: RoomCategoryUpdateManyWithoutTenantNestedInput
    bookings?: BookingUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutTenantUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    telegramBotToken?: StringFieldUpdateOperationsInput | string
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantGuests?: TenantGuestUncheckedUpdateManyWithoutTenantNestedInput
    roomCategories?: RoomCategoryUncheckedUpdateManyWithoutTenantNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantGuestCreateWithoutGuestInput = {
    id?: string
    firstSeen?: Date | string
    tenant: TenantCreateNestedOneWithoutTenantGuestsInput
  }

  export type TenantGuestUncheckedCreateWithoutGuestInput = {
    id?: string
    tenantId: string
    firstSeen?: Date | string
  }

  export type TenantGuestCreateOrConnectWithoutGuestInput = {
    where: TenantGuestWhereUniqueInput
    create: XOR<TenantGuestCreateWithoutGuestInput, TenantGuestUncheckedCreateWithoutGuestInput>
  }

  export type TenantGuestCreateManyGuestInputEnvelope = {
    data: TenantGuestCreateManyGuestInput | TenantGuestCreateManyGuestInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutGuestInput = {
    id?: string
    bookingReference: string
    checkIn: Date | string
    checkOut: Date | string
    nightsCount: number
    guestCount: number
    totalAmountPaid: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.BookingStatus
    paymentIntentId?: string | null
    telegramPaymentChargeId?: string | null
    receiptPdfUrl?: string | null
    reviewSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutBookingsInput
    roomCategory: RoomCategoryCreateNestedOneWithoutBookingsInput
    events?: BookingEventCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutGuestInput = {
    id?: string
    tenantId: string
    roomCategoryId: string
    bookingReference: string
    checkIn: Date | string
    checkOut: Date | string
    nightsCount: number
    guestCount: number
    totalAmountPaid: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.BookingStatus
    paymentIntentId?: string | null
    telegramPaymentChargeId?: string | null
    receiptPdfUrl?: string | null
    reviewSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: BookingEventUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutGuestInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput>
  }

  export type BookingCreateManyGuestInputEnvelope = {
    data: BookingCreateManyGuestInput | BookingCreateManyGuestInput[]
    skipDuplicates?: boolean
  }

  export type TenantGuestUpsertWithWhereUniqueWithoutGuestInput = {
    where: TenantGuestWhereUniqueInput
    update: XOR<TenantGuestUpdateWithoutGuestInput, TenantGuestUncheckedUpdateWithoutGuestInput>
    create: XOR<TenantGuestCreateWithoutGuestInput, TenantGuestUncheckedCreateWithoutGuestInput>
  }

  export type TenantGuestUpdateWithWhereUniqueWithoutGuestInput = {
    where: TenantGuestWhereUniqueInput
    data: XOR<TenantGuestUpdateWithoutGuestInput, TenantGuestUncheckedUpdateWithoutGuestInput>
  }

  export type TenantGuestUpdateManyWithWhereWithoutGuestInput = {
    where: TenantGuestScalarWhereInput
    data: XOR<TenantGuestUpdateManyMutationInput, TenantGuestUncheckedUpdateManyWithoutGuestInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutGuestInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutGuestInput, BookingUncheckedUpdateWithoutGuestInput>
    create: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutGuestInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutGuestInput, BookingUncheckedUpdateWithoutGuestInput>
  }

  export type BookingUpdateManyWithWhereWithoutGuestInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutGuestInput>
  }

  export type TenantCreateWithoutTenantGuestsInput = {
    id?: string
    name: string
    telegramBotToken: string
    webhookUrl?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantUsers?: TenantUserCreateNestedManyWithoutTenantInput
    roomCategories?: RoomCategoryCreateNestedManyWithoutTenantInput
    bookings?: BookingCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutTenantGuestsInput = {
    id?: string
    name: string
    telegramBotToken: string
    webhookUrl?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantUsers?: TenantUserUncheckedCreateNestedManyWithoutTenantInput
    roomCategories?: RoomCategoryUncheckedCreateNestedManyWithoutTenantInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutTenantGuestsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutTenantGuestsInput, TenantUncheckedCreateWithoutTenantGuestsInput>
  }

  export type GuestCreateWithoutTenantGuestsInput = {
    id?: string
    telegramId: bigint | number
    firstName: string
    lastName?: string | null
    phoneNumber?: string | null
    languageCode?: string | null
    optInNotifications?: boolean
    createdAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateWithoutTenantGuestsInput = {
    id?: string
    telegramId: bigint | number
    firstName: string
    lastName?: string | null
    phoneNumber?: string | null
    languageCode?: string | null
    optInNotifications?: boolean
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestCreateOrConnectWithoutTenantGuestsInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutTenantGuestsInput, GuestUncheckedCreateWithoutTenantGuestsInput>
  }

  export type TenantUpsertWithoutTenantGuestsInput = {
    update: XOR<TenantUpdateWithoutTenantGuestsInput, TenantUncheckedUpdateWithoutTenantGuestsInput>
    create: XOR<TenantCreateWithoutTenantGuestsInput, TenantUncheckedCreateWithoutTenantGuestsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutTenantGuestsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutTenantGuestsInput, TenantUncheckedUpdateWithoutTenantGuestsInput>
  }

  export type TenantUpdateWithoutTenantGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    telegramBotToken?: StringFieldUpdateOperationsInput | string
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantUsers?: TenantUserUpdateManyWithoutTenantNestedInput
    roomCategories?: RoomCategoryUpdateManyWithoutTenantNestedInput
    bookings?: BookingUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutTenantGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    telegramBotToken?: StringFieldUpdateOperationsInput | string
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantUsers?: TenantUserUncheckedUpdateManyWithoutTenantNestedInput
    roomCategories?: RoomCategoryUncheckedUpdateManyWithoutTenantNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type GuestUpsertWithoutTenantGuestsInput = {
    update: XOR<GuestUpdateWithoutTenantGuestsInput, GuestUncheckedUpdateWithoutTenantGuestsInput>
    create: XOR<GuestCreateWithoutTenantGuestsInput, GuestUncheckedCreateWithoutTenantGuestsInput>
    where?: GuestWhereInput
  }

  export type GuestUpdateToOneWithWhereWithoutTenantGuestsInput = {
    where?: GuestWhereInput
    data: XOR<GuestUpdateWithoutTenantGuestsInput, GuestUncheckedUpdateWithoutTenantGuestsInput>
  }

  export type GuestUpdateWithoutTenantGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    optInNotifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateWithoutTenantGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    optInNotifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type TenantCreateWithoutRoomCategoriesInput = {
    id?: string
    name: string
    telegramBotToken: string
    webhookUrl?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantUsers?: TenantUserCreateNestedManyWithoutTenantInput
    tenantGuests?: TenantGuestCreateNestedManyWithoutTenantInput
    bookings?: BookingCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutRoomCategoriesInput = {
    id?: string
    name: string
    telegramBotToken: string
    webhookUrl?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantUsers?: TenantUserUncheckedCreateNestedManyWithoutTenantInput
    tenantGuests?: TenantGuestUncheckedCreateNestedManyWithoutTenantInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutRoomCategoriesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutRoomCategoriesInput, TenantUncheckedCreateWithoutRoomCategoriesInput>
  }

  export type BookingCreateWithoutRoomCategoryInput = {
    id?: string
    bookingReference: string
    checkIn: Date | string
    checkOut: Date | string
    nightsCount: number
    guestCount: number
    totalAmountPaid: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.BookingStatus
    paymentIntentId?: string | null
    telegramPaymentChargeId?: string | null
    receiptPdfUrl?: string | null
    reviewSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutBookingsInput
    guest: GuestCreateNestedOneWithoutBookingsInput
    events?: BookingEventCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutRoomCategoryInput = {
    id?: string
    tenantId: string
    guestId: string
    bookingReference: string
    checkIn: Date | string
    checkOut: Date | string
    nightsCount: number
    guestCount: number
    totalAmountPaid: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.BookingStatus
    paymentIntentId?: string | null
    telegramPaymentChargeId?: string | null
    receiptPdfUrl?: string | null
    reviewSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: BookingEventUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutRoomCategoryInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutRoomCategoryInput, BookingUncheckedCreateWithoutRoomCategoryInput>
  }

  export type BookingCreateManyRoomCategoryInputEnvelope = {
    data: BookingCreateManyRoomCategoryInput | BookingCreateManyRoomCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutRoomCategoriesInput = {
    update: XOR<TenantUpdateWithoutRoomCategoriesInput, TenantUncheckedUpdateWithoutRoomCategoriesInput>
    create: XOR<TenantCreateWithoutRoomCategoriesInput, TenantUncheckedCreateWithoutRoomCategoriesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutRoomCategoriesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutRoomCategoriesInput, TenantUncheckedUpdateWithoutRoomCategoriesInput>
  }

  export type TenantUpdateWithoutRoomCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    telegramBotToken?: StringFieldUpdateOperationsInput | string
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantUsers?: TenantUserUpdateManyWithoutTenantNestedInput
    tenantGuests?: TenantGuestUpdateManyWithoutTenantNestedInput
    bookings?: BookingUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutRoomCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    telegramBotToken?: StringFieldUpdateOperationsInput | string
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantUsers?: TenantUserUncheckedUpdateManyWithoutTenantNestedInput
    tenantGuests?: TenantGuestUncheckedUpdateManyWithoutTenantNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutRoomCategoryInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutRoomCategoryInput, BookingUncheckedUpdateWithoutRoomCategoryInput>
    create: XOR<BookingCreateWithoutRoomCategoryInput, BookingUncheckedCreateWithoutRoomCategoryInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutRoomCategoryInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutRoomCategoryInput, BookingUncheckedUpdateWithoutRoomCategoryInput>
  }

  export type BookingUpdateManyWithWhereWithoutRoomCategoryInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutRoomCategoryInput>
  }

  export type TenantCreateWithoutBookingsInput = {
    id?: string
    name: string
    telegramBotToken: string
    webhookUrl?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantUsers?: TenantUserCreateNestedManyWithoutTenantInput
    tenantGuests?: TenantGuestCreateNestedManyWithoutTenantInput
    roomCategories?: RoomCategoryCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    telegramBotToken: string
    webhookUrl?: string | null
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantUsers?: TenantUserUncheckedCreateNestedManyWithoutTenantInput
    tenantGuests?: TenantGuestUncheckedCreateNestedManyWithoutTenantInput
    roomCategories?: RoomCategoryUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutBookingsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutBookingsInput, TenantUncheckedCreateWithoutBookingsInput>
  }

  export type GuestCreateWithoutBookingsInput = {
    id?: string
    telegramId: bigint | number
    firstName: string
    lastName?: string | null
    phoneNumber?: string | null
    languageCode?: string | null
    optInNotifications?: boolean
    createdAt?: Date | string
    tenantGuests?: TenantGuestCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateWithoutBookingsInput = {
    id?: string
    telegramId: bigint | number
    firstName: string
    lastName?: string | null
    phoneNumber?: string | null
    languageCode?: string | null
    optInNotifications?: boolean
    createdAt?: Date | string
    tenantGuests?: TenantGuestUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestCreateOrConnectWithoutBookingsInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutBookingsInput, GuestUncheckedCreateWithoutBookingsInput>
  }

  export type RoomCategoryCreateWithoutBookingsInput = {
    id?: string
    name: string
    description: string
    pricePerNight: Decimal | DecimalJsLike | number | string
    currency?: string
    maxGuests: number
    totalInventory: number
    imageUrls?: RoomCategoryCreateimageUrlsInput | string[]
    amenities?: RoomCategoryCreateamenitiesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutRoomCategoriesInput
  }

  export type RoomCategoryUncheckedCreateWithoutBookingsInput = {
    id?: string
    tenantId: string
    name: string
    description: string
    pricePerNight: Decimal | DecimalJsLike | number | string
    currency?: string
    maxGuests: number
    totalInventory: number
    imageUrls?: RoomCategoryCreateimageUrlsInput | string[]
    amenities?: RoomCategoryCreateamenitiesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomCategoryCreateOrConnectWithoutBookingsInput = {
    where: RoomCategoryWhereUniqueInput
    create: XOR<RoomCategoryCreateWithoutBookingsInput, RoomCategoryUncheckedCreateWithoutBookingsInput>
  }

  export type BookingEventCreateWithoutBookingInput = {
    id?: string
    event: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BookingEventUncheckedCreateWithoutBookingInput = {
    id?: string
    event: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BookingEventCreateOrConnectWithoutBookingInput = {
    where: BookingEventWhereUniqueInput
    create: XOR<BookingEventCreateWithoutBookingInput, BookingEventUncheckedCreateWithoutBookingInput>
  }

  export type BookingEventCreateManyBookingInputEnvelope = {
    data: BookingEventCreateManyBookingInput | BookingEventCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutBookingsInput = {
    update: XOR<TenantUpdateWithoutBookingsInput, TenantUncheckedUpdateWithoutBookingsInput>
    create: XOR<TenantCreateWithoutBookingsInput, TenantUncheckedCreateWithoutBookingsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutBookingsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutBookingsInput, TenantUncheckedUpdateWithoutBookingsInput>
  }

  export type TenantUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    telegramBotToken?: StringFieldUpdateOperationsInput | string
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantUsers?: TenantUserUpdateManyWithoutTenantNestedInput
    tenantGuests?: TenantGuestUpdateManyWithoutTenantNestedInput
    roomCategories?: RoomCategoryUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    telegramBotToken?: StringFieldUpdateOperationsInput | string
    webhookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantUsers?: TenantUserUncheckedUpdateManyWithoutTenantNestedInput
    tenantGuests?: TenantGuestUncheckedUpdateManyWithoutTenantNestedInput
    roomCategories?: RoomCategoryUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type GuestUpsertWithoutBookingsInput = {
    update: XOR<GuestUpdateWithoutBookingsInput, GuestUncheckedUpdateWithoutBookingsInput>
    create: XOR<GuestCreateWithoutBookingsInput, GuestUncheckedCreateWithoutBookingsInput>
    where?: GuestWhereInput
  }

  export type GuestUpdateToOneWithWhereWithoutBookingsInput = {
    where?: GuestWhereInput
    data: XOR<GuestUpdateWithoutBookingsInput, GuestUncheckedUpdateWithoutBookingsInput>
  }

  export type GuestUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    optInNotifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantGuests?: TenantGuestUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    optInNotifications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantGuests?: TenantGuestUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type RoomCategoryUpsertWithoutBookingsInput = {
    update: XOR<RoomCategoryUpdateWithoutBookingsInput, RoomCategoryUncheckedUpdateWithoutBookingsInput>
    create: XOR<RoomCategoryCreateWithoutBookingsInput, RoomCategoryUncheckedCreateWithoutBookingsInput>
    where?: RoomCategoryWhereInput
  }

  export type RoomCategoryUpdateToOneWithWhereWithoutBookingsInput = {
    where?: RoomCategoryWhereInput
    data: XOR<RoomCategoryUpdateWithoutBookingsInput, RoomCategoryUncheckedUpdateWithoutBookingsInput>
  }

  export type RoomCategoryUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerNight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    totalInventory?: IntFieldUpdateOperationsInput | number
    imageUrls?: RoomCategoryUpdateimageUrlsInput | string[]
    amenities?: RoomCategoryUpdateamenitiesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutRoomCategoriesNestedInput
  }

  export type RoomCategoryUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerNight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    totalInventory?: IntFieldUpdateOperationsInput | number
    imageUrls?: RoomCategoryUpdateimageUrlsInput | string[]
    amenities?: RoomCategoryUpdateamenitiesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingEventUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingEventWhereUniqueInput
    update: XOR<BookingEventUpdateWithoutBookingInput, BookingEventUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingEventCreateWithoutBookingInput, BookingEventUncheckedCreateWithoutBookingInput>
  }

  export type BookingEventUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingEventWhereUniqueInput
    data: XOR<BookingEventUpdateWithoutBookingInput, BookingEventUncheckedUpdateWithoutBookingInput>
  }

  export type BookingEventUpdateManyWithWhereWithoutBookingInput = {
    where: BookingEventScalarWhereInput
    data: XOR<BookingEventUpdateManyMutationInput, BookingEventUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingEventScalarWhereInput = {
    AND?: BookingEventScalarWhereInput | BookingEventScalarWhereInput[]
    OR?: BookingEventScalarWhereInput[]
    NOT?: BookingEventScalarWhereInput | BookingEventScalarWhereInput[]
    id?: StringFilter<"BookingEvent"> | string
    bookingId?: StringFilter<"BookingEvent"> | string
    event?: StringFilter<"BookingEvent"> | string
    metadata?: JsonFilter<"BookingEvent">
    createdAt?: DateTimeFilter<"BookingEvent"> | Date | string
  }

  export type BookingCreateWithoutEventsInput = {
    id?: string
    bookingReference: string
    checkIn: Date | string
    checkOut: Date | string
    nightsCount: number
    guestCount: number
    totalAmountPaid: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.BookingStatus
    paymentIntentId?: string | null
    telegramPaymentChargeId?: string | null
    receiptPdfUrl?: string | null
    reviewSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutBookingsInput
    guest: GuestCreateNestedOneWithoutBookingsInput
    roomCategory: RoomCategoryCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutEventsInput = {
    id?: string
    tenantId: string
    guestId: string
    roomCategoryId: string
    bookingReference: string
    checkIn: Date | string
    checkOut: Date | string
    nightsCount: number
    guestCount: number
    totalAmountPaid: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.BookingStatus
    paymentIntentId?: string | null
    telegramPaymentChargeId?: string | null
    receiptPdfUrl?: string | null
    reviewSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutEventsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutEventsInput, BookingUncheckedCreateWithoutEventsInput>
  }

  export type BookingUpsertWithoutEventsInput = {
    update: XOR<BookingUpdateWithoutEventsInput, BookingUncheckedUpdateWithoutEventsInput>
    create: XOR<BookingCreateWithoutEventsInput, BookingUncheckedCreateWithoutEventsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutEventsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutEventsInput, BookingUncheckedUpdateWithoutEventsInput>
  }

  export type BookingUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    totalAmountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramPaymentChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviewSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutBookingsNestedInput
    guest?: GuestUpdateOneRequiredWithoutBookingsNestedInput
    roomCategory?: RoomCategoryUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    roomCategoryId?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    totalAmountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramPaymentChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviewSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUserCreateManyTenantInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.StaffRole
    inviteToken?: string | null
    inviteExpiry?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
  }

  export type TenantGuestCreateManyTenantInput = {
    id?: string
    guestId: string
    firstSeen?: Date | string
  }

  export type RoomCategoryCreateManyTenantInput = {
    id?: string
    name: string
    description: string
    pricePerNight: Decimal | DecimalJsLike | number | string
    currency?: string
    maxGuests: number
    totalInventory: number
    imageUrls?: RoomCategoryCreateimageUrlsInput | string[]
    amenities?: RoomCategoryCreateamenitiesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyTenantInput = {
    id?: string
    guestId: string
    roomCategoryId: string
    bookingReference: string
    checkIn: Date | string
    checkOut: Date | string
    nightsCount: number
    guestCount: number
    totalAmountPaid: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.BookingStatus
    paymentIntentId?: string | null
    telegramPaymentChargeId?: string | null
    receiptPdfUrl?: string | null
    reviewSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUserUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUserUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUserUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantGuestUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    guest?: GuestUpdateOneRequiredWithoutTenantGuestsNestedInput
  }

  export type TenantGuestUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantGuestUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCategoryUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerNight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    totalInventory?: IntFieldUpdateOperationsInput | number
    imageUrls?: RoomCategoryUpdateimageUrlsInput | string[]
    amenities?: RoomCategoryUpdateamenitiesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutRoomCategoryNestedInput
  }

  export type RoomCategoryUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerNight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    totalInventory?: IntFieldUpdateOperationsInput | number
    imageUrls?: RoomCategoryUpdateimageUrlsInput | string[]
    amenities?: RoomCategoryUpdateamenitiesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutRoomCategoryNestedInput
  }

  export type RoomCategoryUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pricePerNight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    maxGuests?: IntFieldUpdateOperationsInput | number
    totalInventory?: IntFieldUpdateOperationsInput | number
    imageUrls?: RoomCategoryUpdateimageUrlsInput | string[]
    amenities?: RoomCategoryUpdateamenitiesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    totalAmountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramPaymentChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviewSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guest?: GuestUpdateOneRequiredWithoutBookingsNestedInput
    roomCategory?: RoomCategoryUpdateOneRequiredWithoutBookingsNestedInput
    events?: BookingEventUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    roomCategoryId?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    totalAmountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramPaymentChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviewSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: BookingEventUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    roomCategoryId?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    totalAmountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramPaymentChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviewSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantGuestCreateManyGuestInput = {
    id?: string
    tenantId: string
    firstSeen?: Date | string
  }

  export type BookingCreateManyGuestInput = {
    id?: string
    tenantId: string
    roomCategoryId: string
    bookingReference: string
    checkIn: Date | string
    checkOut: Date | string
    nightsCount: number
    guestCount: number
    totalAmountPaid: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.BookingStatus
    paymentIntentId?: string | null
    telegramPaymentChargeId?: string | null
    receiptPdfUrl?: string | null
    reviewSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantGuestUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutTenantGuestsNestedInput
  }

  export type TenantGuestUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantGuestUncheckedUpdateManyWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    firstSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    totalAmountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramPaymentChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviewSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutBookingsNestedInput
    roomCategory?: RoomCategoryUpdateOneRequiredWithoutBookingsNestedInput
    events?: BookingEventUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    roomCategoryId?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    totalAmountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramPaymentChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviewSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: BookingEventUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    roomCategoryId?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    totalAmountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramPaymentChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviewSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyRoomCategoryInput = {
    id?: string
    tenantId: string
    guestId: string
    bookingReference: string
    checkIn: Date | string
    checkOut: Date | string
    nightsCount: number
    guestCount: number
    totalAmountPaid: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.BookingStatus
    paymentIntentId?: string | null
    telegramPaymentChargeId?: string | null
    receiptPdfUrl?: string | null
    reviewSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutRoomCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    totalAmountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramPaymentChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviewSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutBookingsNestedInput
    guest?: GuestUpdateOneRequiredWithoutBookingsNestedInput
    events?: BookingEventUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutRoomCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    totalAmountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramPaymentChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviewSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: BookingEventUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutRoomCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    nightsCount?: IntFieldUpdateOperationsInput | number
    guestCount?: IntFieldUpdateOperationsInput | number
    totalAmountPaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramPaymentChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviewSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingEventCreateManyBookingInput = {
    id?: string
    event: string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BookingEventUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingEventUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingEventUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}