
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
 * Model product
 * 
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>
/**
 * Model product_image
 * 
 */
export type product_image = $Result.DefaultSelection<Prisma.$product_imagePayload>
/**
 * Model daily_product
 * 
 */
export type daily_product = $Result.DefaultSelection<Prisma.$daily_productPayload>
/**
 * Model daily_image
 * 
 */
export type daily_image = $Result.DefaultSelection<Prisma.$daily_imagePayload>
/**
 * Model product_guesses
 * 
 */
export type product_guesses = $Result.DefaultSelection<Prisma.$product_guessesPayload>
/**
 * Model image_guesses
 * 
 */
export type image_guesses = $Result.DefaultSelection<Prisma.$image_guessesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
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
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.productDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_image`: Exposes CRUD operations for the **product_image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_images
    * const product_images = await prisma.product_image.findMany()
    * ```
    */
  get product_image(): Prisma.product_imageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.daily_product`: Exposes CRUD operations for the **daily_product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Daily_products
    * const daily_products = await prisma.daily_product.findMany()
    * ```
    */
  get daily_product(): Prisma.daily_productDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.daily_image`: Exposes CRUD operations for the **daily_image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Daily_images
    * const daily_images = await prisma.daily_image.findMany()
    * ```
    */
  get daily_image(): Prisma.daily_imageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_guesses`: Exposes CRUD operations for the **product_guesses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_guesses
    * const product_guesses = await prisma.product_guesses.findMany()
    * ```
    */
  get product_guesses(): Prisma.product_guessesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image_guesses`: Exposes CRUD operations for the **image_guesses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Image_guesses
    * const image_guesses = await prisma.image_guesses.findMany()
    * ```
    */
  get image_guesses(): Prisma.image_guessesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
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
    product: 'product',
    product_image: 'product_image',
    daily_product: 'daily_product',
    daily_image: 'daily_image',
    product_guesses: 'product_guesses',
    image_guesses: 'image_guesses'
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
      modelProps: "product" | "product_image" | "daily_product" | "daily_image" | "product_guesses" | "image_guesses"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      product: {
        payload: Prisma.$productPayload<ExtArgs>
        fields: Prisma.productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          create: {
            args: Prisma.productCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.productCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      product_image: {
        payload: Prisma.$product_imagePayload<ExtArgs>
        fields: Prisma.product_imageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_imageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_imageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagePayload>
          }
          findFirst: {
            args: Prisma.product_imageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_imageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagePayload>
          }
          findMany: {
            args: Prisma.product_imageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagePayload>[]
          }
          create: {
            args: Prisma.product_imageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagePayload>
          }
          createMany: {
            args: Prisma.product_imageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.product_imageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagePayload>
          }
          update: {
            args: Prisma.product_imageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagePayload>
          }
          deleteMany: {
            args: Prisma.product_imageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_imageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.product_imageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagePayload>
          }
          aggregate: {
            args: Prisma.Product_imageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_image>
          }
          groupBy: {
            args: Prisma.product_imageGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_imageGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_imageCountArgs<ExtArgs>
            result: $Utils.Optional<Product_imageCountAggregateOutputType> | number
          }
        }
      }
      daily_product: {
        payload: Prisma.$daily_productPayload<ExtArgs>
        fields: Prisma.daily_productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.daily_productFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.daily_productFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_productPayload>
          }
          findFirst: {
            args: Prisma.daily_productFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.daily_productFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_productPayload>
          }
          findMany: {
            args: Prisma.daily_productFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_productPayload>[]
          }
          create: {
            args: Prisma.daily_productCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_productPayload>
          }
          createMany: {
            args: Prisma.daily_productCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.daily_productDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_productPayload>
          }
          update: {
            args: Prisma.daily_productUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_productPayload>
          }
          deleteMany: {
            args: Prisma.daily_productDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.daily_productUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.daily_productUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_productPayload>
          }
          aggregate: {
            args: Prisma.Daily_productAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDaily_product>
          }
          groupBy: {
            args: Prisma.daily_productGroupByArgs<ExtArgs>
            result: $Utils.Optional<Daily_productGroupByOutputType>[]
          }
          count: {
            args: Prisma.daily_productCountArgs<ExtArgs>
            result: $Utils.Optional<Daily_productCountAggregateOutputType> | number
          }
        }
      }
      daily_image: {
        payload: Prisma.$daily_imagePayload<ExtArgs>
        fields: Prisma.daily_imageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.daily_imageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_imagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.daily_imageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_imagePayload>
          }
          findFirst: {
            args: Prisma.daily_imageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_imagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.daily_imageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_imagePayload>
          }
          findMany: {
            args: Prisma.daily_imageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_imagePayload>[]
          }
          create: {
            args: Prisma.daily_imageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_imagePayload>
          }
          createMany: {
            args: Prisma.daily_imageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.daily_imageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_imagePayload>
          }
          update: {
            args: Prisma.daily_imageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_imagePayload>
          }
          deleteMany: {
            args: Prisma.daily_imageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.daily_imageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.daily_imageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daily_imagePayload>
          }
          aggregate: {
            args: Prisma.Daily_imageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDaily_image>
          }
          groupBy: {
            args: Prisma.daily_imageGroupByArgs<ExtArgs>
            result: $Utils.Optional<Daily_imageGroupByOutputType>[]
          }
          count: {
            args: Prisma.daily_imageCountArgs<ExtArgs>
            result: $Utils.Optional<Daily_imageCountAggregateOutputType> | number
          }
        }
      }
      product_guesses: {
        payload: Prisma.$product_guessesPayload<ExtArgs>
        fields: Prisma.product_guessesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_guessesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_guessesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_guessesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_guessesPayload>
          }
          findFirst: {
            args: Prisma.product_guessesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_guessesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_guessesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_guessesPayload>
          }
          findMany: {
            args: Prisma.product_guessesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_guessesPayload>[]
          }
          create: {
            args: Prisma.product_guessesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_guessesPayload>
          }
          createMany: {
            args: Prisma.product_guessesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.product_guessesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_guessesPayload>
          }
          update: {
            args: Prisma.product_guessesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_guessesPayload>
          }
          deleteMany: {
            args: Prisma.product_guessesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_guessesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.product_guessesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_guessesPayload>
          }
          aggregate: {
            args: Prisma.Product_guessesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_guesses>
          }
          groupBy: {
            args: Prisma.product_guessesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_guessesGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_guessesCountArgs<ExtArgs>
            result: $Utils.Optional<Product_guessesCountAggregateOutputType> | number
          }
        }
      }
      image_guesses: {
        payload: Prisma.$image_guessesPayload<ExtArgs>
        fields: Prisma.image_guessesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.image_guessesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$image_guessesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.image_guessesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$image_guessesPayload>
          }
          findFirst: {
            args: Prisma.image_guessesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$image_guessesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.image_guessesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$image_guessesPayload>
          }
          findMany: {
            args: Prisma.image_guessesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$image_guessesPayload>[]
          }
          create: {
            args: Prisma.image_guessesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$image_guessesPayload>
          }
          createMany: {
            args: Prisma.image_guessesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.image_guessesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$image_guessesPayload>
          }
          update: {
            args: Prisma.image_guessesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$image_guessesPayload>
          }
          deleteMany: {
            args: Prisma.image_guessesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.image_guessesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.image_guessesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$image_guessesPayload>
          }
          aggregate: {
            args: Prisma.Image_guessesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage_guesses>
          }
          groupBy: {
            args: Prisma.image_guessesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Image_guessesGroupByOutputType>[]
          }
          count: {
            args: Prisma.image_guessesCountArgs<ExtArgs>
            result: $Utils.Optional<Image_guessesCountAggregateOutputType> | number
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
    product?: productOmit
    product_image?: product_imageOmit
    daily_product?: daily_productOmit
    daily_image?: daily_imageOmit
    product_guesses?: product_guessesOmit
    image_guesses?: image_guessesOmit
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
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    product_guesses: number
    image_guesses: number
    daily_image: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_guesses?: boolean | ProductCountOutputTypeCountProduct_guessesArgs
    image_guesses?: boolean | ProductCountOutputTypeCountImage_guessesArgs
    daily_image?: boolean | ProductCountOutputTypeCountDaily_imageArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProduct_guessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_guessesWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountImage_guessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: image_guessesWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountDaily_imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: daily_imageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    brand: string | null
    category: string | null
    weight: string | null
    price: Decimal | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    brand: string | null
    category: string | null
    weight: string | null
    price: Decimal | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    brand: number
    category: number
    weight: number
    price: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    category?: true
    weight?: true
    price?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    category?: true
    weight?: true
    price?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    category?: true
    weight?: true
    price?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    category?: boolean
    weight?: boolean
    price?: boolean
    product_image?: boolean | product$product_imageArgs<ExtArgs>
    daily_product?: boolean | product$daily_productArgs<ExtArgs>
    product_guesses?: boolean | product$product_guessesArgs<ExtArgs>
    image_guesses?: boolean | product$image_guessesArgs<ExtArgs>
    daily_image?: boolean | product$daily_imageArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type productSelectScalar = {
    id?: boolean
    name?: boolean
    brand?: boolean
    category?: boolean
    weight?: boolean
    price?: boolean
  }

  export type productOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "brand" | "category" | "weight" | "price", ExtArgs["result"]["product"]>
  export type productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_image?: boolean | product$product_imageArgs<ExtArgs>
    daily_product?: boolean | product$daily_productArgs<ExtArgs>
    product_guesses?: boolean | product$product_guessesArgs<ExtArgs>
    image_guesses?: boolean | product$image_guessesArgs<ExtArgs>
    daily_image?: boolean | product$daily_imageArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product"
    objects: {
      product_image: Prisma.$product_imagePayload<ExtArgs> | null
      daily_product: Prisma.$daily_productPayload<ExtArgs> | null
      product_guesses: Prisma.$product_guessesPayload<ExtArgs>[]
      image_guesses: Prisma.$image_guessesPayload<ExtArgs>[]
      daily_image: Prisma.$daily_imagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      brand: string
      category: string
      weight: string
      price: Prisma.Decimal
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<Prisma.$productPayload, S>

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product'], meta: { name: 'product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productFindUniqueArgs>(args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs>(args: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productFindFirstArgs>(args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productFindFirstOrThrowArgs>(args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productFindManyArgs>(args?: SelectSubset<T, productFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends productCreateArgs>(args: SelectSubset<T, productCreateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productCreateManyArgs>(args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends productDeleteArgs>(args: SelectSubset<T, productDeleteArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productUpdateArgs>(args: SelectSubset<T, productUpdateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productDeleteManyArgs>(args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productUpdateManyArgs>(args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends productUpsertArgs>(args: SelectSubset<T, productUpsertArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
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
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product model
   */
  readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product_image<T extends product$product_imageArgs<ExtArgs> = {}>(args?: Subset<T, product$product_imageArgs<ExtArgs>>): Prisma__product_imageClient<$Result.GetResult<Prisma.$product_imagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    daily_product<T extends product$daily_productArgs<ExtArgs> = {}>(args?: Subset<T, product$daily_productArgs<ExtArgs>>): Prisma__daily_productClient<$Result.GetResult<Prisma.$daily_productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    product_guesses<T extends product$product_guessesArgs<ExtArgs> = {}>(args?: Subset<T, product$product_guessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_guessesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    image_guesses<T extends product$image_guessesArgs<ExtArgs> = {}>(args?: Subset<T, product$image_guessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$image_guessesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    daily_image<T extends product$daily_imageArgs<ExtArgs> = {}>(args?: Subset<T, product$daily_imageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$daily_imagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the product model
   */
  interface productFieldRefs {
    readonly id: FieldRef<"product", 'Int'>
    readonly name: FieldRef<"product", 'String'>
    readonly brand: FieldRef<"product", 'String'>
    readonly category: FieldRef<"product", 'String'>
    readonly weight: FieldRef<"product", 'String'>
    readonly price: FieldRef<"product", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to create a product.
     */
    data: XOR<productCreateInput, productUncheckedCreateInput>
  }

  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput
  }

  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>
  }

  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput
  }

  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * product.product_image
   */
  export type product$product_imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_image
     */
    omit?: product_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imageInclude<ExtArgs> | null
    where?: product_imageWhereInput
  }

  /**
   * product.daily_product
   */
  export type product$daily_productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_product
     */
    select?: daily_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_product
     */
    omit?: daily_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_productInclude<ExtArgs> | null
    where?: daily_productWhereInput
  }

  /**
   * product.product_guesses
   */
  export type product$product_guessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guesses
     */
    select?: product_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guesses
     */
    omit?: product_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guessesInclude<ExtArgs> | null
    where?: product_guessesWhereInput
    orderBy?: product_guessesOrderByWithRelationInput | product_guessesOrderByWithRelationInput[]
    cursor?: product_guessesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_guessesScalarFieldEnum | Product_guessesScalarFieldEnum[]
  }

  /**
   * product.image_guesses
   */
  export type product$image_guessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_guesses
     */
    select?: image_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_guesses
     */
    omit?: image_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_guessesInclude<ExtArgs> | null
    where?: image_guessesWhereInput
    orderBy?: image_guessesOrderByWithRelationInput | image_guessesOrderByWithRelationInput[]
    cursor?: image_guessesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Image_guessesScalarFieldEnum | Image_guessesScalarFieldEnum[]
  }

  /**
   * product.daily_image
   */
  export type product$daily_imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_image
     */
    select?: daily_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_image
     */
    omit?: daily_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_imageInclude<ExtArgs> | null
    where?: daily_imageWhereInput
    orderBy?: daily_imageOrderByWithRelationInput | daily_imageOrderByWithRelationInput[]
    cursor?: daily_imageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Daily_imageScalarFieldEnum | Daily_imageScalarFieldEnum[]
  }

  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
  }


  /**
   * Model product_image
   */

  export type AggregateProduct_image = {
    _count: Product_imageCountAggregateOutputType | null
    _avg: Product_imageAvgAggregateOutputType | null
    _sum: Product_imageSumAggregateOutputType | null
    _min: Product_imageMinAggregateOutputType | null
    _max: Product_imageMaxAggregateOutputType | null
  }

  export type Product_imageAvgAggregateOutputType = {
    product_id: number | null
  }

  export type Product_imageSumAggregateOutputType = {
    product_id: number | null
  }

  export type Product_imageMinAggregateOutputType = {
    product_id: number | null
    image_url: string | null
  }

  export type Product_imageMaxAggregateOutputType = {
    product_id: number | null
    image_url: string | null
  }

  export type Product_imageCountAggregateOutputType = {
    product_id: number
    image_url: number
    _all: number
  }


  export type Product_imageAvgAggregateInputType = {
    product_id?: true
  }

  export type Product_imageSumAggregateInputType = {
    product_id?: true
  }

  export type Product_imageMinAggregateInputType = {
    product_id?: true
    image_url?: true
  }

  export type Product_imageMaxAggregateInputType = {
    product_id?: true
    image_url?: true
  }

  export type Product_imageCountAggregateInputType = {
    product_id?: true
    image_url?: true
    _all?: true
  }

  export type Product_imageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_image to aggregate.
     */
    where?: product_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imageOrderByWithRelationInput | product_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_images
    **/
    _count?: true | Product_imageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_imageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_imageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_imageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_imageMaxAggregateInputType
  }

  export type GetProduct_imageAggregateType<T extends Product_imageAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_image]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_image[P]>
      : GetScalarType<T[P], AggregateProduct_image[P]>
  }




  export type product_imageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_imageWhereInput
    orderBy?: product_imageOrderByWithAggregationInput | product_imageOrderByWithAggregationInput[]
    by: Product_imageScalarFieldEnum[] | Product_imageScalarFieldEnum
    having?: product_imageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_imageCountAggregateInputType | true
    _avg?: Product_imageAvgAggregateInputType
    _sum?: Product_imageSumAggregateInputType
    _min?: Product_imageMinAggregateInputType
    _max?: Product_imageMaxAggregateInputType
  }

  export type Product_imageGroupByOutputType = {
    product_id: number
    image_url: string
    _count: Product_imageCountAggregateOutputType | null
    _avg: Product_imageAvgAggregateOutputType | null
    _sum: Product_imageSumAggregateOutputType | null
    _min: Product_imageMinAggregateOutputType | null
    _max: Product_imageMaxAggregateOutputType | null
  }

  type GetProduct_imageGroupByPayload<T extends product_imageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_imageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_imageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_imageGroupByOutputType[P]>
            : GetScalarType<T[P], Product_imageGroupByOutputType[P]>
        }
      >
    >


  export type product_imageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    image_url?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_image"]>



  export type product_imageSelectScalar = {
    product_id?: boolean
    image_url?: boolean
  }

  export type product_imageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "image_url", ExtArgs["result"]["product_image"]>
  export type product_imageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $product_imagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_image"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: number
      image_url: string
    }, ExtArgs["result"]["product_image"]>
    composites: {}
  }

  type product_imageGetPayload<S extends boolean | null | undefined | product_imageDefaultArgs> = $Result.GetResult<Prisma.$product_imagePayload, S>

  type product_imageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_imageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_imageCountAggregateInputType | true
    }

  export interface product_imageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_image'], meta: { name: 'product_image' } }
    /**
     * Find zero or one Product_image that matches the filter.
     * @param {product_imageFindUniqueArgs} args - Arguments to find a Product_image
     * @example
     * // Get one Product_image
     * const product_image = await prisma.product_image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_imageFindUniqueArgs>(args: SelectSubset<T, product_imageFindUniqueArgs<ExtArgs>>): Prisma__product_imageClient<$Result.GetResult<Prisma.$product_imagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_imageFindUniqueOrThrowArgs} args - Arguments to find a Product_image
     * @example
     * // Get one Product_image
     * const product_image = await prisma.product_image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_imageFindUniqueOrThrowArgs>(args: SelectSubset<T, product_imageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_imageClient<$Result.GetResult<Prisma.$product_imagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imageFindFirstArgs} args - Arguments to find a Product_image
     * @example
     * // Get one Product_image
     * const product_image = await prisma.product_image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_imageFindFirstArgs>(args?: SelectSubset<T, product_imageFindFirstArgs<ExtArgs>>): Prisma__product_imageClient<$Result.GetResult<Prisma.$product_imagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imageFindFirstOrThrowArgs} args - Arguments to find a Product_image
     * @example
     * // Get one Product_image
     * const product_image = await prisma.product_image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_imageFindFirstOrThrowArgs>(args?: SelectSubset<T, product_imageFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_imageClient<$Result.GetResult<Prisma.$product_imagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_images
     * const product_images = await prisma.product_image.findMany()
     * 
     * // Get first 10 Product_images
     * const product_images = await prisma.product_image.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const product_imageWithProduct_idOnly = await prisma.product_image.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends product_imageFindManyArgs>(args?: SelectSubset<T, product_imageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_imagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_image.
     * @param {product_imageCreateArgs} args - Arguments to create a Product_image.
     * @example
     * // Create one Product_image
     * const Product_image = await prisma.product_image.create({
     *   data: {
     *     // ... data to create a Product_image
     *   }
     * })
     * 
     */
    create<T extends product_imageCreateArgs>(args: SelectSubset<T, product_imageCreateArgs<ExtArgs>>): Prisma__product_imageClient<$Result.GetResult<Prisma.$product_imagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_images.
     * @param {product_imageCreateManyArgs} args - Arguments to create many Product_images.
     * @example
     * // Create many Product_images
     * const product_image = await prisma.product_image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_imageCreateManyArgs>(args?: SelectSubset<T, product_imageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product_image.
     * @param {product_imageDeleteArgs} args - Arguments to delete one Product_image.
     * @example
     * // Delete one Product_image
     * const Product_image = await prisma.product_image.delete({
     *   where: {
     *     // ... filter to delete one Product_image
     *   }
     * })
     * 
     */
    delete<T extends product_imageDeleteArgs>(args: SelectSubset<T, product_imageDeleteArgs<ExtArgs>>): Prisma__product_imageClient<$Result.GetResult<Prisma.$product_imagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_image.
     * @param {product_imageUpdateArgs} args - Arguments to update one Product_image.
     * @example
     * // Update one Product_image
     * const product_image = await prisma.product_image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_imageUpdateArgs>(args: SelectSubset<T, product_imageUpdateArgs<ExtArgs>>): Prisma__product_imageClient<$Result.GetResult<Prisma.$product_imagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_images.
     * @param {product_imageDeleteManyArgs} args - Arguments to filter Product_images to delete.
     * @example
     * // Delete a few Product_images
     * const { count } = await prisma.product_image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_imageDeleteManyArgs>(args?: SelectSubset<T, product_imageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_images
     * const product_image = await prisma.product_image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_imageUpdateManyArgs>(args: SelectSubset<T, product_imageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product_image.
     * @param {product_imageUpsertArgs} args - Arguments to update or create a Product_image.
     * @example
     * // Update or create a Product_image
     * const product_image = await prisma.product_image.upsert({
     *   create: {
     *     // ... data to create a Product_image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_image we want to update
     *   }
     * })
     */
    upsert<T extends product_imageUpsertArgs>(args: SelectSubset<T, product_imageUpsertArgs<ExtArgs>>): Prisma__product_imageClient<$Result.GetResult<Prisma.$product_imagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imageCountArgs} args - Arguments to filter Product_images to count.
     * @example
     * // Count the number of Product_images
     * const count = await prisma.product_image.count({
     *   where: {
     *     // ... the filter for the Product_images we want to count
     *   }
     * })
    **/
    count<T extends product_imageCountArgs>(
      args?: Subset<T, product_imageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_imageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_imageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Product_imageAggregateArgs>(args: Subset<T, Product_imageAggregateArgs>): Prisma.PrismaPromise<GetProduct_imageAggregateType<T>>

    /**
     * Group by Product_image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imageGroupByArgs} args - Group by arguments.
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
      T extends product_imageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_imageGroupByArgs['orderBy'] }
        : { orderBy?: product_imageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, product_imageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_imageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_image model
   */
  readonly fields: product_imageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_imageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the product_image model
   */
  interface product_imageFieldRefs {
    readonly product_id: FieldRef<"product_image", 'Int'>
    readonly image_url: FieldRef<"product_image", 'String'>
  }
    

  // Custom InputTypes
  /**
   * product_image findUnique
   */
  export type product_imageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_image
     */
    omit?: product_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imageInclude<ExtArgs> | null
    /**
     * Filter, which product_image to fetch.
     */
    where: product_imageWhereUniqueInput
  }

  /**
   * product_image findUniqueOrThrow
   */
  export type product_imageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_image
     */
    omit?: product_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imageInclude<ExtArgs> | null
    /**
     * Filter, which product_image to fetch.
     */
    where: product_imageWhereUniqueInput
  }

  /**
   * product_image findFirst
   */
  export type product_imageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_image
     */
    omit?: product_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imageInclude<ExtArgs> | null
    /**
     * Filter, which product_image to fetch.
     */
    where?: product_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imageOrderByWithRelationInput | product_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_images.
     */
    cursor?: product_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_images.
     */
    distinct?: Product_imageScalarFieldEnum | Product_imageScalarFieldEnum[]
  }

  /**
   * product_image findFirstOrThrow
   */
  export type product_imageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_image
     */
    omit?: product_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imageInclude<ExtArgs> | null
    /**
     * Filter, which product_image to fetch.
     */
    where?: product_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imageOrderByWithRelationInput | product_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_images.
     */
    cursor?: product_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_images.
     */
    distinct?: Product_imageScalarFieldEnum | Product_imageScalarFieldEnum[]
  }

  /**
   * product_image findMany
   */
  export type product_imageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_image
     */
    omit?: product_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imageInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where?: product_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imageOrderByWithRelationInput | product_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_images.
     */
    cursor?: product_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_images.
     */
    distinct?: Product_imageScalarFieldEnum | Product_imageScalarFieldEnum[]
  }

  /**
   * product_image create
   */
  export type product_imageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_image
     */
    omit?: product_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imageInclude<ExtArgs> | null
    /**
     * The data needed to create a product_image.
     */
    data: XOR<product_imageCreateInput, product_imageUncheckedCreateInput>
  }

  /**
   * product_image createMany
   */
  export type product_imageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_images.
     */
    data: product_imageCreateManyInput | product_imageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_image update
   */
  export type product_imageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_image
     */
    omit?: product_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imageInclude<ExtArgs> | null
    /**
     * The data needed to update a product_image.
     */
    data: XOR<product_imageUpdateInput, product_imageUncheckedUpdateInput>
    /**
     * Choose, which product_image to update.
     */
    where: product_imageWhereUniqueInput
  }

  /**
   * product_image updateMany
   */
  export type product_imageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_images.
     */
    data: XOR<product_imageUpdateManyMutationInput, product_imageUncheckedUpdateManyInput>
    /**
     * Filter which product_images to update
     */
    where?: product_imageWhereInput
    /**
     * Limit how many product_images to update.
     */
    limit?: number
  }

  /**
   * product_image upsert
   */
  export type product_imageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_image
     */
    omit?: product_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imageInclude<ExtArgs> | null
    /**
     * The filter to search for the product_image to update in case it exists.
     */
    where: product_imageWhereUniqueInput
    /**
     * In case the product_image found by the `where` argument doesn't exist, create a new product_image with this data.
     */
    create: XOR<product_imageCreateInput, product_imageUncheckedCreateInput>
    /**
     * In case the product_image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_imageUpdateInput, product_imageUncheckedUpdateInput>
  }

  /**
   * product_image delete
   */
  export type product_imageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_image
     */
    omit?: product_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imageInclude<ExtArgs> | null
    /**
     * Filter which product_image to delete.
     */
    where: product_imageWhereUniqueInput
  }

  /**
   * product_image deleteMany
   */
  export type product_imageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_images to delete
     */
    where?: product_imageWhereInput
    /**
     * Limit how many product_images to delete.
     */
    limit?: number
  }

  /**
   * product_image without action
   */
  export type product_imageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_image
     */
    select?: product_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_image
     */
    omit?: product_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imageInclude<ExtArgs> | null
  }


  /**
   * Model daily_product
   */

  export type AggregateDaily_product = {
    _count: Daily_productCountAggregateOutputType | null
    _avg: Daily_productAvgAggregateOutputType | null
    _sum: Daily_productSumAggregateOutputType | null
    _min: Daily_productMinAggregateOutputType | null
    _max: Daily_productMaxAggregateOutputType | null
  }

  export type Daily_productAvgAggregateOutputType = {
    product_id: number | null
  }

  export type Daily_productSumAggregateOutputType = {
    product_id: number | null
  }

  export type Daily_productMinAggregateOutputType = {
    product_id: number | null
    product_date: Date | null
  }

  export type Daily_productMaxAggregateOutputType = {
    product_id: number | null
    product_date: Date | null
  }

  export type Daily_productCountAggregateOutputType = {
    product_id: number
    product_date: number
    _all: number
  }


  export type Daily_productAvgAggregateInputType = {
    product_id?: true
  }

  export type Daily_productSumAggregateInputType = {
    product_id?: true
  }

  export type Daily_productMinAggregateInputType = {
    product_id?: true
    product_date?: true
  }

  export type Daily_productMaxAggregateInputType = {
    product_id?: true
    product_date?: true
  }

  export type Daily_productCountAggregateInputType = {
    product_id?: true
    product_date?: true
    _all?: true
  }

  export type Daily_productAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which daily_product to aggregate.
     */
    where?: daily_productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of daily_products to fetch.
     */
    orderBy?: daily_productOrderByWithRelationInput | daily_productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: daily_productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` daily_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` daily_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned daily_products
    **/
    _count?: true | Daily_productCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Daily_productAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Daily_productSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Daily_productMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Daily_productMaxAggregateInputType
  }

  export type GetDaily_productAggregateType<T extends Daily_productAggregateArgs> = {
        [P in keyof T & keyof AggregateDaily_product]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDaily_product[P]>
      : GetScalarType<T[P], AggregateDaily_product[P]>
  }




  export type daily_productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: daily_productWhereInput
    orderBy?: daily_productOrderByWithAggregationInput | daily_productOrderByWithAggregationInput[]
    by: Daily_productScalarFieldEnum[] | Daily_productScalarFieldEnum
    having?: daily_productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Daily_productCountAggregateInputType | true
    _avg?: Daily_productAvgAggregateInputType
    _sum?: Daily_productSumAggregateInputType
    _min?: Daily_productMinAggregateInputType
    _max?: Daily_productMaxAggregateInputType
  }

  export type Daily_productGroupByOutputType = {
    product_id: number
    product_date: Date
    _count: Daily_productCountAggregateOutputType | null
    _avg: Daily_productAvgAggregateOutputType | null
    _sum: Daily_productSumAggregateOutputType | null
    _min: Daily_productMinAggregateOutputType | null
    _max: Daily_productMaxAggregateOutputType | null
  }

  type GetDaily_productGroupByPayload<T extends daily_productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Daily_productGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Daily_productGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Daily_productGroupByOutputType[P]>
            : GetScalarType<T[P], Daily_productGroupByOutputType[P]>
        }
      >
    >


  export type daily_productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    product_date?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["daily_product"]>



  export type daily_productSelectScalar = {
    product_id?: boolean
    product_date?: boolean
  }

  export type daily_productOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "product_date", ExtArgs["result"]["daily_product"]>
  export type daily_productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $daily_productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "daily_product"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: number
      product_date: Date
    }, ExtArgs["result"]["daily_product"]>
    composites: {}
  }

  type daily_productGetPayload<S extends boolean | null | undefined | daily_productDefaultArgs> = $Result.GetResult<Prisma.$daily_productPayload, S>

  type daily_productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<daily_productFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Daily_productCountAggregateInputType | true
    }

  export interface daily_productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['daily_product'], meta: { name: 'daily_product' } }
    /**
     * Find zero or one Daily_product that matches the filter.
     * @param {daily_productFindUniqueArgs} args - Arguments to find a Daily_product
     * @example
     * // Get one Daily_product
     * const daily_product = await prisma.daily_product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends daily_productFindUniqueArgs>(args: SelectSubset<T, daily_productFindUniqueArgs<ExtArgs>>): Prisma__daily_productClient<$Result.GetResult<Prisma.$daily_productPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Daily_product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {daily_productFindUniqueOrThrowArgs} args - Arguments to find a Daily_product
     * @example
     * // Get one Daily_product
     * const daily_product = await prisma.daily_product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends daily_productFindUniqueOrThrowArgs>(args: SelectSubset<T, daily_productFindUniqueOrThrowArgs<ExtArgs>>): Prisma__daily_productClient<$Result.GetResult<Prisma.$daily_productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Daily_product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_productFindFirstArgs} args - Arguments to find a Daily_product
     * @example
     * // Get one Daily_product
     * const daily_product = await prisma.daily_product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends daily_productFindFirstArgs>(args?: SelectSubset<T, daily_productFindFirstArgs<ExtArgs>>): Prisma__daily_productClient<$Result.GetResult<Prisma.$daily_productPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Daily_product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_productFindFirstOrThrowArgs} args - Arguments to find a Daily_product
     * @example
     * // Get one Daily_product
     * const daily_product = await prisma.daily_product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends daily_productFindFirstOrThrowArgs>(args?: SelectSubset<T, daily_productFindFirstOrThrowArgs<ExtArgs>>): Prisma__daily_productClient<$Result.GetResult<Prisma.$daily_productPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Daily_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Daily_products
     * const daily_products = await prisma.daily_product.findMany()
     * 
     * // Get first 10 Daily_products
     * const daily_products = await prisma.daily_product.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const daily_productWithProduct_idOnly = await prisma.daily_product.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends daily_productFindManyArgs>(args?: SelectSubset<T, daily_productFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$daily_productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Daily_product.
     * @param {daily_productCreateArgs} args - Arguments to create a Daily_product.
     * @example
     * // Create one Daily_product
     * const Daily_product = await prisma.daily_product.create({
     *   data: {
     *     // ... data to create a Daily_product
     *   }
     * })
     * 
     */
    create<T extends daily_productCreateArgs>(args: SelectSubset<T, daily_productCreateArgs<ExtArgs>>): Prisma__daily_productClient<$Result.GetResult<Prisma.$daily_productPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Daily_products.
     * @param {daily_productCreateManyArgs} args - Arguments to create many Daily_products.
     * @example
     * // Create many Daily_products
     * const daily_product = await prisma.daily_product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends daily_productCreateManyArgs>(args?: SelectSubset<T, daily_productCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Daily_product.
     * @param {daily_productDeleteArgs} args - Arguments to delete one Daily_product.
     * @example
     * // Delete one Daily_product
     * const Daily_product = await prisma.daily_product.delete({
     *   where: {
     *     // ... filter to delete one Daily_product
     *   }
     * })
     * 
     */
    delete<T extends daily_productDeleteArgs>(args: SelectSubset<T, daily_productDeleteArgs<ExtArgs>>): Prisma__daily_productClient<$Result.GetResult<Prisma.$daily_productPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Daily_product.
     * @param {daily_productUpdateArgs} args - Arguments to update one Daily_product.
     * @example
     * // Update one Daily_product
     * const daily_product = await prisma.daily_product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends daily_productUpdateArgs>(args: SelectSubset<T, daily_productUpdateArgs<ExtArgs>>): Prisma__daily_productClient<$Result.GetResult<Prisma.$daily_productPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Daily_products.
     * @param {daily_productDeleteManyArgs} args - Arguments to filter Daily_products to delete.
     * @example
     * // Delete a few Daily_products
     * const { count } = await prisma.daily_product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends daily_productDeleteManyArgs>(args?: SelectSubset<T, daily_productDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Daily_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Daily_products
     * const daily_product = await prisma.daily_product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends daily_productUpdateManyArgs>(args: SelectSubset<T, daily_productUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Daily_product.
     * @param {daily_productUpsertArgs} args - Arguments to update or create a Daily_product.
     * @example
     * // Update or create a Daily_product
     * const daily_product = await prisma.daily_product.upsert({
     *   create: {
     *     // ... data to create a Daily_product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Daily_product we want to update
     *   }
     * })
     */
    upsert<T extends daily_productUpsertArgs>(args: SelectSubset<T, daily_productUpsertArgs<ExtArgs>>): Prisma__daily_productClient<$Result.GetResult<Prisma.$daily_productPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Daily_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_productCountArgs} args - Arguments to filter Daily_products to count.
     * @example
     * // Count the number of Daily_products
     * const count = await prisma.daily_product.count({
     *   where: {
     *     // ... the filter for the Daily_products we want to count
     *   }
     * })
    **/
    count<T extends daily_productCountArgs>(
      args?: Subset<T, daily_productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Daily_productCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Daily_product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Daily_productAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Daily_productAggregateArgs>(args: Subset<T, Daily_productAggregateArgs>): Prisma.PrismaPromise<GetDaily_productAggregateType<T>>

    /**
     * Group by Daily_product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_productGroupByArgs} args - Group by arguments.
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
      T extends daily_productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: daily_productGroupByArgs['orderBy'] }
        : { orderBy?: daily_productGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, daily_productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDaily_productGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the daily_product model
   */
  readonly fields: daily_productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for daily_product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__daily_productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the daily_product model
   */
  interface daily_productFieldRefs {
    readonly product_id: FieldRef<"daily_product", 'Int'>
    readonly product_date: FieldRef<"daily_product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * daily_product findUnique
   */
  export type daily_productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_product
     */
    select?: daily_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_product
     */
    omit?: daily_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_productInclude<ExtArgs> | null
    /**
     * Filter, which daily_product to fetch.
     */
    where: daily_productWhereUniqueInput
  }

  /**
   * daily_product findUniqueOrThrow
   */
  export type daily_productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_product
     */
    select?: daily_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_product
     */
    omit?: daily_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_productInclude<ExtArgs> | null
    /**
     * Filter, which daily_product to fetch.
     */
    where: daily_productWhereUniqueInput
  }

  /**
   * daily_product findFirst
   */
  export type daily_productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_product
     */
    select?: daily_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_product
     */
    omit?: daily_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_productInclude<ExtArgs> | null
    /**
     * Filter, which daily_product to fetch.
     */
    where?: daily_productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of daily_products to fetch.
     */
    orderBy?: daily_productOrderByWithRelationInput | daily_productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for daily_products.
     */
    cursor?: daily_productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` daily_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` daily_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of daily_products.
     */
    distinct?: Daily_productScalarFieldEnum | Daily_productScalarFieldEnum[]
  }

  /**
   * daily_product findFirstOrThrow
   */
  export type daily_productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_product
     */
    select?: daily_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_product
     */
    omit?: daily_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_productInclude<ExtArgs> | null
    /**
     * Filter, which daily_product to fetch.
     */
    where?: daily_productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of daily_products to fetch.
     */
    orderBy?: daily_productOrderByWithRelationInput | daily_productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for daily_products.
     */
    cursor?: daily_productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` daily_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` daily_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of daily_products.
     */
    distinct?: Daily_productScalarFieldEnum | Daily_productScalarFieldEnum[]
  }

  /**
   * daily_product findMany
   */
  export type daily_productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_product
     */
    select?: daily_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_product
     */
    omit?: daily_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_productInclude<ExtArgs> | null
    /**
     * Filter, which daily_products to fetch.
     */
    where?: daily_productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of daily_products to fetch.
     */
    orderBy?: daily_productOrderByWithRelationInput | daily_productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing daily_products.
     */
    cursor?: daily_productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` daily_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` daily_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of daily_products.
     */
    distinct?: Daily_productScalarFieldEnum | Daily_productScalarFieldEnum[]
  }

  /**
   * daily_product create
   */
  export type daily_productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_product
     */
    select?: daily_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_product
     */
    omit?: daily_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_productInclude<ExtArgs> | null
    /**
     * The data needed to create a daily_product.
     */
    data: XOR<daily_productCreateInput, daily_productUncheckedCreateInput>
  }

  /**
   * daily_product createMany
   */
  export type daily_productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many daily_products.
     */
    data: daily_productCreateManyInput | daily_productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * daily_product update
   */
  export type daily_productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_product
     */
    select?: daily_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_product
     */
    omit?: daily_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_productInclude<ExtArgs> | null
    /**
     * The data needed to update a daily_product.
     */
    data: XOR<daily_productUpdateInput, daily_productUncheckedUpdateInput>
    /**
     * Choose, which daily_product to update.
     */
    where: daily_productWhereUniqueInput
  }

  /**
   * daily_product updateMany
   */
  export type daily_productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update daily_products.
     */
    data: XOR<daily_productUpdateManyMutationInput, daily_productUncheckedUpdateManyInput>
    /**
     * Filter which daily_products to update
     */
    where?: daily_productWhereInput
    /**
     * Limit how many daily_products to update.
     */
    limit?: number
  }

  /**
   * daily_product upsert
   */
  export type daily_productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_product
     */
    select?: daily_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_product
     */
    omit?: daily_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_productInclude<ExtArgs> | null
    /**
     * The filter to search for the daily_product to update in case it exists.
     */
    where: daily_productWhereUniqueInput
    /**
     * In case the daily_product found by the `where` argument doesn't exist, create a new daily_product with this data.
     */
    create: XOR<daily_productCreateInput, daily_productUncheckedCreateInput>
    /**
     * In case the daily_product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<daily_productUpdateInput, daily_productUncheckedUpdateInput>
  }

  /**
   * daily_product delete
   */
  export type daily_productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_product
     */
    select?: daily_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_product
     */
    omit?: daily_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_productInclude<ExtArgs> | null
    /**
     * Filter which daily_product to delete.
     */
    where: daily_productWhereUniqueInput
  }

  /**
   * daily_product deleteMany
   */
  export type daily_productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which daily_products to delete
     */
    where?: daily_productWhereInput
    /**
     * Limit how many daily_products to delete.
     */
    limit?: number
  }

  /**
   * daily_product without action
   */
  export type daily_productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_product
     */
    select?: daily_productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_product
     */
    omit?: daily_productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_productInclude<ExtArgs> | null
  }


  /**
   * Model daily_image
   */

  export type AggregateDaily_image = {
    _count: Daily_imageCountAggregateOutputType | null
    _avg: Daily_imageAvgAggregateOutputType | null
    _sum: Daily_imageSumAggregateOutputType | null
    _min: Daily_imageMinAggregateOutputType | null
    _max: Daily_imageMaxAggregateOutputType | null
  }

  export type Daily_imageAvgAggregateOutputType = {
    product_id: number | null
  }

  export type Daily_imageSumAggregateOutputType = {
    product_id: number | null
  }

  export type Daily_imageMinAggregateOutputType = {
    product_id: number | null
    image_date: Date | null
  }

  export type Daily_imageMaxAggregateOutputType = {
    product_id: number | null
    image_date: Date | null
  }

  export type Daily_imageCountAggregateOutputType = {
    product_id: number
    image_date: number
    _all: number
  }


  export type Daily_imageAvgAggregateInputType = {
    product_id?: true
  }

  export type Daily_imageSumAggregateInputType = {
    product_id?: true
  }

  export type Daily_imageMinAggregateInputType = {
    product_id?: true
    image_date?: true
  }

  export type Daily_imageMaxAggregateInputType = {
    product_id?: true
    image_date?: true
  }

  export type Daily_imageCountAggregateInputType = {
    product_id?: true
    image_date?: true
    _all?: true
  }

  export type Daily_imageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which daily_image to aggregate.
     */
    where?: daily_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of daily_images to fetch.
     */
    orderBy?: daily_imageOrderByWithRelationInput | daily_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: daily_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` daily_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` daily_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned daily_images
    **/
    _count?: true | Daily_imageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Daily_imageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Daily_imageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Daily_imageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Daily_imageMaxAggregateInputType
  }

  export type GetDaily_imageAggregateType<T extends Daily_imageAggregateArgs> = {
        [P in keyof T & keyof AggregateDaily_image]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDaily_image[P]>
      : GetScalarType<T[P], AggregateDaily_image[P]>
  }




  export type daily_imageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: daily_imageWhereInput
    orderBy?: daily_imageOrderByWithAggregationInput | daily_imageOrderByWithAggregationInput[]
    by: Daily_imageScalarFieldEnum[] | Daily_imageScalarFieldEnum
    having?: daily_imageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Daily_imageCountAggregateInputType | true
    _avg?: Daily_imageAvgAggregateInputType
    _sum?: Daily_imageSumAggregateInputType
    _min?: Daily_imageMinAggregateInputType
    _max?: Daily_imageMaxAggregateInputType
  }

  export type Daily_imageGroupByOutputType = {
    product_id: number
    image_date: Date
    _count: Daily_imageCountAggregateOutputType | null
    _avg: Daily_imageAvgAggregateOutputType | null
    _sum: Daily_imageSumAggregateOutputType | null
    _min: Daily_imageMinAggregateOutputType | null
    _max: Daily_imageMaxAggregateOutputType | null
  }

  type GetDaily_imageGroupByPayload<T extends daily_imageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Daily_imageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Daily_imageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Daily_imageGroupByOutputType[P]>
            : GetScalarType<T[P], Daily_imageGroupByOutputType[P]>
        }
      >
    >


  export type daily_imageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    image_date?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["daily_image"]>



  export type daily_imageSelectScalar = {
    product_id?: boolean
    image_date?: boolean
  }

  export type daily_imageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "image_date", ExtArgs["result"]["daily_image"]>
  export type daily_imageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $daily_imagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "daily_image"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: number
      image_date: Date
    }, ExtArgs["result"]["daily_image"]>
    composites: {}
  }

  type daily_imageGetPayload<S extends boolean | null | undefined | daily_imageDefaultArgs> = $Result.GetResult<Prisma.$daily_imagePayload, S>

  type daily_imageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<daily_imageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Daily_imageCountAggregateInputType | true
    }

  export interface daily_imageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['daily_image'], meta: { name: 'daily_image' } }
    /**
     * Find zero or one Daily_image that matches the filter.
     * @param {daily_imageFindUniqueArgs} args - Arguments to find a Daily_image
     * @example
     * // Get one Daily_image
     * const daily_image = await prisma.daily_image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends daily_imageFindUniqueArgs>(args: SelectSubset<T, daily_imageFindUniqueArgs<ExtArgs>>): Prisma__daily_imageClient<$Result.GetResult<Prisma.$daily_imagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Daily_image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {daily_imageFindUniqueOrThrowArgs} args - Arguments to find a Daily_image
     * @example
     * // Get one Daily_image
     * const daily_image = await prisma.daily_image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends daily_imageFindUniqueOrThrowArgs>(args: SelectSubset<T, daily_imageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__daily_imageClient<$Result.GetResult<Prisma.$daily_imagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Daily_image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_imageFindFirstArgs} args - Arguments to find a Daily_image
     * @example
     * // Get one Daily_image
     * const daily_image = await prisma.daily_image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends daily_imageFindFirstArgs>(args?: SelectSubset<T, daily_imageFindFirstArgs<ExtArgs>>): Prisma__daily_imageClient<$Result.GetResult<Prisma.$daily_imagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Daily_image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_imageFindFirstOrThrowArgs} args - Arguments to find a Daily_image
     * @example
     * // Get one Daily_image
     * const daily_image = await prisma.daily_image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends daily_imageFindFirstOrThrowArgs>(args?: SelectSubset<T, daily_imageFindFirstOrThrowArgs<ExtArgs>>): Prisma__daily_imageClient<$Result.GetResult<Prisma.$daily_imagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Daily_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_imageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Daily_images
     * const daily_images = await prisma.daily_image.findMany()
     * 
     * // Get first 10 Daily_images
     * const daily_images = await prisma.daily_image.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const daily_imageWithProduct_idOnly = await prisma.daily_image.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends daily_imageFindManyArgs>(args?: SelectSubset<T, daily_imageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$daily_imagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Daily_image.
     * @param {daily_imageCreateArgs} args - Arguments to create a Daily_image.
     * @example
     * // Create one Daily_image
     * const Daily_image = await prisma.daily_image.create({
     *   data: {
     *     // ... data to create a Daily_image
     *   }
     * })
     * 
     */
    create<T extends daily_imageCreateArgs>(args: SelectSubset<T, daily_imageCreateArgs<ExtArgs>>): Prisma__daily_imageClient<$Result.GetResult<Prisma.$daily_imagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Daily_images.
     * @param {daily_imageCreateManyArgs} args - Arguments to create many Daily_images.
     * @example
     * // Create many Daily_images
     * const daily_image = await prisma.daily_image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends daily_imageCreateManyArgs>(args?: SelectSubset<T, daily_imageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Daily_image.
     * @param {daily_imageDeleteArgs} args - Arguments to delete one Daily_image.
     * @example
     * // Delete one Daily_image
     * const Daily_image = await prisma.daily_image.delete({
     *   where: {
     *     // ... filter to delete one Daily_image
     *   }
     * })
     * 
     */
    delete<T extends daily_imageDeleteArgs>(args: SelectSubset<T, daily_imageDeleteArgs<ExtArgs>>): Prisma__daily_imageClient<$Result.GetResult<Prisma.$daily_imagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Daily_image.
     * @param {daily_imageUpdateArgs} args - Arguments to update one Daily_image.
     * @example
     * // Update one Daily_image
     * const daily_image = await prisma.daily_image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends daily_imageUpdateArgs>(args: SelectSubset<T, daily_imageUpdateArgs<ExtArgs>>): Prisma__daily_imageClient<$Result.GetResult<Prisma.$daily_imagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Daily_images.
     * @param {daily_imageDeleteManyArgs} args - Arguments to filter Daily_images to delete.
     * @example
     * // Delete a few Daily_images
     * const { count } = await prisma.daily_image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends daily_imageDeleteManyArgs>(args?: SelectSubset<T, daily_imageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Daily_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_imageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Daily_images
     * const daily_image = await prisma.daily_image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends daily_imageUpdateManyArgs>(args: SelectSubset<T, daily_imageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Daily_image.
     * @param {daily_imageUpsertArgs} args - Arguments to update or create a Daily_image.
     * @example
     * // Update or create a Daily_image
     * const daily_image = await prisma.daily_image.upsert({
     *   create: {
     *     // ... data to create a Daily_image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Daily_image we want to update
     *   }
     * })
     */
    upsert<T extends daily_imageUpsertArgs>(args: SelectSubset<T, daily_imageUpsertArgs<ExtArgs>>): Prisma__daily_imageClient<$Result.GetResult<Prisma.$daily_imagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Daily_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_imageCountArgs} args - Arguments to filter Daily_images to count.
     * @example
     * // Count the number of Daily_images
     * const count = await prisma.daily_image.count({
     *   where: {
     *     // ... the filter for the Daily_images we want to count
     *   }
     * })
    **/
    count<T extends daily_imageCountArgs>(
      args?: Subset<T, daily_imageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Daily_imageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Daily_image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Daily_imageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Daily_imageAggregateArgs>(args: Subset<T, Daily_imageAggregateArgs>): Prisma.PrismaPromise<GetDaily_imageAggregateType<T>>

    /**
     * Group by Daily_image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daily_imageGroupByArgs} args - Group by arguments.
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
      T extends daily_imageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: daily_imageGroupByArgs['orderBy'] }
        : { orderBy?: daily_imageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, daily_imageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDaily_imageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the daily_image model
   */
  readonly fields: daily_imageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for daily_image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__daily_imageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the daily_image model
   */
  interface daily_imageFieldRefs {
    readonly product_id: FieldRef<"daily_image", 'Int'>
    readonly image_date: FieldRef<"daily_image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * daily_image findUnique
   */
  export type daily_imageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_image
     */
    select?: daily_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_image
     */
    omit?: daily_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_imageInclude<ExtArgs> | null
    /**
     * Filter, which daily_image to fetch.
     */
    where: daily_imageWhereUniqueInput
  }

  /**
   * daily_image findUniqueOrThrow
   */
  export type daily_imageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_image
     */
    select?: daily_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_image
     */
    omit?: daily_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_imageInclude<ExtArgs> | null
    /**
     * Filter, which daily_image to fetch.
     */
    where: daily_imageWhereUniqueInput
  }

  /**
   * daily_image findFirst
   */
  export type daily_imageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_image
     */
    select?: daily_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_image
     */
    omit?: daily_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_imageInclude<ExtArgs> | null
    /**
     * Filter, which daily_image to fetch.
     */
    where?: daily_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of daily_images to fetch.
     */
    orderBy?: daily_imageOrderByWithRelationInput | daily_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for daily_images.
     */
    cursor?: daily_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` daily_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` daily_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of daily_images.
     */
    distinct?: Daily_imageScalarFieldEnum | Daily_imageScalarFieldEnum[]
  }

  /**
   * daily_image findFirstOrThrow
   */
  export type daily_imageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_image
     */
    select?: daily_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_image
     */
    omit?: daily_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_imageInclude<ExtArgs> | null
    /**
     * Filter, which daily_image to fetch.
     */
    where?: daily_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of daily_images to fetch.
     */
    orderBy?: daily_imageOrderByWithRelationInput | daily_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for daily_images.
     */
    cursor?: daily_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` daily_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` daily_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of daily_images.
     */
    distinct?: Daily_imageScalarFieldEnum | Daily_imageScalarFieldEnum[]
  }

  /**
   * daily_image findMany
   */
  export type daily_imageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_image
     */
    select?: daily_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_image
     */
    omit?: daily_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_imageInclude<ExtArgs> | null
    /**
     * Filter, which daily_images to fetch.
     */
    where?: daily_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of daily_images to fetch.
     */
    orderBy?: daily_imageOrderByWithRelationInput | daily_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing daily_images.
     */
    cursor?: daily_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` daily_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` daily_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of daily_images.
     */
    distinct?: Daily_imageScalarFieldEnum | Daily_imageScalarFieldEnum[]
  }

  /**
   * daily_image create
   */
  export type daily_imageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_image
     */
    select?: daily_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_image
     */
    omit?: daily_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_imageInclude<ExtArgs> | null
    /**
     * The data needed to create a daily_image.
     */
    data: XOR<daily_imageCreateInput, daily_imageUncheckedCreateInput>
  }

  /**
   * daily_image createMany
   */
  export type daily_imageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many daily_images.
     */
    data: daily_imageCreateManyInput | daily_imageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * daily_image update
   */
  export type daily_imageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_image
     */
    select?: daily_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_image
     */
    omit?: daily_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_imageInclude<ExtArgs> | null
    /**
     * The data needed to update a daily_image.
     */
    data: XOR<daily_imageUpdateInput, daily_imageUncheckedUpdateInput>
    /**
     * Choose, which daily_image to update.
     */
    where: daily_imageWhereUniqueInput
  }

  /**
   * daily_image updateMany
   */
  export type daily_imageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update daily_images.
     */
    data: XOR<daily_imageUpdateManyMutationInput, daily_imageUncheckedUpdateManyInput>
    /**
     * Filter which daily_images to update
     */
    where?: daily_imageWhereInput
    /**
     * Limit how many daily_images to update.
     */
    limit?: number
  }

  /**
   * daily_image upsert
   */
  export type daily_imageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_image
     */
    select?: daily_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_image
     */
    omit?: daily_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_imageInclude<ExtArgs> | null
    /**
     * The filter to search for the daily_image to update in case it exists.
     */
    where: daily_imageWhereUniqueInput
    /**
     * In case the daily_image found by the `where` argument doesn't exist, create a new daily_image with this data.
     */
    create: XOR<daily_imageCreateInput, daily_imageUncheckedCreateInput>
    /**
     * In case the daily_image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<daily_imageUpdateInput, daily_imageUncheckedUpdateInput>
  }

  /**
   * daily_image delete
   */
  export type daily_imageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_image
     */
    select?: daily_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_image
     */
    omit?: daily_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_imageInclude<ExtArgs> | null
    /**
     * Filter which daily_image to delete.
     */
    where: daily_imageWhereUniqueInput
  }

  /**
   * daily_image deleteMany
   */
  export type daily_imageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which daily_images to delete
     */
    where?: daily_imageWhereInput
    /**
     * Limit how many daily_images to delete.
     */
    limit?: number
  }

  /**
   * daily_image without action
   */
  export type daily_imageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the daily_image
     */
    select?: daily_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the daily_image
     */
    omit?: daily_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daily_imageInclude<ExtArgs> | null
  }


  /**
   * Model product_guesses
   */

  export type AggregateProduct_guesses = {
    _count: Product_guessesCountAggregateOutputType | null
    _avg: Product_guessesAvgAggregateOutputType | null
    _sum: Product_guessesSumAggregateOutputType | null
    _min: Product_guessesMinAggregateOutputType | null
    _max: Product_guessesMaxAggregateOutputType | null
  }

  export type Product_guessesAvgAggregateOutputType = {
    user_id: number | null
    product_id: number | null
    price: Decimal | null
  }

  export type Product_guessesSumAggregateOutputType = {
    user_id: number | null
    product_id: number | null
    price: Decimal | null
  }

  export type Product_guessesMinAggregateOutputType = {
    user_id: number | null
    product_id: number | null
    name: string | null
    brand: string | null
    category: string | null
    weight: string | null
    price: Decimal | null
  }

  export type Product_guessesMaxAggregateOutputType = {
    user_id: number | null
    product_id: number | null
    name: string | null
    brand: string | null
    category: string | null
    weight: string | null
    price: Decimal | null
  }

  export type Product_guessesCountAggregateOutputType = {
    user_id: number
    product_id: number
    name: number
    brand: number
    category: number
    weight: number
    price: number
    _all: number
  }


  export type Product_guessesAvgAggregateInputType = {
    user_id?: true
    product_id?: true
    price?: true
  }

  export type Product_guessesSumAggregateInputType = {
    user_id?: true
    product_id?: true
    price?: true
  }

  export type Product_guessesMinAggregateInputType = {
    user_id?: true
    product_id?: true
    name?: true
    brand?: true
    category?: true
    weight?: true
    price?: true
  }

  export type Product_guessesMaxAggregateInputType = {
    user_id?: true
    product_id?: true
    name?: true
    brand?: true
    category?: true
    weight?: true
    price?: true
  }

  export type Product_guessesCountAggregateInputType = {
    user_id?: true
    product_id?: true
    name?: true
    brand?: true
    category?: true
    weight?: true
    price?: true
    _all?: true
  }

  export type Product_guessesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_guesses to aggregate.
     */
    where?: product_guessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_guesses to fetch.
     */
    orderBy?: product_guessesOrderByWithRelationInput | product_guessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_guessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_guesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_guesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_guesses
    **/
    _count?: true | Product_guessesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_guessesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_guessesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_guessesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_guessesMaxAggregateInputType
  }

  export type GetProduct_guessesAggregateType<T extends Product_guessesAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_guesses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_guesses[P]>
      : GetScalarType<T[P], AggregateProduct_guesses[P]>
  }




  export type product_guessesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_guessesWhereInput
    orderBy?: product_guessesOrderByWithAggregationInput | product_guessesOrderByWithAggregationInput[]
    by: Product_guessesScalarFieldEnum[] | Product_guessesScalarFieldEnum
    having?: product_guessesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_guessesCountAggregateInputType | true
    _avg?: Product_guessesAvgAggregateInputType
    _sum?: Product_guessesSumAggregateInputType
    _min?: Product_guessesMinAggregateInputType
    _max?: Product_guessesMaxAggregateInputType
  }

  export type Product_guessesGroupByOutputType = {
    user_id: number
    product_id: number
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal
    _count: Product_guessesCountAggregateOutputType | null
    _avg: Product_guessesAvgAggregateOutputType | null
    _sum: Product_guessesSumAggregateOutputType | null
    _min: Product_guessesMinAggregateOutputType | null
    _max: Product_guessesMaxAggregateOutputType | null
  }

  type GetProduct_guessesGroupByPayload<T extends product_guessesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_guessesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_guessesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_guessesGroupByOutputType[P]>
            : GetScalarType<T[P], Product_guessesGroupByOutputType[P]>
        }
      >
    >


  export type product_guessesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    product_id?: boolean
    name?: boolean
    brand?: boolean
    category?: boolean
    weight?: boolean
    price?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_guesses"]>



  export type product_guessesSelectScalar = {
    user_id?: boolean
    product_id?: boolean
    name?: boolean
    brand?: boolean
    category?: boolean
    weight?: boolean
    price?: boolean
  }

  export type product_guessesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "product_id" | "name" | "brand" | "category" | "weight" | "price", ExtArgs["result"]["product_guesses"]>
  export type product_guessesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $product_guessesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_guesses"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      product_id: number
      name: string
      brand: string
      category: string
      weight: string
      price: Prisma.Decimal
    }, ExtArgs["result"]["product_guesses"]>
    composites: {}
  }

  type product_guessesGetPayload<S extends boolean | null | undefined | product_guessesDefaultArgs> = $Result.GetResult<Prisma.$product_guessesPayload, S>

  type product_guessesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_guessesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_guessesCountAggregateInputType | true
    }

  export interface product_guessesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_guesses'], meta: { name: 'product_guesses' } }
    /**
     * Find zero or one Product_guesses that matches the filter.
     * @param {product_guessesFindUniqueArgs} args - Arguments to find a Product_guesses
     * @example
     * // Get one Product_guesses
     * const product_guesses = await prisma.product_guesses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_guessesFindUniqueArgs>(args: SelectSubset<T, product_guessesFindUniqueArgs<ExtArgs>>): Prisma__product_guessesClient<$Result.GetResult<Prisma.$product_guessesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_guesses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_guessesFindUniqueOrThrowArgs} args - Arguments to find a Product_guesses
     * @example
     * // Get one Product_guesses
     * const product_guesses = await prisma.product_guesses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_guessesFindUniqueOrThrowArgs>(args: SelectSubset<T, product_guessesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_guessesClient<$Result.GetResult<Prisma.$product_guessesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_guesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_guessesFindFirstArgs} args - Arguments to find a Product_guesses
     * @example
     * // Get one Product_guesses
     * const product_guesses = await prisma.product_guesses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_guessesFindFirstArgs>(args?: SelectSubset<T, product_guessesFindFirstArgs<ExtArgs>>): Prisma__product_guessesClient<$Result.GetResult<Prisma.$product_guessesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_guesses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_guessesFindFirstOrThrowArgs} args - Arguments to find a Product_guesses
     * @example
     * // Get one Product_guesses
     * const product_guesses = await prisma.product_guesses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_guessesFindFirstOrThrowArgs>(args?: SelectSubset<T, product_guessesFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_guessesClient<$Result.GetResult<Prisma.$product_guessesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_guesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_guessesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_guesses
     * const product_guesses = await prisma.product_guesses.findMany()
     * 
     * // Get first 10 Product_guesses
     * const product_guesses = await prisma.product_guesses.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const product_guessesWithUser_idOnly = await prisma.product_guesses.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends product_guessesFindManyArgs>(args?: SelectSubset<T, product_guessesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_guessesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_guesses.
     * @param {product_guessesCreateArgs} args - Arguments to create a Product_guesses.
     * @example
     * // Create one Product_guesses
     * const Product_guesses = await prisma.product_guesses.create({
     *   data: {
     *     // ... data to create a Product_guesses
     *   }
     * })
     * 
     */
    create<T extends product_guessesCreateArgs>(args: SelectSubset<T, product_guessesCreateArgs<ExtArgs>>): Prisma__product_guessesClient<$Result.GetResult<Prisma.$product_guessesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_guesses.
     * @param {product_guessesCreateManyArgs} args - Arguments to create many Product_guesses.
     * @example
     * // Create many Product_guesses
     * const product_guesses = await prisma.product_guesses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_guessesCreateManyArgs>(args?: SelectSubset<T, product_guessesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product_guesses.
     * @param {product_guessesDeleteArgs} args - Arguments to delete one Product_guesses.
     * @example
     * // Delete one Product_guesses
     * const Product_guesses = await prisma.product_guesses.delete({
     *   where: {
     *     // ... filter to delete one Product_guesses
     *   }
     * })
     * 
     */
    delete<T extends product_guessesDeleteArgs>(args: SelectSubset<T, product_guessesDeleteArgs<ExtArgs>>): Prisma__product_guessesClient<$Result.GetResult<Prisma.$product_guessesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_guesses.
     * @param {product_guessesUpdateArgs} args - Arguments to update one Product_guesses.
     * @example
     * // Update one Product_guesses
     * const product_guesses = await prisma.product_guesses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_guessesUpdateArgs>(args: SelectSubset<T, product_guessesUpdateArgs<ExtArgs>>): Prisma__product_guessesClient<$Result.GetResult<Prisma.$product_guessesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_guesses.
     * @param {product_guessesDeleteManyArgs} args - Arguments to filter Product_guesses to delete.
     * @example
     * // Delete a few Product_guesses
     * const { count } = await prisma.product_guesses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_guessesDeleteManyArgs>(args?: SelectSubset<T, product_guessesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_guesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_guessesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_guesses
     * const product_guesses = await prisma.product_guesses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_guessesUpdateManyArgs>(args: SelectSubset<T, product_guessesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product_guesses.
     * @param {product_guessesUpsertArgs} args - Arguments to update or create a Product_guesses.
     * @example
     * // Update or create a Product_guesses
     * const product_guesses = await prisma.product_guesses.upsert({
     *   create: {
     *     // ... data to create a Product_guesses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_guesses we want to update
     *   }
     * })
     */
    upsert<T extends product_guessesUpsertArgs>(args: SelectSubset<T, product_guessesUpsertArgs<ExtArgs>>): Prisma__product_guessesClient<$Result.GetResult<Prisma.$product_guessesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_guesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_guessesCountArgs} args - Arguments to filter Product_guesses to count.
     * @example
     * // Count the number of Product_guesses
     * const count = await prisma.product_guesses.count({
     *   where: {
     *     // ... the filter for the Product_guesses we want to count
     *   }
     * })
    **/
    count<T extends product_guessesCountArgs>(
      args?: Subset<T, product_guessesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_guessesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_guesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_guessesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Product_guessesAggregateArgs>(args: Subset<T, Product_guessesAggregateArgs>): Prisma.PrismaPromise<GetProduct_guessesAggregateType<T>>

    /**
     * Group by Product_guesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_guessesGroupByArgs} args - Group by arguments.
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
      T extends product_guessesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_guessesGroupByArgs['orderBy'] }
        : { orderBy?: product_guessesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, product_guessesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_guessesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_guesses model
   */
  readonly fields: product_guessesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_guesses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_guessesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the product_guesses model
   */
  interface product_guessesFieldRefs {
    readonly user_id: FieldRef<"product_guesses", 'Int'>
    readonly product_id: FieldRef<"product_guesses", 'Int'>
    readonly name: FieldRef<"product_guesses", 'String'>
    readonly brand: FieldRef<"product_guesses", 'String'>
    readonly category: FieldRef<"product_guesses", 'String'>
    readonly weight: FieldRef<"product_guesses", 'String'>
    readonly price: FieldRef<"product_guesses", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * product_guesses findUnique
   */
  export type product_guessesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guesses
     */
    select?: product_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guesses
     */
    omit?: product_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guessesInclude<ExtArgs> | null
    /**
     * Filter, which product_guesses to fetch.
     */
    where: product_guessesWhereUniqueInput
  }

  /**
   * product_guesses findUniqueOrThrow
   */
  export type product_guessesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guesses
     */
    select?: product_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guesses
     */
    omit?: product_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guessesInclude<ExtArgs> | null
    /**
     * Filter, which product_guesses to fetch.
     */
    where: product_guessesWhereUniqueInput
  }

  /**
   * product_guesses findFirst
   */
  export type product_guessesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guesses
     */
    select?: product_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guesses
     */
    omit?: product_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guessesInclude<ExtArgs> | null
    /**
     * Filter, which product_guesses to fetch.
     */
    where?: product_guessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_guesses to fetch.
     */
    orderBy?: product_guessesOrderByWithRelationInput | product_guessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_guesses.
     */
    cursor?: product_guessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_guesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_guesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_guesses.
     */
    distinct?: Product_guessesScalarFieldEnum | Product_guessesScalarFieldEnum[]
  }

  /**
   * product_guesses findFirstOrThrow
   */
  export type product_guessesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guesses
     */
    select?: product_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guesses
     */
    omit?: product_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guessesInclude<ExtArgs> | null
    /**
     * Filter, which product_guesses to fetch.
     */
    where?: product_guessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_guesses to fetch.
     */
    orderBy?: product_guessesOrderByWithRelationInput | product_guessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_guesses.
     */
    cursor?: product_guessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_guesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_guesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_guesses.
     */
    distinct?: Product_guessesScalarFieldEnum | Product_guessesScalarFieldEnum[]
  }

  /**
   * product_guesses findMany
   */
  export type product_guessesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guesses
     */
    select?: product_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guesses
     */
    omit?: product_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guessesInclude<ExtArgs> | null
    /**
     * Filter, which product_guesses to fetch.
     */
    where?: product_guessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_guesses to fetch.
     */
    orderBy?: product_guessesOrderByWithRelationInput | product_guessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_guesses.
     */
    cursor?: product_guessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_guesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_guesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_guesses.
     */
    distinct?: Product_guessesScalarFieldEnum | Product_guessesScalarFieldEnum[]
  }

  /**
   * product_guesses create
   */
  export type product_guessesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guesses
     */
    select?: product_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guesses
     */
    omit?: product_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guessesInclude<ExtArgs> | null
    /**
     * The data needed to create a product_guesses.
     */
    data: XOR<product_guessesCreateInput, product_guessesUncheckedCreateInput>
  }

  /**
   * product_guesses createMany
   */
  export type product_guessesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_guesses.
     */
    data: product_guessesCreateManyInput | product_guessesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_guesses update
   */
  export type product_guessesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guesses
     */
    select?: product_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guesses
     */
    omit?: product_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guessesInclude<ExtArgs> | null
    /**
     * The data needed to update a product_guesses.
     */
    data: XOR<product_guessesUpdateInput, product_guessesUncheckedUpdateInput>
    /**
     * Choose, which product_guesses to update.
     */
    where: product_guessesWhereUniqueInput
  }

  /**
   * product_guesses updateMany
   */
  export type product_guessesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_guesses.
     */
    data: XOR<product_guessesUpdateManyMutationInput, product_guessesUncheckedUpdateManyInput>
    /**
     * Filter which product_guesses to update
     */
    where?: product_guessesWhereInput
    /**
     * Limit how many product_guesses to update.
     */
    limit?: number
  }

  /**
   * product_guesses upsert
   */
  export type product_guessesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guesses
     */
    select?: product_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guesses
     */
    omit?: product_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guessesInclude<ExtArgs> | null
    /**
     * The filter to search for the product_guesses to update in case it exists.
     */
    where: product_guessesWhereUniqueInput
    /**
     * In case the product_guesses found by the `where` argument doesn't exist, create a new product_guesses with this data.
     */
    create: XOR<product_guessesCreateInput, product_guessesUncheckedCreateInput>
    /**
     * In case the product_guesses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_guessesUpdateInput, product_guessesUncheckedUpdateInput>
  }

  /**
   * product_guesses delete
   */
  export type product_guessesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guesses
     */
    select?: product_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guesses
     */
    omit?: product_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guessesInclude<ExtArgs> | null
    /**
     * Filter which product_guesses to delete.
     */
    where: product_guessesWhereUniqueInput
  }

  /**
   * product_guesses deleteMany
   */
  export type product_guessesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_guesses to delete
     */
    where?: product_guessesWhereInput
    /**
     * Limit how many product_guesses to delete.
     */
    limit?: number
  }

  /**
   * product_guesses without action
   */
  export type product_guessesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_guesses
     */
    select?: product_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_guesses
     */
    omit?: product_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_guessesInclude<ExtArgs> | null
  }


  /**
   * Model image_guesses
   */

  export type AggregateImage_guesses = {
    _count: Image_guessesCountAggregateOutputType | null
    _avg: Image_guessesAvgAggregateOutputType | null
    _sum: Image_guessesSumAggregateOutputType | null
    _min: Image_guessesMinAggregateOutputType | null
    _max: Image_guessesMaxAggregateOutputType | null
  }

  export type Image_guessesAvgAggregateOutputType = {
    user_id: number | null
    product_id: number | null
  }

  export type Image_guessesSumAggregateOutputType = {
    user_id: number | null
    product_id: number | null
  }

  export type Image_guessesMinAggregateOutputType = {
    user_id: number | null
    product_id: number | null
    name: string | null
  }

  export type Image_guessesMaxAggregateOutputType = {
    user_id: number | null
    product_id: number | null
    name: string | null
  }

  export type Image_guessesCountAggregateOutputType = {
    user_id: number
    product_id: number
    name: number
    _all: number
  }


  export type Image_guessesAvgAggregateInputType = {
    user_id?: true
    product_id?: true
  }

  export type Image_guessesSumAggregateInputType = {
    user_id?: true
    product_id?: true
  }

  export type Image_guessesMinAggregateInputType = {
    user_id?: true
    product_id?: true
    name?: true
  }

  export type Image_guessesMaxAggregateInputType = {
    user_id?: true
    product_id?: true
    name?: true
  }

  export type Image_guessesCountAggregateInputType = {
    user_id?: true
    product_id?: true
    name?: true
    _all?: true
  }

  export type Image_guessesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which image_guesses to aggregate.
     */
    where?: image_guessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of image_guesses to fetch.
     */
    orderBy?: image_guessesOrderByWithRelationInput | image_guessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: image_guessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` image_guesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` image_guesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned image_guesses
    **/
    _count?: true | Image_guessesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Image_guessesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Image_guessesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Image_guessesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Image_guessesMaxAggregateInputType
  }

  export type GetImage_guessesAggregateType<T extends Image_guessesAggregateArgs> = {
        [P in keyof T & keyof AggregateImage_guesses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage_guesses[P]>
      : GetScalarType<T[P], AggregateImage_guesses[P]>
  }




  export type image_guessesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: image_guessesWhereInput
    orderBy?: image_guessesOrderByWithAggregationInput | image_guessesOrderByWithAggregationInput[]
    by: Image_guessesScalarFieldEnum[] | Image_guessesScalarFieldEnum
    having?: image_guessesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Image_guessesCountAggregateInputType | true
    _avg?: Image_guessesAvgAggregateInputType
    _sum?: Image_guessesSumAggregateInputType
    _min?: Image_guessesMinAggregateInputType
    _max?: Image_guessesMaxAggregateInputType
  }

  export type Image_guessesGroupByOutputType = {
    user_id: number
    product_id: number
    name: string
    _count: Image_guessesCountAggregateOutputType | null
    _avg: Image_guessesAvgAggregateOutputType | null
    _sum: Image_guessesSumAggregateOutputType | null
    _min: Image_guessesMinAggregateOutputType | null
    _max: Image_guessesMaxAggregateOutputType | null
  }

  type GetImage_guessesGroupByPayload<T extends image_guessesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Image_guessesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Image_guessesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Image_guessesGroupByOutputType[P]>
            : GetScalarType<T[P], Image_guessesGroupByOutputType[P]>
        }
      >
    >


  export type image_guessesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    product_id?: boolean
    name?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image_guesses"]>



  export type image_guessesSelectScalar = {
    user_id?: boolean
    product_id?: boolean
    name?: boolean
  }

  export type image_guessesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "product_id" | "name", ExtArgs["result"]["image_guesses"]>
  export type image_guessesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $image_guessesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "image_guesses"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      product_id: number
      name: string
    }, ExtArgs["result"]["image_guesses"]>
    composites: {}
  }

  type image_guessesGetPayload<S extends boolean | null | undefined | image_guessesDefaultArgs> = $Result.GetResult<Prisma.$image_guessesPayload, S>

  type image_guessesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<image_guessesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Image_guessesCountAggregateInputType | true
    }

  export interface image_guessesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['image_guesses'], meta: { name: 'image_guesses' } }
    /**
     * Find zero or one Image_guesses that matches the filter.
     * @param {image_guessesFindUniqueArgs} args - Arguments to find a Image_guesses
     * @example
     * // Get one Image_guesses
     * const image_guesses = await prisma.image_guesses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends image_guessesFindUniqueArgs>(args: SelectSubset<T, image_guessesFindUniqueArgs<ExtArgs>>): Prisma__image_guessesClient<$Result.GetResult<Prisma.$image_guessesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image_guesses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {image_guessesFindUniqueOrThrowArgs} args - Arguments to find a Image_guesses
     * @example
     * // Get one Image_guesses
     * const image_guesses = await prisma.image_guesses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends image_guessesFindUniqueOrThrowArgs>(args: SelectSubset<T, image_guessesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__image_guessesClient<$Result.GetResult<Prisma.$image_guessesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image_guesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {image_guessesFindFirstArgs} args - Arguments to find a Image_guesses
     * @example
     * // Get one Image_guesses
     * const image_guesses = await prisma.image_guesses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends image_guessesFindFirstArgs>(args?: SelectSubset<T, image_guessesFindFirstArgs<ExtArgs>>): Prisma__image_guessesClient<$Result.GetResult<Prisma.$image_guessesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image_guesses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {image_guessesFindFirstOrThrowArgs} args - Arguments to find a Image_guesses
     * @example
     * // Get one Image_guesses
     * const image_guesses = await prisma.image_guesses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends image_guessesFindFirstOrThrowArgs>(args?: SelectSubset<T, image_guessesFindFirstOrThrowArgs<ExtArgs>>): Prisma__image_guessesClient<$Result.GetResult<Prisma.$image_guessesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Image_guesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {image_guessesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Image_guesses
     * const image_guesses = await prisma.image_guesses.findMany()
     * 
     * // Get first 10 Image_guesses
     * const image_guesses = await prisma.image_guesses.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const image_guessesWithUser_idOnly = await prisma.image_guesses.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends image_guessesFindManyArgs>(args?: SelectSubset<T, image_guessesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$image_guessesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image_guesses.
     * @param {image_guessesCreateArgs} args - Arguments to create a Image_guesses.
     * @example
     * // Create one Image_guesses
     * const Image_guesses = await prisma.image_guesses.create({
     *   data: {
     *     // ... data to create a Image_guesses
     *   }
     * })
     * 
     */
    create<T extends image_guessesCreateArgs>(args: SelectSubset<T, image_guessesCreateArgs<ExtArgs>>): Prisma__image_guessesClient<$Result.GetResult<Prisma.$image_guessesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Image_guesses.
     * @param {image_guessesCreateManyArgs} args - Arguments to create many Image_guesses.
     * @example
     * // Create many Image_guesses
     * const image_guesses = await prisma.image_guesses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends image_guessesCreateManyArgs>(args?: SelectSubset<T, image_guessesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image_guesses.
     * @param {image_guessesDeleteArgs} args - Arguments to delete one Image_guesses.
     * @example
     * // Delete one Image_guesses
     * const Image_guesses = await prisma.image_guesses.delete({
     *   where: {
     *     // ... filter to delete one Image_guesses
     *   }
     * })
     * 
     */
    delete<T extends image_guessesDeleteArgs>(args: SelectSubset<T, image_guessesDeleteArgs<ExtArgs>>): Prisma__image_guessesClient<$Result.GetResult<Prisma.$image_guessesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image_guesses.
     * @param {image_guessesUpdateArgs} args - Arguments to update one Image_guesses.
     * @example
     * // Update one Image_guesses
     * const image_guesses = await prisma.image_guesses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends image_guessesUpdateArgs>(args: SelectSubset<T, image_guessesUpdateArgs<ExtArgs>>): Prisma__image_guessesClient<$Result.GetResult<Prisma.$image_guessesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Image_guesses.
     * @param {image_guessesDeleteManyArgs} args - Arguments to filter Image_guesses to delete.
     * @example
     * // Delete a few Image_guesses
     * const { count } = await prisma.image_guesses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends image_guessesDeleteManyArgs>(args?: SelectSubset<T, image_guessesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Image_guesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {image_guessesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Image_guesses
     * const image_guesses = await prisma.image_guesses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends image_guessesUpdateManyArgs>(args: SelectSubset<T, image_guessesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image_guesses.
     * @param {image_guessesUpsertArgs} args - Arguments to update or create a Image_guesses.
     * @example
     * // Update or create a Image_guesses
     * const image_guesses = await prisma.image_guesses.upsert({
     *   create: {
     *     // ... data to create a Image_guesses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image_guesses we want to update
     *   }
     * })
     */
    upsert<T extends image_guessesUpsertArgs>(args: SelectSubset<T, image_guessesUpsertArgs<ExtArgs>>): Prisma__image_guessesClient<$Result.GetResult<Prisma.$image_guessesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Image_guesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {image_guessesCountArgs} args - Arguments to filter Image_guesses to count.
     * @example
     * // Count the number of Image_guesses
     * const count = await prisma.image_guesses.count({
     *   where: {
     *     // ... the filter for the Image_guesses we want to count
     *   }
     * })
    **/
    count<T extends image_guessesCountArgs>(
      args?: Subset<T, image_guessesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Image_guessesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image_guesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Image_guessesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Image_guessesAggregateArgs>(args: Subset<T, Image_guessesAggregateArgs>): Prisma.PrismaPromise<GetImage_guessesAggregateType<T>>

    /**
     * Group by Image_guesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {image_guessesGroupByArgs} args - Group by arguments.
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
      T extends image_guessesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: image_guessesGroupByArgs['orderBy'] }
        : { orderBy?: image_guessesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, image_guessesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImage_guessesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the image_guesses model
   */
  readonly fields: image_guessesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for image_guesses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__image_guessesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the image_guesses model
   */
  interface image_guessesFieldRefs {
    readonly user_id: FieldRef<"image_guesses", 'Int'>
    readonly product_id: FieldRef<"image_guesses", 'Int'>
    readonly name: FieldRef<"image_guesses", 'String'>
  }
    

  // Custom InputTypes
  /**
   * image_guesses findUnique
   */
  export type image_guessesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_guesses
     */
    select?: image_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_guesses
     */
    omit?: image_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_guessesInclude<ExtArgs> | null
    /**
     * Filter, which image_guesses to fetch.
     */
    where: image_guessesWhereUniqueInput
  }

  /**
   * image_guesses findUniqueOrThrow
   */
  export type image_guessesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_guesses
     */
    select?: image_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_guesses
     */
    omit?: image_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_guessesInclude<ExtArgs> | null
    /**
     * Filter, which image_guesses to fetch.
     */
    where: image_guessesWhereUniqueInput
  }

  /**
   * image_guesses findFirst
   */
  export type image_guessesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_guesses
     */
    select?: image_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_guesses
     */
    omit?: image_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_guessesInclude<ExtArgs> | null
    /**
     * Filter, which image_guesses to fetch.
     */
    where?: image_guessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of image_guesses to fetch.
     */
    orderBy?: image_guessesOrderByWithRelationInput | image_guessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for image_guesses.
     */
    cursor?: image_guessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` image_guesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` image_guesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of image_guesses.
     */
    distinct?: Image_guessesScalarFieldEnum | Image_guessesScalarFieldEnum[]
  }

  /**
   * image_guesses findFirstOrThrow
   */
  export type image_guessesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_guesses
     */
    select?: image_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_guesses
     */
    omit?: image_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_guessesInclude<ExtArgs> | null
    /**
     * Filter, which image_guesses to fetch.
     */
    where?: image_guessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of image_guesses to fetch.
     */
    orderBy?: image_guessesOrderByWithRelationInput | image_guessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for image_guesses.
     */
    cursor?: image_guessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` image_guesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` image_guesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of image_guesses.
     */
    distinct?: Image_guessesScalarFieldEnum | Image_guessesScalarFieldEnum[]
  }

  /**
   * image_guesses findMany
   */
  export type image_guessesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_guesses
     */
    select?: image_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_guesses
     */
    omit?: image_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_guessesInclude<ExtArgs> | null
    /**
     * Filter, which image_guesses to fetch.
     */
    where?: image_guessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of image_guesses to fetch.
     */
    orderBy?: image_guessesOrderByWithRelationInput | image_guessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing image_guesses.
     */
    cursor?: image_guessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` image_guesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` image_guesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of image_guesses.
     */
    distinct?: Image_guessesScalarFieldEnum | Image_guessesScalarFieldEnum[]
  }

  /**
   * image_guesses create
   */
  export type image_guessesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_guesses
     */
    select?: image_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_guesses
     */
    omit?: image_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_guessesInclude<ExtArgs> | null
    /**
     * The data needed to create a image_guesses.
     */
    data: XOR<image_guessesCreateInput, image_guessesUncheckedCreateInput>
  }

  /**
   * image_guesses createMany
   */
  export type image_guessesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many image_guesses.
     */
    data: image_guessesCreateManyInput | image_guessesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * image_guesses update
   */
  export type image_guessesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_guesses
     */
    select?: image_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_guesses
     */
    omit?: image_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_guessesInclude<ExtArgs> | null
    /**
     * The data needed to update a image_guesses.
     */
    data: XOR<image_guessesUpdateInput, image_guessesUncheckedUpdateInput>
    /**
     * Choose, which image_guesses to update.
     */
    where: image_guessesWhereUniqueInput
  }

  /**
   * image_guesses updateMany
   */
  export type image_guessesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update image_guesses.
     */
    data: XOR<image_guessesUpdateManyMutationInput, image_guessesUncheckedUpdateManyInput>
    /**
     * Filter which image_guesses to update
     */
    where?: image_guessesWhereInput
    /**
     * Limit how many image_guesses to update.
     */
    limit?: number
  }

  /**
   * image_guesses upsert
   */
  export type image_guessesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_guesses
     */
    select?: image_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_guesses
     */
    omit?: image_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_guessesInclude<ExtArgs> | null
    /**
     * The filter to search for the image_guesses to update in case it exists.
     */
    where: image_guessesWhereUniqueInput
    /**
     * In case the image_guesses found by the `where` argument doesn't exist, create a new image_guesses with this data.
     */
    create: XOR<image_guessesCreateInput, image_guessesUncheckedCreateInput>
    /**
     * In case the image_guesses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<image_guessesUpdateInput, image_guessesUncheckedUpdateInput>
  }

  /**
   * image_guesses delete
   */
  export type image_guessesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_guesses
     */
    select?: image_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_guesses
     */
    omit?: image_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_guessesInclude<ExtArgs> | null
    /**
     * Filter which image_guesses to delete.
     */
    where: image_guessesWhereUniqueInput
  }

  /**
   * image_guesses deleteMany
   */
  export type image_guessesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which image_guesses to delete
     */
    where?: image_guessesWhereInput
    /**
     * Limit how many image_guesses to delete.
     */
    limit?: number
  }

  /**
   * image_guesses without action
   */
  export type image_guessesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_guesses
     */
    select?: image_guessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_guesses
     */
    omit?: image_guessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_guessesInclude<ExtArgs> | null
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


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brand: 'brand',
    category: 'category',
    weight: 'weight',
    price: 'price'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const Product_imageScalarFieldEnum: {
    product_id: 'product_id',
    image_url: 'image_url'
  };

  export type Product_imageScalarFieldEnum = (typeof Product_imageScalarFieldEnum)[keyof typeof Product_imageScalarFieldEnum]


  export const Daily_productScalarFieldEnum: {
    product_id: 'product_id',
    product_date: 'product_date'
  };

  export type Daily_productScalarFieldEnum = (typeof Daily_productScalarFieldEnum)[keyof typeof Daily_productScalarFieldEnum]


  export const Daily_imageScalarFieldEnum: {
    product_id: 'product_id',
    image_date: 'image_date'
  };

  export type Daily_imageScalarFieldEnum = (typeof Daily_imageScalarFieldEnum)[keyof typeof Daily_imageScalarFieldEnum]


  export const Product_guessesScalarFieldEnum: {
    user_id: 'user_id',
    product_id: 'product_id',
    name: 'name',
    brand: 'brand',
    category: 'category',
    weight: 'weight',
    price: 'price'
  };

  export type Product_guessesScalarFieldEnum = (typeof Product_guessesScalarFieldEnum)[keyof typeof Product_guessesScalarFieldEnum]


  export const Image_guessesScalarFieldEnum: {
    user_id: 'user_id',
    product_id: 'product_id',
    name: 'name'
  };

  export type Image_guessesScalarFieldEnum = (typeof Image_guessesScalarFieldEnum)[keyof typeof Image_guessesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const productOrderByRelevanceFieldEnum: {
    name: 'name',
    brand: 'brand',
    category: 'category',
    weight: 'weight'
  };

  export type productOrderByRelevanceFieldEnum = (typeof productOrderByRelevanceFieldEnum)[keyof typeof productOrderByRelevanceFieldEnum]


  export const product_imageOrderByRelevanceFieldEnum: {
    image_url: 'image_url'
  };

  export type product_imageOrderByRelevanceFieldEnum = (typeof product_imageOrderByRelevanceFieldEnum)[keyof typeof product_imageOrderByRelevanceFieldEnum]


  export const product_guessesOrderByRelevanceFieldEnum: {
    name: 'name',
    brand: 'brand',
    category: 'category',
    weight: 'weight'
  };

  export type product_guessesOrderByRelevanceFieldEnum = (typeof product_guessesOrderByRelevanceFieldEnum)[keyof typeof product_guessesOrderByRelevanceFieldEnum]


  export const image_guessesOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type image_guessesOrderByRelevanceFieldEnum = (typeof image_guessesOrderByRelevanceFieldEnum)[keyof typeof image_guessesOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    id?: IntFilter<"product"> | number
    name?: StringFilter<"product"> | string
    brand?: StringFilter<"product"> | string
    category?: StringFilter<"product"> | string
    weight?: StringFilter<"product"> | string
    price?: DecimalFilter<"product"> | Decimal | DecimalJsLike | number | string
    product_image?: XOR<Product_imageNullableScalarRelationFilter, product_imageWhereInput> | null
    daily_product?: XOR<Daily_productNullableScalarRelationFilter, daily_productWhereInput> | null
    product_guesses?: Product_guessesListRelationFilter
    image_guesses?: Image_guessesListRelationFilter
    daily_image?: Daily_imageListRelationFilter
  }

  export type productOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    category?: SortOrder
    weight?: SortOrder
    price?: SortOrder
    product_image?: product_imageOrderByWithRelationInput
    daily_product?: daily_productOrderByWithRelationInput
    product_guesses?: product_guessesOrderByRelationAggregateInput
    image_guesses?: image_guessesOrderByRelationAggregateInput
    daily_image?: daily_imageOrderByRelationAggregateInput
    _relevance?: productOrderByRelevanceInput
  }

  export type productWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    name?: StringFilter<"product"> | string
    brand?: StringFilter<"product"> | string
    category?: StringFilter<"product"> | string
    weight?: StringFilter<"product"> | string
    price?: DecimalFilter<"product"> | Decimal | DecimalJsLike | number | string
    product_image?: XOR<Product_imageNullableScalarRelationFilter, product_imageWhereInput> | null
    daily_product?: XOR<Daily_productNullableScalarRelationFilter, daily_productWhereInput> | null
    product_guesses?: Product_guessesListRelationFilter
    image_guesses?: Image_guessesListRelationFilter
    daily_image?: Daily_imageListRelationFilter
  }, "id">

  export type productOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    category?: SortOrder
    weight?: SortOrder
    price?: SortOrder
    _count?: productCountOrderByAggregateInput
    _avg?: productAvgOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
    _sum?: productSumOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    OR?: productScalarWhereWithAggregatesInput[]
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product"> | number
    name?: StringWithAggregatesFilter<"product"> | string
    brand?: StringWithAggregatesFilter<"product"> | string
    category?: StringWithAggregatesFilter<"product"> | string
    weight?: StringWithAggregatesFilter<"product"> | string
    price?: DecimalWithAggregatesFilter<"product"> | Decimal | DecimalJsLike | number | string
  }

  export type product_imageWhereInput = {
    AND?: product_imageWhereInput | product_imageWhereInput[]
    OR?: product_imageWhereInput[]
    NOT?: product_imageWhereInput | product_imageWhereInput[]
    product_id?: IntFilter<"product_image"> | number
    image_url?: StringFilter<"product_image"> | string
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type product_imageOrderByWithRelationInput = {
    product_id?: SortOrder
    image_url?: SortOrder
    product?: productOrderByWithRelationInput
    _relevance?: product_imageOrderByRelevanceInput
  }

  export type product_imageWhereUniqueInput = Prisma.AtLeast<{
    product_id?: number
    AND?: product_imageWhereInput | product_imageWhereInput[]
    OR?: product_imageWhereInput[]
    NOT?: product_imageWhereInput | product_imageWhereInput[]
    image_url?: StringFilter<"product_image"> | string
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "product_id">

  export type product_imageOrderByWithAggregationInput = {
    product_id?: SortOrder
    image_url?: SortOrder
    _count?: product_imageCountOrderByAggregateInput
    _avg?: product_imageAvgOrderByAggregateInput
    _max?: product_imageMaxOrderByAggregateInput
    _min?: product_imageMinOrderByAggregateInput
    _sum?: product_imageSumOrderByAggregateInput
  }

  export type product_imageScalarWhereWithAggregatesInput = {
    AND?: product_imageScalarWhereWithAggregatesInput | product_imageScalarWhereWithAggregatesInput[]
    OR?: product_imageScalarWhereWithAggregatesInput[]
    NOT?: product_imageScalarWhereWithAggregatesInput | product_imageScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"product_image"> | number
    image_url?: StringWithAggregatesFilter<"product_image"> | string
  }

  export type daily_productWhereInput = {
    AND?: daily_productWhereInput | daily_productWhereInput[]
    OR?: daily_productWhereInput[]
    NOT?: daily_productWhereInput | daily_productWhereInput[]
    product_id?: IntFilter<"daily_product"> | number
    product_date?: DateTimeFilter<"daily_product"> | Date | string
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type daily_productOrderByWithRelationInput = {
    product_id?: SortOrder
    product_date?: SortOrder
    product?: productOrderByWithRelationInput
  }

  export type daily_productWhereUniqueInput = Prisma.AtLeast<{
    product_id?: number
    AND?: daily_productWhereInput | daily_productWhereInput[]
    OR?: daily_productWhereInput[]
    NOT?: daily_productWhereInput | daily_productWhereInput[]
    product_date?: DateTimeFilter<"daily_product"> | Date | string
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "product_id">

  export type daily_productOrderByWithAggregationInput = {
    product_id?: SortOrder
    product_date?: SortOrder
    _count?: daily_productCountOrderByAggregateInput
    _avg?: daily_productAvgOrderByAggregateInput
    _max?: daily_productMaxOrderByAggregateInput
    _min?: daily_productMinOrderByAggregateInput
    _sum?: daily_productSumOrderByAggregateInput
  }

  export type daily_productScalarWhereWithAggregatesInput = {
    AND?: daily_productScalarWhereWithAggregatesInput | daily_productScalarWhereWithAggregatesInput[]
    OR?: daily_productScalarWhereWithAggregatesInput[]
    NOT?: daily_productScalarWhereWithAggregatesInput | daily_productScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"daily_product"> | number
    product_date?: DateTimeWithAggregatesFilter<"daily_product"> | Date | string
  }

  export type daily_imageWhereInput = {
    AND?: daily_imageWhereInput | daily_imageWhereInput[]
    OR?: daily_imageWhereInput[]
    NOT?: daily_imageWhereInput | daily_imageWhereInput[]
    product_id?: IntFilter<"daily_image"> | number
    image_date?: DateTimeFilter<"daily_image"> | Date | string
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type daily_imageOrderByWithRelationInput = {
    product_id?: SortOrder
    image_date?: SortOrder
    product?: productOrderByWithRelationInput
  }

  export type daily_imageWhereUniqueInput = Prisma.AtLeast<{
    product_id?: number
    AND?: daily_imageWhereInput | daily_imageWhereInput[]
    OR?: daily_imageWhereInput[]
    NOT?: daily_imageWhereInput | daily_imageWhereInput[]
    image_date?: DateTimeFilter<"daily_image"> | Date | string
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "product_id">

  export type daily_imageOrderByWithAggregationInput = {
    product_id?: SortOrder
    image_date?: SortOrder
    _count?: daily_imageCountOrderByAggregateInput
    _avg?: daily_imageAvgOrderByAggregateInput
    _max?: daily_imageMaxOrderByAggregateInput
    _min?: daily_imageMinOrderByAggregateInput
    _sum?: daily_imageSumOrderByAggregateInput
  }

  export type daily_imageScalarWhereWithAggregatesInput = {
    AND?: daily_imageScalarWhereWithAggregatesInput | daily_imageScalarWhereWithAggregatesInput[]
    OR?: daily_imageScalarWhereWithAggregatesInput[]
    NOT?: daily_imageScalarWhereWithAggregatesInput | daily_imageScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"daily_image"> | number
    image_date?: DateTimeWithAggregatesFilter<"daily_image"> | Date | string
  }

  export type product_guessesWhereInput = {
    AND?: product_guessesWhereInput | product_guessesWhereInput[]
    OR?: product_guessesWhereInput[]
    NOT?: product_guessesWhereInput | product_guessesWhereInput[]
    user_id?: IntFilter<"product_guesses"> | number
    product_id?: IntFilter<"product_guesses"> | number
    name?: StringFilter<"product_guesses"> | string
    brand?: StringFilter<"product_guesses"> | string
    category?: StringFilter<"product_guesses"> | string
    weight?: StringFilter<"product_guesses"> | string
    price?: DecimalFilter<"product_guesses"> | Decimal | DecimalJsLike | number | string
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type product_guessesOrderByWithRelationInput = {
    user_id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    category?: SortOrder
    weight?: SortOrder
    price?: SortOrder
    product?: productOrderByWithRelationInput
    _relevance?: product_guessesOrderByRelevanceInput
  }

  export type product_guessesWhereUniqueInput = Prisma.AtLeast<{
    user_id_product_id?: product_guessesUser_idProduct_idCompoundUniqueInput
    AND?: product_guessesWhereInput | product_guessesWhereInput[]
    OR?: product_guessesWhereInput[]
    NOT?: product_guessesWhereInput | product_guessesWhereInput[]
    user_id?: IntFilter<"product_guesses"> | number
    product_id?: IntFilter<"product_guesses"> | number
    name?: StringFilter<"product_guesses"> | string
    brand?: StringFilter<"product_guesses"> | string
    category?: StringFilter<"product_guesses"> | string
    weight?: StringFilter<"product_guesses"> | string
    price?: DecimalFilter<"product_guesses"> | Decimal | DecimalJsLike | number | string
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "user_id_product_id">

  export type product_guessesOrderByWithAggregationInput = {
    user_id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    category?: SortOrder
    weight?: SortOrder
    price?: SortOrder
    _count?: product_guessesCountOrderByAggregateInput
    _avg?: product_guessesAvgOrderByAggregateInput
    _max?: product_guessesMaxOrderByAggregateInput
    _min?: product_guessesMinOrderByAggregateInput
    _sum?: product_guessesSumOrderByAggregateInput
  }

  export type product_guessesScalarWhereWithAggregatesInput = {
    AND?: product_guessesScalarWhereWithAggregatesInput | product_guessesScalarWhereWithAggregatesInput[]
    OR?: product_guessesScalarWhereWithAggregatesInput[]
    NOT?: product_guessesScalarWhereWithAggregatesInput | product_guessesScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"product_guesses"> | number
    product_id?: IntWithAggregatesFilter<"product_guesses"> | number
    name?: StringWithAggregatesFilter<"product_guesses"> | string
    brand?: StringWithAggregatesFilter<"product_guesses"> | string
    category?: StringWithAggregatesFilter<"product_guesses"> | string
    weight?: StringWithAggregatesFilter<"product_guesses"> | string
    price?: DecimalWithAggregatesFilter<"product_guesses"> | Decimal | DecimalJsLike | number | string
  }

  export type image_guessesWhereInput = {
    AND?: image_guessesWhereInput | image_guessesWhereInput[]
    OR?: image_guessesWhereInput[]
    NOT?: image_guessesWhereInput | image_guessesWhereInput[]
    user_id?: IntFilter<"image_guesses"> | number
    product_id?: IntFilter<"image_guesses"> | number
    name?: StringFilter<"image_guesses"> | string
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type image_guessesOrderByWithRelationInput = {
    user_id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    product?: productOrderByWithRelationInput
    _relevance?: image_guessesOrderByRelevanceInput
  }

  export type image_guessesWhereUniqueInput = Prisma.AtLeast<{
    user_id_product_id?: image_guessesUser_idProduct_idCompoundUniqueInput
    AND?: image_guessesWhereInput | image_guessesWhereInput[]
    OR?: image_guessesWhereInput[]
    NOT?: image_guessesWhereInput | image_guessesWhereInput[]
    user_id?: IntFilter<"image_guesses"> | number
    product_id?: IntFilter<"image_guesses"> | number
    name?: StringFilter<"image_guesses"> | string
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "user_id_product_id">

  export type image_guessesOrderByWithAggregationInput = {
    user_id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    _count?: image_guessesCountOrderByAggregateInput
    _avg?: image_guessesAvgOrderByAggregateInput
    _max?: image_guessesMaxOrderByAggregateInput
    _min?: image_guessesMinOrderByAggregateInput
    _sum?: image_guessesSumOrderByAggregateInput
  }

  export type image_guessesScalarWhereWithAggregatesInput = {
    AND?: image_guessesScalarWhereWithAggregatesInput | image_guessesScalarWhereWithAggregatesInput[]
    OR?: image_guessesScalarWhereWithAggregatesInput[]
    NOT?: image_guessesScalarWhereWithAggregatesInput | image_guessesScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"image_guesses"> | number
    product_id?: IntWithAggregatesFilter<"image_guesses"> | number
    name?: StringWithAggregatesFilter<"image_guesses"> | string
  }

  export type productCreateInput = {
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal | DecimalJsLike | number | string
    product_image?: product_imageCreateNestedOneWithoutProductInput
    daily_product?: daily_productCreateNestedOneWithoutProductInput
    product_guesses?: product_guessesCreateNestedManyWithoutProductInput
    image_guesses?: image_guessesCreateNestedManyWithoutProductInput
    daily_image?: daily_imageCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateInput = {
    id?: number
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal | DecimalJsLike | number | string
    product_image?: product_imageUncheckedCreateNestedOneWithoutProductInput
    daily_product?: daily_productUncheckedCreateNestedOneWithoutProductInput
    product_guesses?: product_guessesUncheckedCreateNestedManyWithoutProductInput
    image_guesses?: image_guessesUncheckedCreateNestedManyWithoutProductInput
    daily_image?: daily_imageUncheckedCreateNestedManyWithoutProductInput
  }

  export type productUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product_image?: product_imageUpdateOneWithoutProductNestedInput
    daily_product?: daily_productUpdateOneWithoutProductNestedInput
    product_guesses?: product_guessesUpdateManyWithoutProductNestedInput
    image_guesses?: image_guessesUpdateManyWithoutProductNestedInput
    daily_image?: daily_imageUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product_image?: product_imageUncheckedUpdateOneWithoutProductNestedInput
    daily_product?: daily_productUncheckedUpdateOneWithoutProductNestedInput
    product_guesses?: product_guessesUncheckedUpdateManyWithoutProductNestedInput
    image_guesses?: image_guessesUncheckedUpdateManyWithoutProductNestedInput
    daily_image?: daily_imageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateManyInput = {
    id?: number
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal | DecimalJsLike | number | string
  }

  export type productUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type productUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type product_imageCreateInput = {
    image_url: string
    product: productCreateNestedOneWithoutProduct_imageInput
  }

  export type product_imageUncheckedCreateInput = {
    product_id: number
    image_url: string
  }

  export type product_imageUpdateInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    product?: productUpdateOneRequiredWithoutProduct_imageNestedInput
  }

  export type product_imageUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type product_imageCreateManyInput = {
    product_id: number
    image_url: string
  }

  export type product_imageUpdateManyMutationInput = {
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type product_imageUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type daily_productCreateInput = {
    product_date: Date | string
    product: productCreateNestedOneWithoutDaily_productInput
  }

  export type daily_productUncheckedCreateInput = {
    product_id: number
    product_date: Date | string
  }

  export type daily_productUpdateInput = {
    product_date?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productUpdateOneRequiredWithoutDaily_productNestedInput
  }

  export type daily_productUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type daily_productCreateManyInput = {
    product_id: number
    product_date: Date | string
  }

  export type daily_productUpdateManyMutationInput = {
    product_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type daily_productUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type daily_imageCreateInput = {
    image_date: Date | string
    product: productCreateNestedOneWithoutDaily_imageInput
  }

  export type daily_imageUncheckedCreateInput = {
    product_id: number
    image_date: Date | string
  }

  export type daily_imageUpdateInput = {
    image_date?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productUpdateOneRequiredWithoutDaily_imageNestedInput
  }

  export type daily_imageUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    image_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type daily_imageCreateManyInput = {
    product_id: number
    image_date: Date | string
  }

  export type daily_imageUpdateManyMutationInput = {
    image_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type daily_imageUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    image_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_guessesCreateInput = {
    user_id: number
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal | DecimalJsLike | number | string
    product: productCreateNestedOneWithoutProduct_guessesInput
  }

  export type product_guessesUncheckedCreateInput = {
    user_id: number
    product_id: number
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal | DecimalJsLike | number | string
  }

  export type product_guessesUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: productUpdateOneRequiredWithoutProduct_guessesNestedInput
  }

  export type product_guessesUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type product_guessesCreateManyInput = {
    user_id: number
    product_id: number
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal | DecimalJsLike | number | string
  }

  export type product_guessesUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type product_guessesUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type image_guessesCreateInput = {
    user_id: number
    name: string
    product: productCreateNestedOneWithoutImage_guessesInput
  }

  export type image_guessesUncheckedCreateInput = {
    user_id: number
    product_id: number
    name: string
  }

  export type image_guessesUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    product?: productUpdateOneRequiredWithoutImage_guessesNestedInput
  }

  export type image_guessesUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type image_guessesCreateManyInput = {
    user_id: number
    product_id: number
    name: string
  }

  export type image_guessesUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type image_guessesUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Product_imageNullableScalarRelationFilter = {
    is?: product_imageWhereInput | null
    isNot?: product_imageWhereInput | null
  }

  export type Daily_productNullableScalarRelationFilter = {
    is?: daily_productWhereInput | null
    isNot?: daily_productWhereInput | null
  }

  export type Product_guessesListRelationFilter = {
    every?: product_guessesWhereInput
    some?: product_guessesWhereInput
    none?: product_guessesWhereInput
  }

  export type Image_guessesListRelationFilter = {
    every?: image_guessesWhereInput
    some?: image_guessesWhereInput
    none?: image_guessesWhereInput
  }

  export type Daily_imageListRelationFilter = {
    every?: daily_imageWhereInput
    some?: daily_imageWhereInput
    none?: daily_imageWhereInput
  }

  export type product_guessesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type image_guessesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type daily_imageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productOrderByRelevanceInput = {
    fields: productOrderByRelevanceFieldEnum | productOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type productCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    category?: SortOrder
    weight?: SortOrder
    price?: SortOrder
  }

  export type productAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    category?: SortOrder
    weight?: SortOrder
    price?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    category?: SortOrder
    weight?: SortOrder
    price?: SortOrder
  }

  export type productSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type ProductScalarRelationFilter = {
    is?: productWhereInput
    isNot?: productWhereInput
  }

  export type product_imageOrderByRelevanceInput = {
    fields: product_imageOrderByRelevanceFieldEnum | product_imageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type product_imageCountOrderByAggregateInput = {
    product_id?: SortOrder
    image_url?: SortOrder
  }

  export type product_imageAvgOrderByAggregateInput = {
    product_id?: SortOrder
  }

  export type product_imageMaxOrderByAggregateInput = {
    product_id?: SortOrder
    image_url?: SortOrder
  }

  export type product_imageMinOrderByAggregateInput = {
    product_id?: SortOrder
    image_url?: SortOrder
  }

  export type product_imageSumOrderByAggregateInput = {
    product_id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type daily_productCountOrderByAggregateInput = {
    product_id?: SortOrder
    product_date?: SortOrder
  }

  export type daily_productAvgOrderByAggregateInput = {
    product_id?: SortOrder
  }

  export type daily_productMaxOrderByAggregateInput = {
    product_id?: SortOrder
    product_date?: SortOrder
  }

  export type daily_productMinOrderByAggregateInput = {
    product_id?: SortOrder
    product_date?: SortOrder
  }

  export type daily_productSumOrderByAggregateInput = {
    product_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type daily_imageCountOrderByAggregateInput = {
    product_id?: SortOrder
    image_date?: SortOrder
  }

  export type daily_imageAvgOrderByAggregateInput = {
    product_id?: SortOrder
  }

  export type daily_imageMaxOrderByAggregateInput = {
    product_id?: SortOrder
    image_date?: SortOrder
  }

  export type daily_imageMinOrderByAggregateInput = {
    product_id?: SortOrder
    image_date?: SortOrder
  }

  export type daily_imageSumOrderByAggregateInput = {
    product_id?: SortOrder
  }

  export type product_guessesOrderByRelevanceInput = {
    fields: product_guessesOrderByRelevanceFieldEnum | product_guessesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type product_guessesUser_idProduct_idCompoundUniqueInput = {
    user_id: number
    product_id: number
  }

  export type product_guessesCountOrderByAggregateInput = {
    user_id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    category?: SortOrder
    weight?: SortOrder
    price?: SortOrder
  }

  export type product_guessesAvgOrderByAggregateInput = {
    user_id?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
  }

  export type product_guessesMaxOrderByAggregateInput = {
    user_id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    category?: SortOrder
    weight?: SortOrder
    price?: SortOrder
  }

  export type product_guessesMinOrderByAggregateInput = {
    user_id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    category?: SortOrder
    weight?: SortOrder
    price?: SortOrder
  }

  export type product_guessesSumOrderByAggregateInput = {
    user_id?: SortOrder
    product_id?: SortOrder
    price?: SortOrder
  }

  export type image_guessesOrderByRelevanceInput = {
    fields: image_guessesOrderByRelevanceFieldEnum | image_guessesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type image_guessesUser_idProduct_idCompoundUniqueInput = {
    user_id: number
    product_id: number
  }

  export type image_guessesCountOrderByAggregateInput = {
    user_id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
  }

  export type image_guessesAvgOrderByAggregateInput = {
    user_id?: SortOrder
    product_id?: SortOrder
  }

  export type image_guessesMaxOrderByAggregateInput = {
    user_id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
  }

  export type image_guessesMinOrderByAggregateInput = {
    user_id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
  }

  export type image_guessesSumOrderByAggregateInput = {
    user_id?: SortOrder
    product_id?: SortOrder
  }

  export type product_imageCreateNestedOneWithoutProductInput = {
    create?: XOR<product_imageCreateWithoutProductInput, product_imageUncheckedCreateWithoutProductInput>
    connectOrCreate?: product_imageCreateOrConnectWithoutProductInput
    connect?: product_imageWhereUniqueInput
  }

  export type daily_productCreateNestedOneWithoutProductInput = {
    create?: XOR<daily_productCreateWithoutProductInput, daily_productUncheckedCreateWithoutProductInput>
    connectOrCreate?: daily_productCreateOrConnectWithoutProductInput
    connect?: daily_productWhereUniqueInput
  }

  export type product_guessesCreateNestedManyWithoutProductInput = {
    create?: XOR<product_guessesCreateWithoutProductInput, product_guessesUncheckedCreateWithoutProductInput> | product_guessesCreateWithoutProductInput[] | product_guessesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: product_guessesCreateOrConnectWithoutProductInput | product_guessesCreateOrConnectWithoutProductInput[]
    createMany?: product_guessesCreateManyProductInputEnvelope
    connect?: product_guessesWhereUniqueInput | product_guessesWhereUniqueInput[]
  }

  export type image_guessesCreateNestedManyWithoutProductInput = {
    create?: XOR<image_guessesCreateWithoutProductInput, image_guessesUncheckedCreateWithoutProductInput> | image_guessesCreateWithoutProductInput[] | image_guessesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: image_guessesCreateOrConnectWithoutProductInput | image_guessesCreateOrConnectWithoutProductInput[]
    createMany?: image_guessesCreateManyProductInputEnvelope
    connect?: image_guessesWhereUniqueInput | image_guessesWhereUniqueInput[]
  }

  export type daily_imageCreateNestedManyWithoutProductInput = {
    create?: XOR<daily_imageCreateWithoutProductInput, daily_imageUncheckedCreateWithoutProductInput> | daily_imageCreateWithoutProductInput[] | daily_imageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: daily_imageCreateOrConnectWithoutProductInput | daily_imageCreateOrConnectWithoutProductInput[]
    createMany?: daily_imageCreateManyProductInputEnvelope
    connect?: daily_imageWhereUniqueInput | daily_imageWhereUniqueInput[]
  }

  export type product_imageUncheckedCreateNestedOneWithoutProductInput = {
    create?: XOR<product_imageCreateWithoutProductInput, product_imageUncheckedCreateWithoutProductInput>
    connectOrCreate?: product_imageCreateOrConnectWithoutProductInput
    connect?: product_imageWhereUniqueInput
  }

  export type daily_productUncheckedCreateNestedOneWithoutProductInput = {
    create?: XOR<daily_productCreateWithoutProductInput, daily_productUncheckedCreateWithoutProductInput>
    connectOrCreate?: daily_productCreateOrConnectWithoutProductInput
    connect?: daily_productWhereUniqueInput
  }

  export type product_guessesUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<product_guessesCreateWithoutProductInput, product_guessesUncheckedCreateWithoutProductInput> | product_guessesCreateWithoutProductInput[] | product_guessesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: product_guessesCreateOrConnectWithoutProductInput | product_guessesCreateOrConnectWithoutProductInput[]
    createMany?: product_guessesCreateManyProductInputEnvelope
    connect?: product_guessesWhereUniqueInput | product_guessesWhereUniqueInput[]
  }

  export type image_guessesUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<image_guessesCreateWithoutProductInput, image_guessesUncheckedCreateWithoutProductInput> | image_guessesCreateWithoutProductInput[] | image_guessesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: image_guessesCreateOrConnectWithoutProductInput | image_guessesCreateOrConnectWithoutProductInput[]
    createMany?: image_guessesCreateManyProductInputEnvelope
    connect?: image_guessesWhereUniqueInput | image_guessesWhereUniqueInput[]
  }

  export type daily_imageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<daily_imageCreateWithoutProductInput, daily_imageUncheckedCreateWithoutProductInput> | daily_imageCreateWithoutProductInput[] | daily_imageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: daily_imageCreateOrConnectWithoutProductInput | daily_imageCreateOrConnectWithoutProductInput[]
    createMany?: daily_imageCreateManyProductInputEnvelope
    connect?: daily_imageWhereUniqueInput | daily_imageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type product_imageUpdateOneWithoutProductNestedInput = {
    create?: XOR<product_imageCreateWithoutProductInput, product_imageUncheckedCreateWithoutProductInput>
    connectOrCreate?: product_imageCreateOrConnectWithoutProductInput
    upsert?: product_imageUpsertWithoutProductInput
    disconnect?: product_imageWhereInput | boolean
    delete?: product_imageWhereInput | boolean
    connect?: product_imageWhereUniqueInput
    update?: XOR<XOR<product_imageUpdateToOneWithWhereWithoutProductInput, product_imageUpdateWithoutProductInput>, product_imageUncheckedUpdateWithoutProductInput>
  }

  export type daily_productUpdateOneWithoutProductNestedInput = {
    create?: XOR<daily_productCreateWithoutProductInput, daily_productUncheckedCreateWithoutProductInput>
    connectOrCreate?: daily_productCreateOrConnectWithoutProductInput
    upsert?: daily_productUpsertWithoutProductInput
    disconnect?: daily_productWhereInput | boolean
    delete?: daily_productWhereInput | boolean
    connect?: daily_productWhereUniqueInput
    update?: XOR<XOR<daily_productUpdateToOneWithWhereWithoutProductInput, daily_productUpdateWithoutProductInput>, daily_productUncheckedUpdateWithoutProductInput>
  }

  export type product_guessesUpdateManyWithoutProductNestedInput = {
    create?: XOR<product_guessesCreateWithoutProductInput, product_guessesUncheckedCreateWithoutProductInput> | product_guessesCreateWithoutProductInput[] | product_guessesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: product_guessesCreateOrConnectWithoutProductInput | product_guessesCreateOrConnectWithoutProductInput[]
    upsert?: product_guessesUpsertWithWhereUniqueWithoutProductInput | product_guessesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: product_guessesCreateManyProductInputEnvelope
    set?: product_guessesWhereUniqueInput | product_guessesWhereUniqueInput[]
    disconnect?: product_guessesWhereUniqueInput | product_guessesWhereUniqueInput[]
    delete?: product_guessesWhereUniqueInput | product_guessesWhereUniqueInput[]
    connect?: product_guessesWhereUniqueInput | product_guessesWhereUniqueInput[]
    update?: product_guessesUpdateWithWhereUniqueWithoutProductInput | product_guessesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: product_guessesUpdateManyWithWhereWithoutProductInput | product_guessesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: product_guessesScalarWhereInput | product_guessesScalarWhereInput[]
  }

  export type image_guessesUpdateManyWithoutProductNestedInput = {
    create?: XOR<image_guessesCreateWithoutProductInput, image_guessesUncheckedCreateWithoutProductInput> | image_guessesCreateWithoutProductInput[] | image_guessesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: image_guessesCreateOrConnectWithoutProductInput | image_guessesCreateOrConnectWithoutProductInput[]
    upsert?: image_guessesUpsertWithWhereUniqueWithoutProductInput | image_guessesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: image_guessesCreateManyProductInputEnvelope
    set?: image_guessesWhereUniqueInput | image_guessesWhereUniqueInput[]
    disconnect?: image_guessesWhereUniqueInput | image_guessesWhereUniqueInput[]
    delete?: image_guessesWhereUniqueInput | image_guessesWhereUniqueInput[]
    connect?: image_guessesWhereUniqueInput | image_guessesWhereUniqueInput[]
    update?: image_guessesUpdateWithWhereUniqueWithoutProductInput | image_guessesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: image_guessesUpdateManyWithWhereWithoutProductInput | image_guessesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: image_guessesScalarWhereInput | image_guessesScalarWhereInput[]
  }

  export type daily_imageUpdateManyWithoutProductNestedInput = {
    create?: XOR<daily_imageCreateWithoutProductInput, daily_imageUncheckedCreateWithoutProductInput> | daily_imageCreateWithoutProductInput[] | daily_imageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: daily_imageCreateOrConnectWithoutProductInput | daily_imageCreateOrConnectWithoutProductInput[]
    upsert?: daily_imageUpsertWithWhereUniqueWithoutProductInput | daily_imageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: daily_imageCreateManyProductInputEnvelope
    set?: daily_imageWhereUniqueInput | daily_imageWhereUniqueInput[]
    disconnect?: daily_imageWhereUniqueInput | daily_imageWhereUniqueInput[]
    delete?: daily_imageWhereUniqueInput | daily_imageWhereUniqueInput[]
    connect?: daily_imageWhereUniqueInput | daily_imageWhereUniqueInput[]
    update?: daily_imageUpdateWithWhereUniqueWithoutProductInput | daily_imageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: daily_imageUpdateManyWithWhereWithoutProductInput | daily_imageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: daily_imageScalarWhereInput | daily_imageScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type product_imageUncheckedUpdateOneWithoutProductNestedInput = {
    create?: XOR<product_imageCreateWithoutProductInput, product_imageUncheckedCreateWithoutProductInput>
    connectOrCreate?: product_imageCreateOrConnectWithoutProductInput
    upsert?: product_imageUpsertWithoutProductInput
    disconnect?: product_imageWhereInput | boolean
    delete?: product_imageWhereInput | boolean
    connect?: product_imageWhereUniqueInput
    update?: XOR<XOR<product_imageUpdateToOneWithWhereWithoutProductInput, product_imageUpdateWithoutProductInput>, product_imageUncheckedUpdateWithoutProductInput>
  }

  export type daily_productUncheckedUpdateOneWithoutProductNestedInput = {
    create?: XOR<daily_productCreateWithoutProductInput, daily_productUncheckedCreateWithoutProductInput>
    connectOrCreate?: daily_productCreateOrConnectWithoutProductInput
    upsert?: daily_productUpsertWithoutProductInput
    disconnect?: daily_productWhereInput | boolean
    delete?: daily_productWhereInput | boolean
    connect?: daily_productWhereUniqueInput
    update?: XOR<XOR<daily_productUpdateToOneWithWhereWithoutProductInput, daily_productUpdateWithoutProductInput>, daily_productUncheckedUpdateWithoutProductInput>
  }

  export type product_guessesUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<product_guessesCreateWithoutProductInput, product_guessesUncheckedCreateWithoutProductInput> | product_guessesCreateWithoutProductInput[] | product_guessesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: product_guessesCreateOrConnectWithoutProductInput | product_guessesCreateOrConnectWithoutProductInput[]
    upsert?: product_guessesUpsertWithWhereUniqueWithoutProductInput | product_guessesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: product_guessesCreateManyProductInputEnvelope
    set?: product_guessesWhereUniqueInput | product_guessesWhereUniqueInput[]
    disconnect?: product_guessesWhereUniqueInput | product_guessesWhereUniqueInput[]
    delete?: product_guessesWhereUniqueInput | product_guessesWhereUniqueInput[]
    connect?: product_guessesWhereUniqueInput | product_guessesWhereUniqueInput[]
    update?: product_guessesUpdateWithWhereUniqueWithoutProductInput | product_guessesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: product_guessesUpdateManyWithWhereWithoutProductInput | product_guessesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: product_guessesScalarWhereInput | product_guessesScalarWhereInput[]
  }

  export type image_guessesUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<image_guessesCreateWithoutProductInput, image_guessesUncheckedCreateWithoutProductInput> | image_guessesCreateWithoutProductInput[] | image_guessesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: image_guessesCreateOrConnectWithoutProductInput | image_guessesCreateOrConnectWithoutProductInput[]
    upsert?: image_guessesUpsertWithWhereUniqueWithoutProductInput | image_guessesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: image_guessesCreateManyProductInputEnvelope
    set?: image_guessesWhereUniqueInput | image_guessesWhereUniqueInput[]
    disconnect?: image_guessesWhereUniqueInput | image_guessesWhereUniqueInput[]
    delete?: image_guessesWhereUniqueInput | image_guessesWhereUniqueInput[]
    connect?: image_guessesWhereUniqueInput | image_guessesWhereUniqueInput[]
    update?: image_guessesUpdateWithWhereUniqueWithoutProductInput | image_guessesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: image_guessesUpdateManyWithWhereWithoutProductInput | image_guessesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: image_guessesScalarWhereInput | image_guessesScalarWhereInput[]
  }

  export type daily_imageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<daily_imageCreateWithoutProductInput, daily_imageUncheckedCreateWithoutProductInput> | daily_imageCreateWithoutProductInput[] | daily_imageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: daily_imageCreateOrConnectWithoutProductInput | daily_imageCreateOrConnectWithoutProductInput[]
    upsert?: daily_imageUpsertWithWhereUniqueWithoutProductInput | daily_imageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: daily_imageCreateManyProductInputEnvelope
    set?: daily_imageWhereUniqueInput | daily_imageWhereUniqueInput[]
    disconnect?: daily_imageWhereUniqueInput | daily_imageWhereUniqueInput[]
    delete?: daily_imageWhereUniqueInput | daily_imageWhereUniqueInput[]
    connect?: daily_imageWhereUniqueInput | daily_imageWhereUniqueInput[]
    update?: daily_imageUpdateWithWhereUniqueWithoutProductInput | daily_imageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: daily_imageUpdateManyWithWhereWithoutProductInput | daily_imageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: daily_imageScalarWhereInput | daily_imageScalarWhereInput[]
  }

  export type productCreateNestedOneWithoutProduct_imageInput = {
    create?: XOR<productCreateWithoutProduct_imageInput, productUncheckedCreateWithoutProduct_imageInput>
    connectOrCreate?: productCreateOrConnectWithoutProduct_imageInput
    connect?: productWhereUniqueInput
  }

  export type productUpdateOneRequiredWithoutProduct_imageNestedInput = {
    create?: XOR<productCreateWithoutProduct_imageInput, productUncheckedCreateWithoutProduct_imageInput>
    connectOrCreate?: productCreateOrConnectWithoutProduct_imageInput
    upsert?: productUpsertWithoutProduct_imageInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutProduct_imageInput, productUpdateWithoutProduct_imageInput>, productUncheckedUpdateWithoutProduct_imageInput>
  }

  export type productCreateNestedOneWithoutDaily_productInput = {
    create?: XOR<productCreateWithoutDaily_productInput, productUncheckedCreateWithoutDaily_productInput>
    connectOrCreate?: productCreateOrConnectWithoutDaily_productInput
    connect?: productWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type productUpdateOneRequiredWithoutDaily_productNestedInput = {
    create?: XOR<productCreateWithoutDaily_productInput, productUncheckedCreateWithoutDaily_productInput>
    connectOrCreate?: productCreateOrConnectWithoutDaily_productInput
    upsert?: productUpsertWithoutDaily_productInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutDaily_productInput, productUpdateWithoutDaily_productInput>, productUncheckedUpdateWithoutDaily_productInput>
  }

  export type productCreateNestedOneWithoutDaily_imageInput = {
    create?: XOR<productCreateWithoutDaily_imageInput, productUncheckedCreateWithoutDaily_imageInput>
    connectOrCreate?: productCreateOrConnectWithoutDaily_imageInput
    connect?: productWhereUniqueInput
  }

  export type productUpdateOneRequiredWithoutDaily_imageNestedInput = {
    create?: XOR<productCreateWithoutDaily_imageInput, productUncheckedCreateWithoutDaily_imageInput>
    connectOrCreate?: productCreateOrConnectWithoutDaily_imageInput
    upsert?: productUpsertWithoutDaily_imageInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutDaily_imageInput, productUpdateWithoutDaily_imageInput>, productUncheckedUpdateWithoutDaily_imageInput>
  }

  export type productCreateNestedOneWithoutProduct_guessesInput = {
    create?: XOR<productCreateWithoutProduct_guessesInput, productUncheckedCreateWithoutProduct_guessesInput>
    connectOrCreate?: productCreateOrConnectWithoutProduct_guessesInput
    connect?: productWhereUniqueInput
  }

  export type productUpdateOneRequiredWithoutProduct_guessesNestedInput = {
    create?: XOR<productCreateWithoutProduct_guessesInput, productUncheckedCreateWithoutProduct_guessesInput>
    connectOrCreate?: productCreateOrConnectWithoutProduct_guessesInput
    upsert?: productUpsertWithoutProduct_guessesInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutProduct_guessesInput, productUpdateWithoutProduct_guessesInput>, productUncheckedUpdateWithoutProduct_guessesInput>
  }

  export type productCreateNestedOneWithoutImage_guessesInput = {
    create?: XOR<productCreateWithoutImage_guessesInput, productUncheckedCreateWithoutImage_guessesInput>
    connectOrCreate?: productCreateOrConnectWithoutImage_guessesInput
    connect?: productWhereUniqueInput
  }

  export type productUpdateOneRequiredWithoutImage_guessesNestedInput = {
    create?: XOR<productCreateWithoutImage_guessesInput, productUncheckedCreateWithoutImage_guessesInput>
    connectOrCreate?: productCreateOrConnectWithoutImage_guessesInput
    upsert?: productUpsertWithoutImage_guessesInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutImage_guessesInput, productUpdateWithoutImage_guessesInput>, productUncheckedUpdateWithoutImage_guessesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type product_imageCreateWithoutProductInput = {
    image_url: string
  }

  export type product_imageUncheckedCreateWithoutProductInput = {
    image_url: string
  }

  export type product_imageCreateOrConnectWithoutProductInput = {
    where: product_imageWhereUniqueInput
    create: XOR<product_imageCreateWithoutProductInput, product_imageUncheckedCreateWithoutProductInput>
  }

  export type daily_productCreateWithoutProductInput = {
    product_date: Date | string
  }

  export type daily_productUncheckedCreateWithoutProductInput = {
    product_date: Date | string
  }

  export type daily_productCreateOrConnectWithoutProductInput = {
    where: daily_productWhereUniqueInput
    create: XOR<daily_productCreateWithoutProductInput, daily_productUncheckedCreateWithoutProductInput>
  }

  export type product_guessesCreateWithoutProductInput = {
    user_id: number
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal | DecimalJsLike | number | string
  }

  export type product_guessesUncheckedCreateWithoutProductInput = {
    user_id: number
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal | DecimalJsLike | number | string
  }

  export type product_guessesCreateOrConnectWithoutProductInput = {
    where: product_guessesWhereUniqueInput
    create: XOR<product_guessesCreateWithoutProductInput, product_guessesUncheckedCreateWithoutProductInput>
  }

  export type product_guessesCreateManyProductInputEnvelope = {
    data: product_guessesCreateManyProductInput | product_guessesCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type image_guessesCreateWithoutProductInput = {
    user_id: number
    name: string
  }

  export type image_guessesUncheckedCreateWithoutProductInput = {
    user_id: number
    name: string
  }

  export type image_guessesCreateOrConnectWithoutProductInput = {
    where: image_guessesWhereUniqueInput
    create: XOR<image_guessesCreateWithoutProductInput, image_guessesUncheckedCreateWithoutProductInput>
  }

  export type image_guessesCreateManyProductInputEnvelope = {
    data: image_guessesCreateManyProductInput | image_guessesCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type daily_imageCreateWithoutProductInput = {
    image_date: Date | string
  }

  export type daily_imageUncheckedCreateWithoutProductInput = {
    image_date: Date | string
  }

  export type daily_imageCreateOrConnectWithoutProductInput = {
    where: daily_imageWhereUniqueInput
    create: XOR<daily_imageCreateWithoutProductInput, daily_imageUncheckedCreateWithoutProductInput>
  }

  export type daily_imageCreateManyProductInputEnvelope = {
    data: daily_imageCreateManyProductInput | daily_imageCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type product_imageUpsertWithoutProductInput = {
    update: XOR<product_imageUpdateWithoutProductInput, product_imageUncheckedUpdateWithoutProductInput>
    create: XOR<product_imageCreateWithoutProductInput, product_imageUncheckedCreateWithoutProductInput>
    where?: product_imageWhereInput
  }

  export type product_imageUpdateToOneWithWhereWithoutProductInput = {
    where?: product_imageWhereInput
    data: XOR<product_imageUpdateWithoutProductInput, product_imageUncheckedUpdateWithoutProductInput>
  }

  export type product_imageUpdateWithoutProductInput = {
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type product_imageUncheckedUpdateWithoutProductInput = {
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type daily_productUpsertWithoutProductInput = {
    update: XOR<daily_productUpdateWithoutProductInput, daily_productUncheckedUpdateWithoutProductInput>
    create: XOR<daily_productCreateWithoutProductInput, daily_productUncheckedCreateWithoutProductInput>
    where?: daily_productWhereInput
  }

  export type daily_productUpdateToOneWithWhereWithoutProductInput = {
    where?: daily_productWhereInput
    data: XOR<daily_productUpdateWithoutProductInput, daily_productUncheckedUpdateWithoutProductInput>
  }

  export type daily_productUpdateWithoutProductInput = {
    product_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type daily_productUncheckedUpdateWithoutProductInput = {
    product_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_guessesUpsertWithWhereUniqueWithoutProductInput = {
    where: product_guessesWhereUniqueInput
    update: XOR<product_guessesUpdateWithoutProductInput, product_guessesUncheckedUpdateWithoutProductInput>
    create: XOR<product_guessesCreateWithoutProductInput, product_guessesUncheckedCreateWithoutProductInput>
  }

  export type product_guessesUpdateWithWhereUniqueWithoutProductInput = {
    where: product_guessesWhereUniqueInput
    data: XOR<product_guessesUpdateWithoutProductInput, product_guessesUncheckedUpdateWithoutProductInput>
  }

  export type product_guessesUpdateManyWithWhereWithoutProductInput = {
    where: product_guessesScalarWhereInput
    data: XOR<product_guessesUpdateManyMutationInput, product_guessesUncheckedUpdateManyWithoutProductInput>
  }

  export type product_guessesScalarWhereInput = {
    AND?: product_guessesScalarWhereInput | product_guessesScalarWhereInput[]
    OR?: product_guessesScalarWhereInput[]
    NOT?: product_guessesScalarWhereInput | product_guessesScalarWhereInput[]
    user_id?: IntFilter<"product_guesses"> | number
    product_id?: IntFilter<"product_guesses"> | number
    name?: StringFilter<"product_guesses"> | string
    brand?: StringFilter<"product_guesses"> | string
    category?: StringFilter<"product_guesses"> | string
    weight?: StringFilter<"product_guesses"> | string
    price?: DecimalFilter<"product_guesses"> | Decimal | DecimalJsLike | number | string
  }

  export type image_guessesUpsertWithWhereUniqueWithoutProductInput = {
    where: image_guessesWhereUniqueInput
    update: XOR<image_guessesUpdateWithoutProductInput, image_guessesUncheckedUpdateWithoutProductInput>
    create: XOR<image_guessesCreateWithoutProductInput, image_guessesUncheckedCreateWithoutProductInput>
  }

  export type image_guessesUpdateWithWhereUniqueWithoutProductInput = {
    where: image_guessesWhereUniqueInput
    data: XOR<image_guessesUpdateWithoutProductInput, image_guessesUncheckedUpdateWithoutProductInput>
  }

  export type image_guessesUpdateManyWithWhereWithoutProductInput = {
    where: image_guessesScalarWhereInput
    data: XOR<image_guessesUpdateManyMutationInput, image_guessesUncheckedUpdateManyWithoutProductInput>
  }

  export type image_guessesScalarWhereInput = {
    AND?: image_guessesScalarWhereInput | image_guessesScalarWhereInput[]
    OR?: image_guessesScalarWhereInput[]
    NOT?: image_guessesScalarWhereInput | image_guessesScalarWhereInput[]
    user_id?: IntFilter<"image_guesses"> | number
    product_id?: IntFilter<"image_guesses"> | number
    name?: StringFilter<"image_guesses"> | string
  }

  export type daily_imageUpsertWithWhereUniqueWithoutProductInput = {
    where: daily_imageWhereUniqueInput
    update: XOR<daily_imageUpdateWithoutProductInput, daily_imageUncheckedUpdateWithoutProductInput>
    create: XOR<daily_imageCreateWithoutProductInput, daily_imageUncheckedCreateWithoutProductInput>
  }

  export type daily_imageUpdateWithWhereUniqueWithoutProductInput = {
    where: daily_imageWhereUniqueInput
    data: XOR<daily_imageUpdateWithoutProductInput, daily_imageUncheckedUpdateWithoutProductInput>
  }

  export type daily_imageUpdateManyWithWhereWithoutProductInput = {
    where: daily_imageScalarWhereInput
    data: XOR<daily_imageUpdateManyMutationInput, daily_imageUncheckedUpdateManyWithoutProductInput>
  }

  export type daily_imageScalarWhereInput = {
    AND?: daily_imageScalarWhereInput | daily_imageScalarWhereInput[]
    OR?: daily_imageScalarWhereInput[]
    NOT?: daily_imageScalarWhereInput | daily_imageScalarWhereInput[]
    product_id?: IntFilter<"daily_image"> | number
    image_date?: DateTimeFilter<"daily_image"> | Date | string
  }

  export type productCreateWithoutProduct_imageInput = {
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal | DecimalJsLike | number | string
    daily_product?: daily_productCreateNestedOneWithoutProductInput
    product_guesses?: product_guessesCreateNestedManyWithoutProductInput
    image_guesses?: image_guessesCreateNestedManyWithoutProductInput
    daily_image?: daily_imageCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutProduct_imageInput = {
    id?: number
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal | DecimalJsLike | number | string
    daily_product?: daily_productUncheckedCreateNestedOneWithoutProductInput
    product_guesses?: product_guessesUncheckedCreateNestedManyWithoutProductInput
    image_guesses?: image_guessesUncheckedCreateNestedManyWithoutProductInput
    daily_image?: daily_imageUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutProduct_imageInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutProduct_imageInput, productUncheckedCreateWithoutProduct_imageInput>
  }

  export type productUpsertWithoutProduct_imageInput = {
    update: XOR<productUpdateWithoutProduct_imageInput, productUncheckedUpdateWithoutProduct_imageInput>
    create: XOR<productCreateWithoutProduct_imageInput, productUncheckedCreateWithoutProduct_imageInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutProduct_imageInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutProduct_imageInput, productUncheckedUpdateWithoutProduct_imageInput>
  }

  export type productUpdateWithoutProduct_imageInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daily_product?: daily_productUpdateOneWithoutProductNestedInput
    product_guesses?: product_guessesUpdateManyWithoutProductNestedInput
    image_guesses?: image_guessesUpdateManyWithoutProductNestedInput
    daily_image?: daily_imageUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutProduct_imageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daily_product?: daily_productUncheckedUpdateOneWithoutProductNestedInput
    product_guesses?: product_guessesUncheckedUpdateManyWithoutProductNestedInput
    image_guesses?: image_guessesUncheckedUpdateManyWithoutProductNestedInput
    daily_image?: daily_imageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateWithoutDaily_productInput = {
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal | DecimalJsLike | number | string
    product_image?: product_imageCreateNestedOneWithoutProductInput
    product_guesses?: product_guessesCreateNestedManyWithoutProductInput
    image_guesses?: image_guessesCreateNestedManyWithoutProductInput
    daily_image?: daily_imageCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutDaily_productInput = {
    id?: number
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal | DecimalJsLike | number | string
    product_image?: product_imageUncheckedCreateNestedOneWithoutProductInput
    product_guesses?: product_guessesUncheckedCreateNestedManyWithoutProductInput
    image_guesses?: image_guessesUncheckedCreateNestedManyWithoutProductInput
    daily_image?: daily_imageUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutDaily_productInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutDaily_productInput, productUncheckedCreateWithoutDaily_productInput>
  }

  export type productUpsertWithoutDaily_productInput = {
    update: XOR<productUpdateWithoutDaily_productInput, productUncheckedUpdateWithoutDaily_productInput>
    create: XOR<productCreateWithoutDaily_productInput, productUncheckedCreateWithoutDaily_productInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutDaily_productInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutDaily_productInput, productUncheckedUpdateWithoutDaily_productInput>
  }

  export type productUpdateWithoutDaily_productInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product_image?: product_imageUpdateOneWithoutProductNestedInput
    product_guesses?: product_guessesUpdateManyWithoutProductNestedInput
    image_guesses?: image_guessesUpdateManyWithoutProductNestedInput
    daily_image?: daily_imageUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutDaily_productInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product_image?: product_imageUncheckedUpdateOneWithoutProductNestedInput
    product_guesses?: product_guessesUncheckedUpdateManyWithoutProductNestedInput
    image_guesses?: image_guessesUncheckedUpdateManyWithoutProductNestedInput
    daily_image?: daily_imageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateWithoutDaily_imageInput = {
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal | DecimalJsLike | number | string
    product_image?: product_imageCreateNestedOneWithoutProductInput
    daily_product?: daily_productCreateNestedOneWithoutProductInput
    product_guesses?: product_guessesCreateNestedManyWithoutProductInput
    image_guesses?: image_guessesCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutDaily_imageInput = {
    id?: number
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal | DecimalJsLike | number | string
    product_image?: product_imageUncheckedCreateNestedOneWithoutProductInput
    daily_product?: daily_productUncheckedCreateNestedOneWithoutProductInput
    product_guesses?: product_guessesUncheckedCreateNestedManyWithoutProductInput
    image_guesses?: image_guessesUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutDaily_imageInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutDaily_imageInput, productUncheckedCreateWithoutDaily_imageInput>
  }

  export type productUpsertWithoutDaily_imageInput = {
    update: XOR<productUpdateWithoutDaily_imageInput, productUncheckedUpdateWithoutDaily_imageInput>
    create: XOR<productCreateWithoutDaily_imageInput, productUncheckedCreateWithoutDaily_imageInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutDaily_imageInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutDaily_imageInput, productUncheckedUpdateWithoutDaily_imageInput>
  }

  export type productUpdateWithoutDaily_imageInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product_image?: product_imageUpdateOneWithoutProductNestedInput
    daily_product?: daily_productUpdateOneWithoutProductNestedInput
    product_guesses?: product_guessesUpdateManyWithoutProductNestedInput
    image_guesses?: image_guessesUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutDaily_imageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product_image?: product_imageUncheckedUpdateOneWithoutProductNestedInput
    daily_product?: daily_productUncheckedUpdateOneWithoutProductNestedInput
    product_guesses?: product_guessesUncheckedUpdateManyWithoutProductNestedInput
    image_guesses?: image_guessesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateWithoutProduct_guessesInput = {
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal | DecimalJsLike | number | string
    product_image?: product_imageCreateNestedOneWithoutProductInput
    daily_product?: daily_productCreateNestedOneWithoutProductInput
    image_guesses?: image_guessesCreateNestedManyWithoutProductInput
    daily_image?: daily_imageCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutProduct_guessesInput = {
    id?: number
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal | DecimalJsLike | number | string
    product_image?: product_imageUncheckedCreateNestedOneWithoutProductInput
    daily_product?: daily_productUncheckedCreateNestedOneWithoutProductInput
    image_guesses?: image_guessesUncheckedCreateNestedManyWithoutProductInput
    daily_image?: daily_imageUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutProduct_guessesInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutProduct_guessesInput, productUncheckedCreateWithoutProduct_guessesInput>
  }

  export type productUpsertWithoutProduct_guessesInput = {
    update: XOR<productUpdateWithoutProduct_guessesInput, productUncheckedUpdateWithoutProduct_guessesInput>
    create: XOR<productCreateWithoutProduct_guessesInput, productUncheckedCreateWithoutProduct_guessesInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutProduct_guessesInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutProduct_guessesInput, productUncheckedUpdateWithoutProduct_guessesInput>
  }

  export type productUpdateWithoutProduct_guessesInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product_image?: product_imageUpdateOneWithoutProductNestedInput
    daily_product?: daily_productUpdateOneWithoutProductNestedInput
    image_guesses?: image_guessesUpdateManyWithoutProductNestedInput
    daily_image?: daily_imageUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutProduct_guessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product_image?: product_imageUncheckedUpdateOneWithoutProductNestedInput
    daily_product?: daily_productUncheckedUpdateOneWithoutProductNestedInput
    image_guesses?: image_guessesUncheckedUpdateManyWithoutProductNestedInput
    daily_image?: daily_imageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateWithoutImage_guessesInput = {
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal | DecimalJsLike | number | string
    product_image?: product_imageCreateNestedOneWithoutProductInput
    daily_product?: daily_productCreateNestedOneWithoutProductInput
    product_guesses?: product_guessesCreateNestedManyWithoutProductInput
    daily_image?: daily_imageCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutImage_guessesInput = {
    id?: number
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal | DecimalJsLike | number | string
    product_image?: product_imageUncheckedCreateNestedOneWithoutProductInput
    daily_product?: daily_productUncheckedCreateNestedOneWithoutProductInput
    product_guesses?: product_guessesUncheckedCreateNestedManyWithoutProductInput
    daily_image?: daily_imageUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutImage_guessesInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutImage_guessesInput, productUncheckedCreateWithoutImage_guessesInput>
  }

  export type productUpsertWithoutImage_guessesInput = {
    update: XOR<productUpdateWithoutImage_guessesInput, productUncheckedUpdateWithoutImage_guessesInput>
    create: XOR<productCreateWithoutImage_guessesInput, productUncheckedCreateWithoutImage_guessesInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutImage_guessesInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutImage_guessesInput, productUncheckedUpdateWithoutImage_guessesInput>
  }

  export type productUpdateWithoutImage_guessesInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product_image?: product_imageUpdateOneWithoutProductNestedInput
    daily_product?: daily_productUpdateOneWithoutProductNestedInput
    product_guesses?: product_guessesUpdateManyWithoutProductNestedInput
    daily_image?: daily_imageUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutImage_guessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product_image?: product_imageUncheckedUpdateOneWithoutProductNestedInput
    daily_product?: daily_productUncheckedUpdateOneWithoutProductNestedInput
    product_guesses?: product_guessesUncheckedUpdateManyWithoutProductNestedInput
    daily_image?: daily_imageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type product_guessesCreateManyProductInput = {
    user_id: number
    name: string
    brand: string
    category: string
    weight: string
    price: Decimal | DecimalJsLike | number | string
  }

  export type image_guessesCreateManyProductInput = {
    user_id: number
    name: string
  }

  export type daily_imageCreateManyProductInput = {
    image_date: Date | string
  }

  export type product_guessesUpdateWithoutProductInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type product_guessesUncheckedUpdateWithoutProductInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type product_guessesUncheckedUpdateManyWithoutProductInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type image_guessesUpdateWithoutProductInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type image_guessesUncheckedUpdateWithoutProductInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type image_guessesUncheckedUpdateManyWithoutProductInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type daily_imageUpdateWithoutProductInput = {
    image_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type daily_imageUncheckedUpdateWithoutProductInput = {
    image_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type daily_imageUncheckedUpdateManyWithoutProductInput = {
    image_date?: DateTimeFieldUpdateOperationsInput | Date | string
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