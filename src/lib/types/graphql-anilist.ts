import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Json: any;
  /** ISO 3166-1 alpha-2 country code */
  CountryCode: any;
  /** 8 digit long date integer (YYYYMMDD). Unknown dates represented by 0. E.g. 2016: 20160000, May 1976: 19760500 */
  FuzzyDateInt: any;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly Page?: Maybe<Page>;
  /** Media query */
  readonly Media?: Maybe<Media>;
  /** Media Trend query */
  readonly MediaTrend?: Maybe<MediaTrend>;
  /** Airing schedule query */
  readonly AiringSchedule?: Maybe<AiringSchedule>;
  /** Character query */
  readonly Character?: Maybe<Character>;
  /** Staff query */
  readonly Staff?: Maybe<Staff>;
  /** Media list query */
  readonly MediaList?: Maybe<MediaList>;
  /** Media list collection query, provides list pre-grouped by status & custom lists. User ID and Media Type arguments required. */
  readonly MediaListCollection?: Maybe<MediaListCollection>;
  /** Collection of all the possible media genres */
  readonly GenreCollection?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Collection of all the possible media tags */
  readonly MediaTagCollection?: Maybe<ReadonlyArray<Maybe<MediaTag>>>;
  /** User query */
  readonly User?: Maybe<User>;
  /** Get the currently authenticated user */
  readonly Viewer?: Maybe<User>;
  /** Notification query */
  readonly Notification?: Maybe<NotificationUnion>;
  /** Studio query */
  readonly Studio?: Maybe<Studio>;
  /** Review query */
  readonly Review?: Maybe<Review>;
  /** Activity query */
  readonly Activity?: Maybe<ActivityUnion>;
  /** Activity reply query */
  readonly ActivityReply?: Maybe<ActivityReply>;
  /** Follow query */
  readonly Following?: Maybe<User>;
  /** Follow query */
  readonly Follower?: Maybe<User>;
  /** Thread query */
  readonly Thread?: Maybe<Thread>;
  /** Comment query */
  readonly ThreadComment?: Maybe<ReadonlyArray<Maybe<ThreadComment>>>;
  /** Recommendation query */
  readonly Recommendation?: Maybe<Recommendation>;
  /** Like query */
  readonly Like?: Maybe<User>;
  /** Provide AniList markdown to be converted to html (Requires auth) */
  readonly Markdown?: Maybe<ParsedMarkdown>;
  readonly AniChartUser?: Maybe<AniChartUser>;
  /** Site statistics query */
  readonly SiteStatistics?: Maybe<SiteStatistics>;
};


export type QueryPageArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type QueryMediaArgs = {
  id?: Maybe<Scalars['Int']>;
  idMal?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['FuzzyDateInt']>;
  endDate?: Maybe<Scalars['FuzzyDateInt']>;
  season?: Maybe<MediaSeason>;
  seasonYear?: Maybe<Scalars['Int']>;
  type?: Maybe<MediaType>;
  format?: Maybe<MediaFormat>;
  status?: Maybe<MediaStatus>;
  episodes?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  chapters?: Maybe<Scalars['Int']>;
  volumes?: Maybe<Scalars['Int']>;
  isAdult?: Maybe<Scalars['Boolean']>;
  genre?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  minimumTagRank?: Maybe<Scalars['Int']>;
  tagCategory?: Maybe<Scalars['String']>;
  onList?: Maybe<Scalars['Boolean']>;
  licensedBy?: Maybe<Scalars['String']>;
  averageScore?: Maybe<Scalars['Int']>;
  popularity?: Maybe<Scalars['Int']>;
  source?: Maybe<MediaSource>;
  countryOfOrigin?: Maybe<Scalars['CountryCode']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  idMal_not?: Maybe<Scalars['Int']>;
  idMal_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  idMal_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  startDate_greater?: Maybe<Scalars['FuzzyDateInt']>;
  startDate_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  startDate_like?: Maybe<Scalars['String']>;
  endDate_greater?: Maybe<Scalars['FuzzyDateInt']>;
  endDate_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  endDate_like?: Maybe<Scalars['String']>;
  format_in?: Maybe<ReadonlyArray<Maybe<MediaFormat>>>;
  format_not?: Maybe<MediaFormat>;
  format_not_in?: Maybe<ReadonlyArray<Maybe<MediaFormat>>>;
  status_in?: Maybe<ReadonlyArray<Maybe<MediaStatus>>>;
  status_not?: Maybe<MediaStatus>;
  status_not_in?: Maybe<ReadonlyArray<Maybe<MediaStatus>>>;
  episodes_greater?: Maybe<Scalars['Int']>;
  episodes_lesser?: Maybe<Scalars['Int']>;
  duration_greater?: Maybe<Scalars['Int']>;
  duration_lesser?: Maybe<Scalars['Int']>;
  chapters_greater?: Maybe<Scalars['Int']>;
  chapters_lesser?: Maybe<Scalars['Int']>;
  volumes_greater?: Maybe<Scalars['Int']>;
  volumes_lesser?: Maybe<Scalars['Int']>;
  genre_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  genre_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  tag_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  tag_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  tagCategory_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  tagCategory_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  licensedBy_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  averageScore_not?: Maybe<Scalars['Int']>;
  averageScore_greater?: Maybe<Scalars['Int']>;
  averageScore_lesser?: Maybe<Scalars['Int']>;
  popularity_not?: Maybe<Scalars['Int']>;
  popularity_greater?: Maybe<Scalars['Int']>;
  popularity_lesser?: Maybe<Scalars['Int']>;
  source_in?: Maybe<ReadonlyArray<Maybe<MediaSource>>>;
  sort?: Maybe<ReadonlyArray<Maybe<MediaSort>>>;
};


export type QueryMediaTrendArgs = {
  mediaId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  trending?: Maybe<Scalars['Int']>;
  averageScore?: Maybe<Scalars['Int']>;
  popularity?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  releasing?: Maybe<Scalars['Boolean']>;
  mediaId_not?: Maybe<Scalars['Int']>;
  mediaId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  date_greater?: Maybe<Scalars['Int']>;
  date_lesser?: Maybe<Scalars['Int']>;
  trending_greater?: Maybe<Scalars['Int']>;
  trending_lesser?: Maybe<Scalars['Int']>;
  trending_not?: Maybe<Scalars['Int']>;
  averageScore_greater?: Maybe<Scalars['Int']>;
  averageScore_lesser?: Maybe<Scalars['Int']>;
  averageScore_not?: Maybe<Scalars['Int']>;
  popularity_greater?: Maybe<Scalars['Int']>;
  popularity_lesser?: Maybe<Scalars['Int']>;
  popularity_not?: Maybe<Scalars['Int']>;
  episode_greater?: Maybe<Scalars['Int']>;
  episode_lesser?: Maybe<Scalars['Int']>;
  episode_not?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<MediaTrendSort>>>;
};


export type QueryAiringScheduleArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  airingAt?: Maybe<Scalars['Int']>;
  notYetAired?: Maybe<Scalars['Boolean']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mediaId_not?: Maybe<Scalars['Int']>;
  mediaId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  episode_not?: Maybe<Scalars['Int']>;
  episode_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  episode_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  episode_greater?: Maybe<Scalars['Int']>;
  episode_lesser?: Maybe<Scalars['Int']>;
  airingAt_greater?: Maybe<Scalars['Int']>;
  airingAt_lesser?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<AiringSort>>>;
};


export type QueryCharacterArgs = {
  id?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sort?: Maybe<ReadonlyArray<Maybe<CharacterSort>>>;
};


export type QueryStaffArgs = {
  id?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sort?: Maybe<ReadonlyArray<Maybe<StaffSort>>>;
};


export type QueryMediaListArgs = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
  type?: Maybe<MediaType>;
  status?: Maybe<MediaListStatus>;
  mediaId?: Maybe<Scalars['Int']>;
  isFollowing?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt?: Maybe<Scalars['FuzzyDateInt']>;
  compareWithAuthList?: Maybe<Scalars['Boolean']>;
  userId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  status_in?: Maybe<ReadonlyArray<Maybe<MediaListStatus>>>;
  status_not_in?: Maybe<ReadonlyArray<Maybe<MediaListStatus>>>;
  status_not?: Maybe<MediaListStatus>;
  mediaId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  notes_like?: Maybe<Scalars['String']>;
  startedAt_greater?: Maybe<Scalars['FuzzyDateInt']>;
  startedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  startedAt_like?: Maybe<Scalars['String']>;
  completedAt_greater?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt_like?: Maybe<Scalars['String']>;
  sort?: Maybe<ReadonlyArray<Maybe<MediaListSort>>>;
};


export type QueryMediaListCollectionArgs = {
  userId?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
  type?: Maybe<MediaType>;
  status?: Maybe<MediaListStatus>;
  notes?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt?: Maybe<Scalars['FuzzyDateInt']>;
  forceSingleCompletedList?: Maybe<Scalars['Boolean']>;
  chunk?: Maybe<Scalars['Int']>;
  perChunk?: Maybe<Scalars['Int']>;
  status_in?: Maybe<ReadonlyArray<Maybe<MediaListStatus>>>;
  status_not_in?: Maybe<ReadonlyArray<Maybe<MediaListStatus>>>;
  status_not?: Maybe<MediaListStatus>;
  notes_like?: Maybe<Scalars['String']>;
  startedAt_greater?: Maybe<Scalars['FuzzyDateInt']>;
  startedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  startedAt_like?: Maybe<Scalars['String']>;
  completedAt_greater?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt_like?: Maybe<Scalars['String']>;
  sort?: Maybe<ReadonlyArray<Maybe<MediaListSort>>>;
};


export type QueryMediaTagCollectionArgs = {
  status?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<ReadonlyArray<Maybe<UserSort>>>;
};


export type QueryNotificationArgs = {
  type?: Maybe<NotificationType>;
  resetNotificationCount?: Maybe<Scalars['Boolean']>;
  type_in?: Maybe<ReadonlyArray<Maybe<NotificationType>>>;
};


export type QueryStudioArgs = {
  id?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sort?: Maybe<ReadonlyArray<Maybe<StudioSort>>>;
};


export type QueryReviewArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  mediaType?: Maybe<MediaType>;
  sort?: Maybe<ReadonlyArray<Maybe<ReviewSort>>>;
};


export type QueryActivityArgs = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  messengerId?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  type?: Maybe<ActivityType>;
  isFollowing?: Maybe<Scalars['Boolean']>;
  hasReplies?: Maybe<Scalars['Boolean']>;
  hasRepliesOrTypeText?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  userId_not?: Maybe<Scalars['Int']>;
  userId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  userId_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  messengerId_not?: Maybe<Scalars['Int']>;
  messengerId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  messengerId_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mediaId_not?: Maybe<Scalars['Int']>;
  mediaId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  type_not?: Maybe<ActivityType>;
  type_in?: Maybe<ReadonlyArray<Maybe<ActivityType>>>;
  type_not_in?: Maybe<ReadonlyArray<Maybe<ActivityType>>>;
  createdAt_greater?: Maybe<Scalars['Int']>;
  createdAt_lesser?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<ActivitySort>>>;
};


export type QueryActivityReplyArgs = {
  id?: Maybe<Scalars['Int']>;
  activityId?: Maybe<Scalars['Int']>;
};


export type QueryFollowingArgs = {
  userId: Scalars['Int'];
  sort?: Maybe<ReadonlyArray<Maybe<UserSort>>>;
};


export type QueryFollowerArgs = {
  userId: Scalars['Int'];
  sort?: Maybe<ReadonlyArray<Maybe<UserSort>>>;
};


export type QueryThreadArgs = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  replyUserId?: Maybe<Scalars['Int']>;
  subscribed?: Maybe<Scalars['Boolean']>;
  categoryId?: Maybe<Scalars['Int']>;
  mediaCategoryId?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sort?: Maybe<ReadonlyArray<Maybe<ThreadSort>>>;
};


export type QueryThreadCommentArgs = {
  id?: Maybe<Scalars['Int']>;
  threadId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<ThreadCommentSort>>>;
};


export type QueryRecommendationArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  mediaRecommendationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  onList?: Maybe<Scalars['Boolean']>;
  rating_greater?: Maybe<Scalars['Int']>;
  rating_lesser?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<RecommendationSort>>>;
};


export type QueryLikeArgs = {
  likeableId?: Maybe<Scalars['Int']>;
  type?: Maybe<LikeableType>;
};


export type QueryMarkdownArgs = {
  markdown: Scalars['String'];
};

/** Page of data */
export type Page = {
  readonly __typename?: 'Page';
  /** The pagination information */
  readonly pageInfo?: Maybe<PageInfo>;
  readonly users?: Maybe<ReadonlyArray<Maybe<User>>>;
  readonly media?: Maybe<ReadonlyArray<Maybe<Media>>>;
  readonly characters?: Maybe<ReadonlyArray<Maybe<Character>>>;
  readonly staff?: Maybe<ReadonlyArray<Maybe<Staff>>>;
  readonly studios?: Maybe<ReadonlyArray<Maybe<Studio>>>;
  readonly mediaList?: Maybe<ReadonlyArray<Maybe<MediaList>>>;
  readonly airingSchedules?: Maybe<ReadonlyArray<Maybe<AiringSchedule>>>;
  readonly mediaTrends?: Maybe<ReadonlyArray<Maybe<MediaTrend>>>;
  readonly notifications?: Maybe<ReadonlyArray<Maybe<NotificationUnion>>>;
  readonly followers?: Maybe<ReadonlyArray<Maybe<User>>>;
  readonly following?: Maybe<ReadonlyArray<Maybe<User>>>;
  readonly activities?: Maybe<ReadonlyArray<Maybe<ActivityUnion>>>;
  readonly activityReplies?: Maybe<ReadonlyArray<Maybe<ActivityReply>>>;
  readonly threads?: Maybe<ReadonlyArray<Maybe<Thread>>>;
  readonly threadComments?: Maybe<ReadonlyArray<Maybe<ThreadComment>>>;
  readonly reviews?: Maybe<ReadonlyArray<Maybe<Review>>>;
  readonly recommendations?: Maybe<ReadonlyArray<Maybe<Recommendation>>>;
  readonly likes?: Maybe<ReadonlyArray<Maybe<User>>>;
};


/** Page of data */
export type PageUsersArgs = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<ReadonlyArray<Maybe<UserSort>>>;
};


/** Page of data */
export type PageMediaArgs = {
  id?: Maybe<Scalars['Int']>;
  idMal?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['FuzzyDateInt']>;
  endDate?: Maybe<Scalars['FuzzyDateInt']>;
  season?: Maybe<MediaSeason>;
  seasonYear?: Maybe<Scalars['Int']>;
  type?: Maybe<MediaType>;
  format?: Maybe<MediaFormat>;
  status?: Maybe<MediaStatus>;
  episodes?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  chapters?: Maybe<Scalars['Int']>;
  volumes?: Maybe<Scalars['Int']>;
  isAdult?: Maybe<Scalars['Boolean']>;
  genre?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  minimumTagRank?: Maybe<Scalars['Int']>;
  tagCategory?: Maybe<Scalars['String']>;
  onList?: Maybe<Scalars['Boolean']>;
  licensedBy?: Maybe<Scalars['String']>;
  averageScore?: Maybe<Scalars['Int']>;
  popularity?: Maybe<Scalars['Int']>;
  source?: Maybe<MediaSource>;
  countryOfOrigin?: Maybe<Scalars['CountryCode']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  idMal_not?: Maybe<Scalars['Int']>;
  idMal_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  idMal_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  startDate_greater?: Maybe<Scalars['FuzzyDateInt']>;
  startDate_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  startDate_like?: Maybe<Scalars['String']>;
  endDate_greater?: Maybe<Scalars['FuzzyDateInt']>;
  endDate_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  endDate_like?: Maybe<Scalars['String']>;
  format_in?: Maybe<ReadonlyArray<Maybe<MediaFormat>>>;
  format_not?: Maybe<MediaFormat>;
  format_not_in?: Maybe<ReadonlyArray<Maybe<MediaFormat>>>;
  status_in?: Maybe<ReadonlyArray<Maybe<MediaStatus>>>;
  status_not?: Maybe<MediaStatus>;
  status_not_in?: Maybe<ReadonlyArray<Maybe<MediaStatus>>>;
  episodes_greater?: Maybe<Scalars['Int']>;
  episodes_lesser?: Maybe<Scalars['Int']>;
  duration_greater?: Maybe<Scalars['Int']>;
  duration_lesser?: Maybe<Scalars['Int']>;
  chapters_greater?: Maybe<Scalars['Int']>;
  chapters_lesser?: Maybe<Scalars['Int']>;
  volumes_greater?: Maybe<Scalars['Int']>;
  volumes_lesser?: Maybe<Scalars['Int']>;
  genre_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  genre_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  tag_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  tag_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  tagCategory_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  tagCategory_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  licensedBy_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  averageScore_not?: Maybe<Scalars['Int']>;
  averageScore_greater?: Maybe<Scalars['Int']>;
  averageScore_lesser?: Maybe<Scalars['Int']>;
  popularity_not?: Maybe<Scalars['Int']>;
  popularity_greater?: Maybe<Scalars['Int']>;
  popularity_lesser?: Maybe<Scalars['Int']>;
  source_in?: Maybe<ReadonlyArray<Maybe<MediaSource>>>;
  sort?: Maybe<ReadonlyArray<Maybe<MediaSort>>>;
};


/** Page of data */
export type PageCharactersArgs = {
  id?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sort?: Maybe<ReadonlyArray<Maybe<CharacterSort>>>;
};


/** Page of data */
export type PageStaffArgs = {
  id?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sort?: Maybe<ReadonlyArray<Maybe<StaffSort>>>;
};


/** Page of data */
export type PageStudiosArgs = {
  id?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sort?: Maybe<ReadonlyArray<Maybe<StudioSort>>>;
};


/** Page of data */
export type PageMediaListArgs = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
  type?: Maybe<MediaType>;
  status?: Maybe<MediaListStatus>;
  mediaId?: Maybe<Scalars['Int']>;
  isFollowing?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt?: Maybe<Scalars['FuzzyDateInt']>;
  compareWithAuthList?: Maybe<Scalars['Boolean']>;
  userId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  status_in?: Maybe<ReadonlyArray<Maybe<MediaListStatus>>>;
  status_not_in?: Maybe<ReadonlyArray<Maybe<MediaListStatus>>>;
  status_not?: Maybe<MediaListStatus>;
  mediaId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  notes_like?: Maybe<Scalars['String']>;
  startedAt_greater?: Maybe<Scalars['FuzzyDateInt']>;
  startedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  startedAt_like?: Maybe<Scalars['String']>;
  completedAt_greater?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt_like?: Maybe<Scalars['String']>;
  sort?: Maybe<ReadonlyArray<Maybe<MediaListSort>>>;
};


/** Page of data */
export type PageAiringSchedulesArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  airingAt?: Maybe<Scalars['Int']>;
  notYetAired?: Maybe<Scalars['Boolean']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mediaId_not?: Maybe<Scalars['Int']>;
  mediaId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  episode_not?: Maybe<Scalars['Int']>;
  episode_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  episode_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  episode_greater?: Maybe<Scalars['Int']>;
  episode_lesser?: Maybe<Scalars['Int']>;
  airingAt_greater?: Maybe<Scalars['Int']>;
  airingAt_lesser?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<AiringSort>>>;
};


/** Page of data */
export type PageMediaTrendsArgs = {
  mediaId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  trending?: Maybe<Scalars['Int']>;
  averageScore?: Maybe<Scalars['Int']>;
  popularity?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  releasing?: Maybe<Scalars['Boolean']>;
  mediaId_not?: Maybe<Scalars['Int']>;
  mediaId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  date_greater?: Maybe<Scalars['Int']>;
  date_lesser?: Maybe<Scalars['Int']>;
  trending_greater?: Maybe<Scalars['Int']>;
  trending_lesser?: Maybe<Scalars['Int']>;
  trending_not?: Maybe<Scalars['Int']>;
  averageScore_greater?: Maybe<Scalars['Int']>;
  averageScore_lesser?: Maybe<Scalars['Int']>;
  averageScore_not?: Maybe<Scalars['Int']>;
  popularity_greater?: Maybe<Scalars['Int']>;
  popularity_lesser?: Maybe<Scalars['Int']>;
  popularity_not?: Maybe<Scalars['Int']>;
  episode_greater?: Maybe<Scalars['Int']>;
  episode_lesser?: Maybe<Scalars['Int']>;
  episode_not?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<MediaTrendSort>>>;
};


/** Page of data */
export type PageNotificationsArgs = {
  type?: Maybe<NotificationType>;
  resetNotificationCount?: Maybe<Scalars['Boolean']>;
  type_in?: Maybe<ReadonlyArray<Maybe<NotificationType>>>;
};


/** Page of data */
export type PageFollowersArgs = {
  userId: Scalars['Int'];
  sort?: Maybe<ReadonlyArray<Maybe<UserSort>>>;
};


/** Page of data */
export type PageFollowingArgs = {
  userId: Scalars['Int'];
  sort?: Maybe<ReadonlyArray<Maybe<UserSort>>>;
};


/** Page of data */
export type PageActivitiesArgs = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  messengerId?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  type?: Maybe<ActivityType>;
  isFollowing?: Maybe<Scalars['Boolean']>;
  hasReplies?: Maybe<Scalars['Boolean']>;
  hasRepliesOrTypeText?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  userId_not?: Maybe<Scalars['Int']>;
  userId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  userId_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  messengerId_not?: Maybe<Scalars['Int']>;
  messengerId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  messengerId_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mediaId_not?: Maybe<Scalars['Int']>;
  mediaId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  type_not?: Maybe<ActivityType>;
  type_in?: Maybe<ReadonlyArray<Maybe<ActivityType>>>;
  type_not_in?: Maybe<ReadonlyArray<Maybe<ActivityType>>>;
  createdAt_greater?: Maybe<Scalars['Int']>;
  createdAt_lesser?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<ActivitySort>>>;
};


/** Page of data */
export type PageActivityRepliesArgs = {
  id?: Maybe<Scalars['Int']>;
  activityId?: Maybe<Scalars['Int']>;
};


/** Page of data */
export type PageThreadsArgs = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  replyUserId?: Maybe<Scalars['Int']>;
  subscribed?: Maybe<Scalars['Boolean']>;
  categoryId?: Maybe<Scalars['Int']>;
  mediaCategoryId?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sort?: Maybe<ReadonlyArray<Maybe<ThreadSort>>>;
};


/** Page of data */
export type PageThreadCommentsArgs = {
  id?: Maybe<Scalars['Int']>;
  threadId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<ThreadCommentSort>>>;
};


/** Page of data */
export type PageReviewsArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  mediaType?: Maybe<MediaType>;
  sort?: Maybe<ReadonlyArray<Maybe<ReviewSort>>>;
};


/** Page of data */
export type PageRecommendationsArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  mediaRecommendationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  onList?: Maybe<Scalars['Boolean']>;
  rating_greater?: Maybe<Scalars['Int']>;
  rating_lesser?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<RecommendationSort>>>;
};


/** Page of data */
export type PageLikesArgs = {
  likeableId?: Maybe<Scalars['Int']>;
  type?: Maybe<LikeableType>;
};

export type PageInfo = {
  readonly __typename?: 'PageInfo';
  /** The total number of items */
  readonly total?: Maybe<Scalars['Int']>;
  /** The count on a page */
  readonly perPage?: Maybe<Scalars['Int']>;
  /** The current page */
  readonly currentPage?: Maybe<Scalars['Int']>;
  /** The last page */
  readonly lastPage?: Maybe<Scalars['Int']>;
  /** If there is another page */
  readonly hasNextPage?: Maybe<Scalars['Boolean']>;
};

/** User sort enums */
export const enum UserSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Username = 'USERNAME',
  UsernameDesc = 'USERNAME_DESC',
  WatchedTime = 'WATCHED_TIME',
  WatchedTimeDesc = 'WATCHED_TIME_DESC',
  ChaptersRead = 'CHAPTERS_READ',
  ChaptersReadDesc = 'CHAPTERS_READ_DESC',
  SearchMatch = 'SEARCH_MATCH'
};

/** A user */
export type User = {
  readonly __typename?: 'User';
  /** The id of the user */
  readonly id: Scalars['Int'];
  /** The name of the user */
  readonly name: Scalars['String'];
  /** The bio written by user (Markdown) */
  readonly about?: Maybe<Scalars['String']>;
  /** The user's avatar images */
  readonly avatar?: Maybe<UserAvatar>;
  /** The user's banner images */
  readonly bannerImage?: Maybe<Scalars['String']>;
  /** If the authenticated user if following this user */
  readonly isFollowing?: Maybe<Scalars['Boolean']>;
  /** If this user if following the authenticated user */
  readonly isFollower?: Maybe<Scalars['Boolean']>;
  /** If the user is blocked by the authenticated user */
  readonly isBlocked?: Maybe<Scalars['Boolean']>;
  readonly bans?: Maybe<Scalars['Json']>;
  /** The user's general options */
  readonly options?: Maybe<UserOptions>;
  /** The user's media list options */
  readonly mediaListOptions?: Maybe<MediaListOptions>;
  /** The users favourites */
  readonly favourites?: Maybe<Favourites>;
  /** The users anime & manga list statistics */
  readonly statistics?: Maybe<UserStatisticTypes>;
  /** The number of unread notifications the user has */
  readonly unreadNotificationCount?: Maybe<Scalars['Int']>;
  /** The url for the user page on the AniList website */
  readonly siteUrl?: Maybe<Scalars['String']>;
  /** The donation tier of the user */
  readonly donatorTier?: Maybe<Scalars['Int']>;
  /** Custom donation badge text */
  readonly donatorBadge?: Maybe<Scalars['String']>;
  /** If the user is a moderator or data moderator */
  readonly moderatorStatus?: Maybe<Scalars['String']>;
  /** When the user's data was last updated */
  readonly updatedAt?: Maybe<Scalars['Int']>;
  /**
   * The user's statistics
   * @deprecated Deprecated. Replaced with statistics field.
   */
  readonly stats?: Maybe<UserStats>;
};


/** A user */
export type UserAboutArgs = {
  asHtml?: Maybe<Scalars['Boolean']>;
};


/** A user */
export type UserFavouritesArgs = {
  page?: Maybe<Scalars['Int']>;
};

/** A user's avatars */
export type UserAvatar = {
  readonly __typename?: 'UserAvatar';
  /** The avatar of user at its largest size */
  readonly large?: Maybe<Scalars['String']>;
  /** The avatar of user at medium size */
  readonly medium?: Maybe<Scalars['String']>;
};


