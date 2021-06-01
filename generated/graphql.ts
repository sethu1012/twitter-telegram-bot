export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "cr_handles" */
export type Cr_Handles = {
  __typename?: 'cr_handles';
  created_at: Scalars['timestamptz'];
  handle_name: Scalars['String'];
  id: Scalars['bigint'];
  is_deleted: Scalars['Boolean'];
  last_tweet_id?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "cr_handles" */
export type Cr_Handles_Aggregate = {
  __typename?: 'cr_handles_aggregate';
  aggregate?: Maybe<Cr_Handles_Aggregate_Fields>;
  nodes: Array<Cr_Handles>;
};

/** aggregate fields of "cr_handles" */
export type Cr_Handles_Aggregate_Fields = {
  __typename?: 'cr_handles_aggregate_fields';
  avg?: Maybe<Cr_Handles_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cr_Handles_Max_Fields>;
  min?: Maybe<Cr_Handles_Min_Fields>;
  stddev?: Maybe<Cr_Handles_Stddev_Fields>;
  stddev_pop?: Maybe<Cr_Handles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cr_Handles_Stddev_Samp_Fields>;
  sum?: Maybe<Cr_Handles_Sum_Fields>;
  var_pop?: Maybe<Cr_Handles_Var_Pop_Fields>;
  var_samp?: Maybe<Cr_Handles_Var_Samp_Fields>;
  variance?: Maybe<Cr_Handles_Variance_Fields>;
};


/** aggregate fields of "cr_handles" */
export type Cr_Handles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Cr_Handles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Cr_Handles_Avg_Fields = {
  __typename?: 'cr_handles_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "cr_handles". All fields are combined with a logical 'AND'. */
export type Cr_Handles_Bool_Exp = {
  _and?: Maybe<Array<Cr_Handles_Bool_Exp>>;
  _not?: Maybe<Cr_Handles_Bool_Exp>;
  _or?: Maybe<Array<Cr_Handles_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  handle_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  is_deleted?: Maybe<Boolean_Comparison_Exp>;
  last_tweet_id?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "cr_handles" */
export enum Cr_Handles_Constraint {
  /** unique or primary key constraint */
  CrHandlesHandleNameKey = 'cr_handles_handle_name_key',
  /** unique or primary key constraint */
  CrHandlesPkey = 'cr_handles_pkey'
}

/** input type for incrementing numeric columns in table "cr_handles" */
export type Cr_Handles_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "cr_handles" */
export type Cr_Handles_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  handle_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  is_deleted?: Maybe<Scalars['Boolean']>;
  last_tweet_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Cr_Handles_Max_Fields = {
  __typename?: 'cr_handles_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  handle_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  last_tweet_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Cr_Handles_Min_Fields = {
  __typename?: 'cr_handles_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  handle_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  last_tweet_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "cr_handles" */
export type Cr_Handles_Mutation_Response = {
  __typename?: 'cr_handles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cr_Handles>;
};

/** on conflict condition type for table "cr_handles" */
export type Cr_Handles_On_Conflict = {
  constraint: Cr_Handles_Constraint;
  update_columns?: Array<Cr_Handles_Update_Column>;
  where?: Maybe<Cr_Handles_Bool_Exp>;
};

/** Ordering options when selecting data from "cr_handles". */
export type Cr_Handles_Order_By = {
  created_at?: Maybe<Order_By>;
  handle_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_deleted?: Maybe<Order_By>;
  last_tweet_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: cr_handles */
export type Cr_Handles_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "cr_handles" */
export enum Cr_Handles_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HandleName = 'handle_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  LastTweetId = 'last_tweet_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "cr_handles" */
export type Cr_Handles_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  handle_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  is_deleted?: Maybe<Scalars['Boolean']>;
  last_tweet_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Cr_Handles_Stddev_Fields = {
  __typename?: 'cr_handles_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Cr_Handles_Stddev_Pop_Fields = {
  __typename?: 'cr_handles_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Cr_Handles_Stddev_Samp_Fields = {
  __typename?: 'cr_handles_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Cr_Handles_Sum_Fields = {
  __typename?: 'cr_handles_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "cr_handles" */
export enum Cr_Handles_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HandleName = 'handle_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  LastTweetId = 'last_tweet_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Cr_Handles_Var_Pop_Fields = {
  __typename?: 'cr_handles_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Cr_Handles_Var_Samp_Fields = {
  __typename?: 'cr_handles_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Cr_Handles_Variance_Fields = {
  __typename?: 'cr_handles_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "cr_handles" */
  delete_cr_handles?: Maybe<Cr_Handles_Mutation_Response>;
  /** delete single row from the table: "cr_handles" */
  delete_cr_handles_by_pk?: Maybe<Cr_Handles>;
  /** insert data into the table: "cr_handles" */
  insert_cr_handles?: Maybe<Cr_Handles_Mutation_Response>;
  /** insert a single row into the table: "cr_handles" */
  insert_cr_handles_one?: Maybe<Cr_Handles>;
  /** update data of the table: "cr_handles" */
  update_cr_handles?: Maybe<Cr_Handles_Mutation_Response>;
  /** update single row of the table: "cr_handles" */
  update_cr_handles_by_pk?: Maybe<Cr_Handles>;
};


/** mutation root */
export type Mutation_RootDelete_Cr_HandlesArgs = {
  where: Cr_Handles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cr_Handles_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootInsert_Cr_HandlesArgs = {
  objects: Array<Cr_Handles_Insert_Input>;
  on_conflict?: Maybe<Cr_Handles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cr_Handles_OneArgs = {
  object: Cr_Handles_Insert_Input;
  on_conflict?: Maybe<Cr_Handles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Cr_HandlesArgs = {
  _inc?: Maybe<Cr_Handles_Inc_Input>;
  _set?: Maybe<Cr_Handles_Set_Input>;
  where: Cr_Handles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cr_Handles_By_PkArgs = {
  _inc?: Maybe<Cr_Handles_Inc_Input>;
  _set?: Maybe<Cr_Handles_Set_Input>;
  pk_columns: Cr_Handles_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "cr_handles" */
  cr_handles: Array<Cr_Handles>;
  /** fetch aggregated fields from the table: "cr_handles" */
  cr_handles_aggregate: Cr_Handles_Aggregate;
  /** fetch data from the table: "cr_handles" using primary key columns */
  cr_handles_by_pk?: Maybe<Cr_Handles>;
};


export type Query_RootCr_HandlesArgs = {
  distinct_on?: Maybe<Array<Cr_Handles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cr_Handles_Order_By>>;
  where?: Maybe<Cr_Handles_Bool_Exp>;
};


export type Query_RootCr_Handles_AggregateArgs = {
  distinct_on?: Maybe<Array<Cr_Handles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cr_Handles_Order_By>>;
  where?: Maybe<Cr_Handles_Bool_Exp>;
};


export type Query_RootCr_Handles_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "cr_handles" */
  cr_handles: Array<Cr_Handles>;
  /** fetch aggregated fields from the table: "cr_handles" */
  cr_handles_aggregate: Cr_Handles_Aggregate;
  /** fetch data from the table: "cr_handles" using primary key columns */
  cr_handles_by_pk?: Maybe<Cr_Handles>;
};


export type Subscription_RootCr_HandlesArgs = {
  distinct_on?: Maybe<Array<Cr_Handles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cr_Handles_Order_By>>;
  where?: Maybe<Cr_Handles_Bool_Exp>;
};


export type Subscription_RootCr_Handles_AggregateArgs = {
  distinct_on?: Maybe<Array<Cr_Handles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cr_Handles_Order_By>>;
  where?: Maybe<Cr_Handles_Bool_Exp>;
};


export type Subscription_RootCr_Handles_By_PkArgs = {
  id: Scalars['bigint'];
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};
