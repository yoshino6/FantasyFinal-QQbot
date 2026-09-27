export type ActorContext = {
  provider: 'qq';
  subject: string;
  displayName?: string;
};

export type ConversationContext = {
  scope: 'private' | 'group' | 'channel';
  id: string;
  botId?: string;
};

export type CoreCommandRequest = {
  requestId: string;
  actor: ActorContext;
  conversation?: ConversationContext;
  command: string;
  source: 'message' | 'interaction' | 'system';
  sentAt: string;
};

export type CoreMessage = {
  kind: 'text' | 'markdown' | 'image';
  text?: string;
  /** server Core API 传来的原始 Alemon Format.value。 */
  format?: Array<{ type?: string; value?: unknown; options?: Record<string, unknown> }>;
  /** 没有结构化 Format 时的 Markdown 回退正文。 */
  markdown?: string;
  url?: string;
  buttons?: Array<{ label: string; command: string; execution?: 'manual' }>;
  mentionActor?: boolean;
};

export type CoreCommandResponse = {
  ok: boolean;
  requestId: string;
  messages: CoreMessage[];
  retryable?: boolean;
  error?: { code: string; message: string };
};

export type NotificationLease = {
  id: string;
  scope: 'private' | 'group' | 'channel';
  targetId: string;
  botId?: string;
  payload: CoreMessage[];
  leaseUntil?: string;
};