/** A user's general options */
export type UserOptions = {
  readonly __typename?: 'UserOptions';
  /** The language the user wants to see media titles in */
  readonly titleLanguage?: Maybe<UserTitleLanguage>;
  /** Whether the user has enabled viewing of 18+ content */
  readonly displayAdultContent?: Maybe<Scalars['Boolean']>;
  /** Whether the user receives notifications when a show they are watching aires */
  readonly airingNotifications?: Maybe<Scalars['Boolean']>;
  /** Profile highlight color (blue, purple, pink, orange, red, green, gray) */
  readonly profileColor?: Maybe<Scalars['String']>;
  /** Notification options */
  readonly notificationOptions?: Maybe<ReadonlyArray<Maybe<NotificationOption>>>;
};

/** The language the user wants to see media titles in */
export const enum UserTitleLanguage {
  /** The romanization of the native language title */
  Romaji = 'ROMAJI',
  /** The official english title */
  English = 'ENGLISH',
  /** Official title in it's native language */
  Native = 'NATIVE',
  /** The romanization of the native language title, stylised by media creator */
  RomajiStylised = 'ROMAJI_STYLISED',
  /** The official english title, stylised by media creator */
  EnglishStylised = 'ENGLISH_STYLISED',
  /** Official title in it's native language, stylised by media creator */
  NativeStylised = 'NATIVE_STYLISED'
};

/** Notification option */
export type NotificationOption = {
  readonly __typename?: 'NotificationOption';
  /** The type of notification */
  readonly type?: Maybe<NotificationType>;
  /** Whether this type of notification is enabled */
  readonly enabled?: Maybe<Scalars['Boolean']>;
};

/** Notification type enum */
export const enum NotificationType {
  /** A user has sent you message */
  ActivityMessage = 'ACTIVITY_MESSAGE',
  /** A user has replied to your activity */
  ActivityReply = 'ACTIVITY_REPLY',
  /** A user has followed you */
  Following = 'FOLLOWING',
  /** A user has mentioned you in their activity */
  ActivityMention = 'ACTIVITY_MENTION',
  /** A user has mentioned you in a forum comment */
  ThreadCommentMention = 'THREAD_COMMENT_MENTION',
  /** A user has commented in one of your subscribed forum threads */
  ThreadSubscribed = 'THREAD_SUBSCRIBED',
  /** A user has replied to your forum comment */
  ThreadCommentReply = 'THREAD_COMMENT_REPLY',
  /** An anime you are currently watching has aired */
  Airing = 'AIRING',
  /** A user has liked your activity */
  ActivityLike = 'ACTIVITY_LIKE',
  /** A user has liked your activity reply */
  ActivityReplyLike = 'ACTIVITY_REPLY_LIKE',
  /** A user has liked your forum thread */
  ThreadLike = 'THREAD_LIKE',
  /** A user has liked your forum comment */
  ThreadCommentLike = 'THREAD_COMMENT_LIKE',
  /** A user has replied to activity you have also replied to */
  ActivityReplySubscribed = 'ACTIVITY_REPLY_SUBSCRIBED',
  /** A new anime or manga has been added to the site where its related media is on the user's list */
  RelatedMediaAddition = 'RELATED_MEDIA_ADDITION'
};

/** A user's list options */
export type MediaListOptions = {
  readonly __typename?: 'MediaListOptions';
  /** The score format the user is using for media lists */
  readonly scoreFormat?: Maybe<ScoreFormat>;
  /** The default order list rows should be displayed in */
  readonly rowOrder?: Maybe<Scalars['String']>;
  /** (Site only) If the user should be using legacy css-supporting list versions */
  readonly useLegacyLists?: Maybe<Scalars['Boolean']>;
  /** The user's anime list options */
  readonly animeList?: Maybe<MediaListTypeOptions>;
  /** The user's manga list options */
  readonly mangaList?: Maybe<MediaListTypeOptions>;
  /**
   * The list theme options for both lists
   * @deprecated No longer used
   */
  readonly sharedTheme?: Maybe<Scalars['Json']>;
  /**
   * If the shared theme should be used instead of the individual list themes
   * @deprecated No longer used
   */
  readonly sharedThemeEnabled?: Maybe<Scalars['Boolean']>;
};

/** Media list scoring type */
export const enum ScoreFormat {
  /** An integer from 0-100 */
  Point_100 = 'POINT_100',
  /** A float from 0-10 with 1 decimal place */
  Point_10Decimal = 'POINT_10_DECIMAL',
  /** An integer from 0-10 */
  Point_10 = 'POINT_10',
  /** An integer from 0-5. Should be represented in Stars */
  Point_5 = 'POINT_5',
  /** An integer from 0-3. Should be represented in Smileys. 0 => No Score, 1 => :(, 2 => :|, 3 => :) */
  Point_3 = 'POINT_3'
};

/** A user's list options for anime or manga lists */
export type MediaListTypeOptions = {
  readonly __typename?: 'MediaListTypeOptions';
  /** The order each list should be displayed in */
  readonly sectionOrder?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** If the completed sections of the list should be separated by format */
  readonly splitCompletedSectionByFormat?: Maybe<Scalars['Boolean']>;
  /**
   * The list theme options
   * @deprecated This field has not yet been fully implemented and may change without warning
   */
  readonly theme?: Maybe<Scalars['Json']>;
  /** The names of the user's custom lists */
  readonly customLists?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The names of the user's advanced scoring sections */
  readonly advancedScoring?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** If advanced scoring is enabled */
  readonly advancedScoringEnabled?: Maybe<Scalars['Boolean']>;
};

/** User's favourite anime, manga, characters, staff & studios */
export type Favourites = {
  readonly __typename?: 'Favourites';
  /** Favourite anime */
  readonly anime?: Maybe<MediaConnection>;
  /** Favourite manga */
  readonly manga?: Maybe<MediaConnection>;
  /** Favourite characters */
  readonly characters?: Maybe<CharacterConnection>;
  /** Favourite staff */
  readonly staff?: Maybe<StaffConnection>;
  /** Favourite studios */
  readonly studios?: Maybe<StudioConnection>;
};


/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesAnimeArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesMangaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesCharactersArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesStaffArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesStudiosArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};

export type MediaConnection = {
  readonly __typename?: 'MediaConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<MediaEdge>>>;
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Media>>>;
  /** The pagination information */
  readonly pageInfo?: Maybe<PageInfo>;
};

/** Media connection edge */
export type MediaEdge = {
  readonly __typename?: 'MediaEdge';
  readonly node?: Maybe<Media>;
  /** The id of the connection */
  readonly id?: Maybe<Scalars['Int']>;
  /** The type of relation to the parent model */
  readonly relationType?: Maybe<MediaRelation>;
  /** If the studio is the main animation studio of the media (For Studio->MediaConnection field only) */
  readonly isMainStudio: Scalars['Boolean'];
  /** The characters in the media voiced by the parent actor */
  readonly characters?: Maybe<ReadonlyArray<Maybe<Character>>>;
  /** The characters role in the media */
  readonly characterRole?: Maybe<CharacterRole>;
  /** The role of the staff member in the production of the media */
  readonly staffRole?: Maybe<Scalars['String']>;
  /** The voice actors of the character */
  readonly voiceActors?: Maybe<ReadonlyArray<Maybe<Staff>>>;
  /** The order the media should be displayed from the users favourites */
  readonly favouriteOrder?: Maybe<Scalars['Int']>;
};


/** Media connection edge */
export type MediaEdgeRelationTypeArgs = {
  version?: Maybe<Scalars['Int']>;
};


/** Media connection edge */
export type MediaEdgeVoiceActorsArgs = {
  language?: Maybe<StaffLanguage>;
  sort?: Maybe<ReadonlyArray<Maybe<StaffSort>>>;
};

/** Anime or Manga */
export type Media = {
  readonly __typename?: 'Media';
  /** The id of the media */
  readonly id: Scalars['Int'];
  /** The mal id of the media */
  readonly idMal?: Maybe<Scalars['Int']>;
  /** The official titles of the media in various languages */
  readonly title?: Maybe<MediaTitle>;
  /** The type of the media; anime or manga */
  readonly type?: Maybe<MediaType>;
  /** The format the media was released in */
  readonly format?: Maybe<MediaFormat>;
  /** The current releasing status of the media */
  readonly status?: Maybe<MediaStatus>;
  /** Short description of the media's story and characters */
  readonly description?: Maybe<Scalars['String']>;
  /** The first official release date of the media */
  readonly startDate?: Maybe<FuzzyDate>;
  /** The last official release date of the media */
  readonly endDate?: Maybe<FuzzyDate>;
  /** The season the media was initially released in */
  readonly season?: Maybe<MediaSeason>;
  /** The season year the media was initially released in */
  readonly seasonYear?: Maybe<Scalars['Int']>;
  /**
   * The year & season the media was initially released in
   * @deprecated 
   */
  readonly seasonInt?: Maybe<Scalars['Int']>;
  /** The amount of episodes the anime has when complete */
  readonly episodes?: Maybe<Scalars['Int']>;
  /** The general length of each anime episode in minutes */
  readonly duration?: Maybe<Scalars['Int']>;
  /** The amount of chapters the manga has when complete */
  readonly chapters?: Maybe<Scalars['Int']>;
  /** The amount of volumes the manga has when complete */
  readonly volumes?: Maybe<Scalars['Int']>;
  /** Where the media was created. (ISO 3166-1 alpha-2) */
  readonly countryOfOrigin?: Maybe<Scalars['CountryCode']>;
  /** If the media is officially licensed or a self-published doujin release */
  readonly isLicensed?: Maybe<Scalars['Boolean']>;
  /** Source type the media was adapted from. */
  readonly source?: Maybe<MediaSource>;
  /** Official Twitter hashtags for the media */
  readonly hashtag?: Maybe<Scalars['String']>;
  /** Media trailer or advertisement */
  readonly trailer?: Maybe<MediaTrailer>;
  /** When the media's data was last updated */
  readonly updatedAt?: Maybe<Scalars['Int']>;
  /** The cover images of the media */
  readonly coverImage?: Maybe<MediaCoverImage>;
  /** The banner image of the media */
  readonly bannerImage?: Maybe<Scalars['String']>;
  /** The genres of the media */
  readonly genres?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Alternative titles of the media */
  readonly synonyms?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** A weighted average score of all the user's scores of the media */
  readonly averageScore?: Maybe<Scalars['Int']>;
  /** Mean score of all the user's scores of the media */
  readonly meanScore?: Maybe<Scalars['Int']>;
  /** The number of users with the media on their list */
  readonly popularity?: Maybe<Scalars['Int']>;
  /** Locked media may not be added to lists our favorited. This may be due to the entry pending for deletion or other reasons. */
  readonly isLocked?: Maybe<Scalars['Boolean']>;
  /** The amount of related activity in the past hour */
  readonly trending?: Maybe<Scalars['Int']>;
  /** The amount of user's who have favourited the media */
  readonly favourites?: Maybe<Scalars['Int']>;
  /** List of tags that describes elements and themes of the media */
  readonly tags?: Maybe<ReadonlyArray<Maybe<MediaTag>>>;
  /** Other media in the same or connecting franchise */
  readonly relations?: Maybe<MediaConnection>;
  /** The characters in the media */
  readonly characters?: Maybe<CharacterConnection>;
  /** The staff who produced the media */
  readonly staff?: Maybe<StaffConnection>;
  /** The companies who produced the media */
  readonly studios?: Maybe<StudioConnection>;
  /** If the media is marked as favourite by the current authenticated user */
  readonly isFavourite: Scalars['Boolean'];
  /** If the media is intended only for 18+ adult audiences */
  readonly isAdult?: Maybe<Scalars['Boolean']>;
  /** The media's next episode airing schedule */
  readonly nextAiringEpisode?: Maybe<AiringSchedule>;
  /** The media's entire airing schedule */
  readonly airingSchedule?: Maybe<AiringScheduleConnection>;
  /** The media's daily trend stats */
  readonly trends?: Maybe<MediaTrendConnection>;
  /** External links to another site related to the media */
  readonly externalLinks?: Maybe<ReadonlyArray<Maybe<MediaExternalLink>>>;
  /** Data and links to legal streaming episodes on external sites */
  readonly streamingEpisodes?: Maybe<ReadonlyArray<Maybe<MediaStreamingEpisode>>>;
  /** The ranking of the media in a particular time span and format compared to other media */
  readonly rankings?: Maybe<ReadonlyArray<Maybe<MediaRank>>>;
  /** The authenticated user's media list entry for the media */
  readonly mediaListEntry?: Maybe<MediaList>;
  /** User reviews of the media */
  readonly reviews?: Maybe<ReviewConnection>;
  /** User recommendations for similar media */
  readonly recommendations?: Maybe<RecommendationConnection>;
  readonly stats?: Maybe<MediaStats>;
  /** The url for the media page on the AniList website */
  readonly siteUrl?: Maybe<Scalars['String']>;
  /** If the media should have forum thread automatically created for it on airing episode release */
  readonly autoCreateForumThread?: Maybe<Scalars['Boolean']>;
  /** If the media is blocked from being recommended to/from */
  readonly isRecommendationBlocked?: Maybe<Scalars['Boolean']>;
  /** Notes for site moderators */
  readonly modNotes?: Maybe<Scalars['String']>;
};


/** Anime or Manga */
export type MediaDescriptionArgs = {
  asHtml?: Maybe<Scalars['Boolean']>;
};


/** Anime or Manga */
export type MediaSourceArgs = {
  version?: Maybe<Scalars['Int']>;
};


/** Anime or Manga */
export type MediaCharactersArgs = {
  sort?: Maybe<ReadonlyArray<Maybe<CharacterSort>>>;
  role?: Maybe<CharacterRole>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


/** Anime or Manga */
export type MediaStaffArgs = {
  sort?: Maybe<ReadonlyArray<Maybe<StaffSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


/** Anime or Manga */
export type MediaStudiosArgs = {
  sort?: Maybe<ReadonlyArray<Maybe<StudioSort>>>;
  isMain?: Maybe<Scalars['Boolean']>;
};


/** Anime or Manga */
export type MediaAiringScheduleArgs = {
  notYetAired?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


/** Anime or Manga */
export type MediaTrendsArgs = {
  sort?: Maybe<ReadonlyArray<Maybe<MediaTrendSort>>>;
  releasing?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


/** Anime or Manga */
export type MediaReviewsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<ReviewSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


/** Anime or Manga */
export type MediaRecommendationsArgs = {
  sort?: Maybe<ReadonlyArray<Maybe<RecommendationSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};

/** The official titles of the media in various languages */
export type MediaTitle = {
  readonly __typename?: 'MediaTitle';
  /** The romanization of the native language title */
  readonly romaji?: Maybe<Scalars['String']>;
  /** The official english title */
  readonly english?: Maybe<Scalars['String']>;
  /** Official title in it's native language */
  readonly native?: Maybe<Scalars['String']>;
  /** The currently authenticated users preferred title language. Default romaji for non-authenticated */
  readonly userPreferred?: Maybe<Scalars['String']>;
};


/** The official titles of the media in various languages */
export type MediaTitleRomajiArgs = {
  stylised?: Maybe<Scalars['Boolean']>;
};


/** The official titles of the media in various languages */
export type MediaTitleEnglishArgs = {
  stylised?: Maybe<Scalars['Boolean']>;
};


/** The official titles of the media in various languages */
export type MediaTitleNativeArgs = {
  stylised?: Maybe<Scalars['Boolean']>;
};

/** Media type enum, anime or manga. */
export const enum MediaType {
  /** Japanese Anime */
  Anime = 'ANIME',
  /** Asian comic */
  Manga = 'MANGA'
};

/** The format the media was released in */
export const enum MediaFormat {
  /** Anime broadcast on television */
  Tv = 'TV',
  /** Anime which are under 15 minutes in length and broadcast on television */
  TvShort = 'TV_SHORT',
  /** Anime movies with a theatrical release */
  Movie = 'MOVIE',
  /** Special episodes that have been included in DVD/Blu-ray releases, picture dramas, pilots, etc */
  Special = 'SPECIAL',
  /** (Original Video Animation) Anime that have been released directly on DVD/Blu-ray without originally going through a theatrical release or television broadcast */
  Ova = 'OVA',
  /** (Original Net Animation) Anime that have been originally released online or are only available through streaming services. */
  Ona = 'ONA',
  /** Short anime released as a music video */
  Music = 'MUSIC',
  /** Professionally published manga with more than one chapter */
  Manga = 'MANGA',
  /** Written books released as a series of light novels */
  Novel = 'NOVEL',
  /** Manga with just one chapter */
  OneShot = 'ONE_SHOT'
};

/** The current releasing status of the media */
export const enum MediaStatus {
  /** Has completed and is no longer being released */
  Finished = 'FINISHED',
  /** Currently releasing */
  Releasing = 'RELEASING',
  /** To be released at a later date */
  NotYetReleased = 'NOT_YET_RELEASED',
  /** Ended before the work could be finished */
  Cancelled = 'CANCELLED'
};

/** Date object that allows for incomplete date values (fuzzy) */
export type FuzzyDate = {
  readonly __typename?: 'FuzzyDate';
  /** Numeric Year (2017) */
  readonly year?: Maybe<Scalars['Int']>;
  /** Numeric Month (3) */
  readonly month?: Maybe<Scalars['Int']>;
  /** Numeric Day (24) */
  readonly day?: Maybe<Scalars['Int']>;
};

export const enum MediaSeason {
  /** Months December to February */
  Winter = 'WINTER',
  /** Months March to May */
  Spring = 'SPRING',
  /** Months June to August */
  Summer = 'SUMMER',
  /** Months September to November */
  Fall = 'FALL'
};


/** Source type the media was adapted from */
export const enum MediaSource {
  /** An original production not based of another work */
  Original = 'ORIGINAL',
  /** Asian comic book */
  Manga = 'MANGA',
  /** Written work published in volumes */
  LightNovel = 'LIGHT_NOVEL',
  /** Video game driven primary by text and narrative */
  VisualNovel = 'VISUAL_NOVEL',
  /** Video game */
  VideoGame = 'VIDEO_GAME',
  /** Other */
  Other = 'OTHER',
  /** Version 2 only. Written works not published in volumes */
  Novel = 'NOVEL',
  /** Version 2 only. Self-published works */
  Doujinshi = 'DOUJINSHI',
  /** Version 2 only. Japanese Anime */
  Anime = 'ANIME'
};

/** Media trailer or advertisement */
export type MediaTrailer = {
  readonly __typename?: 'MediaTrailer';
  /** The trailer video id */
  readonly id?: Maybe<Scalars['String']>;
  /** The site the video is hosted by (Currently either youtube or dailymotion) */
  readonly site?: Maybe<Scalars['String']>;
  /** The url for the thumbnail image of the video */
  readonly thumbnail?: Maybe<Scalars['String']>;
};

export type MediaCoverImage = {
  readonly __typename?: 'MediaCoverImage';
  /** The cover image url of the media at its largest size. If this size isn't available, large will be provided instead. */
  readonly extraLarge?: Maybe<Scalars['String']>;
  /** The cover image url of the media at a large size */
  readonly large?: Maybe<Scalars['String']>;
  /** The cover image url of the media at medium size */
  readonly medium?: Maybe<Scalars['String']>;
  /** Average #hex color of cover image */
  readonly color?: Maybe<Scalars['String']>;
};

/** A tag that describes a theme or element of the media */
export type MediaTag = {
  readonly __typename?: 'MediaTag';
  /** The id of the tag */
  readonly id: Scalars['Int'];
  /** The name of the tag */
  readonly name: Scalars['String'];
  /** A general description of the tag */
  readonly description?: Maybe<Scalars['String']>;
  /** The categories of tags this tag belongs to */
  readonly category?: Maybe<Scalars['String']>;
  /** The relevance ranking of the tag out of the 100 for this media */
  readonly rank?: Maybe<Scalars['Int']>;
  /** If the tag could be a spoiler for any media */
  readonly isGeneralSpoiler?: Maybe<Scalars['Boolean']>;
  /** If the tag is a spoiler for this media */
  readonly isMediaSpoiler?: Maybe<Scalars['Boolean']>;
  /** If the tag is only for adult 18+ media */
  readonly isAdult?: Maybe<Scalars['Boolean']>;
};

/** Character sort enums */
export const enum CharacterSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Role = 'ROLE',
  RoleDesc = 'ROLE_DESC',
  SearchMatch = 'SEARCH_MATCH',
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC'
};

/** The role the character plays in the media */
export const enum CharacterRole {
  /** A primary character role in the media */
  Main = 'MAIN',
  /** A supporting character role in the media */
  Supporting = 'SUPPORTING',
  /** A background character in the media */
  Background = 'BACKGROUND'
};

export type CharacterConnection = {
  readonly __typename?: 'CharacterConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<CharacterEdge>>>;
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Character>>>;
  /** The pagination information */
  readonly pageInfo?: Maybe<PageInfo>;
};

/** Character connection edge */
export type CharacterEdge = {
  readonly __typename?: 'CharacterEdge';
  readonly node?: Maybe<Character>;
  /** The id of the connection */
  readonly id?: Maybe<Scalars['Int']>;
  /** The characters role in the media */
  readonly role?: Maybe<CharacterRole>;
  /** The voice actors of the character */
  readonly voiceActors?: Maybe<ReadonlyArray<Maybe<Staff>>>;
  /** The media the character is in */
  readonly media?: Maybe<ReadonlyArray<Maybe<Media>>>;
  /** The order the character should be displayed from the users favourites */
  readonly favouriteOrder?: Maybe<Scalars['Int']>;
};


/** Character connection edge */
export type CharacterEdgeVoiceActorsArgs = {
  language?: Maybe<StaffLanguage>;
  sort?: Maybe<ReadonlyArray<Maybe<StaffSort>>>;
};

/** A character that features in an anime or manga */
export type Character = {
  readonly __typename?: 'Character';
  /** The id of the character */
  readonly id: Scalars['Int'];
  /** The names of the character */
  readonly name?: Maybe<CharacterName>;
  /** Character images */
  readonly image?: Maybe<CharacterImage>;
  /** A general description of the character */
  readonly description?: Maybe<Scalars['String']>;
  /** If the character is marked as favourite by the currently authenticated user */
  readonly isFavourite: Scalars['Boolean'];
  /** The url for the character page on the AniList website */
  readonly siteUrl?: Maybe<Scalars['String']>;
  /** Media that includes the character */
  readonly media?: Maybe<MediaConnection>;
  /** @deprecated No data available */
  readonly updatedAt?: Maybe<Scalars['Int']>;
  /** The amount of user's who have favourited the character */
  readonly favourites?: Maybe<Scalars['Int']>;
  /** Notes for site moderators */
  readonly modNotes?: Maybe<Scalars['String']>;
};


/** A character that features in an anime or manga */
export type CharacterDescriptionArgs = {
  asHtml?: Maybe<Scalars['Boolean']>;
};


/** A character that features in an anime or manga */
export type CharacterMediaArgs = {
  sort?: Maybe<ReadonlyArray<Maybe<MediaSort>>>;
  type?: Maybe<MediaType>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};

/** The names of the character */
export type CharacterName = {
  readonly __typename?: 'CharacterName';
  /** The character's given name */
  readonly first?: Maybe<Scalars['String']>;
  /** The character's surname */
  readonly last?: Maybe<Scalars['String']>;
  /** The character's full name */
  readonly full?: Maybe<Scalars['String']>;
  /** The character's full name in their native language */
  readonly native?: Maybe<Scalars['String']>;
  /** Other names the character might be referred to as */
  readonly alternative?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type CharacterImage = {
  readonly __typename?: 'CharacterImage';
  /** The character's image of media at its largest size */
  readonly large?: Maybe<Scalars['String']>;
  /** The character's image of media at medium size */
  readonly medium?: Maybe<Scalars['String']>;
};

/** Media sort enums */
export const enum MediaSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  TitleRomaji = 'TITLE_ROMAJI',
  TitleRomajiDesc = 'TITLE_ROMAJI_DESC',
  TitleEnglish = 'TITLE_ENGLISH',
  TitleEnglishDesc = 'TITLE_ENGLISH_DESC',
  TitleNative = 'TITLE_NATIVE',
  TitleNativeDesc = 'TITLE_NATIVE_DESC',
  Type = 'TYPE',
  TypeDesc = 'TYPE_DESC',
  Format = 'FORMAT',
  FormatDesc = 'FORMAT_DESC',
  StartDate = 'START_DATE',
  StartDateDesc = 'START_DATE_DESC',
  EndDate = 'END_DATE',
  EndDateDesc = 'END_DATE_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  Popularity = 'POPULARITY',
  PopularityDesc = 'POPULARITY_DESC',
  Trending = 'TRENDING',
  TrendingDesc = 'TRENDING_DESC',
  Episodes = 'EPISODES',
  EpisodesDesc = 'EPISODES_DESC',
  Duration = 'DURATION',
  DurationDesc = 'DURATION_DESC',
  Status = 'STATUS',
  StatusDesc = 'STATUS_DESC',
  Chapters = 'CHAPTERS',
  ChaptersDesc = 'CHAPTERS_DESC',
  Volumes = 'VOLUMES',
  VolumesDesc = 'VOLUMES_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  SearchMatch = 'SEARCH_MATCH',
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC'
};

/** The primary language of the voice actor */
export const enum StaffLanguage {
  /** Japanese */
  Japanese = 'JAPANESE',
  /** English */
  English = 'ENGLISH',
  /** Korean */
  Korean = 'KOREAN',
  /** Italian */
  Italian = 'ITALIAN',
  /** Spanish */
  Spanish = 'SPANISH',
  /** Portuguese */
  Portuguese = 'PORTUGUESE',
  /** French */
  French = 'FRENCH',
  /** German */
  German = 'GERMAN',
  /** Hebrew */
  Hebrew = 'HEBREW',
  /** Hungarian */
  Hungarian = 'HUNGARIAN'
};

/** Staff sort enums */
export const enum StaffSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Role = 'ROLE',
  RoleDesc = 'ROLE_DESC',
  Language = 'LANGUAGE',
  LanguageDesc = 'LANGUAGE_DESC',
  SearchMatch = 'SEARCH_MATCH',
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC'
};

/** Voice actors or production staff */
export type Staff = {
  readonly __typename?: 'Staff';
  /** The id of the staff member */
  readonly id: Scalars['Int'];
  /** The names of the staff member */
  readonly name?: Maybe<StaffName>;
  /** The primary language of the staff member */
  readonly language?: Maybe<StaffLanguage>;
  /** The staff images */
  readonly image?: Maybe<StaffImage>;
  /** A general description of the staff member */
  readonly description?: Maybe<Scalars['String']>;
  /** If the staff member is marked as favourite by the currently authenticated user */
  readonly isFavourite: Scalars['Boolean'];
  /** The url for the staff page on the AniList website */
  readonly siteUrl?: Maybe<Scalars['String']>;
  /** Media where the staff member has a production role */
  readonly staffMedia?: Maybe<MediaConnection>;
  /** Characters voiced by the actor */
  readonly characters?: Maybe<CharacterConnection>;
  /** @deprecated No data available */
  readonly updatedAt?: Maybe<Scalars['Int']>;
  /** Staff member that the submission is referencing */
  readonly staff?: Maybe<Staff>;
  /** Submitter for the submission */
  readonly submitter?: Maybe<User>;
  /** Status of the submission */
  readonly submissionStatus?: Maybe<Scalars['Int']>;
  /** Inner details of submission status */
  readonly submissionNotes?: Maybe<Scalars['String']>;
  /** The amount of user's who have favourited the staff member */
  readonly favourites?: Maybe<Scalars['Int']>;
  /** Notes for site moderators */
  readonly modNotes?: Maybe<Scalars['String']>;
};


/** Voice actors or production staff */
export type StaffDescriptionArgs = {
  asHtml?: Maybe<Scalars['Boolean']>;
};


/** Voice actors or production staff */
export type StaffStaffMediaArgs = {
  sort?: Maybe<ReadonlyArray<Maybe<MediaSort>>>;
  type?: Maybe<MediaType>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


/** Voice actors or production staff */
export type StaffCharactersArgs = {
  sort?: Maybe<ReadonlyArray<Maybe<CharacterSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};

/** The names of the staff member */
export type StaffName = {
  readonly __typename?: 'StaffName';
  /** The person's given name */
  readonly first?: Maybe<Scalars['String']>;
  /** The person's surname */
  readonly last?: Maybe<Scalars['String']>;
  /** The person's full name */
  readonly full?: Maybe<Scalars['String']>;
  /** The person's full name in their native language */
  readonly native?: Maybe<Scalars['String']>;
  /** Other names the staff member might be referred to as (pen names) */
  readonly alternative?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type StaffImage = {
  readonly __typename?: 'StaffImage';
  /** The person's image of media at its largest size */
  readonly large?: Maybe<Scalars['String']>;
  /** The person's image of media at medium size */
  readonly medium?: Maybe<Scalars['String']>;
};

export type StaffConnection = {
  readonly __typename?: 'StaffConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<StaffEdge>>>;
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Staff>>>;
  /** The pagination information */
  readonly pageInfo?: Maybe<PageInfo>;
};

/** Staff connection edge */
export type StaffEdge = {
  readonly __typename?: 'StaffEdge';
  readonly node?: Maybe<Staff>;
  /** The id of the connection */
  readonly id?: Maybe<Scalars['Int']>;
  /** The role of the staff member in the production of the media */
  readonly role?: Maybe<Scalars['String']>;
  /** The order the staff should be displayed from the users favourites */
  readonly favouriteOrder?: Maybe<Scalars['Int']>;
};

/** Studio sort enums */
export const enum StudioSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Name = 'NAME',
  NameDesc = 'NAME_DESC',
  SearchMatch = 'SEARCH_MATCH',
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC'
};

export type StudioConnection = {
  readonly __typename?: 'StudioConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<StudioEdge>>>;
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Studio>>>;
  /** The pagination information */
  readonly pageInfo?: Maybe<PageInfo>;
};

/** Studio connection edge */
export type StudioEdge = {
  readonly __typename?: 'StudioEdge';
  readonly node?: Maybe<Studio>;
  /** The id of the connection */
  readonly id?: Maybe<Scalars['Int']>;
  /** If the studio is the main animation studio of the anime */
  readonly isMain: Scalars['Boolean'];
  /** The order the character should be displayed from the users favourites */
  readonly favouriteOrder?: Maybe<Scalars['Int']>;
};

/** Animation or production company */
export type Studio = {
  readonly __typename?: 'Studio';
  /** The id of the studio */
  readonly id: Scalars['Int'];
  /** The name of the studio */
  readonly name: Scalars['String'];
  /** If the studio is an animation studio or a different kind of company */
  readonly isAnimationStudio: Scalars['Boolean'];
  /** The media the studio has worked on */
  readonly media?: Maybe<MediaConnection>;
  /** The url for the studio page on the AniList website */
  readonly siteUrl?: Maybe<Scalars['String']>;
  /** If the studio is marked as favourite by the currently authenticated user */
  readonly isFavourite: Scalars['Boolean'];
  /** The amount of user's who have favourited the studio */
  readonly favourites?: Maybe<Scalars['Int']>;
};


/** Animation or production company */
export type StudioMediaArgs = {
  sort?: Maybe<ReadonlyArray<Maybe<MediaSort>>>;
  isMain?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};

/** Media Airing Schedule */
export type AiringSchedule = {
  readonly __typename?: 'AiringSchedule';
  /** The id of the airing schedule item */
  readonly id: Scalars['Int'];
  /** The time the episode airs at */
  readonly airingAt: Scalars['Int'];
  /** Seconds until episode starts airing */
  readonly timeUntilAiring: Scalars['Int'];
  /** The airing episode number */
  readonly episode: Scalars['Int'];
  /** The associate media id of the airing episode */
  readonly mediaId: Scalars['Int'];
  /** The associate media of the airing episode */
  readonly media?: Maybe<Media>;
};

export type AiringScheduleConnection = {
  readonly __typename?: 'AiringScheduleConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<AiringScheduleEdge>>>;
  readonly nodes?: Maybe<ReadonlyArray<Maybe<AiringSchedule>>>;
  /** The pagination information */
  readonly pageInfo?: Maybe<PageInfo>;
};

/** AiringSchedule connection edge */
export type AiringScheduleEdge = {
  readonly __typename?: 'AiringScheduleEdge';
  readonly node?: Maybe<AiringSchedule>;
  /** The id of the connection */
  readonly id?: Maybe<Scalars['Int']>;
};

/** Media trend sort enums */
export const enum MediaTrendSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  MediaId = 'MEDIA_ID',
  MediaIdDesc = 'MEDIA_ID_DESC',
  Date = 'DATE',
  DateDesc = 'DATE_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  Popularity = 'POPULARITY',
  PopularityDesc = 'POPULARITY_DESC',
  Trending = 'TRENDING',
  TrendingDesc = 'TRENDING_DESC',
  Episode = 'EPISODE',
  EpisodeDesc = 'EPISODE_DESC'
};

export type MediaTrendConnection = {
  readonly __typename?: 'MediaTrendConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<MediaTrendEdge>>>;
  readonly nodes?: Maybe<ReadonlyArray<Maybe<MediaTrend>>>;
  /** The pagination information */
  readonly pageInfo?: Maybe<PageInfo>;
};

/** Media trend connection edge */
export type MediaTrendEdge = {
  readonly __typename?: 'MediaTrendEdge';
  readonly node?: Maybe<MediaTrend>;
};

/** Daily media statistics */
export type MediaTrend = {
  readonly __typename?: 'MediaTrend';
  /** The id of the tag */
  readonly mediaId: Scalars['Int'];
  /** The day the data was recorded (timestamp) */
  readonly date: Scalars['Int'];
  /** The amount of media activity on the day */
  readonly trending: Scalars['Int'];
  /** A weighted average score of all the user's scores of the media */
  readonly averageScore?: Maybe<Scalars['Int']>;
  /** The number of users with the media on their list */
  readonly popularity?: Maybe<Scalars['Int']>;
  /** The number of users with watching/reading the media */
  readonly inProgress?: Maybe<Scalars['Int']>;
  /** If the media was being released at this time */
  readonly releasing: Scalars['Boolean'];
  /** The episode number of the anime released on this day */
  readonly episode?: Maybe<Scalars['Int']>;
  /** The related media */
  readonly media?: Maybe<Media>;
};

/** An external link to another site related to the media */
export type MediaExternalLink = {
  readonly __typename?: 'MediaExternalLink';
  /** The id of the external link */
  readonly id: Scalars['Int'];
  /** The url of the external link */
  readonly url: Scalars['String'];
  /** The site location of the external link */
  readonly site: Scalars['String'];
};

/** Data and links to legal streaming episodes on external sites */
export type MediaStreamingEpisode = {
  readonly __typename?: 'MediaStreamingEpisode';
  /** Title of the episode */
  readonly title?: Maybe<Scalars['String']>;
  /** Url of episode image thumbnail */
  readonly thumbnail?: Maybe<Scalars['String']>;
  /** The url of the episode */
  readonly url?: Maybe<Scalars['String']>;
  /** The site location of the streaming episodes */
  readonly site?: Maybe<Scalars['String']>;
};

/** The ranking of a media in a particular time span and format compared to other media */
export type MediaRank = {
  readonly __typename?: 'MediaRank';
  /** The id of the rank */
  readonly id: Scalars['Int'];
  /** The numerical rank of the media */
  readonly rank: Scalars['Int'];
  /** The type of ranking */
  readonly type: MediaRankType;
  /** The format the media is ranked within */
  readonly format: MediaFormat;
  /** The year the media is ranked within */
  readonly year?: Maybe<Scalars['Int']>;
  /** The season the media is ranked within */
  readonly season?: Maybe<MediaSeason>;
  /** If the ranking is based on all time instead of a season/year */
  readonly allTime?: Maybe<Scalars['Boolean']>;
  /** String that gives context to the ranking type and time span */
  readonly context: Scalars['String'];
};

/** The type of ranking */
export const enum MediaRankType {
  /** Ranking is based on the media's ratings/score */
  Rated = 'RATED',
  /** Ranking is based on the media's popularity */
  Popular = 'POPULAR'
};

/** List of anime or manga */
export type MediaList = {
  readonly __typename?: 'MediaList';
  /** The id of the list entry */
  readonly id: Scalars['Int'];
  /** The id of the user owner of the list entry */
  readonly userId: Scalars['Int'];
  /** The id of the media */
  readonly mediaId: Scalars['Int'];
  /** The watching/reading status */
  readonly status?: Maybe<MediaListStatus>;
  /** The score of the entry */
  readonly score?: Maybe<Scalars['Float']>;
  /** The amount of episodes/chapters consumed by the user */
  readonly progress?: Maybe<Scalars['Int']>;
  /** The amount of volumes read by the user */
  readonly progressVolumes?: Maybe<Scalars['Int']>;
  /** The amount of times the user has rewatched/read the media */
  readonly repeat?: Maybe<Scalars['Int']>;
  /** Priority of planning */
  readonly priority?: Maybe<Scalars['Int']>;
  /** If the entry should only be visible to authenticated user */
  readonly private?: Maybe<Scalars['Boolean']>;
  /** Text notes */
  readonly notes?: Maybe<Scalars['String']>;
  /** If the entry shown be hidden from non-custom lists */
  readonly hiddenFromStatusLists?: Maybe<Scalars['Boolean']>;
  /** Map of booleans for which custom lists the entry are in */
  readonly customLists?: Maybe<Scalars['Json']>;
  /** Map of advanced scores with name keys */
  readonly advancedScores?: Maybe<Scalars['Json']>;
  /** When the entry was started by the user */
  readonly startedAt?: Maybe<FuzzyDate>;
  /** When the entry was completed by the user */
  readonly completedAt?: Maybe<FuzzyDate>;
  /** When the entry data was last updated */
  readonly updatedAt?: Maybe<Scalars['Int']>;
  /** When the entry data was created */
  readonly createdAt?: Maybe<Scalars['Int']>;
  readonly media?: Maybe<Media>;
  readonly user?: Maybe<User>;
};


/** List of anime or manga */
export type MediaListScoreArgs = {
  format?: Maybe<ScoreFormat>;
};


/** List of anime or manga */
export type MediaListCustomListsArgs = {
  asArray?: Maybe<Scalars['Boolean']>;
};

/** Media list watching/reading status enum. */
export const enum MediaListStatus {
  /** Currently watching/reading */
  Current = 'CURRENT',
  /** Planning to watch/read */
  Planning = 'PLANNING',
  /** Finished watching/reading */
  Completed = 'COMPLETED',
  /** Stopped watching/reading before completing */
  Dropped = 'DROPPED',
  /** Paused watching/reading */
  Paused = 'PAUSED',
  /** Re-watching/reading */
  Repeating = 'REPEATING'
};

/** Review sort enums */
export const enum ReviewSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  Rating = 'RATING',
  RatingDesc = 'RATING_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
};

export type ReviewConnection = {
  readonly __typename?: 'ReviewConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<ReviewEdge>>>;
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Review>>>;
  /** The pagination information */
  readonly pageInfo?: Maybe<PageInfo>;
};

/** Review connection edge */
export type ReviewEdge = {
  readonly __typename?: 'ReviewEdge';
  readonly node?: Maybe<Review>;
};

/** A Review that features in an anime or manga */
export type Review = {
  readonly __typename?: 'Review';
  /** The id of the review */
  readonly id: Scalars['Int'];
  /** The id of the review's creator */
  readonly userId: Scalars['Int'];
  /** The id of the review's media */
  readonly mediaId: Scalars['Int'];
  /** For which type of media the review is for */
  readonly mediaType?: Maybe<MediaType>;
  /** A short summary of the review */
  readonly summary?: Maybe<Scalars['String']>;
  /** The main review body text */
  readonly body?: Maybe<Scalars['String']>;
  /** The total user rating of the review */
  readonly rating?: Maybe<Scalars['Int']>;
  /** The amount of user ratings of the review */
  readonly ratingAmount?: Maybe<Scalars['Int']>;
  /** The rating of the review by currently authenticated user */
  readonly userRating?: Maybe<ReviewRating>;
  /** The review score of the media */
  readonly score?: Maybe<Scalars['Int']>;
  /** If the review is not yet publicly published and is only viewable by creator */
  readonly private?: Maybe<Scalars['Boolean']>;
  /** The url for the review page on the AniList website */
  readonly siteUrl?: Maybe<Scalars['String']>;
  /** The time of the thread creation */
  readonly createdAt: Scalars['Int'];
  /** The time of the thread last update */
  readonly updatedAt: Scalars['Int'];
  /** The creator of the review */
  readonly user?: Maybe<User>;
  /** The media the review is of */
  readonly media?: Maybe<Media>;
};


/** A Review that features in an anime or manga */
export type ReviewBodyArgs = {
  asHtml?: Maybe<Scalars['Boolean']>;
};

/** Review rating enums */
export const enum ReviewRating {
  NoVote = 'NO_VOTE',
  UpVote = 'UP_VOTE',
  DownVote = 'DOWN_VOTE'
};

/** Recommendation sort enums */
export const enum RecommendationSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Rating = 'RATING',
  RatingDesc = 'RATING_DESC'
};

export type RecommendationConnection = {
  readonly __typename?: 'RecommendationConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<RecommendationEdge>>>;
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Recommendation>>>;
  /** The pagination information */
  readonly pageInfo?: Maybe<PageInfo>;
};

/** Recommendation connection edge */
export type RecommendationEdge = {
  readonly __typename?: 'RecommendationEdge';
  readonly node?: Maybe<Recommendation>;
};

/** Media recommendation */
export type Recommendation = {
  readonly __typename?: 'Recommendation';
  /** The id of the recommendation */
  readonly id: Scalars['Int'];
  /** Users rating of the recommendation */
  readonly rating?: Maybe<Scalars['Int']>;
  /** The rating of the recommendation by currently authenticated user */
  readonly userRating?: Maybe<RecommendationRating>;
  /** The media the recommendation is from */
  readonly media?: Maybe<Media>;
  /** The recommended media */
  readonly mediaRecommendation?: Maybe<Media>;
  /** The user that first created the recommendation */
  readonly user?: Maybe<User>;
};

/** Recommendation rating enums */
export const enum RecommendationRating {
  NoRating = 'NO_RATING',
  RateUp = 'RATE_UP',
  RateDown = 'RATE_DOWN'
};

/** A media's statistics */
export type MediaStats = {
  readonly __typename?: 'MediaStats';
  readonly scoreDistribution?: Maybe<ReadonlyArray<Maybe<ScoreDistribution>>>;
  readonly statusDistribution?: Maybe<ReadonlyArray<Maybe<StatusDistribution>>>;
  /** @deprecated Replaced by MediaTrends */
  readonly airingProgression?: Maybe<ReadonlyArray<Maybe<AiringProgression>>>;
};

/** A user's list score distribution. */
export type ScoreDistribution = {
  readonly __typename?: 'ScoreDistribution';
  readonly score?: Maybe<Scalars['Int']>;
  /** The amount of list entries with this score */
  readonly amount?: Maybe<Scalars['Int']>;
};

/** The distribution of the watching/reading status of media or a user's list */
export type StatusDistribution = {
  readonly __typename?: 'StatusDistribution';
  /** The day the activity took place (Unix timestamp) */
  readonly status?: Maybe<MediaListStatus>;
  /** The amount of entries with this status */
  readonly amount?: Maybe<Scalars['Int']>;
};

/** Score & Watcher stats for airing anime by episode and mid-week */
export type AiringProgression = {
  readonly __typename?: 'AiringProgression';
  /** The episode the stats were recorded at. .5 is the mid point between 2 episodes airing dates. */
  readonly episode?: Maybe<Scalars['Float']>;
  /** The average score for the media */
  readonly score?: Maybe<Scalars['Float']>;
  /** The amount of users watching the anime */
  readonly watching?: Maybe<Scalars['Int']>;
};

/** Type of relation media has to its parent. */
export const enum MediaRelation {
  /** An adaption of this media into a different format */
  Adaptation = 'ADAPTATION',
  /** Released before the relation */
  Prequel = 'PREQUEL',
  /** Released after the relation */
  Sequel = 'SEQUEL',
  /** The media a side story is from */
  Parent = 'PARENT',
  /** A side story of the parent media */
  SideStory = 'SIDE_STORY',
  /** Shares at least 1 character */
  Character = 'CHARACTER',
  /** A shortened and summarized version */
  Summary = 'SUMMARY',
  /** An alternative version of the same media */
  Alternative = 'ALTERNATIVE',
  /** An alternative version of the media with a different primary focus */
  SpinOff = 'SPIN_OFF',
  /** Other */
  Other = 'OTHER',
  /** Version 2 only. The source material the media was adapted from */
  Source = 'SOURCE',
  /** Version 2 only. */
  Compilation = 'COMPILATION',
  /** Version 2 only. */
  Contains = 'CONTAINS'
};

export type UserStatisticTypes = {
  readonly __typename?: 'UserStatisticTypes';
  readonly anime?: Maybe<UserStatistics>;
  readonly manga?: Maybe<UserStatistics>;
};

export type UserStatistics = {
  readonly __typename?: 'UserStatistics';
  readonly count: Scalars['Int'];
  readonly meanScore: Scalars['Float'];
  readonly standardDeviation: Scalars['Float'];
  readonly minutesWatched: Scalars['Int'];
  readonly episodesWatched: Scalars['Int'];
  readonly chaptersRead: Scalars['Int'];
  readonly volumesRead: Scalars['Int'];
  readonly formats?: Maybe<ReadonlyArray<Maybe<UserFormatStatistic>>>;
  readonly statuses?: Maybe<ReadonlyArray<Maybe<UserStatusStatistic>>>;
  readonly scores?: Maybe<ReadonlyArray<Maybe<UserScoreStatistic>>>;
  readonly lengths?: Maybe<ReadonlyArray<Maybe<UserLengthStatistic>>>;
  readonly releaseYears?: Maybe<ReadonlyArray<Maybe<UserReleaseYearStatistic>>>;
  readonly startYears?: Maybe<ReadonlyArray<Maybe<UserStartYearStatistic>>>;
  readonly genres?: Maybe<ReadonlyArray<Maybe<UserGenreStatistic>>>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<UserTagStatistic>>>;
  readonly countries?: Maybe<ReadonlyArray<Maybe<UserCountryStatistic>>>;
  readonly voiceActors?: Maybe<ReadonlyArray<Maybe<UserVoiceActorStatistic>>>;
  readonly staff?: Maybe<ReadonlyArray<Maybe<UserStaffStatistic>>>;
  readonly studios?: Maybe<ReadonlyArray<Maybe<UserStudioStatistic>>>;
};


export type UserStatisticsFormatsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsStatusesArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsScoresArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsLengthsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsReleaseYearsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsStartYearsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsGenresArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsTagsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsCountriesArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsVoiceActorsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsStaffArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<UserStatisticsSort>>>;
};


export type UserStatisticsStudiosArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<UserStatisticsSort>>>;
};

/** User statistics sort enum */
export const enum UserStatisticsSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Count = 'COUNT',
  CountDesc = 'COUNT_DESC',
  Progress = 'PROGRESS',
  ProgressDesc = 'PROGRESS_DESC',
  MeanScore = 'MEAN_SCORE',
  MeanScoreDesc = 'MEAN_SCORE_DESC'
};

export type UserFormatStatistic = {
  readonly __typename?: 'UserFormatStatistic';
  readonly count: Scalars['Int'];
  readonly meanScore: Scalars['Float'];
  readonly minutesWatched: Scalars['Int'];
  readonly chaptersRead: Scalars['Int'];
  readonly mediaIds: ReadonlyArray<Maybe<Scalars['Int']>>;
  readonly format?: Maybe<MediaFormat>;
};

export type UserStatusStatistic = {
  readonly __typename?: 'UserStatusStatistic';
  readonly count: Scalars['Int'];
  readonly meanScore: Scalars['Float'];
  readonly minutesWatched: Scalars['Int'];
  readonly chaptersRead: Scalars['Int'];
  readonly mediaIds: ReadonlyArray<Maybe<Scalars['Int']>>;
  readonly status?: Maybe<MediaListStatus>;
};

export type UserScoreStatistic = {
  readonly __typename?: 'UserScoreStatistic';
  readonly count: Scalars['Int'];
  readonly meanScore: Scalars['Float'];
  readonly minutesWatched: Scalars['Int'];
  readonly chaptersRead: Scalars['Int'];
  readonly mediaIds: ReadonlyArray<Maybe<Scalars['Int']>>;
  readonly score?: Maybe<Scalars['Int']>;
};

export type UserLengthStatistic = {
  readonly __typename?: 'UserLengthStatistic';
  readonly count: Scalars['Int'];
  readonly meanScore: Scalars['Float'];
  readonly minutesWatched: Scalars['Int'];
  readonly chaptersRead: Scalars['Int'];
  readonly mediaIds: ReadonlyArray<Maybe<Scalars['Int']>>;
  readonly length?: Maybe<Scalars['String']>;
};

export type UserReleaseYearStatistic = {
  readonly __typename?: 'UserReleaseYearStatistic';
  readonly count: Scalars['Int'];
  readonly meanScore: Scalars['Float'];
  readonly minutesWatched: Scalars['Int'];
  readonly chaptersRead: Scalars['Int'];
  readonly mediaIds: ReadonlyArray<Maybe<Scalars['Int']>>;
  readonly releaseYear?: Maybe<Scalars['Int']>;
};

export type UserStartYearStatistic = {
  readonly __typename?: 'UserStartYearStatistic';
  readonly count: Scalars['Int'];
  readonly meanScore: Scalars['Float'];
  readonly minutesWatched: Scalars['Int'];
  readonly chaptersRead: Scalars['Int'];
  readonly mediaIds: ReadonlyArray<Maybe<Scalars['Int']>>;
  readonly startYear?: Maybe<Scalars['Int']>;
};

export type UserGenreStatistic = {
  readonly __typename?: 'UserGenreStatistic';
  readonly count: Scalars['Int'];
  readonly meanScore: Scalars['Float'];
  readonly minutesWatched: Scalars['Int'];
  readonly chaptersRead: Scalars['Int'];
  readonly mediaIds: ReadonlyArray<Maybe<Scalars['Int']>>;
  readonly genre?: Maybe<Scalars['String']>;
};

export type UserTagStatistic = {
  readonly __typename?: 'UserTagStatistic';
  readonly count: Scalars['Int'];
  readonly meanScore: Scalars['Float'];
  readonly minutesWatched: Scalars['Int'];
  readonly chaptersRead: Scalars['Int'];
  readonly mediaIds: ReadonlyArray<Maybe<Scalars['Int']>>;
  readonly tag?: Maybe<MediaTag>;
};

export type UserCountryStatistic = {
  readonly __typename?: 'UserCountryStatistic';
  readonly count: Scalars['Int'];
  readonly meanScore: Scalars['Float'];
  readonly minutesWatched: Scalars['Int'];
  readonly chaptersRead: Scalars['Int'];
  readonly mediaIds: ReadonlyArray<Maybe<Scalars['Int']>>;
  readonly country?: Maybe<Scalars['CountryCode']>;
};

export type UserVoiceActorStatistic = {
  readonly __typename?: 'UserVoiceActorStatistic';
  readonly count: Scalars['Int'];
  readonly meanScore: Scalars['Float'];
  readonly minutesWatched: Scalars['Int'];
  readonly chaptersRead: Scalars['Int'];
  readonly mediaIds: ReadonlyArray<Maybe<Scalars['Int']>>;
  readonly voiceActor?: Maybe<Staff>;
  readonly characterIds: ReadonlyArray<Maybe<Scalars['Int']>>;
};

export type UserStaffStatistic = {
  readonly __typename?: 'UserStaffStatistic';
  readonly count: Scalars['Int'];
  readonly meanScore: Scalars['Float'];
  readonly minutesWatched: Scalars['Int'];
  readonly chaptersRead: Scalars['Int'];
  readonly mediaIds: ReadonlyArray<Maybe<Scalars['Int']>>;
  readonly staff?: Maybe<Staff>;
};

export type UserStudioStatistic = {
  readonly __typename?: 'UserStudioStatistic';
  readonly count: Scalars['Int'];
  readonly meanScore: Scalars['Float'];
  readonly minutesWatched: Scalars['Int'];
  readonly chaptersRead: Scalars['Int'];
  readonly mediaIds: ReadonlyArray<Maybe<Scalars['Int']>>;
  readonly studio?: Maybe<Studio>;
};

/** A user's statistics */
export type UserStats = {
  readonly __typename?: 'UserStats';
  /** The amount of anime the user has watched in minutes */
  readonly watchedTime?: Maybe<Scalars['Int']>;
  /** The amount of manga chapters the user has read */
  readonly chaptersRead?: Maybe<Scalars['Int']>;
  readonly activityHistory?: Maybe<ReadonlyArray<Maybe<UserActivityHistory>>>;
  readonly animeStatusDistribution?: Maybe<ReadonlyArray<Maybe<StatusDistribution>>>;
  readonly mangaStatusDistribution?: Maybe<ReadonlyArray<Maybe<StatusDistribution>>>;
  readonly animeScoreDistribution?: Maybe<ReadonlyArray<Maybe<ScoreDistribution>>>;
  readonly mangaScoreDistribution?: Maybe<ReadonlyArray<Maybe<ScoreDistribution>>>;
  readonly animeListScores?: Maybe<ListScoreStats>;
  readonly mangaListScores?: Maybe<ListScoreStats>;
  readonly favouredGenresOverview?: Maybe<ReadonlyArray<Maybe<GenreStats>>>;
  readonly favouredGenres?: Maybe<ReadonlyArray<Maybe<GenreStats>>>;
  readonly favouredTags?: Maybe<ReadonlyArray<Maybe<TagStats>>>;
  readonly favouredActors?: Maybe<ReadonlyArray<Maybe<StaffStats>>>;
  readonly favouredStaff?: Maybe<ReadonlyArray<Maybe<StaffStats>>>;
  readonly favouredStudios?: Maybe<ReadonlyArray<Maybe<StudioStats>>>;
  readonly favouredYears?: Maybe<ReadonlyArray<Maybe<YearStats>>>;
  readonly favouredFormats?: Maybe<ReadonlyArray<Maybe<FormatStats>>>;
};

/** A user's activity history stats. */
export type UserActivityHistory = {
  readonly __typename?: 'UserActivityHistory';
  /** The day the activity took place (Unix timestamp) */
  readonly date?: Maybe<Scalars['Int']>;
  /** The amount of activity on the day */
  readonly amount?: Maybe<Scalars['Int']>;
  /** The level of activity represented on a 1-10 scale */
  readonly level?: Maybe<Scalars['Int']>;
};

/** User's list score statistics */
export type ListScoreStats = {
  readonly __typename?: 'ListScoreStats';
  readonly meanScore?: Maybe<Scalars['Int']>;
  readonly standardDeviation?: Maybe<Scalars['Int']>;
};

/** User's genre statistics */
export type GenreStats = {
  readonly __typename?: 'GenreStats';
  readonly genre?: Maybe<Scalars['String']>;
  readonly amount?: Maybe<Scalars['Int']>;
  readonly meanScore?: Maybe<Scalars['Int']>;
  /** The amount of time in minutes the genre has been watched by the user */
  readonly timeWatched?: Maybe<Scalars['Int']>;
};

/** User's tag statistics */
export type TagStats = {
  readonly __typename?: 'TagStats';
  readonly tag?: Maybe<MediaTag>;
  readonly amount?: Maybe<Scalars['Int']>;
  readonly meanScore?: Maybe<Scalars['Int']>;
  /** The amount of time in minutes the tag has been watched by the user */
  readonly timeWatched?: Maybe<Scalars['Int']>;
};

/** User's staff statistics */
export type StaffStats = {
  readonly __typename?: 'StaffStats';
  readonly staff?: Maybe<Staff>;
  readonly amount?: Maybe<Scalars['Int']>;
  readonly meanScore?: Maybe<Scalars['Int']>;
  /** The amount of time in minutes the staff member has been watched by the user */
  readonly timeWatched?: Maybe<Scalars['Int']>;
};

/** User's studio statistics */
export type StudioStats = {
  readonly __typename?: 'StudioStats';
  readonly studio?: Maybe<Studio>;
  readonly amount?: Maybe<Scalars['Int']>;
  readonly meanScore?: Maybe<Scalars['Int']>;
  /** The amount of time in minutes the studio's works have been watched by the user */
  readonly timeWatched?: Maybe<Scalars['Int']>;
};

/** User's year statistics */
export type YearStats = {
  readonly __typename?: 'YearStats';
  readonly year?: Maybe<Scalars['Int']>;
  readonly amount?: Maybe<Scalars['Int']>;
  readonly meanScore?: Maybe<Scalars['Int']>;
};

/** User's format statistics */
export type FormatStats = {
  readonly __typename?: 'FormatStats';
  readonly format?: Maybe<MediaFormat>;
  readonly amount?: Maybe<Scalars['Int']>;
};


/** Media list sort enums */
export const enum MediaListSort {
  MediaId = 'MEDIA_ID',
  MediaIdDesc = 'MEDIA_ID_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  Status = 'STATUS',
  StatusDesc = 'STATUS_DESC',
  Progress = 'PROGRESS',
  ProgressDesc = 'PROGRESS_DESC',
  ProgressVolumes = 'PROGRESS_VOLUMES',
  ProgressVolumesDesc = 'PROGRESS_VOLUMES_DESC',
  Repeat = 'REPEAT',
  RepeatDesc = 'REPEAT_DESC',
  Priority = 'PRIORITY',
  PriorityDesc = 'PRIORITY_DESC',
  StartedOn = 'STARTED_ON',
  StartedOnDesc = 'STARTED_ON_DESC',
  FinishedOn = 'FINISHED_ON',
  FinishedOnDesc = 'FINISHED_ON_DESC',
  AddedTime = 'ADDED_TIME',
  AddedTimeDesc = 'ADDED_TIME_DESC',
  UpdatedTime = 'UPDATED_TIME',
  UpdatedTimeDesc = 'UPDATED_TIME_DESC',
  MediaTitleRomaji = 'MEDIA_TITLE_ROMAJI',
  MediaTitleRomajiDesc = 'MEDIA_TITLE_ROMAJI_DESC',
  MediaTitleEnglish = 'MEDIA_TITLE_ENGLISH',
  MediaTitleEnglishDesc = 'MEDIA_TITLE_ENGLISH_DESC',
  MediaTitleNative = 'MEDIA_TITLE_NATIVE',
  MediaTitleNativeDesc = 'MEDIA_TITLE_NATIVE_DESC',
  MediaPopularity = 'MEDIA_POPULARITY',
  MediaPopularityDesc = 'MEDIA_POPULARITY_DESC'
};

/** Airing schedule sort enums */
export const enum AiringSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  MediaId = 'MEDIA_ID',
  MediaIdDesc = 'MEDIA_ID_DESC',
  Time = 'TIME',
  TimeDesc = 'TIME_DESC',
  Episode = 'EPISODE',
  EpisodeDesc = 'EPISODE_DESC'
};

/** Notification union type */
export type NotificationUnion = AiringNotification | FollowingNotification | ActivityMessageNotification | ActivityMentionNotification | ActivityReplyNotification | ActivityReplySubscribedNotification | ActivityLikeNotification | ActivityReplyLikeNotification | ThreadCommentMentionNotification | ThreadCommentReplyNotification | ThreadCommentSubscribedNotification | ThreadCommentLikeNotification | ThreadLikeNotification | RelatedMediaAdditionNotification;

/** Notification for when an episode of anime airs */
export type AiringNotification = {
  readonly __typename?: 'AiringNotification';
  /** The id of the Notification */
  readonly id: Scalars['Int'];
  /** The type of notification */
  readonly type?: Maybe<NotificationType>;
  /** The id of the aired anime */
  readonly animeId: Scalars['Int'];
  /** The episode number that just aired */
  readonly episode: Scalars['Int'];
  /** The notification context text */
  readonly contexts?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The time the notification was created at */
  readonly createdAt?: Maybe<Scalars['Int']>;
  /** The associated media of the airing schedule */
  readonly media?: Maybe<Media>;
};

/** Notification for when the authenticated user is followed by another user */
export type FollowingNotification = {
  readonly __typename?: 'FollowingNotification';
  /** The id of the Notification */
  readonly id: Scalars['Int'];
  /** The id of the user who followed the authenticated user */
  readonly userId: Scalars['Int'];
  /** The type of notification */
  readonly type?: Maybe<NotificationType>;
  /** The notification context text */
  readonly context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  readonly createdAt?: Maybe<Scalars['Int']>;
  /** The liked activity */
  readonly user?: Maybe<User>;
};

/** Notification for when a user is send an activity message */
export type ActivityMessageNotification = {
  readonly __typename?: 'ActivityMessageNotification';
  /** The id of the Notification */
  readonly id: Scalars['Int'];
  /** The if of the user who send the message */
  readonly userId: Scalars['Int'];
  /** The type of notification */
  readonly type?: Maybe<NotificationType>;
  /** The id of the activity message */
  readonly activityId: Scalars['Int'];
  /** The notification context text */
  readonly context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  readonly createdAt?: Maybe<Scalars['Int']>;
  /** The message activity */
  readonly message?: Maybe<MessageActivity>;
  /** The user who sent the message */
  readonly user?: Maybe<User>;
};

/** User message activity */
export type MessageActivity = {
  readonly __typename?: 'MessageActivity';
  /** The id of the activity */
  readonly id: Scalars['Int'];
  /** The user id of the activity's recipient */
  readonly recipientId?: Maybe<Scalars['Int']>;
  /** The user id of the activity's sender */
  readonly messengerId?: Maybe<Scalars['Int']>;
  /** The type of the activity */
  readonly type?: Maybe<ActivityType>;
  /** The number of activity replies */
  readonly replyCount: Scalars['Int'];
  /** The message text (Markdown) */
  readonly message?: Maybe<Scalars['String']>;
  /** If the activity is locked and can receive replies */
  readonly isLocked?: Maybe<Scalars['Boolean']>;
  /** If the currently authenticated user is subscribed to the activity */
  readonly isSubscribed?: Maybe<Scalars['Boolean']>;
  /** The amount of likes the activity has */
  readonly likeCount: Scalars['Int'];
  /** If the currently authenticated user liked the activity */
  readonly isLiked?: Maybe<Scalars['Boolean']>;
  /** If the message is private and only viewable to the sender and recipients */
  readonly isPrivate?: Maybe<Scalars['Boolean']>;
  /** The url for the activity page on the AniList website */
  readonly siteUrl?: Maybe<Scalars['String']>;
  /** The time the activity was created at */
  readonly createdAt: Scalars['Int'];
  /** The user who the activity message was sent to */
  readonly recipient?: Maybe<User>;
  /** The user who sent the activity message */
  readonly messenger?: Maybe<User>;
  /** The written replies to the activity */
  readonly replies?: Maybe<ReadonlyArray<Maybe<ActivityReply>>>;
  /** The users who liked the activity */
  readonly likes?: Maybe<ReadonlyArray<Maybe<User>>>;
};


/** User message activity */
export type MessageActivityMessageArgs = {
  asHtml?: Maybe<Scalars['Boolean']>;
};

/** Activity type enum. */
export const enum ActivityType {
  /** A text activity */
  Text = 'TEXT',
  /** A anime list update activity */
  AnimeList = 'ANIME_LIST',
  /** A manga list update activity */
  MangaList = 'MANGA_LIST',
  /** A text message activity sent to another user */
  Message = 'MESSAGE',
  /** Anime & Manga list update, only used in query arguments */
  MediaList = 'MEDIA_LIST'
};

/** Replay to an activity item */
export type ActivityReply = {
  readonly __typename?: 'ActivityReply';
  /** The id of the reply */
  readonly id: Scalars['Int'];
  /** The id of the replies creator */
  readonly userId?: Maybe<Scalars['Int']>;
  /** The id of the parent activity */
  readonly activityId?: Maybe<Scalars['Int']>;
  /** The reply text */
  readonly text?: Maybe<Scalars['String']>;
  /** The amount of likes the reply has */
  readonly likeCount: Scalars['Int'];
  /** If the currently authenticated user liked the reply */
  readonly isLiked?: Maybe<Scalars['Boolean']>;
  /** The time the reply was created at */
  readonly createdAt: Scalars['Int'];
  /** The user who created reply */
  readonly user?: Maybe<User>;
  /** The users who liked the reply */
  readonly likes?: Maybe<ReadonlyArray<Maybe<User>>>;
};


/** Replay to an activity item */
export type ActivityReplyTextArgs = {
  asHtml?: Maybe<Scalars['Boolean']>;
};

/** Notification for when authenticated user is @ mentioned in activity or reply */
export type ActivityMentionNotification = {
  readonly __typename?: 'ActivityMentionNotification';
  /** The id of the Notification */
  readonly id: Scalars['Int'];
  /** The id of the user who mentioned the authenticated user */
  readonly userId: Scalars['Int'];
  /** The type of notification */
  readonly type?: Maybe<NotificationType>;
  /** The id of the activity where mentioned */
  readonly activityId: Scalars['Int'];
  /** The notification context text */
  readonly context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  readonly createdAt?: Maybe<Scalars['Int']>;
  /** The liked activity */
  readonly activity?: Maybe<ActivityUnion>;
  /** The user who mentioned the authenticated user */
  readonly user?: Maybe<User>;
};

/** Activity union type */
export type ActivityUnion = TextActivity | ListActivity | MessageActivity;

/** User text activity */
export type TextActivity = {
  readonly __typename?: 'TextActivity';
  /** The id of the activity */
  readonly id: Scalars['Int'];
  /** The user id of the activity's creator */
  readonly userId?: Maybe<Scalars['Int']>;
  /** The type of activity */
  readonly type?: Maybe<ActivityType>;
  /** The number of activity replies */
  readonly replyCount: Scalars['Int'];
  /** The status text (Markdown) */
  readonly text?: Maybe<Scalars['String']>;
  /** The url for the activity page on the AniList website */
  readonly siteUrl?: Maybe<Scalars['String']>;
  /** If the activity is locked and can receive replies */
  readonly isLocked?: Maybe<Scalars['Boolean']>;
  /** If the currently authenticated user is subscribed to the activity */
  readonly isSubscribed?: Maybe<Scalars['Boolean']>;
  /** The amount of likes the activity has */
  readonly likeCount: Scalars['Int'];
  /** If the currently authenticated user liked the activity */
  readonly isLiked?: Maybe<Scalars['Boolean']>;
  /** The time the activity was created at */
  readonly createdAt: Scalars['Int'];
  /** The user who created the activity */
  readonly user?: Maybe<User>;
  /** The written replies to the activity */
  readonly replies?: Maybe<ReadonlyArray<Maybe<ActivityReply>>>;
  /** The users who liked the activity */
  readonly likes?: Maybe<ReadonlyArray<Maybe<User>>>;
};


/** User text activity */
export type TextActivityTextArgs = {
  asHtml?: Maybe<Scalars['Boolean']>;
};

/** User list activity (anime & manga updates) */
export type ListActivity = {
  readonly __typename?: 'ListActivity';
  /** The id of the activity */
  readonly id: Scalars['Int'];
  /** The user id of the activity's creator */
  readonly userId?: Maybe<Scalars['Int']>;
  /** The type of activity */
  readonly type?: Maybe<ActivityType>;
  /** The number of activity replies */
  readonly replyCount: Scalars['Int'];
  /** The list item's textual status */
  readonly status?: Maybe<Scalars['String']>;
  /** The list progress made */
  readonly progress?: Maybe<Scalars['String']>;
  /** If the activity is locked and can receive replies */
  readonly isLocked?: Maybe<Scalars['Boolean']>;
  /** If the currently authenticated user is subscribed to the activity */
  readonly isSubscribed?: Maybe<Scalars['Boolean']>;
  /** The amount of likes the activity has */
  readonly likeCount: Scalars['Int'];
  /** If the currently authenticated user liked the activity */
  readonly isLiked?: Maybe<Scalars['Boolean']>;
  /** The url for the activity page on the AniList website */
  readonly siteUrl?: Maybe<Scalars['String']>;
  /** The time the activity was created at */
  readonly createdAt: Scalars['Int'];
  /** The owner of the activity */
  readonly user?: Maybe<User>;
  /** The associated media to the activity update */
  readonly media?: Maybe<Media>;
  /** The written replies to the activity */
  readonly replies?: Maybe<ReadonlyArray<Maybe<ActivityReply>>>;
  /** The users who liked the activity */
  readonly likes?: Maybe<ReadonlyArray<Maybe<User>>>;
};

/** Notification for when a user replies to the authenticated users activity */
export type ActivityReplyNotification = {
  readonly __typename?: 'ActivityReplyNotification';
  /** The id of the Notification */
  readonly id: Scalars['Int'];
  /** The id of the user who replied to the activity */
  readonly userId: Scalars['Int'];
  /** The type of notification */
  readonly type?: Maybe<NotificationType>;
  /** The id of the activity which was replied too */
  readonly activityId: Scalars['Int'];
  /** The notification context text */
  readonly context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  readonly createdAt?: Maybe<Scalars['Int']>;
  /** The liked activity */
  readonly activity?: Maybe<ActivityUnion>;
  /** The user who replied to the activity */
  readonly user?: Maybe<User>;
};

/** Notification for when a user replies to activity the authenticated user has replied to */
export type ActivityReplySubscribedNotification = {
  readonly __typename?: 'ActivityReplySubscribedNotification';
  /** The id of the Notification */
  readonly id: Scalars['Int'];
  /** The id of the user who replied to the activity */
  readonly userId: Scalars['Int'];
  /** The type of notification */
  readonly type?: Maybe<NotificationType>;
  /** The id of the activity which was replied too */
  readonly activityId: Scalars['Int'];
  /** The notification context text */
  readonly context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  readonly createdAt?: Maybe<Scalars['Int']>;
  /** The liked activity */
  readonly activity?: Maybe<ActivityUnion>;
  /** The user who replied to the activity */
  readonly user?: Maybe<User>;
};

/** Notification for when a activity is liked */
export type ActivityLikeNotification = {
  readonly __typename?: 'ActivityLikeNotification';
  /** The id of the Notification */
  readonly id: Scalars['Int'];
  /** The id of the user who liked to the activity */
  readonly userId: Scalars['Int'];
  /** The type of notification */
  readonly type?: Maybe<NotificationType>;
  /** The id of the activity which was liked */
  readonly activityId: Scalars['Int'];
  /** The notification context text */
  readonly context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  readonly createdAt?: Maybe<Scalars['Int']>;
  /** The liked activity */
  readonly activity?: Maybe<ActivityUnion>;
  /** The user who liked the activity */
  readonly user?: Maybe<User>;
};

/** Notification for when a activity reply is liked */
export type ActivityReplyLikeNotification = {
  readonly __typename?: 'ActivityReplyLikeNotification';
  /** The id of the Notification */
  readonly id: Scalars['Int'];
  /** The id of the user who liked to the activity reply */
  readonly userId: Scalars['Int'];
  /** The type of notification */
  readonly type?: Maybe<NotificationType>;
  /** The id of the activity where the reply which was liked */
  readonly activityId: Scalars['Int'];
  /** The notification context text */
  readonly context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  readonly createdAt?: Maybe<Scalars['Int']>;
  /** The liked activity */
  readonly activity?: Maybe<ActivityUnion>;
  /** The user who liked the activity reply */
  readonly user?: Maybe<User>;
};

/** Notification for when authenticated user is @ mentioned in a forum thread comment */
export type ThreadCommentMentionNotification = {
  readonly __typename?: 'ThreadCommentMentionNotification';
  /** The id of the Notification */
  readonly id: Scalars['Int'];
  /** The id of the user who mentioned the authenticated user */
  readonly userId: Scalars['Int'];
  /** The type of notification */
  readonly type?: Maybe<NotificationType>;
  /** The id of the comment where mentioned */
  readonly commentId: Scalars['Int'];
  /** The notification context text */
  readonly context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  readonly createdAt?: Maybe<Scalars['Int']>;
  /** The thread that the relevant comment belongs to */
  readonly thread?: Maybe<Thread>;
  /** The thread comment that included the @ mention */
  readonly comment?: Maybe<ThreadComment>;
  /** The user who mentioned the authenticated user */
  readonly user?: Maybe<User>;
};

/** Forum Thread */
export type Thread = {
  readonly __typename?: 'Thread';
  /** The id of the thread */
  readonly id: Scalars['Int'];
  /** The title of the thread */
  readonly title?: Maybe<Scalars['String']>;
  /** The text body of the thread (Markdown) */
  readonly body?: Maybe<Scalars['String']>;
  /** The id of the thread owner user */
  readonly userId: Scalars['Int'];
  /** The id of the user who most recently commented on the thread */
  readonly replyUserId?: Maybe<Scalars['Int']>;
  /** The id of the most recent comment on the thread */
  readonly replyCommentId?: Maybe<Scalars['Int']>;
  /** The number of comments on the thread */
  readonly replyCount?: Maybe<Scalars['Int']>;
  /** The number of times users have viewed the thread */
  readonly viewCount?: Maybe<Scalars['Int']>;
  /** If the thread is locked and can receive comments */
  readonly isLocked?: Maybe<Scalars['Boolean']>;
  /** If the thread is stickied and should be displayed at the top of the page */
  readonly isSticky?: Maybe<Scalars['Boolean']>;
  /** If the currently authenticated user is subscribed to the thread */
  readonly isSubscribed?: Maybe<Scalars['Boolean']>;
  /** The amount of likes the thread has */
  readonly likeCount: Scalars['Int'];
  /** If the currently authenticated user liked the thread */
  readonly isLiked?: Maybe<Scalars['Boolean']>;
  /** The time of the last reply */
  readonly repliedAt?: Maybe<Scalars['Int']>;
  /** The time of the thread creation */
  readonly createdAt: Scalars['Int'];
  /** The time of the thread last update */
  readonly updatedAt: Scalars['Int'];
  /** The owner of the thread */
  readonly user?: Maybe<User>;
  /** The user to last reply to the thread */
  readonly replyUser?: Maybe<User>;
  /** The users who liked the thread */
  readonly likes?: Maybe<ReadonlyArray<Maybe<User>>>;
  /** The url for the thread page on the AniList website */
  readonly siteUrl?: Maybe<Scalars['String']>;
  /** The categories of the thread */
  readonly categories?: Maybe<ReadonlyArray<Maybe<ThreadCategory>>>;
  /** The media categories of the thread */
  readonly mediaCategories?: Maybe<ReadonlyArray<Maybe<Media>>>;
};


/** Forum Thread */
export type ThreadBodyArgs = {
  asHtml?: Maybe<Scalars['Boolean']>;
};

/** A forum thread category */
export type ThreadCategory = {
  readonly __typename?: 'ThreadCategory';
  /** The id of the category */
  readonly id: Scalars['Int'];
  /** The name of the category */
  readonly name: Scalars['String'];
};

/** Forum Thread Comment */
export type ThreadComment = {
  readonly __typename?: 'ThreadComment';
  /** The id of the comment */
  readonly id: Scalars['Int'];
  /** The user id of the comment's owner */
  readonly userId?: Maybe<Scalars['Int']>;
  /** The id of thread the comment belongs to */
  readonly threadId?: Maybe<Scalars['Int']>;
  /** The text content of the comment (Markdown) */
  readonly comment?: Maybe<Scalars['String']>;
  /** The amount of likes the comment has */
  readonly likeCount: Scalars['Int'];
  /** If the currently authenticated user liked the comment */
  readonly isLiked?: Maybe<Scalars['Boolean']>;
  /** The url for the comment page on the AniList website */
  readonly siteUrl?: Maybe<Scalars['String']>;
  /** The time of the comments creation */
  readonly createdAt: Scalars['Int'];
  /** The time of the comments last update */
  readonly updatedAt: Scalars['Int'];
  /** The thread the comment belongs to */
  readonly thread?: Maybe<Thread>;
  /** The user who created the comment */
  readonly user?: Maybe<User>;
  /** The users who liked the comment */
  readonly likes?: Maybe<ReadonlyArray<Maybe<User>>>;
  /** The comment's child reply comments */
  readonly childComments?: Maybe<Scalars['Json']>;
};


/** Forum Thread Comment */
export type ThreadCommentCommentArgs = {
  asHtml?: Maybe<Scalars['Boolean']>;
};

/** Notification for when a user replies to your forum thread comment */
export type ThreadCommentReplyNotification = {
  readonly __typename?: 'ThreadCommentReplyNotification';
  /** The id of the Notification */
  readonly id: Scalars['Int'];
  /** The id of the user who create the comment reply */
  readonly userId: Scalars['Int'];
  /** The type of notification */
  readonly type?: Maybe<NotificationType>;
  /** The id of the reply comment */
  readonly commentId: Scalars['Int'];
  /** The notification context text */
  readonly context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  readonly createdAt?: Maybe<Scalars['Int']>;
  /** The thread that the relevant comment belongs to */
  readonly thread?: Maybe<Thread>;
  /** The reply thread comment */
  readonly comment?: Maybe<ThreadComment>;
  /** The user who replied to the activity */
  readonly user?: Maybe<User>;
};

/** Notification for when a user replies to a subscribed forum thread */
export type ThreadCommentSubscribedNotification = {
  readonly __typename?: 'ThreadCommentSubscribedNotification';
  /** The id of the Notification */
  readonly id: Scalars['Int'];
  /** The id of the user who commented on the thread */
  readonly userId: Scalars['Int'];
  /** The type of notification */
  readonly type?: Maybe<NotificationType>;
  /** The id of the new comment in the subscribed thread */
  readonly commentId: Scalars['Int'];
  /** The notification context text */
  readonly context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  readonly createdAt?: Maybe<Scalars['Int']>;
  /** The thread that the relevant comment belongs to */
  readonly thread?: Maybe<Thread>;
  /** The reply thread comment */
  readonly comment?: Maybe<ThreadComment>;
  /** The user who replied to the subscribed thread */
  readonly user?: Maybe<User>;
};

/** Notification for when a thread comment is liked */
export type ThreadCommentLikeNotification = {
  readonly __typename?: 'ThreadCommentLikeNotification';
  /** The id of the Notification */
  readonly id: Scalars['Int'];
  /** The id of the user who liked to the activity */
  readonly userId: Scalars['Int'];
  /** The type of notification */
  readonly type?: Maybe<NotificationType>;
  /** The id of the activity which was liked */
  readonly commentId: Scalars['Int'];
  /** The notification context text */
  readonly context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  readonly createdAt?: Maybe<Scalars['Int']>;
  /** The thread that the relevant comment belongs to */
  readonly thread?: Maybe<Thread>;
  /** The thread comment that was liked */
  readonly comment?: Maybe<ThreadComment>;
  /** The user who liked the activity */
  readonly user?: Maybe<User>;
};

/** Notification for when a thread is liked */
export type ThreadLikeNotification = {
  readonly __typename?: 'ThreadLikeNotification';
  /** The id of the Notification */
  readonly id: Scalars['Int'];
  /** The id of the user who liked to the activity */
  readonly userId: Scalars['Int'];
  /** The type of notification */
  readonly type?: Maybe<NotificationType>;
  /** The id of the thread which was liked */
  readonly threadId: Scalars['Int'];
  /** The notification context text */
  readonly context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  readonly createdAt?: Maybe<Scalars['Int']>;
  /** The thread that the relevant comment belongs to */
  readonly thread?: Maybe<Thread>;
  /** The liked thread comment */
  readonly comment?: Maybe<ThreadComment>;
  /** The user who liked the activity */
  readonly user?: Maybe<User>;
};

/** Notification for when new media is added to the site */
export type RelatedMediaAdditionNotification = {
  readonly __typename?: 'RelatedMediaAdditionNotification';
  /** The id of the Notification */
  readonly id: Scalars['Int'];
  /** The type of notification */
  readonly type?: Maybe<NotificationType>;
  /** The id of the new media */
  readonly mediaId: Scalars['Int'];
  /** The notification context text */
  readonly context?: Maybe<Scalars['String']>;
  /** The time the notification was created at */
  readonly createdAt?: Maybe<Scalars['Int']>;
  /** The associated media of the airing schedule */
  readonly media?: Maybe<Media>;
};

/** Activity sort enums */
export const enum ActivitySort {
  Id = 'ID',
  IdDesc = 'ID_DESC'
};

/** Thread sort enums */
export const enum ThreadSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Title = 'TITLE',
  TitleDesc = 'TITLE_DESC',
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  RepliedAt = 'REPLIED_AT',
  RepliedAtDesc = 'REPLIED_AT_DESC',
  ReplyCount = 'REPLY_COUNT',
  ReplyCountDesc = 'REPLY_COUNT_DESC',
  ViewCount = 'VIEW_COUNT',
  ViewCountDesc = 'VIEW_COUNT_DESC',
  IsSticky = 'IS_STICKY',
  SearchMatch = 'SEARCH_MATCH'
};

/** Thread comments sort enums */
export const enum ThreadCommentSort {
  Id = 'ID',
  IdDesc = 'ID_DESC'
};

/** Types that can be liked */
export const enum LikeableType {
  Thread = 'THREAD',
  ThreadComment = 'THREAD_COMMENT',
  Activity = 'ACTIVITY',
  ActivityReply = 'ACTIVITY_REPLY'
};

/** List of anime or manga */
export type MediaListCollection = {
  readonly __typename?: 'MediaListCollection';
  /** Grouped media list entries */
  readonly lists?: Maybe<ReadonlyArray<Maybe<MediaListGroup>>>;
  /** The owner of the list */
  readonly user?: Maybe<User>;
  /** If there is another chunk */
  readonly hasNextChunk?: Maybe<Scalars['Boolean']>;
  /**
   * A map of media list entry arrays grouped by status
   * @deprecated Not GraphQL spec compliant, use lists field instead.
   */
  readonly statusLists?: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<MediaList>>>>>;
  /**
   * A map of media list entry arrays grouped by custom lists
   * @deprecated Not GraphQL spec compliant, use lists field instead.
   */
  readonly customLists?: Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<MediaList>>>>>;
};


/** List of anime or manga */
export type MediaListCollectionStatusListsArgs = {
  asArray?: Maybe<Scalars['Boolean']>;
};


/** List of anime or manga */
export type MediaListCollectionCustomListsArgs = {
  asArray?: Maybe<Scalars['Boolean']>;
};

/** List group of anime or manga entries */
export type MediaListGroup = {
  readonly __typename?: 'MediaListGroup';
  /** Media list entries */
  readonly entries?: Maybe<ReadonlyArray<Maybe<MediaList>>>;
  readonly name?: Maybe<Scalars['String']>;
  readonly isCustomList?: Maybe<Scalars['Boolean']>;
  readonly isSplitCompletedList?: Maybe<Scalars['Boolean']>;
  readonly status?: Maybe<MediaListStatus>;
};

/** Provides the parsed markdown as html */
export type ParsedMarkdown = {
  readonly __typename?: 'ParsedMarkdown';
  /** The parsed markdown as html */
  readonly html?: Maybe<Scalars['String']>;
};

export type AniChartUser = {
  readonly __typename?: 'AniChartUser';
  readonly user?: Maybe<User>;
  readonly settings?: Maybe<Scalars['Json']>;
  readonly highlights?: Maybe<Scalars['Json']>;
};

export type SiteStatistics = {
  readonly __typename?: 'SiteStatistics';
  readonly users?: Maybe<SiteTrendConnection>;
  readonly anime?: Maybe<SiteTrendConnection>;
  readonly manga?: Maybe<SiteTrendConnection>;
  readonly characters?: Maybe<SiteTrendConnection>;
  readonly staff?: Maybe<SiteTrendConnection>;
  readonly studios?: Maybe<SiteTrendConnection>;
  readonly reviews?: Maybe<SiteTrendConnection>;
};


export type SiteStatisticsUsersArgs = {
  sort?: Maybe<ReadonlyArray<Maybe<SiteTrendSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type SiteStatisticsAnimeArgs = {
  sort?: Maybe<ReadonlyArray<Maybe<SiteTrendSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type SiteStatisticsMangaArgs = {
  sort?: Maybe<ReadonlyArray<Maybe<SiteTrendSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type SiteStatisticsCharactersArgs = {
  sort?: Maybe<ReadonlyArray<Maybe<SiteTrendSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type SiteStatisticsStaffArgs = {
  sort?: Maybe<ReadonlyArray<Maybe<SiteTrendSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type SiteStatisticsStudiosArgs = {
  sort?: Maybe<ReadonlyArray<Maybe<SiteTrendSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type SiteStatisticsReviewsArgs = {
  sort?: Maybe<ReadonlyArray<Maybe<SiteTrendSort>>>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};

/** Site trend sort enums */
export const enum SiteTrendSort {
  Date = 'DATE',
  DateDesc = 'DATE_DESC',
  Count = 'COUNT',
  CountDesc = 'COUNT_DESC',
  Change = 'CHANGE',
  ChangeDesc = 'CHANGE_DESC'
};

export type SiteTrendConnection = {
  readonly __typename?: 'SiteTrendConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<SiteTrendEdge>>>;
  readonly nodes?: Maybe<ReadonlyArray<Maybe<SiteTrend>>>;
  /** The pagination information */
  readonly pageInfo?: Maybe<PageInfo>;
};

/** Site trend connection edge */
export type SiteTrendEdge = {
  readonly __typename?: 'SiteTrendEdge';
  readonly node?: Maybe<SiteTrend>;
};

/** Daily site statistics */
export type SiteTrend = {
  readonly __typename?: 'SiteTrend';
  /** The day the data was recorded (timestamp) */
  readonly date: Scalars['Int'];
  readonly count: Scalars['Int'];
  /** The change from yesterday */
  readonly change: Scalars['Int'];
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly UpdateUser?: Maybe<User>;
  /** Create or update a media list entry */
  readonly SaveMediaListEntry?: Maybe<MediaList>;
  /** Update multiple media list entries to the same values */
  readonly UpdateMediaListEntries?: Maybe<ReadonlyArray<Maybe<MediaList>>>;
  /** Delete a media list entry */
  readonly DeleteMediaListEntry?: Maybe<Deleted>;
  /** Delete a custom list and remove the list entries from it */
  readonly DeleteCustomList?: Maybe<Deleted>;
  /** Create or update text activity for the currently authenticated user */
  readonly SaveTextActivity?: Maybe<TextActivity>;
  /** Create or update message activity for the currently authenticated user */
  readonly SaveMessageActivity?: Maybe<MessageActivity>;
  /** Update list activity (Mod Only) */
  readonly SaveListActivity?: Maybe<ListActivity>;
  /** Delete an activity item of the authenticated users */
  readonly DeleteActivity?: Maybe<Deleted>;
  /** Toggle the subscription of an activity item */
  readonly ToggleActivitySubscription?: Maybe<ActivityUnion>;
  /** Create or update an activity reply */
  readonly SaveActivityReply?: Maybe<ActivityReply>;
  /** Delete an activity reply of the authenticated users */
  readonly DeleteActivityReply?: Maybe<Deleted>;
  /**
   * Add or remove a like from a likeable type.
   *                           Returns all the users who liked the same model
   */
  readonly ToggleLike?: Maybe<ReadonlyArray<Maybe<User>>>;
  /** Add or remove a like from a likeable type. */
  readonly ToggleLikeV2?: Maybe<LikeableUnion>;
  /** Toggle the un/following of a user */
  readonly ToggleFollow?: Maybe<User>;
  /** Favourite or unfavourite an anime, manga, character, staff member, or studio */
  readonly ToggleFavourite?: Maybe<Favourites>;
  /** Update the order favourites are displayed in */
  readonly UpdateFavouriteOrder?: Maybe<Favourites>;
  /** Create or update a review */
  readonly SaveReview?: Maybe<Review>;
  /** Delete a review */
  readonly DeleteReview?: Maybe<Deleted>;
  /** Rate a review */
  readonly RateReview?: Maybe<Review>;
  /** Recommendation a media */
  readonly SaveRecommendation?: Maybe<Recommendation>;
  /** Create or update a forum thread */
  readonly SaveThread?: Maybe<Thread>;
  /** Delete a thread */
  readonly DeleteThread?: Maybe<Deleted>;
  /** Toggle the subscription of a forum thread */
  readonly ToggleThreadSubscription?: Maybe<Thread>;
  /** Create or update a thread comment */
  readonly SaveThreadComment?: Maybe<ThreadComment>;
  /** Delete a thread comment */
  readonly DeleteThreadComment?: Maybe<Deleted>;
  readonly UpdateAniChartSettings?: Maybe<Scalars['Json']>;
  readonly UpdateAniChartHighlights?: Maybe<Scalars['Json']>;
};


export type MutationUpdateUserArgs = {
  about?: Maybe<Scalars['String']>;
  titleLanguage?: Maybe<UserTitleLanguage>;
  displayAdultContent?: Maybe<Scalars['Boolean']>;
  airingNotifications?: Maybe<Scalars['Boolean']>;
  scoreFormat?: Maybe<ScoreFormat>;
  rowOrder?: Maybe<Scalars['String']>;
  profileColor?: Maybe<Scalars['String']>;
  donatorBadge?: Maybe<Scalars['String']>;
  notificationOptions?: Maybe<ReadonlyArray<Maybe<NotificationOptionInput>>>;
  animeListOptions?: Maybe<MediaListOptionsInput>;
  mangaListOptions?: Maybe<MediaListOptionsInput>;
};


export type MutationSaveMediaListEntryArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  status?: Maybe<MediaListStatus>;
  score?: Maybe<Scalars['Float']>;
  scoreRaw?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['Int']>;
  progressVolumes?: Maybe<Scalars['Int']>;
  repeat?: Maybe<Scalars['Int']>;
  priority?: Maybe<Scalars['Int']>;
  private?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  hiddenFromStatusLists?: Maybe<Scalars['Boolean']>;
  customLists?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  advancedScores?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  startedAt?: Maybe<FuzzyDateInput>;
  completedAt?: Maybe<FuzzyDateInput>;
};


export type MutationUpdateMediaListEntriesArgs = {
  status?: Maybe<MediaListStatus>;
  score?: Maybe<Scalars['Float']>;
  scoreRaw?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['Int']>;
  progressVolumes?: Maybe<Scalars['Int']>;
  repeat?: Maybe<Scalars['Int']>;
  priority?: Maybe<Scalars['Int']>;
  private?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  hiddenFromStatusLists?: Maybe<Scalars['Boolean']>;
  advancedScores?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  startedAt?: Maybe<FuzzyDateInput>;
  completedAt?: Maybe<FuzzyDateInput>;
  ids?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


export type MutationDeleteMediaListEntryArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type MutationDeleteCustomListArgs = {
  customList?: Maybe<Scalars['String']>;
  type?: Maybe<MediaType>;
};


export type MutationSaveTextActivityArgs = {
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  locked?: Maybe<Scalars['Boolean']>;
};


export type MutationSaveMessageActivityArgs = {
  id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  recipientId?: Maybe<Scalars['Int']>;
  private?: Maybe<Scalars['Boolean']>;
  locked?: Maybe<Scalars['Boolean']>;
  asMod?: Maybe<Scalars['Boolean']>;
};


export type MutationSaveListActivityArgs = {
  id?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteActivityArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type MutationToggleActivitySubscriptionArgs = {
  activityId?: Maybe<Scalars['Int']>;
  subscribe?: Maybe<Scalars['Boolean']>;
};


export type MutationSaveActivityReplyArgs = {
  id?: Maybe<Scalars['Int']>;
  activityId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  asMod?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteActivityReplyArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type MutationToggleLikeArgs = {
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<LikeableType>;
};


export type MutationToggleLikeV2Args = {
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<LikeableType>;
};


export type MutationToggleFollowArgs = {
  userId?: Maybe<Scalars['Int']>;
};


export type MutationToggleFavouriteArgs = {
  animeId?: Maybe<Scalars['Int']>;
  mangaId?: Maybe<Scalars['Int']>;
  characterId?: Maybe<Scalars['Int']>;
  staffId?: Maybe<Scalars['Int']>;
  studioId?: Maybe<Scalars['Int']>;
};


export type MutationUpdateFavouriteOrderArgs = {
  animeIds?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mangaIds?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  characterIds?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  staffIds?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  studioIds?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  animeOrder?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mangaOrder?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  characterOrder?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  staffOrder?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  studioOrder?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


export type MutationSaveReviewArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  body?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  private?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteReviewArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type MutationRateReviewArgs = {
  reviewId?: Maybe<Scalars['Int']>;
  rating?: Maybe<ReviewRating>;
};


export type MutationSaveRecommendationArgs = {
  mediaId?: Maybe<Scalars['Int']>;
  mediaRecommendationId?: Maybe<Scalars['Int']>;
  rating?: Maybe<RecommendationRating>;
};


export type MutationSaveThreadArgs = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  categories?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mediaCategories?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sticky?: Maybe<Scalars['Boolean']>;
  locked?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteThreadArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type MutationToggleThreadSubscriptionArgs = {
  threadId?: Maybe<Scalars['Int']>;
  subscribe?: Maybe<Scalars['Boolean']>;
};


export type MutationSaveThreadCommentArgs = {
  id?: Maybe<Scalars['Int']>;
  threadId?: Maybe<Scalars['Int']>;
  parentCommentId?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
};


export type MutationDeleteThreadCommentArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type MutationUpdateAniChartSettingsArgs = {
  titleLanguage?: Maybe<Scalars['String']>;
  outgoingLinkProvider?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
};


export type MutationUpdateAniChartHighlightsArgs = {
  highlights?: Maybe<ReadonlyArray<Maybe<AniChartHighlightInput>>>;
};

/** Notification option input */
export type NotificationOptionInput = {
  /** The type of notification */
  readonly type?: Maybe<NotificationType>;
  /** Whether this type of notification is enabled */
  readonly enabled?: Maybe<Scalars['Boolean']>;
};

/** A user's list options for anime or manga lists */
export type MediaListOptionsInput = {
  /** The order each list should be displayed in */
  readonly sectionOrder?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** If the completed sections of the list should be separated by format */
  readonly splitCompletedSectionByFormat?: Maybe<Scalars['Boolean']>;
  /** The names of the user's custom lists */
  readonly customLists?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** The names of the user's advanced scoring sections */
  readonly advancedScoring?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** If advanced scoring is enabled */
  readonly advancedScoringEnabled?: Maybe<Scalars['Boolean']>;
  /** list theme */
  readonly theme?: Maybe<Scalars['String']>;
};

/** Date object that allows for incomplete date values (fuzzy) */
export type FuzzyDateInput = {
  /** Numeric Year (2017) */
  readonly year?: Maybe<Scalars['Int']>;
  /** Numeric Month (3) */
  readonly month?: Maybe<Scalars['Int']>;
  /** Numeric Day (24) */
  readonly day?: Maybe<Scalars['Int']>;
};

/** Deleted data type */
export type Deleted = {
  readonly __typename?: 'Deleted';
  /** If an item has been successfully deleted */
  readonly deleted?: Maybe<Scalars['Boolean']>;
};

/** Likeable union type */
export type LikeableUnion = ListActivity | TextActivity | MessageActivity | ActivityReply | Thread | ThreadComment;

export type AniChartHighlightInput = {
  readonly mediaId?: Maybe<Scalars['Int']>;
  readonly highlight?: Maybe<Scalars['String']>;
};

/** Page of data (Used for internal use only) */
export type InternalPage = {
  readonly __typename?: 'InternalPage';
  readonly mediaSubmissions?: Maybe<ReadonlyArray<Maybe<MediaSubmission>>>;
  readonly characterSubmissions?: Maybe<ReadonlyArray<Maybe<CharacterSubmission>>>;
  readonly staffSubmissions?: Maybe<ReadonlyArray<Maybe<StaffSubmission>>>;
  readonly revisionHistory?: Maybe<ReadonlyArray<Maybe<RevisionHistory>>>;
  readonly reports?: Maybe<ReadonlyArray<Maybe<Report>>>;
  readonly modActions?: Maybe<ReadonlyArray<Maybe<ModAction>>>;
  /** The pagination information */
  readonly pageInfo?: Maybe<PageInfo>;
  readonly users?: Maybe<ReadonlyArray<Maybe<User>>>;
  readonly media?: Maybe<ReadonlyArray<Maybe<Media>>>;
  readonly characters?: Maybe<ReadonlyArray<Maybe<Character>>>;
  readonly staff?: Maybe<ReadonlyArray<Maybe<Staff>>>;
  readonly studios?: Maybe<ReadonlyArray<Maybe<Studio>>>;
  readonly mediaList?: Maybe<ReadonlyArray<Maybe<MediaList>>>;
  readonly airingSchedules?: Maybe<ReadonlyArray<Maybe<AiringSchedule>>>;
  readonly mediaTrends?: Maybe<ReadonlyArray<Maybe<MediaTrend>>>;
  readonly notifications?: Maybe<ReadonlyArray<Maybe<NotificationUnion>>>;
  readonly followers?: Maybe<ReadonlyArray<Maybe<User>>>;
  readonly following?: Maybe<ReadonlyArray<Maybe<User>>>;
  readonly activities?: Maybe<ReadonlyArray<Maybe<ActivityUnion>>>;
  readonly activityReplies?: Maybe<ReadonlyArray<Maybe<ActivityReply>>>;
  readonly threads?: Maybe<ReadonlyArray<Maybe<Thread>>>;
  readonly threadComments?: Maybe<ReadonlyArray<Maybe<ThreadComment>>>;
  readonly reviews?: Maybe<ReadonlyArray<Maybe<Review>>>;
  readonly recommendations?: Maybe<ReadonlyArray<Maybe<Recommendation>>>;
  readonly likes?: Maybe<ReadonlyArray<Maybe<User>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageMediaSubmissionsArgs = {
  mediaId?: Maybe<Scalars['Int']>;
  submissionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  status?: Maybe<SubmissionStatus>;
  type?: Maybe<MediaType>;
  sort?: Maybe<ReadonlyArray<Maybe<SubmissionSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageCharacterSubmissionsArgs = {
  characterId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  status?: Maybe<SubmissionStatus>;
  sort?: Maybe<ReadonlyArray<Maybe<SubmissionSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageStaffSubmissionsArgs = {
  staffId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  status?: Maybe<SubmissionStatus>;
  sort?: Maybe<ReadonlyArray<Maybe<SubmissionSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageRevisionHistoryArgs = {
  userId?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  characterId?: Maybe<Scalars['Int']>;
  staffId?: Maybe<Scalars['Int']>;
  studioId?: Maybe<Scalars['Int']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageModActionsArgs = {
  userId?: Maybe<Scalars['Int']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageUsersArgs = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<ReadonlyArray<Maybe<UserSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageMediaArgs = {
  id?: Maybe<Scalars['Int']>;
  idMal?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['FuzzyDateInt']>;
  endDate?: Maybe<Scalars['FuzzyDateInt']>;
  season?: Maybe<MediaSeason>;
  seasonYear?: Maybe<Scalars['Int']>;
  type?: Maybe<MediaType>;
  format?: Maybe<MediaFormat>;
  status?: Maybe<MediaStatus>;
  episodes?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  chapters?: Maybe<Scalars['Int']>;
  volumes?: Maybe<Scalars['Int']>;
  isAdult?: Maybe<Scalars['Boolean']>;
  genre?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  minimumTagRank?: Maybe<Scalars['Int']>;
  tagCategory?: Maybe<Scalars['String']>;
  onList?: Maybe<Scalars['Boolean']>;
  licensedBy?: Maybe<Scalars['String']>;
  averageScore?: Maybe<Scalars['Int']>;
  popularity?: Maybe<Scalars['Int']>;
  source?: Maybe<MediaSource>;
  countryOfOrigin?: Maybe<Scalars['CountryCode']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  idMal_not?: Maybe<Scalars['Int']>;
  idMal_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  idMal_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  startDate_greater?: Maybe<Scalars['FuzzyDateInt']>;
  startDate_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  startDate_like?: Maybe<Scalars['String']>;
  endDate_greater?: Maybe<Scalars['FuzzyDateInt']>;
  endDate_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  endDate_like?: Maybe<Scalars['String']>;
  format_in?: Maybe<ReadonlyArray<Maybe<MediaFormat>>>;
  format_not?: Maybe<MediaFormat>;
  format_not_in?: Maybe<ReadonlyArray<Maybe<MediaFormat>>>;
  status_in?: Maybe<ReadonlyArray<Maybe<MediaStatus>>>;
  status_not?: Maybe<MediaStatus>;
  status_not_in?: Maybe<ReadonlyArray<Maybe<MediaStatus>>>;
  episodes_greater?: Maybe<Scalars['Int']>;
  episodes_lesser?: Maybe<Scalars['Int']>;
  duration_greater?: Maybe<Scalars['Int']>;
  duration_lesser?: Maybe<Scalars['Int']>;
  chapters_greater?: Maybe<Scalars['Int']>;
  chapters_lesser?: Maybe<Scalars['Int']>;
  volumes_greater?: Maybe<Scalars['Int']>;
  volumes_lesser?: Maybe<Scalars['Int']>;
  genre_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  genre_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  tag_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  tag_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  tagCategory_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  tagCategory_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  licensedBy_in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  averageScore_not?: Maybe<Scalars['Int']>;
  averageScore_greater?: Maybe<Scalars['Int']>;
  averageScore_lesser?: Maybe<Scalars['Int']>;
  popularity_not?: Maybe<Scalars['Int']>;
  popularity_greater?: Maybe<Scalars['Int']>;
  popularity_lesser?: Maybe<Scalars['Int']>;
  source_in?: Maybe<ReadonlyArray<Maybe<MediaSource>>>;
  sort?: Maybe<ReadonlyArray<Maybe<MediaSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageCharactersArgs = {
  id?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sort?: Maybe<ReadonlyArray<Maybe<CharacterSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageStaffArgs = {
  id?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sort?: Maybe<ReadonlyArray<Maybe<StaffSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageStudiosArgs = {
  id?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sort?: Maybe<ReadonlyArray<Maybe<StudioSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageMediaListArgs = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
  type?: Maybe<MediaType>;
  status?: Maybe<MediaListStatus>;
  mediaId?: Maybe<Scalars['Int']>;
  isFollowing?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt?: Maybe<Scalars['FuzzyDateInt']>;
  compareWithAuthList?: Maybe<Scalars['Boolean']>;
  userId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  status_in?: Maybe<ReadonlyArray<Maybe<MediaListStatus>>>;
  status_not_in?: Maybe<ReadonlyArray<Maybe<MediaListStatus>>>;
  status_not?: Maybe<MediaListStatus>;
  mediaId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  notes_like?: Maybe<Scalars['String']>;
  startedAt_greater?: Maybe<Scalars['FuzzyDateInt']>;
  startedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  startedAt_like?: Maybe<Scalars['String']>;
  completedAt_greater?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt_lesser?: Maybe<Scalars['FuzzyDateInt']>;
  completedAt_like?: Maybe<Scalars['String']>;
  sort?: Maybe<ReadonlyArray<Maybe<MediaListSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageAiringSchedulesArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  airingAt?: Maybe<Scalars['Int']>;
  notYetAired?: Maybe<Scalars['Boolean']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mediaId_not?: Maybe<Scalars['Int']>;
  mediaId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  episode_not?: Maybe<Scalars['Int']>;
  episode_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  episode_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  episode_greater?: Maybe<Scalars['Int']>;
  episode_lesser?: Maybe<Scalars['Int']>;
  airingAt_greater?: Maybe<Scalars['Int']>;
  airingAt_lesser?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<AiringSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageMediaTrendsArgs = {
  mediaId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Int']>;
  trending?: Maybe<Scalars['Int']>;
  averageScore?: Maybe<Scalars['Int']>;
  popularity?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  releasing?: Maybe<Scalars['Boolean']>;
  mediaId_not?: Maybe<Scalars['Int']>;
  mediaId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  date_greater?: Maybe<Scalars['Int']>;
  date_lesser?: Maybe<Scalars['Int']>;
  trending_greater?: Maybe<Scalars['Int']>;
  trending_lesser?: Maybe<Scalars['Int']>;
  trending_not?: Maybe<Scalars['Int']>;
  averageScore_greater?: Maybe<Scalars['Int']>;
  averageScore_lesser?: Maybe<Scalars['Int']>;
  averageScore_not?: Maybe<Scalars['Int']>;
  popularity_greater?: Maybe<Scalars['Int']>;
  popularity_lesser?: Maybe<Scalars['Int']>;
  popularity_not?: Maybe<Scalars['Int']>;
  episode_greater?: Maybe<Scalars['Int']>;
  episode_lesser?: Maybe<Scalars['Int']>;
  episode_not?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<MediaTrendSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageNotificationsArgs = {
  type?: Maybe<NotificationType>;
  resetNotificationCount?: Maybe<Scalars['Boolean']>;
  type_in?: Maybe<ReadonlyArray<Maybe<NotificationType>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageFollowersArgs = {
  userId: Scalars['Int'];
  sort?: Maybe<ReadonlyArray<Maybe<UserSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageFollowingArgs = {
  userId: Scalars['Int'];
  sort?: Maybe<ReadonlyArray<Maybe<UserSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageActivitiesArgs = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  messengerId?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  type?: Maybe<ActivityType>;
  isFollowing?: Maybe<Scalars['Boolean']>;
  hasReplies?: Maybe<Scalars['Boolean']>;
  hasRepliesOrTypeText?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  id_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  userId_not?: Maybe<Scalars['Int']>;
  userId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  userId_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  messengerId_not?: Maybe<Scalars['Int']>;
  messengerId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  messengerId_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mediaId_not?: Maybe<Scalars['Int']>;
  mediaId_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  mediaId_not_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  type_not?: Maybe<ActivityType>;
  type_in?: Maybe<ReadonlyArray<Maybe<ActivityType>>>;
  type_not_in?: Maybe<ReadonlyArray<Maybe<ActivityType>>>;
  createdAt_greater?: Maybe<Scalars['Int']>;
  createdAt_lesser?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<ActivitySort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageActivityRepliesArgs = {
  id?: Maybe<Scalars['Int']>;
  activityId?: Maybe<Scalars['Int']>;
};


/** Page of data (Used for internal use only) */
export type InternalPageThreadsArgs = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  replyUserId?: Maybe<Scalars['Int']>;
  subscribed?: Maybe<Scalars['Boolean']>;
  categoryId?: Maybe<Scalars['Int']>;
  mediaCategoryId?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  id_in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sort?: Maybe<ReadonlyArray<Maybe<ThreadSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageThreadCommentsArgs = {
  id?: Maybe<Scalars['Int']>;
  threadId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<ThreadCommentSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageReviewsArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  mediaType?: Maybe<MediaType>;
  sort?: Maybe<ReadonlyArray<Maybe<ReviewSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageRecommendationsArgs = {
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  mediaRecommendationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  onList?: Maybe<Scalars['Boolean']>;
  rating_greater?: Maybe<Scalars['Int']>;
  rating_lesser?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<RecommendationSort>>>;
};


/** Page of data (Used for internal use only) */
export type InternalPageLikesArgs = {
  likeableId?: Maybe<Scalars['Int']>;
  type?: Maybe<LikeableType>;
};

/** Submission status */
export const enum SubmissionStatus {
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  PartiallyAccepted = 'PARTIALLY_ACCEPTED',
  Accepted = 'ACCEPTED'
};

/** Submission sort enums */
export const enum SubmissionSort {
  Id = 'ID',
  IdDesc = 'ID_DESC'
};

/** Media submission */
export type MediaSubmission = {
  readonly __typename?: 'MediaSubmission';
  /** The id of the submission */
  readonly id: Scalars['Int'];
  /** User submitter of the submission */
  readonly submitter?: Maybe<User>;
  /** Status of the submission */
  readonly status?: Maybe<SubmissionStatus>;
  readonly submitterStats?: Maybe<Scalars['Json']>;
  readonly notes?: Maybe<Scalars['String']>;
  readonly source?: Maybe<Scalars['String']>;
  readonly changes?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly media?: Maybe<Media>;
  readonly submission?: Maybe<Media>;
  readonly characters?: Maybe<ReadonlyArray<Maybe<MediaSubmissionComparison>>>;
  readonly staff?: Maybe<ReadonlyArray<Maybe<MediaSubmissionComparison>>>;
  readonly studios?: Maybe<ReadonlyArray<Maybe<MediaSubmissionComparison>>>;
  readonly relations?: Maybe<ReadonlyArray<Maybe<MediaEdge>>>;
  readonly externalLinks?: Maybe<ReadonlyArray<Maybe<MediaExternalLink>>>;
  readonly createdAt?: Maybe<Scalars['Int']>;
};

/** Media submission with comparison to current data */
export type MediaSubmissionComparison = {
  readonly __typename?: 'MediaSubmissionComparison';
  readonly submission?: Maybe<MediaSubmissionEdge>;
  readonly character?: Maybe<MediaCharacter>;
  readonly staff?: Maybe<StaffEdge>;
  readonly studio?: Maybe<StudioEdge>;
};

export type MediaSubmissionEdge = {
  readonly __typename?: 'MediaSubmissionEdge';
  /** The id of the direct submission */
  readonly id?: Maybe<Scalars['Int']>;
  readonly characterRole?: Maybe<CharacterRole>;
  readonly staffRole?: Maybe<Scalars['String']>;
  readonly isMain?: Maybe<Scalars['Boolean']>;
  readonly character?: Maybe<Character>;
  readonly characterSubmission?: Maybe<Character>;
  readonly voiceActor?: Maybe<Staff>;
  readonly voiceActorSubmission?: Maybe<Staff>;
  readonly staff?: Maybe<Staff>;
  readonly staffSubmission?: Maybe<Staff>;
  readonly studio?: Maybe<Studio>;
  readonly media?: Maybe<Media>;
};

/** Internal - Media characters separated */
export type MediaCharacter = {
  readonly __typename?: 'MediaCharacter';
  /** The id of the connection */
  readonly id?: Maybe<Scalars['Int']>;
  /** The characters role in the media */
  readonly role?: Maybe<CharacterRole>;
  /** The characters in the media voiced by the parent actor */
  readonly character?: Maybe<Character>;
  /** The voice actor of the character */
  readonly voiceActor?: Maybe<Staff>;
};

/** A submission for a character that features in an anime or manga */
export type CharacterSubmission = {
  readonly __typename?: 'CharacterSubmission';
  /** The id of the submission */
  readonly id: Scalars['Int'];
  /** Character that the submission is referencing */
  readonly character?: Maybe<Character>;
  /** The character submission changes */
  readonly submission?: Maybe<Character>;
  /** Submitter for the submission */
  readonly submitter?: Maybe<User>;
  /** Status of the submission */
  readonly status?: Maybe<SubmissionStatus>;
  /** Inner details of submission status */
  readonly notes?: Maybe<Scalars['String']>;
  readonly source?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['Int']>;
};

/** A submission for a staff that features in an anime or manga */
export type StaffSubmission = {
  readonly __typename?: 'StaffSubmission';
  /** The id of the submission */
  readonly id: Scalars['Int'];
  /** Staff that the submission is referencing */
  readonly staff?: Maybe<Staff>;
  /** The staff submission changes */
  readonly submission?: Maybe<Staff>;
  /** Submitter for the submission */
  readonly submitter?: Maybe<User>;
  /** Status of the submission */
  readonly status?: Maybe<SubmissionStatus>;
  /** Inner details of submission status */
  readonly notes?: Maybe<Scalars['String']>;
  readonly source?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['Int']>;
};

/** Feed of mod edit activity */
export type RevisionHistory = {
  readonly __typename?: 'RevisionHistory';
  /** The id of the media */
  readonly id: Scalars['Int'];
  /** The action taken on the objects */
  readonly action?: Maybe<RevisionHistoryAction>;
  /** A JSON object of the fields that changed */
  readonly changes?: Maybe<Scalars['Json']>;
  /** The user who made the edit to the object */
  readonly user?: Maybe<User>;
  /** The media the mod feed entry references */
  readonly media?: Maybe<Media>;
  /** The character the mod feed entry references */
  readonly character?: Maybe<Character>;
  /** The staff member the mod feed entry references */
  readonly staff?: Maybe<Staff>;
  /** The studio the mod feed entry references */
  readonly studio?: Maybe<Studio>;
  /** When the mod feed entry was created */
  readonly createdAt?: Maybe<Scalars['Int']>;
};

/** Revision history actions */
export const enum RevisionHistoryAction {
  Create = 'CREATE',
  Edit = 'EDIT'
};

export type Report = {
  readonly __typename?: 'Report';
  readonly id: Scalars['Int'];
  readonly reporter?: Maybe<User>;
  readonly reported?: Maybe<User>;
  readonly reason?: Maybe<Scalars['String']>;
  /** When the entry data was created */
  readonly createdAt?: Maybe<Scalars['Int']>;
};

export type ModAction = {
  readonly __typename?: 'ModAction';
  /** The id of the action */
  readonly id: Scalars['Int'];
  readonly user?: Maybe<User>;
  readonly mod?: Maybe<User>;
  readonly type?: Maybe<ModActionType>;
  readonly objectId?: Maybe<Scalars['Int']>;
  readonly objectType?: Maybe<Scalars['String']>;
  readonly data?: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['Int'];
};

export const enum ModActionType {
  Note = 'NOTE',
  Ban = 'BAN',
  Delete = 'DELETE',
  Edit = 'EDIT',
  Expire = 'EXPIRE',
  Report = 'REPORT',
  Reset = 'RESET',
  Anon = 'ANON'
};

/** The official titles of the media in various languages */
export type MediaTitleInput = {
  /** The romanization of the native language title */
  readonly romaji?: Maybe<Scalars['String']>;
  /** The official english title */
  readonly english?: Maybe<Scalars['String']>;
  /** Official title in it's native language */
  readonly native?: Maybe<Scalars['String']>;
};

/** An external link to another site related to the media */
export type MediaExternalLinkInput = {
  /** The id of the external link */
  readonly id: Scalars['Int'];
  /** The url of the external link */
  readonly url: Scalars['String'];
  /** The site location of the external link */
  readonly site: Scalars['String'];
};

export type AiringScheduleInput = {
  readonly airingAt?: Maybe<Scalars['Int']>;
  readonly episode?: Maybe<Scalars['Int']>;
  readonly timeUntilAiring?: Maybe<Scalars['Int']>;
};

/** The names of the character */
export type CharacterNameInput = {
  /** The character's given name */
  readonly first?: Maybe<Scalars['String']>;
  /** The character's surname */
  readonly last?: Maybe<Scalars['String']>;
  /** The character's full name in their native language */
  readonly native?: Maybe<Scalars['String']>;
  /** Other names the character might be referred by */
  readonly alternative?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type CharacterSubmissionConnection = {
  readonly __typename?: 'CharacterSubmissionConnection';
  readonly edges?: Maybe<ReadonlyArray<Maybe<CharacterSubmissionEdge>>>;
  readonly nodes?: Maybe<ReadonlyArray<Maybe<CharacterSubmission>>>;
  /** The pagination information */
  readonly pageInfo?: Maybe<PageInfo>;
};

/** CharacterSubmission connection edge */
export type CharacterSubmissionEdge = {
  readonly __typename?: 'CharacterSubmissionEdge';
  readonly node?: Maybe<CharacterSubmission>;
  /** The characters role in the media */
  readonly role?: Maybe<CharacterRole>;
  /** The voice actors of the character */
  readonly voiceActors?: Maybe<ReadonlyArray<Maybe<Staff>>>;
  /** The submitted voice actors of the character */
  readonly submittedVoiceActors?: Maybe<ReadonlyArray<Maybe<StaffSubmission>>>;
};

/** The names of the staff member */
export type StaffNameInput = {
  /** The person's given name */
  readonly first?: Maybe<Scalars['String']>;
  /** The person's surname */
  readonly last?: Maybe<Scalars['String']>;
  /** The person's full name in their native language */
  readonly native?: Maybe<Scalars['String']>;
  /** Other names the character might be referred by */
  readonly alternative?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

/** User data for moderators */
export type UserModData = {
  readonly __typename?: 'UserModData';
  readonly alts?: Maybe<ReadonlyArray<Maybe<User>>>;
  readonly bans?: Maybe<Scalars['Json']>;
  readonly ip?: Maybe<Scalars['Json']>;
  readonly counts?: Maybe<Scalars['Json']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Page: ResolverTypeWrapper<Omit<Page, 'notifications' | 'activities'> & { notifications?: Maybe<ReadonlyArray<Maybe<ResolversTypes['NotificationUnion']>>>, activities?: Maybe<ReadonlyArray<Maybe<ResolversTypes['ActivityUnion']>>> }>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  UserSort: UserSort;
  User: ResolverTypeWrapper<User>;
  UserAvatar: ResolverTypeWrapper<UserAvatar>;
  Json: ResolverTypeWrapper<Scalars['Json']>;
  UserOptions: ResolverTypeWrapper<UserOptions>;
  UserTitleLanguage: UserTitleLanguage;
  NotificationOption: ResolverTypeWrapper<NotificationOption>;
  NotificationType: NotificationType;
  MediaListOptions: ResolverTypeWrapper<MediaListOptions>;
  ScoreFormat: ScoreFormat;
  MediaListTypeOptions: ResolverTypeWrapper<MediaListTypeOptions>;
  Favourites: ResolverTypeWrapper<Favourites>;
  MediaConnection: ResolverTypeWrapper<MediaConnection>;
  MediaEdge: ResolverTypeWrapper<MediaEdge>;
  Media: ResolverTypeWrapper<Media>;
  MediaTitle: ResolverTypeWrapper<MediaTitle>;
  MediaType: MediaType;
  MediaFormat: MediaFormat;
  MediaStatus: MediaStatus;
  FuzzyDate: ResolverTypeWrapper<FuzzyDate>;
  MediaSeason: MediaSeason;
  CountryCode: ResolverTypeWrapper<Scalars['CountryCode']>;
  MediaSource: MediaSource;
  MediaTrailer: ResolverTypeWrapper<MediaTrailer>;
  MediaCoverImage: ResolverTypeWrapper<MediaCoverImage>;
  MediaTag: ResolverTypeWrapper<MediaTag>;
  CharacterSort: CharacterSort;
  CharacterRole: CharacterRole;
  CharacterConnection: ResolverTypeWrapper<CharacterConnection>;
  CharacterEdge: ResolverTypeWrapper<CharacterEdge>;
  Character: ResolverTypeWrapper<Character>;
  CharacterName: ResolverTypeWrapper<CharacterName>;
  CharacterImage: ResolverTypeWrapper<CharacterImage>;
  MediaSort: MediaSort;
  StaffLanguage: StaffLanguage;
  StaffSort: StaffSort;
  Staff: ResolverTypeWrapper<Staff>;
  StaffName: ResolverTypeWrapper<StaffName>;
  StaffImage: ResolverTypeWrapper<StaffImage>;
  StaffConnection: ResolverTypeWrapper<StaffConnection>;
  StaffEdge: ResolverTypeWrapper<StaffEdge>;
  StudioSort: StudioSort;
  StudioConnection: ResolverTypeWrapper<StudioConnection>;
  StudioEdge: ResolverTypeWrapper<StudioEdge>;
  Studio: ResolverTypeWrapper<Studio>;
  AiringSchedule: ResolverTypeWrapper<AiringSchedule>;
  AiringScheduleConnection: ResolverTypeWrapper<AiringScheduleConnection>;
  AiringScheduleEdge: ResolverTypeWrapper<AiringScheduleEdge>;
  MediaTrendSort: MediaTrendSort;
  MediaTrendConnection: ResolverTypeWrapper<MediaTrendConnection>;
  MediaTrendEdge: ResolverTypeWrapper<MediaTrendEdge>;
  MediaTrend: ResolverTypeWrapper<MediaTrend>;
  MediaExternalLink: ResolverTypeWrapper<MediaExternalLink>;
  MediaStreamingEpisode: ResolverTypeWrapper<MediaStreamingEpisode>;
  MediaRank: ResolverTypeWrapper<MediaRank>;
  MediaRankType: MediaRankType;
  MediaList: ResolverTypeWrapper<MediaList>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  MediaListStatus: MediaListStatus;
  ReviewSort: ReviewSort;
  ReviewConnection: ResolverTypeWrapper<ReviewConnection>;
  ReviewEdge: ResolverTypeWrapper<ReviewEdge>;
  Review: ResolverTypeWrapper<Review>;
  ReviewRating: ReviewRating;
  RecommendationSort: RecommendationSort;
  RecommendationConnection: ResolverTypeWrapper<RecommendationConnection>;
  RecommendationEdge: ResolverTypeWrapper<RecommendationEdge>;
  Recommendation: ResolverTypeWrapper<Recommendation>;
  RecommendationRating: RecommendationRating;
  MediaStats: ResolverTypeWrapper<MediaStats>;
  ScoreDistribution: ResolverTypeWrapper<ScoreDistribution>;
  StatusDistribution: ResolverTypeWrapper<StatusDistribution>;
  AiringProgression: ResolverTypeWrapper<AiringProgression>;
  MediaRelation: MediaRelation;
  UserStatisticTypes: ResolverTypeWrapper<UserStatisticTypes>;
  UserStatistics: ResolverTypeWrapper<UserStatistics>;
  UserStatisticsSort: UserStatisticsSort;
  UserFormatStatistic: ResolverTypeWrapper<UserFormatStatistic>;
  UserStatusStatistic: ResolverTypeWrapper<UserStatusStatistic>;
  UserScoreStatistic: ResolverTypeWrapper<UserScoreStatistic>;
  UserLengthStatistic: ResolverTypeWrapper<UserLengthStatistic>;
  UserReleaseYearStatistic: ResolverTypeWrapper<UserReleaseYearStatistic>;
  UserStartYearStatistic: ResolverTypeWrapper<UserStartYearStatistic>;
  UserGenreStatistic: ResolverTypeWrapper<UserGenreStatistic>;
  UserTagStatistic: ResolverTypeWrapper<UserTagStatistic>;
  UserCountryStatistic: ResolverTypeWrapper<UserCountryStatistic>;
  UserVoiceActorStatistic: ResolverTypeWrapper<UserVoiceActorStatistic>;
  UserStaffStatistic: ResolverTypeWrapper<UserStaffStatistic>;
  UserStudioStatistic: ResolverTypeWrapper<UserStudioStatistic>;
  UserStats: ResolverTypeWrapper<UserStats>;
  UserActivityHistory: ResolverTypeWrapper<UserActivityHistory>;
  ListScoreStats: ResolverTypeWrapper<ListScoreStats>;
  GenreStats: ResolverTypeWrapper<GenreStats>;
  TagStats: ResolverTypeWrapper<TagStats>;
  StaffStats: ResolverTypeWrapper<StaffStats>;
  StudioStats: ResolverTypeWrapper<StudioStats>;
  YearStats: ResolverTypeWrapper<YearStats>;
  FormatStats: ResolverTypeWrapper<FormatStats>;
  FuzzyDateInt: ResolverTypeWrapper<Scalars['FuzzyDateInt']>;
  MediaListSort: MediaListSort;
  AiringSort: AiringSort;
  NotificationUnion: ResolversTypes['AiringNotification'] | ResolversTypes['FollowingNotification'] | ResolversTypes['ActivityMessageNotification'] | ResolversTypes['ActivityMentionNotification'] | ResolversTypes['ActivityReplyNotification'] | ResolversTypes['ActivityReplySubscribedNotification'] | ResolversTypes['ActivityLikeNotification'] | ResolversTypes['ActivityReplyLikeNotification'] | ResolversTypes['ThreadCommentMentionNotification'] | ResolversTypes['ThreadCommentReplyNotification'] | ResolversTypes['ThreadCommentSubscribedNotification'] | ResolversTypes['ThreadCommentLikeNotification'] | ResolversTypes['ThreadLikeNotification'] | ResolversTypes['RelatedMediaAdditionNotification'];
  AiringNotification: ResolverTypeWrapper<AiringNotification>;
  FollowingNotification: ResolverTypeWrapper<FollowingNotification>;
  ActivityMessageNotification: ResolverTypeWrapper<ActivityMessageNotification>;
  MessageActivity: ResolverTypeWrapper<MessageActivity>;
  ActivityType: ActivityType;
  ActivityReply: ResolverTypeWrapper<ActivityReply>;
  ActivityMentionNotification: ResolverTypeWrapper<Omit<ActivityMentionNotification, 'activity'> & { activity?: Maybe<ResolversTypes['ActivityUnion']> }>;
  ActivityUnion: ResolversTypes['TextActivity'] | ResolversTypes['ListActivity'] | ResolversTypes['MessageActivity'];
  TextActivity: ResolverTypeWrapper<TextActivity>;
  ListActivity: ResolverTypeWrapper<ListActivity>;
  ActivityReplyNotification: ResolverTypeWrapper<Omit<ActivityReplyNotification, 'activity'> & { activity?: Maybe<ResolversTypes['ActivityUnion']> }>;
  ActivityReplySubscribedNotification: ResolverTypeWrapper<Omit<ActivityReplySubscribedNotification, 'activity'> & { activity?: Maybe<ResolversTypes['ActivityUnion']> }>;
  ActivityLikeNotification: ResolverTypeWrapper<Omit<ActivityLikeNotification, 'activity'> & { activity?: Maybe<ResolversTypes['ActivityUnion']> }>;
  ActivityReplyLikeNotification: ResolverTypeWrapper<Omit<ActivityReplyLikeNotification, 'activity'> & { activity?: Maybe<ResolversTypes['ActivityUnion']> }>;
  ThreadCommentMentionNotification: ResolverTypeWrapper<ThreadCommentMentionNotification>;
  Thread: ResolverTypeWrapper<Thread>;
  ThreadCategory: ResolverTypeWrapper<ThreadCategory>;
  ThreadComment: ResolverTypeWrapper<ThreadComment>;
  ThreadCommentReplyNotification: ResolverTypeWrapper<ThreadCommentReplyNotification>;
  ThreadCommentSubscribedNotification: ResolverTypeWrapper<ThreadCommentSubscribedNotification>;
  ThreadCommentLikeNotification: ResolverTypeWrapper<ThreadCommentLikeNotification>;
  ThreadLikeNotification: ResolverTypeWrapper<ThreadLikeNotification>;
  RelatedMediaAdditionNotification: ResolverTypeWrapper<RelatedMediaAdditionNotification>;
  ActivitySort: ActivitySort;
  ThreadSort: ThreadSort;
  ThreadCommentSort: ThreadCommentSort;
  LikeableType: LikeableType;
  MediaListCollection: ResolverTypeWrapper<MediaListCollection>;
  MediaListGroup: ResolverTypeWrapper<MediaListGroup>;
  ParsedMarkdown: ResolverTypeWrapper<ParsedMarkdown>;
  AniChartUser: ResolverTypeWrapper<AniChartUser>;
  SiteStatistics: ResolverTypeWrapper<SiteStatistics>;
  SiteTrendSort: SiteTrendSort;
  SiteTrendConnection: ResolverTypeWrapper<SiteTrendConnection>;
  SiteTrendEdge: ResolverTypeWrapper<SiteTrendEdge>;
  SiteTrend: ResolverTypeWrapper<SiteTrend>;
  Mutation: ResolverTypeWrapper<{}>;
  NotificationOptionInput: NotificationOptionInput;
  MediaListOptionsInput: MediaListOptionsInput;
  FuzzyDateInput: FuzzyDateInput;
  Deleted: ResolverTypeWrapper<Deleted>;
  LikeableUnion: ResolversTypes['ListActivity'] | ResolversTypes['TextActivity'] | ResolversTypes['MessageActivity'] | ResolversTypes['ActivityReply'] | ResolversTypes['Thread'] | ResolversTypes['ThreadComment'];
  AniChartHighlightInput: AniChartHighlightInput;
  InternalPage: ResolverTypeWrapper<Omit<InternalPage, 'notifications' | 'activities'> & { notifications?: Maybe<ReadonlyArray<Maybe<ResolversTypes['NotificationUnion']>>>, activities?: Maybe<ReadonlyArray<Maybe<ResolversTypes['ActivityUnion']>>> }>;
  SubmissionStatus: SubmissionStatus;
  SubmissionSort: SubmissionSort;
  MediaSubmission: ResolverTypeWrapper<MediaSubmission>;
  MediaSubmissionComparison: ResolverTypeWrapper<MediaSubmissionComparison>;
  MediaSubmissionEdge: ResolverTypeWrapper<MediaSubmissionEdge>;
  MediaCharacter: ResolverTypeWrapper<MediaCharacter>;
  CharacterSubmission: ResolverTypeWrapper<CharacterSubmission>;
  StaffSubmission: ResolverTypeWrapper<StaffSubmission>;
  RevisionHistory: ResolverTypeWrapper<RevisionHistory>;
  RevisionHistoryAction: RevisionHistoryAction;
  Report: ResolverTypeWrapper<Report>;
  ModAction: ResolverTypeWrapper<ModAction>;
  ModActionType: ModActionType;
  MediaTitleInput: MediaTitleInput;
  MediaExternalLinkInput: MediaExternalLinkInput;
  AiringScheduleInput: AiringScheduleInput;
  CharacterNameInput: CharacterNameInput;
  CharacterSubmissionConnection: ResolverTypeWrapper<CharacterSubmissionConnection>;
  CharacterSubmissionEdge: ResolverTypeWrapper<CharacterSubmissionEdge>;
  StaffNameInput: StaffNameInput;
  UserModData: ResolverTypeWrapper<UserModData>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
  String: Scalars['String'];
  Page: Omit<Page, 'notifications' | 'activities'> & { notifications?: Maybe<ReadonlyArray<Maybe<ResolversParentTypes['NotificationUnion']>>>, activities?: Maybe<ReadonlyArray<Maybe<ResolversParentTypes['ActivityUnion']>>> };
  PageInfo: PageInfo;
  User: User;
  UserAvatar: UserAvatar;
  Json: Scalars['Json'];
  UserOptions: UserOptions;
  NotificationOption: NotificationOption;
  MediaListOptions: MediaListOptions;
  MediaListTypeOptions: MediaListTypeOptions;
  Favourites: Favourites;
  MediaConnection: MediaConnection;
  MediaEdge: MediaEdge;
  Media: Media;
  MediaTitle: MediaTitle;
  FuzzyDate: FuzzyDate;
  CountryCode: Scalars['CountryCode'];
  MediaTrailer: MediaTrailer;
  MediaCoverImage: MediaCoverImage;
  MediaTag: MediaTag;
  CharacterConnection: CharacterConnection;
  CharacterEdge: CharacterEdge;
  Character: Character;
  CharacterName: CharacterName;
  CharacterImage: CharacterImage;
  Staff: Staff;
  StaffName: StaffName;
  StaffImage: StaffImage;
  StaffConnection: StaffConnection;
  StaffEdge: StaffEdge;
  StudioConnection: StudioConnection;
  StudioEdge: StudioEdge;
  Studio: Studio;
  AiringSchedule: AiringSchedule;
  AiringScheduleConnection: AiringScheduleConnection;
  AiringScheduleEdge: AiringScheduleEdge;
  MediaTrendConnection: MediaTrendConnection;
  MediaTrendEdge: MediaTrendEdge;
  MediaTrend: MediaTrend;
  MediaExternalLink: MediaExternalLink;
  MediaStreamingEpisode: MediaStreamingEpisode;
  MediaRank: MediaRank;
  MediaList: MediaList;
  Float: Scalars['Float'];
  ReviewConnection: ReviewConnection;
  ReviewEdge: ReviewEdge;
  Review: Review;
  RecommendationConnection: RecommendationConnection;
  RecommendationEdge: RecommendationEdge;
  Recommendation: Recommendation;
  MediaStats: MediaStats;
  ScoreDistribution: ScoreDistribution;
  StatusDistribution: StatusDistribution;
  AiringProgression: AiringProgression;
  UserStatisticTypes: UserStatisticTypes;
  UserStatistics: UserStatistics;
  UserFormatStatistic: UserFormatStatistic;
  UserStatusStatistic: UserStatusStatistic;
  UserScoreStatistic: UserScoreStatistic;
  UserLengthStatistic: UserLengthStatistic;
  UserReleaseYearStatistic: UserReleaseYearStatistic;
  UserStartYearStatistic: UserStartYearStatistic;
  UserGenreStatistic: UserGenreStatistic;
  UserTagStatistic: UserTagStatistic;
  UserCountryStatistic: UserCountryStatistic;
  UserVoiceActorStatistic: UserVoiceActorStatistic;
  UserStaffStatistic: UserStaffStatistic;
  UserStudioStatistic: UserStudioStatistic;
  UserStats: UserStats;
  UserActivityHistory: UserActivityHistory;
  ListScoreStats: ListScoreStats;
  GenreStats: GenreStats;
  TagStats: TagStats;
  StaffStats: StaffStats;
  StudioStats: StudioStats;
  YearStats: YearStats;
  FormatStats: FormatStats;
  FuzzyDateInt: Scalars['FuzzyDateInt'];
  NotificationUnion: ResolversParentTypes['AiringNotification'] | ResolversParentTypes['FollowingNotification'] | ResolversParentTypes['ActivityMessageNotification'] | ResolversParentTypes['ActivityMentionNotification'] | ResolversParentTypes['ActivityReplyNotification'] | ResolversParentTypes['ActivityReplySubscribedNotification'] | ResolversParentTypes['ActivityLikeNotification'] | ResolversParentTypes['ActivityReplyLikeNotification'] | ResolversParentTypes['ThreadCommentMentionNotification'] | ResolversParentTypes['ThreadCommentReplyNotification'] | ResolversParentTypes['ThreadCommentSubscribedNotification'] | ResolversParentTypes['ThreadCommentLikeNotification'] | ResolversParentTypes['ThreadLikeNotification'] | ResolversParentTypes['RelatedMediaAdditionNotification'];
  AiringNotification: AiringNotification;
  FollowingNotification: FollowingNotification;
  ActivityMessageNotification: ActivityMessageNotification;
  MessageActivity: MessageActivity;
  ActivityReply: ActivityReply;
  ActivityMentionNotification: Omit<ActivityMentionNotification, 'activity'> & { activity?: Maybe<ResolversParentTypes['ActivityUnion']> };
  ActivityUnion: ResolversParentTypes['TextActivity'] | ResolversParentTypes['ListActivity'] | ResolversParentTypes['MessageActivity'];
  TextActivity: TextActivity;
  ListActivity: ListActivity;
  ActivityReplyNotification: Omit<ActivityReplyNotification, 'activity'> & { activity?: Maybe<ResolversParentTypes['ActivityUnion']> };
  ActivityReplySubscribedNotification: Omit<ActivityReplySubscribedNotification, 'activity'> & { activity?: Maybe<ResolversParentTypes['ActivityUnion']> };
  ActivityLikeNotification: Omit<ActivityLikeNotification, 'activity'> & { activity?: Maybe<ResolversParentTypes['ActivityUnion']> };
  ActivityReplyLikeNotification: Omit<ActivityReplyLikeNotification, 'activity'> & { activity?: Maybe<ResolversParentTypes['ActivityUnion']> };
  ThreadCommentMentionNotification: ThreadCommentMentionNotification;
  Thread: Thread;
  ThreadCategory: ThreadCategory;
  ThreadComment: ThreadComment;
  ThreadCommentReplyNotification: ThreadCommentReplyNotification;
  ThreadCommentSubscribedNotification: ThreadCommentSubscribedNotification;
  ThreadCommentLikeNotification: ThreadCommentLikeNotification;
  ThreadLikeNotification: ThreadLikeNotification;
  RelatedMediaAdditionNotification: RelatedMediaAdditionNotification;
  MediaListCollection: MediaListCollection;
  MediaListGroup: MediaListGroup;
  ParsedMarkdown: ParsedMarkdown;
  AniChartUser: AniChartUser;
  SiteStatistics: SiteStatistics;
  SiteTrendConnection: SiteTrendConnection;
  SiteTrendEdge: SiteTrendEdge;
  SiteTrend: SiteTrend;
  Mutation: {};
  NotificationOptionInput: NotificationOptionInput;
  MediaListOptionsInput: MediaListOptionsInput;
  FuzzyDateInput: FuzzyDateInput;
  Deleted: Deleted;
  LikeableUnion: ResolversParentTypes['ListActivity'] | ResolversParentTypes['TextActivity'] | ResolversParentTypes['MessageActivity'] | ResolversParentTypes['ActivityReply'] | ResolversParentTypes['Thread'] | ResolversParentTypes['ThreadComment'];
  AniChartHighlightInput: AniChartHighlightInput;
  InternalPage: Omit<InternalPage, 'notifications' | 'activities'> & { notifications?: Maybe<ReadonlyArray<Maybe<ResolversParentTypes['NotificationUnion']>>>, activities?: Maybe<ReadonlyArray<Maybe<ResolversParentTypes['ActivityUnion']>>> };
  MediaSubmission: MediaSubmission;
  MediaSubmissionComparison: MediaSubmissionComparison;
  MediaSubmissionEdge: MediaSubmissionEdge;
  MediaCharacter: MediaCharacter;
  CharacterSubmission: CharacterSubmission;
  StaffSubmission: StaffSubmission;
  RevisionHistory: RevisionHistory;
  Report: Report;
  ModAction: ModAction;
  MediaTitleInput: MediaTitleInput;
  MediaExternalLinkInput: MediaExternalLinkInput;
  AiringScheduleInput: AiringScheduleInput;
  CharacterNameInput: CharacterNameInput;
  CharacterSubmissionConnection: CharacterSubmissionConnection;
  CharacterSubmissionEdge: CharacterSubmissionEdge;
  StaffNameInput: StaffNameInput;
  UserModData: UserModData;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  Page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<QueryPageArgs, never>>;
  Media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType, RequireFields<QueryMediaArgs, never>>;
  MediaTrend?: Resolver<Maybe<ResolversTypes['MediaTrend']>, ParentType, ContextType, RequireFields<QueryMediaTrendArgs, never>>;
  AiringSchedule?: Resolver<Maybe<ResolversTypes['AiringSchedule']>, ParentType, ContextType, RequireFields<QueryAiringScheduleArgs, never>>;
  Character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, RequireFields<QueryCharacterArgs, never>>;
  Staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType, RequireFields<QueryStaffArgs, never>>;
  MediaList?: Resolver<Maybe<ResolversTypes['MediaList']>, ParentType, ContextType, RequireFields<QueryMediaListArgs, never>>;
  MediaListCollection?: Resolver<Maybe<ResolversTypes['MediaListCollection']>, ParentType, ContextType, RequireFields<QueryMediaListCollectionArgs, never>>;
  GenreCollection?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  MediaTagCollection?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaTag']>>>, ParentType, ContextType, RequireFields<QueryMediaTagCollectionArgs, never>>;
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, never>>;
  Viewer?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  Notification?: Resolver<Maybe<ResolversTypes['NotificationUnion']>, ParentType, ContextType, RequireFields<QueryNotificationArgs, never>>;
  Studio?: Resolver<Maybe<ResolversTypes['Studio']>, ParentType, ContextType, RequireFields<QueryStudioArgs, never>>;
  Review?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<QueryReviewArgs, never>>;
  Activity?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType, RequireFields<QueryActivityArgs, never>>;
  ActivityReply?: Resolver<Maybe<ResolversTypes['ActivityReply']>, ParentType, ContextType, RequireFields<QueryActivityReplyArgs, never>>;
  Following?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryFollowingArgs, 'userId'>>;
  Follower?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryFollowerArgs, 'userId'>>;
  Thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType, RequireFields<QueryThreadArgs, never>>;
  ThreadComment?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ThreadComment']>>>, ParentType, ContextType, RequireFields<QueryThreadCommentArgs, never>>;
  Recommendation?: Resolver<Maybe<ResolversTypes['Recommendation']>, ParentType, ContextType, RequireFields<QueryRecommendationArgs, never>>;
  Like?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryLikeArgs, never>>;
  Markdown?: Resolver<Maybe<ResolversTypes['ParsedMarkdown']>, ParentType, ContextType, RequireFields<QueryMarkdownArgs, 'markdown'>>;
  AniChartUser?: Resolver<Maybe<ResolversTypes['AniChartUser']>, ParentType, ContextType>;
  SiteStatistics?: Resolver<Maybe<ResolversTypes['SiteStatistics']>, ParentType, ContextType>;
};

export type PageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']> = {
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  users?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<PageUsersArgs, never>>;
  media?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Media']>>>, ParentType, ContextType, RequireFields<PageMediaArgs, never>>;
  characters?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType, RequireFields<PageCharactersArgs, never>>;
  staff?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Staff']>>>, ParentType, ContextType, RequireFields<PageStaffArgs, never>>;
  studios?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Studio']>>>, ParentType, ContextType, RequireFields<PageStudiosArgs, never>>;
  mediaList?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaList']>>>, ParentType, ContextType, RequireFields<PageMediaListArgs, never>>;
  airingSchedules?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['AiringSchedule']>>>, ParentType, ContextType, RequireFields<PageAiringSchedulesArgs, never>>;
  mediaTrends?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaTrend']>>>, ParentType, ContextType, RequireFields<PageMediaTrendsArgs, never>>;
  notifications?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['NotificationUnion']>>>, ParentType, ContextType, RequireFields<PageNotificationsArgs, never>>;
  followers?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<PageFollowersArgs, 'userId'>>;
  following?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<PageFollowingArgs, 'userId'>>;
  activities?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ActivityUnion']>>>, ParentType, ContextType, RequireFields<PageActivitiesArgs, never>>;
  activityReplies?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ActivityReply']>>>, ParentType, ContextType, RequireFields<PageActivityRepliesArgs, never>>;
  threads?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Thread']>>>, ParentType, ContextType, RequireFields<PageThreadsArgs, never>>;
  threadComments?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ThreadComment']>>>, ParentType, ContextType, RequireFields<PageThreadCommentsArgs, never>>;
  reviews?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType, RequireFields<PageReviewsArgs, never>>;
  recommendations?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Recommendation']>>>, ParentType, ContextType, RequireFields<PageRecommendationsArgs, never>>;
  likes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<PageLikesArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  currentPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  about?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<UserAboutArgs, never>>;
  avatar?: Resolver<Maybe<ResolversTypes['UserAvatar']>, ParentType, ContextType>;
  bannerImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isFollowing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isFollower?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isBlocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  bans?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  options?: Resolver<Maybe<ResolversTypes['UserOptions']>, ParentType, ContextType>;
  mediaListOptions?: Resolver<Maybe<ResolversTypes['MediaListOptions']>, ParentType, ContextType>;
  favourites?: Resolver<Maybe<ResolversTypes['Favourites']>, ParentType, ContextType, RequireFields<UserFavouritesArgs, never>>;
  statistics?: Resolver<Maybe<ResolversTypes['UserStatisticTypes']>, ParentType, ContextType>;
  unreadNotificationCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  donatorTier?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  donatorBadge?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  moderatorStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stats?: Resolver<Maybe<ResolversTypes['UserStats']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserAvatarResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAvatar'] = ResolversParentTypes['UserAvatar']> = {
  large?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  medium?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Json'], any> {
  name: 'Json';
}

export type UserOptionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserOptions'] = ResolversParentTypes['UserOptions']> = {
  titleLanguage?: Resolver<Maybe<ResolversTypes['UserTitleLanguage']>, ParentType, ContextType>;
  displayAdultContent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  airingNotifications?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  profileColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notificationOptions?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['NotificationOption']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type NotificationOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationOption'] = ResolversParentTypes['NotificationOption']> = {
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaListOptionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaListOptions'] = ResolversParentTypes['MediaListOptions']> = {
  scoreFormat?: Resolver<Maybe<ResolversTypes['ScoreFormat']>, ParentType, ContextType>;
  rowOrder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  useLegacyLists?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  animeList?: Resolver<Maybe<ResolversTypes['MediaListTypeOptions']>, ParentType, ContextType>;
  mangaList?: Resolver<Maybe<ResolversTypes['MediaListTypeOptions']>, ParentType, ContextType>;
  sharedTheme?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  sharedThemeEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaListTypeOptionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaListTypeOptions'] = ResolversParentTypes['MediaListTypeOptions']> = {
  sectionOrder?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  splitCompletedSectionByFormat?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  theme?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  customLists?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  advancedScoring?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  advancedScoringEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FavouritesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Favourites'] = ResolversParentTypes['Favourites']> = {
  anime?: Resolver<Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType, RequireFields<FavouritesAnimeArgs, never>>;
  manga?: Resolver<Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType, RequireFields<FavouritesMangaArgs, never>>;
  characters?: Resolver<Maybe<ResolversTypes['CharacterConnection']>, ParentType, ContextType, RequireFields<FavouritesCharactersArgs, never>>;
  staff?: Resolver<Maybe<ResolversTypes['StaffConnection']>, ParentType, ContextType, RequireFields<FavouritesStaffArgs, never>>;
  studios?: Resolver<Maybe<ResolversTypes['StudioConnection']>, ParentType, ContextType, RequireFields<FavouritesStudiosArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaConnection'] = ResolversParentTypes['MediaConnection']> = {
  edges?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Media']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaEdge'] = ResolversParentTypes['MediaEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  relationType?: Resolver<Maybe<ResolversTypes['MediaRelation']>, ParentType, ContextType, RequireFields<MediaEdgeRelationTypeArgs, never>>;
  isMainStudio?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  characters?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
  characterRole?: Resolver<Maybe<ResolversTypes['CharacterRole']>, ParentType, ContextType>;
  staffRole?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  voiceActors?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Staff']>>>, ParentType, ContextType, RequireFields<MediaEdgeVoiceActorsArgs, never>>;
  favouriteOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Media'] = ResolversParentTypes['Media']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  idMal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['MediaTitle']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['MediaType']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['MediaFormat']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['MediaStatus']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MediaDescriptionArgs, never>>;
  startDate?: Resolver<Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>;
  season?: Resolver<Maybe<ResolversTypes['MediaSeason']>, ParentType, ContextType>;
  seasonYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  seasonInt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  episodes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  chapters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  countryOfOrigin?: Resolver<Maybe<ResolversTypes['CountryCode']>, ParentType, ContextType>;
  isLicensed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['MediaSource']>, ParentType, ContextType, RequireFields<MediaSourceArgs, never>>;
  hashtag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trailer?: Resolver<Maybe<ResolversTypes['MediaTrailer']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  coverImage?: Resolver<Maybe<ResolversTypes['MediaCoverImage']>, ParentType, ContextType>;
  bannerImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genres?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  synonyms?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  averageScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  popularity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isLocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  trending?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  favourites?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaTag']>>>, ParentType, ContextType>;
  relations?: Resolver<Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType>;
  characters?: Resolver<Maybe<ResolversTypes['CharacterConnection']>, ParentType, ContextType, RequireFields<MediaCharactersArgs, never>>;
  staff?: Resolver<Maybe<ResolversTypes['StaffConnection']>, ParentType, ContextType, RequireFields<MediaStaffArgs, never>>;
  studios?: Resolver<Maybe<ResolversTypes['StudioConnection']>, ParentType, ContextType, RequireFields<MediaStudiosArgs, never>>;
  isFavourite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isAdult?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  nextAiringEpisode?: Resolver<Maybe<ResolversTypes['AiringSchedule']>, ParentType, ContextType>;
  airingSchedule?: Resolver<Maybe<ResolversTypes['AiringScheduleConnection']>, ParentType, ContextType, RequireFields<MediaAiringScheduleArgs, never>>;
  trends?: Resolver<Maybe<ResolversTypes['MediaTrendConnection']>, ParentType, ContextType, RequireFields<MediaTrendsArgs, never>>;
  externalLinks?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaExternalLink']>>>, ParentType, ContextType>;
  streamingEpisodes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaStreamingEpisode']>>>, ParentType, ContextType>;
  rankings?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaRank']>>>, ParentType, ContextType>;
  mediaListEntry?: Resolver<Maybe<ResolversTypes['MediaList']>, ParentType, ContextType>;
  reviews?: Resolver<Maybe<ResolversTypes['ReviewConnection']>, ParentType, ContextType, RequireFields<MediaReviewsArgs, never>>;
  recommendations?: Resolver<Maybe<ResolversTypes['RecommendationConnection']>, ParentType, ContextType, RequireFields<MediaRecommendationsArgs, never>>;
  stats?: Resolver<Maybe<ResolversTypes['MediaStats']>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  autoCreateForumThread?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isRecommendationBlocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  modNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaTitleResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaTitle'] = ResolversParentTypes['MediaTitle']> = {
  romaji?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MediaTitleRomajiArgs, never>>;
  english?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MediaTitleEnglishArgs, never>>;
  native?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MediaTitleNativeArgs, never>>;
  userPreferred?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FuzzyDateResolvers<ContextType = any, ParentType extends ResolversParentTypes['FuzzyDate'] = ResolversParentTypes['FuzzyDate']> = {
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface CountryCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['CountryCode'], any> {
  name: 'CountryCode';
}

export type MediaTrailerResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaTrailer'] = ResolversParentTypes['MediaTrailer']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  site?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaCoverImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaCoverImage'] = ResolversParentTypes['MediaCoverImage']> = {
  extraLarge?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  large?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  medium?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaTag'] = ResolversParentTypes['MediaTag']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isGeneralSpoiler?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isMediaSpoiler?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isAdult?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CharacterConnection'] = ResolversParentTypes['CharacterConnection']> = {
  edges?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['CharacterEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CharacterEdge'] = ResolversParentTypes['CharacterEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['CharacterRole']>, ParentType, ContextType>;
  voiceActors?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Staff']>>>, ParentType, ContextType, RequireFields<CharacterEdgeVoiceActorsArgs, never>>;
  media?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Media']>>>, ParentType, ContextType>;
  favouriteOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['CharacterName']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['CharacterImage']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<CharacterDescriptionArgs, never>>;
  isFavourite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType, RequireFields<CharacterMediaArgs, never>>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  favourites?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  modNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['CharacterName'] = ResolversParentTypes['CharacterName']> = {
  first?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  full?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  native?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alternative?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CharacterImage'] = ResolversParentTypes['CharacterImage']> = {
  large?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  medium?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StaffResolvers<ContextType = any, ParentType extends ResolversParentTypes['Staff'] = ResolversParentTypes['Staff']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['StaffName']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['StaffLanguage']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['StaffImage']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<StaffDescriptionArgs, never>>;
  isFavourite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  staffMedia?: Resolver<Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType, RequireFields<StaffStaffMediaArgs, never>>;
  characters?: Resolver<Maybe<ResolversTypes['CharacterConnection']>, ParentType, ContextType, RequireFields<StaffCharactersArgs, never>>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  submitter?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  submissionStatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  submissionNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  favourites?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  modNotes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StaffNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffName'] = ResolversParentTypes['StaffName']> = {
  first?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  full?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  native?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alternative?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StaffImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffImage'] = ResolversParentTypes['StaffImage']> = {
  large?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  medium?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StaffConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffConnection'] = ResolversParentTypes['StaffConnection']> = {
  edges?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['StaffEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Staff']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StaffEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffEdge'] = ResolversParentTypes['StaffEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  favouriteOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StudioConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StudioConnection'] = ResolversParentTypes['StudioConnection']> = {
  edges?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['StudioEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Studio']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StudioEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StudioEdge'] = ResolversParentTypes['StudioEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['Studio']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isMain?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  favouriteOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StudioResolvers<ContextType = any, ParentType extends ResolversParentTypes['Studio'] = ResolversParentTypes['Studio']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isAnimationStudio?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType, RequireFields<StudioMediaArgs, never>>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isFavourite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  favourites?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AiringScheduleResolvers<ContextType = any, ParentType extends ResolversParentTypes['AiringSchedule'] = ResolversParentTypes['AiringSchedule']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  airingAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timeUntilAiring?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  episode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AiringScheduleConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AiringScheduleConnection'] = ResolversParentTypes['AiringScheduleConnection']> = {
  edges?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['AiringScheduleEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['AiringSchedule']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AiringScheduleEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AiringScheduleEdge'] = ResolversParentTypes['AiringScheduleEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['AiringSchedule']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaTrendConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaTrendConnection'] = ResolversParentTypes['MediaTrendConnection']> = {
  edges?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaTrendEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaTrend']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaTrendEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaTrendEdge'] = ResolversParentTypes['MediaTrendEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['MediaTrend']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaTrendResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaTrend'] = ResolversParentTypes['MediaTrend']> = {
  mediaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  trending?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  averageScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  popularity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  inProgress?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  releasing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  episode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaExternalLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaExternalLink'] = ResolversParentTypes['MediaExternalLink']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  site?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaStreamingEpisodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaStreamingEpisode'] = ResolversParentTypes['MediaStreamingEpisode']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  site?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaRankResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaRank'] = ResolversParentTypes['MediaRank']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['MediaRankType'], ParentType, ContextType>;
  format?: Resolver<ResolversTypes['MediaFormat'], ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  season?: Resolver<Maybe<ResolversTypes['MediaSeason']>, ParentType, ContextType>;
  allTime?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  context?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaListResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaList'] = ResolversParentTypes['MediaList']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['MediaListStatus']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<MediaListScoreArgs, never>>;
  progress?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  progressVolumes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  repeat?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  private?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hiddenFromStatusLists?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  customLists?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType, RequireFields<MediaListCustomListsArgs, never>>;
  advancedScores?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  startedAt?: Resolver<Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>;
  completedAt?: Resolver<Maybe<ResolversTypes['FuzzyDate']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ReviewConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewConnection'] = ResolversParentTypes['ReviewConnection']> = {
  edges?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ReviewEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ReviewEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewEdge'] = ResolversParentTypes['ReviewEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaType?: Resolver<Maybe<ResolversTypes['MediaType']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ReviewBodyArgs, never>>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ratingAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userRating?: Resolver<Maybe<ResolversTypes['ReviewRating']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  private?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RecommendationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecommendationConnection'] = ResolversParentTypes['RecommendationConnection']> = {
  edges?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['RecommendationEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Recommendation']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RecommendationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecommendationEdge'] = ResolversParentTypes['RecommendationEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['Recommendation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RecommendationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Recommendation'] = ResolversParentTypes['Recommendation']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userRating?: Resolver<Maybe<ResolversTypes['RecommendationRating']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  mediaRecommendation?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaStats'] = ResolversParentTypes['MediaStats']> = {
  scoreDistribution?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ScoreDistribution']>>>, ParentType, ContextType>;
  statusDistribution?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['StatusDistribution']>>>, ParentType, ContextType>;
  airingProgression?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['AiringProgression']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ScoreDistributionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScoreDistribution'] = ResolversParentTypes['ScoreDistribution']> = {
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StatusDistributionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StatusDistribution'] = ResolversParentTypes['StatusDistribution']> = {
  status?: Resolver<Maybe<ResolversTypes['MediaListStatus']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AiringProgressionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AiringProgression'] = ResolversParentTypes['AiringProgression']> = {
  episode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  watching?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserStatisticTypesResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserStatisticTypes'] = ResolversParentTypes['UserStatisticTypes']> = {
  anime?: Resolver<Maybe<ResolversTypes['UserStatistics']>, ParentType, ContextType>;
  manga?: Resolver<Maybe<ResolversTypes['UserStatistics']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserStatisticsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserStatistics'] = ResolversParentTypes['UserStatistics']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  standardDeviation?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  episodesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  volumesRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  formats?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['UserFormatStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsFormatsArgs, never>>;
  statuses?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['UserStatusStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsStatusesArgs, never>>;
  scores?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['UserScoreStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsScoresArgs, never>>;
  lengths?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['UserLengthStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsLengthsArgs, never>>;
  releaseYears?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['UserReleaseYearStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsReleaseYearsArgs, never>>;
  startYears?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['UserStartYearStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsStartYearsArgs, never>>;
  genres?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['UserGenreStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsGenresArgs, never>>;
  tags?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['UserTagStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsTagsArgs, never>>;
  countries?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['UserCountryStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsCountriesArgs, never>>;
  voiceActors?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['UserVoiceActorStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsVoiceActorsArgs, never>>;
  staff?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['UserStaffStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsStaffArgs, never>>;
  studios?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['UserStudioStatistic']>>>, ParentType, ContextType, RequireFields<UserStatisticsStudiosArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserFormatStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserFormatStatistic'] = ResolversParentTypes['UserFormatStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['MediaFormat']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserStatusStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserStatusStatistic'] = ResolversParentTypes['UserStatusStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['MediaListStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserScoreStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserScoreStatistic'] = ResolversParentTypes['UserScoreStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserLengthStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserLengthStatistic'] = ResolversParentTypes['UserLengthStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserReleaseYearStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserReleaseYearStatistic'] = ResolversParentTypes['UserReleaseYearStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  releaseYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserStartYearStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserStartYearStatistic'] = ResolversParentTypes['UserStartYearStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  startYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserGenreStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGenreStatistic'] = ResolversParentTypes['UserGenreStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  genre?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserTagStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserTagStatistic'] = ResolversParentTypes['UserTagStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes['MediaTag']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserCountryStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCountryStatistic'] = ResolversParentTypes['UserCountryStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['CountryCode']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserVoiceActorStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVoiceActorStatistic'] = ResolversParentTypes['UserVoiceActorStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  voiceActor?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  characterIds?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserStaffStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserStaffStatistic'] = ResolversParentTypes['UserStaffStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserStudioStatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserStudioStatistic'] = ResolversParentTypes['UserStudioStatistic']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chaptersRead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaIds?: Resolver<ReadonlyArray<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  studio?: Resolver<Maybe<ResolversTypes['Studio']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserStats'] = ResolversParentTypes['UserStats']> = {
  watchedTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  chaptersRead?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  activityHistory?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['UserActivityHistory']>>>, ParentType, ContextType>;
  animeStatusDistribution?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['StatusDistribution']>>>, ParentType, ContextType>;
  mangaStatusDistribution?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['StatusDistribution']>>>, ParentType, ContextType>;
  animeScoreDistribution?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ScoreDistribution']>>>, ParentType, ContextType>;
  mangaScoreDistribution?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ScoreDistribution']>>>, ParentType, ContextType>;
  animeListScores?: Resolver<Maybe<ResolversTypes['ListScoreStats']>, ParentType, ContextType>;
  mangaListScores?: Resolver<Maybe<ResolversTypes['ListScoreStats']>, ParentType, ContextType>;
  favouredGenresOverview?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['GenreStats']>>>, ParentType, ContextType>;
  favouredGenres?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['GenreStats']>>>, ParentType, ContextType>;
  favouredTags?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['TagStats']>>>, ParentType, ContextType>;
  favouredActors?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['StaffStats']>>>, ParentType, ContextType>;
  favouredStaff?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['StaffStats']>>>, ParentType, ContextType>;
  favouredStudios?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['StudioStats']>>>, ParentType, ContextType>;
  favouredYears?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['YearStats']>>>, ParentType, ContextType>;
  favouredFormats?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['FormatStats']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserActivityHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserActivityHistory'] = ResolversParentTypes['UserActivityHistory']> = {
  date?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ListScoreStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListScoreStats'] = ResolversParentTypes['ListScoreStats']> = {
  meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  standardDeviation?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type GenreStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenreStats'] = ResolversParentTypes['GenreStats']> = {
  genre?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timeWatched?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TagStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagStats'] = ResolversParentTypes['TagStats']> = {
  tag?: Resolver<Maybe<ResolversTypes['MediaTag']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timeWatched?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StaffStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffStats'] = ResolversParentTypes['StaffStats']> = {
  staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timeWatched?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StudioStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['StudioStats'] = ResolversParentTypes['StudioStats']> = {
  studio?: Resolver<Maybe<ResolversTypes['Studio']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timeWatched?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type YearStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['YearStats'] = ResolversParentTypes['YearStats']> = {
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meanScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FormatStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['FormatStats'] = ResolversParentTypes['FormatStats']> = {
  format?: Resolver<Maybe<ResolversTypes['MediaFormat']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface FuzzyDateIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['FuzzyDateInt'], any> {
  name: 'FuzzyDateInt';
}

export type NotificationUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationUnion'] = ResolversParentTypes['NotificationUnion']> = {
  __resolveType: TypeResolveFn<'AiringNotification' | 'FollowingNotification' | 'ActivityMessageNotification' | 'ActivityMentionNotification' | 'ActivityReplyNotification' | 'ActivityReplySubscribedNotification' | 'ActivityLikeNotification' | 'ActivityReplyLikeNotification' | 'ThreadCommentMentionNotification' | 'ThreadCommentReplyNotification' | 'ThreadCommentSubscribedNotification' | 'ThreadCommentLikeNotification' | 'ThreadLikeNotification' | 'RelatedMediaAdditionNotification', ParentType, ContextType>;
};

export type AiringNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AiringNotification'] = ResolversParentTypes['AiringNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  animeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  episode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contexts?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FollowingNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['FollowingNotification'] = ResolversParentTypes['FollowingNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ActivityMessageNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityMessageNotification'] = ResolversParentTypes['ActivityMessageNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  activityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['MessageActivity']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MessageActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageActivity'] = ResolversParentTypes['MessageActivity']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  recipientId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  messengerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ActivityType']>, ParentType, ContextType>;
  replyCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MessageActivityMessageArgs, never>>;
  isLocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isPrivate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  messenger?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  replies?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ActivityReply']>>>, ParentType, ContextType>;
  likes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ActivityReplyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityReply'] = ResolversParentTypes['ActivityReply']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  activityId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ActivityReplyTextArgs, never>>;
  likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  likes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ActivityMentionNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityMentionNotification'] = ResolversParentTypes['ActivityMentionNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  activityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  activity?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ActivityUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityUnion'] = ResolversParentTypes['ActivityUnion']> = {
  __resolveType: TypeResolveFn<'TextActivity' | 'ListActivity' | 'MessageActivity', ParentType, ContextType>;
};

export type TextActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextActivity'] = ResolversParentTypes['TextActivity']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ActivityType']>, ParentType, ContextType>;
  replyCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<TextActivityTextArgs, never>>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isLocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  replies?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ActivityReply']>>>, ParentType, ContextType>;
  likes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ListActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListActivity'] = ResolversParentTypes['ListActivity']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ActivityType']>, ParentType, ContextType>;
  replyCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isLocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  replies?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ActivityReply']>>>, ParentType, ContextType>;
  likes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ActivityReplyNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityReplyNotification'] = ResolversParentTypes['ActivityReplyNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  activityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  activity?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ActivityReplySubscribedNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityReplySubscribedNotification'] = ResolversParentTypes['ActivityReplySubscribedNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  activityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  activity?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ActivityLikeNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityLikeNotification'] = ResolversParentTypes['ActivityLikeNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  activityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  activity?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ActivityReplyLikeNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityReplyLikeNotification'] = ResolversParentTypes['ActivityReplyLikeNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  activityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  activity?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ThreadCommentMentionNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThreadCommentMentionNotification'] = ResolversParentTypes['ThreadCommentMentionNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  commentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ThreadResolvers<ContextType = any, ParentType extends ResolversParentTypes['Thread'] = ResolversParentTypes['Thread']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ThreadBodyArgs, never>>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  replyUserId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  replyCommentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  replyCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  viewCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isLocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSticky?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSubscribed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  repliedAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  replyUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  likes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ThreadCategory']>>>, ParentType, ContextType>;
  mediaCategories?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Media']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ThreadCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThreadCategory'] = ResolversParentTypes['ThreadCategory']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ThreadCommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThreadComment'] = ResolversParentTypes['ThreadComment']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  threadId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ThreadCommentCommentArgs, never>>;
  likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  likes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  childComments?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ThreadCommentReplyNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThreadCommentReplyNotification'] = ResolversParentTypes['ThreadCommentReplyNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  commentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ThreadCommentSubscribedNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThreadCommentSubscribedNotification'] = ResolversParentTypes['ThreadCommentSubscribedNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  commentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ThreadCommentLikeNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThreadCommentLikeNotification'] = ResolversParentTypes['ThreadCommentLikeNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  commentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ThreadLikeNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThreadLikeNotification'] = ResolversParentTypes['ThreadLikeNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  threadId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RelatedMediaAdditionNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['RelatedMediaAdditionNotification'] = ResolversParentTypes['RelatedMediaAdditionNotification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['NotificationType']>, ParentType, ContextType>;
  mediaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaListCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaListCollection'] = ResolversParentTypes['MediaListCollection']> = {
  lists?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaListGroup']>>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  hasNextChunk?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  statusLists?: Resolver<Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaList']>>>>>, ParentType, ContextType, RequireFields<MediaListCollectionStatusListsArgs, never>>;
  customLists?: Resolver<Maybe<ReadonlyArray<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaList']>>>>>, ParentType, ContextType, RequireFields<MediaListCollectionCustomListsArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaListGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaListGroup'] = ResolversParentTypes['MediaListGroup']> = {
  entries?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaList']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isCustomList?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSplitCompletedList?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['MediaListStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ParsedMarkdownResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParsedMarkdown'] = ResolversParentTypes['ParsedMarkdown']> = {
  html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type AniChartUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AniChartUser'] = ResolversParentTypes['AniChartUser']> = {
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  settings?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  highlights?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SiteStatisticsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteStatistics'] = ResolversParentTypes['SiteStatistics']> = {
  users?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, RequireFields<SiteStatisticsUsersArgs, never>>;
  anime?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, RequireFields<SiteStatisticsAnimeArgs, never>>;
  manga?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, RequireFields<SiteStatisticsMangaArgs, never>>;
  characters?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, RequireFields<SiteStatisticsCharactersArgs, never>>;
  staff?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, RequireFields<SiteStatisticsStaffArgs, never>>;
  studios?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, RequireFields<SiteStatisticsStudiosArgs, never>>;
  reviews?: Resolver<Maybe<ResolversTypes['SiteTrendConnection']>, ParentType, ContextType, RequireFields<SiteStatisticsReviewsArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SiteTrendConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteTrendConnection'] = ResolversParentTypes['SiteTrendConnection']> = {
  edges?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['SiteTrendEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['SiteTrend']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SiteTrendEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteTrendEdge'] = ResolversParentTypes['SiteTrendEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['SiteTrend']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SiteTrendResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteTrend'] = ResolversParentTypes['SiteTrend']> = {
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  change?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  UpdateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, never>>;
  SaveMediaListEntry?: Resolver<Maybe<ResolversTypes['MediaList']>, ParentType, ContextType, RequireFields<MutationSaveMediaListEntryArgs, never>>;
  UpdateMediaListEntries?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaList']>>>, ParentType, ContextType, RequireFields<MutationUpdateMediaListEntriesArgs, never>>;
  DeleteMediaListEntry?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, RequireFields<MutationDeleteMediaListEntryArgs, never>>;
  DeleteCustomList?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, RequireFields<MutationDeleteCustomListArgs, never>>;
  SaveTextActivity?: Resolver<Maybe<ResolversTypes['TextActivity']>, ParentType, ContextType, RequireFields<MutationSaveTextActivityArgs, never>>;
  SaveMessageActivity?: Resolver<Maybe<ResolversTypes['MessageActivity']>, ParentType, ContextType, RequireFields<MutationSaveMessageActivityArgs, never>>;
  SaveListActivity?: Resolver<Maybe<ResolversTypes['ListActivity']>, ParentType, ContextType, RequireFields<MutationSaveListActivityArgs, never>>;
  DeleteActivity?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, RequireFields<MutationDeleteActivityArgs, never>>;
  ToggleActivitySubscription?: Resolver<Maybe<ResolversTypes['ActivityUnion']>, ParentType, ContextType, RequireFields<MutationToggleActivitySubscriptionArgs, never>>;
  SaveActivityReply?: Resolver<Maybe<ResolversTypes['ActivityReply']>, ParentType, ContextType, RequireFields<MutationSaveActivityReplyArgs, never>>;
  DeleteActivityReply?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, RequireFields<MutationDeleteActivityReplyArgs, never>>;
  ToggleLike?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<MutationToggleLikeArgs, never>>;
  ToggleLikeV2?: Resolver<Maybe<ResolversTypes['LikeableUnion']>, ParentType, ContextType, RequireFields<MutationToggleLikeV2Args, never>>;
  ToggleFollow?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationToggleFollowArgs, never>>;
  ToggleFavourite?: Resolver<Maybe<ResolversTypes['Favourites']>, ParentType, ContextType, RequireFields<MutationToggleFavouriteArgs, never>>;
  UpdateFavouriteOrder?: Resolver<Maybe<ResolversTypes['Favourites']>, ParentType, ContextType, RequireFields<MutationUpdateFavouriteOrderArgs, never>>;
  SaveReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationSaveReviewArgs, never>>;
  DeleteReview?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, RequireFields<MutationDeleteReviewArgs, never>>;
  RateReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationRateReviewArgs, never>>;
  SaveRecommendation?: Resolver<Maybe<ResolversTypes['Recommendation']>, ParentType, ContextType, RequireFields<MutationSaveRecommendationArgs, never>>;
  SaveThread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType, RequireFields<MutationSaveThreadArgs, never>>;
  DeleteThread?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, RequireFields<MutationDeleteThreadArgs, never>>;
  ToggleThreadSubscription?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType, RequireFields<MutationToggleThreadSubscriptionArgs, never>>;
  SaveThreadComment?: Resolver<Maybe<ResolversTypes['ThreadComment']>, ParentType, ContextType, RequireFields<MutationSaveThreadCommentArgs, never>>;
  DeleteThreadComment?: Resolver<Maybe<ResolversTypes['Deleted']>, ParentType, ContextType, RequireFields<MutationDeleteThreadCommentArgs, never>>;
  UpdateAniChartSettings?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType, RequireFields<MutationUpdateAniChartSettingsArgs, never>>;
  UpdateAniChartHighlights?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType, RequireFields<MutationUpdateAniChartHighlightsArgs, never>>;
};

export type DeletedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Deleted'] = ResolversParentTypes['Deleted']> = {
  deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type LikeableUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikeableUnion'] = ResolversParentTypes['LikeableUnion']> = {
  __resolveType: TypeResolveFn<'ListActivity' | 'TextActivity' | 'MessageActivity' | 'ActivityReply' | 'Thread' | 'ThreadComment', ParentType, ContextType>;
};

export type InternalPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['InternalPage'] = ResolversParentTypes['InternalPage']> = {
  mediaSubmissions?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaSubmission']>>>, ParentType, ContextType, RequireFields<InternalPageMediaSubmissionsArgs, never>>;
  characterSubmissions?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['CharacterSubmission']>>>, ParentType, ContextType, RequireFields<InternalPageCharacterSubmissionsArgs, never>>;
  staffSubmissions?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['StaffSubmission']>>>, ParentType, ContextType, RequireFields<InternalPageStaffSubmissionsArgs, never>>;
  revisionHistory?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['RevisionHistory']>>>, ParentType, ContextType, RequireFields<InternalPageRevisionHistoryArgs, never>>;
  reports?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Report']>>>, ParentType, ContextType>;
  modActions?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ModAction']>>>, ParentType, ContextType, RequireFields<InternalPageModActionsArgs, never>>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  users?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<InternalPageUsersArgs, never>>;
  media?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Media']>>>, ParentType, ContextType, RequireFields<InternalPageMediaArgs, never>>;
  characters?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType, RequireFields<InternalPageCharactersArgs, never>>;
  staff?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Staff']>>>, ParentType, ContextType, RequireFields<InternalPageStaffArgs, never>>;
  studios?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Studio']>>>, ParentType, ContextType, RequireFields<InternalPageStudiosArgs, never>>;
  mediaList?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaList']>>>, ParentType, ContextType, RequireFields<InternalPageMediaListArgs, never>>;
  airingSchedules?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['AiringSchedule']>>>, ParentType, ContextType, RequireFields<InternalPageAiringSchedulesArgs, never>>;
  mediaTrends?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaTrend']>>>, ParentType, ContextType, RequireFields<InternalPageMediaTrendsArgs, never>>;
  notifications?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['NotificationUnion']>>>, ParentType, ContextType, RequireFields<InternalPageNotificationsArgs, never>>;
  followers?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<InternalPageFollowersArgs, 'userId'>>;
  following?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<InternalPageFollowingArgs, 'userId'>>;
  activities?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ActivityUnion']>>>, ParentType, ContextType, RequireFields<InternalPageActivitiesArgs, never>>;
  activityReplies?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ActivityReply']>>>, ParentType, ContextType, RequireFields<InternalPageActivityRepliesArgs, never>>;
  threads?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Thread']>>>, ParentType, ContextType, RequireFields<InternalPageThreadsArgs, never>>;
  threadComments?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['ThreadComment']>>>, ParentType, ContextType, RequireFields<InternalPageThreadCommentsArgs, never>>;
  reviews?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType, RequireFields<InternalPageReviewsArgs, never>>;
  recommendations?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Recommendation']>>>, ParentType, ContextType, RequireFields<InternalPageRecommendationsArgs, never>>;
  likes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<InternalPageLikesArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaSubmissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaSubmission'] = ResolversParentTypes['MediaSubmission']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  submitter?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['SubmissionStatus']>, ParentType, ContextType>;
  submitterStats?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  changes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  submission?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  characters?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaSubmissionComparison']>>>, ParentType, ContextType>;
  staff?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaSubmissionComparison']>>>, ParentType, ContextType>;
  studios?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaSubmissionComparison']>>>, ParentType, ContextType>;
  relations?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaEdge']>>>, ParentType, ContextType>;
  externalLinks?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['MediaExternalLink']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaSubmissionComparisonResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaSubmissionComparison'] = ResolversParentTypes['MediaSubmissionComparison']> = {
  submission?: Resolver<Maybe<ResolversTypes['MediaSubmissionEdge']>, ParentType, ContextType>;
  character?: Resolver<Maybe<ResolversTypes['MediaCharacter']>, ParentType, ContextType>;
  staff?: Resolver<Maybe<ResolversTypes['StaffEdge']>, ParentType, ContextType>;
  studio?: Resolver<Maybe<ResolversTypes['StudioEdge']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaSubmissionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaSubmissionEdge'] = ResolversParentTypes['MediaSubmissionEdge']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  characterRole?: Resolver<Maybe<ResolversTypes['CharacterRole']>, ParentType, ContextType>;
  staffRole?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isMain?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
  characterSubmission?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
  voiceActor?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  voiceActorSubmission?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  staffSubmission?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  studio?: Resolver<Maybe<ResolversTypes['Studio']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MediaCharacterResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaCharacter'] = ResolversParentTypes['MediaCharacter']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['CharacterRole']>, ParentType, ContextType>;
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
  voiceActor?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterSubmissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CharacterSubmission'] = ResolversParentTypes['CharacterSubmission']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
  submission?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
  submitter?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['SubmissionStatus']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type StaffSubmissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaffSubmission'] = ResolversParentTypes['StaffSubmission']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  submission?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  submitter?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['SubmissionStatus']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RevisionHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['RevisionHistory'] = ResolversParentTypes['RevisionHistory']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  action?: Resolver<Maybe<ResolversTypes['RevisionHistoryAction']>, ParentType, ContextType>;
  changes?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>;
  staff?: Resolver<Maybe<ResolversTypes['Staff']>, ParentType, ContextType>;
  studio?: Resolver<Maybe<ResolversTypes['Studio']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['Report'] = ResolversParentTypes['Report']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reporter?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  reported?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ModActionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ModAction'] = ResolversParentTypes['ModAction']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  mod?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ModActionType']>, ParentType, ContextType>;
  objectId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  objectType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterSubmissionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CharacterSubmissionConnection'] = ResolversParentTypes['CharacterSubmissionConnection']> = {
  edges?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['CharacterSubmissionEdge']>>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['CharacterSubmission']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CharacterSubmissionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CharacterSubmissionEdge'] = ResolversParentTypes['CharacterSubmissionEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['CharacterSubmission']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['CharacterRole']>, ParentType, ContextType>;
  voiceActors?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['Staff']>>>, ParentType, ContextType>;
  submittedVoiceActors?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['StaffSubmission']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserModDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserModData'] = ResolversParentTypes['UserModData']> = {
  alts?: Resolver<Maybe<ReadonlyArray<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  bans?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  ip?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  counts?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAvatar?: UserAvatarResolvers<ContextType>;
  Json?: GraphQLScalarType;
  UserOptions?: UserOptionsResolvers<ContextType>;
  NotificationOption?: NotificationOptionResolvers<ContextType>;
  MediaListOptions?: MediaListOptionsResolvers<ContextType>;
  MediaListTypeOptions?: MediaListTypeOptionsResolvers<ContextType>;
  Favourites?: FavouritesResolvers<ContextType>;
  MediaConnection?: MediaConnectionResolvers<ContextType>;
  MediaEdge?: MediaEdgeResolvers<ContextType>;
  Media?: MediaResolvers<ContextType>;
  MediaTitle?: MediaTitleResolvers<ContextType>;
  FuzzyDate?: FuzzyDateResolvers<ContextType>;
  CountryCode?: GraphQLScalarType;
  MediaTrailer?: MediaTrailerResolvers<ContextType>;
  MediaCoverImage?: MediaCoverImageResolvers<ContextType>;
  MediaTag?: MediaTagResolvers<ContextType>;
  CharacterConnection?: CharacterConnectionResolvers<ContextType>;
  CharacterEdge?: CharacterEdgeResolvers<ContextType>;
  Character?: CharacterResolvers<ContextType>;
  CharacterName?: CharacterNameResolvers<ContextType>;
  CharacterImage?: CharacterImageResolvers<ContextType>;
  Staff?: StaffResolvers<ContextType>;
  StaffName?: StaffNameResolvers<ContextType>;
  StaffImage?: StaffImageResolvers<ContextType>;
  StaffConnection?: StaffConnectionResolvers<ContextType>;
  StaffEdge?: StaffEdgeResolvers<ContextType>;
  StudioConnection?: StudioConnectionResolvers<ContextType>;
  StudioEdge?: StudioEdgeResolvers<ContextType>;
  Studio?: StudioResolvers<ContextType>;
  AiringSchedule?: AiringScheduleResolvers<ContextType>;
  AiringScheduleConnection?: AiringScheduleConnectionResolvers<ContextType>;
  AiringScheduleEdge?: AiringScheduleEdgeResolvers<ContextType>;
  MediaTrendConnection?: MediaTrendConnectionResolvers<ContextType>;
  MediaTrendEdge?: MediaTrendEdgeResolvers<ContextType>;
  MediaTrend?: MediaTrendResolvers<ContextType>;
  MediaExternalLink?: MediaExternalLinkResolvers<ContextType>;
  MediaStreamingEpisode?: MediaStreamingEpisodeResolvers<ContextType>;
  MediaRank?: MediaRankResolvers<ContextType>;
  MediaList?: MediaListResolvers<ContextType>;
  ReviewConnection?: ReviewConnectionResolvers<ContextType>;
  ReviewEdge?: ReviewEdgeResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  RecommendationConnection?: RecommendationConnectionResolvers<ContextType>;
  RecommendationEdge?: RecommendationEdgeResolvers<ContextType>;
  Recommendation?: RecommendationResolvers<ContextType>;
  MediaStats?: MediaStatsResolvers<ContextType>;
  ScoreDistribution?: ScoreDistributionResolvers<ContextType>;
  StatusDistribution?: StatusDistributionResolvers<ContextType>;
  AiringProgression?: AiringProgressionResolvers<ContextType>;
  UserStatisticTypes?: UserStatisticTypesResolvers<ContextType>;
  UserStatistics?: UserStatisticsResolvers<ContextType>;
  UserFormatStatistic?: UserFormatStatisticResolvers<ContextType>;
  UserStatusStatistic?: UserStatusStatisticResolvers<ContextType>;
  UserScoreStatistic?: UserScoreStatisticResolvers<ContextType>;
  UserLengthStatistic?: UserLengthStatisticResolvers<ContextType>;
  UserReleaseYearStatistic?: UserReleaseYearStatisticResolvers<ContextType>;
  UserStartYearStatistic?: UserStartYearStatisticResolvers<ContextType>;
  UserGenreStatistic?: UserGenreStatisticResolvers<ContextType>;
  UserTagStatistic?: UserTagStatisticResolvers<ContextType>;
  UserCountryStatistic?: UserCountryStatisticResolvers<ContextType>;
  UserVoiceActorStatistic?: UserVoiceActorStatisticResolvers<ContextType>;
  UserStaffStatistic?: UserStaffStatisticResolvers<ContextType>;
  UserStudioStatistic?: UserStudioStatisticResolvers<ContextType>;
  UserStats?: UserStatsResolvers<ContextType>;
  UserActivityHistory?: UserActivityHistoryResolvers<ContextType>;
  ListScoreStats?: ListScoreStatsResolvers<ContextType>;
  GenreStats?: GenreStatsResolvers<ContextType>;
  TagStats?: TagStatsResolvers<ContextType>;
  StaffStats?: StaffStatsResolvers<ContextType>;
  StudioStats?: StudioStatsResolvers<ContextType>;
  YearStats?: YearStatsResolvers<ContextType>;
  FormatStats?: FormatStatsResolvers<ContextType>;
  FuzzyDateInt?: GraphQLScalarType;
  NotificationUnion?: NotificationUnionResolvers;
  AiringNotification?: AiringNotificationResolvers<ContextType>;
  FollowingNotification?: FollowingNotificationResolvers<ContextType>;
  ActivityMessageNotification?: ActivityMessageNotificationResolvers<ContextType>;
  MessageActivity?: MessageActivityResolvers<ContextType>;
  ActivityReply?: ActivityReplyResolvers<ContextType>;
  ActivityMentionNotification?: ActivityMentionNotificationResolvers<ContextType>;
  ActivityUnion?: ActivityUnionResolvers;
  TextActivity?: TextActivityResolvers<ContextType>;
  ListActivity?: ListActivityResolvers<ContextType>;
  ActivityReplyNotification?: ActivityReplyNotificationResolvers<ContextType>;
  ActivityReplySubscribedNotification?: ActivityReplySubscribedNotificationResolvers<ContextType>;
  ActivityLikeNotification?: ActivityLikeNotificationResolvers<ContextType>;
  ActivityReplyLikeNotification?: ActivityReplyLikeNotificationResolvers<ContextType>;
  ThreadCommentMentionNotification?: ThreadCommentMentionNotificationResolvers<ContextType>;
  Thread?: ThreadResolvers<ContextType>;
  ThreadCategory?: ThreadCategoryResolvers<ContextType>;
  ThreadComment?: ThreadCommentResolvers<ContextType>;
  ThreadCommentReplyNotification?: ThreadCommentReplyNotificationResolvers<ContextType>;
  ThreadCommentSubscribedNotification?: ThreadCommentSubscribedNotificationResolvers<ContextType>;
  ThreadCommentLikeNotification?: ThreadCommentLikeNotificationResolvers<ContextType>;
  ThreadLikeNotification?: ThreadLikeNotificationResolvers<ContextType>;
  RelatedMediaAdditionNotification?: RelatedMediaAdditionNotificationResolvers<ContextType>;
  MediaListCollection?: MediaListCollectionResolvers<ContextType>;
  MediaListGroup?: MediaListGroupResolvers<ContextType>;
  ParsedMarkdown?: ParsedMarkdownResolvers<ContextType>;
  AniChartUser?: AniChartUserResolvers<ContextType>;
  SiteStatistics?: SiteStatisticsResolvers<ContextType>;
  SiteTrendConnection?: SiteTrendConnectionResolvers<ContextType>;
  SiteTrendEdge?: SiteTrendEdgeResolvers<ContextType>;
  SiteTrend?: SiteTrendResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Deleted?: DeletedResolvers<ContextType>;
  LikeableUnion?: LikeableUnionResolvers;
  InternalPage?: InternalPageResolvers<ContextType>;
  MediaSubmission?: MediaSubmissionResolvers<ContextType>;
  MediaSubmissionComparison?: MediaSubmissionComparisonResolvers<ContextType>;
  MediaSubmissionEdge?: MediaSubmissionEdgeResolvers<ContextType>;
  MediaCharacter?: MediaCharacterResolvers<ContextType>;
  CharacterSubmission?: CharacterSubmissionResolvers<ContextType>;
  StaffSubmission?: StaffSubmissionResolvers<ContextType>;
  RevisionHistory?: RevisionHistoryResolvers<ContextType>;
  Report?: ReportResolvers<ContextType>;
  ModAction?: ModActionResolvers<ContextType>;
  CharacterSubmissionConnection?: CharacterSubmissionConnectionResolvers<ContextType>;
  CharacterSubmissionEdge?: CharacterSubmissionEdgeResolvers<ContextType>;
  UserModData?: UserModDataResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
